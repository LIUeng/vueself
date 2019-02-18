<template>
  <div>
    <button @click="clk">CLICK ME</button>
  </div>
</template>

<script>
export default {
  name: 'btn',
  props: {
    child: Function
  },
  methods: {
    clk() {
      // this.child(1212);
      this.$emit('child', 1212);
    }
  }
};
</script>

