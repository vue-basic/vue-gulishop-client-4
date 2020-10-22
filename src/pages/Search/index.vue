<template>
    <div>
        <!-- {{$route.params.keyword}} --- {{keyword}}
        name:{{name}}
        <br/>
        {{$route.query.keyword2}} --- {{keyword2}} -->
        <TypeNav></TypeNav>
    </div>
</template>

<script>
export default {
    name:"Search",
    // props:['keyword','name']
    props:['keyword','keyword2']
}
</script>

<style lang="less" scoped>
    
</style>