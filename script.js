class Car {
    constructor(year, brand, model, distance){
        this.year = year;
        this.brand = brand;
        this.model = model;
        this.distance = distance;
    }
}



class Service {
    constructor(Name, cars = []){
        this.Name = Name;
        this.cars = cars;
    }

    GetAllCars() {
        return this.cars;
    }

    addCar(year, brand, model, distance) {
        let newAuto = new Auto(year, brand, model, distance);
        this.autos.push(newAuto);
    }

    delCar(index) {
        this.cars.splice(index, 1);
    }

}

let CarService = new Service("Dupont Auto Service");

let yearInput = document.getElementById("year");
let brandInput = document.getElementById("brand");
let modelInput = document.getElementById("model");
let distanceInput = document.getElementById("distance");
let AddCarButton = document.getElementById("add-car");
let GetAllButton = document.getElementById("get-all-cars");
let DeleteButton = document.getElementById("delete-car");

AddCarButton.addEventListener("click", function(){
    CarService.addCar(yearInput.value, brandInput.value, modelInput.value, distanceInput.value);
    console.log(CarService);
});

GetAllButton.addEventListener("click", function(){
    console.log(CarService.GetAllCars());
});

DeleteButton.addEventListener("click", function(){
    CarService.delCar(0);
    console.log(CarService);
});

function displayCars() {
    let cars = CarService.GetAllCars();
    let carsDiv = document.getElementById("cars");
    carsDiv.innerHTML = "";
    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        let carDiv = document.createElement("div");
        carDiv.innerHTML = car.year + " " + car.brand + " " + car.model + " " + car.distance;
        carsDiv.appendChild(carDiv);
    }
}


