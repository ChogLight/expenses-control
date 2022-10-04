import { useState, useEffect } from "react"
import ExpensesList from "./components/ExpensesList"
import Header from "./components/Header"
import Modal from "./components/Modal"
import { generateId } from "./helpers"
import newExpenseIcon from './img/nuevo-gasto.svg'

function App() {


  const [budget, setBudget] = useState(
    Number(localStorage.getItem('budget')) ?? 0)
  const [isValidBudget, setIsValidBudget] = useState(false)
  const [modal, setModal] = useState(false)
  const [animateModal, setAnimateModal] = useState(false)
  const [expenses, setExpenses] = useState(
    localStorage.getItem('expenses') ? JSON.parse(localStorage.getItem('expenses')): [])
  const [editExpense, setEditExpense] = useState({})

  useEffect(() => {
    if(Object.keys(editExpense).length){
      setModal(true)
      setTimeout(() => {
        setAnimateModal(true)
      }, 500)
    }
  }, [editExpense])

  useEffect (() => {

    localStorage.setItem('budget', budget ?? 0)

  }, [budget])

  useEffect(() => {
    const budgetLS = Number(localStorage.getItem('budget')) ?? 0

    if(budgetLS > 0) {
      setIsValidBudget(true)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses) ?? [])
  },[expenses])
  const handleNewExpense = () => {
    setModal(true)
    setEditExpense({})
    setTimeout(() => {
      setAnimateModal(true)
    }, 500)
  }

  const saveExpense = (expense) => {
    if(expense.id){
      //Edit expense
      const updatedExpenses = expenses.map (expenseState => expenseState.id ===
        expense.id ? expense : expenseState)
        setExpenses(updatedExpenses)
      }
    else {
      //Generate new Expense  
      expense.id = generateId()
      expense.date = Date.now()
      setExpenses([...expenses, expense])
    }
    setAnimateModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const deleteExpense = id => {
    const updatedExpenses = expenses.filter(expense => expense.id != id)
    setExpenses(updatedExpenses)
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
              setEditExpense = {setEditExpense}
              deleteExpense = {deleteExpense}
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
                          editExpense = {editExpense}
                          setEditExpense = {setEditExpense}
                          />}
        
    </div>
  )
}

export default App
