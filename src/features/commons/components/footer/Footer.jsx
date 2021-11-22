import React from 'react';
import {
  Link,
  Typography,
} from '@mui/material';

const Footer = () => (
  <footer
    style={{
      marginTop: 24,
      textAlign: 'center',
    }}
  >
    <Typography variant="body2" color="textSecondary">
      {`Copyright © ${new Date().getFullYear()}`}
      {' '}
      <Link href="/">
        Flixer.com
      </Link>
      {' '}
      All rights reserved.
    </Typography>
  </footer>
);

export default Footer;
