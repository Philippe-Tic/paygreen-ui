import { normalize } from 'styled-normalize';
import { css } from 'styled-components';

/**
 * Reset styles for better components
 */
export const ResetStyle = css`
    ${normalize};

    :root {
        /* Reset basic font size from 16px to 10px, for easier calculation */
        font-size: 62.5%;
    }

    body,
    main,
    header,
    footer,
    section,
    article,
    aside,
    div,
    form,
    figure,
    ::before,
    ::after {
        display: block;
        box-sizing: border-box;
    }

    a {
        cursor: pointer;
        outline: none;
        text-decoration: none;
    }

    button {
        cursor: pointer;
        outline: none;
        background-color: transparent;
        border: none;
        padding: 0;
    }

    input,
    select,
    textarea {
        display: block;
        box-sizing: border-box;
        outline: none;
    }

    select {
        opacity: 1;
    }

    [type="checkbox"],
    [type="radio"] {
        box-shadow: none;
    }
`;
