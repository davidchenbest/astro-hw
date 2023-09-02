<template lang="">
    <h1>{{ $translate('greetings.hello') }}</h1>
    <button v-on:click="store.increment">{{store.count}}</button>
</template>
<script>
import { useCounterStore } from '../store/index'
export default {
    created() {
        this.store = useCounterStore()
        this.store.increment()
        console.log(this.store.count);
    },
    mounted(){
        console.log(this.store);
    },
    methods: {
        
    },

}
</script>
<style lang="">
    
</style>