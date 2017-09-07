<template>
    <div>
        <modal v-model="show">
            <div>dldddd</div>
        </modal>
        <button @click="open">打开</button>
    </div>
</template>

<script>
import Modal from './app.vue'
export default {
    data() {
        return {
            show: false
        }
    },
    methods: {
        open() {
            this.show = true
        }
    },
    components: {
        Modal
    }
}
</script>

<style>

</style>
