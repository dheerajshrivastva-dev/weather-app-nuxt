<template>
  <div :class="props?.selected ? 'day-container selected' : 'day-container'">
    <img :src="image">
    <p>{{ props.day }}</p>
    <p>{{ props.temp }}&#xb0;</p>
  </div>
</template>
<script setup lang="ts">

interface DayWidgeProps {
  iconIndex: number;
  day: string;
  temp: string | number;
  selected?: boolean;
}

const props = defineProps<DayWidgeProps>();

const image = ref<string>(`/_nuxt/assets/weather/${props.iconIndex}.png`)

</script>
<style scoped>
.day-container {
  display: flex;
  flex-direction: column;
  background: #0003;
  border-radius: 8px;
  padding: 16px;
  justify-content: center;
  align-items: center;
}

.day-container > p {
  text-align: center;
  width: 50px;
}

.selected {
  background: #6b9cfe;
}
</style>