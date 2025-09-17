import { useState } from 'react';
import { useScrollSpy, scrollToSection, useInitialHashScroll } from '../utils/scrollSystem';
import { useTranslation } from '../i18n/TranslationProvider';

import type { FC } from 'react';

const Header: FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageOpen, setIsLanguageOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { language, setLanguage, t } = useTranslation();

    const routes = [
        { name: t('home'), path: '/', sectionId: 'home' },
        { name: t('projects'), path: '/', sectionId: 'projects' },
        { name: t('stats'), path: '/', sectionId: 'stats' },
        { name: t('experience'), path: '/', sectionId: 'experience' },
        { name: t('contact'), path: '/', sectionId: 'contact' },
    ];

    const languages = [
        { code: 'EN', name: t('language_en') },
        { code: 'TR', name: t('language_tr') },
        { code: 'ES', name: t('language_es') },
        { code: 'FR', name: t('language_fr') },
    ];

    useScrollSpy(routes.map(route => route.sectionId), setActiveSection, 100);
    useInitialHashScroll(setActiveSection);

    const handleLanguageChange = (languageObj: any) => {
        setLanguage(languageObj.code);
        setIsLanguageOpen(false);
    };

    const handleNavClick = (e: any, route: any) => {
        e.preventDefault();
        scrollToSection(route.sectionId, route.path, setActiveSection, setIsMenuOpen);
    };

    return (
        <div className="w-full h-12 bg-background sticky flex   top-0 z-50 border-b border-gray-200">
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
                            <button className='group' onClick={(e) => handleNavClick(e, route)}>
                                <span className={`transition-colors ${activeSection === route.sectionId ? 'text-primary' : 'hover:text-primary'
                                    }`}>
                                    <span className={`transition-colors ${activeSection === route.sectionId ? 'text-secondary' : 'text-primary'
                                        } group-hover:text-secondary`}>#</span>{route.name}
                                </span>
                            </button>
                            <span className={`absolute -bottom-1 left-0 h-[1px] bg-primary transition-all ${activeSection === route.sectionId
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
                            {language}
                            <span className={`font-bold transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}>∨</span>
                        </button>

                        {/* Language Dropdown */}
                        {isLanguageOpen && (
                            <div className="absolute top-full right-0 mt-2 bg-background border border-gray-200 rounded-md shadow-lg z-50 min-w-[120px]">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => handleLanguageChange(lang)}
                                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${language === lang.code ? 'text-primary font-semibold' : ''}`}
                                    >
                                        {lang.name}
                                    </button>
                                ))}
                            </div>
                        )}
                    </li>
                </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden w-1/3 h-full flex items-center justify-end pl-64">
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="text-2xl cursor-pointer"
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>

            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-background border-t border-gray-200 md:hidden z-40">
                    <ul className="flex flex-col">
                        {routes.map((route, index) => (
                            <li key={index} className="border-b border-gray-100 last:border-b-0">
                                <button
                                    onClick={(e) => handleNavClick(e, route)}
                                    className={`w-full text-left block px-6 py-4 text-lg hover:bg-gray-50 transition-colors ${activeSection === route.sectionId ? 'text-primary bg-gray-50' : ''
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
                                <span>{t('language_en')}: {language}</span>
                                <span className={`font-bold transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}>∨</span>
                            </button>

                            {isLanguageOpen && (
                                <div className="bg-gray-50">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                handleLanguageChange(lang);
                                                setIsMenuOpen(false);
                                            }}
                                            className={`w-full text-left px-8 py-3 text-base hover:bg-gray-100 transition-colors ${language === lang.code ? 'text-primary font-semibold' : ''}`}
                                        >
                                            {lang.name}
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