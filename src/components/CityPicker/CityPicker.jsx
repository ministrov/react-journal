import { useState } from 'react';
import { cities } from '../../data';
import styles from './CityPicker.module.css';

export default function CityPicker() {
    const [selectedCity, setSelectedCity] = useState('Default Moskow');

    return (
        <div className={styles['city-picker']}>
            <label className={styles['city-picker-label']} htmlFor="city">{selectedCity}</label>
            <select
                className={styles['city-picker-select']}
                placeholder='city'
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
            >
                <option>Выберите город</option>
                {cities.map((city) => (
                    <option className={styles['city-picker-option']} name={city.name} key={city.id}>{city.name}</option>
                ))}
            </select>
        </div>
    );
}
