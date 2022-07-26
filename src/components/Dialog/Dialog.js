import React from 'react';
import './Dialog.scss';
import { AiFillCloseCircle } from 'react-icons/ai';
import { changeDialogStatus } from '../../store/dialogSlice';
import {useDispatch} from 'react-redux';

const Dialog = () => {
    const dispatch = useDispatch();

    const changeStatus = () => {
      dispatch(changeDialogStatus());
    }

    return (
        <div className="dialog">
            <div className="dialog-content">
                 <AiFillCloseCircle className='close-icon' onClick={changeStatus}/>
            </div>
        </div>
    )
}

export default Dialog;