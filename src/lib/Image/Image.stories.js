import React from 'react';
import Image from './Image';
import photoFile from './sample/sample.png';
import drawFile from './sample/sample.svg';
import {
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault,
    imageTypeOptions,
    imageSizeOptions,
    radiusOptions,
    shadowStyleOptions
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios, select } from '@storybook/addon-knobs';

storiesOf('Image', module)
    .addDecorator(withKnobs)
    .add('Cover image', () => (
        <Image
            imageType={imageTypeOptions.cover}
            colorChange={boolean('Modify color', true)}
            colorTheme={select('Color theme', colorThemeOptions, colorThemeDefault)}
            bottomStyle={radios('Bottom style', maskOptions, maskDefault)}
            blockWidth={select('Image width', imageSizeOptions, imageSizeOptions.xl)}
            blockHeight={select('Image height', imageSizeOptions, imageSizeOptions.xs)}
            radiusSize={radios('Border radius', radiusOptions, radiusOptions.none)}
            shadow={select('Shadow style', shadowStyleOptions, shadowStyleOptions.none)}
        >
            <img src={photoFile} alt="picture" />
        </Image>
    ), {
        notes: 'Component made for taking photographs inside a responsive block, without change proportions, thanks to imageType prop passed as "cover".',
    })
    .add('Normal image', () => (
        <Image
            blockWidth={select('Image width', imageSizeOptions, imageSizeOptions.xl)}
            blockHeight={select('Image height', imageSizeOptions, imageSizeOptions.xs)}
        >
            <img src={drawFile} alt="drawing" />
        </Image>
    ), {
        notes: 'Default Image component, optimized for SVG drawing and photos.',
    });