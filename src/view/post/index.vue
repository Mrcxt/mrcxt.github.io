<template>
	<div class="post">
		<Header />
		<div class="p-5 view">
			<Article :post_res="post_res" />
			<Sidebar :post_res="post_res" />
		</div>
		<Footer />
	</div>
</template>

<script setup>
	import Footer from "@/components/footer.vue";
	import Header from "@/components/header.vue";
	import Article from "./component/article.vue";
	import Sidebar from "./component/sidebar.vue";

	import { reactive, onBeforeMount, computed, watch } from "vue";
	import { useRoute } from "vue-router";
	import { getIssueDetails } from "@/api/index.js";

	const route = useRoute();

	const post_res = reactive({});

	onBeforeMount(async () => {
		await getIssueDetails(route.params.id).then((res) => {
			Object.assign(post_res, res);
		});
	});
</script>

<style lang="less" scoped>
	.post {
		display: flex;
		flex-direction: column;
		.view {
			display: flex;
			flex: 1;
			justify-content: space-between;
		}
	}
</style>