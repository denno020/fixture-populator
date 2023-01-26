import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { useApp } from './useApp';
import './App.css';

const teams = [
  'Adelaide',
  'Brisbane',
  'Carlton',
  'Collingwood',
  'Essendon',
  'Fremantle',
  'Geelong',
  'Gold Coast',
  'GWS',
  'Hawthorn',
  'Melbourne',
  'North Melbourne',
  'Port Adelaide',
  'Richmond',
  'St Kilda',
  'Sydney',
  'West Coast',
  'Western Bulldogs'
];

function App() {
  const { teamFixture, setSelectedTeam, selectedTeam } = useApp();

  return (
    <div className="App">
      <h1>Fixture Populator</h1>
      <p>Use this application to populate a Google Calendar with the fixture of your favourite team</p>
      <p>You can either add individual games, or the entire visible fixture</p>
      <section>
        <div>Filter By Team:</div>
        <div>
          {teams.map((team) => (
            <button className={selectedTeam === team ? 'selected-team' : ''} onClick={() => setSelectedTeam(team)}>
              <Image src={`/images/${team}.svg`} width="40" />
            </button>
          ))}
        </div>
      </section>
      {!!teamFixture && (
        <ul>
          <li className="match">
            <div>
              <strong>Round</strong>
            </div>
            <div>
              <strong>Home Team</strong>
            </div>
            <div>
              <strong>Location, Time</strong>
            </div>
            <div>
              <strong>Away Team</strong>
            </div>
          </li>
          {teamFixture.map((match) => (
            <li className="match" key={`${match.homeTeam}/${match.location}/${match.awayTeam}`}>
              <div>{match.round}</div>
              {!match.homeTeam && (
                <>
                  <div></div>
                  <div>BYE</div>
                  <div></div>
                </>
              )}
              {!!match.homeTeam && (
                <>
                  <div className="home-team">{match.homeTeam}</div>
                  <div className="location">
                    {match.location}, {match.date}
                  </div>
                  <div className="away-team">{match.awayTeam}</div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
