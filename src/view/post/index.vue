<template>
	<div class="post">
		<!-- <Header /> -->
		<Content />
		<Footer />
	</div>
</template>

<script setup>
	import Footer from "@/components/footer.vue";
	import Header from "@/components/header.vue";
	import Content from "@/components/content.vue";
</script>

<style lang="less" scoped>
	.post {
		display: flex;
		flex-direction: column;
	}
</style>