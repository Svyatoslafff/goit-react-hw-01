import css from './Profile.module.scss';

export default function Profile({
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
}) {
    return (
        <div id="#profile-task-container" className={css.container}>
            <div className={css.userInfo}>
                <img src={avatar} alt="User avatar" width={200} />
                <p className={css.name}>{name}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.userStatistics}>
                <li className={css.statisticsItem}>
                    <span>Followers</span> <span>{followers}</span>
                </li>
                <li className={css.statisticsItem}>
                    <span>Views</span> <span>{views}</span>
                </li>
                <li className={css.statisticsItem}>
                    <span>Likes</span> <span>{likes}</span>
                </li>
            </ul>
        </div>
    );
}
