import profileImg from "../assets/profileImg.png";

export default function About() {
  return (
    <section
      id="about-section"
      className="about-section-container bg-slate-950 py-20 relative"
      style={{
        zIndex: 100,
        overflow: "hidden", // HARD STOP for layout overflow
      }}
    >
      <div
        className="flex items-center justify-between gap-12"
        style={{
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        {/* TEXT */}
        <div
          className="text-start text-white"
          style={{
            maxWidth: "60%",
            flexShrink: 0,
          }}
        >
          {/* HEADING */}
          <div
            className="greetings font-bold text-3xl"
            style={{
              display: "flex",
              alignItems: "center",
             gap: "8px",
             lineHeight: "1.2",
              overflow: "hidden",
            }}
          >
            Hi, I'm Manoj Lamsal
          </div>

          {/* PARAGRAPHS */}
          <p
            className="introduction-para"
            style={{
              width: "100%", 
              maxWidth: "100%",
              wordWrap: "break-word",
            }}
          >
            Based in Kathmandu, Nepal with a passion for building scalable and
            user-friendly web applications. After immersing myself in online
            courses and hands-on projects, I’ve developed strong expertise in
            React, Node.js, Express.js, MongoDB, Next.js, Typescript along with a
            deep understanding of front-end and back-end technologies.
          </p>

          <p
            className="introduction-para"
            style={{
              width: "100%",
              maxWidth: "100%",
              wordWrap: "break-word",
            }}
          >
            I’ve worked on a range of personal projects, including an e-commerce
            app, LMS, AI app, an AI chatbot using the Gemini API and others. I
            also built a responsive landing page for a startup to enhance their
            online presence. These projects have honed my skills in full-stack
            development, API integrations, user authentication, and creating
            smooth, interactive user experiences. I thrive on problem-solving
            and enjoy turning ideas into fully functional web applications.
            Whether it's building from scratch or improving existing solutions,
            I’m always eager to learn new technologies and stay up-to-date with
            industry trends. Feel free to explore my projects and get in touch
            if you'd like to collaborate or need a custom web solution.
          </p>
        </div>

        {/* IMAGE */}
        <img
          src={profileImg}
          alt="manoj-img"
          className="img-manoj"
          style={{
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
    </section>
  );
}
