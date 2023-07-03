export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getDayfromUnix = (unix) => {
  const date = new Date(unix * 1000);
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
};

export const filterForecast = (array) => {
  return array.filter((_, index) => index % 8 === 0);
};
