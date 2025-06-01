import hero from '../assets/hero.png';


export const Hero = () => {
  return (
    <div className="bg-background w-full h-[700px] flex items-center justify-center">
    <div className="w-1/3 flex flex-col">
        <div className="flex-1">
            <h1 className="text-4xl font-bold">Hello! I'm
                <span className="text-primary font-extrabold"> YIIT</span>. I'm a full-stack
                <span className="text-sm">(ish)</span>
                <br />
                <span className="text-primary uppercase font-extrabold pt-4"> web developer.</span>
            </h1>
            <p className='pt-4'>I'm mainly a web developer but i also try other things like plugins in minecraft. Machine Learning in unity etc.</p>
        </div>
        <button className="px-2 py-1 bg-background border-primary border-2 text-center text-2xl self-start mt-10">Contact Me!</button>
    </div>
        <div className="">
            <img src={hero} alt="hero" className='drop-shadow-xl animate-wiggle animate-infinite animate-duration-[100000ms] animate-ease-in-out'/>
            <div className='text-center w-full h-full items-center justify-center flex flex-col mt-4'>
                <h1 className='px-2  border-2 border-primary w-fit h-fit'>I honestly dont have any pictures</h1>
            </div>
        </div>
    </div>
  )
}
