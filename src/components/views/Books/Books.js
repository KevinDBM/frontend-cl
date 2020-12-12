import React,{Fragment, useState,useContext,useEffect} from 'react';

//components
import Header from '../../partials/Header/Header'
import BookCard from './BookCard'
import ModalRequestBook from './ModalRequestBook'
import {AppContext} from '../../../AppContext'
import {printErrorAlert} from '../../../utils/printAlerts'
import Pagination from '../../commons/Pagination/Pagination'
import SearchInput from './SearchInput/SearchInput'

//services
import {getAllBooks,getMyBooks,bookFinder} from '../../../services/book'
import { number } from 'prop-types';
 
const Books = (props) => {
  const [listBooks,setListBooks] = useState([])
  const [myBooks,setMyBooks] = useState([])
  const [pages,setPages] = useState(null)
  const [currentPage,setCurrentPage] = useState(1)
  const [generalContext,setGeneralContext] = useContext(AppContext)
  const [termSearch,setTermSearch] = useState(null)

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
    if(termSearch){
      handleOnSearch(termSearch,number)
    }
    else{
      getListBooks(numberPage)
    }
    
  }

  const handleOnSearch = (termSearch,page) => {
    setTermSearch(termSearch)
    bookFinder(4,page,termSearch)
    .then(response => {
      setPages(response.data.pagination.pages)
      setCurrentPage(response.data.pagination.currentPage)
      setListBooks(response.data.books)
    })
    .catch(error => {
      printErrorAlert(generalContext,setGeneralContext,error)
    })
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
              <div className="row">
                <SearchInput onSearch={handleOnSearch}/>
              </div>
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