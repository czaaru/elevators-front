const config = {
  BACKEND_URL: "https://czaru-elevators-api.herokuapp.com",
};

export const getConfigProperty = (property: keyof typeof config) =>
  config[property];
