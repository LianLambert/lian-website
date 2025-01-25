<template>
  <div class="experience-entry row g-0">
    <div class="col-12 col-md-4 left-align-text mb-4" style="padding: 0">
      <a :href="props.link" target="_blank"><h3 class="section-title">{{ company }}</h3></a>
      <div style="margin-bottom: 3px">{{ formattedStartDate }} - {{ formattedEndDate }}</div>
      <div v-if="props.showTimeAtPosition"><b>{{ timeAtPosition }}</b></div>
    </div>
    <div class="col-12 col-md-8 left-align-text" style="padding: 0">
      <h4 class="section-title">{{ position }}</h4>
      <div v-html="description" class="my-2"></div>
      <div class="left-align-text">
        <b>
          <img :src="locationPinIcon" class="experience-entry-icon" alt="location pin icon" />
          &nbsp;
          <span>{{ location }}</span>
          <span v-if="props.link && props.linkText">
            &nbsp;|&nbsp;
            <a :href="props.link" target="_blank">
              <img :src="linkIcon" class="experience-entry-icon" alt="link icon" />
              {{ props.linkText }}
            </a>
          </span>
        </b>
      </div>
    </div>
  </div>
</template>
<script setup>
import linkIcon from "../images/link_white.svg";
import locationPinIcon from "../images/location-pin_white.svg";
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
  showTimeAtPosition: {
    required: false,
    type: Boolean,
    default: true,
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

  let result = "";
  if (years > 0) {
    result += `${years} year${years > 1 ? "s" : ""}`;
  }
  if (years > 0 && months > 0) {
    result += " ";
  }
  if (months > 0) {
    result += `${months} month${months > 1 ? "s" : ""}`;
  }

  return result.trim();
});
</script>
<style scoped lang="scss">
.experience-entry {
  margin: 30px 0;
  padding: 20px;
  border-radius: 10px;
  background-color: var(--dark-purple);
  color: var(--light-purple);

  &:hover {
    filter: brightness(120%);
    transform: translateY(-7px) rotate(-1deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  }
}

.experience-entry-icon {
  height: 17px;
  margin-right: 2px;
  width: auto;
}

.section-title {
  color: var(--lightest-purple);
  margin-bottom: 7px;
}

.left-align-text {
  text-align: left;
}

b {
  font-size: 15px;
  font-weight: 700;
}
</style>
