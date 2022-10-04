
import Expense from './Expense.jsx'

function ExpensesList({expenses, setEditExpense, deleteExpense}) {
  return (
    <div className="contenedor Listado-gastos">
      <h2>{expenses.length ? 'Expenses' : 'There are no expenses yet'}</h2>

      {expenses.map(expense => 
        <Expense
            key = {expense.id}
            expense = {expense}
            setEditExpense = {setEditExpense}
            deleteExpense = {deleteExpense}
            />
      )}
    </div>
  )
}

export default ExpensesList
