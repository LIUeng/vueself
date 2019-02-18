<template>
  <div>
    <span>这是page1</span>
    <Button @child="parent"></Button>
  </div>
</template>

<script>
import Button from './Button';

export default {
  name: 'page1',
  components: {
    Button
  },
  methods: {
    parent(val) {
      console.log(val);
      console.log('You are clicked!');
    }
  },
  mounted() {
    console.log(this);
  }
};
</script>
