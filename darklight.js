const [isDarkMode, setIsDarkMode] = useState(true);

const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
};

// Button component
<button
    onClick={toggleTheme}
    className={`fixed top-6 right-6 p-3 rounded-full transition-all duration-300 ${isDarkMode
        ? 'bg-white/10 hover:bg-white/20 text-yellow-300'
        : 'bg-gray-800/10 hover:bg-gray-800/20 text-gray-800'
        }`}
>
    {isDarkMode ? '☀️' : '🌙'}
</button>