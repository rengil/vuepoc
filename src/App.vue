<template>
  <c-flex flex="1" width="100%">
    <transition name="scale">
      <a v-if="!isOpen" @click="open()">
        <c-text
          v-bind:left="{ left: isCreating ? '4rem' : '1rem' }"
          cursor="pointer"
          as="a"
          top="1rem"
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
        minWidth="16rem"
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
    <c-flex v-if="isCreating" p="1rem" flex="1" flexDirection="column">
      <c-text fontSize="32px" fontWeight="bold">Create new phrase</c-text>
      <c-flex
        flex="{1}"
        flexDirection="column"
        justify="center"
        flexGrow="1"
        mx="2rem"
      >
        <c-stack spacing="3">
          <c-input placeholder="Phrase" size="md" v-model="phrase" />
          <c-input placeholder="Owner" size="md" v-model="owner" />
          <c-button
            alignSelf="flex-end"
            maxWidth="56px"
            mt="2rem"
            backgroundColor="primary.500"
            color="white"
            @click="add(phrase, owner)"
            >Save</c-button
          >
        </c-stack>
      </c-flex>
    </c-flex>

    <c-flex v-if="!isCreating" p="1rem" flex="1" flexDirection="column">
      <c-text fontSize="32px" fontWeight="bold">Phrases</c-text>
      <c-flex
        v-if="items.length"
        flex="{1}"
        flexDirection="column"
        justify="center"
        alignItems="center"
        textAlign="center"
        flexGrow="1"
      >
      </c-flex>

      <c-flex
        v-if="!items.length"
        flex="{1}"
        flexDirection="column"
        justify="center"
        alignItems="center"
        textAlign="center"
        flexGrow="1"
      >
        <c-flex maxWidth="500px" flexDirection="column">
          <c-text fontSize="32px" fontWeight="bold" color="primary.500"
            >So Empty</c-text
          >
          <c-text fontSize="16px" fontWeight="bold" color="gray.500">
            Nothing found. Add your first phrase to remember!</c-text
          >
          <c-button
            mt="2rem"
            backgroundColor="primary.500"
            color="white"
            @click="isCreating = true"
            >Create first</c-button
          >
        </c-flex>
      </c-flex>
    </c-flex>
  </c-flex>
</template>

<script>
import { CFlex, CText, CButton, CInput, CStack } from '@chakra-ui/vue';
import { topbarService } from './app/topbar.ts';

export default {
  name: 'App',
  components: {
    CFlex,
    CText,
    CButton,
    CInput,
    CStack,
  },
  data() {
    return {
      isOpen: true,
      isCreating: false,
      items: [],
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
    add: function(title, owner) {
      console.log(this);
      this.items = [...this.items, { owner, title }];
      this.isCreating = false;
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
