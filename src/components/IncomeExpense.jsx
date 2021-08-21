import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const IncomeExpense = () => {
	const { transactions } = useContext(GlobalContext);
	const amounts = transactions.map((transaction) => transaction.amount);

	const income = amounts
		.filter((item) => item > 0)
		.reduce((acc, item) => (acc += item), 0)
		.toFixed(2);
	const expense =
		amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
		-(1).toFixed(2);

	return (
		<div>
			<div className='bg-white shadow-md p-5 flex my-5 justify-between rounded-sm'>
				<div className='flex-1 text-center border-r border-gray-200'>
					<h4 className='uppercase '>Income</h4>
					<p className='money plus text-xl tracking-wider my-1 text-green-400'>
						{income}
					</p>
				</div>
				<div className='flex-1 text-center'>
					<h4 className='uppercase '>Expense</h4>
					<p
						id='money-minus'
						className='money minus text-xl tracking-wider my-1 text-red-400'
					>
						{expense}
					</p>
				</div>
			</div>
		</div>
	);
};

export default IncomeExpense;
