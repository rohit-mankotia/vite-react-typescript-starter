import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { cn } from '../lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setTheme(isDarkMode ? 'dark' : 'light');
  }, []);

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={handleThemeChange}
      className={cn(
        "relative w-6 h-6 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50",
        className
      )}
      aria-label="Toggle theme"
    >
      <Sun className="absolute inset-0 h-full w-full transition-all duration-300 opacity-100 rotate-0 dark:opacity-0 dark:-rotate-90" />
      <Moon className="absolute inset-0 h-full w-full transition-all duration-300 opacity-0 rotate-90 dark:opacity-100 dark:rotate-0" />
    </button>
  );
}