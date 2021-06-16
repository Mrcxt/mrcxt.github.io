<template>
	<div class="layout">
		<Header />
		<div class="p-5 main-container">
			<router-view></router-view>
		</div>
		<Footer />
	</div>
</template>

<script setup>
	import Header from "@/components/header.vue";
	import Footer from "@/components/footer.vue";
</script>

<style  lang="less">
	.layout {
		display: flex;
		flex-direction: column;
		.main-container {
			flex: auto;
		}
	}
</style>