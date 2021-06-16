<template>
	<ul class="meta">
		<li class="author">{{post_res?.user?.login}}</li>
		<li><time class="created_time">发布于{{created_time}}</time></li>
		<li>
			<ul class="tags">
				<li v-for="tag in post_res.labels" :key="tag.id">
					<a-tag class="tag" :color="`#${tag.color}`">{{tag.name}}</a-tag>
				</li>
			</ul>
		</li>
	</ul>
</template>

<script setup>
	import { defineProps, computed } from "vue";
	import { format } from "date-fns";

	const { post_res } = defineProps({
		post_res: Object,
	});

	const created_time = computed(() =>
		format(new Date(post_res.created_at), "yyyy-MM-dd")
	);
</script>

<style lang="less" scoped>
	.meta {
		display: flex;
		margin-bottom: 30px;
		align-items: center;
		.author {
			font-weight: 700;
			color: #8c8c8c;
		}
		.created_time {
			color: #8c8c8c;
			margin: 0 10px;
		}
		.tags {
			.tag {
				cursor: pointer;
			}
		}
	}
</style>