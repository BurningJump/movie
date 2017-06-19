<template>
    <div class="box">
        <div class="header">
            <span @click='selectCity'>{{city}}</span>
            <div class="search-box"><img src="../assets/img/bn_srh_1.png" alt=""><input type="text" name="search" placeholder="电影/电视剧/影人"></div>
        </div>
        <mt-swipe :auto="2000">
            <mt-swipe-item id="swipe1"><img src="" alt=""><h1>red</h1></mt-swipe-item>
            <mt-swipe-item id="swipe2"><img src="" alt=""><h1>blue</h1></mt-swipe-item>
            <mt-swipe-item id="swipe3"><img src="" alt=""><h1>green</h1></mt-swipe-item>
        </mt-swipe>
        
        <mt-navbar v-model="selected">
            <mt-tab-item id='1'>正在热映</mt-tab-item>
            <mt-tab-item id='2'>即将上映</mt-tab-item>
        </mt-navbar>

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
                                    <p>导演：<span v-for='director in movie.directors'>{{director.name}}</span></p>
                                    <p>主演：<span v-for='cast in movie.casts'>{{cast.name}}/</span></p>
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
                                    <p>导演：<span v-for='director in movie.directors'>{{director.name}}</span></p>
                                    <p>主演：<span v-for='cast in movie.casts'>{{cast.name}}/</span></p>
                                    <p><span>{{movie.wish_count}}人想看</span></p>
                                </div>
                                <mt-button size="small" type="default">想看</mt-button>
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
            selected: '1',
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
.box{
    vertical-align: middle;
}
.header{
    
}
.header span{
    float: left;
    margin: 0 auto;
    vertical-align: middle;
}
.search-box{
    background-color: #fff;
    width: 80%;
    margin-left: 40px;
}
.search-box img{
    vertical-align: middle;
}
.search-box input{
    background-color: #ccc;
    width: 90%;
    height: 24px;
    border-radius: 5px;
    border-style: none;
}
.mint-swipe{
    margin: 0 auto;
    height: 150px;
}
#swipe1{
    background-color: red;
}
#swipe2{
    background-color: blue;
}
#swipe3{
    background-color: green;
}
.mint-navbar{
    border-bottom: 1px solid #ccc;
    color: #ccc;
}
.mint-navbar .mint-tab-item.is-selected {
    border-bottom: 2px solid #000;
    color: #000;
    margin-bottom: -1px;
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
