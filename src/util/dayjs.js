import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
dayjs.locale("zh-cn"); // 简体中文

export default dayjs; // default

/** 是否为同一时间 */
export const isSameTime = (before, after, unit) =>
  dayjs(before).isSame(dayjs(after), unit);
/** 是否为同一分钟 */
export const isSameMin = (before, after) => isSameTime(before, after, "minute");
/** 是否为同一小时 */
export const isSameHour = (before, after) => isSameTime(before, after, "hour");
/** 是否为同一天 */
export const isSameDay = (before, after) => isSameTime(before, after, "day");
/** 是否为同一周 */
export const isSameWeek = (before, after) => isSameTime(before, after, "week");
/** 是否为同一月 */
export const isSameMonth = (before, after) =>
  isSameTime(before, after, "month");
/** 是否为同一年 */
export const isSameYear = (before, after) => isSameTime(before, after, "year");
