import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import Project from './Project/Project';

const App = () => {
  const [projects, setProjects] = useState([]);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      const target = document.getElementById('target');
      const response = await fetch('https://api.github.com/orgs/randomstudio/repos', {
        headers: new Headers({
          'Accept': 'application/vnd.github.baptiste-preview+json',
          'Authorization': 'token 960e1ca5a51783cae1906a1c609f260c6cff884e'
        })
      });
      setRepos(await response.json());
    }

    getRepos();
  }, []);

  useEffect(() => {
    const getProjects = async (repo) => {
      const response = await fetch('https://api.github.com/orgs/randomstudio/repos', {
        headers: new Headers({
          'Accept': 'application/vnd.github.baptiste-preview+json',
        })
      });
    }

    if (repos.length > 0) {
      // setProjects(repos.map(async repo => getProjects(repo)));
    }
  }, [repos]);


  return (
    <>
      {repos.map(project => <Project key={project.id} project={project} />)}
    </>
  )
}

export default App;
