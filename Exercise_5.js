let students = [
    { name: "Ivan", score: 5 },
    { name: "Dimitar", score: 5.5 },
    { name: "Kristian", score: 4 },
    { name: "Valentin", score: 6 },
    { name: "Veselin", score: 3 },
    { name: "Genadi", score: 5 },
    { name: "Yavor", score: 3 },
    { name: "Marin", score: 5.5 },
    { name: "Kalin", score: 3 },
    { name: "Yavor", score: 6 }
];

let otlichnici = [];

for (let i = 0; i < students.length; i++) {
    if (students[i].score > 5.5) {
        otlichnici.push(students[i].name);
    }

}

console.log(otlichnici);


