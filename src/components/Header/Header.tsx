import styles from './Header.module.scss'
import logoSvg from '../../assets/icons/logo.svg'
import dropSvg from '../../assets/icons/drop.svg'
import { useThemeContext } from '../../context/themeContext'
import { useAppDispatch } from '../../hooks/typedHooks'
import { changeCityName } from '../../store/slices/weatherWeekSlice'
import { useState, KeyboardEvent, useCallback } from 'react'


const Header: React.FC = () => {

    const { theme, toggleTheme } = useThemeContext();
    const dispatch = useAppDispatch()

    const [cityInput, setCityInput] = useState('')

    const changeQuery = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            dispatch(changeCityName(cityInput))
            setCityInput('')
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.logo__img} src={logoSvg} alt="logo" />
                <span className={styles.logo__text}>React weather</span>
            </div>
            <img
                className={styles.theme}
                src={dropSvg}
                alt="drop"
                onClick={toggleTheme}
            />
            <input
                className={`${styles.search} ${theme === 'light' ? styles.light : styles.dark}`}
                type="text"
                value={cityInput}
                onChange={(e) => setCityInput(e.target.value)}
                onKeyDown={e => changeQuery(e)}
                placeholder="London, UK"
            />
        </header>
    )
}

export default Header