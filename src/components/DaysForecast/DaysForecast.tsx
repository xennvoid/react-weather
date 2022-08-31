import { useThemeContext } from '../../context/themeContext';
import { useAppSelector } from '../../hooks/typedHooks';
import WeatherCard from '../WeatherCard/WeatherCard';
import styles from './DaysForecast.module.scss';

const WEEK_DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DaysForecast = () => {
    const { theme } = useThemeContext()
    const { data } = useAppSelector(state => state.week)

    const dayInAWeek = new Date().getDay();
    const forecastWeekDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
    let forecastDays: string[] = [];


    if (data) {
        for (let i = 0; i < Math.ceil(data?.list.length / 7); i++) {
            forecastDays = forecastDays.concat(forecastWeekDays)
        }
        forecastDays = forecastDays.slice(0, data.list.length)
        //console.log(forecastDays)
    }


    const dates = data?.list.map((_, i) => {
        const currentDate = new Date();
        currentDate.setDate(currentDate.getDate() + i)
        return currentDate.toLocaleDateString();
    })

    //console.log(dates)

    return (
        <div className={`${styles.days__forecast} ${theme === 'light' ? styles.light : styles.dark}`}>
            {data?.list.map((day, i) => <WeatherCard key={day.dt} day={day} dayOfWeek={forecastDays[i]} date={dates?.[i]} />)}
        </div>
    )
}

export default DaysForecast