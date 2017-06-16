<template>
    <div>
        <div class="header">
            <span @click='selectCity'>{{city}}</span>
            <mt-search v-model="value">
                <mt-cell v-for="item in result" :title="item.title" :value="item.value" placeholder="电影/电视剧/影人"></mt-cell>
            </mt-search>
        </div>
        
        <mt-swipe :auto="2000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
        </mt-swipe>

        <mt-navbar v-model="selected">
            <mt-tab-item id="1">正在热映</mt-tab-item>
            <mt-tab-item id="2">即将上映</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <mt-cell v-for="n in 10" :title="'内容 ' + n" />
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <mt-cell v-for="n in 4" :title="'测试 ' + n" />
            </mt-tab-container-item>
        </mt-tab-container>

        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item id="1">
                <img slot="icon" src="">
                热映
            </mt-tab-item>
            <mt-tab-item id="2">
                <img slot="icon" src="">
                找片
            </mt-tab-item>
            <mt-tab-item id="3">
                <img slot="icon" src="">
                我的
            </mt-tab-item>
        </mt-tabbar>
    </div>    
</template>

<script>
import { InfiniteScroll, Swipe, SwipeItem, Search, Navbar, Tabbar, TabItem, TabContainer, TabContainerItem } from 'mint-ui';
export default {
    name: 'hello',
    data () {
        return {
            city: '深圳',
            selected: 1,
            result:[],
            hotMovies:{}
        }
    },
    mounted(){
        init()
    },
    methods: {
        selectCity(){
            this.$router.push('/City')
        },
        init(){
            let _this = this
            // 请求登录接口
            axios.post('https://api.douban.com/v2/movie/in_theaters',qs.stringify({loginName: _this.phone, password: md5(_this.password)}))
            .then(function(res){
                        Indicator.close()
                        _this.repeatBtn = false
                        if (res.data.code === '10000') {
                            window.localStorage.setItem('token', res.data.data.token)
                            // _this.changeLoginStatus(true)
                            axios.defaults.headers.common['authorization'] = 'Bearer ' + res.data.data.token
                            _this.$router.push('/index')
                        } else {
                            Toast(res.data.msg)
                        }
            })
            .catch(function(){
                        Indicator.close()
                        _this.repeatBtn = false
                        Toast('网络请求超时！')
            })
        }
    },
    components: {
    }
}
</script>

<style scoped>
.header{
    width: 100%;
    height: 10%;
    margin: 0;
    position: relative;
}
.header span{
    width: 20%;
    float: left;
}
.mt-search{
    width: 80%;
    height: 10%;
    float: right;
    margin: 0;
    padding: 0;
}
.mint-searchbar-inner{
    margin: 0 auto;
}
.mint-searchbar-cancel{
    margin-left: 10px;
}
</style>
