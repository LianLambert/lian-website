<template>
  <div class="experience-entry row g-0">
    <div class="col-12 col-md-4 experience-entry-title mb-4" style="padding: 0">
      <h3 style="color: var(--lightest-purple)">{{ company }}</h3>
      <div>{{ formattedStartDate }} - {{ formattedEndDate }}</div>
      <div>{{ timeAtPosition }}</div>
    </div>
    <div class="col-12 col-md-8 experience-entry-details" style="padding: 0">
      <h4  style="color: var(--lightest-purple)">{{ position }}</h4>
      <p>{{ description }}</p>
      <div class="experience-entry-location-link">
        <img :src="locationPinIcon" class="experience-entry-icon" alt="location pin icon" />
        &nbsp;
        <span>{{ location }}</span>
        <span v-if="props.link && props.linkText">
          &nbsp;|&nbsp;
          <a :href="props.link">
            <img :src="linkIcon" class="experience-entry-icon" alt="link icon" />
            {{ props.linkText }}
          </a>
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import linkIcon from "../assets/link_light_purple.png";
import locationPinIcon from "../assets/pin_light_purple.png";
import { defineProps, computed } from "vue";
import { format } from "date-fns";

const props = defineProps({
  company: {
    required: true,
    type: String,
  },
  startDate: {
    required: true,
    type: Date,
  },
  endDate: {
    type: Date,
  },
  position: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  linkText: {
    required: false,
    type: String,
  },
  link: {
    required: false,
    type: String,
  },
});

const formattedStartDate = computed(() => format(new Date(props.startDate), "MMM yyyy"));
const formattedEndDate = computed(() => (props.endDate ? format(new Date(props.endDate), "MMM yyyy") : "Present"));

const timeAtPosition = computed(() => {
  const start = new Date(props.startDate);
  const end = props.endDate ? new Date(props.endDate) : new Date();

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  let result = "(";
  if (years > 0) {
    result += `${years} year${years > 1 ? "s" : ""}`;
  }
  if (years > 0 && months > 0) {
    result += " ";
  }
  if (months > 0) {
    result += `${months} month${months > 1 ? "s" : ""}`;
  }
  result += ")";

  return result.trim();
});
</script>
<style scoped lang="scss">
.experience-entry {
  margin: 30px 0;
  padding: 20px;
  background-color: var(--dark-purple);
  color: var(--light-purple);
}

.experience-entry:hover {
  filter: brightness(120%);
  transform: translateY(-7px) rotate(-1deg);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  color: var(--medium-purple);
}
.experience-entry-icon {
  height: 17px;
  margin-right: 2px;
  width: auto;
}

.experience-entry-title {
  text-align: left;
}

.experience-entry-details {
  text-align: left;
}

.experience-entry-location-link {
  text-align: left;
  font-size: 15px;
  font-weight: 700;
}
</style>
