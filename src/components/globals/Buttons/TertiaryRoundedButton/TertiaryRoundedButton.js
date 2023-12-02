import styles from './TertiaryRoundedButton.module.css';

export default function TertiaryRoundedButton({text, icon, link}) {
    return (
        <a href={link} className={styles.tertiaryRoundedButton}>
            {icon && <span className={styles.tertiaryRoundedButtonIcon}>{icon}</span>}
            <span className={styles.tertiaryRoundedButtonText}>{text}</span>
        </a>
    )
}