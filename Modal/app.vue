<template>
    <div class="modal" v-if="show" :style="{zIndex:zIndex}" @click="maskClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        clickClose: {
            type: Boolean,
            default: true
        },
        opacity: {
            type: Number,
            default: 0.3
        },
        zIndex: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            show: this.value
        }
    },
    watch: {
        value: function(nv) {
            this.show = nv
        },
        show: function(nv) {
            this.$emit('input', nv)
        }
    },
    methods: {
        open() {
            this.show = true
        },
        maskClick() {
            this.clickClose && (this.show = false)
        }
    }
}
</script>

<style scoped>
.modal {
    opacity: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
