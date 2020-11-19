import React,{Fragment} from 'react';

//components
import Header from '../../partials/Header/Header'
import BookCard from './BookCard'
import ModalRequestBook from './ModalRequestBook'
 
const Books = () => {
 
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
            {
                [0,1,2,3].map(index => 
                    <div className="col-12 col-sm-6 col-md-3 mb-4" key={index}>
                        <BookCard id={index}/>
                    </div> 
                )
            } 
        </div>
        </main>
        <ModalRequestBook />
    </Fragment>
    
  )
}
 
export default Books;