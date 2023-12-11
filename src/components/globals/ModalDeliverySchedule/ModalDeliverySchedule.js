import styles from './ModalDeliverySchedule.module.css';
import Modal from "@/components/globals/Modal/Modal";
import PrimaryButton from "@/components/globals/Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "@/components/globals/Buttons/SecondaryButton/SecondaryButton";

export default function ModalDeliverySchedule({ closeFn }) {
    function getDays() {
        const days = [];

        for (let i = 0; i < 7; i++) {
            const date = new Date();
            date.setDate(date.getDate() + i);

            const dayLabel = ((i <= 1) ? i === 0 ? 'Aujourd\'hui, ' : 'Demain, ' : '') + date.toLocaleString('fr-FR', { weekday: 'short' }).slice(0, 3);

            const formattedDate = `${dayLabel}. ${date.toLocaleString('fr-FR', { day: 'numeric', month: 'short' })}`;
            days.push({ label: formattedDate, value: date.toISOString() });
        }

        return days;
    }

    function getHours() {
        const hours = [];

        for (let hour = 13; hour <= 23; hour++) {
            for (let minute = 15; minute <= 45; minute += 15) {
                const startTime = `${hour.toString().padStart(2, '0')}:${minute}`;
                const endTime = `${(hour === 23 && minute === 45) ? '00' : (hour + Math.floor((minute + 15) / 60)).toString().padStart(2, '0')}:${(minute + 15) % 60}`;

                hours.push(`${startTime} - ${endTime}`);
            }
        }
        return hours;
    }

    return (
        <Modal closeFn={closeFn}>
            <h3>Choisissez une heure</h3>

            <div className={styles.inputs}>
                <select name="day" id="day">
                    {getDays().map((day, index) => (
                        <option key={index} value={day.value}>
                            {day.label}
                        </option>
                    ))}
                </select>
                <select name="hours" id="hours">
                    {getHours().map((hour, index) => (
                        <option key={index} value={hour}>
                            {hour}
                        </option>
                    ))}
                </select>
            </div>

            <div className={styles.actions}>
                <PrimaryButton text={"Planifier"} onClick={() => {}} />
                <SecondaryButton text={"Livrer maintenant"} onClick={() => {}} />
            </div>
        </Modal>
    );
}
