<template>
	<div class="box">
        <div v-show="!show">
            <mt-header fixed title="电影">
                <router-link to="/Hot" slot="left">
                    <mt-button icon="back"></mt-button>
                </router-link>
            </mt-header>
        <div class="movie-poster" v-if="detail.images">
            <img :src="detail.images.medium" alt="">
        </div>
        <div class="container" v-if="detail.rating">
            <div class="movie">
                <section class="movie-detail">
                    <h1>{{detail.title}}</h1>
                    <p>{{detail.year}}/{{detail.countries | countryGenre}}</p>
                    <p>{{detail.genres | countryGenre}}</p>
                    <p>原名：{{detail.original_title}}</p>
                    <p>上映时间：{{detail.mainland_pubdate}}</p>
                    <p>片长：{{detail.durations||90}}分钟</p>
                </section>
                <div class="movie-rating">
                    <p>豆瓣评分</p>
                    <p style="color:#000; font-size: 16px; font-weight: bolder;">{{detail.rating.average}}</p>
                    <p v-show="detail.rating.average!=0"><span class="rating-star" :style="{backgroundPositionY:(Math.ceil( Number(detail.rating.stars)/5)+1)*11+'px'}"></span></p>
                    <p>{{detail.ratings_count}}</p>
                </div>
                <section class="movie-mark">
                    <div class="movie-mark-item">
                        <router-link to="" class=""><span @click="wish">想看</span></router-link>
                        <router-link to="" class=""><span @click="seen">看过</span><span class="rating-star-blank" :style="{backgroundPositionY:(yourRating+1)*11+'px'}"></span></router-link>
                    </div>
                </section>
                <section class="ticket">
                    <p>选座购票<router-link to=""><span>¥ {{price}} 起</span><img src="../assets/img/right.png"></router-link></p>
                </section>
                <section class="subject-intro">
                    <h2>{{detail.title}}的剧情简介</h2>
                    <div class="bd" style="position: static;">
                        <p id="summary" style="height:66px; overflow:hidden;">{{detail.summary | removeDouban}}</p><a id="expand" href="javascript:;" style="float:right;color: #42bd56;" @click="expand">展开</a>
                    </div>
                </section>
                <section class="" id="celebrities">
                    <header>
                      <h2>影人</h2>
                    </header>
                    <div class="section-content">
                        <ul class="row items">
                            <li v-for="director in detail.directors" class="item item__celebrity">
                                <a href="director.alt">
                                    <img class="item-poster" :src="director.avatars.small">
                                    <span class="item-title name">{{director.name}}</span>
                                    <span class="item-title role">导演</span>
                                </a>
                            </li>
                            <li v-for="cast in detail.casts" class="item item__celebrity">
                                <a href="cast.alt">
                                    <img class="item-poster" :src="cast.avatars.small">
                                    <span class="item-title name">{{cast.name}}</span>
                                    <span class="item-title role">演员</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        </div>
        <div class="douban-dialog" v-show="show">
            <div class="hd">
                <a class="btn-cancel" href="javascript:;" @click="cancel"><img src="../assets/img/close.png" alt=""></a>
                <a class="btn-ok" href="javascript:;" @click="confirm">确定</a>
                <!-- <router-link to="" class="btn-ok">确定</router-link> -->
            </div>
            <mt-navbar v-model="selected">
                <mt-tab-item id='1'>想看</mt-tab-item>
                <mt-tab-item id='2'>看过</mt-tab-item>
            </mt-navbar>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <div class="bd">
                        <div class="interest-bd">
                            <div class="tit"><span>为电影打标签</span><img src="../assets/img/up.png" alt="" style="width:20px;"></div>
                            <div class="con remark">
                                <a href="javascript:;" class="">二战</a>
                                <a href="javascript:;" class="">战争</a>
                                <a href="javascript:;" class="">历史</a>
                                <a href="javascript:;" class="">2017</a>
                                <a href="javascript:;" class="">美国</a>
                                <a href="javascript:;" class="">军事</a>
                                <a href="javascript:;" class="">剧情</a>
                                <a href="javascript:;" class="">英国</a>
                                <input id="input-tag" class="hide" size="5" type="text">
                                <a href="javascript:;" class="add-tag">+</a>
                            </div>
                            <div class="tit"><span class="max-length"></span></div>
                            <div class="con">
                                <textarea style="overflow:hidden; resize:none; " placeholder="写几句评价吧..."></textarea>
                            </div>
                        </div>
                    </div>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <div class="bd">
                                <div class="con star">
                            <p>点击星星评分</p>
                            <span id="rating-star" :style="{backgroundPositionY:bgpy+'px'}" @click="ratingStar"></span>
                                </div>
                                <div class="interest-bd">
                            <div class="tit">
                                <span>为电影打标签</span><img src="../assets/img/up.png" alt="" style="width:20px;">
                            </div>
                            <div class="con remark">
                                <a href="javascript:;" class="">二战</a>
                                <a href="javascript:;" class="">战争</a>
                                <a href="javascript:;" class="">历史</a>
                                <a href="javascript:;" class="">2017</a>
                                <a href="javascript:;" class="">美国</a>
                                <a href="javascript:;" class="">军事</a>
                                <a href="javascript:;" class="">剧情</a>
                                <a href="javascript:;" class="">英国</a>
                                <input id="input-tag" class="hide" size="5" type="text">
                                <a href="javascript:;" class="add-tag">+</a>
                            </div>
                            <div class="tit"><span class="max-length"></span></div>
                            <div class="con">
                                <textarea style="overflow:hidden; resize:none; " placeholder="写几句评价吧..."></textarea>
                            </div>
                                </div>
                            </div>
                </mt-tab-container-item>
            </mt-tab-container>
            <mt-checklist title="同步到" v-model="value" :options="['豆瓣广播', '新浪微博']">
            </mt-checklist>
        </div>
	</div>
</template>

<script>
import axios from "axios"
import qs from 'qs'
import mint from 'mint-ui'
export default {
	data() {
		return {
			id: this.$route.params.id || 26607693,
			detail: {},
			selected: '1',
            show: false,
            price: 20,
            bgpy: 30,
            yourRating: 0,
            value: [],
            //ST: document.getElementById('expand').scrollTop || 0,
		}
	},
	mounted() {
		this.init();
        this.$nextTick(function () {
            window.addEventListener('scroll', this.onScroll)
        })
	},
    /*watch: {
        ST() {
            console.log(document.getElementsByTagName('h1').scrollTop)
            let _this = this
            if (document.getElementById('app').scrollTop()>229) {
                document.getElementsByClassName('mint-header-title').innerHTML="_this.detail.title"
            }else{
                document.getElementsByClassName('mint-header-title').innerHTML="电影"
            }
        }
    },*/
	methods: {
		init() {
            //电影条目信息
            let _this = this
            axios.get('/api/movie/subject/'+_this.id)
            .then(function(res){
                _this.detail = res.data;
                
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
        },
        mouseOver() {
            let _this = this;
            var star = document.getElementById('rating-star');
            star.addEventListener('mousemove', function(event) {
                _this.bgpy = 90 + 60*Math.floor(event.clientX/30)
            })
        },
        ratingStar() {
            this.bgpy = 90 + 60*Math.floor(event.clientX/30);
            this.yourRating = 2*Math.ceil(event.clientX/30);
        },
        expand() {
            if (document.getElementById('expand').innerHTML=="展开") {
                document.getElementById('summary').style.height="auto";
                document.getElementById('expand').innerHTML="收起";
            }else{
                document.getElementById('summary').style.height="66px";
                document.getElementById('expand').innerHTML="展开";
            }
        },
        cancel() {
            this.show=false;
            this.bgpy=30;
            this.yourRating=0;
        },
        confirm() {
            this.show = false;
        },
        onScroll() {
            let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
            // 当页面滚动到229px以下时header显示电影名称
            if (scrolled >= 229) {
                document.getElementsByClassName('mint-header-title').innerHTML="this.detail.title"
            } else {
                document.getElementsByClassName('mint-header-title').innerHTML="电影"
            }
        }, 

        /*photo() {
            //剧照(需要权限)
            let _this = this
            axios.get('/api/movie/subject/'+_this.id+'/photos')
            .then(function(res){
                _this.detail = res.data;
                
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
        },*/
        wish() {
            this.show = true;

        },
        seen() {
            this.show = true;
        }
	}
}
</script>

<style scoped>
.container{
	margin: 0 18px;
    /* background-color: #fff; */
}
.mint-header{
	background-color: #000;
	opacity: 0.8;
}
section {
    margin-bottom: 30px;
}
h1 {
    margin: 30px 0 5px;
    font-size: 24px;
    line-height: 32px;
    word-break: break-all;
}
.movie-poster{
	text-align: center;
	vertical-align: middle;
	background-color: #000;
	margin-top: 40px;
	height: 167px;
}
.movie-detail{
	display: inline-block;
}
.movie-rating{
	display: inline-block;
	width: 80px;
	text-align: center;
	color: #ccc;
	background-color: #fff;
	box-shadow: 5px 5px 5px #888888;
}
.rating-star{
    display: inline-block;
    width: 55px;
    height: 11px;
    background-size: cover;
    background-position-x: 0;
    background-image: url('../assets/img/ic_rating_s@2x.png');
}
.ticket{
    position: relative;
    vertical-align: middle;
}
.ticket p{
    font-size: 18px;
    font-weight: bold;
}
.ticket span{
    color: rgb(249, 134, 134);
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    right: 22px;
}
.ticket img{
    width: 22px;
    position: absolute;
    right: 0;
}
.movie-mark-item{
	display: flex;
	align-items: center;
}
.movie-mark-item a{
	height: 30px;
    line-height: 30px;
    display: block;
    border: 1px solid #ffb712;
    border-radius: 3px;
    margin-right: 10px;
    color: #ffb712;
    font-size: 15px;
    text-align: center;
    -webkit-box-flex: 1;
    flex: 1;
}
.rating-star-blank{
    display: inline-block;
    width: 55px;
    height: 11px;
    background-size: cover;
    background-position-x: 0;
    background-position-y: 11px;
    background-image: url('../assets/img/ic_rating_s@2x.png');
}
.douban-dialog{
    position: fixed;
    top: 0;
    height: 100%;
    background-color: #fff;
}
.hd{
    height: 44px;
    line-height: 44px;
}
.btn-cancel{
    height: 35px;
    line-height: 35px;
}
.btn-cancel img{
    position: absolute;
    left: 10px;
    width: 18px;
}
.btn-ok{
    position: absolute;
    width: 65px;
    height: 35px;
    line-height: 35px;
    font-size: 18px;
    text-align: center;
    right: 10px;
    color: #fff;
    background-color: #ffb712;
    border-radius: 5px;
}
.interest-bd {
    padding: 0 18px;
    position: relative;
}
#rating-star{
    display: inline-block;
    width: 150px;
    height: 30px;
    background-size: cover;
    background-position-x: 0;
    /* background-position-y: 30px; */
    background-image: url('../assets/img/ic_rating_m@2x.png');
}
.mint-tab-item-label{
    font-size: 26px;
}
section p {
    font-size: 15px;
    color: #494949;
}
section p, section h3 {
    line-height: 22px;
    word-wrap: break-word;
    margin: 0;
    padding: 0;
}
h2 {
    color: #aaa;
    margin: 0 0 15px;
    font-size: 15px;
}
.items {
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 0;
    white-space: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
}
.item__celebrity {
    font-size: 14px;
    width: 75px;
}
.item {
    margin-left: 0.48rem;
    display: inline-block;
    vertical-align: top;
    text-align: center;
}
.item-poster {
    width: 100%;
    overflow: hidden;
    background-size: cover;
    background-position: center;
}
.item__celebrity .item-title {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    font-size: 14px;
    line-height: 1.5;
    white-space: normal;
    text-align: center;
    color: #494949;
    margin-top: 8px;
}
.item__celebrity .item-title.role {
    color: #aaa;
}
.bd{
	background-color: #fff;
}
.tit {
    padding-bottom: 10px;
    color: #aaa;
    font-size: 15px;
}
.remark a{
	height: 34px;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 34px;
    padding: 0 15px;
    margin: 0 5px 10px;
    color: #aaa;
    font-size: 17px;
    line-height: 34px;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-tap-highlight-color: transparent;
    background: #fff;
}
.remark #input-tag {
    height: 34px;
    min-width: 80px;
    max-width: 200px;
    border: 0;
    border-radius: 28px;
    padding: 0 15px 2px;
    margin-bottom: 10px;
    font-size: 17px;
    line-height: 34px;
    vertical-align: top;
    color: #fff;
    text-align: center;
    background: #42bd56;
}
.interest-bd textarea {
    height: 130px;
    width: 100%;
    font-size: 17px;
    color: #494949;
    line-height: 1.5;
    border-radius: 2px;
    padding: 15px;
    background-color: #fff;
    box-shadow: inset 1px 1px 2px 0 rgba(0,0,0,0.05), inset -1px -1px 2px 0 rgba(0,0,0,0.05);
    border: solid 0.5px #ccc;
    box-sizing: border-box;
    -webkit-appearance: none;
}
.mint-checklist{
    background-color: #fff;
}
.mint-cell{
    display: inline-block;
}
</style>