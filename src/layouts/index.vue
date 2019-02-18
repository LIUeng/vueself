<template>
  <div id="layout">
    <div>
      <Header/>
      <div>
        <Sidebar/>
        <router-view></router-view>
      </div>
      <Footer/>
    </div>
  </div>
</template>


<script>
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default {
  name: 'layout',
  components: {
    Header,
    Sidebar,
    Footer
  }
};
</script>
