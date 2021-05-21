---
description: >-
  Build advanced components and modules that share variables and functions
  through hooks by using a structured version of React Context Providers.
---

# Providers

### Creating a New Provider

When creating a new React [Context Provider](https://reactjs.org/docs/context.html#contextprovider), you can use the snippet below to simplify your work. You need a provider, and a client function \(stored under a sub-folder called client\).

{% hint style="info" %}
To keep things easy, integrate the code below and run a search and replace for the word "Example" with whatever your provider describes.
{% endhint %}

#### Example

{% tabs %}
{% tab title="Provider" %}
{% code title="provider/index.js" %}
```javascript
import { useContext, createContext } from 'react';

/**
 * Create the context object.
 *
 * @see https://reactjs.org/docs/context.html#reactcreatecontext
 */

const ExampleContext = createContext();

/**
 * Create context the provider.
 *
 * @see https://reactjs.org/docs/context.html#contextprovider
 */

const ExampleProvider = ({ args, children }) => (
    <ExampleContext.Provider value={client(args)}>
        <ReferrerProvider>
            <CommissionsProvider>{children}</CommissionsProvider>
        </ReferrerProvider>
    </ExampleContext.Provider>
);

/**
 * Create the higher order provider wrapper.
 *
 * @see https://reactjs.org/docs/higher-order-components.html
 */

const withExample =
    (Component) =>
    ({ provider, ...props }) =>
        (
            <DestackedAffiliates args={provider}>
                <Component {...props} />
            </DestackedAffiliates>
        );

/**
 * Create the custom provider hook.
 *
 * @see https://reactjs.org/docs/hooks-custom.html#using-a-custom-hook
 */

const useExample = () => {
    const context = useContext(ExampleContext);

    if (!context) {
        throw new Error(
            `You must call useExample() inside of a <ExampleProvider />, or a component wrapped in withExample().`
        );
    }

    return context;
};

/**
 * Export the components.
 */

export {
    ExampleProvider
    withExample,
    useExample,
};

```
{% endcode %}
{% endtab %}

{% tab title="Client" %}
{% code title="provider/client/index.js" %}
```javascript
/**
 * Create the provider value as a client function.
 *
 * @see    https://reactjs.org/docs/context.html#contextprovider
 * @param  {Object} args Parameters passed to the provider via the args prop.
 * @return {Object} Values and functions that can be accessed on the client via the provider hook.
 */

const client = (args) => {
    return { args };
};

export default client;

```
{% endcode %}
{% endtab %}
{% endtabs %}

