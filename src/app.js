import Vue from 'vue';
import App from './entry';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Layout from './layouts';
import Home from './pages';
import Page1 from './pages/page1';
import Page2 from './pages/page2';

const data = [1, 2, 3, 4, 5, 6];

Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    children: [{ path: '', component: Home }]
  },
  {
    path: '/page1',
    component: Layout,
    children: [{ path: '', component: Page1 }]
  },
  {
    path: '/page2',
    component: Layout,
    children: [{ path: '', component: Page2 }]
  }
];

const router = new VueRouter({
  routes
});

const moduleA = {
  namespaced: true,
  state: {
    count: 1
  },
  actions: {
    increment({ state, commit, rootState }) {
      console.log(rootState.count);
    }
  }
};

const moduleB = {
  state: {
    count: 2
  },
  actions: {
    increment({ state, commit, rootState }) {
      console.log(rootState.count);
    }
  }
};

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'a', done: true },
      { id: 2, text: 'b', done: false }
    ],
    data: []
  },

  getters: {
    doneTodos: state => {
      return state.todos.filter(item => item.done);
    },
    doneTodoFilter: (state, getters) => {
      return getters.doneTodos;
    }
  },

  mutations: {
    increment(state) {
      state.count++;
    },
    saveData(state, payload) {
      state.data = payload;
    }
  },

  actions: {
    getData({ commit }) {
      return new Promise((resolve, reject) => {
        // resolve(data);
        commit('saveData', data);
      });
    }
  },

  modules: {
    a: moduleA,
    b: moduleB
  }
});

const vm = new Vue({
  el: '#root',
  store,
  router,
  render: h => h(App)
});
