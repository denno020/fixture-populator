// Run this on the "Full Fixture" page
// Will have to be run on each page manually
// Copy the string output into a new seed file with the year as the file name
const round = document.querySelector('.custom-radio__input:checked').value

const matches = Array.from(document.querySelectorAll('.match-list__item')).map((match) => {
  const teams = Array.from(match.querySelectorAll('.match-team'));
  const time = match.querySelector('.match-scheduled__time').dataset.date;
  const location = match.querySelector('.match-scheduled__venue').innerText.replace(',', '')

  return {
    homeTeam: teams[0].querySelector('.match-team__name').innerText.trim(),
    awayTeam: teams[1].querySelector('.match-team__name').innerText.trim(),
    location,
    time
  }
});

console.log(JSON.stringify({[round]: matches}))