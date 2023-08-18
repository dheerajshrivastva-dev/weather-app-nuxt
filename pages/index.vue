<template>
  <div class="flex bg-slate-600">
    <div class=" bg-slate-700 weather-data text-white flex flex-row justify-end pr-8" >
      <div class="weather-data-container">
        <h1 class="text-5xl py-2">{{currentTime}}</h1>
        <p class="text-xl py-1">{{ formattedDate }}</p>
        <div class="py-5">
          <span></span><span class="text-3xl">{{getGreeting()}}</span>
        </div>
        <p class="text-xl py-5">Hourly Forecast</p>
        <div class="flex gap-2 overflow-x-auto snap-start" >
          <DayWidge v-for="d in hourlyData" :key="d?.date" :day="formatTimeWithAMPM(d?.date)" :iconIndex="d?.icon" :temp="d?.temperature" :selected="formatTimeWithAMPM(d?.date) === 'Now'"/>
        </div>
        <p class="text-xl py-5">Weekly Forecast</p>
        <div class="flex gap-2 overflow-x-auto snap-start" >
          <DayWidge v-for="d in weeklyData" :key="d?.day" :day="getDayOfWeek(d?.day)" :iconIndex="d?.icon" :temp="d?.all_day?.temperature" :selected="d?.day === selected?.day" @click="() => setSelected(d)"/>
        </div>
      </div>
    </div>
    <div class=" bg-slate-800 weather-search text-white flex flex-row ">
      <div class="weather-search-container flex flex-col items-center mt-7">
        <div class="input-container">
          <div class="flex items-center justify-between gap-3">
            <input
              v-model="searchString"
              type="text"
              class="flex-shrink text-white border rounded px-4 py-1 focus:outline-none focus:ring focus:border-blue-300 bg-slate-800"
              placeholder="Enter your search"
              @input="handleInputChange"
            />
            <button
              @click="search"
              class="flex justify-center items-center border-2 button"
            >
              Q
            </button>
          </div>
          <div v-if="showSuggestions" class="absolute overflow-auto search-sug">
            <ul>
              <li
                v-for="(suggestion, index) in searchData"
                :key="index"
                @click="selectSuggestion(suggestion)"
                class="px-4 py-2 cursor-pointer hover:bg-gray-600"
              >
                {{ [suggestion?.name, suggestion?.adm_area1, suggestion?.country].join(',') }}
              </li>
            </ul>
          </div>
        </div>
        <div class="card mt-6 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">
          <p class="font-semibold text-lg mb-2 p-4">{{ selectedPlace }}</p>
          <div class="flex justify-center items-center">
            <img
              class="object-cover object-center max-h-28"
              :src="`./images/${getImageIndex(currentData?.cloud_cover)}.png`"
              alt="Card image"
            />
          </div>
          <div class="px-4 py-6">
            <p class="text-center">{{ todayString }}</p>
            <p class="py-6 text-center text-5xl font-bold">{{ currentData?.temperature }}&#xb0;</p>
            <p class="text-center pb-4">{{ currentData?.summary }}</p>
            <div class="flex flex-row justify-center gap-1 align-middle"><span class="w-50 text-right">Wind</span> <span>|</span> <span class="w-50">{{ currentData?.wind?.speed }} m/s</span></div>
            <div class="flex flex-row justify-center gap-1"><span class="w-50 text-right">Cloud</span> <span>|</span> <span class="w-50">{{ currentData?.cloud_cover }}%</span></div>
          </div>
        </div>
        <div class="card-b mt-10 shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition">
          <div class="px-4 py-6">
            <div class="flex flex-row justify-center gap-1 align-middle">{{ selected?.summary }}</div>
            <div class="flex flex-row justify-center gap-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import data from 'assets/Json/weather.json'; // Corrected JSON import
import { getDayOfWeek, formatTimeWithAMPM, getFormattedTime, getFormattedDate, formatDate, getGreeting, getImageIndex } from '../utils/DateHelper'
const runTimeConfig = useRuntimeConfig();
const currentTime = ref(getFormattedTime());
const formattedDate = ref(getFormattedDate());
const todayString = ref(formatDate())
const selected = ref<any>(data.daily.data[0]); // selected day
const weatherData = ref<any>(data);

const setSelected = (day: any) => {
  selected.value = day; // day should be 0 - 6
}

const weeklyData: any = computed( () => weatherData?.value?.daily?.data );
const hourlyData: any = computed( () => weatherData?.value?.hourly?.data );
const currentData: any = computed( () => weatherData?.value?.current );

let intervalId: any;

onMounted(() => {
  intervalId = setInterval(() => {
    currentTime.value = getFormattedTime();
  }, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});

const searchData = ref<any>(null) // input search data
const showSuggestions = computed(() => searchString.value !== '' && searchData?.value?.length > 0);
const selectedPlace = ref<string>('Patna')

const placeId = ref<any>(null); // place id extraction for api call

const handleInputChange = () => {
  if (!placeId.value) {
    searchData.value = []; // Clear suggestions if no selection
  }
  placeId.value = null;
};

const selectSuggestion = async (suggestion: any) => {
  searchString.value = [suggestion?.name, suggestion?.adm_area1, suggestion?.country]?.join(', ');
  searchData.value = [];
  placeId.value = suggestion?.place_id
  selectedPlace.value = suggestion?.name
  await getWeatherDataApi(suggestion?.place_id)
}

const searchString = ref<string>('Patna');

const search = async () => {
  if (placeId.value) {
    // not call anything
    return;
  }
  await searchPlaceApi(searchString.value);
}

const searchPlaceApi = async (place: string) => {
  const apiKey = runTimeConfig.public.weatherApiSecret;

  const data: any = await $fetch('https://www.meteosource.com/api/v1/free/find_places_prefix', {
    headers: {
      "accept": "application/json",
    },
    params: {
      text: place,
      key: apiKey
    }
  });
  console.log('', data)
  searchData.value = data;
}

const getWeatherDataApi = async (placeIdName: string) => {
  const apiKey = runTimeConfig.public.weatherApiSecret;

  const data: any = await $fetch('https://www.meteosource.com/api/v1/free/point', {
    headers: {
      "accept": "application/json",
    },
    params: {
      place_id: placeIdName,
      sections: 'all',
      units: 'metric',
      key: apiKey
    }
  });
  console.log('', data)
  weatherData.value = data;
}

</script>
<style scoped>
.weather-data {
   height: 100vh;
   width: 70%;
}
.weather-search {
  height: 100vh;
  justify-content: center;
  width: 30%;
}
.flex, .container {
  
}
.weather-data-container {
  padding: 24px;
  max-width: 90%;
}

.weather-search-container {
  padding: 24px;
}

.weather-search-container  input {
  width: 80%;
}

.weather-search-container button {
  width: 35px;
  height: 35px;
  border-radius: 8px;
}

.card {
  width: 300px;
  background: #92b5fe;
}

.card-b {
  width: 360px;
  background: #fd78a8;
}
.card:hover {
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.input-container {

}
.w-50 {
  width: 45%;
}

.search-sug {
  max-height: 300px;
  background-color: rgba(11, 26, 45, 0.9);
  border-radius: 4px;
}
</style>