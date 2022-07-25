<script lang="ts" setup>
import { GithubFilled, TwitterCircleFilled, MenuFoldOutlined } from "@vicons/antd";
import { PartlySunnySharp } from "@vicons/ionicons5";
// import { useMessage } from 'naive-ui'
// const message = useMessage()
const state = reactive({
    options: [
        {
            label: '滨海湾金沙，新加坡',
            key: 'marina bay sands',
            disabled: true
        },
        {
            label: '入门',
            key: "/getting-started/quick-start"
        },
        {
            label: '指导',
            key: '/guide/concepts/introduction'
        },
        {
            label: '比佛利山庄酒店，洛杉矶',
            key: 'the beverly hills hotel, los angeles'
        }
    ],
})

const { options } = toRefs(state)
const handleSelect = (key: string | number) => {
    // message?.info(String(key))
}
</script>

<template>
    <div class="container">
        <n-grid cols="12" item-responsive class="items-center">
            <n-grid-item span="11  800:4 1200:3">
                <div class="h-16">
                    <NuxtLink to="/" class="logo">
                        <img class="logoImg" src="@/Public/favicon.png" alt="">
                        <span class="logoText">Nuxt3中文文档</span>
                    </NuxtLink>
                </div>
            </n-grid-item>
            <n-grid-item span="0 800:8 1200:6" key="111111">
                <div class="">
                    <n-space justify="center" class="h-16 items-center text-base font-medium">
                        <NuxtLink to="/getting-started/quick-start">入门</NuxtLink>
                        <NuxtLink to="/guide/concepts/introduction">指导</NuxtLink>
                        <NuxtLink to="/user/99">API</NuxtLink>
                        <NuxtLink to="/user/42">例子</NuxtLink>
                        <NuxtLink to="/">社区</NuxtLink>
                    </n-space>
                </div>
            </n-grid-item>

            <n-grid-item span="0  1200:3" key="225252255">
                <div class="">
                    <n-space justify="center" class="h-16 items-center">
                        <n-icon size="34">
                            <GithubFilled />
                        </n-icon>


                        <n-icon size="34">
                            <TwitterCircleFilled />
                        </n-icon>

                        <n-icon size="34">
                            <PartlySunnySharp />
                        </n-icon>
                    </n-space>
                </div>
            </n-grid-item>

            <n-grid-item span="1 800:0" key="445666">
                <n-dropdown trigger="hover" :options="options" @select="handleSelect">
                    <div class="">
                        <n-icon size="30">
                            <MenuFoldOutlined />
                        </n-icon>
                    </div>
                </n-dropdown>

            </n-grid-item>
        </n-grid>
        <!-- <n-space justify="space-between" class="h-16">
            <NuxtLink to="/" class="logo">
                <img class="logoImg" src="@/Public/favicon.png" alt="">
                <span class="logoText">Nuxt3中文文档</span>
            </NuxtLink>
            <n-space justify="center" class="h-16 items-center text-base font-medium">
                <NuxtLink to="/getting-started/quick-start">入门</NuxtLink>
                <NuxtLink to="/">指导</NuxtLink>
                <NuxtLink to="/">API</NuxtLink>
                <NuxtLink to="/">例子</NuxtLink>
                <NuxtLink to="/">社区</NuxtLink>
            </n-space>
            <n-space justify="center" class="h-16 items-center">
                <n-button quaternary circle>
                    <template #icon>
                        <n-icon size="34">
                            <GithubFilled />
                        </n-icon>
                    </template>
                </n-button>
                <n-button quaternary circle>
                    <template #icon>
                        <n-icon size="34">
                            <TwitterCircleFilled />
                        </n-icon>
                    </template>
                </n-button>
                <n-button quaternary circle>
                    <template #icon>
                        <n-icon size="32">
                            <PartlySunnySharp />
                        </n-icon>
                    </template>
                </n-button>
            </n-space>
        </n-space> -->
    </div>
</template>

<style lang="scss" scoped>
.logo {
    @apply flex items-center;
    height: 100%;

    .logoImg {
        @apply w-10 inline-block mr-2;
    }

    .logoText {
        @apply text-2xl;
    }
}
</style>