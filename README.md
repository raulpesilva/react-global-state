# react-global-state

Easy way to provide global state to reactJS and React Native applications

## Installation

```sh
npm install @raulpesilva/react-global-state
```
or

```sh
yarn add @raulpesilva/react-global-state
```

## Usage

```js
import * as React from 'react';

import { StyleSheet, View, Text, Button } from 'react-native';
import useGlobalState, { GlobalStateProvider } from '@raulpesilva/react-global-state';

const Foo: React.FC = () => {
  const [value, setValue] = useGlobalState('value', 0);

  return (
    <View style={styles.container}>
      <Button onPress={() => { setValue(value + 1) }} title=" + " />
      <Text>resultado é : {value}</Text>
      <Button onPress={() => { setValue(value > 0 ? value - 1 : 0) }} title=" - " />
    </View>
  );
};
const Bar: React.FC = () => {
  const [value] = useGlobalState('value');

  return (
    <View style={styles.container}>
      <Text>resultado é : {value}</Text>
    </View>
  );
};

export default function App() {
  return (
    <GlobalStateProvider>
      <View style={styles.container}>
        <Foo />
        <Bar />
      </View>
    </GlobalStateProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT
