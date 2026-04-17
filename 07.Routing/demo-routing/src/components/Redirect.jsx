import { Navigate } from "react-router";

export default function Redirect() {
    if(Math.random() < 0.5) {
       return <Navigate to='/about' replace />
    }
    return (
        <h2>Not Redirected</h2>
    );
}