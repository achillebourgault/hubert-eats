import React, { useState, useRef, useEffect } from 'react';
import styles from './Selector.module.css';
import {FaChevronDown} from "react-icons/fa"; // Assurez-vous de remplacer cela par le chemin correct

const Selector = ({ text, options}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(options[0]);
    const selectorRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectorRef.current && !selectorRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectorRef]);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className={styles.selector} ref={selectorRef}>
            <div className={styles.selectorValue} onClick={() => {
                setIsMenuOpen(!isMenuOpen);
            }}>
                <div>
                    <span className={styles.selectorValueIcon}>{selectedOption.icon}</span>
                    {selectedOption.title}
                </div>
                <FaChevronDown size={15} />
            </div>
            {isMenuOpen && (
                <div className={styles.selectorOptions}>
                    {options.map((option, index) => {
                        return (
                            <div
                                key={index}
                                className={styles.selectorOption}
                                onClick={() => {
                                    if (option.onClick)
                                        option.onClick();
                                    else
                                        setSelectedOption(option);
                                    setIsMenuOpen(false);
                                }}
                            >
                                <div className={styles.selectorOptionIcon}>{option.icon}</div>
                                <div className={styles.selectorOptionTitle}>{option.title}</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Selector;
