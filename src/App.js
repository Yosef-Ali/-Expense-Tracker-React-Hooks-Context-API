import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalContext';

function App() {
	return (
		<GlobalProvider>
			<div className='container p-4 flex flex-col justify-center align-middle max-w-md min-h-screen bg-gray-100'>
				<Header />
				<Balance />
				<IncomeExpense />
				<TransactionList />
				<AddTransaction />
			</div>
		</GlobalProvider>
	);
}

export default App;
