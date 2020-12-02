import React,{useContext} from 'react'
import {AppContext} from '../../../AppContext'

const ErrorToast = (props) => {
    const [generalContext,setGeneralContext] = useContext(AppContext)

    const closeToast = () => {
        setGeneralContext({
            ...generalContext,
            showErrorToast : false,
            errorMessageToast : ''
        })
    }

    return (
        <div {...props} className={`bg-danger text-light toast fade ${generalContext.showErrorToast && 'show'}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header bg-danger text-light">
                {/* <img src="..." className="rounded mr-2" alt="..." /> */}
                <strong className="mr-auto">Error</strong>
                <small></small>
                <button type="button" className="ml-2 mb-1 close" onClick={closeToast} aria-label="Close">
                <span aria-hidden="true" className="text-light">&times;</span>
                </button>
            </div>
            <div className="toast-body">
                {generalContext.errorMessageToast}
            </div>
        </div>
        
    )
}

export default ErrorToast;