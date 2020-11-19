import React from 'react'

const ModalDeleteBook = (props) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Confirmación eliminación</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                    ¿Realmente desea eliminar el libro?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger">Eliminar</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCELAR</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalDeleteBook