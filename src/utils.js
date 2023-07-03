// export const cities = [
//   "Abuja",
//   "Amsterdam",
//   "Aswān",
//   "Athens",
//   "Bangkok",
//   "Barcelona",
//   "Belgrade",
//   "Brno",
//   "Budapest",
//   "Buenos Aires",
//   "Cape Town",
//   "Dakar",
//   "El Alto",
//   "Hanoi",
//   "Harbin",
//   "Kingston",
//   "Kuala Lumpur",
//   "Kuwait",
//   "Kyiv",
//   "Lagos",
//   "Ljubljana",
//   "London",
//   "Madrid",
//   "Melbourne",
//   "Miami",
//   "Minsk",
//   "Moscow",
//   "New Delhi",
//   "New York",
//   "Norilsk",
//   "Paris",
//   "Porto",
//   "Prague",
//   "Reykjavik",
//   "Seoul",
//   "Skopje",
//   "Sofia",
//   "Split",
//   "Sydney",
//   "São Paulo",
//   "Tallinn",
//   "Tenerife",
//   "Tirana",
//   "Toronto",
//   "Vancouver",
//   "Vienna",
//   "Vilnius",
//   "Warsaw",
//   "Winnipeg",
//   "Yakutsk",
// ];

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
