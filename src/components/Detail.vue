<template>
	<div class="box">
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
        				<router-link to="" class=""><span>想看</span></router-link>
        				<router-link to="" class=""><span>看过</span><span class="rating-star-blank"></span></router-link>
        			</div>
        		</section>
        	</div>
        </div>
        <div class="douban-dialog">
            <div class="hd">
                <span class="title">敦刻尔克</span>
                <a class="btn-cancel" href="javascript:;">取消</a>
                <a class="btn-ok" href="javascript:;" data-status="wish">确定</a>
            </div>
            <mt-navbar v-model="selected">
            	<mt-tab-item id='1'>想看</mt-tab-item>
            	<mt-tab-item id='2'>看过</mt-tab-item>
        	</mt-navbar>
        	<mt-tab-container v-model="selected">
            	<mt-tab-container-item id="1">
            		<div class="bd">
            			<div class="interest-bd">
                    		<div class="tit">打标签</div>
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
                			<div class="tit">写短评 <span class="max-length"></span></div>
                			<div class="con">
                			    <textarea style="overflow:hidden; resize:none; "></textarea>
                			</div>
            			</div>
        			</div>
            	</mt-tab-container-item>
            	<mt-tab-container-item id="2">
            		<div class="bd">
    					<div class="con star">
                			<span class="rating-star-max-gray"></span>
                			<span class="rating-star-max-gray"></span>
                			<span class="rating-star-max-gray"></span>
                			<span class="rating-star-max-gray"></span>
                			<span class="rating-star-max-gray"></span>
    					</div>
    					<div class="interest-bd">
            				<div class="tit">打标签</div>
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
        					<div class="tit">写短评 <span class="max-length"></span></div>
        					<div class="con">
        					    <textarea style="overflow:hidden; resize:none; "></textarea>
        					</div>
					    </div>
					</div>
            	</mt-tab-container-item>
        	</mt-tab-container>
        	<div class="con share">
        		<p>同步到</p>
        		<span class="share-douban">
        		    <input type="checkbox" id="check_douban" name="douban" value="douban" checked="">
        		    <label for="check_douban">豆瓣</label>
        		</span>
        		<span class="share-douban">
        		    <input type="checkbox" id="check_douban" name="douban" value="douban" checked="">
        		    <label for="check_douban">新浪微博</label>
        		</span>
    		</div>
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
		}
	},
	mounted() {
		this.init();
	},
	methods: {
		// movie/subject/1764796
		init() {
            let _this = this
            axios.get('/api/movie/subject/'+_this.id)
            .then(function(res){
                _this.detail = res.data;
                
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
        },
	}
}
</script>

<style scoped>
.container{
	margin: 0 18px;
}
.mint-header{
	background-color: #000;
	opacity: 0.5;
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
</style>