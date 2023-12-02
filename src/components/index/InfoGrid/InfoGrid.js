import styles from './InfoGrid.module.css';
import Image from "next/image";

export default function InfoGrid() {
    const infoGridItems = [
        {
            title: "Aidez vos collaborateurs à se restaurer",
            buttonText: "Créez un compte professionnel",
            image: "/assets/images/88d55f7112efe55f.webp",
            url: "/"
        },
        {
            title: "Les plats de vos restaurants préférés, livrés chez vous",
            buttonText: "Ajoutez votre restaurant",
            image: "/assets/images/711d51ca1b458931.webp",
            url: "/"
        },
        {
            title: "Livrez avec Hubert Eats",
            buttonText: "Devenez coursier-partenaire",
            image: "/assets/images/16522a701585873b.webp",
            url: "/"
        }
    ];

    return (
        <div className={styles.infoGrid}>
            {infoGridItems.map((item, index) => (
                <a className={styles.infoGridItem} key={index} href={item.url}>
                    <div className={styles.infoGridItemImage}>
                        <Image src={item.image} alt={item.title} layout={"fill"} objectFit={"cover"} />
                    </div>
                    <h2>{item.title}</h2>
                    <span>{item.buttonText}</span>
                </a>
            ))}
        </div>
    )
}