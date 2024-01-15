function readInputFile(filePath) {
    const adjacencyMatrix = [
  [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0]
  https://<TOKEN>@github.com/<username>/<repository>.git
        https://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@github.com/hasannkomann/algo_hw_emir_omer_hasan.git          
];
    const bandwidthMatrix = [];
    const delayMatrix = [];
    const reliabilityMatrix = [];

    return [adjacencyMatrix, bandwidthMatrix, delayMatrix, reliabilityMatrix];
}

function dijkstraAlgorithm(graph, source, destination) {
    const n = graph.length;
    const distances = new Array(n).fill(Infinity);
    distances[source] = 0;
    const visited = new Set();

    while (visited.size < n) {
        let minDistance = Infinity;
        let currentNode = null;

        for (let i = 0; i < n; i++) {
            if (!visited.has(i) && distances[i] < minDistance) {
                minDistance = distances[i];
                currentNode = i;
            }
        }

        if (currentNode === null) {
            break;
        }

        visited.add(currentNode);

        for (let neighbor = 0; neighbor < n; neighbor++) {
            const weight = graph[currentNode][neighbor];
            if (weight > 0) {
                const distance = distances[currentNode] + weight;
                if (distance < distances[neighbor]) {
                    distances[neighbor] = distance;
                }
            }
        }
    }

    return distances[destination];
}

function bellmanFordAlgorithm(graph, source, destination) {
    const n = graph.length;
    const distances = new Array(n).fill(Infinity);
    distances[source] = 0;

    for (let _ = 0; _ < n - 1; _++) {
        for (let u = 0; u < n; u++) {
            for (let v = 0; v < n; v++) {
                const weight = graph[u][v];
                if (weight !== 0) {
                    const distance = distances[u] + weight;
                    if (distance < distances[v]) {
                        distances[v] = distance;
                    }
                }
            }
        }
    }

    for (let u = 0; u < n; u++) {
        for (let v = 0; v < n; v++) {
            const weight = graph[u][v];
            if (weight !== 0) {
                if (distances[u] + weight < distances[v]) {
                    throw new Error("Graph contains a negative weight cycle");
                }
            }
        }
    }

    return distances[destination];
}

function floydWarshallAlgorithm(graph) {
    const n = graph.length;
    const distances = graph.map(row => row.slice());

    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (distances[i][k] + distances[k][j] < distances[i][j]) {
                    distances[i][j] = distances[i][k] + distances[k][j];
                }
            }
        }
    }

    return distances;
}

function solution(inputFilePath, request) {
    const adjacencyMatrix = readInputFile(inputFilePath);

    const graph = createGraph(adjacencyMatrix);

    const [source, destination, bandwidthRequirement] = request;

    const dijkstraPath = dijkstraAlgorithm(graph, source, destination);
    const bellmanFordPath = bellmanFordAlgorithm(graph, source, destination);

    console.log("Dijkstra's Path:", dijkstraPath);
    console.log("Bellman-Ford Path:", bellmanFordPath);
}

const inputFilePath = "USNET.txt";
const request = ["source_node", "destination_node", 3];
solution(inputFilePath, request);
