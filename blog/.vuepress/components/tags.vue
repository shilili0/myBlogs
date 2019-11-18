<template>
  <div class="myInfos">
    <a-row :gutter="24">
      <a-col :span="8">
        <a-card hoverable>
          <div class="avatar-infos">
            <a-avatar
                :size="64"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            <p>诗与远方</p>
            <p>https://shilili0.github.io/myBlogs/</p>
          </div>
          <div class="infos-base">
            <p> <a-icon type="environment" /> 地址：浙江杭州 </p>
            <p> <a-icon type="environment" /> 职位：前端开发 </p>
          </div>
          <div class="infos-tags">
              <h3>博客分类</h3>
            <section class="tags" v-if="this.$site.themeConfig.tags&&tags&&tags.length>0">
              <span
                v-for="taginfo in tagsAll"
                @click="change(taginfo.tag)"
                :class="taginfo.tag===tg?'active':''"
              >
                <a-tag>
                  <router-link
                    :to="'/tag'+'/'+taginfo.tag"
                    class="tag"
                  >{{taginfo.tag}}({{taginfo.number}})</router-link>
                </a-tag>
              </span>
            </section>
          </div>
        </a-card>
      </a-col>
      <a-col :span="16">
          <a-tabs>
            <a-tab-pane :tab="`${taginfo.tag}(${taginfo.number})`" :key="taginfo.tag"  v-for="taginfo in tagsAll">{{taginfo.tag}}({{taginfo.number}})</a-tab-pane>
           <!--  <a-tab-pane tab="Tab 2" key="2">Content of tab 2</a-tab-pane>
            <a-tab-pane tab="Tab 3" key="3">Content of tab 3</a-tab-pane> -->
            <a-button slot="tabBarExtraContent">Extra Action</a-button>
          </a-tabs>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Drawer,
  Button,
  Card,
  Row,
  Col,
  Avatar,
  Icon,
  Tag,Tabs
} from "ant-design-vue";
Vue.use(Drawer);
Vue.use(Button);
Vue.use(Card);
Vue.use(Row);
Vue.use(Col);
Vue.use(Avatar);
Vue.use(Icon);
Vue.use(Tag);
Vue.use(Tabs);
import Article from './Article'
export default {
  data() {
    return {
      visible: false,
      path: [],
      routes: [],
      tg: "",
      info: [],
    };
  },
  components: {Article},
  mounted() {
      //当路由?tag='xxx'时能自动跳转到对应内容
    let tag = this.$route.query.tag;
    if (tag) {
      this.change(tag);
    }
  },
  computed: {
    tags() {
      let tags = [];
      let pages = this.$site.pages;
      // relativePath
      pages.forEach(items => {
        var route = {};
        let itemTag = items.frontmatter && items.frontmatter.tag;
        if (itemTag) {
          route = {
            tags: itemTag,
            page: items.path
          };
          this.routes.push(route);
          tags = tags.concat(itemTag);
        }
      });
      console.log(this.routes);
      return tags;
    },
    tagsAll() {
      //核心代码，整合markdown中tags的数目
      let allTags = [];
      this.$site.pages.forEach(v => {
        if (v.frontmatter.tags) {
          allTags.push(v.frontmatter.tags);
        } else if (v.frontmatter.tag) {
          allTags.push(v.frontmatter.tag);
        }
      });
      allTags = allTags.join(",").split(",");
      let flatTags = Array.from(new Set(allTags));
      return flatTags.reduce((res, v) => {
        let o = {};
        o.tag = v;
        o.number = allTags.filter(value => value === v).length;
        res.push(o);
        return res;
      }, []);
    },
    color() {
      // 标签button颜色
      let colors = [
        "#3498DB",
        "#3EAF7C",
        "#5CBBF6",
        "#f5A28E",
        "#f2AC3B",
        "#FA6551",
        "#C68CE0"
      ];
      return colors[parseInt(Math.random() * colors.length)];
    }
  },
  methods: {
    change(tag) {
      //点击标签下面文章显示对应的内容
      this.tg = tag;
      this.info = this.$site.pages.filter(v => {
        let tags = v.frontmatter.tags;
        if (tags) {
          return tags.some(v => v === tag);
        }
      });
    },
    showMyDetailInfo() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>
<style>
.ant-tag{
    padding: 5px 10px;
    height: auto;
    /* line-height: 1.5; */
    margin-bottom: 10px;
    font-size: 14px;
}
.avatar-infos{
    text-align: center;
    font-size: 14px;
}
</style>
