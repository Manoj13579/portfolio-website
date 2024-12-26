import Particle from "./Particle";



export default function Home() {
  return (
    <>
      <Particle />
      <div
        className="home flex flex-col items-center justify-center h-screen align-center"
      >
        <p className="name font-medium text-white text-8xl content-center overflow-y-hidden py-16">
          Manoj <span className="text-rose-600">Lamsal</span>
        </p>
        <p className="title text-white text-2xl">
          MERN Stack Developer
        </p>
        <p className="socials text-white text-3xl flex gap-x-6 mt-4">
          <a href="mailto:duwaikoho.4hai@gmail.com" target="_blank">
            <i className="fa-solid fa-envelope text-white"></i>
          </a>
        
          <a href="https://www.linkedin.com/in" target="_blank">
            <i className="fa-brands fa-linkedin text-white"></i>
          </a>

          <a href="https://github.com/Manoj13579" target="_blank">
            <i className="fa-brands fa-github text-white"></i>
          </a>
          <a href="https://twitter.com/OnCodingJourney" target="_blank">
            <i className="fa-brands fa-twitter text-white"></i>
          </a>

          <a href="/" target="_blank">
            <i className="fa-brands fa-hashnode text-white"></i>
          </a>
        </p>
      </div>
    </>
  );
}
