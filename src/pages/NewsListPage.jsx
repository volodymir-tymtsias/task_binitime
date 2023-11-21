import { FilterAltOutlined } from "@mui/icons-material";
import { Box, Button, CircularProgress, Container, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Filters } from "../components/Filters";
import { NewsTable } from "../components/NewsTable";
import { getNews } from "../api/api";
import { SearchInput } from "../components/SearchInput";

export const NewsListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorLoading, setIsErrorLoading] = useState(false);
  const [IsResponseError, setIsResponseError] = useState(false);
  const [news, setNews] = useState([]);
  const [amountNews, setAmountNews] = useState(0);
  const [searchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const query = searchParams.get('q')?.trim();
  const category = searchParams.get('category') || '';
  const country = searchParams.get('country') || '';
  const page = searchParams.get('page') || '1';
  const pageSize = searchParams.get('pageSize') || '5';

  useEffect(() => {
    console.log('load');
    setIsErrorLoading(false);
    setIsResponseError(false);
    setIsLoading(true);
    getNews({
      country,
      category,
      q: query,
      page,
      pageSize,
    })
      .then(response => {
        if (response.status === 'ok') {
          setNews(response.articles);
          setAmountNews(response.totalResults);
        }

        if (response.status === 'error') {
          setIsResponseError(response.message);
        }
      })
      .catch(() => setIsErrorLoading(true))
      .finally(() => setIsLoading(false));
  }, [query, category, country, pageSize, page]);

  const onFiltersHandler = () => {
    setFiltersOpen(current => !current);
  }

  return(
    <Box
      sx={{
        pt: '16px',
        pb: '16px',
      }}
    >
      <Container sx={{ padding: '0 16px'}}>
        <Box 
          display="flex" 
          gap="16px"
          width="100%" 
          justifyContent="space-between"
          alignItems="center"
          pt="16px"
          pb="20px"
        >
          <Typography variant="h5">
            Formula Top Headlines
          </Typography>
          <Box display="flex" gap="20px">
            <SearchInput />
            <Button 
              variant="contained"
              startIcon={<FilterAltOutlined />}
              sx={{
                bgcolor: '#ECF0F6',
                color: '#1A232E',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#ECF0F6',
                },
              }}
              onClick={onFiltersHandler}
            >
              Filters
            </Button>
          </Box>
        </Box>
        
        {filtersOpen && (
          <Filters />
        )}

        {isLoading && (
          <Box textAlign="center" width="100%">
            <CircularProgress color="inherit" />
          </Box>
        )}

        {isErrorLoading && !isLoading && (
          <Box 
            sx={{ color: "red", border: '1px solid red', borderRadius: '3px'}} 
            textAlign="center" 
            width="100%"
          >
            <Typography variant="h5">Something went wrong</Typography>
          </Box>
        )}

        {!isErrorLoading && !isLoading && IsResponseError && (
          <Box 
            sx={{ color: "red", border: '1px solid red', borderRadius: '3px'}} 
            textAlign="center" 
            width="100%"
          >
            <Typography variant="h5">{IsResponseError}</Typography>
          </Box>
        )}

        {!isErrorLoading && !isLoading && !IsResponseError && !!news.length && (
          <Box textAlign="center" width="100%" mb="130px" >
            <NewsTable news={news} amount={amountNews} />
          </Box>
        )}

        {!isErrorLoading && !isLoading && !IsResponseError && !news.length && (
          <Box 
            sx={{ border: '1px solid black', borderRadius: '3px'}} 
            textAlign="center" 
            width="100%"
          >
            <Typography variant="h5">
              No matching news found, please change your filter settings
            </Typography>
          </Box>
        )}
      </Container>
    </Box>
  );
};