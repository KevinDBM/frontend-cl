import React,{Fragment,useState,useEffect,useContext} from 'react';
import {Link} from 'react-router-dom'
//components
import Header from '../../partials/Header/Header'
import BookCard from './BookCard'
import Pagination from '../../commons/Pagination/Pagination'
import {printErrorAlert,printSingleErrorAlert,printSuccessAlert} from '../../../utils/printAlerts'
import {AppContext} from '../../../AppContext'
import {getMyBooks,deleteMultipleBooks} from '../../../services/book'
 
const MyBooks = (props) => {
  const [generalContext,setGeneralContext] = useContext(AppContext)
  const [books,setBooks] = useState(null)
  const [pages,setPages] = useState(null)
  const [currentPage,setCurrentPage] = useState(1)
  const [selectedBooks,setSelectedBooks] = useState([])

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

  const handleDeleteBook = () => {
    handleChangePage(1)
  }

  const handleSelectedBook = (selectBook,selected) => {
    const indexBook = selectedBooks.map(book => book.id).indexOf(selectBook.id);
    const prevSelectedBooks = selectedBooks;
    
    if(selected && indexBook === -1){
      prevSelectedBooks.push(selectBook)
    }

    if(!selected && indexBook !== -1){
      prevSelectedBooks.splice(indexBook,1)
    }

    setSelectedBooks(prevSelectedBooks)
    console.log('prev selected books',prevSelectedBooks)
  }

  const handleDeleteMultipleBooks = () => {
    if(!selectedBooks.length){
      printSingleErrorAlert(generalContext,setGeneralContext,'Debe elegir al menos un libro para eliminar')
    }

    deleteMultipleBooks(selectedBooks.map(book => book.id))
    .then(response => {
      handleChangePage(1)
      printSuccessAlert(generalContext,setGeneralContext,response)
    })
    .catch(error => {
      printErrorAlert(generalContext,setGeneralContext,error)
    })
  }

  useEffect(() => {
    getBooks()
  },[props.history])

  return (
    <Fragment>
      <Header/>
      <main className="container card pt-3 pb-3 mt-4">
          <div className="buttons-section  d-flex justify-content-end">
              <button className="btn btn-danger mr-2" onClick={handleDeleteMultipleBooks}>
                  ELIMINAR EN MASA
              </button>
              <Link to="/create-book" className="btn btn-primary">
                AGREGAR
              </Link>
          </div>
          <div className="row container-libros mt-4">
              {books && books.length && (
                books.map(book => 
                  <div className="col-12 col-sm-3 mb-4" key={book.id}>
                    <BookCard 
                      book={book} 
                      onDeleteBook={handleDeleteBook}
                      onSelectedBook={handleSelectedBook}
                    />
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