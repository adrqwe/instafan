import { deprecated } from "typesafe-actions";
import { GET_URL } from "../constants/constants";

const { createStandardAction } = deprecated;

export const getUrl = createStandardAction(GET_URL)<string>();
