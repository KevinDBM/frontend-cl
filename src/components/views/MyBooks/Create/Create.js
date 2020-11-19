import React,{Fragment} from 'react';

//components
import Header from '../../../partials/Header/Header'
import './create.css'
 
const CreateMyBook = () => {
 
  return (
    <Fragment>
      <Header/>
      <main className="container card pt-3 pb-3 mt-4">
          <div className="buttons-section  d-flex justify-content-end">
              <a href="/" className="btn btn-primary">
                  GUARDAR
              </a>
          </div>
        <section className="row">
          <figure className="col-12 col-md-4">
              <div className="img-thumbnail text-center mb-3">
                  <i className="fa fa-picture-o icon-image-libro" aria-hidden="true"></i>
              </div>
            <label href="" className="btn btn-primary btn-block">
              CARGAR IMAGEN
              <input type="file" className="d-none"/>
            </label>
          </figure>
          <div className="col-12 col-md-8">
              <form>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Título</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Titulo"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">ISBN</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="ISBN"/>
                  </div>
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Descripción</label>
                      <textarea className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Descripción"></textarea>
                  </div>
                  <div className="form-group">
                      <select className="custom-select mr-sm-2" id="inlineFormCustomSelect">
                          <option defaultValue value={null}>Autor</option>
                          <option value="1">Gabriel García Márquez</option>
                          <option value="2">George Orwell</option>
                        </select>
                  </div>
              </form>
          </div>
        </section>
      </main>
    </Fragment>
    
  )
}
 
export default CreateMyBook;