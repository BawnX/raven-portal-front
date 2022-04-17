<template>
  <nav>
    <div class="max-w-8xl mx-auto border-red-400">
      <div class="flex justify-between">
        <a class="flex items-center mx-2 my-2 pl-2" href="#">
          <logo-icon class="h-11"></logo-icon>
        </a>

        <div class="flex my-2">
          <ButtonIcon :isActive="isHouseActive" :textShow="'Inicio'" class="mr-2">
            <a href="#">
              <house-icon class="w-9"/>
            </a>
          </ButtonIcon>

          <ButtonIcon :isActive="isIdeaActive" :textShow="'Ideas'" class="mx-2">
            <a href="#">
              <idea-icon class="w-9"/>
            </a>
          </ButtonIcon>

          <ButtonIcon :isActive="isClassActive" :textShow="'Clases'" class="mx-2">
            <a href="#">
              <class-icon class="w-9"/>
            </a>
          </ButtonIcon>

          <ButtonIcon :isActive="isContractActive" :textShow="'Crowdfunding'" class="ml-2">
            <a href="#">
              <contract-icon class="w-9"/>
            </a>
          </ButtonIcon>
        </div>

        <div class="flex my-2 mx-2 pr-2">
          <ButtonIcon :isActive="isNotificationActive" class="mr-2">
            <a href="#">
              <notification-icon class="w-9"/>
            </a>
          </ButtonIcon>

          <ButtonIcon :isActive="isChatActive" class="mx-2">
            <a href="#">
              <chat-icon class="w-9"/>
            </a>
          </ButtonIcon>

          <Dropdown :items="loginDropdown" :style="`py-3.5`" class="ml-2">
            <dropdown-icon class="block w-9"/>
          </Dropdown>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import LogoIcon from "../atoms/icons/logo.vue"
import HouseIcon from "../atoms/icons/house.vue"
import IdeaIcon from "../atoms/icons/idea.vue"
import ClassIcon from "../atoms/icons/class.vue"
import ContractIcon from "../atoms/icons/contract.vue"
import DropdownIcon from "../atoms/icons/dropdown.vue"
import NotificationIcon from "../atoms/icons/notification.vue"
import ChatIcon from "../atoms/icons/chat.vue"

import ButtonIcon from "../atoms/button-icon.vue"
import Dropdown from "../molecules/dropdown/dropdown.vue"
import {computed, ref} from "vue";
import {DropdownInterface} from "../molecules/dropdown/dropdown.interface";

const isHouseActive = ref(true);
const isIdeaActive = ref(false);
const isClassActive = ref(false);
const isContractActive = ref(false);
const isNotificationActive = ref(false);
const isChatActive = ref(false);

const loginDropdown = computed((): Array<DropdownInterface> => {
  return [
    {
      type: "routerLink",
      value: "nombre",
      linkTo: "perfil"
    },
    {
      type: "divider",
    },
    {
      type: "toggle",
      value: ["sun", "moon"],
    }
  ]
})
</script>
