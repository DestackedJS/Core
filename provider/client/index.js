/**
 * Create the provider value as a client hook.
 *
 * @see    https://reactjs.org/docs/context.html#contextprovider
 * @param  {Object} args Parameters passed to the provider via the args prop.
 * @return {Object} Values and functions that can be accessed on the client via the provider hook.
 */

const client = (args) => {
    return { args };
};

export default client;
