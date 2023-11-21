import React, { useCallback, useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import debounce from 'lodash.debounce';
import { getSearchWith } from '../helpers/searchHelper';
import { useSearchParams } from 'react-router-dom';

export const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const appliedQuery = searchParams.get('q')?.trim();
  const [query, setQuery] = useState(appliedQuery || '');

  const setQuerySearchParams = (value, curentParams) => {
    setSearchParams(
      getSearchWith(curentParams, { q: value || null }),
    );
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const ApplyQuery = useCallback(debounce(setQuerySearchParams, 500), []);

  const searchHandler = ({ target }) => {
    setQuery(target.value);
    ApplyQuery(target.value, searchParams);
  }

  return (
    <TextField 
      id="search"
      type="search"
      placeholder="Search arcticle"
      variant="outlined" 
      size="small"
      value={query}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
      onChange={searchHandler}
    />
  );
};
