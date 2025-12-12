const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the hero\'s name: ', (name) => {
    let heroName = name;

    rl.question('Please enter the hero\'s XP: ', (answer) => {
        let xp = parseInt(answer);
        const medals = {
            "Ferro": [0, 1000],
            "Bronze": [1001, 2000],
            "Prata": [2001, 5000],
            "Ouro": [5001, 7000],
            "Platina": [7001, 8000],
            "Ascendente": [8001, 9000],
            "Imortal": [9001, 10000],
            "Radiante": [10001, Infinity]
        };

        function getNivel(xp) {
            for (let medal in medals) {
                if (xp >= medals[medal][0] && xp <= medals[medal][1]) {
                    return medal;
                }
            }
        }

        console.log("O Herói de nome " + heroName + " está no nível de " + getNivel(xp));
        rl.close();
    });

});

