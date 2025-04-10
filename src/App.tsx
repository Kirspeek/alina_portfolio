import "./App.css";
import "./styles/components/MagicForest.css";
import projectsData from "./data/projects.json";
import avatar from "/assets/avatar.png";
import Book from "./components/Book";

interface Project {
  id: string;
  title: string;
  description: string;
  images?: string[];
  video?: string;
  color: string;
}

function App() {
  // Function to determine the layout class based on number of images
  const getLayoutClass = (images: string[] | undefined, projectId: string) => {
    if (!images) return "layout-1";
    if (projectId === "alphabet") return "alphabet-layout";
    const count = images.length;
    if (count <= 1) return "layout-1";
    if (count === 2) return "layout-2";
    if (count === 3) return "layout-3";
    return "layout-4";
  };

  // Function to determine if a card should span multiple columns
  const getSpanClass = (project: any) => {
    if (project.id === "lettering") return "span-3";
    if (project.id === "magic-forest" || project.id === "alphabet")
      return "span-2";
    return "";
  };

  // Function to render project images based on project type
  const renderProjectImages = (project: Project) => {
    if (project.id === "book") {
      return <Book images={project.images || []} />;
    }

    if (project.video) {
      return (
        <div className="project-images layout-1">
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
        </div>
      );
    }

    if (project.id === "alphabet" && project.images) {
      const [firstImage, ...remainingImages] = project.images;
      return (
        <div className="project-images alphabet-layout">
          <img
            className="alphabet-first-image"
            src={firstImage}
            alt={`${project.title} - 1`}
          />
          <div className="alphabet-scroll-container">
            {remainingImages.map((image: string, index: number) => (
              <div key={index} className="alphabet-scroll-image-wrapper">
                <img
                  className="alphabet-scroll-image"
                  src={image}
                  alt={`${project.title} - ${index + 2}`}
                />
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (project.id === "magic-forest" && project.images) {
      const sequentialImages = project.images.slice(0, 2);
      const horizontalImages = project.images.slice(2, 9);
      const remainingImages = project.images.slice(9);

      return (
        <div className="project-images magic-forest-layout">
          <div className="magic-forest-grid">
            {sequentialImages.map((image: string, index: number) => (
              <img
                key={index}
                className="project-image"
                src={image}
                alt={`${project.title} - ${index + 1}`}
              />
            ))}
          </div>
          <div className="magic-forest-horizontal">
            {horizontalImages.map((image: string, index: number) => (
              <img
                key={index + 6}
                className="project-image"
                src={image}
                alt={`${project.title} - ${index + 7}`}
              />
            ))}
          </div>
          <div className="magic-forest-grid">
            {remainingImages.map((image: string, index: number) => (
              <img
                key={index + 11}
                className="project-image"
                src={image}
                alt={`${project.title} - ${index + 12}`}
              />
            ))}
          </div>
        </div>
      );
    }

    return (
      <div
        className={`project-images ${getLayoutClass(project.images, project.id)}`}
      >
        {project.images?.map((image: string, index: number) => (
          <img
            key={index}
            className="project-image"
            src={image}
            alt={`${project.title} - ${index + 1}`}
          />
        ))}
      </div>
    );
  };

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
            <div
              key={project.id}
              className={`project-card ${project.color} ${getSpanClass(project)}`}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                {renderProjectImages(project)}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
