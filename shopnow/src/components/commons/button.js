/**
 *
 * Common Utility Module to handle anchor button across the components
 *
 * @module Link
 *
 */
'use strict';

import React from 'react';
import PropTypes from 'prop-types';

/**
 * Handles Enter key press on Button
 * @param {object} e -  click event object
 * @param {function} callback - click callback
 */
const handleClick = ( e, callback ) =>{

    if ( callback ) {
        e.preventDefault();
        callback(e);
    }
};

/**
 * Handles Enter key press on Button
 * @param {object} e -  keypress event object
 * @param {function} callback - key press callback
 */
const handleEnterKeyPress = (e, callback) => {

    if ( e.key === 'Enter' && callback ) {
        e.preventDefault();
        callback(e);
    }
};

/**
 * Gives markup for button tag
 * @param {React-props} props - Props passed to this module
 * @returns {React-markup} - Returns React markup to generate anchor tag
 */

const Button = ( props ) => {

    const ctaLabel = props.label;
    const className = props.buttonClassName ? props.buttonClassName : null;
    const title = props.title ? props.title : null;
    const children = props.children ? props.children : ctaLabel;
    const key = props.key ? props.key : null;
    const isDisabled = props.isDisabled;
    const { ariaExpanded, ariaControls, ariaSelected, ariaDisabled, dataLinktext, role, dataContentname, dataContenttype, ariaLabel, buttonRef, dataComponentname, tabIndex } = props;

    return (
        <button
            role={role}
            aria-label={ariaLabel}
            ref={buttonRef}
            tabIndex={tabIndex}
            className={ className }
            value={title}
            onClick={(e) => {
                handleClick(e, props.onClick);
            }}
            onKeyPress={(e) => {
                handleEnterKeyPress(e, props.onKeyPress);
            }}
            aria-disabled={ariaDisabled}
            aria-checked={ariaSelected}
            aria-expanded={ariaExpanded}
            aria-controls={ariaControls}
            data-linktext={dataLinktext}
            data-contentname={dataContentname}
            data-contenttype={dataContenttype}
            data-componentname={dataComponentname}
            disabled={isDisabled}
            key={key} >
            { children }
        </button>
    );
};