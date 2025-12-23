export type TrendPoint = {
  t: string; // time bucket
  value: number;
};

export const OPERATIONAL_TREND_24H: TrendPoint[] = [
  { t: "00", value: 72 },
  { t: "02", value: 70 },
  { t: "04", value: 71 },
  { t: "06", value: 73 },
  { t: "08", value: 75 },
  { t: "10", value: 74 },
  { t: "12", value: 76 },
  { t: "14", value: 78 },
  { t: "16", value: 77 },
  { t: "18", value: 76 },
  { t: "20", value: 74 },
  { t: "22", value: 73 },
];
