import './Project.scss';
import React from 'react';

const Project = ({ project }) => {
  return (
    <article>
      <main>

      </main>
      <header class="details">
        <a href={project.html_url}>{project.name}</a>
        <p>{project.pushed_at}</p>
      </header>
    </article>
  );
}

export default Project;
