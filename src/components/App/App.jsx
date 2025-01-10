// import css from './App.module.scss';
import Profile from '../Profile/Profile.jsx';
import FriendList from '../FriendList/FriendList.jsx';
import TransactionHistory from '../TransactionHistory/TransactionHistory.jsx';
// import Navigation from '../Navigation/Navigation.jsx';
import { username, tag, location, avatar, stats } from '/src/userData.json';
import { friends } from '/src/friends.json';
import { transactions } from '/src/transactions.json';

export default function App() {
    return (
        <>
            <Profile
                name={username}
                location={location}
                avatar={avatar}
                stats={stats}
                tag={tag}
            />

            <FriendList friends={friends} />

            <TransactionHistory transactions={transactions} />

            {/* <Navigation /> */}
        </>
    );
}
