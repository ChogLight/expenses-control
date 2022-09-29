

function BudgetControl({budget}) {

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
            <span>Available: </span> {formatCurrency(0)}
             
        </p>

        <p>
            <span>Spent: </span> {formatCurrency(0)}
             
        </p>
      </div>

    </div>
  )
}

export default BudgetControl
