function solve(input) {
    const sortedPeople = input
        .sort((a, b) => {
            return a.length - b.length || a.localeCompare(b);
    });

    let people = Array.from(new Set(sortedPeople));

    console.log(people.join(`\n`));
}

solve(['Ashton',
'Kutcher',
'Ariel',
'Lilly',
'Keyden',
'Aizen',
'Billy',
'Braston']
);
