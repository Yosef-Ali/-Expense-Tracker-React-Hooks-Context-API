import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Transaction = ({ transaction }) => {
	const { deleteTransaction } = useContext(GlobalContext);
	const sign = transaction.amount < 0 ? '-' : '+';
	return (
		<div>
			<li
				className={`list text-gray-800 shadow-md bg-white
				flex justify-between p-3 my-3
				relative border-r-4 ${sign === '-' ? 'border-red-400' : 'border-green-400'} `}
			>
				{transaction.text}
				<span>
					{sign}${Math.abs(transaction.amount)}
				</span>
				<button
					className='delete-btn'
					onClick={() => deleteTransaction(transaction.id)}
				>
					x
				</button>
			</li>
		</div>
	);
};

export default Transaction;
