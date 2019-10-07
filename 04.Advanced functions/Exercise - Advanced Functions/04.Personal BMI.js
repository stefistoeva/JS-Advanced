function solve(name, age, weight, height) {
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: Math.round(weight / Math.pow(height / 100, 2)),
        status: ``
    };

    person.status = person.BMI < 18.5 ? "underweight" 
        : person.BMI < 25 ? "normal" 
        : person.BMI < 30 ? "overweight" 
        : "obese";

    if(person.status === "obese") {
        person.recommendation = "admission required";
    }
    
    return person;
}

console.log(solve("Peter", 29, 155, 182));
