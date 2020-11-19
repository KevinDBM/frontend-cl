import React from 'react'

const ModalRequestBook = (props) => {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">¿Ofrecer dinero por el libro proponer cambio?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                </div>
                <div className="modal-body">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#ofrecer-dinero" role="tab" aria-controls="home" aria-selected="true">Ofrecer dinero</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#solicitar-cambio" role="tab" aria-controls="profile" aria-selected="false">Solicitar cambio</a>
                        </li>

                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="ofrecer-dinero" role="tabpanel" aria-labelledby="home-tab">
                            <form>
                                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Cantidad a ofrecer</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mínimo: $1.000" />
                                </div>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="solicitar-cambio" role="tabpanel" aria-labelledby="profile-tab">
                            <form className="row mt-2">
                                <div className="form-group col-10 pr-0">
                                <input type="text" className="form-control" id="search-book" placeholder="Buscar" />
                                </div>
                                <div className="col-2 pl-0">
                                    <button type="submit" className="btn btn-primary btn-block"><i className="fa fa-search" aria-hidden="true"></i>
                                
                                </button>
                                </div>
                            </form>
                            <ul className="list-group list-group-flush overflow-auto lista-solicitar-libros">
                                <li className="list-group-item">
                                    <label className="btn btn-secondary mb-0 mr-3">
                                        <input type="checkbox" />
                                    </label>Nombre del libro #1
                                </li>
                                <li className="list-group-item">
                                    <label className="btn btn-secondary mb-0 mr-3">
                                        <input type="checkbox" />
                                    </label>Nombre del libro #2
                                </li>
                                <li className="list-group-item">
                                    <label className="btn btn-secondary mb-0 mr-3">
                                        <input type="checkbox" />
                                    </label>Nombre del libro #3
                                </li>
                                <li className="list-group-item">
                                    <label className="btn btn-secondary mb-0 mr-3">
                                        <input type="checkbox" />
                                    </label>Nombre del libro #4
                                </li>
                                <li className="list-group-item">
                                    <label className="btn btn-secondary mb-0 mr-3">
                                        <input type="checkbox" />
                                    </label>Nombre del libro #5
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary">SOLICITAR</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCELAR</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalRequestBook