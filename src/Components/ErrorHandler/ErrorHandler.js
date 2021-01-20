import React from 'react'
import aux from '../../hoc/Auxo'
import Modal from '../UI/Modal/Modal'


const ErrorHandler = (WrappedComp) => {
    return (props) => {
        return (
            <aux>
                <Modal>Something went wrong..</Modal>
            <WrappedComp {...props} />
            </aux>
        )
    }
}

export default ErrorHandler
