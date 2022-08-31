import { useThemeContext } from '../../context/themeContext';
import { useAppDispatch, useAppSelector } from '../../hooks/typedHooks';
import { changeActiveFilter, changeDaysCount, getWeekWeather } from '../../store/slices/weatherWeekSlice';
import styles from './DaysSelect.module.scss';

const DaySelect: React.FC = () => {

    const { theme } = useThemeContext()
    const dispatch = useAppDispatch()
    const { activeFilter } = useAppSelector(state => state.week)
    const daySelectors = [{ text: 'Week forecast', value: 7 }, { text: 'Month forecast', value: 30 }, { text: '10 days', value: 10 }]

    return (
        <div className={styles.days}>
            {daySelectors.map((select, i) =>
                <button
                    key={select.text}
                    className={`${styles.days__change} ${theme === 'light' ? styles.light : styles.dark} ${activeFilter === i ? styles.active : ''}`}
                    onClick={() => {
                        dispatch(changeActiveFilter(i))
                        dispatch(changeDaysCount(select.value))
                    }}
                >
                    {select.text}
                </button>)}
        </div>
    )
}

export default DaySelect