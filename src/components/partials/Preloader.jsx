import React from 'react';
import s from './Partials.module.css';

export default function Preloader() {
    return (
        <div className={`${s.spinner} spinner-border text-light`} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    );
}
