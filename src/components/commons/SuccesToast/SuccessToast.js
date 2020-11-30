import React,{useContext} from 'react'
import {AppContext} from '../../../AppContext'

const SuccessToast = (props) => {
    const [generalContext,setGeneralContext] = useContext(AppContext)

    const closeToast = () => {
        setGeneralContext({
            ...generalContext,
            showSuccessToast : false,
            successMessageToast : ''
        })
    }

    return (
        <div {...props} className={`bg-success text-light toast fade ${generalContext.showSuccessToast && 'show'}`} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header bg-success text-light">
                {/* <img src="..." className="rounded mr-2" alt="..." /> */}
                <strong className="mr-auto">Éxito</strong>
                <small></small>
                <button type="button" className="ml-2 mb-1 close" onClick={closeToast} aria-label="Close">
                <span aria-hidden="true" className="text-light">&times;</span>
                </button>
            </div>
            <div className="toast-body">
                {generalContext.successMessageToast}
            </div>
        </div>
        
    )
}

export default SuccessToast;