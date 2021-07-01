<template>
	<router-view></router-view>
	<a-back-top class="hidden backtop md:block" />
</template>

<script setup>
	import { getUserInfo, getIssues } from "@/api";
	import { useStore } from "vuex";

	const store = useStore();

	getUserInfo().then((res) => {
		store.commit("setting", ["userInfo", res]);
	});
</script>

<style  lang="less">
	body {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
		// background-color: #f4f5f5;
	}
	#app {
		font-family: var(--base-font-family);
		font-family: "Menlo", "Meslo LG", monospace;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		font-size: 14px;
		color: var(--text-color);
		flex: auto;
		max-width: 960px;
		width: 100%;
		margin: 0 auto;
		line-height: 1.725;
		text-rendering: geometricPrecision;
		display: flex;
		& > * {
			flex: 1;
			width: 100%;
		}
		.backtop {
			width: auto;
			right: 15px;
			bottom: 25px;
		}
	}
</style>