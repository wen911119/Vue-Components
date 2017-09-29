import vue_controlled_textarea from './app.vue'

vue_controlled_textarea.install = function (Vue) {
    Vue.component(vue_controlled_textarea.name, vue_controlled_textarea);
};

export default vue_controlled_textarea;