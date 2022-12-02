
# Storybook ?
Storybook is a development environment tool that is used as a playground for UI components. It allows us, to create and test components in isolation(seprately). It runs outside the app, so that project dependencies won't affect the behaviour of components.

#Why storybook?
As we a
## How to install StoryBook?
#### Add Storybook:
1.  ```npm install storybook```
2.  ```npx storybook init```

Storybook will look into your project's dependencies during its install process and provide you with the best configuration available.

```storybook init is not made for empty projects```
Storybook needs to be installed into a project that is already set up with a framework. It will not work on an empty project. 
<!-- There are many ways to bootstrap an app in a given framework, including: -->
<!-- 📦 Create an Angular Workspace -->
📦 Create React App
<!-- 📦 Create a Vue App -->
<!-- 📦 Ember CLI -->
<!-- Or any other tooling available. -->

<!-- The command above will make the following changes to your local environment:
* 📦 Install the required dependencies.
* 🛠 Setup the necessary scripts to run and build Storybook.
* 🛠 Add the default Storybook configuration.
* 📝 Add some boilerplate stories to get you started.
* 📡 Set up telemetry to help us improve Storybook -->
Depending on your framework, first, build your app and then check that everything worked by running:

 ```npm run storybook```
it will automatically open the address in a new browser tab, and you'll be greeted by a welcome screen.
![storybook](https://storybook.js.org/0c574a42143da65f91a53764c711a10e/example-welcome.png)

There are some noteworthy items here:
* A collection of useful links for more in-depth configuration and customization options you have at your disposal.
* A second set of links for you to expand your Storybook knowledge and get involved with the ever-growing Storybook community.
* A few example stories to get you started.
* The CLI created example components that demonstrate the types of components you can build with Storybook: Button, Header, and Page.

# What's a story?
A story is a function that describes how to render the component in question.
A story captures the rendered state of a UI component. Developers write multiple stories per component that describe all the “interesting” states a component can support.
Each example component has a set of stories that show the states it supports. You can browse the stories in the UI and see the code behind them in files that end with ```.stories.js``` or ```.stories.ts```. The stories are written in Component Story Format (CSF)--an ES6 modules-based standard--for writing component examples.

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

The above story definition can be further improved to take advantage of Storybook’s “args” concept. Args describes the arguments to Button in a machine-readable way. It unlocks Storybook’s superpower of altering and composing arguments dynamically.

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

//👇 We create a “template” of how args map to rendering
const Template = (args) => <Button {...args} />;

//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
   primary: true,
   label: 'Button',
};
```
![modified](https://storybook.js.org/ff519d6518900d4be0ce86bbf3655913/example-button-args.png)
Both story examples render the same thing because Storybook feeds the given args property into the story during render. But you get timesaving conveniences with args:

* Buttons callbacks are logged into the Actions tab. Click to try it.
* Buttons arguments are dynamically editable in the Controls tab. Adjust the controls

## Edit a story

Storybook makes it easy to work on one component in one state (AKA a story) at a time. When you edit the Button code or stories, Storybook will instantly re-render in the browser. No need to refresh manually.

Update the label of the Primary story, then see your change in Storybook.

![Link](https://storybook.js.org/db8564b68cb4c974dc1f7b8834cfb4ee/example-button-hot-module-reload-optimized.mp4)
<video src="https://storybook.js.org/db8564b68cb4c974dc1f7b8834cfb4ee/example-button-hot-module-reload-optimized.mp4" controls="controls" style="max-width: 730px;"/>