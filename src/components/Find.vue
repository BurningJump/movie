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
                <ul v-for="movie in hotMovies">
                    <li class="Movies-list">
                        <router-link to="movie.alt">
                            <div>
                                
                            </div>
                        </router-link>
                    </li>
                </ul>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <ul v-for="movie in comingMovies">
                    <li class="Movies-list">
                        <router-link :to="movie.alt">
                            <div>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </mt-tab-container-item>
        </mt-tab-container>
        <Tabbar></Tabbar>
    </div>
</template>

<script>
import Tabbar from './Tabbar';
export default {
    name: 'hello',
    data () {
        return {
            selected: 1
        }
    },
    components: {
        Tabbar
    }
}
</script>

<style scoped>

</style>