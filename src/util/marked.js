import marked from "marked";
import hljs from "@/util/highlight";

const renderer = new marked.Renderer();
console.log(renderer);
// code
renderer.code = (code, language) => {
  language = language || "bash";
  return `<pre class="hljs" data-lang="${language}"><code>${
    hljs.highlight(code, { language }).value
  }</code></pre>`;
};

// heading
renderer.heading = (text, level, raw, slugger) => {
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

export default marked;
