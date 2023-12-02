import styles from './SecondaryRoundedButton.module.css';

export default function SecondaryRoundedButton({text, icon, link}) {
    return (
        <a href={link} className={styles.secondaryRoundedButton}>
            {icon && <span className={styles.secondaryRoundedButtonIcon}>{icon}</span>}
            <span className={styles.secondaryRoundedButtonText}>{text}</span>
        </a>
    )
}