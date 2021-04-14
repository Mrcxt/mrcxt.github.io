import marked from "marked";
import hljs from "highlight.js";

export const marked = (md) => {
  const renderer = new marked.Renderer();
  renderer.code = function (code, lang) {
    lang = lang ? lang : "bash";
    return `<pre class="custom-code"><code class="hljs lang-${lang}" data-lang="${lang}">${
      hljs.highlight(lang, code).value
    }</code></pre>`;
  };
  marked.setOptions({
    renderer: renderer,
    breaks: true, // md中的空行识别为分段，默认为false
  });
  return marked(md);
};
