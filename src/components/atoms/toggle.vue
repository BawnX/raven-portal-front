<template>
  <div class="w-full my-2 ml-4">
    <label
        class="flex justify-between items-center cursor-pointer"
        for="toogleA"
    >
      <!-- toggle -->
      <div class="relative">
        <!-- input -->
        <input id="toogleA" v-model="checked" class="sr-only" type="checkbox"/>
        <!-- line -->
        <div class="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
        <!-- dot -->
        <div class="dot absolute w-6 h-6 bg-gray-300 rounded-full shadow -left-1 -top-1 transition"></div>
      </div>
      <!-- label -->
      <div class="mr-6 text-gray-700 font-medium">
        <icon-one v-if="!checked" class="h-8 w-8 icon"/>
        <icon-second v-if="checked" class="h-8 w-8 icon"/>
      </div>
    </label>
  </div>
</template>

<script lang="ts" setup>
import {computed, defineAsyncComponent, PropType, ref} from "vue";

const props = defineProps({
  value: {
    type: Array as PropType<Array<String>>,
    default: []
  }
})

const IconOne = computed(() => defineAsyncComponent(() => import("./icons/" + props.value[0] + ".vue")))
const IconSecond = computed(() => defineAsyncComponent(() => import("./icons/" + props.value[1] + ".vue")))

const checked = ref(false)
</script>

<style>
input:checked ~ .dot {
  transform: translateX(100%);
  @apply bg-amber-600
}

.icon {
  @apply fill-amber-600
}
</style>
