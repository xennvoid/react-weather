import { createContext, useContext, useEffect, useRef, useState } from "react";

export interface ThemeContext {
    theme: string;
    toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContext | null>(null);

export const useThemeContext = () => {
    return useContext(ThemeContext) as ThemeContext;
}


interface ThemeProviderProps {
    children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

    const [theme, setTheme] = useState<string>('light')
    const firstRender = useRef<boolean>(false);

    useEffect(() => {
        if (firstRender.current)
            localStorage.setItem('theme', JSON.stringify(theme))
        else {
            const item = JSON.parse(localStorage.getItem('theme') || '')
            item === '' ? setTheme('light') : setTheme(item)
            firstRender.current = true;
        }
    }, [theme])

    const toggleTheme = () => {
        setTheme(theme => theme === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
