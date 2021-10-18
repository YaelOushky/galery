'use strict'

var gProjs


function creatProjs() {
    var projs = [
        {
            id: makeId(), //wM5
            name: "Minesweeper",
            title: "Welcome to Minesweeper Online",
            desc: `Playing minesweeper is our passion. 
            That's why we strive to make it the greatest game in the world!Select
             a difficulty level to challenge yourself, and enjoy the game! 
             Rules Minesweeper rules are very simple. The board is divided 
             into cells, with mines randomly distributed. 
             To win, you need to open all the cells. The number on a cell 
             shows the number of mines adjacent to it. Using this information,
              you can determine cells that are safe, and cells that contain mines.
               Cells suspected of being mines can be marked with a flag using the
                right mouse button.`,
            url: "https://yaeloushky.github.io/mineSweeper/",
            publishedAt: 'JANUAR',
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: makeId(),
            name: "Touch The Nums",
            title: "Welcome to Touch The Nums Online",
            desc: `Touch Numbers Game is a math game for free. Train your brain,
             perception and reaction skills!
            The rules are simple: Try to remove all 25 numbers from the screen.
             Touch all the numbers from the smallest to the biggest number.
            You have only one minute for the game`,
            url: " https://yaeloushky.github.io/touch-nums/",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: makeId(),
            name: "Pacman",
            title: "PAC-MAN introduces Story Mode",
            desc: `Travel on an exciting journey: experience various maze 
            designs with new obstacles and power-ups in an effort to eat 
            all the pac-dots and avoid the pesky Ghost Gang. Unlock, restore,
             and customize your new arcade cabinets and build the greatest 
             neighborhood arcade`,
            url: "https://yaeloushky.github.io/pacman-game/",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: makeId(),
            name: "Sokoban",
            title: "Better push those boxes",
            desc: "lorem ipsum lorem ipsum lorem ipsum",
            url: "projs/sokoban",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: makeId(),
            name: "Sokoban",
            title: "Better push those boxes",
            desc: "lorem ipsum lorem ipsum lorem ipsum",
            url: "projs/sokoban",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: makeId(),
            name: "Sokoban",
            title: "Better push those boxes",
            desc: "lorem ipsum lorem ipsum lorem ipsum",
            url: "projs/sokoban",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        }
    ]
    gProjs = projs
}

function getProjById(projId) {
    return gProjs.find(proj => {
        return proj.id === projId
    })
}

function getProjs() {
    return gProjs
}