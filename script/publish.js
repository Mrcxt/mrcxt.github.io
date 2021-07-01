const ghpages = require("gh-pages");

ghpages.publish(
  "dist",
  {
    repo: "https://github.com/Mrcxt/mrcxt.github.io.git",
    branch: "gh-pages",
  },
  (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("发布成功");
    }
  }
);
