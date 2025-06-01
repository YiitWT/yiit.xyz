import { useState, useEffect } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [currentLanguage, setCurrentLanguage] = useState('EN');
    const [activeSection, setActiveSection] = useState('home');
    
    const routes = [
        { name: 'home', path: '/', sectionId: 'home' },
        { name: 'works', path: '/works', sectionId: 'projects' },
        { name: 'about-me', path: '/about', sectionId: 'about-me' },
        { name: 'contact', path: '/contact', sectionId: 'contact' },
    ];

    const languages = [
        { code: 'EN', name: 'English' },
        { code: 'TR', name: 'Türkçe' },
        { code: 'ES', name: 'Español' },
        { code: 'FR', name: 'Français' },
    ];

    // Smooth scroll to section
    const scrollToSection = (sectionId:any, path:any) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // Update URL without page reload
            window.history.pushState({}, '', path);
            
            // Smooth scroll to element
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
            
            // Update active section
            setActiveSection(sectionId);
            
            // Close mobile menu if open
            setIsMenuOpen(false);
        } else {
            // Fallback: navigate to the page if section doesn't exist
            window.location.href = path;
        }
    };

    // Handle scroll spy - detect which section is currently in view
    useEffect(() => {
        const handleScroll = () => {
            const sections = routes.map(route => route.sectionId);
            const scrollPosition = window.scrollY + 100; // Offset for header height
            
            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    if (activeSection !== sections[i]) {
                        setActiveSection(sections[i]);
                        // Update URL to match current section
                        const currentRoute = routes.find(route => route.sectionId === sections[i]);
                        if (currentRoute) {
                            window.history.replaceState({}, '', currentRoute.path);
                        }
                    }
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeSection]);

    // Handle initial page load - scroll to section if hash exists
    useEffect(() => {
        const currentPath = window.location.pathname;
        const currentRoute = routes.find(route => route.path === currentPath);
        
        if (currentRoute) {
            setActiveSection(currentRoute.sectionId);
            // Small delay to ensure DOM is loaded
            setTimeout(() => {
                const element = document.getElementById(currentRoute.sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    const handleLanguageChange = (language : any) => {
        setCurrentLanguage(language.code);
        setIsLanguageOpen(false);
        console.log(`Language changed to: ${language.name}`);
    };

    const handleNavClick = (e: any, route: any) => {
        e.preventDefault();
        scrollToSection(route.sectionId, route.path);
    };

    return (
        <div className="w-full h-12 bg-background flex relative  top-0 z-50 border-b border-gray-200">
            {/* Logo Section */}
            <div className="h-full w-1/3 flex items-center justify-center md:justify-start md:pl-6">
                <button 
                    onClick={(e) => handleNavClick(e, routes[0])}
                    className="text-2xl md:text-3xl font-bold text-center tracking-widest hover:text-primary transition-colors"
                >
                    YIIT
                </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex w-full h-full justify-end mr-12">
                <ul className="flex h-full w-fit items-center gap-6">
                    {routes.map((route, index) => (
                        <li key={index} className="group relative text-xl">
                            <button onClick={(e) => handleNavClick(e, route)}>
                                <span className={`transition-colors ${
                                    activeSection === route.sectionId ? 'text-primary' : 'hover:text-primary'
                                }`}>
                                    <span className="text-primary">#</span>{route.name}
                                </span>
                            </button>
                            <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all ${
                                activeSection === route.sectionId 
                                    ? 'w-[110%]' 
                                    : 'w-0 group-hover:w-[110%]'
                            }`}></span>
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
                    className="text-2xl cursor-pointer"
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
                                <button 
                                    onClick={(e) => handleNavClick(e, route)}
                                    className={`w-full text-left block px-6 py-4 text-lg hover:bg-gray-50 transition-colors ${
                                        activeSection === route.sectionId ? 'text-primary bg-gray-50' : ''
                                    }`}
                                >
                                    <span className="text-primary">#</span>{route.name}
                                </button>
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