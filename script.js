async function getProjects () {
  const target = document.getElementById('target');
  const response = await fetch('https://api.github.com/orgs/randomstudio/repos', {
    headers: new Headers({
      'Accept': 'application/vnd.github.baptiste-preview+json',
    })
  });
  const data = await response.json();
  data.forEach(repo => {
    const row = document.createElement('li');
    row.innerHTML = `<div>${repo.name}</div><div>${repo.has_pages}</div><div>${repo.pushed_at}</div>`
    target.append(row)
  })
  console.log(data);
}

getProjects();
