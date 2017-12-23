import slots_panel from './app.js'

slots_panel.install = function (Vue) {
    Vue.component(slots_panel.name, slots_panel);
};

export default slots_panel;