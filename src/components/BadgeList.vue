<template>
    <div class="flex justify-between items-center relative text-green font-[400] text-[14px] w-full">
      <WidgetLabel :for="selectId" label="Badge colour" />
      <div
        role="listbox"
        class="flex gap-[4px]"
        :aria-labelledby="selectId"
        tabindex="0"
      >
        <div
          v-for="color in badgeColors"
          :key="color"
          :class="['w-[16px] h-[16px] p-0 m-0 cursor-pointer hover:opacity-80', color, { '!border-2 !border-divider !border-solid': selectedColor === color, 'border-[1px] border-solid border-gray-200': color === BadgeColor.WHITE }]"
          role="option"
          :aria-selected="selectedColor === color"
          @click="selectColor(color)"
        ></div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { ref } from 'vue';
  import { BadgeColor } from '../utils/BadgeColor'
  import WidgetLabel from './WidgetLabel.vue'
  
  export default {
    components: {
      WidgetLabel
    },
    props: {
      defaultColor: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const selectedColor = ref(props.defaultColor)
      const selectId = 'select-badge-color'
  
      const badgeColors = Object.values(BadgeColor)
  
      const selectColor = (color:string) => {
        selectedColor.value = color
      }
  
      return {
        selectedColor,
        selectId,
        badgeColors,
        selectColor,
        BadgeColor
      }
    }
  }
  </script>
  