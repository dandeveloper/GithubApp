import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import UserSearch from '@/components/user/UserSearch';
import state from '@/vuex/state';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('UserSearch', () => {
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
    wrapper = shallowMount(UserSearch, {
      mocks: {
        $store: {
          state: {
            error: {
              code: '',
            },
          },
        },
      },
      store,
      localVue,
    });
  });

  it('expects to pass input value to search data', () => {
    wrapper.find('.search__input').setValue('teste');
    expect(wrapper.vm.search).toBe('teste');
  });

  it('expects submitSearch to have been called', () => {
    wrapper.vm.submitSearch = jest.fn();

    wrapper.find('.search__input').setValue('teste');
    wrapper.find('.search__button').trigger('click');
    function callback() {
      expect(wrapper.vm.submitSearch).toHaveBeenCalledTimes(1);
    }
    actions.fetchUser(callback);
  });

  it('expects submitSearch to have been called', () => {
    wrapper.vm.submitSearch = jest.fn();

    wrapper.find('.search__input').setValue('teste');
    wrapper.find('.search__button').trigger('click');

    function callback() {
      expect(wrapper.vm.submitSearch).toHaveBeenCalledTimes(1);
    }
    actions.fetchUser(callback);
  });
});
