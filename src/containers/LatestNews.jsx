import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMoreLatest } from '../store/actions/news';
import s from '../components/Test.module.css';
import NewsList from '../components/Secondary/NewsList';
import Preloader from '../components/partials/Preloader';

export default function LatestNews() {
    const latestNews = useSelector(store => store?.news?.latestNews || []);
    const { latestNewsError } = useSelector(store => store?.errors || {});
    const { isDataLoading } = useSelector(store => store?.loader || {});
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage] = useState(5);

    useEffect(() => {
        dispatch(loadMoreLatest());
    }, [dispatch, newsPerPage]);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const indexOfLastPost = currentPage * newsPerPage;
    const indexOfFirstPost = indexOfLastPost - newsPerPage;
    const currentNews = latestNews.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className={s.main}>
            {isDataLoading ?
                <Preloader /> : (
                    <NewsList
                        news={currentNews} newsPerPage={newsPerPage}
                        totalPosts={latestNews.length}
                        paginate={paginate} error={latestNewsError} title="Latest News"
                    />
                )}
        </div>
    );
}
