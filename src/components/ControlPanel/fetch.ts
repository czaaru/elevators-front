import { Dispatch, SetStateAction } from "react";
import { getConfigProperty } from "../../config";
import { Elevator } from "../../types";

const backendUrl = getConfigProperty("BACKEND_URL");

export const createAddElevatorFetch = (
  body = {},
  setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>,
  endpoint = backendUrl
) => async () => {
  const response = await fetch(`${endpoint}/elevators`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  setElevators(await response.json());
};

export const createStepFetch = (
  setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>,
  endpoint = backendUrl
) => async () => {
  const response = await fetch(`${endpoint}/simulation/step`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  setElevators(await response.json());
};

export const createResetFetch = (
  setElevators: Dispatch<SetStateAction<Record<string, Elevator>>>,
  endpoint = backendUrl
) => async () => {
  const response = await fetch(`${endpoint}/simulation/reset`, {
    method: "DELETE",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  setElevators(await response.json());
};
