import React from 'react';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import fetch from '../fetch';
import Card from './Card';
import Starships from './Starships';
import Spinner from './Spinner';
import Text from './Text';
import { getIdFromUrl } from '../getIdFromUrl';

const Grid = styled.main`
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 2rem;
`;

type State = {
  page: number;
  error: boolean;
  hasMore: boolean;
  isLoadingNext: boolean;
  data: Array<any>;
};

function Characters() {
  const [query, setQuery] = React.useState<State>({
    page: 0,
    error: false,
    isLoadingNext: false,
    hasMore: true,
    data: [],
  });

  const fetchCharacters = async (page: number) => {
    setQuery({
      ...query,
      isLoadingNext: true,
    });
    const data = await fetch(`https://swapi.co/api/people/?page=${page}`);
    setQuery({
      page,
      error: false,
      isLoadingNext: false,
      hasMore: !!data.next,
      data: [...query.data, ...data.results],
    });
  };

  const loadMore = () => {
    if (query.isLoadingNext) {
      return;
    }
    fetchCharacters(++query.page);
  };

  const infiniteScrollerLoader = (
    <div key={0}>
      <Spinner />
    </div>
  );

  return (
    <InfiniteScroll pageStart={0} loadMore={loadMore} hasMore={query.hasMore} loader={infiniteScrollerLoader} useWindow>
      <Grid>
        {query.data.map((person: any) => (
          <Card key={getIdFromUrl(person.url)}>
            <Text color="#ffe720">{person.name}</Text>
            {person.starships.length > 0 && (
              <Text>
                Starships: <Starships urls={person.starships} />
              </Text>
            )}
          </Card>
        ))}
      </Grid>
    </InfiniteScroll>
  );
}

export default Characters;
