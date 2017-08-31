<template>
	<mt-search v-model="tag" cancel-text="取消" placeholder="电影/电视剧/影人">
  		<mt-cell v-for="item in result" :title="item.title" :value="item.value">
  			<!-- <ul>
  			    <li v-for="movie in item">
  			        <router-link :to="movie.alt">
  			            <div>
  			                <img :src="movie.images.small">
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
  			</ul> -->
		</mt-cell>
	</mt-search>
</template>

<script>
import axios from "axios"
export default {
	data () {
        return {
            tag: this.$route.params.tag || '',
            value: '',
            result: {}
        }
    },
    mounted() {
    	this.getResult();
    },
    watch: {
    	tag: 'getResult',
        cancelText: function() {
            this.router.go(-1)
        }
    },
    methods:{
        getResult() {
            let _this = this;
            axios.get('/api/movie/search?tag='+_this.tag)
            .then(function(res){
                _this.result = res.data.subjects;
                console.log(_this.result)
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
        },
    }
}
</script>

<style scoped>
	
</style>