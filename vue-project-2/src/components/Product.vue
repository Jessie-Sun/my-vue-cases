<template>
	<div class="product">
		<h3>{{msg}}</h3>
	</div>
</template>

<script>
	export default {
	  name: 'product',
	  data () {
	    return {
	      msg: '这里是Product视图'
	    }
	  }
	}
</script>

<style scoped>
h3 {
	background-color: green;
}
</style>