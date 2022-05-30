<template>
  <button
    class="btn"
    :class="[variant, { outlined: outlined }]"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    variant: {
      type: String,
      required: false,
      default: "primary",
    },
    outlined: {
      type: Boolean,
      required: false,
      default: false,
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(_, { emit }) {
    const onClick = () => {
      emit("onClick");
    };
    return { onClick };
  },
};
</script>
<style scoped>
.btn {
  width: 100%;
  height: inherit;
  font-size: 19px;
  border-radius: 6px;
}
.primary {
  color: white;
  border: none;
  background-color: primary;
}
.primary > .outlined {
  background-color: white;
  color: primary;
  border: 1px solid primary;
}
.danger {
  color: white;
  border: none;
  background-color: red;
}
.danger > .outlined {
  background-color: white;
  color: red;
  border: 1px solid red ;
}

.normal {
  color: black;
  border: 1px solid black;
  background-color: white;
}
</style>
