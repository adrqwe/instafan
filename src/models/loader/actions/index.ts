import { deprecated } from "typesafe-actions";

import { LOADER_STATE } from "../constants/constants";

const { createStandardAction } = deprecated;

export const setLoaderState = createStandardAction(LOADER_STATE)<boolean>();
