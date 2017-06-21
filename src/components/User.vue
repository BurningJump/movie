<template>
    <div>
        <div class="user-header">
            <router-link to="/Setting">
                <img class="set" src="../assets/img/set.png">
            </router-link>
            <img class="avatar" :src="user.avatar">
            <div class="detail">
                <p>{{user.name}}</p>
                <router-link to="">我的电影票</router-link>
            </div>
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
                        <p><span>{{wish_count}}部</span><span @click="">标签筛选</span></p>
                        <li v-for="movie in user">
                            
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
            wish_count: 122,
            allLoaded: false,
            comingMovies:[]
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
        },
        loadTop() {
            // 加载更多数据
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
            // 加载更多数据
            this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
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
.user-header{
    background-color: green;
    padding-bottom: 5%;
    min-height: 115px;
}
.detail{
    width: 55%;
    margin: -6% 0% 0% 32%;
    color: #fff;
}
.detail p{
    border-bottom: 1px solid #fff;
    font-size: 2rem;
    padding-bottom: 5%;
    margin-bottom: 5%;
}
.detail a{
    color: #fff;
    font-size: 1.3rem;
}
.user-header .set{
    width: 13%;
    float: right;
}
.avatar{
    border: 1px solid #fff;
    width: 20%;
    border-radius: 50%;
    margin: 13% 1% -12% 5%;
}
.mint-navbar{
    border-bottom: 1px solid #ccc;
    color: #ccc;
    z-index: 2;
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom: 2px solid #000;
    color: #000;
    margin-bottom: -1px;
}
</style>