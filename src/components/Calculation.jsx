/* eslint-disable react/prop-types */
import { useEffect } from "react";
import numericalSeries from "../models/numericalSeries";


const Calculation = (props) => {
    const { number, onResult, type } = props;

    useEffect(() => {
        
        if (number) {
            let calculationResult = 0;
            if(type === 1){
                calculationResult = numericalSeries.calculation(number);
            } else {
                calculationResult = numericalSeries.calculationTwo(number);
            }
            
            onResult(calculationResult);
        } else {
            onResult(null);
        }

    }, [number, onResult, type]);
    return null
}

export default Calculation;