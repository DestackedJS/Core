---
description: >-
  Build advanced components and modules that share variables and functions
  through hooks by using a structured version of React Context Providers.
---

# Providers

## Creating a New Provider

When creating a new React [Context Provider](https://reactjs.org/docs/context.html#contextprovider), you can use the snippet below to simplify your work. You need a provider, and a client function \(stored under a sub-folder called client\).

{% hint style="info" %}
To keep things easy, integrate the code below and run a search and replace for the word "Example" with whatever your provider describes.
{% endhint %}

### Example

{% tabs %}
{% tab title="Provider" %}
{% code title="components/Example/provider/index.js" %}
```javascript
import compose from 'compose-function';

import { useContext, createContext } from 'react';

import useClient from './client';

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
        {children}
    </ExampleContext.Provider>
);

/**
 * Create the higher order provider wrapper.
 *
 * @see https://reactjs.org/docs/higher-order-components.html
 */

const withExample =
    (Component) =>
    ({ args, ...props }) =>
        (
            <ExampleProvider args={args}>
                <Component {...props} />
            </ExampleProvider>
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

export { ExampleProvider, withExample, useExample };
```
{% endcode %}
{% endtab %}

{% tab title="Client" %}
{% code title="components/Example/provider/client/index.js" %}
```javascript
/**
 * Create the provider value as a client hook.
 *
 * @see    https://reactjs.org/docs/context.html#contextprovider
 * @param  {Object} args Parameters passed to the provider via the args prop.
 * @return {Object} Values and functions that can be accessed on the client via the provider hook.
 */

const useClient = (args) => {
    return { args };
};

export default useClient;
```
{% endcode %}
{% endtab %}
{% endtabs %}

### Structuring Your Client

When building your provider client function, you can use [React hooks](https://reactjs.org/docs/hooks-intro.html), create functions, and more. Store any functions that do not depend on hooks in a functions subfolder as default exports, and import them to your client script.

## Using the Provider & Hook

To access values and functions returned by your client via your provider, you need to import the hook \(declared on line 44 in the example above\) in whatever component you need to access its values from.

First, make sure the component is wrapped inside the `<ExampleProvider />` component, or the `withExample` function.

{% hint style="info" %}
You can pass props to your client through your ExampleProvider via the `args` prop \(as declared on line 18 or 33\).
{% endhint %}

Then, in your component body, call the hook and only extract the values or functions you need [by destructuring the object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring) returned by your hook. You will see the structure below used across all Destacked modules and apps.

Every component called inside your Example component will also have access to the useExample hook and all values / functions declared in your provider client.

### Example

{% code title="components/Example/index.js" %}
```javascript
import { withExample, useExample } from './provider';

const Example = () => {
    const { example } = useExample();

    return <div>{example}</div>;
};

export default compose(withExample)(Example);
```
{% endcode %}

