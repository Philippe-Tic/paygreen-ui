import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import { colorPalletOptions } from '../../shared/constants';
import Link from '../Link/Link';
import MenuItem from '../MenuItem/MenuItem';
import Menu from '../Menu/Menu';
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import MenuGroup from './MenuGroup';

it('renders without crashing', () => {
    const component = TestRenderer.create(
        <MenuGroup theme={ThemeDefault}>
            <div className="main-nav">
                <MenuHamburger theme={ThemeDefault} />
            </div>

            <MenuPrimary theme={ThemeDefault}>
                <Menu theme={ThemeDefault}>
                    <a href="#">
                        <MenuItem isMain={true} theme={ThemeDefault}>
                            <Link
                                colorPallet={colorPalletOptions.wab}
                                hasUppercase={true}
                                theme={ThemeDefault}
                            >
                                About us
                            </Link>
                        </MenuItem>
                    </a>
                </Menu>
            </MenuPrimary>
        </MenuGroup>,
    );
    expect(component.toJSON()).toMatchSnapshot();
});
