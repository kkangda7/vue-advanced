<template>
  <input
    class="field"
    :type="type"
    @input="$emit('update:value', $event.target.value)"
  />
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: "text",
    },
    modelValue: {
      type: String,
      required: false,
    },
  },
};
</script>
<style scoped>
.field {
  display: flex;
  align-items: center;
  width: 100%;
  height: inherit;
  padding-left: 10px;
  border: 1px solid #ddd;
  font-size: 20px;
  border-radius: 8px;
}
</style>