<template>
  <v-row justify="center">
    <v-dialog
        v-model="dialog"
        max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          学习更多
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">想要了解更多关于我?</span>
        </v-card-title>
        <v-card-text>
          点击跳转进入我的个人CSDN博客:
          <p>
          <a
              href="https://blog.csdn.net/xinximo?spm=1001.2014.3001.5343"
              target="_blank"
              rel="noopener"
          >My Blogs Address</a>.
          </p>
          联系方式:
          <p>WeChat: wangxin_2014</p>
          <p>Phone: 13024291027</p>


        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="green darken-1"
              text
              @click="dialog = false"
          >
            取消
          </v-btn>
          <v-btn
              color="green darken-1"
              text
              @click="ReHome"
          >
            返回主页
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
    }
  },
  methods: {
    ReHome() {
      this.$router.push("/navlist");
    }
  }
}
</script>



<!--&lt;!&ndash; Use preprocessors via the lang attribute! e.g. <template lang="pug"> &ndash;&gt;-->
<!--<template>-->
<!--  <div id="app">-->
<!--    <h1>{{message}}</h1>-->

<!--    <p>-->
<!--      联系方式:-->
<!--      <a-->
<!--        href="https://blog.csdn.net/xinximo?spm=1001.2014.3001.5343"-->
<!--        target="_blank"-->
<!--        rel="noopener"-->
<!--      >My Blogs Address</a>.-->
<!--    </p>-->

<!--    <button @click="ReHome">返回主页</button>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  data() {-->
<!--    return {-->
<!--      message: '我是一个简单的测试管理平台!'-->
<!--    };-->
<!--  },-->
<!--  methods: {-->
<!--    ReHome() {-->
<!--      this.$router.push("/navlist");-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--&lt;!&ndash; Use preprocessors via the lang attribute! e.g. <style lang="scss"> &ndash;&gt;-->
<!--<style>-->
<!--#app {-->
<!--  font-family: Avenir, Helvetica, Arial, sans-serif;-->
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->

<!--a,-->
<!--button {-->
<!--  color: #4fc08d;-->
<!--}-->

<!--button {-->
<!--  background: none;-->
<!--  border: solid 1px;-->
<!--  border-radius: 2em;-->
<!--  font: inherit;-->
<!--  padding: 0.75em 2em;-->
<!--}-->
<!--</style>-->