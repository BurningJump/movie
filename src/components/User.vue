<template>
    <div>
        <div class="user-header">
            <router-link to="/Setting">
                <img class="set" src="../assets/img/set.png">
            </router-link>
            <img class="avatar" :src="user.avatar">
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

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                    <ul>
                        <p>{{movie.wish_count}}部</p><span @click="">标签筛选</span>
                        <li v-for="movie in user">
                            {{movie.wish_count}}
                        </li>
                    </ul>
                </mt-loadmore>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                    <ul>
                        <li v-for="movie in comingMovies">
                            
                        </li>
                    </ul>
                </mt-loadmore>
            </mt-tab-container-item>
        </mt-tab-container>

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
            selected: '1',
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        //user/64249287
        // /v2/movie/subject/:id

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
        },
        wish(){
           let _this = this;
           axios.get('movie/subject/64249287')
           .then(function(res){
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
a{
    text-decoration: none;
}
.user-header .set{
    width: 10%;
    float: right;
}
.avatar{
    width: 20%;
    border-radius: 50%; 
}
</style>