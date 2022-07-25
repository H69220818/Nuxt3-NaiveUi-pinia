<template>
  <div class="pt-80px">
    <n-result status="500" :title="error.message" description="服务器出错可能说明该雇更多程序员了">
      <template #footer>
        <n-button @click="handleError">去首页</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup>
import { NResult, NButton } from "naive-ui";
const props = defineProps({
  error: Object
})


const handleError = () => clearError({ redirect: '/' })
</script>