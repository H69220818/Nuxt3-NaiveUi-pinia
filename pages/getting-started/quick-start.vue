<script lang="ts" setup>
import { useAclStore } from "@/store/modules/text";
const useAcl = useAclStore()
const state = reactive({
    data: "",
})
const handleClick = () => {
    console.log(useAcl.text, 'state.data');
    useAcl.setText(useAcl.text)
}
const changesss = (e: any) => {
    console.log(e, 'change');

}
</script>

<template>
    <div>
        入门{{ useAcl.text }}
        <div>
            <n-input @focus="changesss" v-model:value="useAcl.text" type="text" placeholder="基本的 Input" />
        </div>
        <div>
            <n-button type="primary" size="medium" @click="handleClick">改变</n-button>

        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>