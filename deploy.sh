# 确保
set -e

# 构建 生成静态文件
vuepress build blog

# 导航到构建输出目录
cd blog/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 推到你仓库的的 gh-page 分支
# 将 <USERNAME>/<REPO> 替换为你的信息
git push -f git@github.com:shilili0/myBlogs.git master:gh-pages


