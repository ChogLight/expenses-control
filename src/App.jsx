
import { useState } from "react"
import Header from "./components/Header"
import newExpenseIcon from './img/nuevo-gasto.svg'
import Modal from "./components/Modal"

function App() {


  const [budget, setBudget] = useState(0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)

  const handleNewExpense = () => {
    setModal(true)

    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  return (
    <div>
      <Header
        budget = {budget}
        setBudget = {setBudget}
        setIsValidBudget = {setIsValidBudget}
        isValidBudget = {isValidBudget}
        />

        {isValidBudget ? (
          <div className="nuevo-gasto">
            <img 
                src={newExpenseIcon} 
                alt="newExpenseIcon"
                onClick={handleNewExpense}
            />
          </div>
        ) : null }

        {modal && <Modal 
                          setModal= {setModal}
                          animateModal = {animateModal}
                          setAnimateModal = {setAnimateModal}
                          
                          />}
        
    </div>
  )
}

export default App
