'use client';

import { useTheme, Theme } from '@/providers/theme-provider';
import { IconSettings, IconSun, IconMoon } from '@tabler/icons-react';

export function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <select
            value={theme}
            onChange={(e) => setTheme(e.target.value as Theme)}
        >
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="black">Black</option>
        </select>
    );
}