import { configure } from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';

function loadStories() {
    const context = require.context('../src/stories', true, /story\.jsc$/);
    context.keys().forEach((srcFile) => {
        interopRequireDefault(context(srcFile));
    });
}

configure(loadStories, module);