import './App.css'
import Card from './Card'
import data from "./data"

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />
  })
  
  return (
    <div>
      <div className="header">
        <h4>my travel journal</h4>
      </div>
      {cards}
    </div>
  )
}

