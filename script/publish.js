const ghpages = require("gh-pages");

ghpages.publish("dist",{
}, (err, data) => {
    if (err) {
        console.log(err)
    } else {
        console.log('发布成功')
    }
});
