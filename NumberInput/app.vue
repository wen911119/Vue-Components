<template>
    <div>
        <input type="text" @blur="$emit('blur')" @focus="$emit('focus')" v-model="inputValue">
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'uint'
        },
        value: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            inputValue: this.value
        }
    },
    watch: {
        inputValue: function (nv) {
            this.inputValue = nv.replace(/[^\d]/g, '')
        }
    }
}
</script>

<style>

</style>
