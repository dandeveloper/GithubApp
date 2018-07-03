import axios from 'axios';

export function fetchUser(username) {
  return axios.get(`https://api.github.com/users/${username}`);
}

export function fetchUserRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`);
}

export function fetchRepo(fullName) {
  return axios.get(`https://api.github.com/repos/${fullName}`);
}
