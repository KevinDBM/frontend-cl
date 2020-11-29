import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
//components
import Header from '../../partials/Header/Header'
import BookCard from './BookCard'

//
import instanceProxyBase from '../../../services/proxyBase'
 
const MyBooks = () => {
  instanceProxyBase().get('/test')
  .then(response => console.log('response is',response))
  .catch(error => console.log('error response',error.response))

  return (
    <Fragment>
      <Header/>
      <main className="container card pt-3 pb-3 mt-4">
          <div className="buttons-section  d-flex justify-content-end">
              <Link to="/" className="btn btn-danger mr-2">
                  ELIMINAR EN MASA
              </Link>
              <Link to="/create-book" className="btn btn-primary">
                AGREGAR
              </Link>
          </div>
          <div className="row container-libros mt-4">
              
                {
                  [0,1,2,3].map(index => 
                      <div className="col-12 col-sm-3 mb-4" key={index}>
                      <BookCard id={index}/>
                      </div>
                  )
                }
              <nav aria-label="Page navigation example" className="col-12 d-flex justify-content-center">
                  <ul className="pagination">
                    <li className="page-item disabled"><Link className="page-link" to="/">Previous</Link></li>
                    <li className="page-item active"><Link className="page-link" to="/">1</Link></li>
                    <li className="page-item"><Link className="page-link" to="/">2</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                    <li className="page-item"><Link className="page-link" to="#">Next</Link></li>
                  </ul>
                </nav>
          </div>
      </main>
    </Fragment>
    
  )
}
 
export default MyBooks;