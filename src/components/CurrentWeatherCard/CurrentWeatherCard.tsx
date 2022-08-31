import styles from './CurrentWeatherCard.module.scss';
import { useThemeContext } from '../../context/themeContext';
import { useAppSelector } from '../../hooks/typedHooks';


const CurrentWeatherCard: React.FC = () => {

    const { theme } = useThemeContext()
    const { data } = useAppSelector(state => state.week)

    return (
        <div className={`${styles.current_weather__card} ${theme === 'light' ? styles.light : styles.dark}`}>
            <div className={styles.current_weather__card__head}>
                <div className={styles.current_weather__card_wrapper}>
                    <div className={styles.current_weather__temp}>
                        {data?.list[0].main.temp.toFixed()}&deg;
                    </div>
                    <div className={`${styles.current_weather__day} ${theme === 'light' ? styles.light : styles.dark}`}>
                        Today
                    </div>
                </div>
                <img src={`http://openweathermap.org/img/wn/${data?.list[0].weather[0].icon}@2x.png`} alt="weather-icon" />
            </div>
            <div className={styles.current_weather__city}>
                {data?.city.name}
            </div>
        </div>
    )
}

export default CurrentWeatherCard