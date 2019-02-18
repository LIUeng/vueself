<template>
  <div id="app">
    <p>{{message}}</p>
    <span>{{count}}</span>
    <button @click="add1">ADD1</button>
    <button @click="add2">ADD2</button>
    <p>{{countPlusLocalState}}</p>
    <ul>
      <li v-for="item in doneTodos">{{item.text}}</li>
    </ul>
    <ul>
      <li v-for="item in data">{{item}}</li>
    </ul>
    <span>A: {{ countA }}</span>
    <button @click="addA">ADDA</button>
    <span>B: {{ countB }}</span>
    <button @click="addB">ADDB</button>
    <p :class="$style.text">这是一段话</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
// import styles from './index.css';

export default {
  name: 'app',

  data() {
    return {
      message: 'hello world !!!',
      localCount: 1
    };
  },

  computed: {
    ...mapState({
      count: state => state.count,
      countA: state => state.a.count,
      countB: state => state.b.count,
      data: state => state.data
    }),
    countPlusLocalState(state) {
      return state.count + this.localCount;
    },
    ...mapGetters({
      doneTodos: 'doneTodoFilter'
    })
  },

  mounted() {
    this.getData();
    console.log(this.$style);
  },

  methods: {
    ...mapMutations({
      add1: 'increment'
    }),
    ...mapActions(['getData']),

    add2() {
      this.$store
        .dispatch({
          type: 'getData'
        })
        .then(res => {
          console.log(res);
        });
    },

    addA() {
      this.$store.dispatch({
        type: 'a/increment'
      });
    },

    addB() {}
  }
};
</script>

<style module>
/* @import './index.css'; */
.text {
  font-size: 20px;
  font-weight: bold;
  color: red;
}
</style>


