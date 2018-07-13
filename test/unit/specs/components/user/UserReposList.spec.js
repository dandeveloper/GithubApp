import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import UserReposList from '@/components/user/UserReposList';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UserReposList', () => {
  let store;
  let actions;
  let wrapper;
  beforeEach(() => {
    actions = {
      reposOrder: jest.fn(() => Promise.resolve()),
      fetchRepo: jest.fn(() => Promise.resolve()),
      showRepoDetails: jest.fn(() => Promise.resolve()),
    };
    store = new Vuex.Store({
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
      actions,
    });
    wrapper = shallowMount(UserReposList, {
      store,
      localVue,
    });
  });

  it('expects reposList has length 2', () => {
    expect(wrapper.vm.reposList).toHaveLength(2);
  });

  it('expects classArrowDirection return "fa-arrow-up"', () => {
    wrapper.find('.order-by').trigger('click');
    expect(wrapper.vm.classArrowDirection).toBe('fa-arrow-up');
  });

  it('expects classArrowDirection return "fa-arrow-down"', () => {
    store.state.reposOrder = 'ASC';
    wrapper.find('.order-by').trigger('click');
    expect(wrapper.vm.classArrowDirection).toBe('fa-arrow-down');
  });

  it('expects orderText return "Decrescente"', () => {
    store.state.reposOrder = 'ASC';
    wrapper.find('.order-by').trigger('click');
    expect(wrapper.vm.orderText).toBe('Decrescente');
  });

  it('expects orderText return "Crescente"', () => {
    wrapper.find('.order-by').trigger('click');
    expect(wrapper.vm.orderText).toBe('Crescente');
  });

  it('expects reposOrder action to have been called after .order-by click', () => {
    wrapper.find('.order-by').trigger('click');
    expect(actions.reposOrder).toHaveBeenCalledTimes(1);
  });

  it('expects fetchRepo action to have been called after .repo__link click', () => {
    wrapper.find('.repo__link').trigger('click');
    expect(actions.fetchRepo).toHaveBeenCalledTimes(1);
  });

  it('expects showRepoDetails action to have been called after .repo__link click', () => {
    wrapper.find('.repo__link').trigger('click');
    actions.fetchRepo().then(() => {
      expect(actions.showRepoDetails).toHaveBeenCalledTimes(1);
    });
  });
});
