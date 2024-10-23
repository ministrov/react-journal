import React from 'react';
import styles from './Modal.module.css';

export default function Modal({ children, open }) {
    if (!open) {
        return null;
    }
    return (
        <div className={styles['modal']}>
            {children}
        </div>
    )
}
