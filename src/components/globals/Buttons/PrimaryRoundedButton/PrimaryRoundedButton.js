import styles from './PrimaryRoundedButton.module.css';

export default function PrimaryRoundedButton({text, icon, link}) {
    return (
        <a href={link} className={styles.primaryRoundedButton}>
            {icon && <span className={styles.primaryRoundedButtonIcon}>{icon}</span>}
            <span className={styles.primaryRoundedButtonText}>{text}</span>
        </a>
    )
}