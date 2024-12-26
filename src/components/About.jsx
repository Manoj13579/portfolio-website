import profileImg from "../assets/profileImg.png";
export default function About() {
  return (
    <>
      <div
      id="about-section"
        className="about-section-container flex gap-5 justify-between  py-20 bg-slate-950"
        style={{ zIndex: 100, position: "relative" }}
      >
        <div className="text-start">
          <p
            className="greetings text-white font-bold text-3xl overflow-y-hidden"
            style={{ margin: "1rem 5rem" }}
          >
            Hi, I'm Manoj Lamsal <span className="wave overflow-y-hidden">👋🏻</span>
          </p>
          <p
            className="introduction-para text-white"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
            Based in Kathmandu, Nepal with a passion for building scalable and
            user-friendly web applications. After immersing myself in online
            courses and hands-on projects, I’ve developed strong expertise in
            React, Node.js, Express.js, and MongoDB, along with a deep
            understanding of front-end and back-end technologies.
          </p>
          <p
            className="text-white introduction-para"
            style={{ margin: "1rem 2rem 1rem 5rem" }}
          >
           I’ve worked ona range of personal projects, including an e-commerce platform with
            Paypal integration, a renting app featuring dynamic search filters,
            and an AI chatbot using the Gemini API. I also built a responsive
            landing page for a startup to enhance their online presence. These
            projects have honed my skills in full-stack development, API
            integrations, user authentication, and creating smooth, interactive
            user experiences. I thrive on problem-solving and enjoy turning
            ideas into fully functional web applications. Whether it's building
            from scratch or improving existing solutions, I’m always eager to
            learn new technologies and stay up-to-date with industry trends.
            Feel free to explore my projects and get in touch if you'd like to
            collaborate or need a custom web solution.
          </p>
        </div>
        <img
          src={profileImg}
          alt="manoj-img"
          className=" text-white img-manoj"
          style={{
            margin: "0rem 5rem 1rem 1rem",
            borderRadius: "50%",
            width: "90%",
            height: "20rem",
            position: "relative",
            objectFit: "cover",
          }}
        />
      </div>
    </>
  );
}
