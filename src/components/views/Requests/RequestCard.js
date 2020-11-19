import React from 'react'
import './requestCard.css'

const RequestCard = (props) => {
    return (
        <div className="container py-3">
            <div className="card pt-3 pb-3">
            <div className="row mx-0">
                <div className="col-4">
                    <div className="img-thumbnail text-center">
                        <i className="fa fa-picture-o icon-image-libro-th" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="col-8 pl-0">
                    <div className="card-block px-3">
                    <h4 className="card-title">1984</h4>
                    <p className="card-text">Pepito Pérez ofreción $6.000 por el libro</p>
                    <a href="/" className="btn btn-primary mr-2">
                        <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                    </a>
                    <a href="/" className="btn btn-danger">
                        <i className="fa fa-thumbs-o-down" aria-hidden="true"></i>
                    </a>
                    </div>
                </div>
        
                </div>
            </div>
        </div>
    )
}

export default RequestCard