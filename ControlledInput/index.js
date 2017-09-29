import vue_controlled_input from './app.vue'

vue_controlled_input.install = function (Vue) {
    Vue.component(vue_controlled_input.name, vue_controlled_input);
};

export default vue_controlled_input;