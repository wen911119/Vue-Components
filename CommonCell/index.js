var vue_common_cell = require('./app.vue');

vue_common_cell.install = function (Vue) {
    Vue.component(vue_common_cell.name, vue_common_cell);
};

export default vue_common_cell;