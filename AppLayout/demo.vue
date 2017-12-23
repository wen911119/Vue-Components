<template>
    <app-layout>
        <div class="header" slot="layout-top">header</div>
        <div class="content" slot="layout-content">content</div>
        <div class="bottom" slot="layout-bottom">bottom</div>
    </app-layout>
</template>

<script>
    import appLayout from './app.vue'
    export default {
        components: {
            appLayout
        }
    }
</script>

<style>
   html,body{
       height: 100%;
       padding: 0;
       margin: 0;
   }

</style>