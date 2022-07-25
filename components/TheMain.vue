<script lang="ts" setup>


</script>

<template>
    <div>
        <NConfigProvider inline-theme-disabled>
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