import app_layout from './app.vue'

app_layout.install = function (Vue) {
    Vue.component(app_layout.name, app_layout);
};

export default app_layout;