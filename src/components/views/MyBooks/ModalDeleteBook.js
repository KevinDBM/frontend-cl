import React,{useContext,createRef,useRef} from 'react'
import {deleteBook} from '../../../services/book'
import {printErrorAlert,printSuccessAlert} from '../../../utils/printAlerts'
import {AppContext} from '../../../AppContext'

const ModalDeleteBook = (props) => {
    const [generalContext,setGeneralContext] = useContext(AppContext)
    const closeModalButton  = useRef(null);

    const sendRequestDeleteBook = () => {      
        deleteBook(props.book.id)
        .then(response => {
            closeModalButton.current.click()
            printSuccessAlert(generalContext,setGeneralContext,response)
            props.onDeleteBook()
        })
        .catch(error => {
            closeModalButton.current.click()
            printErrorAlert(generalContext,setGeneralContext,error)
        })
    }

    return (
        props.book && (
            <div className={`modal fade`} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Confirmación eliminación</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" ref={closeModalButton}>&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        ¿Realmente desea eliminar el libro {props.book.title}?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" onClick={sendRequestDeleteBook}>Eliminar</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCELAR</button>
                    </div>
                </div>
                </div>
            </div>
        )
    )
}

export default ModalDeleteBook