import React from 'react';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../helpers/searchHelper';

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') || '';
  const country = searchParams.get('country') || '';

  const categories = [
    'business',
    'general',
    'health',
    'technology',
  ];

  const countries = [
    {
      value: 'gb',
      renderValue: 'United Kingdom',
    },
    {
      value: 'ua',
      renderValue: 'Ukraine',
    },
    {
      value: 'de',
      renderValue: 'Germany',
    },
    {
      value: 'pl',
      renderValue: 'Poland',
    },
  ];

  const onCategoryHandler = ({ target }) => {
    setSearchParams(
      getSearchWith(searchParams, { category: target.value || null }),
    );
  }

  const onCountryHandler = ({ target }) => {
    setSearchParams(
      getSearchWith(searchParams, { country: target.value || null }),
    );
  }

  return (
    <Box 
      display="flex" 
      gap="16px"
      width="100%" 
      justifyContent="flex-start"
      mb="20px"
    >
      <FormControl sx={{ minWidth: 250, gap: '4px' }} size="small" >
        <Typography 
          sx={{ fontSize: '12px', fontWeight: 500, lineHeight: '18px'}}
          component="label"
          htmlFor="category-select"
        >
          Category
        </Typography>
        <Select
          labelId="category-select"
          id="category-select"
          value={category}
          displayEmpty
          onChange={onCategoryHandler}
          renderValue={(selected) => {
            if (selected === "") {
              return <Typography sx={{ color: '#878B90' }}>Select</Typography>;
            }

            return selected[0].toUpperCase() + selected.slice(1);
          }}
        >
          {categories.map((category) => (
            <MenuItem
              key={category}
              value={category}
            >
              {category[0].toUpperCase() + category.slice(1)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 250, gap: '4px' }} size="small" >
        <Typography 
          sx={{ fontSize: '12px', fontWeight: 500, lineHeight: '18px'}}
          component="label"
          htmlFor="country-select"
        >
          Country
        </Typography>
        <Select
          labelId="country-select"
          id="country-select"
          value={country}
          displayEmpty
          onChange={onCountryHandler}
          renderValue={(selected) => {
            if (selected === "") {
              return <Typography sx={{ color: '#878B90' }}>Select</Typography>;
            }

            return countries.find(country => country.value === selected).renderValue;
          }}
        >
          {countries.map((country) => (
            <MenuItem
              key={country.value}
              value={country.value}
            >
              {country.renderValue}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
