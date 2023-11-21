import React from 'react';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

export const ArticlePage = () => {
  let { state } = useLocation();
  const navigate = useNavigate();

  const backHandler = () => navigate(-1);

  window.scrollTo({
    top: 0,
    left: 0,
  });

  return (
    <>
      <Container>
        <Box display="flex" pt="16px" pb="20px" mb="18px" width="100%">
          <IconButton 
            aria-label="back" 
            size="small"
            sx={{ mr: '12px' }}
            onClick={backHandler}
          >
            <ArrowBack fontSize="small" />
          </IconButton>
          <Typography variant="h5" sx={{ fontSize: '22px', lineHeight: '29px'}}>
            {state.article.title}
          </Typography>
        </Box>
        <Box display="flex" mb="20px" width="100%" justifyContent="space-between">
          <Typography variant="body1" sx={{ fontWeight: '600', color: 'rgba(33, 41, 50, 0.54)'}}>
            {`Source: ${state.article.source.name}`}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: '600', color: 'rgba(33, 41, 50, 0.54)'}}>
            {`Publication date: ${state.article.publishedAt.slice(0, 10)}`}
          </Typography>
        </Box>
        <Box display="flex" mb="32px" width="100%" flexDirection="column">
          <Typography variant="h6" mb="16px" sx={{ fontSize: '16px', fontWeight: '700' }}>
            Description
          </Typography>
          <Typography variant="body1">
            {state.article.description}
          </Typography>
        </Box>
      </Container>

      <Box width="100%" display="flex" justifyContent="center" mb="32px">
        <img 
          src={state.article.urlToImage} 
          alt={state.article.title}
          title={state.article.title}
          style={{
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>

      <Container>
        <Box display="flex" mb="60px" width="100%" flexDirection="column">
          <Typography variant="h6" mb="16px" sx={{ fontSize: '16px', fontWeight: '700' }}>
            Content
          </Typography>
          <Typography variant="body1" mb="32px">
            {state.article.content}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: '600', color: 'rgba(33, 41, 50, 0.54)'}}>
            {`Authors: ${state.article.author}`}
          </Typography>
        </Box>
      </Container>
    </>
  );
};
