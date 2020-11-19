import React,{Fragment} from 'react'

//components
import Header from '../../partials/Header/Header'
import RequestCard from './RequestCard'

const Requests = (props) => {
    return (
        <Fragment>
            <Header />
            <main className="container card pt-3 pb-3 mt-4">
                <div className="row">
                    <div className="col-12 col-md-6">
                        {
                            [0,1,2].map(index => 
                                <RequestCard key={index} />
                            )
                        }          
                    </div>
                    <div className="col-12 col-md-6">
                        {
                            [3,4,5].map(index => 
                                <RequestCard key={index} />
                            )
                        } 
                    </div>
                </div>
                
                <nav aria-label="Page navigation example" className="col-12 d-flex justify-content-center">
                    <ul className="pagination">
                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                    </ul>
                </nav>
            </main>
        </Fragment>
    )
}

export default Requests;