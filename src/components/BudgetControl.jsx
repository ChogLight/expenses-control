import { useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function BudgetControl({
  budget, 
  expenses, 
  setBudget, 
  setExpenses, 
  setIsValidBudget,
  setFilter}) {

  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)
  const [percentage, setPercentage] = useState((0).toFixed(2))

  useEffect(() => {
    const totalExpense = expenses.reduce((total,expense) => Number(expense.amount) + total,0)
    const totalAvailable = budget - totalExpense
    const newPercentage = (((budget - totalAvailable)/budget) * 100).toFixed(2)
    
    setSpent(Number(totalExpense))
    setAvailable(Number(totalAvailable))
    setTimeout(() => {
      setPercentage(newPercentage)
    },1000)
     
  },[expenses])


    const formatCurrency = (number) => {
        return number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    const handleResetApp = () => {
      const result = confirm('Do you want to reset the complete app?')
      if(result) {
        setBudget(0)
        setExpenses([])
        setFilter('')
        setIsValidBudget(false)
      }
    }

    const handleResetBudget = () => {
      const result = confirm('Do you want to reset the budget?')
      if(result) {
        setBudget(0)
        setFilter('')
        setIsValidBudget(false)
      }
    }
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">

      <CircularProgressbar
        styles={buildStyles({
          pathColor: percentage < 100 ? '#3B82F6' : '#C63037',
          trailColor:'#F5F5F5'
        })}
        value = {percentage}
        text = {`${percentage}% spent`}  
      />

      <div className="contenido-presupuesto">

        <button 
          className='reset-app button'
          onClick={handleResetApp}
        >
          Reset App
        </button>

        <button 
          className='reset-app button'
          onClick={handleResetBudget}
        >
          Reset Budget
        </button>
        <p>
            <span>Budget: </span> {formatCurrency(budget)}
             
        </p>

        <p className={`${available <0? 'negativo' : ""}`}>
            <span>Available: </span> {formatCurrency(available)}
             
        </p>

        <p>
            <span>Spent: </span> {formatCurrency(spent)}
             
        </p>
      </div>

    </div>
  )
}

export default BudgetControl
