import React from 'react';
import { Box, Container, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as LogoIcon } from '../images/LogoFooter.svg';
import { Link as RouterLink} from 'react-router-dom';
import { MailOutline } from '@mui/icons-material';

export const Footer = () => {

  return (
    <Box 
      sx={{ boxShadow: '0px -2px 4px 0px #DFDFDF40', pt: '10px', pb: '16px' }} 
      component="footer"
    >
      <Container>
        <Box display={'flex'} flexDirection={'column'} alignItems={'flex-start'} gap={'16px'}>
          <RouterLink to="/">
            <SvgIcon
              component={LogoIcon} 
              sx={{ height: '18px', width: '85px' }}
              color='primary'
              inheritViewBox 
            />
          </RouterLink>

          <Box display={'flex'} justifyContent={'space-between'} width={'100%'}>
            <Typography
              variant="body2"
              component="p"
              sx={{ color: '#4E5460' }}
            >
              ©Formula 2023. All Rights Reserved
            </Typography>

            <Typography
              variant="body2"
              component="a"
              href="mailto: info@formula.com"
              sx={{ 
                color: '#4E5460', 
                textDecoration: 'none',
                display: 'flex',
                gap: '2px',
                alignItems: 'center'
              }}
            >
              <MailOutline />
              info@formula.com
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
