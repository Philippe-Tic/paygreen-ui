import React from 'react';

const dots = (
    <>
        <path d="M25.5,210.4c-1.3-0.5-2.5-1-3.7-1.6l0.6-1.2c1.1,0.6,2.3,1.1,3.5,1.6L25.5,210.4z" />
        <path d="M15.4,204c-1.8-1.8-3.4-3.9-4.8-6.2l1.1-0.7c1.3,2.2,2.8,4.2,4.6,5.9L15.4,204z" />
        <path d="M7.4,190.6c-0.8-2.4-1.4-5-1.7-7.6l1.3-0.2c0.3,2.6,0.9,5.1,1.7,7.4L7.4,190.6z" />
        <path d="M6.5,175.3H5.2c0-2.6,0.3-5.2,0.7-7.8l1.3,0.2C6.8,170.2,6.6,172.8,6.5,175.3z" />
        <path d="M8.8,160.2l-1.3-0.4c0.7-2.5,1.6-5,2.6-7.3l1.2,0.5C10.4,155.4,9.5,157.8,8.8,160.2z" />
        <path d="M14.9,146.4l-1.1-0.7c1.4-2.3,2.9-4.4,4.6-6.3l1,0.9C17.8,142.1,16.3,144.2,14.9,146.4z" />
        <path d="M24.8,135l-0.8-1c2.1-1.7,4.3-3.1,6.6-4.3l0.6,1.2C28.9,132,26.8,133.4,24.8,135z" />
        <path
            d="M38.2,128.2l-0.3-1.3c0.8-0.2,1.7-0.4,2.5-0.5c1.7-0.3,3.5-0.5,5.2-0.6l0.1,1.3c-1.6,0.1-3.3,0.3-5,0.6
        C39.8,127.8,39,128,38.2,128.2z"
        />
        <path d="M60.6,129.1c-2.4-0.8-4.9-1.4-7.4-1.7l0.2-1.3c2.5,0.3,5.1,0.9,7.6,1.8L60.6,129.1z" />
        <path d="M74.1,135.9c-2.3-1.5-4.4-2.8-6.6-3.8l0.6-1.2c2.2,1.1,4.4,2.4,6.7,3.9L74.1,135.9z" />
        <path d="M86.4,145.1c-2.3-1.9-4.2-3.4-6-4.7l0.8-1c1.8,1.4,3.7,2.9,6.1,4.8L86.4,145.1z" />
        <path d="M98.3,154.8c-2-1.6-4-3.2-6-4.9l0.8-1c2,1.6,3.9,3.2,6,4.9L98.3,154.8z" />
        <path d="M110.9,163.9c-2.1-1.3-4.2-2.8-6.4-4.4l0.8-1.1c2.2,1.6,4.3,3,6.3,4.3L110.9,163.9z" />
        <path d="M124.6,171.1c-2.3-0.9-4.7-2-7-3.3l0.6-1.2c2.3,1.2,4.6,2.3,6.9,3.2L124.6,171.1z" />
        <path
            d="M139.6,175.1c-1.8-0.2-3.6-0.6-5.5-1c-0.7-0.2-1.4-0.3-2.1-0.5l0.3-1.3c0.7,0.2,1.4,0.4,2.1,0.5
        c1.8,0.4,3.6,0.8,5.4,1L139.6,175.1z"
        />
        <path d="M147.4,175.4l-0.1-1.3c2.6-0.2,5.1-0.6,7.4-1.3l0.4,1.3C152.7,174.8,150.1,175.2,147.4,175.4z" />
        <path d="M162.2,170.7l-0.7-1.1c2.1-1.3,4-2.9,5.8-4.8l1,0.9C166.4,167.7,164.4,169.4,162.2,170.7z" />
        <path d="M173,159.6l-1.1-0.7c1.3-2.1,2.4-4.3,3.5-6.8l1.2,0.5C175.5,155.1,174.3,157.4,173,159.6z" />
        <path d="M179,145.2l-1.3-0.3c0.6-2.3,0.8-3.8,0.8-3.8l1.3,0.2C179.9,141.4,179.6,142.9,179,145.2z" />
    </>
);

const illu = (
    <svg viewBox="0 0 300 215">
        <g className="plane">
            <polygon
                className="normal"
                points="296.7,3.2 142.7,78.5 179.2,93.5"
            />
            <polygon
                className="light"
                points="296.7,3.2 179.2,93.5 182.3,132.2"
            />
            <polygon
                className="light"
                points="182.3,132.2 296.7,3.2 194.3,99.6"
            />
            <polygon className="normal" points="296.7,3.2 194.3,99.6 246,121" />
        </g>

        <g className="dots">
            {dots}
        </g>
    </svg>
);

const dotsCount = dots.props.children.length;

export { illu, dotsCount };
