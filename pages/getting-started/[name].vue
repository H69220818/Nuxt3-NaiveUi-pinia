<script lang="ts" setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
const containerRef = ref<HTMLElement>(null as unknown as HTMLElement)
definePageMeta({
    layout: "article",
});
const route = useRoute()
const state = reactive({
    data: "",
    catalogList: [],
})
const onGetCatalog = (list) => {
    state.catalogList = list;
    console.log(list, 'list');
};
const onChange = (v: string) => {
    console.log(v, 'string');
    let str = v.toString()
    console.log(str, 'str');
}
const fetchData = async () => {
    const res: string = await $fetch(`/api/getting-started/${route.params.name}`)
    state.data = res
}
onMounted(() => {
    fetchData()
})

</script>

<template>
    <div>
        <n-layout has-sider sider-placement="right">
            <n-layout-content ref="containerRef" content-style="padding: 24px;">
                <!--  -->
                <div ref="containerRef">
                    <md-editor previewOnly @change="onChange" @onGetCatalog="onGetCatalog" v-model="state.data" />
                </div>

            </n-layout-content>
            <n-layout-sider content-style="padding: 24px;" bordered>
                <n-anchor ignore-gap listen-to=".n-layout-scroll-container" affix :bound="100" :trigger-top="24"
                    :top="88" style="z-index: 1">
                    <!-- <n-anchor-link title="演示" href="#演示">
                        <n-anchor-link title="基础用法" href="#basic" />
                        <n-anchor-link title="忽略间隔" href="#ignore-gap" />
                        <n-anchor-link title="固定" href="#affix" />
                        <n-anchor-link title="滚动到" href="#scrollto" />
                    </n-anchor-link> -->
                    <n-anchor-link v-for="(item, index) in state.catalogList" :key="index" :title="item.text"
                        :href="`#${item.text}`" />
                </n-anchor>
            </n-layout-sider>
        </n-layout>


    </div>
</template>

<style lang="scss" scoped>
</style>