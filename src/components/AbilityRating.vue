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

<style scoped lang="scss">
.ability-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 7px;
  margin: 2px;
  border-radius: 3px;
  color: var(--medium-purple);
  background-color: var(--dark-purple);


  &:hover {
    filter: brightness(120%);
    font-weight: 700;
  }
}
</style>
