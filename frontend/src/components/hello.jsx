import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const HelloCard = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          Hello, World!
        </Typography>
        <Typography color="textSecondary">
          Welcome to our social media platform.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default HelloCard;