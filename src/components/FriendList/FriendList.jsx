'use strict';
import propTypes from 'prop-types';
import css from './FriendList.module.scss';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendsList({ friends }) {
    return (
        <div id="friend-list-container" className={css.container}>
            <ul>
                {friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <FriendListItem
                            avatar={avatar}
                            name={name}
                            isOnline={isOnline}
                            key={id}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

FriendsList.propTypes = {
    friends: propTypes.array.isRequired,
};
