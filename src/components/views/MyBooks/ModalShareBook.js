import React from 'react'
import {Link,withRouter} from 'react-router-dom';

const ModalDeleteBook = (props) => {
    return (
        props.book && (
            <div className={`modal fade`} id="shareBookModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Compartir página</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    </div>
                    <div className="modal-body">
                        Compartir en
                    </div>
                    <div className="modal-footer justify-content-center">
                        <a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.origin}/books`} className="btn btn-primary mr-1" data-toggle="tooltip" data-placement="top" title="Editar libro">
                            <i className="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                </div>
            </div>
        )
    )
}

export default withRouter(ModalDeleteBook)