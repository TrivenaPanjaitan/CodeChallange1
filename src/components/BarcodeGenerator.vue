<template>
  <div>
    <svg ref="barcode"></svg>
  </div>
</template>

<script>
import JsBarcode from 'jsbarcode';

export default {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  mounted() {
    JsBarcode(this.$refs.barcode, this.value, {
      format: 'CODE128',
      displayValue: true,
    });
  },
  watch: {
    value(newValue) {
      JsBarcode(this.$refs.barcode, newValue, {
        format: 'CODE128',
        displayValue: true,
      });
    },
  },
};
</script>

<style scoped>
svg {
  width: 100%;
  height: 100px;
}
</style>
