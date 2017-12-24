<template>
    <div class="app-news">
        news
    <router-link to="/news/inside" replace>InsideNews</router-link>
    <router-link to="/news/outside" replace>OutsideNews</router-link>
    <router-view></router-view>
    </div>

</template>

<script>

export default {
    name:"app-news",
  
}
</script>
