function solve(input) {
    let systems = new Map();
    for(let line of input) {
        let [system, component, subComponent] = line.split(' | ');

        if(!systems.has(system)) {
            systems.set(system, new Map()); 
        }

        if(!systems.get(system).has(component)) {
            systems.get(system).set(component, []);
        }
        systems.get(system).get(component).push(subComponent);
    }

    let systemSorted = new Map(Array.from(systems)
        .sort((a, b) => {
            return a[0] > b[0];
        })
        .sort((a, b) => {
            return b[1].size - a[1].size;
        })
    );

    for(let system of systemSorted) {
        console.log(system[0]);
        
        let componentsSorted = new Map(Array.from(system[1])
            .sort((a, b) => {
                return b[1].length - a[1].length;
            }));

        for (let component of componentsSorted) {
                console.log(`|||${component[0]}`);
    
            for (let subComponend of component[1]) {
                console.log(`||||||${subComponend}`);
            }
        }
    }
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']
);
