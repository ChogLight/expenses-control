import { useEffect, useState} from 'react'

function BudgetControl({budget, expenses}) {

  const [available, setAvailable] = useState(0)
  const [spent, setSpent] = useState(0)

  useEffect(() => {
    const totalExpense = expenses.reduce((total,expense) => expense.amount + total,0)
    const totalAvailable = budget - totalExpense

    setSpent(totalExpense)
    setAvailable(totalAvailable)
     
  },[expenses])


    const formatCurrency = (number) => {
        return number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">

      <div>Chart Here</div>

      <div className="contenido-presupuesto">
        <p>
            <span>Budget: </span> {formatCurrency(budget)}
             
        </p>

        <p>
            <span>Available: </span> {formatCurrency(Number(available))}
             
        </p>

        <p>
            <span>Spent: </span> {formatCurrency(Number(spent))}
             
        </p>
      </div>

    </div>
  )
}

export default BudgetControl
