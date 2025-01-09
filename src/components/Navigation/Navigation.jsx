'use strict';
import css from './Navigation.module.scss';
import NextButton from '../NextButton/NextButton.jsx';

export default function Navigation() {
    return (
        <div className={css.navigationContainer}>
            <p>Navigation</p>
            <ul>
                <NextButton link="#profile-task-container">Profile</NextButton>
                <NextButton link="#friend-list-container">
                    Friend List
                </NextButton>
                <NextButton link="#transactions-container">
                    Transaction History
                </NextButton>
            </ul>
        </div>
    );
}
