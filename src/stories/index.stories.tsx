import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import PromptPart from '../components/PromptPart';
import Prompt from '../components/Prompt';
import PromptPreview from '../components/PromptPreview';
import ZshrcPreview from '../components/ZshrcPreview';

storiesOf('PromptPart', module)
  .add('basic', () => (
    <PromptPart label="white" fgColor="magenta" bgColor="black" onDelete={action('deleted')} />
  ))
  .add('selected', () => (
    <PromptPart
      label="white"
      fgColor="magenta"
      bgColor="black"
      selected
      onDelete={action('deleted')}
    />
  ))
  .add('basic 8 colors', () => (
    <div>
      <PromptPart label="black" fgColor="white" bgColor="black" onDelete={action('deleted')} />
      <PromptPart label="red" fgColor="white" bgColor="red" onDelete={action('deleted')} />
      <PromptPart label="green" fgColor="white" bgColor="green" onDelete={action('deleted')} />
      <PromptPart label="yellow" fgColor="white" bgColor="yellow" onDelete={action('deleted')} />
      <PromptPart label="blue" fgColor="white" bgColor="blue" onDelete={action('deleted')} />
      <PromptPart label="magenta" fgColor="white" bgColor="red" onDelete={action('deleted')} />
      <PromptPart label="cyan" fgColor="white" bgColor="cyan" onDelete={action('deleted')} />
      <PromptPart label="white" fgColor="black" bgColor="white" onDelete={action('deleted')} />
    </div>
  ))
  .add('xterm 256 colors', () => (
    <div>
      {[...new Array(32)].map((_, i) => (
        <div key={i.toString()}>
          {[...new Array(8)].map((_, j) => (
            <PromptPart
              label={(i * 8 + j).toString().padStart(3, '0')}
              fgColor="white"
              bgColor={i * 8 + j}
              onDelete={action('deleted')}
              key={j.toString()}
            />
          ))}
        </div>
      ))}
    </div>
  ));

// FIXME: Storyshots will never pass (due to ref?)
storiesOf('⚠️Prompt', module)
  .add('basic 8 fgcolors', () => (
    <Prompt
      promptParts={[
        { label: 'black', fgColor: 'white', bgColor: 'black' },
        { label: 'red', fgColor: 'white', bgColor: 'red' },
        { label: 'green', fgColor: 'white', bgColor: 'green' },
        { label: 'yellow', fgColor: 'white', bgColor: 'yellow', selected: true },
        { label: 'blue', fgColor: 'white', bgColor: 'blue' },
      ]}
      onDelete={action('onDelete')}
      onDragEnd={action('onDragEnd')}
    />
  ))
  .add('basic 8 bgcolors', () => (
    <Prompt
      promptParts={[
        { label: 'black', fgColor: 'black', bgColor: 'white' },
        { label: 'red', fgColor: 'red', bgColor: 'white' },
        { label: 'green', fgColor: 'green', bgColor: 'white' },
        { label: 'yellow', fgColor: 'yellow', bgColor: 'white', selected: true },
        { label: 'blue', fgColor: 'blue', bgColor: 'white' },
      ]}
      onDelete={action('onDelete')}
      onDragEnd={action('onDragEnd')}
    />
  ));

storiesOf('Prompt Preview', module)
  .add('PROMPT', () => (
    <PromptPreview
      promptParts={[
        { label: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { label: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { label: 'alice', fgColor: 'white', bgColor: 'blue' },
        { label: '$', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ))
  .add('PROMPT and RPROMPT', () => (
    <PromptPreview
      promptParts={[
        { label: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { label: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { label: 'alice', fgColor: 'white', bgColor: 'blue' },
        { label: '$', fgColor: 'white', bgColor: 'black' },
      ]}
      rpromptParts={[
        { label: 'master!*', fgColor: 'magenta', bgColor: 'black' },
        { label: '[12:15]', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ));

storiesOf('Zshrc Preview', module)
  .add('initial state', () => <ZshrcPreview promptParts={[]} />)
  .add('PROMPT', () => (
    <ZshrcPreview
      promptParts={[
        { shRepr: '(mypyenv)', label: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { shRepr: '%~', label: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { shRepr: '%n', label: 'alice', fgColor: 'white', bgColor: 'blue' },
        { shRepr: '$ ', label: '$ ', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ))
  .add('PROMPT and RPROMPT', () => (
    <ZshrcPreview
      promptParts={[
        { shRepr: '(mypyenv)', label: '(mypyenv)', fgColor: 'white', bgColor: 'black' },
        { shRepr: '%~', label: '~/work', fgColor: 'white', bgColor: 'cyan' },
        { shRepr: '%n', label: 'alice', fgColor: 'white', bgColor: 'blue' },
        { shRepr: '$ ', label: '$ ', fgColor: 'white', bgColor: 'black' },
      ]}
      rpromptParts={[
        {
          // eslint-disable-next-line no-template-curly-in-string
          shRepr: '${vsc_info}',
          label: 'master!*',
          fgColor: 'magenta',
          bgColor: 'black',
          bold: true,
        },
        { shRepr: '$*', label: '[12:15]', fgColor: 'white', bgColor: 'black' },
      ]}
    />
  ));
