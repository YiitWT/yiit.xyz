
const Footer = () => {
  return (
    <div className="bg-background w-full py-8 flex items-center justify-center text-secondary mt-24 border-t-secondary border-t-2">
        <div className="text-center">
            <p className="text-lg">
            Made with <span className="text-primary">❤</span> by <a href="http://yiit.xyz">Yiğit</a>
            </p>
            <p className="text-sm mt-2">
            © {new Date().getFullYear()} All rights reserved.
            </p>
        </div>

    </div>
  )
}

export default Footer