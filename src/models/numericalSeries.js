

export default class numericalSeries {


    /**
     * Verifica que el número dado sea un número primo
     * @param {number} number - El número que se va a verificar
     * @returns {boolean} true si es un número primo, false si no lo es
    */
    static isPrimo(number) {
        if (number <= 1) return false;
        if (number <= 3) return true;

        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return true;
    }

    

    /**
     * Verifica que el número dado sea un número triangular
     * La fórmula para obtener el enésimo número triangular es T(n) = n(n+1)/2
     * Para verificar si un número es triangular, se despeja n de la fórmula antes dada
     * 2 * T(n) = n(n+1)  ->  2 * x = n(n+1)  -> 2x = n^2 + n   ->   n^2 + n - 2x = 0
     * Da como resultado una ecuación cuadrática n^2 + n - 2x = 0
     * En la fórmula cuadrática general ax^2 + bx + c = 0, los coeficientes son: a= 1, b = 1, c= -2x
     * Al reemplazar los valores en la fórmula cuadrática: n = -b +- √b^2 - 4ac / 2a
     * Al reemplazar los valores quedó: n = -1 +- √1^2 - 4*1*(-2x) / 2* 1   ->   n = -1 +- √1 + 8x / 2
     * Math.floor comprueba si el resultado es un número entero, si es así devuelve true, de no ser asi, devuelve false
     * 
     * @param {number} number - El número a verificar si es triangular
     * @returns {boolean} - true si el número es triangular y falso de lo contrario
     */
    static isTriangular(number) {
        const n = (-1 + Math.sqrt(1 + 8 * number)) / 2;
        return n === Math.floor(n);
    }

    /**
     * Determina si el valor dado es un cuadrado perfecto
     * Un cuadrado perfecto es un número entero cuya raíz cuadrada también es un número entero
     * 
     * @param {number} number - El número a verificar 
     * @returns {boolean} - true si el valor dado es un cuadrado perfecto, falso en caso contrario
     */

    static isPerfectSquare(number) {
        return Math.sqrt(number) % 1 === 0;
    }


    /**
     * Determina si un número dado es un número fibonacci
     * Un número es fibonacci si al menos uno de (5 * n^2 + 4) o (5 * n^2 - 4) es un cuadrado perfecto
     * @param {number} number - El número a verificar
     * @returns {boolean} - true si el número es un número fibonacci, false en caso contrario
     */
    static isFibonacci(number) {
        return this.isPerfectSquare(5 * number * number + 4) || this.isPerfectSquare(5 * number * number - 4);
    }


    /**
     * Genera el enésimo número primo
     * Un número primo es un número natural mayor a 1 y tiene únicamente dos divisores diferentes: él mismo y el 1
     * @param {number} number - El ordinal del número primo a generar
     * @returns {number} El enésimo número primo
     */

    static primo(number) {
        const listPrimos = [];
        let nPrimo = 2;
        while (listPrimos.length < number) {
            if (this.isPrimo(nPrimo)) {
                listPrimos.push(nPrimo)
            }
            nPrimo++;
        }
        const numberP = listPrimos[listPrimos.length - 1];
        return numberP;
    }


    /**
     * Calcula el enésimo número triangular
     * Un número triangular es aquel que se puede representar como la suma de los número naturales consecutivos desde 1 hasta n para algún valor de n
     * @param {number} number - El ordinal del número triangular a calcular
     * @returns {number} - El enésimo número triangular
     */
    static triangular(number) {
        return ((number * (number + 1)) / 2);
    }



    /**
     * Calcula el enésimo número de la secuencia de Fibonacci
     * La secuencia de Fibonacci es una serie de números en la que cada número es la suma de los dos números anteriores
     * @param {number} number - El ordinal del número de Fibonacci a calcular
     * @returns {number} El enésimo número de la secuencia de fibonacci
     */
    static fibonacci(number) {
        if (number <= 1) number;

        //recursivo
        // return this.fibonacci(number-2) + this.fibonacci(number-2);

        let prevPrev = 0;
        let prev = 1;
        let current = 1;
        for (let i = 2; i <= number; i++) {
            current = prevPrev + prev;
            prevPrev = prev;
            prev = current;
        }

        return current;
    }


    /**
     * Calcula el témino n de la serie: serie(n) = primo(n+3) * triangular(n-1) / fibonacci(n-2)
     * @param {number} number - El número base para realizar los cálculos
     * @returns {number} - El valor del témino n de la serie dada
     */

    static calculation(number) {
        const numberPrimo = this.primo(number + 3);
        console.log(numberPrimo);
        const numberTriangular = this.triangular(number - 1);
        console.log(numberTriangular);
        const numberFibonacci = this.fibonacci(number - 2);
        console.log(numberFibonacci);


        const result = (numberPrimo * numberTriangular) / numberFibonacci;
        console.log(result);

        return result;
    }


    /**
     * Verifica si el número dado cumple con ser primo, triangular y de fibonacci
     * @param {number} number - El número base para realizar los cálculos
     * @returns {number|string} El resultado de la operación o una cadena de texto indicando qué condiciones se cumplieron
     */

    static calculationTwo(number) {
        const isNPrimo = this.isPrimo(number + 3);
        console.log(isNPrimo);
        const isNTriangular = this.isTriangular(number - 1);
        console.log(isNTriangular);
        const isNFibonacci = this.isFibonacci(number - 2);
        console.log(isNFibonacci);

        const nPrimo = isNPrimo ? number + 3 : false;
        const nTriangular = isNTriangular ? number - 1 : false;
        const nFibonacci = isNFibonacci ? number - 2 : false;


        let result = 0;

        if(!nPrimo || !nTriangular || !nFibonacci){
            result =`${nPrimo} * ${nTriangular} /  ${nFibonacci}`;
        } else {
            result = (nPrimo * nTriangular) / nFibonacci;
        }
        

        console.log(result);

        return result;
    }


}