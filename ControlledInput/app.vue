<template>
    <input type="text" :placeholder="placeholder" @blur="$emit('blur')" @focus="$emit('focus')" v-model="inputValue">
</template>

<script>
export default {
    name:'vue-controlled-input',
    props: {
        value: {
            type: String,
            default: ''
        },
        maxLength: {
            type: Number,
            default: 20
        },
        placeholder: {
            type: String,
            default: '请输入'
        }
    },
    data() {
        return {
            inputValue: this.value
        }
    },
    watch: {
        inputValue: function(nv) {
            let ln = nv.length
            if (ln > this.maxLength) {
                this.inputValue = nv.substring(0, this.maxLength)
            } else {
                this.inputValue = nv
            }
            this.$emit('change', this.inputValue)
        },
        value: function(nv) {
            this.inputValue = nv
        }
    }
}
</script>

<style>

</style>
