<template>
	<div>
		<mt-header title="票房榜" fixed>
		  	<router-link to="/" slot="left">
		    	<mt-button icon="back"></mt-button>
		  	</router-link>
		</mt-header>

		<mt-navbar v-model="selected">
		  	<mt-tab-item id="1">全国</mt-tab-item>
		  	<mt-tab-item id="2">北美</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected">
		  	<mt-tab-container-item id="1">
		  	  	<mt-cell v-for="n in movie" :title="n.title" />
		  	</mt-tab-container-item>
		  	<mt-tab-container-item id="2">
                <div class="rank" v-for="(n,key) in movie">
                    <h2>{{key+1}}</h2>
                    <li>
                        {{n.subject.title}}
                    </li>
                </div>
		  	  	
		  	</mt-tab-container-item>
		</mt-tab-container>

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
            axios.get('/api/movie/us_box')
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
.rank{
    height: 20%;
    border: 1px solid;
    position: relative;
    margin: 20% auto;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
}
h2{
    width: 40%;
    border-bottom: 1px solid #ccc;
}
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