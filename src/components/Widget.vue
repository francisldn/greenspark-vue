<template>
    <article class="sm:min-w-[250px] max-w-[400px] w-full flex flex-col flex-1">
      <WidgetHeader :title="title" :subtitle="subtitle" :bg-color="badgeColor" />
      <div class="flex flex-col gap-[10px] mt-[13.5px] w-full flex-1">
        <Checkbox :product-type="productType" />
        <BadgeList :product-type="productType" />
        <Toggle :product-type="productType" />
      </div>
    </article>
  </template>
  
  <script lang="ts">
  import WidgetHeader from './WidgetHeader.vue'
  import Checkbox from './Checkbox.vue'
  import BadgeList from './BadgeList.vue'
  import Toggle from './Toggle.vue'
  
  export default {
    components: {
      WidgetHeader,
      Checkbox,
      BadgeList,
      Toggle
    },
    props: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      },
      badgeColor: {
        type: String,
        required: true
      },
      productType: {
        type: String,
        required: true
      }
    }
  }
  </script>