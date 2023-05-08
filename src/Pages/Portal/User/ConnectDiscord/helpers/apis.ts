import React from "react";
import { dashboardRoutes } from "../../../../../services/urls";
import { privateGateway } from "../../../../../services/apiGateways";
import { ToastId, UseToastOptions } from "@chakra-ui/react";
import { NavigateFunction } from "react-router-dom";

type muid = React.Dispatch<React.SetStateAction<string>>;

export const getInfo = (
  toast: (options?: UseToastOptions | undefined) => ToastId,
  navigate: NavigateFunction,
  setmuid: muid,
) => {
  privateGateway
    .get(dashboardRoutes.getInfo)
    .then((response) => {
      console.log(response);
      setmuid(response.data.response.mu_id);
    })
    .catch((error) => {
      console.log(error);
    });
};
