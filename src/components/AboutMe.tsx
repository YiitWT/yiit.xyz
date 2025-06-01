
const AboutMe = () => {

    return (
       <div className="bg-background py-12 w-full">
  {/* Section Title */}
  <div className="text-4xl text-white flex md:ml-96 ml-4 items-center ">
    <h1 className="text-white">
      <span className="text-primary">#</span>about-me
    </h1>
    <div className="h-[1px] bg-primary md:w-1/2 w-32 ml-8"></div>
  </div>

  {/* Content */}
<div className="flex flex-col gap-6 md:ml-96 mt-6 p-12 md:w-1/2">
  <p className="text-xl text-secondary">
    Hey! I'm Yiğit (pronounced like <span className="italic">Yeat</span>). I'm a high school student and self-taught web developer from Turkey.
  </p>
  <p className="text-xl text-secondary">
    I’ve been developing websites for over 3 years. I specialize in front-end development and work mostly with JavaScript, React, HTML, CSS, and TailwindCSS. I also have experience with tools like Node.js, Git and ExpressJS.
  </p>
  <p className="text-xl text-secondary">
    I enjoy building clean, responsive, and user-friendly interfaces. Some of my projects include freelance websites, personal tools, and even a Discord bot dashboard built with Astro and React. I also use Linux and Windows as my daily environment, and I like customizing my workflow with tools like Hyprland.
  </p>
  <p className="text-xl text-secondary">
    In 2025, I completed a web development internship in Spain through the Erasmus+ program. It gave me hands-on experience working in a real-world team and helped me improve my skills.
  </p>
  <p className="text-xl text-secondary">
    I'm always learning new technologies, frameworks, and ways to improve my code. I enjoy experimenting with new ideas, solving problems, and constantly pushing myself to grow as a developer.
  </p>
</div>

</div>

    )
}

export default AboutMe