
export default function ButtonScrollToPricing({styling, text}) {
    
    
    
    return(
        <a href="#pricing" className={`btn ${styling}`}>
            {text}
        </a>
    );
}