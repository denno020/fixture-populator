import { useState, useMemo } from 'react';
import fixture from '../seeds/2023';

export const useApp = () => {
  const [selectedTeam, setSelectedTeam] = useState('');

  const teamFixture = useMemo(() => {
    if (selectedTeam === '') return null;

    return Object.entries(fixture).map(([round, matches]) => {
      const match = matches.find((m) => m.homeTeam === selectedTeam || m.awayTeam === selectedTeam);
      const date = new Date(Number(match?.time ?? ''));
      return {
        round,
        ...match,
        date: `${date.getHours()}:${date.getMinutes().toString().padEnd(2, '0')} ${date.getDate()}/${
          date.getMonth() + 1
        }/${date.getFullYear()}`
      };
    });
  }, [selectedTeam]);

  return {
    teamFixture,
    selectedTeam,
    setSelectedTeam
  };
};
