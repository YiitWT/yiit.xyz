
const Header = () => {
    const routes = [
        { name: 'home', path: '/' },
        { name: 'works', path: '/works' },
        { name: 'about-me', path: '/about' },
        { name: 'contact', path: '/contact' },
    ];
    return (
        <div className="w-full h-12 bg-background flex">
            <div className="h-full w-1/3 flex items-center justify-center">
                <a href="/" className="text-3xl font-bold text-center tracking-widest font-st">YIIT</a>
            </div>
            <div className="w-full h-full float-right flex justify-end mr-12">
                <ul className="flex h-full w-fit items-center  gap-6 right-2">
                    {routes.map((route) => (
                        <li className="group relative text-xl">
                            <span><a href={route.path}><span className="text-primary">#</span>{route.name}</a></span>
                            <span className="absolute -bottom-1 left-0 w-0 transition-all h-[1px] bg-primary group-hover:w-[110%]"></span>
                        </li>
                    ))}
                    <li className="text-sm cursor-pointer">EN <span className="font-bold">∨</span></li>
                </ul>

            </div>
        </div>
    )
}

export default Header