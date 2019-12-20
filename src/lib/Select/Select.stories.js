import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select, text } from '@storybook/addon-knobs';
import {
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    blockSpaceOptions
} from '../../shared/constants';
import Select from './Select';

const options = [
    {
        value: '',
        text: 'Choose your option...',
        disabled: true,
    },
    {
        value: 'first',
        text: 'First option',
    },
    {
        value: 'second',
        text: 'Second option',
    },
    {
        value: 'third',
        text: 'Third option',
    }
];

storiesOf('Select', module).addDecorator(withKnobs)
.add('Select', () => (
    <Select
        id="select1"
        label={text('Label', 'Your choice')}
        value=""
        options={options}
        disabled={boolean('Disabled', false)}
        readOnly={boolean('Readonly', false)}
        status={radios('Status', formStatusOptions, formStatusDefault)}
        params={{
            shadow: boolean('With shadow', false),
        }}
        width={radios('Width', inputWidthOptions, inputWidthDefault)}
        marginTop={select('Margin top', blockSpaceOptions, blockSpaceOptions.md)}
        marginBottom={select('Margin bottom', blockSpaceOptions, blockSpaceOptions.md)}
    />
), {
    notes: 'You can change select with with "width" props (could be sm, md or lg).',
});