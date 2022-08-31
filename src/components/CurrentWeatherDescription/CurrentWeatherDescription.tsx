import styles from './CurrentWeatherDescription.module.scss';
import cloudPng from '../../assets/images/cloud.png';
import tempSvg from '../../assets/icons/temp.svg';
import pressureSvg from '../../assets/icons/pressure.svg';
import humidityPng from '../../assets/icons/humidity.png';
import windSvg from '../../assets/icons/wind.svg';
import { useThemeContext } from '../../context/themeContext';
import { useAppSelector } from '../../hooks/typedHooks';


const CurrentWeatherDescription = () => {

    const { theme } = useThemeContext()
    const { data } = useAppSelector(state => state.week)

    const temp = data?.list[0].main.temp.toFixed();
    const feelslike = data?.list[0].main.feels_like.toFixed();
    const pressure = data?.list[0].main.pressure;
    const humidity = data?.list[0].main.humidity;
    const wind = data?.list[0].wind.speed;

    const indicators = [
        { icon: tempSvg, text: 'Temperature', value: `${temp} ${'\u00b0'} - feels like ${feelslike} ${'\u00b0'}` },
        { icon: pressureSvg, text: 'Pressure', value: `${pressure} hPa` },
        { icon: humidityPng, text: 'Humidity', value: `${humidity} %` },
        { icon: windSvg, text: 'Wind', value: `${wind} m/s` }
    ]

    return (
        <div className={`${styles.current_weather__description} ${theme === 'light' ? styles.light : styles.dark}`}>
            <img className={styles.current_weather__description__bg} src={cloudPng} alt="cloud" />
            {indicators.map(indicator =>
                <div className={styles.current_weather__description__indicator} key={indicator.value}>
                    <div className={styles.current_weather__description__icon}>
                        <img src={indicator.icon} alt={indicator.text} />
                    </div>
                    <span className={styles.current_weather__description__text}>{indicator.text}</span>
                    <span className={`${styles.current_weather__description__value} ${theme === 'light' ? styles.light : styles.dark}`}>{indicator.value}</span>
                </div>
            )}
        </div>
    )
}

export default CurrentWeatherDescription