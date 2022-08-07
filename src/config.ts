import { DEFAULT_CHUNKSIZE } from './consts';

/**
 * This is the main config file. Anything that can be configured externally has to be exported here.
 * dotEvn is used to read environment variables. The REACT_APP prefix is required by react.
 */

const {
    REACT_APP_REACT_SERVER,
    REACT_APP_GOOGLE_CLIENT,
    REACT_APP_CHUNKSIZE,
    NODE_ENV,
} = process.env;

export const REACT_SERVER = REACT_APP_REACT_SERVER;
export const GOOGLE_CLIENT = REACT_APP_GOOGLE_CLIENT;
export const CHUNK_SIZE = Number(REACT_APP_CHUNKSIZE) || DEFAULT_CHUNKSIZE;

export { NODE_ENV };
