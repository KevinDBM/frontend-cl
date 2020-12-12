import React,{Fragment,useContext,useState,useEffect} from 'react'

//components
import Header from '../../partials/Header/Header'
import RequestCard from './RequestCard'
import Pagination from '../../commons/Pagination/Pagination'

import {AppContext} from '../../../AppContext'
import {printErrorAlert} from '../../../utils/printAlerts'
//services
import {getMyBookRequestList} from '../../../services/bookRequest'

const Requests = (props) => {
    const [bookRequestList,setBookRequestList] = useState([])
    const [pages,setPages] = useState(null)
    const [currentPage,setCurrentPage] = useState(1)
    const [generalContext,setGeneralContext] = useContext(AppContext)

    const handleChangePage = (numberPage) => {
        getBookRequestList(numberPage)
    }

    const getBookRequestList = (page) => {
        getMyBookRequestList(6,page)
        .then(response => {
            setPages(response.data.pagination.pages)
            setCurrentPage(response.data.pagination.currentPage)
            setBookRequestList(response.data.bookRequests)
          })
          .catch(error => {
            printErrorAlert(generalContext,setGeneralContext,error)
          })
    }

    useEffect(() => {
        getBookRequestList()
      },[props.history])

    return (
        <Fragment>
            <Header />
            <main className="container card pt-3 pb-3 mt-4">
                <div className="row">
                    {bookRequestList && bookRequestList.length && (
                        bookRequestList.map(bookRequest => 
                            <RequestCard key={bookRequest.id} bookRequest={bookRequest} />
                        )
                    )}
                    {bookRequestList && bookRequestList.length && (
                        <Pagination pages={pages} currentPage={currentPage} onChangePage={handleChangePage}/>
                    )}
                </div>
            </main>
        </Fragment>
    )
}

export default Requests;