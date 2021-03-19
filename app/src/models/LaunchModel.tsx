export interface RocketOption {
  rocket_name: string;
}

export interface LaunchOption {
  flight_number: string;
  mission_name: string;
  launch_date_utc: string;
  rocket: RocketOption;
}
