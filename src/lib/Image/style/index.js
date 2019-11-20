import styled from 'styled-components';
import { transparentize } from 'polished';
import {
    changeColor,
    bottomStyle
} from './base';

const ImageBase = styled.figure`
    ${props => props.colorChange ? changeColor : null};
    ${props => bottomStyle[props.bottomStyle]};
    margin: 0;
    max-width: 100%;
    max-height: 100%;
    height: ${props => props.theme.imageSize[props.blockHeight]};
    width: ${props => props.theme.imageSize[props.blockWidth]};
    border-radius: ${props => props.theme.radius[props.radiusSize]};
    box-shadow: ${props => props.theme.shadow.size[props.shadow] + ' ' + transparentize(
        props.theme.shadow.opacity[props.shadow],
        props.colorChange ? props.theme.color[props.colorTheme]['main'] : props.theme.wab.black00
    )};

    img {
        border-radius: ${props => props.theme.radius[props.radiusSize]};
        display: block;
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
`;

export { ImageBase };