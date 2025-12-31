
export default function ButtonLogin({styling, text}) {
    return(
        <button className={`btn ${styling}`}>
            {text}
        </button>
    );
}