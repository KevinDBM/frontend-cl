import React,{Fragment,useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom'
//components
import Header from '../../partials/Header/Header'
import BookCard from './BookCard'
import Pagination from '../../commons/Pagination/Pagination'
import {printErrorAlert} from '../../../utils/printAlerts'
import {AppContext} from '../../../AppContext'
import {getMyBooks} from '../../../services/book'
 
const MyBooks = (props) => {
  const [generalContext,setGeneralContext] = useContext(AppContext)
  const [books,setBooks] = useState(null)
  const [pages,setPages] = useState(null)
  const [currentPage,setCurrentPage] = useState(1)

  const getBooks = (page=1) => {
    getMyBooks(4,page)
    .then(response => {
      setPages(response.data.pagination.pages)
      setCurrentPage(response.data.pagination.currentPage)
      setBooks(response.data.books)
    })
    .catch(error => {
      printErrorAlert(generalContext,setGeneralContext,error)
    })
  }

  const handleChangePage = (numberPage) => {
    getBooks(numberPage)
  }

  useEffect(() => {
    getBooks()
  },[props.history])

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
              {books && books.length && (
                books.map(book => 
                  <div className="col-12 col-sm-3 mb-4" key={book.id}>
                    <BookCard book={book}/>
                  </div>
                )
              )}
              {books && books.length && (
                <Pagination pages={pages} currentPage={currentPage} onChangePage={handleChangePage}/>
              )}
              
          </div>
      </main>
    </Fragment>
    
  )
}
 
export default MyBooks;