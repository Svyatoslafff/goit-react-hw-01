'use strict';
import clsx from 'clsx';
import css from './FriendListItem.module.scss';
import propTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline }) {
    return (
        <li className={css.friend}>
            <img src={avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={clsx(css.status, isOnline && css.online)}>
                {isOnline ? 'Online' : 'Offline'}
            </p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};
