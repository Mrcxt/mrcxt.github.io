<template>
	<article>
		<a-skeleton active :paragraph="{ rows: 6 }" :loading="!post_res.body_html">
			<h1 class="title">{{post_res.title}}</h1>
			<div class="meta">
				<div class="author">{{post_res.user.login}}</div>
				<time class="created_time"> {{created_time}}</time>
				<div class="tags">
					<a-tag class="tag" v-for="tag in post_res.labels" :key="tag.id" :color="`#${tag.color}`">{{tag.name}}</a-tag>
				</div>
			</div>
			<div class="content markdown-body" v-html="post_res.body_html"></div>
			<div class="updated_time">
				最后修改于<time>{{updated_time}}</time>
			</div>
		</a-skeleton>
	</article>
</template>

<script setup>
	import "github-markdown-css";
	import { reactive, onBeforeMount, computed } from "vue";
	import { useRoute } from "vue-router";
	import { getIssueDetails } from "@/api/index.js";
	import dayjs from "@/util/dayjs.js";
	import { format } from "timeago.js";

	const route = useRoute();

	const post_res = reactive({});

	onBeforeMount(async () => {
		await getIssueDetails(route.params.id).then((res) => {
			Object.assign(post_res, res);
		});
	});
	//
	const created_time = computed(() =>
		dayjs(post_res.created_at).format("YYYY-MM-DD")
	);
	const updated_time = computed(() =>
		format(post_res.updated_at, "zh_CN").replace(/\s*/g, "")
	);
</script>

<style lang="less" scoped>
	article {
		flex: auto;
		.title {
			color: var(--main-color);
			margin-bottom: 0;
		}
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
		.content {
		}
		.updated_time {
			margin: 10px 0;
			color: #8c8c8c;
			text-align: right;
		}
	}
</style>