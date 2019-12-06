import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    iconSizeOptions,
    spaceOptions,
    colorPalletOptions
} from '../../shared/constants';
import { CheckBoldIcon } from '../Icon/Icon';
import { AutonomousInputBase } from './style';

class AutonomousInput extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            value: props.value !== undefined ? props.value : '',
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        const {
            status,
            submittedLabel,
            children,
            ...rest
        } = this.props;

        const submittedText = <span>
            <CheckBoldIcon
                theme={this.props.theme} // not necessary, only needed for tests
                iconSize={iconSizeOptions.xs}
                marginRight={spaceOptions.sm}
                colorPallet={colorPalletOptions.status}
                colorStatus={status}
            />
            {submittedLabel}
        </span>;

        return <AutonomousInputBase
            theme={this.props.theme} // not necessary, only needed for tests
            status={status}
        >
            <div>
                <input
                    {...rest}
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                {children}
            </div>

            {status === formStatusOptions.success && submittedLabel ? submittedText : null}
        </AutonomousInputBase>;
    }
}

AutonomousInput.propTypes = {
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    submittedLabel: PropTypes.string
};

AutonomousInput.defaultProps = {
    status: formStatusDefault,
    submittedLabel: null
};

export default AutonomousInput;