import styles from './Header.module.css';

import Image from 'next/image';
import {FaCalendar, FaClock, FaSearch} from "react-icons/fa";
import Selector from "@/components/globals/Form/Selector/Selector";
import PrimaryButton from "@/components/globals/Buttons/PrimaryButton/PrimaryButton";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerBg}>
                <Image src={"https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/c413f20400e04805.webp"} alt={"header"} layout={"fill"} objectFit={"cover"} />
            </div>

            <div className={styles.headerContent}>
                <h1>Vos restos locaux livrés chez vous</h1>

                <div className={styles.headerSearch}>
                    <div className={styles.headerSearchInput}>
                        <input type={"text"} placeholder={"Saisissez l'adresse de livraison."} />
                        <div className={styles.headerSearchInputIcon}>
                            <FaSearch size={15} />
                        </div>
                    </div>
                    <Selector options={[
                        {
                            title: "Livrer maintenant",
                            icon: <FaClock size={17} />
                        },
                        {
                            title: "Planifier pour plus tard",
                            icon: <FaCalendar size={17} />}
                    ]} />
                    <PrimaryButton text={"Trouver un restaurant"} />

                </div>
                <span>Ou <a href={"/account/login"}>Connexion</a></span>
            </div>
        </header>
    )
}