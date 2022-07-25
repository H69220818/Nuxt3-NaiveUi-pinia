<script lang="ts" setup>
import { darkTheme, NConfigProvider, GlobalThemeOverrides } from "naive-ui";

const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#FF0000'
    },
    Button: {
        textColor: '#FF0000'
    }
}
const theme = ref(darkTheme)

</script>

<template>
    <div>
        <NConfigProvider inline-theme-disabled :theme="theme" :theme-overrides="themeOverrides">
            <n-loading-bar-provider>
                <n-dialog-provider>
                    <DialogContent />
                    <n-notification-provider>
                        <n-message-provider>
                            <MessageContent />
                            <KeepAlive>
                                <NuxtLayout>
                                    <NuxtPage />
                                </NuxtLayout>
                            </KeepAlive>
                        </n-message-provider>
                    </n-notification-provider>
                </n-dialog-provider>
            </n-loading-bar-provider>
        </NConfigProvider>
    </div>
</template>

<style lang="scss" scoped>
</style>