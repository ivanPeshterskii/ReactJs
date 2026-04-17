import { useParams } from "react-router"

export default function City() {
    const params = useParams();
    return (
        <>
            <h2>City</h2>
            <p>The name of the city is: {params.city}</p>
        </>
    )
}