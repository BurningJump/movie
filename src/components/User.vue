<template>
    <div>
        <div class="user-header">
            <router-link to="/Setting" tag="li">
                <img src="../assets/img/set.png">
                <i class="iconfont">&#xe606;</i>
            </router-link>
            <img :src="user.avatar">
            <p>{{user.name}}</p>
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
import axios from "axios"
import mint from 'mint-ui';
export default {
    name: 'hello',
    data () {
        return {
            user: {},
            selected: 1,
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        //user/64249287

        init(){
            let _this = this;
            axios.get('user/64249287')
            .then(function(res){
                console.log(res.data)
                _this.user = res.data;
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
        }
    },
    components: {
        Tabbar
    }
}
</script>

<style scoped>

</style>