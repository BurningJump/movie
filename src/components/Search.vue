<template>
	<mt-search v-model="value" cancel-text="取消" placeholder="电影/电视剧/影人">
  		<mt-cell v-for="item in result" :title="item.title" :value="item.value">
	</mt-cell>
</mt-search>
</template>

<script>
	
</script>

<style scoped>
	
</style>