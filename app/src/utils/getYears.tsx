import { LaunchOption } from "../models/LaunchModel";

export const getYears = (json: LaunchOption[]) => {
  const yearsList: number[] = [];
  [...json].forEach((item) => {
    const year = Number(new Date(item.launch_date_utc).getFullYear());
    if (!yearsList.includes(year)) {
      yearsList.push(year);
    }
  });
  return yearsList;
};
