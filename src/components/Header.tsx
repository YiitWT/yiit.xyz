import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('EN');
    
    const routes = [
        { name: 'home', path: '/' },
        { name: 'works', path: '/works' },
        { name: 'about-me', path: '/about' },
        { name: 'contact', path: '/contact' },
    ];

    const languages = [
        { code: 'EN', name: 'English' },
        { code: 'TR', name: 'Türkçe' },
        { code: 'ES', name: 'Español' },
        { code: 'FR', name: 'Français' },
    ];

    const handleLanguageChange = (language) => {
        setCurrentLanguage(language.code);
        setIsLanguageOpen(false);
        // Add your language change logic here
        console.log(`Language changed to: ${language.name}`);
    };

    return (
        <div className="w-full h-12 bg-background flex relative">
            {/* Logo Section */}
            <div className="h-full w-1/3 flex items-center justify-center md:justify-start md:pl-6">
                <a href="/" className="text-2xl md:text-3xl font-bold text-center tracking-widest">YIIT</a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex w-full h-full justify-end mr-12">
                <ul className="flex h-full w-fit items-center gap-6">
                    {routes.map((route, index) => (
                        <li key={index} className="group relative text-xl">
                            <span>
                                <a href={route.path}>
                                    <span className="text-primary">#</span>{route.name}
                                </a>
                            </span>
                            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[1px] bg-primary group-hover:w-[110%]"></span>
                        </li>
                    ))}
                    
                    {/* Language Selector */}
                    <li className="relative">
                        <button 
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                            className="text-sm cursor-pointer flex items-center gap-1 hover:text-primary transition-colors"
                        >
                            {currentLanguage} 
                            <span className={`font-bold transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}>∨</span>
                        </button>
                        
                        {/* Language Dropdown */}
                        {isLanguageOpen && (
                            <div className="absolute top-full right-0 mt-2 bg-background border border-gray-200 rounded-md shadow-lg z-50 min-w-[120px]">
                                {languages.map((language) => (
                                    <button
                                        key={language.code}
                                        onClick={() => handleLanguageChange(language)}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                                            currentLanguage === language.code ? 'text-primary font-semibold' : ''
                                        }`}
                                    >
                                        {language.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center justify-end pr-4">
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-2xl cursor-pointer ml-64"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background border-t border-gray-200 md:hidden z-40">
                    <ul className="flex flex-col">
                        {routes.map((route, index) => (
                            <li key={index} className="border-b border-gray-100 last:border-b-0">
                                <a 
                                    href={route.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-6 py-4 text-lg hover:bg-gray-50 transition-colors"
                                >
                                    <span className="text-primary">#</span>{route.name}
                                </a>
                            </li>
                        ))}
                        
                        {/* Mobile Language Selector */}
                        <li className="border-b border-gray-100">
                            <button 
                                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                                className="w-full text-left px-6 py-4 text-lg hover:bg-gray-50 transition-colors flex items-center justify-between"
                            >
                                <span>Language: {currentLanguage}</span>
                                <span className={`font-bold transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}>∨</span>
                            </button>
                            
                            {isLanguageOpen && (
                                <div className="bg-gray-50">
                                    {languages.map((language) => (
                                        <button
                                            key={language.code}
                                            onClick={() => {
                                                handleLanguageChange(language);
                                                setIsMenuOpen(false);
                                            }}
                                            className={`w-full text-left px-8 py-3 text-base hover:bg-gray-100 transition-colors ${
                                                currentLanguage === language.code ? 'text-primary font-semibold' : ''
                                            }`}
                                        >
                                            {language.name}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </li>
                    </ul>
                </div>
            )}

            {/* Overlay for mobile menu */}
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default Header;