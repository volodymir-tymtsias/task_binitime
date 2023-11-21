import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NotFoundPage } from './pages/NotFoundPage';
import { NewsListPage } from './pages/NewsListPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Box } from '@mui/material';
import { ArticlePage } from './pages/ArticlePage';

export const App = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Header />
      <Box component="main" flexGrow={1}>
        <Routes>
          <Route path="/">
            <Route index element={<NewsListPage />} />
            
          </Route>
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="articles/:articleTitle" element={<ArticlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
};
