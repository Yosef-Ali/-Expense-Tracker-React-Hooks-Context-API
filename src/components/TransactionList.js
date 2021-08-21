import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Transaction from './Transaction';

const TransactionList = () => {
	const { transactions } = useContext(GlobalContext);

	return (
		<div>
			<h3 className='text-xl border-b-2 mb-5 leading-loose'>History</h3>
			<ul className='list list-none p-0 mb-10'>
				{transactions &&
					transactions.map((transaction) => (
						<Transaction transaction={transaction} kry={transaction.id} />
					))}
			</ul>
		</div>
	);
};

export default TransactionList;
