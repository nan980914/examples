let Vue;

// forEach是用来循环一个对象
const forEach = (obj, callback) => {
  Object.keys(obj).forEach((key) => {
    callback(key, obj[key]);
  });
};

class Store {
  constructor(options) {
    console.log("options", options);

    // state原理
    // this.state = options.state;

    this._s = new Vue({
      data: {
        state: options.state,
      },
    });

    // getters
    let getters = options.getters || {};
    this.getters = {};

    forEach(getters, (getter, value) => {
      Object.defineProperty(this.getters, getter, {
        get: () => {
          return value(this.state);
        },
      });
    });

    // mutations
    let mutations = options.mutations || {};
    this.mutations = {};

    forEach(mutations, (mutation, value) => {
      this.mutations[mutation] = (payload) => {
        value(this.state, payload);
      };
    });

    // console.log('this.mutations===',this.mutations)

    // actions
    let actions = options.actions || {};
    this.actions = {};

    forEach(actions, (action, value) => {
      this.actions[action] = (payload) => {
        value(this, payload);
      };
    });
  }
  get state() {
    return this._s.state;
  }
  commit = (type, payload) => {
    this.mutations[type](payload);
  }
  dispatch = (type, payload) => {
    this.actions[type](payload);
  }
}

const install = (_Vue) => {
  Vue = _Vue;
  Vue.mixin({
    beforeCreate() {
      // 保证每一个实例都能得到$store仓库
      if (this.$options && this.$options.store) {
        this.$store = this.$options.store;
      } else {
        this.$store = this.$parent && this.$parent.$store;
      }
    },
  });
};

export default { install, Store };
