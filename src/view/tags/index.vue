<template>
	<a-skeleton active :paragraph="{ rows: 5 }" :loading="!tags.length">
		<div class="tags">
			<a-tag class="tag" v-for="tag in tags" :key="tag.id" :color="randomcolor({luminosity: 'bright'})" @click="pushWrite({labels:tag.name})">{{tag.name}}</a-tag>
		</div>
	</a-skeleton>
</template>

<script setup>
	import { ref } from "vue";
	import { useRouter, useRoute } from "vue-router";
	import randomcolor from "randomcolor";
	import { getIssues, getLabels } from "@/api/index.js";
	import { pushWrite } from "@/router/util.js";

	const tags = ref([]);
	getLabels().then((res) => (tags.value = res));
</script>

<style lang="less" scoped>
	.tags {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-content: center;
		height: 100%;
		width: 50%;
		margin: 0 auto;
		.tag {
			cursor: pointer;
			margin: 5px 10px;
			margin-left: 0;
			font-size: 14px;
		}
	}
</style>