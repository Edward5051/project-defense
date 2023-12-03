import Header from "../admindashboard/Header.js";
import ProductForm from "../admindashboard/ProductForm.js";

export default function ProductPage(){
    return(
        <>
             <Header
                title="Retail AR"
                heading="Retailer dashboard"
                linkName="New Product"
                linkUrl="/dashboard"
                />

            <ProductForm/>
        </>
    )
}