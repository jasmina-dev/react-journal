import "./App.css";
import Card from "./Card";
import data from "./data";

export default function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} {...item} />;
  });

  return (
    <div className="hero">
      <div className="header">
        <h4>🌍 my travel journal</h4>
      </div>
      {cards.map((card, index) => (
        <div key={index}>
          {card}
          {index !== cards.length - 1 && (
            <hr
              style={{
                height: "0.8px",
                width: "50%",
                color: "#F5F5F5",
                background: "#F5F5F5",
                fontSize: 0,
                border: 0,
              }}
            />
          )}{" "}
          {/* Add a horizontal line if it's not the last card */}
        </div>
      ))}
    </div>
  );
}
