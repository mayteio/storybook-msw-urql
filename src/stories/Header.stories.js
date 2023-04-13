import { Header } from "./Header";
import { graphql } from "msw";

export default {
  title: "Example/Header",
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
    msw: {
      handlers: [
        graphql.query("HelloWorldQuery", (req, res, ctx) =>
          res(ctx.data({ hello: "world" }))
        ),
      ],
    },
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: "Jane Doe",
    },
  },
};

export const LoggedOut = {};
