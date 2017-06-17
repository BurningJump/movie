<template>
    <div>
    	<mt-navbar v-model="selected">
    	    <mt-tab-item id="1">想看</mt-tab-item>
    	    <mt-tab-item id="2">在看</mt-tab-item>
    	    <mt-tab-item id="2">看过</mt-tab-item>
    	    <mt-tab-item id="2">影评</mt-tab-item>
    	    <mt-tab-item id="2">影人</mt-tab-item>
    	</mt-navbar>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from './Tabbar';
export default {
    name: 'hello',
    data () {
        return {
            selected: 1,
        }
    },
    components: {
        Tabbar
    }
}
</script>

<style scoped>

</style>