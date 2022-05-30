<template>
  <div class="col-6">
    <div class="form-group pb-3">
      <label>{{ label }}</label>
      <input 
        class="form-control" 
        @input="$emit('update:modelValue',$event.target.value)"
        :value="modelValue"
        :type="type"
        >
      <div v-if="subjectError" class="text-red">
        {{ subjectError }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subjectError: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: false,
      default: 'text'
    }
  },
  setup() {

  }

}
</script>

<style scoped>
.text-red {
  color: red;
}
</style>