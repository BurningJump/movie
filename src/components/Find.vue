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
                
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                
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
            selected: 1,
            result:[],
        }
    },
    mounted(){
        this.init();
    },
    methods:{
        init(){
            let _this = this;
            axios.get('user/64249287')
            .then(function(res){
                console.log(res.data)
               
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

</style>