<template>
    <div>
    	<h1>欢迎来到豆瓣</h1>
    	<input type="text" v-model.trim="phone" placeholder="手机号/邮箱">
    	<input type="password" v-model.trim="password" placeholder="密码">
    	<button @click='login'>登录</button>
    	<router-link to="/register">注册豆瓣</router-link>
    	<router-link to="/forgotPassword">忘记密码</router-link>
    	<router-link to="/weibo">微博登录</router-link>
    	<router-link to="/wechat">微信登录</router-link>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            phone: '',
            password: ''
        }
    },
    methods: {
    	login(){
    		 
    	}
    }
}
</script>

<style scoped>
	h1{
		font-weight: normal;
	}
</style>