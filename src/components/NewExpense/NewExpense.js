
import './NewExpense.css'

import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

function NewExpenses(props) {
    const saveExpenceDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddexpense(expenseData)
        setIsEditing(false)
    }

    const [isEditing, setIsEditing] = useState(false);
    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}> Add New Expenses </button>}
            {isEditing && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenceDataHandler}
                    onCancel={stopEditingHandler}
                />)}
        </div>
    )
}


export default NewExpenses;