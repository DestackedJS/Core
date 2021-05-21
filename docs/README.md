# Destacked Core

Destacked Core is a foundation module that connects all other Destacked modules.

It offers a provider that conditionally wraps the app in all other necessary providers.

### Requirements

* Node Package Manager \(NPM\)
* Destacked Core is designed to work with React [Next.js apps](https://nextjs.org/), so first you need an app to install the Core to.

### Getting Started

1. Install Destacked Core to your app by running `npm install @destacked/core --save`
2. Open your `_app.js` file and add the \` provider. See example below.
3. Configure Destacked by passing module properties if needed. Every Destacked module comes with additional options, all available in the module docs. [Visit our whitepaper](https://www.notion.so/destacked/Whitepaper-4e124d56101c4cfb89c379e9a6b7d6c3) for a full list of modules and guides.

### Example

```text
import Destacked from '@destacked/core';

const App = ({ Component, pageProps }) => {
    const config = {
        core: {
            domain: 'destacked.com',
        },
    };

    return (
        <Destacked {...config}>
            <Component {...pageProps} /> */}
        </Destacked>
    );
}

export default App;
```

### Useful Links

* [Core Documentation](https://destacked.gitbook.io/core/)
* [Whitepaper](https://www.notion.so/destacked/Whitepaper-4e124d56101c4cfb89c379e9a6b7d6c3)
* [Discord Community](https://discord.gg/B3ENAdKWvN)
* [Twitter](https://twitter.com/destacked/)

### Contributing

If you want to get involved and contribute to Destacked, please review the [Contributing](https://github.com/Destacked/Core/CONTRIBUTING.md) guidelines and [Code of Conduct](https://github.com/Destacked/Core/CODE_OF_CONDUCT.md).

