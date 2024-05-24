import React from 'react'

import { Link, useNavigate} from 'react-router-dom'

import { useMutation, useQueryClient } from '@tanstack/react-query'



import { InputText } from '../helpers/FormInputs'


import * as Yup from 'yup'
import { Form, Formik } from 'formik'

import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { StoreContext } from '../../store/StoreContext'
import useSystemLogin from '../custom-hook/useSystemLogin'
import { queryData } from '../helpers/queryData'
import { setCredentials, setError, setMessage } from '../../store/StoreAction'
import { setStorageRoute } from '../helpers/functions-general'
import SpinnerButton from '../pages/developer/ui/partials/spinners/SpinnerButton'
import ModalError from '../pages/developer/ui/partials/modals/ModalError'
import SpinnerWindow from '../pages/developer/ui/partials/spinners/SpinnerWindow'

const Login = () => {
    const {store, dispatch} = React.useContext(StoreContext);
    const [showPassword, setShowPassword] = React.useState(false);
    
    const navigation = useNavigate();
    const {loginLoading} = useSystemLogin()

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (values) =>
          queryData(`/v1/user/login`, "post", values),
        onSuccess: (data) => {
          // Invalidate and refetch
          queryClient.invalidateQueries({ queryKey: ["user"] });
          // show error box
          if (!data.success) {
            dispatch(setError(true));
            dispatch(setMessage(data.error));
          } else {
            if (store.isLogin) {
              delete data.data[0].user_password;
          
              dispatch(setCredentials(data.data[0]));
              setStorageRoute(data.data[1]);
              dispatch(setIsLogin(false));
              navigation('/post')
            }
          }
        },
      });

      const togglePassword = () => {
        setShowPassword(!showPassword);
      };
    
      const initVal = {
        user_email: "",
        password: "",
      };
    
      const yupSchema = Yup.object({
        user_email: Yup.string().required("Required").email("Invalid email"),
        password: Yup.string().required("Required"),
      });

  return (
    <>
    {loginLoading ? <SpinnerWindow/> : (
         <div className="flex justify-center items-center h-screen w-full ">
         <div className='max-w-[400px] w-full p-6 py-6 bg-secondary rounded-xl '>
             {/* <Logo/> */}
             <h2 className='text-primary mt-5'>Login</h2>
             <Formik
                 initialValues={initVal}
                 validationSchema={yupSchema}
                 onSubmit={async (values, { setSubmitting, resetForm }) => {
                   // mutate data
                   mutation.mutate(values);
                 }}
               >
                 {(props) => {
                   return (
                     <Form className='mt-5 text-primary'>
             
                     <div className="input-wrap">
                         <InputText
                         label="Email"
                         type="text"
                         name="user_email"
                         />
                     </div>
 
                     <div className="input-wrap">
                     <InputText
                           label="Password"
                           type={showPassword ? "text" : "password"}
                           name="password"
                           disabled={mutation.isPending}
                         />
                         {props.values.password && (
                           <span
                             className="absolute text-base translate-y-1/2 top-1/2 cursor-pointer bottom-1/2 right-2"
                             onClick={togglePassword}
                           >
                             {showPassword ? (
                               <FaEyeSlash className="fill-gray-400" />
                             ) : (
                               <FaEye className="fill-gray-400" />
                             )}
                           </span>
                         )}
                     </div>
 
                     <Link to="/forgot-password" className='block  text-right italic text-xs mb-5 hover:underline'>Forgot Password</Link>
                     <button className='btn btn--accent w-full justify-center p-3 text-secondary' type="submit">{mutation.isPending ? <SpinnerButton/> : " Sign In"}</button>
                     </Form>
                       );
                     }}
                     
                     </Formik>
         </div>
         {store.error && <ModalError position="center"/>}
         </div>


        )}
       
    </>


  )
}

export default Login