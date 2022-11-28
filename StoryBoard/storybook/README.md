# Storybook ?
A story is a function that describes how to render the component in question.

A story captures the rendered state of a UI component. Developers write multiple stories per component that describe all the “interesting” states a component can support.

The CLI created example components that demonstrate the types of components you can build with Storybook: Button, Header, and Page.

Each example component has a set of stories that show the states it supports. You can browse the stories in the UI and see the code behind them in files that end with `.stories.js` or `.stories.ts`. The stories are written in Component Story Format (CSF)--an ES6 modules-based standard--for writing component examples.

Let’s start with the Button component. A story is a function that describes how to render the component in question. Here’s how to render Button in the “primary” state and export a story called Primary.

```
// Button.stories.js|jsx

import React from 'react';

import { Button } from './Button';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

export const Primary = () => <Button primary>Button</Button>; 
```

![button](https://storybook.js.org/d1406df7f9ce817ae0e5b3eb5f1bf1f3/example-button-noargs.png)
