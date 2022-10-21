export const engine = async() => {
    try {
        console.log('Engine init.')
        await cycleEngine();
    } catch (error) {
        console.log(error);
    }
}

const cycleEngine = async() => {
    // Does stuff
    console.log('Cycle completed.')
    setTimeout( async() => await cycleEngine(), 10000);
};