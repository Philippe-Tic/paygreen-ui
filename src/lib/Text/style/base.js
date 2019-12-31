import { css } from 'styled-components';
import { transparentize } from 'polished';
import { colorTypeOptions } from '../../../shared/constants';
import { colors } from '../../Link/style/constants';
import { backgroundColor, minimizeFont } from './constants';

const blockBackground = {
    original: css`
        background-color: ${props => backgroundColor[props.colorPallet]};
    `,
    reverse: css`
        background-color: ${props => transparentize(0.85, props.theme.wab.white00)};
    `
};

const textStyle = css`
    color: ${props => props.colorType === colorTypeOptions.reverse ?
        props.theme.wab.white00 :
        colors[props.colorPallet]
    };

    line-height: 1.5;
    text-align: ${props => props.textAlign};
    font-size: ${props => props.theme.font.size[props.textSize]};

    @media (${props => props.theme.query.max.md}) {
        font-size: ${props => props.theme.font.size[minimizeFont[props.textSize]]};
    }
`;

const internalParagraph = css`
    p {
        ${textStyle};
        margin: ${props => props.theme.space[props.marginInternal]} 0;

        &:first-of-type {
            margin-top: 0;
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

export {
    blockBackground,
    textStyle,
    internalParagraph,
};