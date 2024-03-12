<template>
    <div class="sm:min-w-[250px] max-w-[400px] w-full flex flex-col flex-1">
      <WidgetHeader :title="title" :subtitle="subtitle" :bg-color="bgColor" :text-color="textColor" />
      <div class="flex flex-col gap-[10px] mt-[13.5px] w-full flex-1">
        <Checkbox :default-status="isLinkToProfile" />
        <BadgeList :default-color="badgeColor" />
        <Toggle :default-status="isActivate" />
      </div>
    </div>
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
      bgColor: {
        type: String,
        required: true
      },
      isLinkToProfile: {
        type: Boolean,
        required: true
      },
      badgeColor: {
        type: String,
        required: true
      },
      isActivate: {
        type: Boolean,
        required: true
      },
      textColor: {
        type: String,
        required: true
      }
    }
  }
  </script>