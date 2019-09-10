async function getProjects () {
  const response = await fetch('https://api.github.com/orgs/RandomStudio/projects');
  const data = await response.json();

  console.log(data);
}

getProjects();
