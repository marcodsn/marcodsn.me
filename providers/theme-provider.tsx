'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { GLOBAL_CONFIG } from '@/lib/constants';

export type Theme = keyof typeof GLOBAL_CONFIG.themes | 'system';

const ThemeContext = createContext<{
    theme: Theme;
    setTheme: (theme: Theme) => void;
}>({
    theme: 'system',
    setTheme: () => null,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('system');

    useEffect(() => {
        // Handle system theme preference
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        const handleThemeChange = () => {
            if (theme === 'system') {
                const systemTheme = mediaQuery.matches ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', systemTheme);
            } else {
                document.documentElement.setAttribute('data-theme', theme);
            }
        };

        mediaQuery.addEventListener('change', handleThemeChange);
        handleThemeChange();

        return () => mediaQuery.removeEventListener('change', handleThemeChange);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => useContext(ThemeContext);
