/* eslint-disable react/prop-types */


const Result = (props) => {
    const {result} = props;
    return (
        <div className="dark:bg-slate-400 max-w-md mx-auto p-2">
            <span className="dark:text-white font-bold">El resultado es: {result}</span>
        </div>
    );
}

export default Result;