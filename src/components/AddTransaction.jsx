import React from 'react';

const AddTransaction = () => {
	return (
		<>
			<h3 className='text-xl border-b-2 mb-5 leading-loose'>
				Add new transaction
			</h3>
			<form id='form'>
				<div class='form-control '>
					<label for='text'>Text</label>
					<input
						type='text'
						id='text'
						placeholder='Enter text... '
						className='border-2 rounded-sm w-full text-md p-3'
					/>
				</div>
				<div class='form-control'>
					<label for='amount' className='inline-block mt-5 mb-1'>
						Amount <br />
						(negative - expense, positive - income)
					</label>
					<input
						type='number'
						placeholder='Enter amount...'
						className='border-2 rounded-sm w-full text-md p-3'
					/>
				</div>
				<button class='btn cursor-pointer bg-indigo-600 w-full py-3 text-base mt-3 mb-8 text-white border-0 rounded-sm uppercase'>
					Add transaction
				</button>
			</form>
		</>
	);
};

export default AddTransaction;

// .btn {
//   cursor: pointer;
//   background-color: #9c88ff;
//   box-shadow: var(--box-shadow);
//   color: #fff;
//   border: 0;
//   display: block;
//   font-size: 16px;
//   margin: 10px 0 30px;
//   padding: 10px;
//   width: 100%;
// }

// .btn:focus,
// .delete-btn:focus {
//   outline: 0;
// }
