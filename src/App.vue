<template>
  <div>
    <a v-if="!isOpen" @click="open()">
      <c-text
        as="a"
        top="1rem"
        left="1rem"
        position="absolute"
        fontSize="lg"
        fontWeight="bold"
        color="primary.500"
      >
        ▶</c-text
      >
    </a>
    <c-flex
      v-if="isOpen"
      direction="column"
      minHeight="100vh"
      maxWidth="16rem"
      p="1rem"
      backgroundColor="grey.500"
      margin="0"
      position="relative"
    >
      <a @click="close()">
        <c-text
          as="a"
          right="1rem"
          position="absolute"
          fontSize="lg"
          fontWeight="bold"
          color="primary.500"
        >
          ◀️</c-text
        >
      </a>
      <c-text fontSize="lg" fontWeight="bold" color="primary.500">
        Vue Test App</c-text
      >

      <a>
        <c-text mt="2rem">📕 Phrases</c-text>
      </a>
    </c-flex>
  </div>
</template>

<script>
import { CFlex, CText } from '@chakra-ui/vue';
import { topbarService } from './app/topbar.ts';
export default {
  name: 'App',
  components: {
    CFlex,
    CText,
  },
  data() {
    return {
      isOpen: true,
    };
  },
  created() {
    this.subscription = topbarService.isOpen().subscribe((isOpen) => {
      this.isOpen = isOpen;
    });
  },
  beforeDestroy() {
    this.subscription.unsubscribe();
  },
  methods: {
    close: () => {
      topbarService.close();
    },
    open: () => {
      topbarService.open();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
