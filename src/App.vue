<template>
  <div>
    <c-flex
      direction="column"
      minHeight="100vh"
      maxWidth="16rem"
      p="1rem"
      backgroundColor="grey.500"
      margin="0"
      position="relative"
    >
      <c-text
        right="1rem"
        position="absolute"
        fontSize="lg"
        fontWeight="bold"
        color="primary.500"
      >
        ◀️</c-text
      >
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
export default {
  name: 'App',
  components: {
    CFlex,
    CText,
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
