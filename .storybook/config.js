import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import { configureViewport } from '@storybook/addon-viewport';

setOptions({
  name: "React UI",
  addonPanelInRight: true,
  hierarchyRootSeparator: /\|/,
});

configure(() => require('../src/stories'), module);
