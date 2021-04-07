<template>
	<a-skeleton active :paragraph="{ rows: 3 }" :loading="!repoList.length">
		<div v-if="route?.query?.labels">
			<a-tag :color="randomcolor({luminosity: 'bright'})">{{route.query.labels}}</a-tag>
		</div>
		<ul class="article__list">
			<li v-for="item in repoList.slice(0,max)" :key="item">
				<h3 v-if="year && showYear(item.created_at)" class="year">{{dayjs(item.created_at).format('YYYY')}}</h3>
				<div class="article__group">
					<div class="article--time">{{dayjs(item.created_at).format('YYYY-MM-DD')}}</div>
					<router-link class="article--title ellipsis" :to="{name:'post',params:{id:item.number}}">
						<span>{{item.title}}</span>
					</router-link>
				</div>
			</li>
		</ul>
		<router-link v-if="more" class="more" :to="{name:'write'}">查看更多>>></router-link>
	</a-skeleton>
</template>

<script setup>
	import dayjs, { isSameYear } from "@/util/dayjs";
	import { useStore } from "vuex";
	import { getUserInfo, getIssues } from "@/api";
	import { computed, defineProps, ref, watch } from "vue";
	import randomcolor from "randomcolor";
	import { useRoute } from "vue-router";

	defineProps({
		year: Boolean,
		more: Boolean,
		max: Number,
	});

	const route = useRoute();

	const repoList = ref([]);

	watch(
		() => route.query,
		(query) => {
			repoList.value = [];
			getIssues(query).then((res) => {
				repoList.value = res;
			});
		},
		{
			deep: true,
			immediate: true,
		}
	);

	const showYear = (() => {
		let flagYear = null;
		return (time) => {
			if (!flagYear) {
				flagYear = time;
				return true;
			}

			if (isSameYear(flagYear, time)) {
				return false;
			} else {
				flagYear = time;
				return true;
			}
		};
	})();
</script>

<style lang="less" scoped>
	ul.article__list {
		li {
			margin: 5px 0;
			.article__group {
				display: flex;

				.article--time {
					color: var(--gray-7);
					margin-right: 40px;
					flex-shrink: 0;
				}
				.article--title {
					color: var(--text-color);
					border-bottom: 1px solid var(--text-color);
					transition: all 0.3s;
					&:hover {
						color: var(--main-color);
						transform: translateX(10px);
					}
				}
			}
		}
	}
</style>