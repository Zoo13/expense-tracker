import { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import TotalExpensesYear from '../TotalExpensesYear/TotalExpensesYear';

function Expenses(props) {



    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })


    let totalExpensesInYear = 0;
    const maximum = (arg)  => {
        for(let i = 0; i < arg.length; i++){
            totalExpensesInYear += arg[i].amount
        }
    }
    
    maximum(filteredExpenses)


    


  
    

    


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter
                    seleceted={filteredYear}
                    onCHangeFilter={filterChangeHandler} />
                <ExpensesChart 
                    expenses ={filteredExpenses}
                    />
                <TotalExpensesYear totalExpenses = {totalExpensesInYear}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
}



export default Expenses;


