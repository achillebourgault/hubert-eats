import styles from './Modal.module.css';

export default function Modal({children, closeFn}) {
    return (
        <div className={styles.modalSection}>
            <div className={styles.modalWrapper}>
                <div className={styles.modalBg} onClick={closeFn}/>
                <div className={styles.modal}>
                    <div className={styles.modalClose} onClick={closeFn}>
                        <span>&times;</span>
                    </div>
                    <div className={styles.modalContent}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}