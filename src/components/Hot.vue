<template>
    <div>
        <span @click='selectCity'>{{city}}</span>
        <mt-search v-model="value">
            <mt-cell placeholder="电影/电视剧/影人"></mt-cell>
        </mt-search>
        
        <mt-swipe :auto="2000">
            <mt-swipe-item><img src="../assets/img/wechat.png" alt=""></mt-swipe-item>
            <mt-swipe-item><img src="../assets/img/zhifubao.png" alt=""></mt-swipe-item>
        </mt-swipe>
        
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">正在热映</mt-tab-item>
            <mt-tab-item id="2">即将上映</mt-tab-item>
        </mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <ul v-for="movie in hotMovies">
                    <li class="Movies-list">
                        <router-link to="movie.alt">
                            <div>
                                <img :src="movie.images.medium">
                                <div class="Movies-list-detail">
                                    <p>{{movie.title}}</p>
                                    <p><span class="rating-star"></span><span class="rating-score">{{movie.rating.average}}</span></p>
                                    <p>导演：{{movie.directors[0].name}}</p>
                                    <p>主演：<span v-for='item in movie.casts'>{{item.name}}/</span></p>
                                    <p><span>{{movie.collect_count}}人看过</span></p>
                                </div>
                                <mt-button size="small" type="default">购票</mt-button>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul v-for="movie in comingMovies">
                    <li class="Movies-list">
                        <router-link :to="movie.alt">
                            <div>
                                <img :src="movie.images.medium">
                                <div class="Movies-list-detail">
                                    <p>{{movie.title}}</p>

                                    <p><span class="rating-star"></span><span class="rating-score">{{movie.rating.average}}</span></p>
                                    <p>导演：{{movie.directors[0].name}}</p>
                                    <p>主演：<span v-for='item in movie.casts'>{{item.name}}/</span></p>
                                    <p><span>{{movie.collect_count}}人看过</span></p>
                                </div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
        
        <Tabbar></Tabbar>
    </div>    
</template>

<script>
import axios from "axios"
import qs from 'qs'
import mint from 'mint-ui';
import Tabbar from './Tabbar';
export default {
    name: 'hello',
    data () {
        return {
            city: '深圳',
            value:'',
            selected: 1,
            hotMovies:[],
            comingMovies:[]
        }
    },
    mounted(){
        this.init()
    },
    methods: {
        selectCity(){
            this.$router.push('/City')
        },
        init(){
            let _this = this
            // 正在热映
            axios.get('movie/in_theaters')
            .then(function(res){
                _this.hotMovies = res.data.subjects;
                console.log(_this.hotMovies.subjects.directors.name)
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
            axios.get('movie/coming_soon')
            .then(function(res){
                _this.comingMovies = res.data.subjects;
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
.mint-swipe{
    height: 130px;
}
.mint-search{
    height: auto;
}
.mint-tab-container-wrap{
    height: 100px;
}
.mt-tab-container-item ul{
    
}
.Movies-list{
    list-style: none;
    overflow: hidden;
    border-bottom: 1px solid #ccc;
    vertical-align: middle;
}
.Movies-list-detail{
    width: 50%;
    padding: 0 10%;
    margin: 0 auto;
    float: right;
}
.Movies-list-detail .rating-star{
    display: inline-block;
    width: 55px;
    height: 11px;
    background-size: cover;
    background-position-x: 0;
    background: url(../assets/img/ic_rating_s@2x.png) no-repeat;
}
.mint-button{
    float: right;
}
</style>
