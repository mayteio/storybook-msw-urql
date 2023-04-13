import { initialize, mswDecorator } from "msw-storybook-addon";
import { Provider } from "urql";
import { graphqlClient } from "../src/stories/graphql-client";

initialize();

/** @type { import('@storybook/react').Preview } */
const preview = {
  decorators: [
    mswDecorator,
    (Story) => (
      <Provider value={graphqlClient}>
        <Story />
      </Provider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
