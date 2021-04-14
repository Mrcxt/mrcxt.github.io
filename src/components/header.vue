<template>
	<div class="header">
		<a-image class="logo" :width="50" :height="50" :src="userInfo.avatar_url" />
		<div>
			<h1 class="title">
				虾哔哔
			</h1>
			<ul class="nav">
				<li v-for="(item) in routerPath" :key="item.path">
					<router-link :to="{name:item.name}">{{item.name}}</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup>
	import { useRouter } from "vue-router";
	import { useStore } from "vuex";
	import { computed } from "vue";

	const store = useStore();
	const router = useRouter();
	const userInfo = computed(() => store.state.userInfo);
	const routerPath = computed(() => router.options.routes[0].children);

</script>

<style lang="less" scoped>
	.header {
		display: flex;
		margin: 40px 0;
		align-items: center;
		.logo {
			margin-right: 20px;
		}
		.title {
			font-size: 24px;
			margin: 0;
		}
		ul.nav {
			display: flex;
			li {
				padding: 0 20px;
				border-right: 1px dotted var(--main-color);
				&:last-child {
					border: none;
					padding-right: 0;
				}
				&:first-child {
					padding-left: 0;
				}
				a {
					font-size: 16px;
				}
			}
		}
	}
</style>