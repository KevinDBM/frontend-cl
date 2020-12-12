import React, { useState,useContext,useRef } from 'react'

//services
import {addRequest} from '../../../services/bookRequest'

import {AppContext} from '../../../AppContext'

//utils
import {printSuccessAlert,printErrorAlert} from '../../../utils/printAlerts'

const ModalRequestBook = (props) => {
    const book = props.book;
    const [selectedBook,setSelectedBook] = useState(null);
    const [activeTab,setActiveTab] = useState('price')
    const [priceOffered,setPriceOffered] = useState('')
    const [generalContext,setGeneralContext] = useContext(AppContext)
    const closeModalButton  = useRef(null);

    const handleOnChangeSelectedBooks = (event,newBook) => {
        if(event.target.checked){
            setSelectedBook(newBook.id)
        }
        else{
            setSelectedBook(null)
        }
    }

    const handleChangePriceOffered = (event) => {
        setPriceOffered(event.target.value)
    }

    const handleTabClick = (newActiveTab) => {
        setActiveTab(newActiveTab)
    }

    const handleClickRequest = () => {
        let requestedBook = book.id,priceOfferedTmp,bookToBarter;
        if(activeTab === 'price'){
            priceOfferedTmp = priceOffered
        }
        else{
            bookToBarter = selectedBook;
        }

        addRequest(requestedBook,priceOfferedTmp,bookToBarter)
        .then(response => {
            closeModalButton.current.click()
            printSuccessAlert(generalContext,setGeneralContext,response)
          })
          .catch(error => {
              closeModalButton.current.click()
            printErrorAlert(generalContext,setGeneralContext,error)
          })
    }

    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
                <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ofrecer dinero por el libro proponer cambio</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" ref={closeModalButton}>&times;</span>
                </button>
                </div>
                <div className="modal-body">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#ofrecer-dinero" onClick={() => handleTabClick('price')} role="tab" aria-controls="home" aria-selected="true">Ofrecer dinero</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#solicitar-cambio" onClick={() => handleTabClick('book')} role="tab" aria-controls="profile" aria-selected="false">Solicitar cambio</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="ofrecer-dinero" role="tabpanel" aria-labelledby="home-tab">
                            <form>
                                <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Cantidad a ofrecer</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ej: 1000" value={priceOffered} onChange={handleChangePriceOffered}/>
                                </div>
                            </form>
                        </div>
                        <div className="tab-pane fade" id="solicitar-cambio" role="tabpanel" aria-labelledby="profile-tab">
                            <ul className="list-group list-group-flush overflow-auto lista-solicitar-libros">
                                {props.myBooks && props.myBooks.length && (
                                    props.myBooks.map(book => 
                                        <li className="list-group-item" key={book.id}>
                                            <label className="btn btn-secondary mb-0 mr-3">
                                                <input type="checkbox" onChange={(event) => handleOnChangeSelectedBooks(event,book)} checked={book.id === selectedBook}/>
                                            </label>{book.title}
                                        </li>    
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" onClick={handleClickRequest}>SOLICITAR</button>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCELAR</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ModalRequestBook