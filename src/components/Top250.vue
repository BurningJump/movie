<template>
	<div>
		<mt-header title="豆瓣TOP250" fixed>
		  	<router-link to="/Find" slot="left">
		    	<mt-button icon="back"></mt-button>
		  	</router-link>
		</mt-header>
		<mt-navbar v-model="selected">
		  	<mt-tab-item id="1" @click.stop='getMovie'>1-50</mt-tab-item>
		  	<mt-tab-item id="2" @click.stop='getMovie'>51-100</mt-tab-item>
		  	<mt-tab-item id="3" @click.stop='getMovie'>101-150</mt-tab-item>
		  	<mt-tab-item id="4" @click.stop='getMovie'>151-200</mt-tab-item>
		  	<mt-tab-item id="5" @click.stop='getMovie'>201-250</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  	<mt-tab-container-item id="1">
		  	  	<mt-cell v-for="n in movies[0]" :title="n.title" />
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="2">
		  	  	<mt-cell v-for="n in movies[1]" :title="n.title" />
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="3">
		  	  	<mt-cell v-for="n in movies[2]" :title="n.title" />
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="4">
		  	  	<mt-cell v-for="n in movies[3]" :title="n.title" />
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="5">
		  	  	<mt-cell v-for="n in movies[4]" :title="n.title" />
		  	</mt-tab-container-item>
		</mt-tab-container>

	</div>
</template>
<script>
import axios from "axios"
import qs from "qs"
import mint from 'mint-ui'
export default {
    name: 'hello',
    data () {
        return {
            value: '',
            selected: '1',
            movies: sessionStorage.getItem('token') || {},
        }
    },
    /*computed:{
    	movie0: function() {
            let _this = this;
            _this.getMovie(0,movie0);
        },
        movie1: function() {
            let _this = this;
            _this.getMovie(50,movie1);
        },
        movie2: function() {
            let _this = this;
            _this.getMovie(100,movie2);
        },
        movie3: function() {
            let _this = this;
            _this.getMovie(150,movie3);
        },
        movie4: function() {
    		let _this = this;
    		_this.getMovie(200,movie4);
    	}
    },*/
    /*watch: {
        selected: function() {
            this.getMovie((Number(this.selected)-1)*50)
        }
    },*/
    beforeMount: function() {
        this.getMovie();
        console.log('beforeMount')
    },
    mounted: function() {
        this.getMovie();
        console.log('mounted')
    },
    methods: {
        getMovie(){
            let _this = this;
            _this.start = (Number(this.selected)-1)*50
            axios.get('/api/movie/top250?count=50&start='+_this.start)
            .then(function(res){
            	let index = parseInt(_this.selected)-1;
               	_this.movies[index] = res.data.subjects;
                sessionStorage.setItem('movies', res.data.subjects);
                console.log(sessionStorage.getItem('movies'))
                //console.log(_this.movies[index])
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