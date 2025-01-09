'use strict';
import css from './TransactionHistory.module.scss';
import propTypes from 'prop-types';

export default function TransactionHistory({ transactions }) {
    return (
        <div id="transactions-container" className={css.container}>
            <table className={css.transactionsTable}>
                <thead className={css.tableHead}>
                    <tr className={css.row}>
                        <th className={css.column}>Type</th>
                        <th className={css.column}>Amount</th>
                        <th className={css.column}>Currency</th>
                    </tr>
                </thead>
                <tbody className={css.tableBody}>
                    {transactions.map(({ id, type, amount, currency }) => {
                        return (
                            <tr className={css.row} key={id}>
                                <td className={css.column}>{type}</td>
                                <td className={css.column}>{amount}</td>
                                <td className={css.column}>{currency}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

TransactionHistory.propTypes = {
    transactions: propTypes.array.isRequired,
};
