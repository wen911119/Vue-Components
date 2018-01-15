<template>
    <div class="common-cell" @click="$emit('click')">
        <div class="wrap">
            <label class="left">
                <div class="title">{{title}}
                    <i v-if="required" class="required">*</i>
                </div>
                <div class="gap" v-if="$slots.content"></div>
                <div class="content">
                    <slot name="content"></slot>
                </div>
            </label>
            <div class="right">
                <slot name="right"></slot>
            </div>
        </div>
        <hr :class='{"not-last":!last}'>
    </div>
</template>

<script>
    export default {
        name: 'vue-common-cell',
        props: {
            required: {
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: '标题'
            },
            last: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped>
    .wrap {
        display: flex;
    }

    .left {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }

    .right {
        display: flex;
        align-items: center;
    }

    hr {
        margin: 0;
    }
</style>