<template>
  <div class="experience-entry row w-100">
    <div class="col-12 col-md-4 experience-entry-title">
      <h3>{{ company }}</h3>
      <div>{{ formattedStartDate }} - {{ formattedEndDate }}</div>
      <div>{{ timeAtPosition }}</div>
    </div>
    <div class="col-12 col-md-8 experience-entry-details">
      <h4>{{ position }}</h4>
      <div>{{ description }}</div>
      <div class="experience-entry-location-link">
        <img :src="locationPinIcon" class="experience-entry-icon" alt="location pin icon" />
        &nbsp;
        <span>{{ location }}</span>
        <span v-if="props.link && props.linkText">
          &nbsp;|
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
import linkIcon from "../assets/link.png";
import locationPinIcon from "../assets/location-pin.png";
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
<style scoped>
.experience-entry {
  margin: 15px 0;
}

.experience-entry-icon {
  height: 17px;
  margin-right: 2px;
  width: auto;
}

.experience-entry-title {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: left;
}

.experience-entry-details {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  text-align: left;
}

.experience-entry-location-link {
  display: flex;
  justify-content: start;
  align-items: center;
  text-align: left;
}
</style>
