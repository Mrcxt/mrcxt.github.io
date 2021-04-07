<template>
	<div class="theme">
		<a-radio-group v-model:value="theme" @change="setTheme">
			<a-radio-button value="primary">primary</a-radio-button>
			<a-radio-button value="success">success</a-radio-button>
			<a-radio-button value="danger">danger</a-radio-button>
			<a-radio-button value="warn">warn</a-radio-button>
		</a-radio-group>
	</div>
</template>

<script setup>
	import { ref } from "vue";

	const theme = ref("success");
	const setTheme = (e) => {
		document.body.style.setProperty("--main-color", `var(--${e.target.value})`);
	};
</script>

<style lang="less" scoped>
	.theme {
		position: fixed;
		right: 0;
	}
</style>