<template>
    <div>
    	<mt-search v-model="value">
    	    <mt-cell v-for="item in result" :title="item.title" :value="item.value" placeholder="电影/电视剧/影人"></mt-cell>
    	</mt-search>

    	<mt-navbar v-model="selected">
    	    <mt-tab-item id="1">电影</mt-tab-item>
    	    <mt-tab-item id="2">电视剧</mt-tab-item>
    	</mt-navbar>

        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="ranking-list">
                    <h5>精选榜单</h5>
                    <ul class="list-box">
                        <li class="list" id="top250">
                            <router-link to="/Top250">
                                <h5>豆瓣Top250</h5>
                                <p>8分以上好电影</p>
                                <img class="img0" :src="top250[0].images.small">
                                <img class="img1" :src="top250[1].images.small">
                                <img class="img2" :src="top250[2].images.small">
                            </router-link>
                        </li>
                        <li class="list" id="weekly">
                            <router-link to="/Weekly">
                                <h5>本周口碑榜</h5>
                                <p>{{us_box.date}}</p>
                                <img src="" alt="">
                                <img src="" alt="">
                                <img src="" alt="">
                            </router-link>
                        </li>
                        <li class="list" id="new-movies">
                            <router-link to="/NewMovies">
                                <h5>新片榜</h5>
                                <p>{{us_box.date}}</p>
                                <img src="" alt="">
                                <img src="" alt="">
                                <img src="" alt="">
                            </router-link>
                        </li>
                        <li class="list" id="usbox">
                            <router-link to="/USbox">
                                <h5>票房榜</h5>
                                <p>票房最高排名</p>
                                <img class="img0" :src="us_box.subjects[0].subject.images.small">
                                <img class="img1" :src="us_box.subjects[1].subject.images.small">
                                <img class="img2" :src="us_box.subjects[2].subject.images.small">
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="box rushi">
                    
                </div>

                <div class="box interview">
                    
                </div>

                <div class="box collect">
                    
                </div>

                <div class="interested">
                    
                </div>

                <div class="review">
                    
                </div>

                <div class="pick">
                    <h5>选电影</h5>
                    <li>
                        <router-link to="/">经典</router-link>
                        <router-link to="/">豆瓣高分</router-link>
                        <router-link to="/">冷门佳片</router-link>
                    </li>
                    <li>
                        <router-link to="/">剧情</router-link>
                        <router-link to="/">爱情</router-link>
                        <router-link to="/">喜剧</router-link>
                        <router-link to="/">科幻</router-link>
                        <router-link to="/">动作</router-link>
                        <router-link to="/">悬疑</router-link>
                        <router-link to="/">治愈</router-link>
                        <router-link to="/">青春</router-link>
                        <router-link to="/">文艺</router-link>
                    </li>
                    <li>
                        <router-link to="/">日本</router-link>
                        <router-link to="/">韩国</router-link>
                    </li> 
                </div>
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
                <div>
                    <p>今日更新<span>更多<img src="" alt=""></span></p>
                </div>
                <div class="pick">
                    <h5>选电视剧</h5>
                    <li>
                        <router-link to="/">美剧</router-link>
                        <router-link to="/">英剧</router-link>
                        <router-link to="/">韩剧</router-link>
                        <router-link to="/">港剧</router-link>
                        <router-link to="/">日剧</router-link>
                        <router-link to="/">动画</router-link>
                        <router-link to="/">综艺</router-link>
                        <router-link to="/">国产剧</router-link>
                    </li>
                </div>
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
            value:'',
            selected: '1',
            result:[],
            top250:[],
            us_box:[],
        }
    },
    mounted(){
        this.usbox();
        this.top();
    },
    methods:{
        // init(){
        //     let _this = this;
        //     axios.get('user/64249287')
        //     .then(function(res){
               
        //     })
        //     .catch(function(){
        //         mint.Toast('网络请求超时！')
        //     });
        // },
        top(count,start){
            let _this = this;
            axios.get('/api/movie/top250?count=3&start=0')
            .then(function(res){
                _this.top250 = res.data.subjects;
                console.log(_this.top250)
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
        },
        usbox(){
            let _this = this;
            axios.get('/api/movie/us_box')
            .then(function(res){
                    _this.us_box = res.data;
                
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
.mint-search{
    height: auto;
}
.mint-tab-container{
    height: auto;
}
.ranking-list{
    color: #fff;
    background-color: #fff;
    width: auto;
    height: auto;
    overflow: scroll;
    margin: 5% 0 5% 0%;
}
::-webkit-scrollbar{width:0px}
.list-box{
    overflow: scroll;
    position: relative;
    width: 210%;
    margin-top: 5%;
    text-align: center;
}
.list{
    position: relative;
    width: 150px;
    height: 150px;
    float: left;
    margin: 2% 0% 2% 2%;
    border-radius: 5px;
}
.list a{
    display: block;
    width: 100%;
    height: 100%;
}
.img0{
    position: absolute;
    width: 60px;
    top: 50px;
    left: 45px;
}
.img1{
    position: absolute;
    width: 40px;
    top: 75px;
    left: 5px;
}
.img2{
    position: absolute;
    width: 40px;
    top: 75px;
    left: 105px;
}
.list h5{
    font-size: 1.6rem;
    padding: 2rem 0;
    color: white;
    font-weight: normal;
    position: absolute;
    line-height: 1.8;
    margin-bottom: 0.5rem;
    margin-left: 4%;
}
.list p{

}
#top250{
    background: linear-gradient(to top, rgba(0,181,29,0.1), rgba(0,181,29,1));
}
#weekly{
    background: linear-gradient(to top, rgba(212,195,149,0.1), rgba(212,195,149,1));
}
#new-movies{
    background: linear-gradient(to top, rgba(93,124,248,0.1), rgba(93,124,248,1));
}
#usbox{
    background: linear-gradient(to top, rgba(173,106,106,0.1), rgba(173,106,106,1));
}
.box{
    background-color: #fff;
    height: auto;
    margin: 5% 0% 5% 0%;
}

.pick{
    height: auto;
    background-color: #fff;
    padding-top: 10%;
    margin-bottom: 15%;
}
.pick h5{
    margin: -7% 0% 0% 4%;
}
.pick li{
    border-bottom: 1px solid #ccc;
}
.pick a{
    color: green;
    border: 1px solid green;
    border-radius: 10px;
    display: inline-block;
    margin: 4% 2% 4% 4%;
    padding: 1% 3% 1% 3%;
}
</style>