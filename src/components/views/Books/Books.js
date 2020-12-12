import React,{Fragment, useState,useContext,useEffect} from 'react';

//components
import Header from '../../partials/Header/Header'
import BookCard from './BookCard'
import ModalRequestBook from './ModalRequestBook'
import {AppContext} from '../../../AppContext'
import {printErrorAlert} from '../../../utils/printAlerts'
import Pagination from '../../commons/Pagination/Pagination'

//services
import {getAllBooks,getMyBooks} from '../../../services/book'
 
const Books = (props) => {
  const [listBooks,setListBooks] = useState([])
  const [myBooks,setMyBooks] = useState([])
  const [pages,setPages] = useState(null)
  const [currentPage,setCurrentPage] = useState(1)
  const [generalContext,setGeneralContext] = useContext(AppContext)

  const getListBooks = (page=1) => {
    getAllBooks(4,page)
    .then(response => {
      setPages(response.data.pagination.pages)
      setCurrentPage(response.data.pagination.currentPage)
      setListBooks(response.data.books)
    })
    .catch(error => {
      printErrorAlert(generalContext,setGeneralContext,error)
    })
  }

  const getOwnBooks = () => {
    getMyBooks(1000,1)
    .then(response => {
      setMyBooks(response.data.books)
    })
    .catch(error => {
      printErrorAlert(generalContext,setGeneralContext,error)
    })
  }

  const handleChangePage = (numberPage) => {
    getListBooks(numberPage)
  }

  useEffect(() => {
    getListBooks()
  },[props.history])

  return (
    <Fragment>
      <Header/>
      <main className="container card pt-3 pb-3 mt-4">
        <div className="row">
            <div className="col-12 offset-4 col-md-4">
                <form className="row">
                    <div className="form-group col-10 pr-0">
                        <input type="text" className="form-control" id="inputPassword2" placeholder="Buscar"/>
                    </div>
                    <div className="col-2 pl-0">
                        <button type="submit" className="btn btn-primary btn-block"><i className="fa fa-search" aria-hidden="true"></i></button>
                    </div>
                    </form>
            </div>
        </div>
        
        <div className="row container-libros mt-4">
        {listBooks && listBooks.length && (
            listBooks.map(book =>
                <div className="col-12 col-sm-6 col-md-3 mb-4" key={book.id}>
                    <BookCard book={book} handleChangeModalRequest={getOwnBooks} myBooks={myBooks}/>
                </div>
            )
        )}
        {listBooks && listBooks.length && (
            <Pagination pages={pages} currentPage={currentPage} onChangePage={handleChangePage}/>
        )}
        </div>
        </main>
    </Fragment>
    
  )
}
 
export default Books;