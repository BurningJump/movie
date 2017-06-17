<template>
    <div>
        <div class="user-header">
            <router-link to="/Setting" tag="li">
                <img src="../assets/img/set.png">
                <i class="iconfont">&#xe606;</i>
            </router-link>
            <img src="../assets/img/boy.png">
            <p>{{userId}}</p>
            <router-link to="">我的电影票</router-link>
        </div>
    	<mt-navbar v-model="selected">
    	    <mt-tab-item id="1">想看</mt-tab-item>
    	    <mt-tab-item id="2">在看</mt-tab-item>
    	    <mt-tab-item id="3">看过</mt-tab-item>
    	    <mt-tab-item id="4">影评</mt-tab-item>
    	    <mt-tab-item id="5">影人</mt-tab-item>
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
            userId: 'Tom',
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