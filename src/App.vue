<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-items" to="/home">首页</router-link>
      <router-link class="nav-items" to="/news">最新</router-link>
      <router-link class="nav-items" to="/hot">最热</router-link>
      <router-link class="nav-items" to="/4k">4K</router-link>
      <router-link class="nav-items" to="/category">分类</router-link>
      <router-link class="nav-items" to="/bing">必应美图</router-link>
      <router-link class="nav-items" to="/daily">每日英语</router-link>
      <router-link class="nav-items" to="/individual">个人中心</router-link>

      <div class="nav-profile borderBlue">
        <img src="./assets/profile/default_profile1.png">
        <div class="nav-profile-detail">
          <ul class="profile-detail">
            <li class="profile-userName">{{  }}</li>
            <li class="profile-userRank">等级：{{}}</li>
            <li class="profile-userShare">分享：{{}}</li>
          </ul>
          <div class="profile-logout">退出登陆</div>
        </div>
      </div>
    </div>
    <router-view class="routerView"></router-view>
  </div>
</template>


<style src="@/assets/css/app.css"></style>
<script scoped src="@/assets/js/app.js"></script>