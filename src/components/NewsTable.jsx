import React from 'react';
import { 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  tableCellClasses,
  Link,
  Box,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as LinkIcon} from '@mui/icons-material';
import { Link as RouterLink} from 'react-router-dom';
import { CustomTablePagination } from './TablePagination';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    border: '1px solid #EFEFF3',
    backgroundColor: '#EFEFF3',
    color: '#212932',
  },
  [`&.${tableCellClasses.body}`]: {
    border: '1px solid #EFEFF3',
    fontSize: 14,
    padding: '8px 16px',
  },
}));

const textBoxStyling = {
  maxHeight: '44px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  display: '-webkit-box',
  WebkitLineClamp: '2',
  WebkitBoxOrient: 'vertical',
}

export const NewsTable = ({ news, amount }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 1168 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" sx={{ maxWidth: '100px'}}>Image</StyledTableCell>
            <StyledTableCell align="left" sx={{ maxWidth: '222px'}}>Title</StyledTableCell>
            <StyledTableCell align="left" sx={{ maxWidth: '164px'}}>Authors</StyledTableCell>
            <StyledTableCell align="left" sx={{ maxWidth: '291px'}}>Description</StyledTableCell>
            <StyledTableCell align="left" sx={{ minWidth: '112px'}}>Publication date</StyledTableCell>
            <StyledTableCell align="left" sx={{ minWidth: '86px'}}>Original URL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {news.map((article) => (
            <TableRow key={article.title} sx={{ height: '86px', overflow: 'hidden'}}>
              <StyledTableCell component="th" scope="row" sx={{ maxWidth: '100px'}}>
                <img 
                  src={article.urlToImage} 
                  alt={article.title.slice(0, 30)}
                  title={article.title}
                  style={{
                    width: '100px',
                    height: '70px',
                    objectFit: 'cover',
                  }}
                />
              </StyledTableCell>
              <StyledTableCell align="left" sx={{ maxWidth: '222px'}}>
                <Box sx={{...textBoxStyling}}>
                  <RouterLink 
                    to={`articles/${article.title}`} 
                    state={{ article }}
                    style={{ textDecoration: 'none', color: 'inherit'}}
                  >
                    {article.title}
                  </RouterLink>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="left" sx={{ maxWidth: '164px'}}>
                <Box sx={{...textBoxStyling}}>
                  {article.author}
                </Box>
              </StyledTableCell>
              <StyledTableCell align="left" sx={{ maxWidth: '291px'}}>
                <Box sx={{...textBoxStyling}}>
                  {article.description}
                </Box>
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ minWidth: '112px'}}>
                {article.publishedAt.slice(0, 10)}
              </StyledTableCell>
              <StyledTableCell align="center" sx={{ minWidth: '86px'}}>
                <Link href={article.url} target='blank' color='rgba(0, 0, 0, 0.54)'>
                  <LinkIcon />
                </Link>
              </StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <CustomTablePagination amount={amount} />
    </TableContainer>
  );
};
