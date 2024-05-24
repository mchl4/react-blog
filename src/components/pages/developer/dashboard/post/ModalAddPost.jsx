import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import * as Yup from 'yup'
import {  useMutation, useQueryClient  } from '@tanstack/react-query'

import useUploadPhoto from '../../../../custom-hook/useUploadPhoto'
import { devBaseImgUrl } from '../../../../helpers/functions-general'
import ModalWrapper from '../../ui/partials/modals/ModalWrapper'
import { InputFileUpload, InputText, InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../ui/partials/spinners/SpinnerButton'
import { queryData } from '../../../../helpers/queryData'


const ModalAddPost = ({itemEdit, position}) => {
    const {store, dispatch} = React.useContext(StoreContext)
    const handleClose = () => dispatch(setIsAdd(false))

    const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
        `/v1/upload/photo`,
        dispatch
      );

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/post/${itemEdit.post_aid}` :`/v1/post`,
            itemEdit ? "put" : "post",
            values
        ),
   
        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["post"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        } else {
            dispatch(setError(true))
            dispatch(setMessage(data.error));
        }
        },
    });

    const initialVal = {
        post_title:itemEdit ? itemEdit.post_title : "",
        post_image:itemEdit ? itemEdit.post_image : "",
        post_author:itemEdit ? itemEdit.post_author : "",
        post_category:itemEdit ? itemEdit.post_category : "",
        post_article:itemEdit ? itemEdit.post_article : "",
        post_publish_date:itemEdit ? itemEdit.post_publish_date : ""
    }

    const yupSchema = Yup.object({
        post_title: Yup.string().required("Required"),
        post_author: Yup.string().required("Required"),
        post_category: Yup.string().required("Required"),
        post_article: Yup.string().required("Required"),
        post_publish_date: Yup.string().required("Required"),
    })

  return (
    <ModalWrapper position={position}>
    <div className="main-modal w-[900px] bg-content text-primary ">
              <div className="modal-header p-4 relative">
                  <h2>New Post</h2>
                  <button className='absolute top-[25px] right-4'onClick={handleClose} ><LiaTimesSolid/></button>
              </div>
              <div className="modal-body p-4">
                  <Formik
                      initialValues={initialVal}
                      validationSchema={yupSchema}
                      onSubmit={async (values) => {
                        uploadPhoto()
                        mutation.mutate({...values, 
                            post_image:
                            (itemEdit && itemEdit.post_image === "") || photo
                              ? photo === null
                                ? itemEdit.post_image
                                : photo.name
                              : values.post_image,})
                      }}
                  >
                    
                      {(props) => {
                          return (
                      <Form  className='flex flex-col'>
                        <div className='grow overflow-y-auto'>

                        <div className="input-wrap">
                                    <InputText
                                        label="Title"
                                        type="text"
                                        name="post_title"
                                    />
                                </div>

                            <div className='grid grid-cols-[1fr_2fr] gap-10'>
                            
                             <div className='left'>


                               <div className="input-wrap">
                                   <InputText
                                       label="Author"
                                       type="text"
                                       name="post_author"
                                   />
                               </div>

                               <div className="input-wrap">
                                   <InputText
                                       label="Category"
                                       type="text"
                                       name="post_category"
                                   />
                               </div>


                               <div className="input-wrap">
                                   <InputText
                                  label="Publish Date"
                                  type="date"
                                  name="post_publish_date"
                                   />
                               </div>
               

                      <div className="input-wrap">
                        {/* <FaUpload className="opacity-100 duration-200 group-hover:opacity-100 fill-dark/70 absolute top-0 right-0 bottom-0 left-0 min-w-[1.2rem] min-h-[1.2rem] max-w-[1.2rem] max-h-[1.2rem] m-auto cursor-pointer" /> */}
                    <InputFileUpload
                    label="Photo"
                    name="photo"
                    type="file"
                    id="myFile"
                    accept="image/*"
                    title="Upload photo"
                    onChange={(e) => handleChangePhoto(e)}
                    onDrop={(e) => handleChangePhoto(e)}
                    className="opacity-0 absolute right-0 bottom-0 left-0 m-auto cursor-pointer h-full"
                    />

                    {photo || (itemEdit && itemEdit.post_image !== "") ? (
                    <img
                    src={
                    photo
                      ? URL.createObjectURL(photo) // preview
                      : itemEdit.post_image // check db
                      ? devBaseImgUrl + "/" + itemEdit.post_image
                      : null
                    }
                    alt="Photo"
                    className="rounded-tr-md rounded-md h-[178px] max-h-[178px] w-full object-cover object-center m-auto"
                    />
                    ) : (
                    <span className="w-full min-h-[178px] flex items-center justify-center text-sm border border-dashed mb-2">
                    <span className="text-accent mr-1">Drag & Drop</span>{" "}
                    Photo here or{" "}
                    <span className="text-accent ml-1">Browse</span>
                    </span>
                    )}
                    
                    {(photo !== null ||
                    (itemEdit && itemEdit.post_image !== "")) && (
                    <span className="min-h-10 flex items-center justify-center text-sm">
                    <span className="text-accent mr-1">Drag & Drop</span>{" "}
                    photo here or{" "}
                    <span className="text-accent ml-1">Browse</span>
                    </span>
                    )}
                    
                    
                    
                    
                    
                    </div>

                            </div>

                            <div className='right'>

                            <div className="input-wrap">
                              <InputTextArea
                                  label="Article"
                                  type="text"
                                  name="post_article"
                                  className='h-[450px] resize-none'
                              />

                        </div>

                            </div>

                      
                          
                 
                            </div>         
                        </div>

                      <div className='form-action max-w-[400px] ml-auto w-full mt-5'>
                          <button className='btn btn-form btn--accent' type="submit"> {mutation.isPending ? <SpinnerButton/> : "Add" }</button>
                          <button className='btn btn-form btn--cancel' type="button" onClick={handleClose} >Cancel</button>
                      </div>

                  </Form>)}}
                  
                  </Formik>
              </div>
      </div>
  </ModalWrapper>

  )
}

export default ModalAddPost