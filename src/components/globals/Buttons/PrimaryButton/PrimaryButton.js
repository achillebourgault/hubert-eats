import styles from './PrimaryButton.module.css';

export default function PrimaryButton({text, icon, link}) {
    return (
        <a href={link} className={styles.primaryButton}>
            {icon && <span className={styles.primaryButtonIcon}>{icon}</span>}
            <span className={styles.primaryButtonText}>{text}</span>
        </a>
    )
}