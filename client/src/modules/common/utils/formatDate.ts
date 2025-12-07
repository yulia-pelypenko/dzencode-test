export type DateFormat =
  | "short"
  | "medium"
  | "iso-date"
  | "time"

const dateFormatters: Record<DateFormat, (date: Date) => string>  = {
  short: (date: Date) =>
    date
      .toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      })
      .toUpperCase(),

  medium: (date) =>
    date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),

  "iso-date": (date) => date.toISOString().split("T")[0],

  time: (date) =>
    date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    })
};

export const formatDate = (date : Date = new Date(), format: DateFormat = "short"): string => {
  return dateFormatters[format](date);
};
