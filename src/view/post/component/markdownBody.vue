
<template>
	<div v-html="html"></div>
</template>

<script>
	import { defineComponent, toRefs } from "vue";
	import marked from "@/util/marked";

	export default defineComponent({
		props: {
			body: String,
		},
		setup(props, ctx) {
			const { body } = toRefs(props);

			const { html, toc } = marked(body.value);
			console.log(toc);

			return { html };
		},
	});
</script>

<style lang="less" scoped>
</style>