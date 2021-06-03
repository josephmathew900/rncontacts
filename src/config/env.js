import {DEV_BACKEND_URL} from '@env';

const devEnvVariables = {
  DEV_BACKEND_URL,
};

const prodEnvVariables = {};

export default __DEV__ ? devEnvVariables : prodEnvVariables;
