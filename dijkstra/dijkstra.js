const findLowestCodeNode = (costs, processed) => {
    let lowestCost = Math.pow(10, 1000);
    let lowestCostNode = undefined;
    for (let node of Object.keys(costs)) {
        const cost = costs[node];
        if (cost < lowestCost && processed[node] === undefined) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

const findShortedPath = () => {
    const graph = {};
    graph["DC"] = {
        "New York": 600,
        "Phill": 200
    };
    graph["New York"] = {
        "Buffalo": 100
    };
    graph["Philly"] = {
        "New York": 300,
        "Buffalo": 500
    }
    graph["Buffalo"] = {};

    const infinity = Math.pow(10, 1000);
    const costs = {
        "New York": 600,
        "Philly": 200,
        "Buffalo": infinity
    };

    const parents = {
        "New York": "DC",
        "Philly": "DC",
        "Buffalo": undefined
    };

    const processed = {};

    let node = findLowestCodeNode(costs, processed);
    while (node !== undefined) {
        const cost = costs[node];
        const neighbors = graph[node];
        for (let n of Object.keys(neighbors)) {
            const newCost = cost + neighbors[n];
            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed[node] = true;
        node = findLowestCodeNode(costs, processed);
    }
    let activeNode = "Buffalo";
    let nodeBefore = parents["Buffalo"];
    const reverseOrder = [];
    let i = 0;
    while (activeNode !== "DC") {
        reverseOrder[i] = [activeNode, nodeBefore];
        activeNode = nodeBefore;
        nodeBefore = parents[nodeBefore];
        i++;
    }

    // print out results
    for (let i = reverseOrder.length - 1; i >= 0; i--) {
        console.log(`${reverseOrder[i][1]} --> ${reverseOrder[i][0]}`);
    }
}

findShortedPath();

//          NEW YORK
//        /600 |    \100
// DC          | 300   BUFFALO
//        \200 |    /500
//           PHILLY


// Shortest path => DC -> PHILLY -> NEW YORK -> BUFFALO