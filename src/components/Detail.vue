<template>
	<div class="box">
        <div v-show="!show">
            <mt-header fixed title="电影">
            <router-link to="/Hot" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="movie-poster">
            <img :src="detail.images.medium" alt="">
        </div>
        <div class="container">
            <div class="movie">
                <section class="movie-detail">
                    <h3>{{detail.title}}</h3>
                    <p>{{detail.year}}/{{detail.countries}}</p>
                    <p>{{detail.genres}}</p>
                    <p>原名：{{detail.original_title}}</p>
                    <p>上映时间：{{detail.mainland_pubdate}}</p>
                    <p>片长：{{detail.durations}}</p>
                </section>
                <section class="movie-rating">
                    <p>豆瓣评分</p>
                    <p style="color:#000; font-size: 16px; font-weight: bolder;">{{detail.rating.average}}</p>
                    <p v-show="detail.rating.average!=0"><span class="rating-star" :style="{backgroundPositionY:(Math.ceil(Number(detail.rating.stars)/5)+1)*11+'px'}"></span></p>
                    <p>{{detail.ratings_count}}</p>
                </section>
                <section class="movie-mark">
                    <div class="movie-mark-item">
                        <router-link to="" class=""><span @click="wish">想看</span></router-link>
                        <router-link to="" class=""><span @click="seen">看过</span><span class="rating-star-blank"></span></router-link>
                    </div>
                </section>
                <div>
                    <router-link to=""><span>选座购票</span><span>¥{{price}}起</span><img src="../assets/img/right.png"></router-link>
                </div>
                <section class="subject-intro">
                    <h2>敦刻尔克的剧情简介</h2>
                    <div class="bd" style="position: static;">
                        <p data-clamp="3" data-content="故事改编自著名的二战军事事件“敦刻尔克大撤退”。二战初期，40万英法盟军被敌军围困于敦刻尔克的海滩之上，面对敌军步步逼近的绝境，形势万分危急。英国政府和海军发动大批船员，动员人民起来营救军队。<br>英国士兵汤米（菲昂·怀特海德 Fionn Whitehead 饰）在逃离海滩的过程中相继结识吉布森与亚历克斯，同时民用船主道森先生（马克·里朗斯 Mark Rylance 饰）与儿子彼得、17岁少年乔治也离开英国，去往敦刻尔克拯救士兵。三人陆续搭救了海军（基里安·墨菲 Cillian Murphy 饰）、飞行员柯林斯及汤米一行人，而战斗机飞行员法瑞尔（汤姆·哈迪 Tom Hardy 饰）则在被敌人双面夹击的艰难情形下顽强战斗。<br>影片的故事从陆、海、空三个角度讲述，在德国军队的包围下，每个人不得不为自己的命运背水一战，才有可能活着回家。">故事改编自著名的二战军事事件“敦刻尔克大撤退”。二战初期，40万英法盟军被敌军围困于敦刻尔克的海滩之上，面对敌军步步逼近的绝境，形势万分危急。英国...<a class="expand" href="javascript:;" style="float:right;">(展开)</a></p>
                    </div>
                </section>
                <section class="" id="celebrities">
                    <header>
                      <h2>影人</h2>
                    </header>
                    <div class="section-content">
                        <ul class="row items">
                            <li v-for="director in detail.directors" class="item item__celebrity">
                                <a href="https://movie.douban.com/celebrity/1054524/">
                                    <img class="item-poster" :src="director.avatars.small">
                                    <span class="item-title name">{{director.name}}</span>
                                    <span class="item-title role">导演</span>
                                </a>
                            </li>
                            <li v-for="cast in detail.casts" class="item item__celebrity">
                                <a href="https://movie.douban.com/celebrity/1054524/">
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
                <a class="btn-cancel" href="javascript:;" @click="show=false"><img src="../assets/img/close.png" alt=""></a>
                <!-- <a class="btn-ok" href="javascript:;" data-status="wish">确定</a> -->
                <router-link to="" class="btn-ok">确定</router-link>
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
                            <span id="rating-star" :style="{backgroundPositionY:bgpy+'px'}" @click="ratingStar" @mouseover="mouseOver"></span>
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
            value: [],
		}
	},
	mounted() {
		this.init();
        //this.ratingStar();
        
        //this.$nextTick(()=>{ this.mouseOver() })
	},
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
        mouseMoveVelocity() {
            var previousX;
            var previousY;
            var previousT;

            window.addEventListener('mousemove', function(event) {
                if (!(previousX === undefined ||
                      previousY === undefined ||
                      previousT === undefined)) {
                    var deltaX = event.screenX - previousX;
                    var deltaY = event.screenY - previousY;
                    var deltaD = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
                
                    var deltaT = event.timeStamp - previousT;
                    console.log("鼠标速度:"+deltaD / deltaT * 1000);
                }
    
                previousX = event.screenX;
                previousY = event.screenY;
                previousT = event.timeStamp;
            });
        },
        mouseOver() {
            let _this = this;
            var star = document.getElementById('rating-star');
            star.addEventListener('mousemove', function(event) {
                _this.bgpy = 90 + 60*Math.floor(event.clientX/30)
            })
            //this.bgpy = 90 + 60*Math.floor(event.clientX/30)
            //this.ratingStar()
            //console.log('1')
        },
        ratingStar() {
            //var star = document.getElementById('rating-star');
            /*if (event.clientX>0 && event.clientX<30) {
                this.bgpy = 90;
            }else if (event.clientX>30 && event.clientX<60) {
                this.bgpy = 150;
            }else if (event.clientX>60 && event.clientX<90) {
                this.bgpy = 210;
            }else if (event.clientX>90 && event.clientX<120) {
                this.bgpy = 270;
            }else if (event.clientX>120 && event.clientX<150) {
                this.bgpy = 330;
            }*/
            this.bgpy = 90 + 60*Math.floor(event.clientX/30)
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
	height: 80px;
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
.movie-mark{
	margin-top: 30px;
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
.bd{
	border-top: 1px solid #ccc;
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