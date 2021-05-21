import { useContext, createContext } from 'react';

import client from './client';

/**
 * Create the context object.
 *
 * @see https://reactjs.org/docs/context.html#reactcreatecontext
 */

const DestackedCoreContext = createContext();

/**
 * Create context the provider.
 *
 * @see https://reactjs.org/docs/context.html#contextprovider
 */

const DestackedCore = ({ args, children }) => (
    <DestackedCoreContext.Provider value={client(args)}>
        {children}
    </DestackedCoreContext.Provider>
);

/**
 * Create the higher order provider wrapper.
 *
 * @see https://reactjs.org/docs/higher-order-components.html
 */

const withDestackedCore =
    (Component) =>
    ({ core, ...props }) =>
        (
            <DestackedCore args={core}>
                <Component {...props} />
            </DestackedCore>
        );

/**
 * Create the custom provider hook.
 *
 * @see https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook
 */

const useDestackedCore = () => {
    const context = useContext(DestackedCoreContext);

    if (!context) {
        throw new Error(
            `You must call useDestackedCore() inside of a <DestackedCore />, or a component wrapped in withDestackedCore().`
        );
    }

    return context;
};

/**
 * Export the components.
 */

export { withDestackedCore, useDestackedCore };
