<template>
	<div class="layout">
		<Header />
		<div class="main">
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
		.main {
			flex: auto;
		}
	}
</style>