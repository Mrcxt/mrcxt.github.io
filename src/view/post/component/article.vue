<template>
	<article>
		<a-skeleton active :paragraph="{ rows: 6 }" :loading="!post_res.body">
			<h1 class="title">{{post_res.title}}</h1>
			<Meta :post_res="post_res" />
			<MarkdownBody :body="post_res.body" />
			<div class="updated_time">
				<span>最后修改于 </span> <time>{{updated_time}}</time>
			</div>
		</a-skeleton>
	</article>
</template>

<script>
	import MarkdownBody from "./markdownBody.vue";
	import Meta from "./meta.vue";

	import { reactive, toRefs, computed } from "vue";
	import { format as timeago } from "timeago.js";
	import { format } from "date-fns";

	export default {
		components: {
			MarkdownBody,
			Meta,
		},
		props: {
			post_res: {
				type: Object,
				default: () => ({}),
			},
		},
		setup(props) {
			//

			const updated_time = computed(() =>
				timeago(props.post_res.updated_at, "zh_CN").replace(/\s*/g, "")
			);
			return {
				updated_time,
			};
		},
	};
</script>

<style lang="less" scoped>
	article {
		width: 0;
		flex: auto;
		// padding: 0 20px;
		box-sizing: border-box;
		.title {
			color: var(--main-color);
			margin-bottom: 0;
		}

		.updated_time {
			margin: 10px 0;
			color: #8c8c8c;
			text-align: right;
		}
	}
</style>