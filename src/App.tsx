import "./App.css";
import projectsData from "./data/projects.json";
import avatar from "./assets/avatar.png";

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">
          <img src={avatar} alt="Avatar" className="avatar" />
          <h1>DESIGN ABOUT</h1>
          <p>ART BELONGS TO THE PEOPLE!</p>
        </div>

        <div className="bio">
          <p>
            I am a creative developer and designer based in Madrid, working
            worldwide.
          </p>
          <p>Always passionate. Always on the move.</p>
        </div>

        <nav className="social-links">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`>`} Instagram
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`>`} Behance
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {`>`} LinkedIn
          </a>
        </nav>

        <div className="blog-section">
          <button className="blog-button">BLOG</button>
        </div>
      </aside>

      <main className="main-content">
        <div className="dashboard">
          {projectsData.projects.map((project) => (
            <div key={project.id} className={`project-card ${project.color}`}>
              <div className="project-card-content">
                <div className="card-header">
                  <span className="project-label">{project.title}</span>
                  <h2>{project.description}</h2>
                </div>
                <div className="image-scroll-container">
                  {project.video ? (
                    <div className="video-wrapper">
                      <video
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline
                        src={project.video}
                      />
                    </div>
                  ) : (
                    project.images?.map((image, index) => (
                      <div key={index} className="image-wrapper">
                        <img
                          src={image}
                          alt={`${project.title} - ${index + 1}`}
                        />
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
