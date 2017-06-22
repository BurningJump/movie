<template>
	<div>
		<mt-header title="豆瓣TOP250" fixed>
		  	<router-link to="/Find" slot="left">
		    	<mt-button icon="back"></mt-button>
		  	</router-link>
		</mt-header>
		<mt-navbar v-model="selected">
		  	<mt-tab-item id="1" @click.stop='getMovie(5,0)'>1-50</mt-tab-item>
		  	<mt-tab-item id="2" @click.stop='getMovie(5,5)'>51-100</mt-tab-item>
		  	<mt-tab-item id="3" @click.stop='getMovie(5,10)'>101-150</mt-tab-item>
		  	<mt-tab-item id="4" @click.stop='getMovie(5,15)'>151-200</mt-tab-item>
		  	<mt-tab-item id="5" @click.stop='getMovie(5,20)'>201-250</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  	<mt-tab-container-item id="1">
		  	  	<mt-cell v-for="n in movie[0]" :title="n.title" />
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="2">
		  	  	<mt-cell v-for="n in movie[1]" :title="n.title" />
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="3">
		  	  	<mt-cell v-for="n in movie[2]" :title="n.title" />
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="4">
		  	  	<mt-cell v-for="n in movie[3]" :title="n.title" />
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="5">
		  	  	<mt-cell v-for="n in movie[4]" :title="n.title" />
		  	</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>
<script>
import axios from "axios"
import qs from "qs"
import mint from 'mint-ui';
export default {
    name: 'hello',
    data () {
        return {
            value:'',
            selected: '1',
            movie:{},

        }
    },
    watch:{
    	selected: function(){
    		let _this = this;
    		_this.getMovie(5,(parseInt(_this.selected)-1)*5)
    	}
    },
    mounted(){
        this.getMovie(5,0);
    },
    methods:{
        getMovie(count,start){
            let _this = this;
            axios.get('/api/movie/top250?count='+count+'&start='+start)
            .then(function(res){
            	let index = parseInt(_this.selected)-1
               	_this.movie[index] = res.data.subjects;
            })
            .catch(function(){
                mint.Toast('网络请求超时！')
            });
        }
    },
    components: {
        
    }
}
</script>

<style scoped>
.mint-header{
	background-color: #ccc;
	color: #000;
	border-bottom: 1px solid #ccc;
}
.mint-navbar{
	top: 40px;
    right: 0;
    left: 0;
    height: auto;
    position: fixed;
    z-index: 1;
    border-bottom: 1px solid #ccc;
}
.mint-navbar .mint-tab-item{
	padding: 2.5%;
	color: #ccc;
}
.mint-navbar .mint-tab-item.is-selected{
    border-bottom: 2px solid #000;
    color: #000;
    margin-bottom: -1px;
}
.mint-tab-container{
	top: 70px;
}
</style>