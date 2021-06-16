<template>
	<div class="sidebar">
		<Toc class="p-5" v-if="post_res.body" wrap=".markdown_body" />
	</div>
</template>

<script setup>
	import { watch } from "vue";
	import Toc from "./toc.vue";

	const { post_res } = defineProps({
		post_res: Object,
	});
</script>

<style lang="less" scoped>
	.sidebar {
		width: 200px;
		margin-left: 20px;
	}
	@media screen and (max-width: 960px) {
		.sidebar {
			display: none;
		}
	}
</style>