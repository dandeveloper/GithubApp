import axios from 'axios';

const AUTHORIZATION = JSON.stringify(process.env.AUTHORIZATION);
const headers = {
  Authorization: AUTHORIZATION,
  Accept: 'application/vnd.github.v3+json',
};

export function fetchUser(username) {
  return axios.get(`https://api.github.com/users/${username}`, {
    headers,
  });
}

export function fetchUserRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`, {
    headers,
  });
}

export function fetchRepo(fullName) {
  return axios.get(`https://api.github.com/repos/${fullName}`, {
    headers,
  });
}
