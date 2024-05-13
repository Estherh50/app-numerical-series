/* eslint-disable no-undef */
import numericalSeries from "../src/models/numericalSeries";

describe("numericalSeries", () => {

    //CALCULATION

    describe("calculation", () => {
        it("retorna el resultado del número natural 1", () => {
            expect(numericalSeries.calculation(1)).toBe(0);
        });

    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 2", () => {
            expect(numericalSeries.calculation(2)).toBe(11);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 3", () => {
            expect(numericalSeries.calculation(3)).toBe(39);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 4", () => {
            expect(numericalSeries.calculation(4)).toBe(102);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 5", () => {
            expect(numericalSeries.calculation(5)).toBe(95);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 6", () => {
            expect(numericalSeries.calculation(6)).toBe(115);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 7", () => {
            expect(numericalSeries.calculation(7)).toBe(121.8);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 8", () => {
            expect(numericalSeries.calculation(8)).toBe(108.5);
        });
    });

    describe("calculation", () => {
        it("retorna el resultado del número natural 9", () => {
            expect(numericalSeries.calculation(9)).toBe(102.46153846153847);
        });
    });


    describe("calculation", () => {
        it("retorna el resultado del número natural 10", () => {
            expect(numericalSeries.calculation(10)).toBe(87.85714285714286);
        });
    });



    //ISPRIMO

    describe("isPrimo", () => {
        it("retorna true si son numeros primos", () => {
            expect(numericalSeries.isPrimo(2)).toBe(true);
            expect(numericalSeries.isPrimo(3)).toBe(true);
            expect(numericalSeries.isPrimo(5)).toBe(true);
        });

        it("retorna false si no son numeros primos", () => {
            expect(numericalSeries.isPrimo(1)).toBe(false);
            expect(numericalSeries.isPrimo(4)).toBe(false);
            expect(numericalSeries.isPrimo(6)).toBe(false);
        });
    });


    //ISTRIANGULAR

    describe("isTriangular", () => {
        it("retorna true si son numeros tiangulares", () => {
            expect(numericalSeries.isTriangular(1)).toBe(true);
            expect(numericalSeries.isTriangular(3)).toBe(true);
            expect(numericalSeries.isTriangular(6)).toBe(true);
        });

        it("retorna false si no son numeros triangulares", () => {
            expect(numericalSeries.isTriangular(2)).toBe(false);
            expect(numericalSeries.isTriangular(4)).toBe(false);
            expect(numericalSeries.isTriangular(5)).toBe(false);
        });
    });

    //ISFIBONACCI

    describe("isFibonacci", () => {
        it("retorna true si son numeros Fibonacci", () => {
            expect(numericalSeries.isFibonacci(1)).toBe(true);
            expect(numericalSeries.isFibonacci(2)).toBe(true);
            expect(numericalSeries.isFibonacci(3)).toBe(true);
        });

        it("retorna false si no son numeros Fibonacci", () => {
            expect(numericalSeries.isFibonacci(4)).toBe(false);
            expect(numericalSeries.isFibonacci(6)).toBe(false);
            expect(numericalSeries.isFibonacci(7)).toBe(false);
        });
    });

    //PRIMO

    describe("primo", () => {
        it("retorna el enésimo número primo", () => {
            expect(numericalSeries.primo(1)).toBe(2);
            expect(numericalSeries.primo(2)).toBe(3);
            expect(numericalSeries.primo(3)).toBe(5);
            expect(numericalSeries.primo(4)).toBe(7);
            expect(numericalSeries.primo(5)).toBe(11);
            expect(numericalSeries.primo(6)).toBe(13);
            expect(numericalSeries.primo(7)).toBe(17);
            expect(numericalSeries.primo(8)).toBe(19);
            expect(numericalSeries.primo(9)).toBe(23);
            expect(numericalSeries.primo(10)).toBe(29);
        });
    });

    //TRIANGULAR

    describe("triangular", () => {
        it("retorna el enésimo número triangular", () => {
            expect(numericalSeries.triangular(1)).toBe(1);
            expect(numericalSeries.triangular(2)).toBe(3);
            expect(numericalSeries.triangular(3)).toBe(6);
            expect(numericalSeries.triangular(4)).toBe(10);
            expect(numericalSeries.triangular(5)).toBe(15);
            expect(numericalSeries.triangular(6)).toBe(21);
            expect(numericalSeries.triangular(7)).toBe(28);
            expect(numericalSeries.triangular(8)).toBe(36);
            expect(numericalSeries.triangular(9)).toBe(45);
            expect(numericalSeries.triangular(10)).toBe(55);
        });
    });

    //FIBONACCI

    describe("fibonacci", () => {
        it("retorna el enésimo numero fibonacci", () => {
            expect(numericalSeries.fibonacci(1)).toBe(1);
            expect(numericalSeries.fibonacci(2)).toBe(1);
            expect(numericalSeries.fibonacci(3)).toBe(2);
            expect(numericalSeries.fibonacci(4)).toBe(3);
            expect(numericalSeries.fibonacci(5)).toBe(5);
            expect(numericalSeries.fibonacci(6)).toBe(8);
            expect(numericalSeries.fibonacci(7)).toBe(13);
            expect(numericalSeries.fibonacci(8)).toBe(21);
            expect(numericalSeries.fibonacci(9)).toBe(34);
            expect(numericalSeries.fibonacci(10)).toBe(55);
        });
    });

})