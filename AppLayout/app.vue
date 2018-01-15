<template>
    <div class="app-layout flex flex-column" :style="{backgroundColor:bgColor}">
        <div class="top">
            <slot name="layout-top">
            </slot>
        </div>
        <div class="content flex-1">
            <slot name="layout-content">

            </slot>
        </div>
        <div class="bottom">
            <slot name="layout-bottom">

            </slot>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            bgColor: {
                type: String,
                default: '#fff'
            }
        }
    }
</script>
<style scoped>
    .app-layout {
        height: 100%;
    }

    .flex {
        display: flex;
    }

    .flex-column {
        flex-direction: column;
    }

    .flex-1 {
        flex: 1;
    }

    .content {
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
    }
</style>