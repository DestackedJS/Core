/**
 * Create the provider value as a useClient hook.
 *
 * @see    https://reactjs.org/docs/context.html#contextprovider
 * @param  {Object} args Parameters passed to the provider via the args prop.
 * @return {Object} Values and functions that can be accessed on the useClient via the provider hook.
 */

const useClient = (args) => {
    return { args };
};

export default useClient;
