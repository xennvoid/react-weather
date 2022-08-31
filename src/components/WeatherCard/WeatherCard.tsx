import { useThemeContext } from '../../context/themeContext';
import { WeatherDay } from '../../store/types/weather';
import styles from './WeatherCard.module.scss';

interface IWeatherCard {
    day: WeatherDay;
    dayOfWeek: string;
    date: string | undefined;
}



const WeatherCard: React.FC<IWeatherCard> = ({ day, dayOfWeek, date }) => {

    const { theme } = useThemeContext()

    return (
        <div className={`${styles.weather__card} ${theme === 'light' ? styles.light : styles.dark}`}>
            <h3 className={`${styles.day} ${theme === 'light' ? styles.light : styles.dark}`}>{dayOfWeek}</h3>
            <div className={styles.date}>{date}</div>
            <div className={styles.img}>
                <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`} alt="" />
            </div>
            <div className={`${styles.temp} ${theme === 'light' ? styles.light : styles.dark}`}>{day.main.temp.toFixed()}&deg;</div>
            <div className={styles.feelslike}>{day.main.feels_like.toFixed()}&deg;</div>
            <div className={styles.weather}>{day.weather[0].description}</div>
        </div>
    )
}

export default WeatherCard