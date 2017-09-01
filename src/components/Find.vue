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
                    <p><span>今日推荐</span><router-link to="" class="a-list1"><span>全部10</span></router-link></p>
                    <div>
                        <ul class="list-box1">
                            <li class="list1" id="list1"></li>
                            <li class="list1" id="list2"></li>
                            <li class="list1" id="list3"></li>
                            <li class="list1" id="list4"></li>
                            <li class="list1" id="list5"></li>
                            <li class="list1" id="list6"></li>
                            <li class="list1" id="list7"></li>
                            <li class="list1" id="list8"></li>
                            <li class="list1" id="list9"></li>
                            <li class="list1" id="list10"></li>
                        </ul>
                    </div>
                </div>
                <div class="ranking-list">
                    <p>精选榜单</p>
                    <div>
                        <ul class="list-box2" v-if="top250[0] && us_box.subjects[0]">
                            <li class="list2" id="top250">
                                <router-link to="/Top250">
                                    <h5>豆瓣Top250</h5>
                                    <p>8分以上好电影</p>
                                    <img class="img0" :src="top250[0].images.small">
                                    <img class="img1" :src="top250[1].images.small">
                                    <img class="img2" :src="top250[2].images.small">
                                </router-link>
                            </li>

                            <li class="list2" id="weekly">
                                <router-link to="/Weekly">
                                    <h5>本周口碑榜</h5>
                                    <p>{{us_box.date}}</p>
                                    <img class="img0" :src="top250[0].images.small" alt="">
                                    <img class="img1" :src="top250[1].images.small" alt="">
                                    <img class="img2" :src="top250[2].images.small" alt="">
                                </router-link>
                            </li>
                            <li class="list2" id="new-movies">
                                <router-link to="/NewMovies">
                                    <h5>新片榜</h5>
                                    <p>{{us_box.date}}</p>
                                    <img class="img0" :src="top250[0].images.small" alt="">
                                    <img class="img1" :src="top250[1].images.small" alt="">
                                    <img class="img2" :src="top250[2].images.small" alt="">
                                </router-link>
                            </li>
                            <li class="list2" id="usbox">
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
                </div>
                <div class="pick">
                    <h5>选电影</h5>
                    <li>
                        <router-link :to="{ name: 'Search', params: { tag: '经典' }}">经典</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '豆瓣高分' }}">豆瓣高分</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '冷门佳片' }}">冷门佳片</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Search', params: { tag: '剧情' }}">剧情</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '爱情' }}">爱情</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '喜剧' }}">喜剧</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '科幻' }}">科幻</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '动作' }}">动作</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '悬疑' }}">悬疑</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '治愈' }}">治愈</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '青春' }}">青春</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '文艺' }}">文艺</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'Search', params: { tag: '日本' }}">日本</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '韩国' }}">韩国</router-link>
                    </li> ''
                </div>
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
                <div>
                    <p>今日更新<span>更多<img src="" alt=""></span></p>
                </div>
                <div class="pick">
                    <h5>选电视剧</h5>
                    <li>
                        <router-link :to="{ name: 'Search', params: { tag: '美剧' }}">美剧</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '英剧' }}">英剧</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '韩剧' }}">韩剧</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '港剧' }}">港剧</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '日剧' }}">日剧</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '动画' }}">动画</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '综艺' }}">综艺</router-link>
                        <router-link :to="{ name: 'Search', params: { tag: '国产剧' }}">国产剧</router-link>
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
            weekly:[],
            us_box:[],
        }
    },
    mounted(){
        this.usbox();
        this.top();
    },
    methods:{
        top(count,start){
            let _this = this;
            axios.get('/api/movie/top250?count=3&start=0')
            .then(function(res){
                _this.top250 = res.data.subjects;
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
        },
        /*weekly(count,start){
            let _this = this;
            axios.get('/api/movie/weekly')
            .then(function(res){
                _this.weekly = res.data.subjects;
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
        },*/
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
    position: relative;
    color: #000;
    background-color: #fff;
    width: auto;
    height: auto;
    margin: 5% 0 5% 0%;
}
.ranking-list div{
    overflow: scroll;
}
.ranking-list p {
    position: absolute;
    width: 90%;
    left: 4%;
}
.a-list1 {
    position: absolute;
    right: 0;
}
::-webkit-scrollbar{width:0px}
.list-box1{
    overflow: scroll;
    position: relative;
    width: 1685px;
    margin-top: 5%;
    text-align: center;
}
.list-box2{
    overflow: scroll;
    position: relative;
    width: 666px;
    margin-top: 5%;
    text-align: center;
}
.list1{
    position: relative;
    width: 150px;
    height: 150px;
    float: left;
    margin: 2% 0% 2% 1%;
    border-radius: 5px;
}
.list2{
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
#list1 {
    background: linear-gradient(to top, rgba(100,240,200,0.1), rgba(100,240,200,1));
}
#list2 {
    background: linear-gradient(to top, rgba(120,220,180,0.1), rgba(120,220,180,1));
}
#list3 {
    background: linear-gradient(to top, rgba(140,200,160,0.1), rgba(140,200,160,1));
}
#list4 {
    background: linear-gradient(to top, rgba(160,180,140,0.1), rgba(160,180,140,1));
}
#list5 {
    background: linear-gradient(to top, rgba(180,160,120,0.1), rgba(180,160,120,1));
}
#list6 {
    background: linear-gradient(to top, rgba(200,160,100,0.1), rgba(200,160,100,1));
}
#list7 {
    background: linear-gradient(to top, rgba(220,140,80,0.1), rgba(220,140,80,1));
}
#list8 {
    background: linear-gradient(to top, rgba(240,120,60,0.1), rgba(240,120,60,1));
}
#list9 {
    background: linear-gradient(to top, rgba(240,100,40,0.1), rgba(240,100,40,1));
}
#list10 {
    background: linear-gradient(to top, rgba(240,40,20,0.1), rgba(240,40,20,1));
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
    margin-bottom: 49px;
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