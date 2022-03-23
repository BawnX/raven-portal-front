<template>
  <nav>
    <div class="max-w-8xl mx-auto border-red-400">
      <div class="flex justify-between">
        <a class="flex items-center mx-2 my-2 pl-2" href="#">
          <Logo class="h-11"></Logo>
        </a>

        <div class="flex my-2">
          <ButtonIcon :isActive="isHouseActive" :textShow="'Inicio'" class="mr-2">
            <a href="#">
              <House class="w-9"/>
            </a>
          </ButtonIcon>

          <ButtonIcon :isActive="isIdeaActive" :textShow="'Ideas'" class="mx-2">
            <a href="#">
              <Idea class="w-9"/>
            </a>
          </ButtonIcon>

          <ButtonIcon :isActive="isClassActive" :textShow="'Clases'" class="mx-2">
            <a href="#">
              <Class class="w-9"/>
            </a>
          </ButtonIcon>

          <ButtonIcon :isActive="isContractActive" :textShow="'Crowdfunding'" class="ml-2">
            <a href="#">
              <Contract class="w-9"/>
            </a>
          </ButtonIcon>
        </div>

        <div class="flex my-2 mx-2 pr-2">
          <ButtonIcon :isActive="isNotificationActive" class="mr-2">
            <a href="#">
              <Notification class="w-9"/>
            </a>
          </ButtonIcon>

          <ButtonIcon :isActive="isChatActive" class="mx-2">
            <a href="#">
              <Chat class="w-9"/>
            </a>
          </ButtonIcon>

          <ButtonIcon :isActive="isDropdownActive" class="ml-2">
            <Dropdown class="w-9"/>
          </ButtonIcon>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import Logo from "../atoms/icons/logo.vue"
import House from "../atoms/icons/house.vue"
import Idea from "../atoms/icons/idea.vue"
import Class from "../atoms/icons/class.vue"
import Contract from "../atoms/icons/contract.vue"
import ButtonIcon from "../molecules/button-icon.vue"
import Dropdown from "../atoms/icons/dropdown.vue"
import Notification from "../atoms/icons/notification.vue"
import Chat from "../atoms/icons/chat.vue"
import {ref} from "vue";

const isHouseActive = ref(true);
const isIdeaActive = ref(false);
const isClassActive = ref(false);
const isContractActive = ref(false);
const isDropdownActive = ref(false);
const isNotificationActive = ref(false);
const isChatActive = ref(false);



</script>
