<template>
	<a-dropdown :trigger="['click']">
		<a @click.prevent>theme</a>
		<template #overlay>
			<a-menu class="theme-menu" selectable v-model:selectedKeys="theme">
				<a-menu-item class="theme-menu-item" v-for="(val,key) in themeOptions" :key="val" @click="setTheme(val)">
					<span class="flag">✔️</span>
					<span>{{key}}</span>
				</a-menu-item>
			</a-menu>
		</template>
	</a-dropdown>
</template>

<script setup>
	import { ref, computed } from "vue";
	import { name } from "~/package.json";

	const themeName = name + "_theme";

	const themeOptions = {
		primary: "#409eff",
		success: "#07c160",
		warn: "#ff7f3f",
		danger: "#ee0a24",
	};
	const setTheme = (color) => {
		document.body.style.setProperty("--main-color", `${color}`);
		localStorage.setItem(themeName, color);
	};
	const theme = ref([localStorage.getItem(themeName) || "#07c160"]);
	setTheme(theme.value[0]);
</script>

<style lang="less" scoped>
	.theme-menu {
		::v-deep(.theme-menu-item) {
			display: flex;
			.flag {
				opacity: 0;
				margin-right: 5px;
			}
		}
		::v-deep(.ant-dropdown-menu-item-selected) {
			color: inherit;
			background-color: inherit;
			.flag {
				opacity: 1;
			}
		}
	}
</style>