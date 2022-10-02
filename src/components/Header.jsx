
import NewBudget from "./NewBudget"
import BudgetControl from "./BudgetControl"

function Header({budget, setBudget, isValidBudget, setIsValidBudget, expenses}) {
  return (
    <header>
        <h1>Expenses control</h1>

        {isValidBudget ? (
          <BudgetControl 
            budget = {budget}
            expenses = {expenses}
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
