<template>
	<router-view></router-view>
	<Theme />
	<a-back-top />
</template>

<script setup>
	// css
	import "normalize.css";
	import "./style/reset.less";
	import "./style/base.less";
	//
	import Header from "./components/header.vue";
	import Footer from "./components/footer.vue";
	import Theme from "./components/theme.vue";
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
	}
	#app {
		font-family: var(--base-font-family);
		font-family: "Menlo", "Meslo LG", monospace;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		font-size: 14px;
		color: var(--text-color);
		flex: auto;
		max-width: 768px;
		margin: 0 auto;
		line-height: 1.725;
		text-rendering: geometricPrecision;
		display: flex;
		padding: 0 20px;
		& > * {
			flex: auto;
		}
	}
</style>