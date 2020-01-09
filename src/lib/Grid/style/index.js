import styled from 'styled-components';
import { spaceOptions } from '../../../shared/constants';
import { displayStyle, childrenShift } from './base';

const GridBase = styled.div`
    max-width: 100%;
    padding: ${props => props.theme.space[props.blockPadding]};

    @media (min-width: ${props => props.theme.grid.maxWidth}) {
        max-width: ${props => props.theme.grid.maxWidth};
    }

    @media (${props => props.theme.query.min.md}) {
        padding: 0;
        margin: 0 auto;
    }

    ${props => displayStyle[props.displayType]};

    ${props => props.childrenShiftSize !== spaceOptions.none ?
        childrenShift(
            props.columnNumber,
            props.theme.blockShift[props.childrenShiftSize],
            props.isNegativeShift,
            props.isReverseShift
        )
        : null};
`;

export { GridBase };