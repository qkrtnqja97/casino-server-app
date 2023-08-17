function getSpinRoulette() {
    return getRandomInt(0, 37) * 9.72;
}

function getRandomInt() {
    return Math.floor(Math.random() * (37 - 0 + 1)) + 0;
}

module.exports = {
    getSpinRoulette,
};
