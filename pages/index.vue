
<script lang="ts" setup>

</script>

<template>
    <div>
        <div class="container">
            <div>
                <img class="w-200px h-200px ml-auto mr-auto" src="../Public/favicon.png" />
            </div>
            <div class="text-center font-bold text-4xl tracking-wide">
                Nuxt3中文文档
            </div>

            <div class="diagram m-10">
                <NuxtLink to="/" class="licka">
                    查看Nuxt3路线图 →
                </NuxtLink>
            </div>
        </div>
        <div class="bg-light-300">
            <div class="container">
                <n-grid cols="4" item-responsive>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl mb-2">更轻量</div>
                            <div class="text-base">以现代浏览器为目标的情况下，服务器部署和客户端产物最多可达75倍的减小。</div>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl">更快</div>
                            <div class="text-base">用动态服务端代码分割来优化冷启动，由 nitro 提供能力。</div>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl">Hybrid</div>
                            <div class="text-base">增量静态生成和其他高级模式现在都成为可能。</div>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl">Suspense</div>
                            <div class="text-base">导航前后皆任何组件中获取数据。</div>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl">Composition API</div>
                            <div class="text-base">使用 Composition API 和 Nuxt 3 的 composables 实现真正的可复用性。</div>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl">Nuxt CLI</div>
                            <div class="text-base">全新的零依赖体验，助您轻松搭建项目和集成模块。</div>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl">Nuxt Devtools</div>
                            <div class="text-base">更多的信息和快速修复，在浏览器中高效工作。</div>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl">Nuxt Kit</div>
                            <div class="text-base">全新的基于 TypeScript 和跨版本兼容的模块开发。</div>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl">Webpack 5</div>
                            <div class="text-base">更快的构建速度和更小的构建产物，并且零配置。</div>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl">Vite</div>
                            <div class="text-base">用 Vite 作为你的打包器，体验轻量级的快速 HMR。</div>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl">Vue3</div>
                            <div class="text-base">Vue3 会成为您下一个应用的坚实基础。</div>
                        </div>
                    </n-grid-item>
                    <n-grid-item span="4  800:2 1200:1">
                        <div class="introduce">
                            <div class="text-2xl">TypeScript</div>
                            <div class="text-base">由原生 TypeScript 和 ESM 构成 —— 没有额外的步骤。</div>
                        </div>
                    </n-grid-item>
                </n-grid>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.licka:hover {
    box-shadow: 0 0 16px #00dc82;
}

.diagram {

    display: flex;
    justify-content: center;
}

.licka {
    @apply font-medium pt-3 pb-3 pr-5 pl-5 tracking-widest;
    box-shadow: 0 0 5px 1px #00dc82;
    outline: 0;
    border-radius: 5px;

}

.introduce {
    padding: 2rem;
}
</style>