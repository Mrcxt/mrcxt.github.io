import markdown from "markdown-it";
import hljs from "@/util/highlight";

const marked = markdown({
  highlight: (code, language) => {
    language = language || "bash";
    return `<div class="code" data-lang="${language}">${
      hljs.highlight(code, { language }).value
    }</div>`;
  },
  langPrefix: "hljs lang-", // TODO
  breaks: true, // md中的空行识别为分段，默认为false
});

export default marked;
