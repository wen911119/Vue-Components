<template>
    <div class="wj-controlled-textarea">
        <textarea @blur="$emit('blur')" @focus="$emit('focus')" v-model="textareaValue">
        </textarea>
        <span>
            <label :class="{'warning':length>=maxLength}">{{length}}</label>/{{maxLength}}</span>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        maxLength: {
            type: Number,
            default: 30
        }
    },
    data() {
        return {
            textareaValue: this.value
        }
    },
    computed: {
        length: function() {
            return this.textareaValue.length
        }
    },
    watch: {
        textareaValue: function(nv) {
            let ln = nv.length
            if (ln > this.maxLength) {
                this.textareaValue = nv.substring(0, this.maxLength)
            } else {
                this.textareaValue = nv
            }
            this.$emit('change', this.textareaValue)
        },
        value: function(nv) {
            this.textareaValue = nv
        }
    }
}
</script>

<style>

</style>
