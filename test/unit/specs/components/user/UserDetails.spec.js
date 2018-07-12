import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import UserDetails from '@/components/user/UserDetails';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('UserDetails', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(UserDetails, {
      mocks: {
        $store: {
          state: {
            user: {
              login: 'loginTeste',
              name: 'name test',
              bio: 'bio test',
              email: 'email@test.com',
              followers: 999,
              following: 999,
              avatar_url: '/sample.jpg',
            },
          },
        },
      },
      localVue,
    });
  });
  it('expects user has a login value', () => {
    expect(wrapper.vm.user.login).toBe('loginTeste');
  });
  it('expects user has a name value', () => {
    expect(wrapper.vm.user.name).toBe('name test');
  });
  it('expects user has a bio value', () => {
    expect(wrapper.vm.user.bio).toBe('bio test');
  });
  it('expects user has a email value', () => {
    expect(wrapper.vm.user.email).toBe('email@test.com');
  });
  it('expects user has a followers value', () => {
    expect(wrapper.vm.user.followers).toBe(999);
  });
  it('expects user has a following value', () => {
    expect(wrapper.vm.user.following).toBe(999);
  });
  it('expects user has a avatar_url value', () => {
    expect(wrapper.vm.user.avatar_url).toBe('/sample.jpg');
  });
});
