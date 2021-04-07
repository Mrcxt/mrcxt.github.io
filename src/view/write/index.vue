<template>
	<div class="write">
		<Write year />
	</div>
</template>

<script setup>
	import dayjs, { isSameYear } from "@/util/dayjs";
	import { useStore } from "vuex";
	import { computed } from "vue";
	import Write from "@/components/write.vue";
</script>

<style lang="less" scoped>
	.write {
		.year {
		}
		.article__list {
			margin: 5px 0;
			margin-left: 20px;
			display: flex;
			.article--time {
				color: var(--gray-7);
				margin-right: 40px;
				flex-shrink: 0;
			}
			.article--title {
				color: var(--text-color);
				border-bottom: 1px solid var(--text-color);
				flex: auto;
			}
		}
	}
</style>