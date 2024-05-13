/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useMemo } from "react";
import numericalSeries from "../models/numericalSeries";


const Calculation = (props) => {
    const { number, onResult, type } = props;
    const instancia = useMemo(() => new numericalSeries(), []);

    useEffect(() => {
        
        if (number) {
            let calculationResult = 0;
            if(type === 1){
                calculationResult = instancia.calculation(number);
            } else {
                calculationResult = instancia.calculationTwo(number);
            }
            
            onResult(calculationResult);
        } else {
            onResult(null);
        }

    }, [number, onResult, type]);
    return null
}

export default Calculation;