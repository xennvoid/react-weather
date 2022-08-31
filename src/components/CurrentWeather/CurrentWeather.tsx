import CurrentWeatherCard from '../CurrentWeatherCard/CurrentWeatherCard'
import CurrentWeatherDescription from '../CurrentWeatherDescription/CurrentWeatherDescription'
import styles from './CurrentWeather.module.scss'


const CurrentWeather: React.FC = () => {

    return (
        <section className={styles.current_weather}>
            <CurrentWeatherCard />
            <CurrentWeatherDescription />
        </section>
    )
}

export default CurrentWeather