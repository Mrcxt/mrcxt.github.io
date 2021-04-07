import http from "./axios";
import config from "~/github.config";

const { username, repos } = config;
const { get } = http;

/**
 * 获取用户信息
 * @param {*}
 */
export const getUserInfo = () => {
  const url = `/users/${username}`;

  return get(url);
};

/**
 * 获取所有issue列表
 * @param {*} params
 */
export const getIssues = (params = {}) => {
  const { state = "open", labels, page, per_page } = params;
  const url = `/repos/${username}/${repos}/issues`;

  return get(url, {
    state,
    labels,
    page,
    per_page,
  });
};

/**
 * 获取所有labels列表
 * @param {*} params
 */
export const getLabels = () => {
  const url = `/repos/${username}/${repos}/labels`;

  return get(url);
};

/**
 * 获取issue详情
 * @param {*} params
 */
export const getIssueDetails = (id) => {
  const url = `/repos/${username}/${repos}/issues/${id}`;

  return get(url);
};

/**
 * 获取issue详情评论
 * @param {*} params
 */
export const getIssueComments = (id) => {
  const url = `/repos/${username}/${repos}/issues/${id}/comments`;

  return get(url);
};
