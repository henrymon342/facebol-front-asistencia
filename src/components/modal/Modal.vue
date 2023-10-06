<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <slot></slot>
      <button @click="closeModal">Cerrar</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style scoped>
/* Estilos para el modal y su contenido */
.modal {
  /* Estilos para hacer que el modal sea visible u oculto */
}
.modal-content {
  /* Estilos para el contenido del modal */
}
</style>
