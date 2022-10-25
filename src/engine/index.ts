export const engine = async() => {
    try {
        console.log('Engine init.')
        await cycleEngine();
    } catch (error) {
        console.log(error);
    }
}

const cycleEngine = async() => {
    const cycleEach:number = 3600;
    // Does stuff
    console.log('Cycle completed.')
    setTimeout( async() => await cycleEngine(), cycleEach*1000);
};