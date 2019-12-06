import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Logo from './Logo';

it('renders without crashing', () => {
    const logo = TestRenderer.create(
        <Logo theme={ThemeDefault}>
            <svg viewBox="0 0 226 54">
                <path d="M16,30H7.8v13.3H0.6V2.1h16.3c9.6,0,15.7,5.4,15.7,13.8C32.5,25.2,25.1,30,16,30z M16.3,8.6H7.8v14.9h8.4
                    c5.5,0,8.9-3,8.9-7.4C25.2,11.2,21.7,8.6,16.3,8.6z"/>
                <path d="M47.7,43.3v-3.8C45.6,42,42.4,44,37.7,44c-5.9,0-11.1-3.4-11.1-9.6v-0.1c0-6.7,5.4-10,12.6-10c3.8,0,6.2,0.5,8.6,1.3v-0.8
                    c0-4.3-2.7-6.7-7.7-6.7c-3.5,0-6.1,0.8-8.9,1.9l-1.9-5.7c3.4-1.5,6.8-2.6,11.9-2.6c9.2,0,13.7,4.8,13.7,13.1v18.4L47.7,43.3
                    L47.7,43.3z M47.9,30.1c-1.8-0.7-4.4-1.2-7.1-1.2c-4.5,0-7.1,1.8-7.1,5V34c0,3,2.7,4.6,6,4.6c4.7,0,8.3-2.7,8.3-6.6L47.9,30.1
                    L47.9,30.1z"/>
                <path d="M71.8,44.2c-2.5,6.4-5.2,8.7-10.2,8.7c-3,0-5.2-0.7-7.4-1.9l2.4-5.3c1.3,0.7,2.7,1.2,4.2,1.2c2,0,3.2-0.9,4.4-3.6l-13-31.1
                    h7.6l8.8,23.1l8.1-23.1h7.4L71.8,44.2z"/>
                <path d="M103.3,25.1H118v11.5c-2,1.6-6.9,4.9-13.3,4.9C94.3,41.5,87,33.8,87,22.6c0-9.2,6.5-18.7,17.4-18.7c5.9,0,9.4,2,12.9,4.9
                    l0.6,0.5l2.3-2.8l-0.6-0.5c-4-3.3-8.1-5.6-15.1-5.6c-13.3,0-21.2,11.3-21.2,22.2c0,13,8.8,22,21.3,22c8.2,0,13.9-4.1,16.6-6.5
                    l0.3-0.2V21.5h-18.2L103.3,25.1L103.3,25.1z"/>
                <path d="M212.4,12.1c-5,0-8.6,2.5-10.7,5.4v-4.7h-3.5V24v5.9v14.1h3.5V26.6c0-6.2,4.6-11.1,10.4-11.1c6.1,0,9.8,4,9.8,10.8v17.9h3.5
                    V25.9C225.4,17.4,220.5,12.1,212.4,12.1z"/>
                <path d="M196.3,23.1c-1.6-5.9-6.1-11-13.7-11c-8.5,0-15,7-15,16.4c0,9.5,6.5,16.4,15.5,16.4c6.5,0,10.5-3.5,12.8-6.4l0.5-0.6
                    l-2.7-2.1l-0.5,0.6c-2.5,3.3-6.2,5.2-10,5.2c-6.5,0-11.2-4.7-11.9-11.5h25.6C196.9,29.9,197.2,26.6,196.3,23.1z M171.3,26.7
                    c0.6-6.6,5.2-11.2,11.2-11.2c6.8,0,10.3,5.6,10.8,11.2H171.3z"/>
                <path d="M140.1,15.3v-3.1l-1.1,0c-5.4,0-9.3,3.3-11.5,6.9v-6.4H124v31.3h3.5V29.2c0-6.5,4.4-13.5,11.5-13.5h1.1V15.3z"/>
                <path d="M166.6,30.5c0,0,0.1-1.1,0.1-1.5c0-9.4-5.4-16.9-14.8-16.9c-3.2,0-6.1,1-8.5,2.7c0,0-0.6,0.5-1.4,1.1
                    c-3.3,3-5.4,7.6-5.4,12.8c0,9.9,7.1,16.6,15.9,16.6c6,0,9.9-2.4,13.1-6l-3-2.6c-2.6,2.7-5.6,4.5-10,4.5c-5.6,0-10.5-3.9-11.2-10.8
                    C141.4,30.5,150.7,39.4,166.6,30.5z M145.4,26c-0.8-0.8-1.6-1.6-2.3-2.3c1.8-2.9,5.1-4.9,8.8-4.9c4,0,7.5,2.3,9.3,5.6l-2.7,1.6
                    c-1.2-2.4-3.7-4.1-6.6-4.1C149.2,22,146.7,23.6,145.4,26z"/>
            </svg>
        </Logo>
    );
    expect(logo.toJSON()).toMatchSnapshot();
});