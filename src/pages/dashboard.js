import Header from "../admindashboard/Header.js";
import Dashboard from "../admindashboard/Dashboard.js";

export default function DashboardPage(){
    return(
        <>
             <Header
                title="Retail AR"
                heading="Retailer dashboard"
                linkName="Product Listings"
                linkUrl="/productpage"
                />

            <Dashboard/>
        </>
    )
}