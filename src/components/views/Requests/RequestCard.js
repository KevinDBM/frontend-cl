import React,{Fragment,useContext} from 'react'
import './requestCard.css'

import CurrencyFormat from 'react-currency-format';

import {bookRequestStatusEnum} from '../../../utils/enums'

import {updateStatusBookRequest} from '../../../services/bookRequest'

import {AppContext} from '../../../AppContext'

import {printErrorAlert,printSuccessAlert} from '../../../utils/printAlerts'

const RequestCard = (props) => {
    const bookRequest = props.bookRequest;
    const [generalContext,setGeneralContext] = useContext(AppContext)

    const handleSendUpdateStatusBookRequest = (newStatus) => {
        updateStatusBookRequest(bookRequest.id,newStatus)
        .then(response => {
            printSuccessAlert(generalContext,setGeneralContext,response)
            props.onChangeStatus()
        })
        .catch(error => {
            printErrorAlert(generalContext,setGeneralContext,error)
        })
    }
    
    const handleApproveRequest = () => {
        handleSendUpdateStatusBookRequest(bookRequestStatusEnum.Aprobada.name)
    }

    const handleDeclineRequest = () => {
        handleSendUpdateStatusBookRequest(bookRequestStatusEnum.Rechazada.name)
    }

    return (
        <div className="container py-3">
            <div className="card pt-3 pb-3">
            <div className="row mx-0">
                <div className="col-4">
                    <div className="img-thumbnail text-center">
                        <img src={bookRequest.requestedBook.image} alt={bookRequest.requestedBook.title} className="image-book-request"/>
                    </div>
                </div>
                <div className="col-8 pl-0">
                    <div className="card-block px-3">
                    <h4 className="card-title">
                        {bookRequest.requestedBook.title}
                    </h4>
                    <p className="card-text">
                        {
                            (
                                <Fragment>
                                    <b>{bookRequest.requestingUser.name}</b> {`ofreció `} 
                                    <b>
                                        {
                                            bookRequest.priceOffered ? 
                                            (
                                                <Fragment>
                                                    <CurrencyFormat displayType="text" value={bookRequest.priceOffered} thousandSeparator='.' decimalSeparator=',' prefix={'$'}/>
                                                </Fragment>
                                            ) :
                                            (
                                                <Fragment>
                                                    {` ${bookRequest.bookToBarter.title} `}
                                                </Fragment>
                                            )
                                        }
                                    </b>
                                    {` por el libro`}
                                </Fragment>
                            )
                        }
                    </p>
                    <button className="btn btn-primary mr-2" onClick={handleApproveRequest}>
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </button>
                    <button className="btn btn-danger" onClick={handleDeclineRequest}>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                    </button>
                    </div>
                </div>
        
                </div>
            </div>
        </div>
    )
}

export default RequestCard