export const engine = async() => {
    try {
        await cycleEngine();
    } catch (error) {
        console.log(error);
    }
}

const cycleEngine = async() => {
    // Does stuff
    setTimeout( async() => await cycleEngine(), 10000);
};