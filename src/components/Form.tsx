import React, { useState } from "react";

const Form = (props) => {
    const { onCalculation } = props;
    const [number, setNumber] = useState(0);

    const handleChange = (e) => {
        const value = parseInt(e.target.value);
        if(!value) {
            onCalculation(0);
        };
        setNumber(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(number < 1) {
            window.alert("Ingrese un numero entero");
        } else {
            onCalculation(number);
        }
    }

    return (
        <div className=" dark:bg-slate-800 max-w-md mx-auto shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="dark:text-white text-left block text-gray-700 text-sm font-bold mb-2" htmlFor="number">
                        Ingresa un número:
                    </label>
                    <input
                        type="number"
                        className="shadow appearance-none border rounded w-full py-2 px-3 test-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="number"
                        name="number"
                        onChange={handleChange}
                        value={number}
                    />
                </div>
                <div className="items-center justify-between">
                    <button
                        type="submit"
                        disabled={!number}
                        className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
                    >
                        Calcular
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Form;