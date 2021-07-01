import marked from "marked";
import "@/style/markdown/basic.less";
import hljs from "@/util/highlight";
import arraytotree from "array-to-tree";

const renderer = new marked.Renderer();
// code
renderer.code = (code, language) => {
  language = language || "bash";
  return `<pre class="hljs" data-lang="${language}"><code>${
    hljs.highlight(code, { language }).value
  }</code></pre>`;
};

// toc
const toc = [];
const levels = Array.from(Array(6), () => 1);
const createToc = (text, level) => {
  const pid = levels.slice(0, level - 1).join("-");
  levels[level - 1] += 1;
  for (let i = level; i < levels.length; i++) {
    levels[i] = 0;
  }
  const id = levels.slice(0, level).join("-");
  toc.push({ text, level, id, pid });
};

// heading
renderer.heading = (text, level) => {
  createToc(text, level);
  return `<h${level} id="${text}"><span class="prefix"></span><span>${text}</span><span class="suffix"></span></h${level}>`;
};

// table
renderer.table = (thead, tbody) => {
  // debugger;
  return `<div class="table-container">
    <table>
      <thead>${thead}</thead>
      <tbody>${tbody}</tbody>
    </table>
  </div>`;
};

marked.setOptions({
  renderer,
  breaks: true, // md中的空行识别为分段，默认为false
});

export default (md) => {
  return {
    html: `<div class="markdown_body">${marked(md)}</div>`,
    toc: arraytotree(toc, {
      parentProperty: "pid",
      customID: "id",
    }),
  };
};
