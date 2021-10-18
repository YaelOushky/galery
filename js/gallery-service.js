'use strict'

var gProjs

function creatProjs() {
    var projs = [
        {
            id: makeId(),
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
            name: "Collect the Balls",
            title: "Welcome to Collect the Balls Online",
            desc: `Multiply your balls as best you can in this awesome physics-based 
            puzzle game! You begin each level with 3 balls. Move the cup and pay mind to the
            different multipliers that will increase your ball count. A little math and a steady
            hand will maximize your ball count and earn you three stars on each level!`,
            url: "https://yaeloushky.github.io/Collect-the-Balls/",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: makeId(),
            name: "Book shop",
            title: "Welcome to Book shop Online",
            desc: `An online book is a resource in book-like form that is only
            available to read on the Internet. It differs from the common idea of an
            e-book, which is usually available for users to download and read locally on 
            a computer, smartphone or on an e-reader. "Book-like" means: information is presented
            in a page format; pages are normally available to read sequentially (though "flipping" to
            another page is possible using a mouse, keyboard or other controllers); and pages are read
            passively, with little or no interaction or multimedia. This contrasts with a text which a 
            user is reading on an interactive Web 2.0 website, which usually enables the user to click on 
            online links, look up words or keywords online, etc. "Online" means the content may only be read 
            while the reader is connected to the Internet. Thus the reader's experience with an online book is
            similar to reading a printed book, except that the book is read at a computer and is only accessible
            while the reader is online.`,
            url: "https://yaeloushky.github.io/Book-shop/",
            publishedAt: 1448693940000,
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: makeId(),
            name: "In picture",
            title: "Welcome to In picture Online",
            desc: `Get ready to play a fun collection of word games to challenge your brain, improve your 
            spelling, and learn new words!  Your task is to guess the words from the 4 pics! 
             There are 4 pictures and all you have to do is guess that 1 word, sounds easy? Enjoy a fun, 
             fast-paced, colorful, and challenging brain game ! Brain games are the brain food you've been
              craving but didn’t know! Challenge your self and play over 2500+ Levels.`,
            url: " https://yaeloushky.github.io/In-picture/",
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