import React from 'react';
// Components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
// Types
import { User } from './Carousel';

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    width: 320
  },
  media: {
    height: 150
  }
});

type Props = {
  user: User;
};

const UserCard: React.FC<Props> = ({ user }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={user.img_url} />
      <CardContent>
        <Typography gutterBottom variant='h5'>
          Name: {user.name}
        </Typography>
        <Typography gutterBottom color='textSecondary'>
          Hair: {user.hair}
          <br />
          Origin: {user.origin}
          <br />
          Species: {user.species}
          <br />
          Status: {user.status}
          <br />
          Alias:
          <br />
        </Typography>
        {user.alias.map((alias: any) => (
          <Chip key={alias} style={{ margin: 3 }} size='small' label={alias} />
        ))}
        <Typography color='textSecondary'>Abilities:</Typography>
        {user.abilities.map((ability: any) => (
          <Chip
            key={ability}
            style={{ margin: 3 }}
            size='small'
            label={ability}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default UserCard;