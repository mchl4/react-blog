import React from 'react'
import Logo from '../../../svg/Logo'
import { FaCheck } from 'react-icons/fa'
import { StoreContext } from '../../../../store/StoreContext'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../helpers/queryData'
import { InputText } from '../../../helpers/FormInputs'
import ModalError from '../../../partials/modals/ModalError'
import { setError, setMessage } from '../../../../store/StoreAction'
import SpinnerButton from '../../../partials/spinners/SpinnerButton'


const ForgotPasswrod = () => {
    const {store, dispatch} = React.useContext(StoreContext)
    const [verifySuccess, setVerifySuccess] = React.useState(false);

    const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(`/v1/user/reset`, "post", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["user"] });
      // show error box
      if (!data.success) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      } else {
        setVerifySuccess(true);
      }
    },
  });

    const initVal = { item :""};
    const yupSchema = Yup.object({
        item: Yup.string()
        .required("Required")
        .email('Invalid Email'),
    });

  return (
        <div className="flex justify-center items-center h-screen w-full ">
        <div className='max-w-[400px] w-full p-6 py-6 bg-secondary rounded-xl'>
            <Logo/>

            {verifySuccess ? (
                  <div className='text-center'>
                  <FaCheck className=' text-accent block mx-auto my-5 text-4xl'/>
                  <h3>Reset Email Sent</h3>
                  <p className='text-balance'>Please check your email to reset the password instruction</p>
              </div>
              

            ) : (
            <>
             <h2 className='mt-5 text-primary'>Forgot Password</h2>
            <Formik
                    initialValues={initVal}
                    validationSchema={yupSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                    mutation.mutate(values);
                    }}
                >
                    {(props) => {
                    return (
                <Form className="w-full mt-5">

                <div className="input-wrap text-primary mb-5">
                    <InputText
                    label = "Registered Email"
                    name="item"
                    type="email"
                    />
                </div>

                
                <button className='btn btn--primary  w-full p-3 justify-center' type='submit'>{mutation.isPending ? <SpinnerButton/> : "Reset Password" }</button>
                <button className='btn btn--cancel w-full p-3 justify-center mt-3'>Return</button>
        
                </Form>
                    );
                    }}
                </Formik>
          </>
        )}
    </div>
    {store.error && <ModalError position={"center"}/>}
    </div>

  )
}

export default ForgotPasswrod