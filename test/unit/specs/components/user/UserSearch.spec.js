import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import UserSearch from '@/components/user/UserSearch';
import state from '@/vuex/state';
import VueRouter from 'vue-router';

const localVue = createLocalVue();
localVue.use(Vuex);
localVue.use(VueRouter);

describe('UserSearch', () => {
  let store;
  let actions;
  let router;

  beforeEach(() => {
    actions = {
      fetchUser: jest.fn(() => Promise.resolve()),
    };
    store = new Vuex.Store({
      actions,
      state,
    });
    router = new VueRouter({
      routes: [
        {
          name: 'User',
          path: '/user/',
        },
      ],
    });
  });
  it('expects to submitSearch and redirectToUser to have been called on form submit', () => {
    const wrapper = shallowMount(UserSearch, {
      store,
      router,
      localVue,
    });

    const submitSearch = jest.spyOn(wrapper.vm, 'submitSearch');
    const redirectToUser = jest.spyOn(wrapper.vm, 'redirectToUser');

    wrapper.find('.search__input').setValue('teste');
    wrapper.find('.search__form').trigger('submit');

    expect(submitSearch).toHaveBeenCalled();
    expect(redirectToUser).toHaveBeenCalled();
  });

  it('expects to redirectToUser to have been called inside submitSearch', () => {
    const wrapper = shallowMount(UserSearch, {
      store,
      router,
      localVue,
    });
    const spy = jest.spyOn(wrapper.vm, 'redirectToUser');
    const value = 'teste';
    wrapper.vm.submitSearch(value);
    expect(spy).toHaveBeenCalled();
  });

  it('expects to redirectToUser not to have been called inside of submitSearch', () => {
    const wrapper = shallowMount(UserSearch, {
      store,
      router,
      localVue,
    });
    const spy = jest.spyOn(wrapper.vm, 'redirectToUser');
    const value = '';
    wrapper.vm.submitSearch(value);
    expect(spy).not.toHaveBeenCalled();
  });
});
