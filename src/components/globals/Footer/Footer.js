import styles from './Footer.module.css';
import Image from "next/image";
import {FaFacebookF, FaInstagram, FaTwitter} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.footerTop}>
                <div className={styles.head}>
                    <span>Hubert <b>Eats</b></span>

                    <div className={styles.download}>
                        <Image
                            src={"/assets/images/dl-apple.svg"}
                            alt={"Télécharger sur l'App Store"}
                            width={125} height={40} />
                        <Image
                            src={"/assets/images/dl-google.png"}
                            alt={"Disponible sur Google Play"}
                            width={125} height={40} />
                    </div>
                </div>

                <div className={styles.body}>
                    <div className={styles.links}>
                        <a href={"/"}>Obtenir de l&apos;aide</a>
                        <a href={"/"}>Ajouter votre restaurant</a>
                        <a href={"/"}>Devenir coursier-partenaire</a>
                        <a href={"/"}>Créez un compte professionnel</a>
                        <a href={"/"}>Promotions</a>
                    </div>

                    <div className={styles.links}>
                        <a href={"/"}>Restaurants à proximité</a>
                        <a href={"/"}>Afficher toutes les villes</a>
                        <a href={"/"}>Tous les pays</a>
                        <a href={"/"}>Commandes à récuperer à proximité</a>
                        <a href={"/"}>À propos de Hubert Eats</a>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <div className={styles.bottomHead}>
                    <div className={styles.socials}>
                        <a href={"#"}><FaFacebookF size={20} /></a>
                        <a href={"#"}><FaTwitter size={20} /></a>
                        <a href={"#"}><FaInstagram size={20} /></a>
                    </div>
                    <div className={styles.legal}>
                        <a href={"/"}>Fonctionnement des sites et des applications Hubert Eats</a>
                        <a href={"/"}>Politique de confidentialité</a>
                        <a href={"/"}>Conditions</a>
                        <a href={"/"}>Tarifs</a>
                        <a href={"/"}>Ne vendez pas et ne partagez pas mes informations personnelles</a>
                    </div>
                </div>
                <div className={styles.bottomBody}>
                    <div>
                        <span>Ce site n&apos;est en aucun cas affilié à Uber Eats. Le développement de ce site est uniquement à but éducatif.</span>
                        <span>© {new Date().getFullYear()} Achille Bourgault</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}