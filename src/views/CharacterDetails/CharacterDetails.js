import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Table,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
  CardActions,
  Button,
  Avatar,
  Grid,
  colors
} from '@material-ui/core';
import { useParams, useHistory } from "react-router-dom";

import { characterService } from 'services';

import { Page } from 'components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  divider: {
    backgroundColor: colors.grey[300]
  },
  content: {
    marginTop: theme.spacing(3),
    padding: 0
  },
  actions: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  center: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(3)
  },
  avatar: {
    height: 150,
    width: 150,
    marginRight: theme.spacing(1)
  },
  buttonIcon: {
    marginRight: theme.spacing(1)
  }
}));

const CharacterDetails = () => {
  const classes = useStyles();
  const [character, setCharacter] = useState();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getCharacter(id);

  }, [id]);

  const getCharacter = async (id) => {
    const response = await characterService.getCharacter(id);
    setCharacter(response.data);
  };

  return (
    <Page
      className={classes.root}
      title="Character Details"
    >
      <Grid
        className={clsx(classes.root)}
        container
        spacing={3}
      >
        <Grid
          item
          lg={4}
          md={6}
          xs={12}
        >
          <Card
            className={clsx(classes.root)}
          >
            <CardHeader title="Character info" />
            <Divider />
            <CardContent className={classes.content}>
              {character ?
                <>
                  <div className={classes.center}>
                    <Avatar
                      className={classes.avatar}
                      src={character.image}
                    >
                    </Avatar>
                  </div>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>
                          {character.name}
                        </TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>Status</TableCell>
                        <TableCell>{character.status}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Species</TableCell>
                        <TableCell>{character.species}</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>Type</TableCell>
                        <TableCell>{character.type}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Gender</TableCell>
                        <TableCell>{character.gender}</TableCell>
                      </TableRow>
                      <TableRow selected>
                        <TableCell>Origin</TableCell>
                        <TableCell>{character.origin.name}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Location</TableCell>
                        <TableCell>{character.location.name}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </> :
                <div className={classes.center}>
                  <CircularProgress />
                </div>
              }
            </CardContent>
            <CardActions className={classes.actions}>
              <Button onClick={() => history.goBack()} color="primary" variant="contained">
                back
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Page>
  );
};

export default CharacterDetails;
