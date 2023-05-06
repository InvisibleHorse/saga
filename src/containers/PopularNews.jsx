import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { GET_POPULAR_NEWS } from '../store/actions/news';
import s from '../components/Test.module.css';
import NewsList from '../components/Secondary/NewsList';
import { loadMorePopular } from '../store/actions/news';
import Preloader from '../components/partials/Preloader';

export default function PopularNews() {
    const { popularNews } = useSelector(store => store?.news || {});
    const { popularNewsError } = useSelector(store => store?.errors || {});
    const { isDataLoading } = useSelector(store => store?.loader || {});
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(5);

    useEffect(() => {
        dispatch(loadMorePopular());
    }, [dispatch, newsPerPage]);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const indexOfLastPost = currentPage * newsPerPage;
    const indexOfFirstPost = indexOfLastPost - newsPerPage;
    const currentNews = popularNews.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className={s.main}>
            {isDataLoading ?
                <Preloader /> : (
                    <NewsList
                        news={currentNews}
                        error={popularNewsError}
                        newsPerPage={newsPerPage}
                        totalPosts={popularNews.length}
                        paginate={paginate}
                        title="Popular News"
                    />
                )}
        </div>
    );
}
