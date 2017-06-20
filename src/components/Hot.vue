<template>
    <div class="box">
        <div class="header">
            <span @click='selectCity'>{{city}}<img src="../assets/img/grayDown@2x.png" alt=""></span>
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
                <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                    <ul>
                        <li v-for="movie in hotMovies">
                            <router-link to="movie.alt">
                                <div>
                                    <img :src="movie.images.small">
                                    <div class="Movies-list-detail">
                                        <h1>{{movie.title}}</h1>
                                        <p><span class="rating-star"></span> <span class="rating-score">{{movie.rating.average}}</span></p>
                                        <p class="director">导演：<span v-for='director in movie.directors'>{{director.name}}</span></p>
                                        <p class="cast">主演：<span v-for='cast in movie.casts'>{{cast.name}} / </span></p>
                                        <p class="count"><span>{{movie.collect_count}}人看过</span></p>
                                    </div>
                                    <button>购票</button>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </mt-loadmore>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
                    <ul>
                        <li v-for="movie in comingMovies">
                            <router-link :to="movie.alt">
                                <div>
                                    <img :src="movie.images.small">
                                    <div class="Movies-list-detail">
                                        <p>{{movie.title}}</p>
                                        <p><span class="rating-star"></span> <span class="rating-score">{{movie.rating.average}}</span></p>
                                        <p class="director">导演：<span v-for='director in movie.directors'>{{director.name}}</span></p>
                                        <p class="cast">主演：<span v-for='cast in movie.casts'>{{cast.name}} / </span></p>
                                        <p class="count"><span>{{movie.wish_count}}人想看</span></p>
                                    </div>
                                    <button>想看</button>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </mt-loadmore>
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
            comingMovies:[],
            allLoaded: false
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
.box{
    vertical-align: middle;
}
.header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    background-color: #fff;
}
.header span{
    float: left;
    margin: 1px 1px 2% 2%;
    vertical-align: middle;
}
.header span img{
    max-height: 25px;
    max-width: 25px;
    margin: 1px;
    vertical-align: middle;
}
.search-box{
    background-color: #ccc;
    width: 83%;
    margin: 2% 2% 2% 55px;
    border-radius: 5px;
}
.search-box img{
    vertical-align: middle;
    max-width: 70%;
    max-height: 70%;
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
    height: 110px;
    width: 100%;
    margin-top: 13%;
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
li{
    border-bottom: 1px solid #ccc;
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
.mint-tab-container-item img{
    float: left;
    margin: 0 5%;
}
.Movies-list-detail{
    width: 38%;
    margin: 6% 30%;
}
.Movies-list-detail h1{
    color: #000;
    font-size: 14px;
    font-family:Arial;
}
.rating-score{
    color: #ccc;
    font-size: 12px;
}
.director{
    color: #ccc;
}
.cast{
    color: #ccc;
    height: 32px;
    overflow: hidden;
    margin-bottom: 3%;
}
.Movies-list-detail .rating-star{
    display: inline-block;
    width: 55px;
    height: 11px;
    background-size: cover;
    background-position-x: 0;
    background: url(../assets/img/ic_rating_s@2x.png) no-repeat;
}
.count{
    color: orange;
}
button{
    border-radius: 3px;
    width: 17%;
    height: 24px;
    background-color: #fff;
    border: 1px solid red;
    float: right;
    margin: -25% 5%;
}
</style>
