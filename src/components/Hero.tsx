import { useState } from 'react';
import hero from '../assets/hero.png';


export const Hero = () => {
    const [inverted, setInverted] = useState(false);

        const toggleInverted = () => {
        setInverted(!inverted);
    };

  return (
    <div className="bg-background w-full h-[700px] flex items-center justify-center" id='home'>
    <div className="md:flex md:flex-col md:pl-64">
        <div className="">
            <h1 className="text-4xl font-bold px-2 md:px-0">Hello! I'm
                <span className="text-primary font-extrabold"> YIIT</span>. I'm a full-stack
                <span className="text-sm">(ish)</span>
                <br />
                <span className="text-primary uppercase font-extrabold pt-4"> web developer.</span>
            </h1>
            <p className='pt-4 md:w-1/2 md:ml-0 ml-4'>
               I'm a web developer who likes to mess around with other stuff too—Minecraft plugins, machine learning in Unity, whatever catches my interest really
            </p>
        </div>
        <button className="px-2 py-1 bg-background border-primary border-2 text-center text-2xl self-start mt-10 md:ml-0 ml-4">Contact Me!</button>
    </div>
        <div className="hidden md:block mr-60">
            <img src={hero} alt="hero" onClick={toggleInverted} className={`
                'drop-shadow-xl animate-wiggle animate-infinite animate-duration-[100000ms] animate-ease-in-out'
                ${inverted ? 'filter invert' : ''}
                transition-all duration-500 ease-in-out
                `}/>
            <div className='text-center w-full h-full items-center justify-center flex flex-col mt-4'>
                <h1 className='px-2  border-2 border-primary w-fit h-fit'>I honestly dont have any images to put here</h1>
            </div>
        </div>
    </div>
  )
}
