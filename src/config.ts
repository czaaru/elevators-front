const config = {
  BACKEND_URL: "https://czaru-elevator-api.herokuapp.com",
};

export const getConfigProperty = (property: keyof typeof config) =>
  config[property];
