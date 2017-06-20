<template>
    <div>
    	<mt-header title="设置">
            <router-link to="/User" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <!-- <mt-button icon="more" slot="right"></mt-button> -->
        </mt-header>

        <mt-cell title="意见反馈" is-link></mt-cell>
        <mt-cell title="给应用评分" is-link></mt-cell>
        <mt-cell title="清除缓存" is-link @click='wipe'><span style="color: green">{{cache}}</span></mt-cell>
        <mt-cell title="关于" is-link></mt-cell>
        <mt-button type="default" size="large" @click.native="logout">退出登录</mt-button>
    </div>
</template>

<script>
import { Header, Cell } from 'mint-ui';
export default {
    name: 'hello',
    data () {
        return {
            cache: ''
        }
    },
    methods:{
        wipe(){
            MessageBox.confirm('确定清除缓存的数据和图片？', '豆瓣电影', 'showCancelButton: true').then(action => {
              
            });
        },
        logout(){

        }
    }
}
</script>

<style scoped>
.mint-header{
    background-color: #fff;
    color: #000;
    border-bottom: 1px solid #ccc;
}
.mint-cell{
    border-bottom: 1px solid #ccc;
    min-height:24px;
}
</style>