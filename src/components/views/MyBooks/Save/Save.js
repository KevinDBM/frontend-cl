import React,{Fragment,useEffect,useState,useContext} from 'react';
import {Formik,Form} from 'formik';

//schema
import createBookSchema from '../../../../schemas/createBookSchema'

//components
import Header from '../../../partials/Header/Header'
import InputWithErrors from '../../../commons/InputWithErrors/InputWithErrors'
import SelectWithErrors from '../../../commons/SelectWithErrors/SelectWithErrors'
import './save.css'

import {AppContext} from '../../../../AppContext'
import {printErrorAlert,printSuccessAlert} from '../../../../utils/printAlerts'

//services
import {getAuthors} from '../../../../services/author'
import {createBook,updateBook,getBook} from '../../../../services/book'
 
const CreateMyBook = (props) => {
  const [authors,setAuthors] = useState(null)
  const [generalContext,setGeneralContext] = useContext(AppContext)
  const [book,setBook] = useState(null)
  const bookId = props.match.params.bookId;
  
  const sendCreateBookRequest = (values) => {
    createBook(values.title,values.isbn,values.author,values.image,values.description)
    .then(response => {
      console.log('ok',response)
      printSuccessAlert(generalContext,setGeneralContext,response)
    })
    .catch(error => {
      printErrorAlert(generalContext,setGeneralContext,error)
    })
  }

  const sendUpdateRequest = (values) => {
    updateBook(bookId,values.title,values.isbn,values.author,values.image,values.description)
    .then(response => {
      printSuccessAlert(generalContext,setGeneralContext,response)
    })
    .catch(error => {
      printErrorAlert(generalContext,setGeneralContext,error)
    })
  }

  const handleGetAuthors = () => {
    getAuthors()
    .then(response => {
      setAuthors(response.data.authors)
    })
    .catch(error => {
      printErrorAlert(generalContext,setGeneralContext,error)
    })
  }

  const handleGetBook = (bookId) =>{
    getBook(bookId)
    .then(response => {
      setBook(response.data.book)
    })
    .catch(error => {
      printErrorAlert(generalContext,setGeneralContext,error)
    })
  } 

  useEffect(() => {
    handleGetAuthors()
    if(bookId){
      handleGetBook(bookId)
    }
  },[props.history])
 
  return (
    ((bookId && book && authors) || !bookId) && (
      <Fragment>
        <Header/>
        <main className="container card pt-3 pb-3 mt-4">
          <Formik
            initialValues={{
              title : book ? book.title : '',
              isbn : book ? book.isbn : '',
              description : book && book.description ? book.description : '',
              author : book ? book.author.id : '',
              image : book ? book.image : ''
            }}
            validationSchema={createBookSchema}
            onSubmit={(values) => {
              if(bookId){
                sendUpdateRequest(values)
              }
              else{
                sendCreateBookRequest(values)
              }
            }}
          >
            {({ errors,values }) => (
              <Form>
          <div className="buttons-section  d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                GUARDAR
              </button>
            </div>
          <section className="row">
            <figure className="col-12 col-md-4">
                <div className="img-thumbnail text-center mb-3 preview-img-thumbnail">
                    {values.image && values.image.trim() !== '' ? (
                      <img src={values.image} alt="Imagen del producto"/>
                    ) : (
                      <i className="fa fa-picture-o icon-image-libro" aria-hidden="true"></i>
                    )}
                </div>
                <InputWithErrors 
                  id="image"
                  label="Imagen"
                  errors={errors}
                  name="image"
                />
            </figure>
            <div className="col-12 col-md-8">
   
                  <InputWithErrors 
                    id="title"
                    label="Título"
                    errors={errors}
                    name="title"
                  />
                  <InputWithErrors 
                    id="isbn"
                    label="ISBN"
                    errors={errors}
                    name="isbn"
                  />
                  <InputWithErrors 
                    id="description"
                    label="Descripción"
                    errors={errors}
                    name="description"
                    component="textarea"
                  />
                  {
                    authors && authors.length && (
                      <SelectWithErrors 
                        name="author"
                        label="Autor"
                        options={authors}
                        keyValue='id'
                        keyLabel='name'
                        errors={errors}
                        noSelectedValue={0}
                      />
                    )
                  }        
            </div>
          </section>
          </Form>
          )}
          </Formik>
        </main>
        </Fragment>         
      )
  )
}
 
export default CreateMyBook;