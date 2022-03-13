// Finds "best set of stations" using greedy/appx. algorithm.
const findLocationForStations = (statesToCover, stations) => {
    const finalStations = new Set();

    while (statesToCover.size !== 0) {
        let bestStation = undefined;
        let statesCovered = new Set();
        for (const station in stations) {
            const statesForStation = stations[station];
            let covered = new Set([...statesToCover].filter(state => statesForStation.has(state)));
            if (covered.size > statesCovered.size) {
                bestStation = station;
                statesCovered = covered;
            }
        }
        statesToCover = new Set([...statesToCover].filter(state => !statesCovered.has(state)));
        finalStations.add(bestStation);
    }

    return finalStations;
}

let statesToCover = new Set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"]);

const stations = {
    "stOne": new Set(["id", "nv", "ut"]),
    "stTwo": new Set(["wa", "id", "mt"]),
    "stThree": new Set(["or", "nv", "ca"]),
    "stFour": new Set(["nv", "ut"]),
    "stFive": new Set(["ca", "az"]),
};

const selectedStations = findLocationForStations(statesToCover, stations);
console.log(selectedStations);
