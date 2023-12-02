import styles from './SecondaryButton.module.css';

export default function SecondaryButton({text, icon, link}) {
    return (
        <a href={link} className={styles.secondaryButton}>
            {icon && <span className={styles.secondaryButtonIcon}>{icon}</span>}
            <span className={styles.secondaryButtonText}>{text}</span>
        </a>
    )
}