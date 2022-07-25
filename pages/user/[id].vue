
<script lang="ts" setup>
definePageMeta({
    layout: "custom",
});
const router = useRouter()
const handleRouter = () => {
    router.push({
        path: '/'
    })
}
</script>

<template>
    <div>
        <h1>会员中心/user/:id</h1>
        <div>用户id：{{ $route.params.id }}</div>
        <n-button type="primary" size="medium" @click="handleRouter">去首页</n-button>
    </div>
</template>

<style lang="scss" scoped>
</style>