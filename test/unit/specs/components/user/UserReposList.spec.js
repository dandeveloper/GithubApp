import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import UserReposList from '@/components/user/UserReposList';
import state from '@/vuex/state';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UserReposList', () => {
  let store;
  let actions;
  let wrapper;
  beforeEach(() => {
    actions = {
      fetchUser: jest.fn(),
      fetchUserRepos: jest.fn(),
      reposStarsDESC: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
      state,
    });
    wrapper = shallowMount(UserReposList, {
      mocks: {
        $store: {
          state: {
            user: {
              login: 'teste',
            },
            repos: [{
              name: 'repo 1',
              stargazers_count: 1,
            },
            {
              name: 'repo 2',
              stargazers_count: 2,
            }],
            reposOrder: 'DESC',
          },
        },
      },
      store,
      localVue,
    });
  });
  it('expects reposList has length 2', () => {
    function callback() {
      expect(wrapper.vm.reposList).toHaveLength(2);
    }
    actions.fetchUserRepos(callback);
  });

  it('expects change order clicking on .order-by element', () => {
    function callback() {
      wrapper.find('.order-by').trigger('click');
      expect(state.reposOrder).toEqual('ASC');
    }
    actions.fetchUserRepos(callback);
  });

  it('expects change showRepoDetails state on clicking on .repo__link element', () => {
    function callback() {
      wrapper.find('.repo__link')[0].trigger('click');
      expect(state.showRepoDetails).toBeTruthy();
    }
    actions.fetchUserRepos(callback);
  });
});
