function solve(...input) {
    let [ output, typesOfArgs ] = input
        .reduce((previous, current) => {
        let [ output, argumentTypes] = previous;
        let typeOfArg = typeof current;
        output.push(`${typeOfArg}: ${current}`);

        if(!argumentTypes.hasOwnProperty(typeOfArg)) {
            argumentTypes[typeOfArg] = 0;
        }
        argumentTypes[typeOfArg]++;

        return previous;
    }, [[], {}]);
    
    return output.join('\n') + '\n' + Object.entries(typesOfArgs)
    .sort((a, b) => b[1] - a[1])
    .map(([type, count]) => `${type} = ${count}`)
    .join("\n")    
}

console.log(solve('cat', 42, function () { console.log('Hello world!'); }));
