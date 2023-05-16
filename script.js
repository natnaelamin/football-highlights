const apiUrl = 'https://api.football-data.org/v2/competitions/PL/scorers';
const button = document.querySelector('#fetch-button');
const dataContainer = document.querySelector('#data-container');

button.addEventListener('click', () => {
  fetch(apiUrl, {
    headers: {
      'X-Auth-Token': '71681a3171f44458bfe1791951004a1c'
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Create an <ul> element to display the data
      const ul = document.createElement('ul');

      // Loop through the scorers and create an <li> element for each one
      data.scorers.forEach(scorer => {
        const li = document.createElement('li');
        li.textContent = `${scorer.player.name} (${scorer.team.name}): ${scorer.numberOfGoals} goals`;
        ul.appendChild(li);
      });

      // Add the <ul> element to the data container
      dataContainer.innerHTML = '';
      dataContainer.appendChild(ul);
    })
    .catch(error => console.error(error));
});
