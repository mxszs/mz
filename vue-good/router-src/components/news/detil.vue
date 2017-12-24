<template>
  <div class="detil">
        {{id}}-{{$route.query.con}}
  </div>

</template>

<script>
export default {
        props:['id'],
        name:'detil'
    }
</script>
