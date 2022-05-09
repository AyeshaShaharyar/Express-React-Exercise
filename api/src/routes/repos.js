import { Router } from 'express';
import { default as localFile } from '../../data/repos.json';
import fetch from 'node-fetch';

export const repos = Router();

repos.get('/', async (req, res) => {
  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  const repoURL = 'https://api.github.com/users/silverorange/repos';
  const apiResponse = await getRepo(repoURL);
  res.header('Cache-Control', 'no-store');
  res.setHeader('Content-Type', 'application/json');
  if (apiResponse) {
    const mergedArray = [...localFile, ...apiResponse];
    res.status(200);
    res.send(mergedArray);
  } else {
    res.status(500).send('Api Response Error');
  }
});

async function getRepo(url) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();
  return data;
}
