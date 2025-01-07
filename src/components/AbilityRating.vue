<template>
  <div class="d-flex justify-content-between align-items-center w-100">
    <span>{{ ability }}</span>
    <StarRating :rating="rating" />
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import StarRating from "./StarRating.vue";

defineProps({
  ability: {
    required: true,
    type: String,
  },
  rating: {
    type: Number,
    required: true,
    validator: (value) => value >= 0 && value <= 5,
  },
});
</script>

<style scoped></style>
