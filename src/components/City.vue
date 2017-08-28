<template>
    <div>
        <mt-header>
            <router-link to="/Hot" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>
        <mt-navbar v-model="selected">
            <mt-tab-item id='1'>国内</mt-tab-item>
            <mt-tab-item id='2'>海外</mt-tab-item>
        </mt-navbar>
    	<mt-search v-model="value" placeholder="输入城市名查询">
    	    <mt-cell v-for="item in result" :title="item.title" :value="item.value"></mt-cell>
    	</mt-search>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <div class="cityList">
                    <p class="CurrentCity">当前城市</p>
                    <span>{{currentCity}}</span>
                    <p class="PopularCity">热门城市</p>
                    <span>北京</span>
                    <span>上海</span>
                    <span>广州</span>
                    <span>深圳</span>
                    <span>成都</span>
                    <span>武汉</span>
                    <span>杭州</span>
                    <span>重庆</span>
                    <span>郑州</span>
                    <span>南京</span>
                    <span>西安</span>
                    <span>苏州</span>
                    <span>天津</span>
                    <span>长沙</span>
                    <span>福州</span>
                </div>
                <mt-index-list>
                    <mt-index-section index="A">
                        <mt-cell title="安徽"></mt-cell>
                        <mt-cell title="澳门"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="B">
                        <mt-cell title="北京"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="C">
                        <mt-cell title="重庆"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="F">
                        <mt-cell title="福建"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="G">
                        <mt-cell title="甘肃"></mt-cell>
                        <mt-cell title="广东"></mt-cell>
                        <mt-cell title="广西"></mt-cell>
                        <mt-cell title="贵州"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="H">
                        <mt-cell title="海南"></mt-cell>
                        <mt-cell title="河北"></mt-cell>
                        <mt-cell title="河南"></mt-cell>
                        <mt-cell title="黑龙江"></mt-cell>
                        <mt-cell title="香港"></mt-cell>
                        <mt-cell title="湖北"></mt-cell>
                        <mt-cell title="湖南"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="J">
                        <mt-cell title="江苏"></mt-cell>
                        <mt-cell title="江西"></mt-cell>
                        <mt-cell title="吉林"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="L">
                        <mt-cell title="辽宁"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="N">
                        <mt-cell title="内蒙古"></mt-cell>
                        <mt-cell title="宁夏"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="Q">
                        <mt-cell title="青海"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="S">
                        <mt-cell title="陕西"></mt-cell>
                        <mt-cell title="山东"></mt-cell>
                        <mt-cell title="山西"></mt-cell>
                        <mt-cell title="上海"></mt-cell>
                        <mt-cell title="四川"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="T">
                        <mt-cell title="台湾"></mt-cell>
                        <mt-cell title="天津"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="X">
                        <mt-cell title="新疆"></mt-cell>
                        <mt-cell title="西藏"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="Y">
                        <mt-cell title="云南"></mt-cell>
                    </mt-index-section>
                    <mt-index-section index="Z">
                        <mt-cell title="浙江"></mt-cell>
                    </mt-index-section>
                </mt-index-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            currentCity: '北京',
            selected: '1',
            msg: '',
            value: '',
            result: {}
        }
    },
    mounted() {
            let _this = this;
            // 百度地图API功能
            var map = new BMap.Map("allmap");
            var point = new BMap.Point(116.331398,39.897445);

            function myFun(result){
                var cityName = result.name;
                _this.currentCity = cityName;
                console.log("当前定位城市:"+cityName);
            }
            var myCity = new BMap.LocalCity();
            myCity.get(myFun);
    },
    methods: {
        
    }
}
</script>

<style scoped>
.mint-header{
    background-color: #fff;
    color: #000;
    border-bottom: 1px solid #ccc;
    margin-bottom: 8%;
}
.mint-navbar {
    position: fixed;
    top: 4px;
    width: 50%;
    height: 30px;
    border-radius: 5px;
    border: 1px solid red;
    margin: 0 25%;
}
.mint-navbar .mint-tab-item {
    padding: 8px 0;
}
.mint-navbar .mint-tab-item.is-selected {
    background-color: red;
    color: white;
    border-bottom: none;
    margin-bottom: 0;
}
.mint-search {
    height: auto;
}
.cityList p {
    padding-left: 4%;
}
.cityList span {
    width: 18%;
    text-align: center;
    background-color: #fff;
    border-radius: 5px;
    display: inline-block;
    margin: 2% 4% 2% 4%;
    padding: 1% 3% 1% 3%;
}
.mint-indexlist-nav {
    background-color: transparent;
    border-left: none;
    color: #2196f3;
}
.mint-indexlist-navitem {
    margin-bottom: -6px;
}
.mint-cell {
    padding-left: 4%;
    border-bottom: 1px solid #ccc;
}
.mint-indexsection-index {
    background-color: #f4f5f7;
}
</style>