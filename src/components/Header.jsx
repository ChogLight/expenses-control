
import NewBudget from "./NewBudget"
import BudgetControl from "./BudgetControl"

function Header({
  budget, 
  setBudget, 
  isValidBudget, 
  setIsValidBudget, 
  expenses, 
  setExpenses,
  setFilter
  }) {
  return (
    <header>
        <h1>Expenses control</h1>

        {isValidBudget ? (
          <BudgetControl 
            budget = {budget}
            expenses = {expenses}
            setExpenses = {setExpenses}
            setBudget = {setBudget}
            setIsValidBudget = {setIsValidBudget}
            setFilter = {setFilter}
          />
        ) :
          (
            <NewBudget
            budget = {budget}
            setBudget = {setBudget}
            setIsValidBudget = {setIsValidBudget}
        />
          )}
       
    </header>
  )
}

export default Header
