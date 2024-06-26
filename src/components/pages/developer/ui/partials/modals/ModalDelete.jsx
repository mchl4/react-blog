import React from 'react'
import ModalWrapper from './ModalWrapper'
import { LiaTimesSolid, LiaTrashAltSolid } from 'react-icons/lia'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { StoreContext } from '../../../../../../store/StoreContext'
import { setIsDelete, setMessage, setSuccess } from '../../../../../../store/StoreAction'
import { queryData } from '../../../../../helpers/queryData'


const ModalDelete = ({position,endpoint,queryKey}) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const handleClose = () => dispatch(setIsDelete(false))


  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (values) => queryData(endpoint, "delete", values),
    onSuccess: (data) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: [queryKey] });

      if (data.success) {
       dispatch (setIsDelete(false));
       dispatch (setSuccess(true))
       dispatch (setMessage('Record Successfully Deleted'))
      } else {
        setIsError(true)
        setMessage('Delete failed!')
      }
      
    },
  });

  const handleDelete = async () => {
    mutation.mutate();
  };

    return (
        <ModalWrapper position={position}>
            <div className="modal-main max-w-[400px] w-full">
          <div className="modal-header bg-alert text-white flex justify-between items-center p-3 rounded-t-md">
            <h4 className='mb-0 text-white'>Delete</h4>
            <button onClick={handleClose}><LiaTimesSolid/></button>
          </div>
          <div className="modal-body p-4 rounded-b-md bg-white">
            <div className='flex gap-4 items-center '>
                <LiaTrashAltSolid className='text-4xl text-alert mb-3'/>
                <div>
                    <h2 className='mb-2 text-accent'>Removing Record</h2>
                    <p className='mb-5 text-accent'>Are you sure you want to trash this record?</p>
                </div>
              </div>
              <div className='flex justify-end gap-2  '>
                <button className='btn btn--alert btn-form w-1/4' onClick={handleDelete}>Delete</button>
                <button className='btn btn--cancel btn-form w-1/4'onClick={handleClose}>Cancel</button>
              </div>
          </div>
        </div>
        </ModalWrapper>
      )
    }

export default ModalDelete