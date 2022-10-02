import { useState } from "react"
import ExpensesList from "./components/ExpensesList"
import Header from "./components/Header"
import Modal from "./components/Modal"
import { generateId } from "./helpers"
import newExpenseIcon from './img/nuevo-gasto.svg'

function App() {


  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState([])

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const saveExpense = (expense) => {
    expense.id = generateId()
    expense.date = Date.now()
    setExpenses([...expenses, expense])
  }
  return (
    <div className={modal ? 'fijar'  : ''}>
      <Header
        expenses = {expenses}
        budget = {budget}
        setBudget = {setBudget}
        setIsValidBudget = {setIsValidBudget}
        isValidBudget = {isValidBudget}
        />

        {isValidBudget ? (
          <>
          <main>
            <ExpensesList
              expenses = {expenses}
              />
          </main>
          <div className="nuevo-gasto">
            <img 
                src={newExpenseIcon} 
                alt="newExpenseIcon"
                onClick={handleNewExpense}
            />
          </div>
          </>
        ) : null }

        {modal && <Modal 
                          setModal= {setModal}
                          animateModal = {animateModal}
                          setAnimateModal = {setAnimateModal}
                          saveExpense = {saveExpense}
                          />}
        
    </div>
  )
}

export default App
