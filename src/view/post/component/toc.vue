<template>
	<div class="toc-wrap">
		<div class="title">目录</div>
		<div class="toc"></div>
	</div>
</template>

<script setup>
	import Toc from "@/util/toc.js";
	import { onMounted, nextTick, defineProps } from "vue";

	const { wrap } = defineProps({
		wrap: String,
	});

	onMounted(() => {
		nextTick(() => {
			const toc = new Toc({
				wrap,
				insert: ".toc",
				// showSerial: false,
			});
			console.log(toc);
		});
	});
</script>

<style lang="less">
	.toc-wrap {
		position: sticky;
		top: 0;
		box-sizing: border-box;
		.toc {
			.toc_level {
				.toc_level {
					margin-left: 20px;
				}
			}
		}
	}
</style>