import styles from './CityProximity.module.css'
import Image from "next/image";
import {FaMapMarkerAlt} from "react-icons/fa";

const cities = [
    "Amiens", "La Rochelle", "Mulhouse", "Reims",
    "Angers", "Lille", "Nantes", "Rennes",
    "Bordeaux", "Limoges", "Nice", "Rouen",
    "Clermond-Ferrand", "Lyon", "Orléans", "Strasbourg",
    "Dijon", "Marseille", "Paris", "Toulouse",
    "Grenoble", "Montpellier", "Perpignan", "Tours",
];

const countries = [
    "Afrique du Sud", "Espagne", "Mexique", "Salvador",
    "Allemagne", "États-Unis", "Nouvelle-Zélande", "Srí Lanka",
    "Australie", "France", "Panama", "Suède",
    "Belgique", "Guatemala", "Pays-Bas", "Suisse",
    "Canada", "Irlande", "Pologne", "Taïwan",
    "Chili", "Italie", "Portugal", "",
    "Costa Rica", "Japon", "République dominicaine", "",
    "Équateur", "Kenya", "Royaume-Uni", ""
];

export default function CityProximity() {
    return (
        <div className={styles.cityProximity}>
            <div className={styles.header}>
                <h1>Villes à proximité</h1>
                <a href="#" className={styles.headerLink}>Afficher toutes les villes (+ de 500)</a>
            </div>
            <div className={styles.cities}>
                <Image src={"/assets/images/map.png"} alt={"map"} layout={"fill"}/>
            </div>
            <div className={styles.mapList}>
                {cities.map((city, index) => (
                    <a href={"/"} key={index}>{city}</a>
                ))}
            </div>

            <div className={`${styles.header} ${styles.countries}`}>
                <h1>Hubert Eats à travers le monde</h1>
                <a href="#" className={styles.headerLink}>Tous les pays</a>
            </div>
            <div className={styles.mapList}>
                {countries.map((country, index) => (
                    <a href={"/"} key={index}>{country}</a>
                ))}
            </div>

            <center>
                Découvrez comment Hubert Eats référence et classe les offres des partenaires. <a href="#">En savoir plus</a>
            </center>
        </div>
    )
}