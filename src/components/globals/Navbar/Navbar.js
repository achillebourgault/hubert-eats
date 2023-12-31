import styles from './Navbar.module.css';
import {FaAndroid, FaApple, FaBars, FaUser} from "react-icons/fa";
import {useEffect, useState} from "react";

import Image from "next/image";
import SecondaryRoundedButton from "@/components/globals/Buttons/SecondaryRoundedButton/SecondaryRoundedButton";
import PrimaryRoundedButton from "@/components/globals/Buttons/PrimaryRoundedButton/PrimaryRoundedButton";
import PrimaryButton from "@/components/globals/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/components/globals/Buttons/SecondaryButton/SecondaryButton";
import TertiaryRoundedButton from "@/components/globals/Buttons/TertiaryRoundedButton/TertiaryRoundedButton";

export default function Navbar() {
    const [navbarScrolled, setNavbarScrolled] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [navbarRequestClose, setNavbarRequestClose] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 0) {
                setNavbarScrolled(true);
            } else {
                setNavbarScrolled(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => {
                if (window.scrollY > 0) {
                    setNavbarScrolled(true);
                } else {
                    setNavbarScrolled(false);
                }
            });
        }
    }, []);

    return (
        <div className={styles.navbarWrapper}>
            <div className={`${styles.navbar} ${navbarScrolled ? styles.navFixed : null}`}>
                <div>
                    <button className={styles.navbarMenuButton} onClick={() => setNavbarOpen(true)}>
                        <FaBars size={17} />
                    </button>
                    <a href={"/"} className={styles.navbarLogo}>
                        Hubert <b>Eats</b>
                    </a>

                    <div className={styles.navbarSearch}>
                        <input type={"text"} placeholder={"Saisissez l'adresse de livraison"} />
                    </div>
                </div>

                <div className={styles.navActionButtons}>
                    <SecondaryRoundedButton text={"Connexion"} icon={<FaUser size={15} />} />
                    <PrimaryRoundedButton text={"Inscription"} />
                </div>

            </div>

            <div className={`${styles.navbarMenuWrapper} ${navbarOpen && !navbarRequestClose ? styles.navOpen : styles.navClosed}`}>
                <div className={`${styles.navbarMenu} ${navbarOpen && !navbarRequestClose  ? styles.navMenuOpen : styles.navMenuClosed}`}>
                    <div className={styles.menuHead}>
                        <PrimaryButton text={"Inscription"} />
                        <SecondaryButton text={"Connexion"} />
                    </div>
                    <div className={styles.menuBody}>
                        <a href={"#"}>Créez un compte professionnel</a>
                        <a href={"#"}>Ajoutez votre restaurant</a>
                        <a href={"#"}>Devenez coursier-partenaire</a>
                    </div>

                    <div className={styles.downloadApp}>
                        <div className={styles.downloadAppHead}>
                            <Image src={"https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/31ee382bd0e6ed84.svg"} height={52} width={52}  alt={"Hubert-Eats"}/>
                            <span>Plus de fonctionnalités dans l&apos;application.</span>
                        </div>
                        <div className={styles.downloadAppBody}>
                            <TertiaryRoundedButton text={"Iphone"} icon={<FaApple size={12} />} />
                            <TertiaryRoundedButton text={"Android"} icon={<FaAndroid size={12} />} />
                        </div>
                    </div>
                </div>

                <div className={styles.navbarMenuOverlay} onClick={() => {
                    setNavbarRequestClose(true);
                    setTimeout(() => {
                        setNavbarOpen(false);
                        setNavbarRequestClose(false);
                    }, 350);
                }}></div>
            </div>

        </div>
    )
}