import React, { useEffect, useState } from 'react';
import styles from './styles.scss';
import Project from './Project/Project';

const App = () => {
  const [iss, setISS] = useState([]);
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
      const repos = await response.json();
      setRepos(repos);

      const timestamps = repos.slice(0, 9).map(r => Date.parse(r.pushed_at) / 1000);
      const sat_response = await fetch(`https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=${timestamps}&units=miles`);
      setISS(await sat_response.json());
    }

    getRepos();
  }, []);

  return (
    <>
      {repos.map((project, i) => <Project iss={iss[i]} key={project.id} project={project} />)}
    </>
  )
}

export default App;
