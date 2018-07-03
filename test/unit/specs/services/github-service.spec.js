import { fetchUser, fetchUserRepos } from '@/services/github-service';

describe('Request Valide User', () => {
  let user;
  beforeEach(() => {
    user = 'dandeveloper';
  });
  it('should fetch valid user', async () => {
    const response = await fetchUser(user);
    expect(response.data.login).toBe('dandeveloper');
  });
  it('status code must be 200', async () => {
    const response = await fetchUser(user);
    expect(response.status).toBe(200);
  });
});

describe('Request Invalid User', () => {
  it('status code must be 404', () => {
    const user = '';
    fetchUser(user).then((response) => {
      expect(response.status).toBe(404);
    });
  });
});

describe('Request Valide User Repos List', () => {
  let user;
  beforeEach(() => {
    user = 'dandeveloper';
  });
  it('status code must be 200', async () => {
    fetchUserRepos(user).then((response) => {
      expect(response.status).toBe(200);
    });
  });
});
