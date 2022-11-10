class Graph {
    adjacencyList: any;
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex: any) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1: any, v2: any) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(vertex1: any, vertex2: any) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
            (v: any) => v !== vertex2
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            (v: any) => v !== vertex1
        );
    }

    removeVertex(vertex: any) {
        while(this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    depthFirstRecursive(start: any) {
        const result: string[] = [];
        const visited: any = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex: any) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach((neighbor: any) => {
                if (!visited[neighbor]) {
                    return dfs(neighbor);
                }
            });
        })(start);

        return result;
    }

    depthFirstIterative(start: any) {
        const stack = [start];
        const result: string[] = [];
        const visited: any = {};
        let currentVertex: any;

        visited[start] = true;
        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor: any) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

    breadFirst(start: any) {
        const queue = [start];
        const result: string[] = [];
        const visited: any = {};
        let currentVertex: any;

        visited[start] = true;
        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach((neighbor: any) => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")

const depthFirstRecursive = g.depthFirstRecursive("A");
const depthFirstIterative = g.depthFirstIterative("A");
const breadFirst = g.breadFirst("A");
console.log({
    depthFirstRecursive,
    depthFirstIterative,
    breadFirst
});