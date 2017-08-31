<template>
    <div class="box">
        <div class="header">
            <router-link to="City" class="city" ><span>{{city}}</span><img src="../assets/img/grayDown@2x.png" alt=""></router-link>
            <router-link to="/Search" class="search-box">
                <i class="mintui mintui-search"></i><span>电影/电视剧/影人</span>
            </router-link>
        </div>
        <mt-swipe :auto="3000">
            <mt-swipe-item id="swipe1"></mt-swipe-item>
            <mt-swipe-item id="swipe2"></mt-swipe-item>
            <mt-swipe-item id="swipe3"></mt-swipe-item>
        </mt-swipe>
        
        <mt-navbar v-model="selected">
            <mt-tab-item id='1'>正在热映</mt-tab-item>
            <mt-tab-item id='2'>即将上映</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <ul>
                    <li v-for="movie in hotMovies">
                        <router-link :to="movie.alt">
                            <div>
                                <img v-lazy.1="movie.images.small">
                                <div class="Movies-list-detail">
                                    <h1>{{movie.title}}</h1>
                                    <p v-show="movie.rating.average!=0"><span class="rating-star" :style="{backgroundPositionY:(Math.ceil(Number(movie.rating.stars)/5)+1)*11+'px'}"></span> <span class="rating-score">{{movie.rating.average}}</span></p>
                                    <p v-show="movie.rating.average == 0" style="color:#ccc;">暂无评分</p>
                                    <p class="director">导演：<span v-for='director in movie.directors'>{{director.name}}</span></p>
                                    <p class="cast">主演：<span v-for='cast in movie.casts'>{{cast.name}} / </span></p>
                                    <p class="count"><span>{{movie.collect_count}}人看过</span></p>
                                </div>
                                <button class="buy">购票</button>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul>
                    <li v-for="movie in comingMovies">
                        <router-link :to="movie.alt">
                            <div>
                                <img v-lazy.2="movie.images.small">
                                <div class="Movies-list-detail">
                                    <p>{{movie.title}}</p>
                                    <p v-show="movie.rating.average!=0"><span class="rating-star" :style="{backgroundPositionY:(Math.ceil(Number(movie.rating.stars)/5)+1)*11+'px'}"></span> <span class="rating-score">{{movie.rating.average}}</span></p>
                                    <p v-show="movie.rating.average == 0" style="color:#ccc;">暂无评分</p>
                                    <p class="director">导演：<span v-for='director in movie.directors'>{{director.name}}</span></p>
                                    <p class="cast">主演：<span v-for='cast in movie.casts'>{{cast.name}} / </span></p>
                                    <p class="count"><span>{{movie.collect_count}}人看过</span></p>
                                </div>
                                <button class="wish">想看</button>
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
            start: 0,
            count: 200,
            city: this.$route.params.city || '北京',
            //value: '',
            selected: '1',
            hotMovies: [],
            comingMovies: [],
            //allLoaded: false,
            bgpy: 0
        }
    },
    /*watch: {
        selected: function() {
            this.getMovie()
            console.log('调用watch')
        }
    },*/
    mounted() {
        this.hot();
        this.coming();
        this.selectCity();
    },
    methods: {
        selectCity() {
            let _this = this;
            // 百度地图API功能
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(116.331398,39.897445);

            function myFun(result){
                var cityName = result.name;
                _this.currentCity = cityName.slice(0,-1);
            }
            var myCity = new BMap.LocalCity();
            myCity.get(myFun);
        },
        hot() {
            let _this = this
            // 正在热映
            axios.get('/api/movie/in_theaters'+'?start='+_this.start+'&count='+_this.count+'&city='+_this.city)
            .then(function(res){
                _this.hotMovies = _this.hotMovies.concat(res.data.subjects);
                /*if(_this.start > res.data.total){
                    this.allLoaded = true;// 若数据已全部获取完毕
                }*/
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
        },
        coming() {
            let _this = this
            //即将上映
            axios.get('/api/movie/coming_soon'+'?start='+_this.start+'&count='+_this.count)
            .then(function(res){
                _this.comingMovies = _this.comingMovies.concat(res.data.subjects);
                /*if(_this.start > res.data.total){
                    this.allLoaded = true;// 若数据已全部获取完毕
                }*/
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
        },
        /*loadTop() {
            this.start = 0;
            // 下拉刷新
            if(this.selected == '1') {
                this.hot()
            }else{
                this.coming();
            }
            this.$refs.loadmore.onTopLoaded()
        },*/
        /*loadBottom() {
            // 加载更多数据
            this.start += 20;
            if(this.selected == '1') {
                this.hot()
            }else{
                this.coming();
            }
            /*if(hotMovies.length >= 40){
                this.allLoaded = true;// 若数据已全部获取完毕
            }*/
            //this.$refs.loadmore.onBottomLoaded();
        //}
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
    font-size: 16px;
    background-color: #fff;
}
.city{
    width: 15%;
    margin-top: 8px;
    display: inline-block;
    padding-left: 10px;
}
.city img{
    width: 30%;
    vertical-align: middle;
}
/* .header span{
    float: left;
    margin: 2% 1px 2% 2%;
    vertical-align: middle;
} */
.header span img{
    max-height: 25px;
    max-width: 25px;
    margin: 1px;
    vertical-align: middle;
}
.search-box{
    background-color: #ccc;
    width: 76%;
    vertical-align: middle;
    display: inline-block;
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
    margin-top: 38px;
}
#swipe1{
    display: inline-block;
    width: 100%;
    height: 100px;
    background-size: 100% 100%;
    background-image: url('../assets/img/1.jpg');
}
#swipe2{
    display: inline-block;
    width: 100%;
    height: 100px;
    background-size: cover;
    background-image: url('../assets/img/2.jpg');
}
#swipe3{
    display: inline-block;
    width: 100%;
    height: 100px;
    background-size: cover;
    background-image: url('../assets/img/3.jpg');
}
li{
    border-bottom: 1px solid #ccc;
}
.mint-navbar{
    border-bottom: 1px solid #ccc;
    color: #919191;
    z-index: 2;
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom: 2px solid #000;
    color: #444444;
    margin-bottom: -1px;
}
.mint-tab-container{
    margin-bottom: 49px;
}
.mint-tab-container-item img{
    float: left;
    margin: 0 5%;
}
.Movies-list-detail{
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
    background-image: url('../assets/img/ic_rating_s@2x.png');
}
.count{
    color: #f6ac17;
}
.buy{
    border-radius: 3px;
    width: 17%;
    height: 24px;
    color: #fe638b;
    background-color: #fff;
    border: 1px solid #fe638b;
    float: right;
    margin: -25% 5%;
}
.wish{
    border-radius: 3px;
    width: 17%;
    height: 24px;
    color: orange;
    background-color: #fff;
    border: 1px solid orange;
    float: right;
    margin: -25% 5%;
}
</style>
