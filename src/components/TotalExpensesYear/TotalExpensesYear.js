import './TotalExpensesYear.css'

const TotalExpensesYear = (props) => {
   
    return (
        <div className="total-expenses">
            <h2 className="total-expense__year">Total expenses </h2>
            <h2 className="total-expense__expense"> {props.totalExpenses} $ </h2>
        </div>
    )
}


export default TotalExpensesYear;
