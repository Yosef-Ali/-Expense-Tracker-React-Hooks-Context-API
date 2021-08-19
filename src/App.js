import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import History from './components/History';
import IncomeExpense from './components/IncomeExpense';

function App() {
	return (
		<div className='container p-4 flex flex-col justify-center align-middle max-w-md min-h-screen bg-gray-100'>
			<Header />
			<Balance />
			<IncomeExpense />
			<History />
			<AddTransaction />
		</div>
	);
}

export default App;
