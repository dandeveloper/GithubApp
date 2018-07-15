import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import Repo from '@/components/repo/Repo';
import BootstrapVue from 'bootstrap-vue';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(BootstrapVue);

describe('Repo', () => {
  let store;
  let actions;
  let wrapper;

  beforeEach(() => {
    actions = {
      showRepoDetails: jest.fn(() => Promise.resolve()),
    };
    store = new Vuex.Store({
      actions,
      state: {
        error: {
          code: '',
        },
        repo: {
          name: 'repo-test',
          stargazers_count: 99,
          language: 'JavaScript',
          full_name: 'user-test/repo-test',
          description: 'test description',
        },
      },
    });
    wrapper = shallowMount(Repo, {
      mocks: {
        $refs: {
          repoModal: {
            hide: jest.fn(),
          },
        },
      },
      store,
      localVue,
    });
  });
  it('expects to data repo has a name with value', () => {
    expect(wrapper.vm.repo.name).toBe('repo-test');
  });
  it('expects to data repo has a name with value', () => {
    expect(wrapper.vm.repo.stargazers_count).toBe(99);
  });
  it('expects to data repo has a language with value', () => {
    expect(wrapper.vm.repo.language).toBe('JavaScript');
  });
  it('expects to data repo has a full_name with value', () => {
    expect(wrapper.vm.repo.full_name).toBe('user-test/repo-test');
  });
  it('expects to data repo has a description with value', () => {
    expect(wrapper.vm.repo.description).toBe('test description');
  });
});
