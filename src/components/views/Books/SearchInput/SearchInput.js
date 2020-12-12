import React,{Fragment, useState,useContext} from 'react'
import {AppContext} from '../../../../AppContext'

//services
import {getBookSuggestions} from '../../../../services/book'

import {printErrorAlert} from '../../../../utils/printAlerts'

//styles
import './SearchInput.css'

const SearchInput = (props) => {
    const [valueSearch,setValueSearch] = useState('')
    const [generalContext,setGeneralContext] = useContext(AppContext)
    const [suggestions,setSuggestions] = useState(null)
    const [showSuggestionsContainer,setShowSuggestionsContainer] = useState(false)

    const getSuggestions = () => {
        getBookSuggestions(valueSearch)
        .then(response => {
            setSuggestions(response.data.suggestions)
            changeShowSuggestions(true)
        })
        .catch(error => {
            printErrorAlert(generalContext,setGeneralContext,error)
        })
    }

    const handleChangeInput = (event) => {
        const valueSearchTmp = event.target.value;
        setValueSearch(valueSearchTmp)
        if(valueSearchTmp.trim().length >= 3){
            getSuggestions()
        }
        else{
            setSuggestions(null)
        }
    }

    const changeShowSuggestions = (show) => {

        if(typeof show==='boolean' && show){
            setShowSuggestionsContainer(true)
        }
        else{
            setShowSuggestionsContainer(false)
        }
        
    }

    const handleFocusInput = () => {
        if(suggestions){
            changeShowSuggestions(true)
        }
    }

    const handleClickSuggestion = (bookTitle) => {
        setValueSearch(bookTitle);
        changeShowSuggestions(false);
        setSuggestions(null)
    }

    const handleClickButtonSearch = () => {
        props.onSearch(valueSearch)
    }

    return (
        <Fragment>
            <div className="col-12 row search-form__continer">
                <div className="form-group col-10 pr-0 mb-0">
                    <input type="text" className="form-control" id="inputPassword2" placeholder="Buscar" value={valueSearch} onChange={handleChangeInput} onBlurCapture={changeShowSuggestions} onFocusCapture={handleFocusInput} autoComplete="off"/>
                </div>
                <div className="col-2 pl-0">
                    <button type="submit" className="btn btn-primary btn-block" onClick={handleClickButtonSearch}><i className="fa fa-search" aria-hidden="true"></i></button>
                </div>
                <ul className={`search-form__suggestions-container shadow-sm fade ${showSuggestionsContainer ? 'show' : ''}`}>
                    {
                        suggestions && suggestions.length && (
                            suggestions.map(book => 
                                <li key={book.id} className="search-form__suggestion-item" onClick={() => handleClickSuggestion(book.title)}>
                                    {book.title}
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
            
        </Fragment>
    )
}

export default SearchInput;