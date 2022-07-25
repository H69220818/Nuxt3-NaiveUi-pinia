<script lang="ts" setup>

</script>

<template>
    <div>
        <n-layout>
            <n-layout-header>
                <TheHeader />
            </n-layout-header>
            <n-layout has-sider>
                <n-layout-sider>
                    <TheSidebarMenu />
                </n-layout-sider>
                <n-layout-content>
                    <slot />
                </n-layout-content>
            </n-layout>
            <n-layout-footer>
                <TheFooter />
            </n-layout-footer>
        </n-layout>
    </div>
</template>

<style lang="scss" scoped>
</style>