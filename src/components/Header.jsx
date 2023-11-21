import React from 'react';
import { AppBar, SvgIcon } from '@mui/material';
import { ReactComponent as LogoIcon } from '../images/Logo.svg';
import { Link as RouterLink } from 'react-router-dom';

export const Header = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: '#1A232E', alignItems: 'center'}} >
      <RouterLink component="a" to="/">
        <SvgIcon 
          component={LogoIcon} 
          sx={{ height: '36px', width: '160px', mt: '14px', mb: '14px' }} 
          inheritViewBox 
        />
      </RouterLink>
    </AppBar>
  );
};
