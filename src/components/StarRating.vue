<template>
  <div class="star-rating centered">
    <span v-for="star in stars" :key="star" class="star" :style="{ color: star <= rating ? filledColor : emptyColor }">★</span>
  </div>
</template>
<script setup>
import { computed, defineProps } from "vue";

defineProps({
  rating: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 5,
  },
  filledColor: {
    type: String,
    default: "#FFD700",
  },
  emptyColor: {
    type: String,
    default: "#CCCCCC",
  },
});

const stars = computed(() => Array.from({ length: 5 }, (_, i) => i + 1));
</script>

<style scoped lang="scss">
.star {
  font-size: 20px;
}
</style>
