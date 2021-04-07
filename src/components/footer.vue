<template>
	<div class="footer">
		<div class="copyright">
			Copyright © 2021 - {{ dayjs().format('YYYY')}}
		</div>
		<ul class="nav">
			<li v-for="(item) in router.options.routes[0].children" :key="item.path">
				<router-link :to="item.path">{{item.name}}</router-link>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { useRouter, useRoute } from "vue-router";
	import dayjs from "../util/dayjs";

	const router = useRouter();
	console.log(router);
</script>

<style lang="less" scoped>
	.footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: var(--gray-6);
		font-size: 14px;
		margin: 20px 0;
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
			}
		}
	}

	@media (max-width: 768px) {
		.footer {
			display: none;
		}
	}
</style>