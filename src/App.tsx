import "./App.css";
import projectsData from "./data/projects.json";

function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="logo">
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
                <span className="project-type">{project.type}</span>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="image-scroll-container">
                  {project.images.map((image, index) => (
                    <div key={index} className="image-wrapper">
                      <img
                        src={image}
                        alt={`${project.title} - ${index + 1}`}
                      />
                    </div>
                  ))}
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
