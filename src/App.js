import './App.css'
import { Table } from './Components/Table'

export const App = () => {
  const columns = [
    { accessor: 'name', label: 'Name' },
    { accessor: 'age', label: 'Age' },
    { accessor: 'is_manager', label: 'Manager', format: (value) => (value ? '✔️' : '✖️') },
    { accessor: 'start_date', label: 'Start Date' },
  ]

  const rows = [
    { id: 1, name: 'Аврора Блинова', age: 36, is_manager: true, start_date: '02-28-1999' },
    { id: 2, name: 'Бронислав Давыдов', age: 40, is_manager: true, start_date: '03-05-1997' },
    { id: 3, name: 'Дарья Ильина', age: 39, is_manager: false, start_date: '07-12-2002' },
    { id: 4, name: 'Елена Зайцева', age: 40, is_manager: false, start_date: '02-28-1999' },
    { id: 5, name: 'Кира Маркова', age: 45, is_manager: false, start_date: '01-01-1970' },
    { id: 6, name: 'Ефим Никитин', age: 42, is_manager: true, start_date: '04-01-2000' },
    { id: 7, name: 'Таисия Шестакова', age: 36, is_manager: false, start_date: '06-09-2004' },
  ]

  return (
    <div className="App">
      <h1>Table</h1>
      <h2>Sorting, Filtering</h2>

      <Table rows={rows} columns={columns} />
    </div>
  )
}
