import styles from './Header.module.css';

import Image from 'next/image';
import {FaCalendar, FaClock, FaSearch} from "react-icons/fa";
import Selector from "@/components/globals/Form/Selector/Selector";
import PrimaryButton from "@/components/globals/Buttons/PrimaryButton/PrimaryButton";
import {useState} from "react";
import ModalDeliverySchedule from "@/components/globals/ModalDeliverySchedule/ModalDeliverySchedule";

export default function Header({openModalFn, closeModalFn}) {

    const scheduleTypes = [
        {
            title: "Livrer maintenant",
            icon: <FaClock size={17} />,
            onClick: null
        },
        {
            title: "Planifier pour plus tard",
            icon: <FaCalendar size={17} />,
            onClick: () => {
                openModalFn(
                    <ModalDeliverySchedule closeFn={closeModalFn} />
                )
            }
        },
    ];

    const selectorUpdateFn = (option) => {
        if (option.title === scheduleTypes[1].title) {

        }
        setSelectedScheduleType(option);
        openModalFn(
            <ModalDeliverySchedule />
        )
    }
    const [selectedScheduleType, setSelectedScheduleType] = useState(scheduleTypes[0]);
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
                    <Selector options={scheduleTypes} />
                    <PrimaryButton text={"Trouver un restaurant"} onClick={() => {
                    }} />

                </div>
                <span>Ou <a href={"/account/login"}>Connexion</a></span>
            </div>
        </header>
    )
}