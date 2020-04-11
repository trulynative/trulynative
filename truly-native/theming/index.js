import React from 'react';
import TNDefaultTheme from './default';
import { useColorScheme } from 'react-native-appearance';

export default TNDefaultTheme;

const TNContext = React.createContext();

const defaultProps = {
  children: null,
  theme: {},
}

export function TNProvider(props = defaultProps) {
  const { theme, children } = props;
  const colorScheme = useColorScheme();
  const overridenTheme = {...TNDefaultTheme, ...theme};
  const context = {
    theme: overridenTheme,
    appearance: colorScheme
  };
  return (
    <TNContext.Provider value={context}>
      {children}
    </TNContext.Provider>
  );
};

export function useTrulyNative(Component, styles) {
  return (props) => {
      const colorScheme = useColorScheme();
      return (
        <TNContext.Consumer>
          {context => (
            <Component
              {...props}
              theme={{ ...TNDefaultTheme, ...context.theme }}
              appearance={colorScheme || context.appearance}
              styles={styles && styles({ ...TNDefaultTheme, ...context.theme }, context.appearance)}
            />
          )}
        </TNContext.Consumer>
      );
  };
}
  