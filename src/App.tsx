import { useEffect } from 'react';
import './App.scss';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';
import DaysForecast from './components/DaysForecast/DaysForecast';
import DaySelect from './components/DaysSelect/DaySelect';
import Header from './components/Header/Header';
import { useThemeContext } from './context/themeContext';
import { useAppDispatch, useAppSelector } from './hooks/typedHooks';
import { getWeekWeather } from './store/slices/weatherWeekSlice';

function App() {

  const { theme } = useThemeContext();
  const dispatch = useAppDispatch();
  const { data, loading, query, daysCount } = useAppSelector(state => state.week)

  useEffect(() => {
    dispatch(getWeekWeather())
    console.log(data)
  }, [query, daysCount])

  return (
    <div className={`App ${theme}`}>
      <div className="container">
        <Header />
        {
          loading
            ? null
            : <>
              <CurrentWeather />
              <DaySelect />
              <DaysForecast />
            </>
        }
      </div>
    </div>
  );
}

export default App;
