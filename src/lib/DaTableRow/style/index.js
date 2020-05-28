import styled from 'styled-components';
import { gridTemplate } from './constants';
import { cellsAreas, toggableStyle, activeStyle, hoverStyle } from './base';

const DaTableRowBase = styled.div`
    background-color: ${props => props.theme.wab.white10};
    transition: all ${props => props.theme.transition.sm};
    ${props => (props.isActive ? activeStyle : null)};
    ${hoverStyle};

    @media (${props => props.theme.query.max.lg}) {
        margin: ${props => props.theme.space.xs};
        padding: ${props => props.theme.space.xs};
        border-radius: ${props => props.theme.radius.sm};
        display: grid;
        grid-template-areas: ${props =>
            gridTemplate(
                props.mainCellCount,
                props.notMainCellCount,
                props.hasCheckbox,
            )};
        grid-template-columns: ${props =>
            props.hasCheckbox
                ? 'repeat(' +
                  parseInt(props.mainCellCount - 1) +
                  ', auto) min-content'
                : 'repeat(' + props.mainCellCount + ', auto)'};

        ${cellsAreas};
        ${toggableStyle};
    }

    @media (${props => props.theme.query.min.lg}) {
        display: table-row;
    }
`;

export { DaTableRowBase };
