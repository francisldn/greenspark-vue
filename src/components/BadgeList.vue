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
          :class="['w-[16px] h-[16px] p-0 m-0 cursor-pointer hover:opacity-80', color, { '!border-2 !border-divider !border-solid': isSelectedColor(color), 'border-[1px] border-solid border-gray-200': color === BadgeColor.WHITE }]"
          role="option"
          :aria-selected="isSelectedColor(color)"
          @click="selectColor(color)"
        ></div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed } from 'vue';
  import { BadgeColor } from '../utils/BadgeColor'
  import WidgetLabel from './WidgetLabel.vue'
import { useStore } from 'vuex';
import type { BadgeColorType, ProductDataType } from '../types/ProductData';
  
  export default {
    components: {
      WidgetLabel
    },
    props: {
      productType: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const store = useStore()
      const badgeColor = computed<BadgeColorType>(() => store.state.badgeColor)
      const productData = computed<ProductDataType[]>(() => store.state.productData)
      const isSelectedColor = (color: BadgeColor) => badgeColor.value[props.productType] === color
      const setBadgeColor = (color: BadgeColorType) => {
        store.commit('setBadgeColor', color)
      }
      const setProductData = (value: ProductDataType[]) => {
        store.commit('setProductData', value)
      }

      const selectId = 'select-badge-color'
  
      const badgeColors = Object.values(BadgeColor)
  
      const selectColor = (color:string) => {
        setBadgeColor({
          [props.productType]: color as BadgeColor
        })

        const updatedProductData = productData.value.map(product => {
          if (product.type === props.productType) {
            return {
              ...product,
              selectedColor:color.split('-')[1] as ProductDataType['selectedColor'],
            }
          }
          return product
        })
        setProductData(updatedProductData)
      }
  
      return {
        isSelectedColor,
        selectId,
        badgeColors,
        selectColor,
        BadgeColor
      }
    }
  }
  </script>
  