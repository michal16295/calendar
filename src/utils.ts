import {
  startOfWeek,
  endOfWeek,
  addWeeks,
  subWeeks,
  startOfMonth,
  endOfMonth,
  addMonths,
  subMonths,
  addYears,
  subYears,
  addDays,
  subDays,
  startOfDay,
  endOfDay,
  startOfYear,
  endOfYear,
} from "date-fns";

export const viewingOptions = [
  {
    label: "Month",
    value: "month",
  },
  {
    label: "Week",
    value: "week",
  },
  {
    label: "Year",
    value: "year",
  },
  {
    label: "Day",
    value: "day",
  },
];

export const getNextWeekRange = (currentDate: Date) => {
  const start = startOfWeek(addWeeks(currentDate, 1));
  const end = endOfWeek(addWeeks(currentDate, 1));

  return { start, end };
};

export const getPrevWeekRange = (currentDate: Date) => {
  const start = startOfWeek(subWeeks(currentDate, 1));
  const end = endOfWeek(subWeeks(currentDate, 1));

  return { start, end };
};

export const getNextMonthRange = (currentDate: Date) => {
  const start = startOfMonth(addMonths(currentDate, 1));
  const end = endOfMonth(addMonths(currentDate, 1));

  return { start, end };
};

export const getPrevMonthRange = (currentDate: Date) => {
  const start = startOfMonth(subMonths(currentDate, 1));
  const end = endOfMonth(subMonths(currentDate, 1));

  return { start, end };
};

export const getNextYearRange = (currentDate: Date) => {
  const start = startOfYear(addYears(currentDate, 1));
  const end = endOfYear(addYears(currentDate, 1));

  return { start, end };
};

export const getPrevYearRange = (currentDate: Date) => {
  const start = startOfYear(subYears(currentDate, 1));
  const end = endOfYear(subYears(currentDate, 1));

  return { start, end };
};

export const getNextDayRange = (currentDate: Date) => {
  const start = startOfDay(addDays(currentDate, 1));
  const end = endOfDay(addDays(currentDate, 1));

  return { start, end };
};

export const getPrevDayRange = (currentDate: Date) => {
  const start = startOfDay(subDays(currentDate, 1));
  const end = endOfDay(subDays(currentDate, 1));

  return { start, end };
};
