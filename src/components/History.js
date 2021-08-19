import React from 'react';

const History = () => {
	return (
		<div>
			<h3 className='text-xl border-b-2 mb-5 leading-loose'>History</h3>
			<ul className='list list-none p-0 mb-10'>
				<li className='minus text-gray-800 shadow-md bg-white flex justify-between p-3 my-3 relative border-r-4 border-red-400'>
					Cash <span>-$400</span>
					<button className='delete-btn'>x</button>
				</li>
			</ul>
		</div>
	);
};

export default History;
