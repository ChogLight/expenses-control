import {formatDate} from '../helpers'
import SavingsIcon from '../img/icono_ahorro.svg'
import HouseIcon from '../img/icono_casa.svg'
import FoodIcon from '../img/icono_comida.svg'
import ExpensesIcon from '../img/icono_gastos.svg'
import HobbiesIcon from '../img/icono_ocio.svg'
import HealthIcon from '../img/icono_salud.svg'
import SubscriptionsIcon from '../img/icono_suscripciones.svg'
function Expense({expense}) {


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
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img
            src = {iconsDictionary[type]}
            alt = "Expense Icon"
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
  )
}

export default Expense
