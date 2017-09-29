var vue_controlled_input = require('./app.vue').default;

vue_controlled_input.install = function (Vue) {
    Vue.component(vue_controlled_input.name, vue_controlled_input);
};

export default vue_controlled_input;