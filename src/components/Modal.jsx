import { useEffect } from 'react'
import closeButton from '../img/cerrar.svg'


function Modal({setModal, animateModal, setAnimateModal}) {


    const hideModal = () => {
        setAnimateModal(false)
        
        setTimeout(() => {
            setModal(false)
        }, 500)
    }
  return (
    <div className="modal">
        <div className="cerrar-modal">
            <img
                src={closeButton}
                alt='closeButton'
                onClick={hideModal}
                
            />
        </div>

        <form className={`formulario ${animateModal ? "animar" : "cerrar"}`}>
            <legend>New Expense</legend>

            <div className='campo'>
                <label htmlFor='name'>Expense Name</label>

                <input
                    type="text"
                    id="name"
                    placeholder='Add the expense name'
                    />
            </div>

            <div className='campo'>
                <label htmlFor='amount'>Amount</label>

                <input
                    type="number"
                    id="amount"
                    placeholder='Add the amount of the expense'
                    />
            </div>

            <div className='campo'>
                <label htmlFor='type'>Type</label>

                <select id="type">
                    <option value = "">--Select</option>
                    <option value = "Savings">Savings</option>
                    <option value = "Food">Food</option>
                    <option value = "House">House</option>
                    <option value = "Others">Others</option>
                    <option value = "Hobbies">Hobbies</option>
                    <option value = "Health">Health</option>
                    <option value = "Subscriptions">Subscriptions</option>

                </select>
            </div>
            <input
                type="submit"
                value="Add expense"
                />
        </form>
      
    </div>
  )
}

export default Modal
