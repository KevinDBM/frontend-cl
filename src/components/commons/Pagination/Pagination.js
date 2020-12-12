import React,{Fragment} from 'react'

const Pagination = (props) => {
    const numberPages = props.pages;
    let pages = [];

    for(let i = 1;i<=numberPages;i++){
        pages.push(i)
    }

    const handleChangePage = (page) => {
        props.onChangePage(page)
    }

    const handleAddLessPage = (direction) => {
        const currentPage = parseInt(props.currentPage);

        if(direction === 'next') handleChangePage(currentPage+1)
        if(direction === 'prev') handleChangePage(props.currentPage-1)
    }

    return (
<Fragment>
    {
            numberPages > 1 && (
                <nav aria-label="Page navigation example" className="col-12 d-flex justify-content-center">
            <ul className="pagination">
                <li className={`page-item ${parseInt(props.currentPage) === 1 && ('disabled')}`}>
                    <button className="page-link" to="/" onClick={() => {handleAddLessPage('prev')}}>Previous</button>
                </li>
                {
                    pages.map(page => 
                        <li className={`page-item ${page===parseInt(props.currentPage) && ('active')}`} key={page}>
                            <button className="page-link" onClick={() => {handleChangePage(page)}}>
                                {page}
                            </button>
                        </li>
                    )
                }
                <li className={`page-item ${parseInt(props.currentPage) === numberPages && ('disabled')}`}>
                    <button className="page-link" to="/" onClick={() => {handleAddLessPage('next')}}>Next</button>
                </li>
            </ul>
        </nav>
            )
    }
</Fragment>
        
        
    )
}

export default Pagination;