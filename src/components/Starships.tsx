import React, { useEffect } from 'react';
import fetch from '../fetch';
import { getIdFromUrl } from '../getIdFromUrl';

type Props = {
  urls: any;
};

type State = Array<{ name: 'string'; url: 'string' }>;

function Starship({ urls }: Props) {
  const [starships, setStarships] = React.useState<State>([]);

  const fetchStarships = async () => {
    for (const [idx, url] of urls.entries()) {
      const data = await fetch(url);

      setStarships(starship => starship.concat(data));
    }
  };

  useEffect(() => {
    fetchStarships();
  }, []);

  return (
    <div>
      {starships.map(starship => (
        <div key={getIdFromUrl(starship.url)}>{starship.name},</div>
      ))}
    </div>
  );
}

export default Starship;
