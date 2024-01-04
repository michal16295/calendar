export interface OptionType {
  value: string | boolean;
  label: string;
}

export type ViewOption = "week" | "month" | "year" | "day";

export interface DateRange {
  start: Date;
  end: Date;
}

export interface Event {
  start: Date;
  end: Date;
  isReccuring: boolean;
  title: string;
  id: string;
}
