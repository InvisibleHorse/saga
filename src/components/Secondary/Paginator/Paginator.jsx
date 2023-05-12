import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import s from './Paginator.module.css';

function Pagination({ newsPerPage, totalPosts, paginate }) {
    const pageNumbers = [];
    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= Math.ceil(totalPosts / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <ul className={`${s.paginator} pagination`}>
                {pageNumbers.map(number => (
                    <li key={number} className="page - item">
                        <NavLink
                            onClick={() => paginate(number)}
                            to={`/latest-news/${number}`}
                            className={`${s.listElement} page-link`}
                        >
                            {number}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Pagination;

Pagination.propTypes = {
    paginate: PropTypes.func.isRequired,
    newsPerPage: PropTypes.number,
    totalPosts: PropTypes.number,
};
