<template>
	<div>
		<mt-header title="本周口碑榜" fixed>
		  	<router-link to="/" slot="left">
		    	<mt-button icon="back"></mt-button>
		  	</router-link>
		</mt-header>

		<li v-for="item in movie">{{item.title}}</li>

	</div>
</template>
<script>
import axios from "axios"
import mint from 'mint-ui';
export default {
    name: 'hello',
    data () {
        return {
            value:'',
            selected: '1',
            movie:[],
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            let _this = this;
            axios.get('/api/movie/weekly')
            .then(function(res){
               _this.movie = res.data.subjects;
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