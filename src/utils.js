export const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function generateMonthYearString(timestamp) {
  const dateObject = new Date(timestamp);
  const month = MONTHS[dateObject.getMonth()];
  const year = dateObject.getFullYear();
  return month + "-" + year;
}
