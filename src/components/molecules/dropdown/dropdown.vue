<template>
  <div class="relative">
    <ButtonIcon :class="style" :text-show="textShow" v-on:mouseleave="isVisible = false"
                v-on:mouseover="isVisible = true">
      <slot/>
    </ButtonIcon>
    <div :class="isVisible ? ` dropdown` :`hidden dropdown`"
         v-on:mouseleave="isVisible = false" v-on:mouseover="isVisible = true">
      <div v-for="({ type, value }, index) in items" :key="index">
        <router-link class="item" v-if="type === 'routerLink'" to="">{{value}}</router-link>
        <hr v-if="type === 'divider'" />
        <toggle v-if="type === 'toggle'" :value="value"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {RouterLink} from "vue-router"
import {PropType, ref} from "vue";
import ButtonIcon from "../../atoms/button-icon.vue";
import {DropdownInterface} from "./dropdown.interface";
import Toggle from "../../atoms/toggle.vue"
defineProps({
  textShow: {
    default: "",
    type: String
  },
  style: {
    default: "",
    type: String
  },
  items: {
    default: [],
    type: Array as PropType<Array<DropdownInterface>>
  }
})

const isVisible = ref(false)
</script>

<style>
.dropdown {
  @apply absolute right-0 mt-1 py-2 w-48 bg-white rounded-xl shadow-xl
}

.item {
  @apply block px-4 py-2 hover:bg-gray-400
}
</style>
