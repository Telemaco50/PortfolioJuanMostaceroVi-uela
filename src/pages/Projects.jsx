import React from "react";

const Projects = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/prjects.html" // Ruta al archivo HTML en la carpeta public
        title="Projects"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default Projects;