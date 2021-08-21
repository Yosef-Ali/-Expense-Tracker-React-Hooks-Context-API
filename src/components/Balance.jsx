import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Balance = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);
	const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
	return (
		<div className='px-4 py-3'>
			<h4 className='uppercase text-xs'>Your Balance</h4>
			<h1 className='text-4xl font-semibold tracking-wider'>${total}</h1>
		</div>
	);
};

export default Balance;
