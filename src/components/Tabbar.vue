<template>
    <div class="ex-nav">
        <router-link to="/Hot">
            <span class="m1"></span><br>
            热映
        </router-link>
        <router-link to="/Find">
            <span class="m2"></span>
            <br>
            找片
        </router-link>
        <router-link to="/User">
            <span class="m3"></span>
            <br>
            我的
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
    .ex-nav{background-color: #fafafa; border-top: 1px solid #e6e6e6;  position: fixed; bottom: 0; left: 0; width: 100%;display: table; z-index: 5;}
    .ex-nav a {display: table-cell;color: #aaa;text-align: center;vertical-align: middle;width: 25%;}
    .ex-nav span{display: inline-block;width: 30px;height: 30px;}
    .ex-nav .m1{background:url(../assets/img/hot.png) no-repeat center;background-size: 100%;}
    .activeRouter .m1{background:url(../assets/img/hot_select.png) no-repeat center;background-size: 100%;}
    .ex-nav .m2{background:url(../assets/img/find.png) no-repeat center;background-size: 100%;}
    .activeRouter .m2{background:url(../assets/img/find_select.png) no-repeat center;background-size: 100%;}
    .ex-nav .m3{background:url(../assets/img/user.png) no-repeat center;background-size: 100%;}
    .activeRouter .m3{background:url(../assets/img/user_select.png) no-repeat center;background-size: 100%;}
</style>