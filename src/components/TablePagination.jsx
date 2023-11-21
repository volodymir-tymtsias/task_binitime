import React from 'react';
import { TablePagination } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../helpers/searchHelper';

export const CustomTablePagination = ({ amount }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get('page') 
    ? +searchParams.get('page') - 1
    : 0;
  const rowsPerPage = [5, 10, 25, 50, 100].includes(+searchParams.get('pageSize')) 
    ? +searchParams.get('pageSize')
    : 5;

  const handleChangePage = (event, newPage) => {
    setSearchParams(
      getSearchWith(searchParams, { page: newPage + 1 }),
    );
  };

  const handleChangeRowsPerPage = ({ target }) => {
    setSearchParams(
      getSearchWith(searchParams, { pageSize: target.value, page: 1 }),
    );
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, 50, 100]}
      component="div"
      count={amount}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};
