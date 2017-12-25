<template>
    <div class="panel-component-demo">
        <panel gap=30 >
            <span slot="slot-2">wee2</span>
            <span slot="slot-1">wee</span>
            <span>wee3</span>
        </panel>
        <panel gap=10 >
            <span slot="slot-2">wee2</span>
            <span slot="slot-1">wee</span>
            <span>wee3</span>
        </panel>
    </div>
</template>
<script>
    import panel from './app.js'
    export default {
        components: {
            panel
        }
    }
</script>
<style scoped>
</style>