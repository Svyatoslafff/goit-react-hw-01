'use strict';

import css from './NextButton.module.scss';
import propTypes from 'prop-types';

export default function NextButton({ children, link }) {
    return (
        <li className={css.item}>
            <a href={link}>Move to {children} task</a>
        </li>
    );
}

NextButton.propTypes = {
    children: propTypes.string.isRequired,
    link: propTypes.string.isRequired,
};
