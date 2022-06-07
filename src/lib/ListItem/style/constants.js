import { math } from 'polished';
// bulletFont Refactored in 16px base
const bulletFont = {
    xxs: '0.625rem',
    xs: '0.6875rem',
    sm: '0.75rem',
    md: '0.875rem',
    lg: '1rem',
    xl: '1.25rem',
};

const marginBase = props =>
    math(props.theme.icon.size[props.bulletSize] + '*0.75');

export { bulletFont, marginBase };
