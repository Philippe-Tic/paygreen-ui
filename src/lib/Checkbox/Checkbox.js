import React from 'react';
import PropTypes from 'prop-types';
import { buttonSizeOptions, buttonSizeDefault } from '../../shared/constants';
import { CheckboxBase } from './style';
import { CheckBoldIcon } from '../Icon/Icon';

const Checkbox = props => {
    const { fieldSize, label, id, ...rest } = props;

    return (
        <CheckboxBase
            theme={props.theme} // not necessary, only needed for tests
            fieldSize={fieldSize}
            isDisabled={props.disabled}
        >
            <input {...rest} id={id} type="checkbox" />

            <label htmlFor={id}>
                <CheckBoldIcon
                    theme={props.theme} // not necessary, only needed for tests
                />

                {label}
            </label>
        </CheckboxBase>
    );
};

Checkbox.propTypes = {
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};

Checkbox.defaultProps = {
    fieldSize: buttonSizeDefault,
    disabled: false,
};

export default Checkbox;