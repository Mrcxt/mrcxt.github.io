
<template>
	<div class="markdown_body" v-html="body_html"></div>
</template>

<script setup>
	import { defineProps, ref } from "vue";
	import marked from "@/util/marked";
	import "@/style/markdown/basic.less";

	const { body } = defineProps({
		body: String,
	});

	const body_html = marked(body);
</script>

<style lang="less" scoped>
</style>