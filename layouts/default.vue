<script lang="ts" setup>

</script>

<template>
    <div class="default">
        <div class="header">
            <TheHeader />
        </div>
        <div class="content">
            <slot />
            <TheFooter />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.default {
    width: 100%;
    box-sizing: border-box;

    .header {
        background: #fff;
        width: 100%;
        position: fixed;
        top: 0;
    }

    .content {
        // margin-top: 65px;
        padding-top: 65px;
    }
}
</style>