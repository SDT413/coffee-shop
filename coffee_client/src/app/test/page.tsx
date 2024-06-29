"use client";
import StripeEmbed from "@/components/stripe/StripeEmbed";

function App() {
    return (
        <div className="App">
            <StripeEmbed setShowStripeEmbed={() => {}} price={0} email={" "}/>
        </div>
    );
}

export default App;
