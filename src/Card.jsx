export default function Card(props) {
    return (
        <div className="card">
            <h4>{props.location}</h4>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
    )
}