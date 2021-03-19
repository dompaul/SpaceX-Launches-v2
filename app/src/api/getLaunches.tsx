import CONSTANTS from "../constants/Config";

export const getLaunchesAPI = async () => {
  return await fetch(`${CONSTANTS.SPACE_X_API}`)
    .then((res) => res.json())
    .then((json) => {
      return json;
    });
};
