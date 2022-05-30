<template>
  <div 
    class="alert toast-box" 
    role="alert"
    :class="`alert-${toastAlertType}`"
  >
    {{ message }}
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true
    },
    toastAlertType: {
      type: String,
      default: 'primary'
    }
  }
}
</script>

<style scoped>
  .toast-box {
    position: fixed;
    top: 10px;
    right: 10px;
  }
</style>