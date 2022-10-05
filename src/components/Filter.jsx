import { useState, useEffect } from 'react'
function Filter({filter, setFilter}) {
  return (
    <div className='filtros sombra contenedor'>
        <form>
            <div className='campo'>
                <label>Filter Expenses</label>
                <select
                    value = {filter}
                    onChange = {e => setFilter(e.target.value)}>
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
        </form>
    </div>
  )
}

export default Filter
