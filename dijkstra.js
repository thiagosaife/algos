const unvisited = ['A', 'B', 'C', 'D', 'E'];
// This graph was inspired by this video https://www.youtube.com/watch?v=pVfj6mxhdMw
const graph = {
  A: { B: 6, D: 1 },
  B: { A: 6, C: 5, D: 2, E: 2 },
  C: { B: 5, E: 5 },
  D: { A: 1, B: 2, E: 1 },
  E: { B: 2, C: 5, D: 1 },
};

function Dijkstra (graph, source) {
  const distances = {};
  for (const node in graph) { // set initial state of distances object
    distances[node] = Infinity; // set initial distance value to infinity
  }
  distances[source] = 0; // set distance from source to source to zero
  while (unvisited.length > 0) { // while there are nodes to visit
    const smallest = findSmallestNode(distances, unvisited); // find the nearest node
    unvisited.splice(unvisited.indexOf(smallest), 1); // remove the nearest node from unvisited array
    for (const neighbor in graph[smallest]) { // for each of the nearest node's neighbors
      const alt = distances[smallest] + graph[smallest][neighbor]; // calculate the distance to that neighbor
      if (alt < distances[neighbor]) { // if the calculated distance is less than the stored distance
        distances[neighbor] = alt; // update the stored distance
      }
    }
  }
  return distances;
}
// time complexity: O(n^2)
// space complexity: O(n)

function findSmallestNode (distances, unvisited) {
  let smallest = null; // set the smallest node to null
  for (const node in distances) { // for each node in the distances object
    if (unvisited.includes(node) && (smallest === null || distances[node] < distances[smallest])) { // if the node is in the unvisited array and either the smallest node is null or the distance to the current node is less than the distance to the smallest node
      smallest = node; // set the smallest node to the current node
    }
  }
  return smallest;
}
// time complexity: O(n)
// space complexity: O(1)

console.log(Dijkstra(graph, 'A'));