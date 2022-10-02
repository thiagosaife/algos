let unvisited = ['A', 'B', 'C', 'D', 'E'];
let graph = {
  A: { B: 6, D: 1 },
  B: { A: 6, C: 5, D: 2, E: 2 },
  C: { B: 5, E: 5 },
  D: { A: 1, B: 2, E: 1 },
  E: { B: 2, C: 5, D: 1 },
};

function Dijkstra (graph, source) {
  let distances = {}; // distances object
  for (let node in graph) { // set initial state of distances object
    distances[node] = Infinity; // set initial distance value to infinity
  }
  distances[source] = 0; // set distance from source to source to zero
  while (unvisited.length > 0) { // while there are nodes to visit
    let smallest = findSmallestNode(distances, unvisited); // find the nearest node
    unvisited.splice(unvisited.indexOf(smallest), 1); // remove the nearest node from unvisited array
    for (let neighbor in graph[smallest]) { // for each of the nearest node's neighbors
      let alt = distances[smallest] + graph[smallest][neighbor]; // calculate the distance to that neighbor
      if (alt < distances[neighbor]) { // if the calculated distance is less than the stored distance
        distances[neighbor] = alt; // update the stored distance
      }
    }
  }
  return distances; // once all nodes have been visited, return the distances object
}
// time complexity: O(n^2)
// space complexity: O(n)

function findSmallestNode (distances, unvisited) {
  let smallest = null; // set the smallest node to null
  for (let node in distances) { // for each node in the distances object
    if (unvisited.includes(node)) { // if the node is in the unvisited array
      if (smallest === null) { // if the smallest node is still null
        smallest = node; // set the smallest node to the current node
      } else { // otherwise
        if (distances[node] < distances[smallest]) { // if the current node's distance is less than the smallest node's distance
          smallest = node; // set the smallest node to the current node
        }
      }
    }
  }
  return smallest; // return the smallest node
}
// time complexity: O(n)
// space complexity: O(1)

console.log(Dijkstra(graph, 'A'));