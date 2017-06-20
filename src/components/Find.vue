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
                <div>
                    <ul class="list-box">
                        <p>精选榜单</p>
                        <li class="list" id="top250">
                            <h3>豆瓣Top250</h3>
                            <h6>8分以上好电影</h6>
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                        </li>
                        <li class="list" id="week-top">
                            <h3>本周口碑榜</h3>
                            <h6>6月13日 - 6月20日</h6>
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                        </li>
                        <li class="list" id="latest">
                            <h3>新片榜</h3>
                            <h6>6月13日 - 6月20日</h6>
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                        </li>
                        <li class="list" id="highest-grossing">
                            <h3>票房榜</h3>
                            <h6>票房最高排名</h6>
                            <img src="" alt="">
                            <img src="" alt="">
                            <img src="" alt="">
                        </li>
                    </ul>
                </div>

                <div>
                    
                </div>
            </mt-tab-container-item>

            <mt-tab-container-item id="2">
                <div>
                    <p>今日更新<span>更多<img src="" alt=""></span></p>
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
    height: 200px;
}
.list-box{
    overflow: hidden;
    position: relative;
    width: 650px;
}
.list{
    width: 150px;
    height: 150px;
    float: left;
    margin: 2px 2px;
    border-radius: 5px;
}
#top250{
    background: linear-gradient(to top, rgba(0,181,29,0.1), rgba(0,181,29,1));
}
#week-top{
    background: linear-gradient(to top, rgba(212,195,149,0.1), rgba(212,195,149,1));
}
#latest{
    background: linear-gradient(to top, rgba(93,124,248,0.1), rgba(93,124,248,1));
}
#highest-grossing{
    background: linear-gradient(to top, rgba(173,106,106,0.1), rgba(173,106,106,1));
}
</style>