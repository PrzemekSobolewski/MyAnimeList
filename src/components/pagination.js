import React from 'react';
import {FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight} from 'react-icons/fa';
import {useSelector} from 'react-redux';
const Pagination = (props) => {
    const animeList = useSelector(state => state.animeList);

    const goToNextPage = () => {
        props.setPage(props.page + 1);
    }
    const goToPrevPage = () => {
        props.setPage(props.page - 1);
    }
    
    return (
        <div className="pagination">
            <FaRegArrowAltCircleLeft className={props.page <= 1 ? "pagination__arrow inactive" : "pagination__arrow"} onClick={goToPrevPage} />
            <span className="pagination__page">{props.page}</span>
            <FaRegArrowAltCircleRight className={props.page >= animeList.last_page ? "pagination__arrow inactive" : "pagination__arrow"} onClick={goToNextPage}/>
        </div>
    )
}

export default Pagination;