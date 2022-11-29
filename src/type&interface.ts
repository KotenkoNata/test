
// Product : price, isNew, isSale, title
// Vehicle : wheels, year, brand
// Car: type, model +Product, +Vehicle

interface IProduct {
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string
}

interface IVehicle {
    wheels: string,
    year: number,
    brand: string
}

interface ICar extends IProduct, IVehicle{
    type: string,
    model: string
}

const newCar: ICar = {
    price: 1,
    isNew: true,
    isSale: true,
    title: "New brand car",
    wheels: "Great",
    year: 2000,
    brand: "BMW",
    type: "Test",
    model: "A"
}

type Product = {
    price: number,
    isNew: boolean,
    isSale: boolean,
    title: string
}

type Vehicle = {
    wheels: string,
    year: number,
    brand: string
}

type Car = {
    type: string,
    model: string
} & Product & Vehicle;

const newCar2: Car = {
    price: 1,
    isNew: false,
    isSale: true,
    title: "New brand car",
    wheels: "Great",
    year: 2000,
    brand: "BMW",
    type: "Test",
    model: "A"
}