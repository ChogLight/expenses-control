import { useState, useEffect } from 'react'
import Message from './Message'
import closeButton from '../img/cerrar.svg'


function Modal({
    setModal, 
    animateModal,
    setAnimateModal, 
    saveExpense, 
    editExpense,
    setEditExpense}) {


    const [name, setName] = useState ('')
    const [amount, setAmount] = useState(0)
    const [type, setType] =useState('')
    const [message, setMessage] = useState('')
    const [date, setDate] = useState('')
    const [id,setId] = useState('')


    useEffect(() => {
        if(Object.keys(editExpense).length > 0){
            setName(editExpense.name)
            setAmount(editExpense.amount)
            setType(editExpense.type)
            setId(editExpense.id)
            setDate(editExpense.date)
        }
    },[])
    const hideModal = () => {
        setAnimateModal(false)
        
        setTimeout(() => {
            setModal(false)
            setEditExpense({})
        }, 500) 
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if([name, amount, type].includes('')){
            setMessage('All fields are mandatory')

            setTimeout(() => {
                setMessage('')
            }, 2500)

            return
        }
        saveExpense({name, amount, type, id, date})
        hideModal()
        setName('')
        setAmount(0)
        setType('--select')
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

        <form 
            className={`formulario ${animateModal ? "animar" : "cerrar"}`}
            onSubmit = {handleSubmit}
        >
            <legend>{Object.keys(editExpense).length > 0 ? 'Edit Expense' : 'New Expense'}</legend>
            {message && <Message type = 'error'>{message}</Message>}

            <div className='campo'>
                <label htmlFor='name'>Expense Name</label>

                <input
                    type="text"
                    id="name"
                    placeholder='Add the expense name'
                    value = {name}
                    onChange = {e => setName(e.target.value)}
                    />
            </div>

            <div className='campo'>
                <label htmlFor='amount'>Amount</label>

                <input
                    type="number"
                    id="amount"
                    placeholder='Add the amount of the expense'
                    value = {amount}
                    onChange = {e => Number(setAmount(e.target.value))}
                    />
            </div>

            <div className='campo'>
                <label htmlFor='type'>Type</label>

                <select 
                    id="type"
                    value = {type}
                    onChange = {e => setType(e.target.value)}
                >
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
                value={Object.keys(editExpense).length > 0 ? 'Edit expense' : 'Add expense'}
                />
        </form>
      
    </div>
  )
}

export default Modal
