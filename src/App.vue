<script lang="ts">
import { defineComponent } from "vue";

import { BrBaseselect } from "@brightly/brightlycomponents/brightlycomponents-vue/src";

export default defineComponent({
  name: "App",
  components: { BrBaseselect },
});
</script>

<template>
  <br-baseselect
    :selectItems="[
      { value: 'esri', key: 'esri', id: 1 },
      { value: 'esri2', key: 'esri2', id: 2 },
      { value: 'esri3', key: 'esr3i', id: 3 },
    ]"
    baseIdentifier="type"
    label="Type"
    :required="true"
  ></br-baseselect>
</template>
<style></style>
