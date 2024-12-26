export default function WorkEx() {
  return (
    <div>
      <div
        id="workex-container"
        className="workex-container bg-slate-950 pt-20 pb-12"
        style={{ zIndex: 100, position: "relative" }}
      >
        <h3 className="text-white text-center text-3xl font-bold my-6 overflow-y-hidden">
          Work Experience
        </h3>
        <div className="timeline mt-6">
          <div className="timeline-container">
            <div className="timeline-block timeline-block-right">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-rose-600">Freelance MERN Stack Developer</h3>
                <span className="text-white">Fiverr</span>
                <p className="text-white mb-3">
                  <em>Oct 2024 - Present</em>
                </p>
                <p className="text-gray-400 text-justify">
                  Built and deployed MERN stack applications, focusing on
                  delivering intuitive and scalable solutions for clients.
                  Technologies: MongoDB, Express.js, React, Node.jsSpecialized
                  in building responsive user interfaces and implementing secure
                  authentication. Gained positive feedback for delivering
                  high-quality work on time.
                </p>
              </div>
            </div>

            <div className="timeline-block timeline-block-left">
              <div className="marker"></div>
              <div className="timeline-content">
                <h3 className="text-rose-600">Built Personal projects</h3>
                <p className="text-white mb-3">
                  <em>January 2023 - Oct 2024</em>
                </p>
                <p className="text-justify text-gray-400">
                  I have built a variety of full-stack web applications including
                  an e-commerce platform with secure payments via Paypal, a
                  renting app featuring image uploads and real-time search
                  filters, and an AI chatbot powered by the Gemini API for
                  real-time user interactions. I have also created a responsive
                  landing page for a startup, optimized for both desktop and
                  mobile devices. These projects allowed me to gain hands-on
                  experience in React, Node.js, MongoDB, Express, JWT 
                  authentication, and payment integrations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
