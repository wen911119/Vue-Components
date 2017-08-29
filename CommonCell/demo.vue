<template>
    <common-cell class="wenjun">
        <input type="text" slot="content" placeholder="请输入">
        <i slot="right">></i>
    </common-cell>
</template>

<script>
import CommonCell from './app.vue'
export default {
    components: {
        CommonCell
    }
}
</script>

<style>
body{
    margin: 0;
    padding: 0;
}
</style>
