<template>
  <v-list>
    <v-list-item-group color="primary">
      <v-list-item>
        <v-list-item-icon>
          <v-icon v-text="icon">mdi-home</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>主页</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>

    <v-list-group :value="false" prepend-icon="mdi-folder">
      <template v-slot:activator>
        <v-list-item-title>测试用例</v-list-item-title>
      </template>

      <v-list-group :value="true" no-action sub-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>用例管理</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="([title, icon], i) in testcase"
          :key="i"
          link
          to="/navlist/testcase"
        >
          <v-list-item-title v-text="title"></v-list-item-title>
          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list-group>

    <v-list-group :value="false" prepend-icon="mdi-flag">
      <template v-slot:activator>
        <v-list-item-title>测试报告</v-list-item-title>
      </template>

      <v-list-group :value="true" no-action sub-group>
        <template v-slot:activator>
          <v-list-item-content>
            <v-list-item-title>查看报告</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="([title, icon], i) in report"
          :key="i"
          link
          to="/navlist/report"
        >
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
        <v-list-item link>
          <v-list-item-title>设置</v-list-item-title>
          <v-list-item-icon>
            <v-icon>mdi-cog-outline</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list-group>

    <v-list-item-group color="primary">
      <v-list-item lick to="/navlist/about">
        <v-list-item-icon>
          <v-icon>mdi-clock</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>关于</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    testcase: [
      ["查询", "mdi-account-multiple-outline"],
    ],
    report: [
      ["Allure报告", "mdi-account-multiple-outline"]
    ]
  }),
};
</script>