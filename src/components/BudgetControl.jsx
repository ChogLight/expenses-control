import { useEffect, useState} from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function BudgetControl({budget, expenses}) {

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

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">

      <CircularProgressbar
        styles={buildStyles({
          pathColor:'#3B82F6',
          trailColor:'#F5F5F5'
        })}
        value = {percentage}
        text = {`${percentage}% spent`}  
      />

      <div className="contenido-presupuesto">
        <p>
            <span>Budget: </span> {formatCurrency(budget)}
             
        </p>

        <p>
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
