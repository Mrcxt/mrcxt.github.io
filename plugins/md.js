const mdToStr = (str) => {
  const content = JSON.stringify(str);
  return `export default ${content}`;
};

export function md() {
  return {
    transform: (code, id) => {
      if (id.endsWith(".md")) {
        return mdToStr(code);
      }
    },
  };
}
