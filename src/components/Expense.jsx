import { 
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
}from 'react-swipeable-list'
import "react-swipeable-list/dist/styles.css"
import {formatDate} from '../helpers'
import SavingsIcon from '../img/icono_ahorro.svg'
import HouseIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import ExpensesIcon from '../img/icono_gastos.svg'
import HobbiesIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SubscriptionsIcon from '../img/icono_suscripciones.svg'
function Expense({expense, setEditExpense, deleteExpense}) {


    const iconsDictionary = {
        Savings: SavingsIcon,
        Food: FoodIcon,
        House: HouseIcon,
        Others: ExpensesIcon,
        Hobbies: HobbiesIcon,
        Health: HealthIcon,
        Subscriptions: SubscriptionsIcon
    }
    const {name, amount, type, id, date} = expense
    const leadingActions = () => (
      <LeadingActions>
        <SwipeAction onClick={()=>setEditExpense(expense)}>
          Edit
        </SwipeAction>
      </LeadingActions>
    )
      
    const trailingActions = () => (
      <TrailingActions>
        <SwipeAction 
        onClick={()=>deleteExpense(id)}
        destructive = {true}
        >
          Delete
        </SwipeAction>
      </TrailingActions>
    )
  return (
    <SwipeableList>
      <SwipeableListItem 
        leadingActions = {leadingActions()}
        trailingActions = {trailingActions()}>
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img
                src = {iconsDictionary[type]}
                alt = "Expense Icon"
                draggable = "false"
                className='expense-image'
                />
            <div className="descripcion-gasto">
                <p className="categoria">{type}</p>
                <p className="nombre-gasto">{name}</p>
                <p className='fecha-gasto'>
                    Added on: {''}
                    <span>{formatDate(date)}</span>
                </p>
            </div>
          </div>
          <p className='cantidad-gasto'>${amount}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Expense
