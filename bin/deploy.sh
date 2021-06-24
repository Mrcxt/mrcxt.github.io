###
 # @LastEditTime: 2021-06-17 00:17:11
 # @Description: 
 # @Date: 2021-04-06 22:07:18
 # @Author: @虾哔哔
### 
#！ /bin/bash
yarn build
cd ./dist
cp index.html 404.html
# rm index.html
cd ../
npm run publish
# gh-pages -d build