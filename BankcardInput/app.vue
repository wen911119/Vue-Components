<template>
    <input type="text" v-model="inputValue">
</template>

<script>
export default {
    props: {
        maxLength: {
            type: Number,
            default: 30
        }
    },
    data() {
        return {
            inputValue: ''
        }
    },
    watch: {
        inputValue: function (nv) {
            nv = nv.trim().replace(/[^\d]/g, '')
            if (nv.length > this.maxLength) {
                nv = nv.substring(0, this.maxLength)
            }
            if (nv.length % 4 != 0) {
                nv = nv.replace(/(\d\d\d\d)/g, '$1 ')
            } else {
                nv = nv.replace(/(\d\d\d\d)/g, '$1 ').trim()
            }

            this.inputValue = nv
        }
    }
}
</script>

<style>

</style>
