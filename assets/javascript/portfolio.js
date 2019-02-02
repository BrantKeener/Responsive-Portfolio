// Change sequelize on hover

// document.addEventListener('DOMContentLoaded', function () {
//     const seqDisplay = document.getElementById('sequelize');
//     let displayWord = false;
//     seqDisplay.addEventListener.onmouseover = () => {
//         console.log("hi");
//         displayWord = true;
//     };
//     seqDisplay.onmouseleave = () => {
//         displayWord = false;
//     };
//     if(displayWord === true) {
//         seqDisplay.src = 'assets/images/sequelizeWord.png';
//     } else {
//         seqDisplay.src = 'assets/images/sequelize.png';
//     }
// });

hoverSequelize = (element) => {
    if(element === undefined) {
        unhoverSequelize();
    } else {
        element.src = "assets/images/sequelizeWord.png";
        setTimeout(hoverSequelize, 1000);
    };
};

unhoverSequelize = () => {
    element = document.getElementById('sequelize');
    element.src = "assets/images/sequelize.png";
};