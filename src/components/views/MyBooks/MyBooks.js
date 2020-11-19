import React,{Fragment} from 'react';
import {Link} from 'react-router-dom'
//components
import Header from '../../partials/Header/Header'
import BookCard from './BookCard'
 
const MyBooks = () => {
 
  return (
    <Fragment>
      <Header/>
      <main className="container card pt-3 pb-3 mt-4">
          <div className="buttons-section  d-flex justify-content-end">
              <a href="" className="btn btn-danger mr-2">
                  ELIMINAR EN MASA
              </a>
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
                    <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                    <li className="page-item active"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
          </div>
      </main>
    </Fragment>
    
  )
}
 
export default MyBooks;