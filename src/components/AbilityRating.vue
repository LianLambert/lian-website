<template>
  <div class="ability-rating">
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

<style scoped>
.ability-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 4px;
  margin: 2px;
}

.ability-rating:hover {
  background-color: #eeeeee;
}
</style>
