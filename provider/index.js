import { useContext, createContext } from 'react';

import client from './client';

/**
 *
 */

const DestackedContext = createContext();

/**
 *
 * @param {*} param0
 * @returns
 */

const DestackedCore = ({ args, children }) => (
    <DestackedContext.Provider value={client({ args })}>
        {children}
    </DestackedContext.Provider>
);

/**
 *
 * @returns
 */

const useDestackedCore = () => {
    return useContext(DestackedContext);
};

/**
 * Compose and export the Destacked core wrappers.
 */

export default DestackedCore;
export { useDestackedCore };
