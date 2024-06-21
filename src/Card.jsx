import "./Card.css";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--image">
        <img src={`/${props.imageUrl}`} alt={props.title} />
      </div>
      <div className="card--info">
        <div className="card--location">
          <h4>📍{props.location.toUpperCase()}</h4>
          <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2 className="card--title">{props.title}</h2>
        <div className="card--dates">
          <p>
            <strong>
              {props.startDate} - {props.endDate}
            </strong>
          </p>
        </div>
        <div className="card--desc">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
