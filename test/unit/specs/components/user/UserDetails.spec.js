import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import UserDetails from '@/components/user/UserDetails';
import state from '@/vuex/state';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UserDetails', () => {
  let store;
  let actions;
  let wrapper;
  beforeEach(() => {
    actions = {
      fetchUser: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      state,
    });
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
      store,
      localVue,
    });
  });
  it('expects user has a login value', () => {
    function callback() {
      expect(wrapper.vm.user.login).toBe('loginTeste');
    }
    actions.fetchUser(callback);
  });
  it('expects user has a name value', () => {
    function callback() {
      expect(wrapper.vm.user.name).toBe('name test');
    }
    actions.fetchUser(callback);
  });
  it('expects user has a bio value', () => {
    function callback() {
      expect(wrapper.vm.user.bio).toBe('bio test');
    }
    actions.fetchUser(callback);
  });
  it('expects user has a followers value', () => {
    function callback() {
      expect(wrapper.vm.user.followers).toBe(999);
    }
    actions.fetchUser(callback);
  });
  it('expects user has a following value', () => {
    function callback() {
      expect(wrapper.vm.user.following).toBe(999);
    }
    actions.fetchUser(callback);
  });
  it('expects user has a avatar_url value', () => {
    function callback() {
      expect(wrapper.vm.user.avatar_url).toBe('/sample.jpg');
    }
    actions.fetchUser(callback);
  });
  it('expects user has a avatar_url value', () => {
    function callback() {
      wrapper.vm.getUserState();
      expect(wrapper.vm.user.avatar_url).toBe('/sample.jpg');
    }
    actions.fetchUser(callback);
  });
});
