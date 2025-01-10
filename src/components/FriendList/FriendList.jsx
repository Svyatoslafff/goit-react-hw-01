import css from './FriendList.module.scss';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendsList({ friends }) {
    return (
        <div id="friend-list-container" className={css.container}>
            <ul>
                {friends.map(({ avatar, name, isOnline, id }) => {
                    return (
                        <li key={id}>
                            <FriendListItem
                                avatar={avatar}
                                name={name}
                                isOnline={isOnline}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
