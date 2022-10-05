
import Expense from './Expense.jsx'

function ExpensesList({
  expenses,
  setEditExpense,
  deleteExpense,
  filter,
  filteredExpenses
  }) {
  return (
    <div className="contenedor Listado-gastos">
      
      { filter ? (
          <>
          <h2>{filteredExpenses.length ?  `${filter} expenses` : `There are no ${filter.toLowerCase()} expenses yet`}</h2>
            {
              filteredExpenses.map(expense => 
                <Expense
                    key = {expense.id}
                    expense = {expense}
                    setEditExpense = {setEditExpense}
                    deleteExpense = {deleteExpense}
                  />
              )
            }
          </>
        ):
        
        (
          <>
          <h2>{expenses.length ? 'Expenses' : 'There are no expenses yet'}</h2>
          {
            expenses.map(expense => 
              <Expense
                  key = {expense.id}
                  expense = {expense}
                  setEditExpense = {setEditExpense}
                  deleteExpense = {deleteExpense}
                />
            )
          }
          </>
          )
      }
    </div>
  )
}

export default ExpensesList
