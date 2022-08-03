<script lang="ts" setup>

</script>

<template>
    <div class="default">
        <div class="header">
            <TheHeader />
        </div>
        <div class="container content">
            <div class="main">
                <TheSidebarMenu class="menu" />

                <slot class="slot" />
            </div>
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
        z-index: 2;
    }

    .content {
        // margin-top: 65px;
        padding-top: 65px;

        .main {
            display: flex;

            .menu {
                width: 220px;
                flex-shrink: 0;
                height: 100vh;
            }

            .slot {
                flex: 1;
            }
        }
    }
}
</style>