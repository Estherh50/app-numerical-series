/* eslint-disable no-undef */
import numericalSeries from "../src/models/numericalSeries";

describe("numericalSeries", () => {

    //CALCULATION

    describe("calculation", () => {
        it("retorna el resultado del número natural 1", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculation(1)).toBe(0);
        });

    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 2", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculation(2)).toBe(11);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 3", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculation(3)).toBe(39);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 4", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculation(4)).toBe(102);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 5", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculation(5)).toBe(95);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 6", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculation(6)).toBe(115);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 7", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculation(7)).toBe(121.8);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 8", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculation(8)).toBe(108.5);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 9", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculation(9)).toBe(102.46153846153847);
        });
    });


    describe("calculation", () => {
        it("retorna el resultado del número natural 10", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculation(10)).toBe(87.85714285714286);
        });
    });


    //CALCULATIONTWO
    
    
    describe("calculationTwo", () => {
        it("devuelve el resultado del valor ingresado si cumple la condición con la condición", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculationTwo(4)).toBe(10.5);
        });

        it("devuelve el resultado del valor ingresado si no cumple la condición", () => {
            const instancia = new numericalSeries();
            expect(instancia.calculationTwo(1)).toBe("false * 0 /  -1");
            expect(instancia.calculationTwo(2)).toBe("5 * 1 /  0");
            expect(instancia.calculationTwo(3)).toBe("false * false /  1");
            expect(instancia.calculationTwo(5)).toBe("false * false /  3");
            expect(instancia.calculationTwo(6)).toBe("false * false /  false");
            expect(instancia.calculationTwo(7)).toBe("false * 6 /  5");
            expect(instancia.calculationTwo(8)).toBe("11 * false /  false");
            expect(instancia.calculationTwo(9)).toBe("false * false /  false");
            expect(instancia.calculationTwo(10)).toBe("13 * false /  8");
        });
    });


    //ISPRIMO

    describe("isPrimo", () => {
        it("retorna true si son numeros primos", () => {
            const instancia = new numericalSeries();
            expect(instancia.isPrimo(2)).toBe(true);
            expect(instancia.isPrimo(3)).toBe(true);
            expect(instancia.isPrimo(5)).toBe(true);
        });

        it("retorna false si no son numeros primos", () => {
            const instancia = new numericalSeries();
            expect(instancia.isPrimo(1)).toBe(false);
            expect(instancia.isPrimo(4)).toBe(false);
            expect(instancia.isPrimo(6)).toBe(false);
        });
    });


    //ISTRIANGULAR

    describe("isTriangular", () => {
        it("retorna true si son numeros tiangulares", () => {
            const instancia = new numericalSeries();
            expect(instancia.isTriangular(1)).toBe(true);
            expect(instancia.isTriangular(3)).toBe(true);
            expect(instancia.isTriangular(6)).toBe(true);
        });

        it("retorna false si no son numeros triangulares", () => {
            const instancia = new numericalSeries();
            expect(instancia.isTriangular(2)).toBe(false);
            expect(instancia.isTriangular(4)).toBe(false);
            expect(instancia.isTriangular(5)).toBe(false);
        });
    });

    //ISFIBONACCI

    describe("isFibonacci", () => {
        it("retorna true si son numeros Fibonacci", () => {
            const instancia = new numericalSeries();
            expect(instancia.isFibonacci(1)).toBe(true);
            expect(instancia.isFibonacci(2)).toBe(true);
            expect(instancia.isFibonacci(3)).toBe(true);
        });

        it("retorna false si no son numeros Fibonacci", () => {
            const instancia = new numericalSeries();
            expect(instancia.isFibonacci(4)).toBe(false);
            expect(instancia.isFibonacci(6)).toBe(false);
            expect(instancia.isFibonacci(7)).toBe(false);
        });
    });

    //PRIMO

    describe("primo", () => {
        it("retorna el enésimo número primo", () => {
            const instancia = new numericalSeries();
            expect(instancia.primo(1)).toBe(2);
            expect(instancia.primo(2)).toBe(3);
            expect(instancia.primo(3)).toBe(5);
            expect(instancia.primo(4)).toBe(7);
            expect(instancia.primo(5)).toBe(11);
            expect(instancia.primo(6)).toBe(13);
            expect(instancia.primo(7)).toBe(17);
            expect(instancia.primo(8)).toBe(19);
            expect(instancia.primo(9)).toBe(23);
            expect(instancia.primo(10)).toBe(29);
        });
    });

    //TRIANGULAR

    describe("triangular", () => {
        it("retorna el enésimo número triangular", () => {
            const instancia = new numericalSeries();
            expect(instancia.triangular(1)).toBe(1);
            expect(instancia.triangular(2)).toBe(3);
            expect(instancia.triangular(3)).toBe(6);
            expect(instancia.triangular(4)).toBe(10);
            expect(instancia.triangular(5)).toBe(15);
            expect(instancia.triangular(6)).toBe(21);
            expect(instancia.triangular(7)).toBe(28);
            expect(instancia.triangular(8)).toBe(36);
            expect(instancia.triangular(9)).toBe(45);
            expect(instancia.triangular(10)).toBe(55);
        });
    });

    //FIBONACCI

    describe("fibonacci", () => {
        it("retorna el enésimo numero fibonacci", () => {
            const instancia = new numericalSeries();
            expect(instancia.fibonacci(1)).toBe(1);
            expect(instancia.fibonacci(2)).toBe(1);
            expect(instancia.fibonacci(3)).toBe(2);
            expect(instancia.fibonacci(4)).toBe(3);
            expect(instancia.fibonacci(5)).toBe(5);
            expect(instancia.fibonacci(6)).toBe(8);
            expect(instancia.fibonacci(7)).toBe(13);
            expect(instancia.fibonacci(8)).toBe(21);
            expect(instancia.fibonacci(9)).toBe(34);
            expect(instancia.fibonacci(10)).toBe(55);
        });
    });

})