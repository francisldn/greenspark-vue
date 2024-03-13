<template>
    <div class="flex justify-between items-center relative text-green font-[400] text-[14px] w-full">
      <WidgetLabel :for="toggleId" label="Activate badge" />
      <div
        :id="toggleId"
        role="checkbox"
        :aria-checked="isActivate"
        tabindex="0"
        class="relative z-0 w-[40px] h-[20px] flex border-[0.59px] rounded-[29.5px] shadow-[inset_0_0_5px_0_#afc6bd] border-solid border-light-green cursor-pointer"
        :class="{ 'justify-end bg-green': isActivate, 'justify-start': !isActivate }"
        @click="toggleActivation"
        @mouseenter="setHover(true)"
        @mouseleave="setHover(false)"
      >
        <div
          class="flex justify-center items-center z-10 rounded-full h-[28px] w-[28px] -mt-[4px] -ml-[4px]"
          :class="{ 'bg-light-green opacity-50 z-10 relative': isHover, '-mr-[5px]': isActivate }"
        ></div>
        <div
          class="absolute z-20 h-[20px] w-[20px] rounded-full border-[2px] border-solid border-beige bg-white -top-[0.05rem]"
          :class="{ 'bg-white !opacity-100': isHover, '-right-[0.08rem]': isActivate, 'left-0': !isActivate }"
        ></div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, ref } from 'vue'
  import WidgetLabel from './WidgetLabel.vue'
  import { useStore } from 'vuex'
  import type { ProductDataType } from '../types/ProductData'
  
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
      const productData = computed<ProductDataType[]>(() => store.state.productData)
      const setProductData = (value: ProductDataType[]) => {
        store.commit('setProductData', value)
      }
      const selectedProduct = computed<ProductDataType['type']>(() => store.state.selectedProduct)
      const setSelectedProduct = (value: ProductDataType['type'] | undefined) => {
        store.commit('setSelectedProduct', value)
      }
      const isActivate = computed(() => store.state.selectedProduct === props.productType)
      const isHover = ref(false)
      const toggleId = 'activate-badge'
  
      const toggleActivation = () => {
        if (selectedProduct.value && selectedProduct.value === props.productType) {
            setSelectedProduct(undefined)
          } else {
            setSelectedProduct(props.productType as ProductDataType['type'])
          }

        const updatedProductData = productData.value.map(product => {
              return {
                ...product,
                active: isActivate.value,
              }
          })
          
          setProductData(
            updatedProductData
          )
      }
  
      const setHover = (value: boolean) => {
        isHover.value = value
      }
  
      return {
        isActivate,
        isHover,
        toggleId,
        toggleActivation,
        setHover
      }
    }
  }
  </script>  