<!-- src/components/MovieModal.vue -->
<template>
  <div v-if="isVisible" class="modal-overlay">
    <div class="modal-content">
      <button class="close-btn" @click="$emit('close')">Close</button>
      <div class="barcode-container">
        <svg ref="barcodeContainer"></svg>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick, ref, watch } from 'vue';
import JsBarcode from 'jsbarcode';

export default {
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
    barcodeValue: {
      type: String,
      default: '',
    },
  },
  emits: ['close'],
  setup(props) {
    const barcodeContainer = ref(null);

    watch(() => props.barcodeValue, async (newValue) => {
      await nextTick(); // Ensure DOM is updated
      generateBarcode(newValue);
    }, { immediate: true });

    const generateBarcode = (value) => {
      if (barcodeContainer.value && value) {
        JsBarcode(barcodeContainer.value, value, {
          format: 'CODE128',
          displayValue: true,
          width: 2,
          height: 60,
          margin: 10,
        });
      }
    };

    return { barcodeContainer };
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 80%;
  max-width: 500px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  text-align: center;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #f44336;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
}

.close-btn:hover {
  background: #c62828;
}

.barcode-container {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
</style>
