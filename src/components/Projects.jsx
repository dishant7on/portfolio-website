import { useEffect, useState } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-backend-qmy7.onrender.com/api/projects")
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>

      {projects.map((project) => (
       <div className="project-card" key={project._id}>
  <h3>{project.title}</h3>

  <p>{project.description}</p>

  <button>View Project</button>
</div>
      ))}
    </section>
  );
}

export default Projects;