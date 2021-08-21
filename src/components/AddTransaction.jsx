import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const AddTransaction = () => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);
	const { addTransaction } = useContext(GlobalContext);

	const onSubmit = (e) => {
		e.preventDefault();
		const newTransaction = {
			id: Math.floor(Math.random() * 1000),
			text,
			//string to number
			amount: +amount,
		};
		addTransaction(newTransaction);
	};
	return (
		<>
			<h3 className='text-xl border-b-2 mb-5 leading-loose'>
				Add new transaction
			</h3>
			<form onSubmit={onSubmit}>
				<div className='form-control '>
					<label>Text</label>
					<input
						type='text'
						placeholder='Enter text... '
						className='border-2 rounded-sm w-full text-md p-3'
						value={text}
						onChange={(e) => setText(e.target.value)}
					/>
				</div>
				<div className='form-control'>
					<label className='inline-block mt-5 mb-1'>
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type='number'
						placeholder='Enter amount...'
						className='border-2 rounded-sm w-full text-lg p-3'
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
				</div>
				<button className='btn cursor-pointer bg-indigo-600 w-full py-3 text-base mt-3 mb-8 text-white border-0 rounded-sm uppercase'>
					Add transaction
				</button>
			</form>
		</>
	);
};

export default AddTransaction;
