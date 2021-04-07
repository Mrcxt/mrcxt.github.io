<template>
	<section class="writing">
		<h2 class="title">Writing</h2>
		<Write more :max="5" />
	</section>
</template>

<script setup>
	import Write from "@/components/write.vue";
	import dayjs from "@/util/dayjs";
	import { useStore } from "vuex";
	import { computed } from "vue";

	const store = useStore();
</script>

<style lang="less" scoped>
	.writing {
		margin: 50px 0;
		.title {
			color: var(--main-color);
		}
	}
</style>