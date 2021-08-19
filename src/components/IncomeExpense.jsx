import React from 'react';

const Income = () => {
	return (
		<div>
			<div class='bg-white shadow-md p-5 flex my-5 justify-between'>
				<div className='flex-1 text-center border-r border-gray-200'>
					<h4 className='uppercase '>Income</h4>
					<p class='money plus text-xl tracking-wider my-1 text-green-400'>+$0.00</p>
				</div>
				<div className='flex-1 text-center'>
					<h4 className='uppercase '>Expense</h4>
					<p
						id='money-minus'
						class='money minus text-xl tracking-wider my-1 text-red-400'
					>
						-$0.00
					</p>
				</div>
			</div>
		</div>
	);
};

export default Income;
