export function getDayOfWeek(dateString: string): string {
  const daysOfWeek: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const date: Date = new Date(dateString);
  const dayIndex: number = date.getDay(); // Returns a value from 0 (Sunday) to 6 (Saturday)
  
  return daysOfWeek[dayIndex];
}

export function formatTimeWithAMPM(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  const hours = date.getHours();
  
  const now = new Date();
  const currentHours = now.getHours();
  
  if (hours === currentHours) {
    return 'Now';
  }
  
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  
  return `${formattedHours}:${date.getMinutes()} ${period}`;
}

export function getFormattedTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const period = hours >= 12 ? 'PM' : 'AM';
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${period}`;
}

export function getFormattedDate(dateString?: string): string {
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  };
  return new Date(dateString ?? now).toLocaleDateString(undefined, options);
}

export function formatDate(dateString?: string): string {
  const now = new Date();
  const date = new Date(dateString ?? now);
  const today = new Date();

  if (isSameDay(date, today)) {
    return `${Day.Today} ${date.getDate()}, ${getMonthName(date.getMonth())}`;
  } else {
    return `${getWeekdayName(date.getDay())} ${date.getDate()}, ${getMonthName(date.getMonth())}`;
  }
}

function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
}

function getMonthName(monthIndex: number): string {
  return MonthNames[monthIndex];
}

function getWeekdayName(weekdayIndex: number): string {
  return WeekdayNames[weekdayIndex];
}

enum Day {
  Today = 'Today'
}

export const MonthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const WeekdayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const weatherTextValues: string[] = [
  "",
  "Not available",
  "Sunny",
  "Mostly sunny",
  "Partly sunny",
  "Mostly cloudy",
  "Cloudy",
  "Overcast",
  "Overcast with low clouds",
  "Fog",
  "Light rain",
  "Rain",
  "Possible rain",
  "Rain shower",
  "Thunderstorm",
  "Local thunderstorms",
  "Light snow",
  "Snow",
  "Possible snow",
  "Snow shower",
  "Rain and snow",
  "Possible rain and snow",
  "Rain and snow",
  "Freezing rain",
  "Possible freezing rain",
  "Hail",
  "Clear (night)",
  "Mostly clear (night)",
  "Partly clear (night)",
  "Mostly cloudy (night)",
  "Cloudy (night)",
  "Overcast with low clouds (night)",
  "Rain shower (night)",
  "Local thunderstorms (night)",
  "Snow shower (night)",
  "Rain and snow (night)",
  "Possible freezing rain (night)"
];

export const getGreeting = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return 'Good morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good afternoon';
  } else if (currentHour >= 18 && currentHour < 22) {
    return 'Good evening';
  } else {
    return 'Good night';
  }
};

export const getImageIndex = (rainPer: number) => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 18) {
    if (rainPer > 50) {
      return 1
    }
    return 2
  } else {
    if (rainPer > 50) {
      return 3
    }
    return 4
  }
};
