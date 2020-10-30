import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { characterService } from 'services';
import { Page, SearchBar } from 'components';
import { Header, Results } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  results: {
    marginTop: theme.spacing(3)
  }
}));

const CustomerManagementList = () => {
  const classes = useStyles();
  const [characters, setCharacters] = useState({ results: [], info: {} });
  const [page, setPage] = useState(0);

  useEffect(() => {

    getCharacters({ page });

  }, [page]);

  const getCharacters = async (paged) => {
    const response = await characterService.getCharacters(paged);
    setCharacters(response.data);
  };

  const handleFilter = (filters) => {
    getCharacters(filters);
  };
  const handleSearch = (search) => {
    getCharacters({ name: search });
  };

  const handleChangePage = (pageFromComponent) => {
    setPage(pageFromComponent)
    getCharacters({ page: pageFromComponent });
  }

  return (
    <Page
      className={classes.root}
      title="Characters List"
    >
      <Header />
      <SearchBar
        onFilter={handleFilter}
        onSearch={handleSearch}
      />
      {characters.results && (
        <Results
          className={classes.results}
          characters={characters}
          handleChangePage={handleChangePage}
          page={page}
        />
      )}
    </Page>
  );
};

export default CustomerManagementList;
