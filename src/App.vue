<template>
  <div>
    <transition name="scale">
      <a v-if="!isOpen" @click="open()">
        <c-text
          cursor="pointer"
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
    </transition>
    <transition name="open">
      <c-flex
        cursor="pointer"
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
    </transition>
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

.open-enter-active,
.open-leave-active {
  transition: transform 0.2s;
}
.open-enter,
.open-leave-to {
  transform: translateX(-16rem);
}

.scale-enter-active,
.scale-leave-active {
  transition: opacity 0.8s, 0.6s;
}
.scale-enter,
.scale-leave-to {
  opacity: 0;
}
</style>
