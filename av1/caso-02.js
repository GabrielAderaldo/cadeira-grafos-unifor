
const graph1 = {
    "A": ["B", "C", "D"],
    "B": ["E", "F"],
    "C": ["G"],
    "D": ["H"],
    "E": [],
    "F": [],
    "G": [],
    "H": []
};

// Visualização
//     A
//   / | \
//  B  C  D
// /|   |   \
//E F  G   H

const graphWithCycle = {
    "A": ["B", "C", "D"],
    "B": ["E", "F", "G"],
    "C": ["H", "I"],
    "D": ["J"],
    "E": ["K", "L"],
    "F": ["M"],
    "G": ["N"],
    "H": ["O", "P"],
    "I": ["Q"],
    "J": ["R", "S"],
    "K": ["T"],
    "L": ["U"],
    "M": ["V"],
    "N": ["W", "X"],
    "O": ["Y"],
    "P": ["Z"],
    "Q": ["A"], // Ciclo: A -> C -> I -> Q -> A
    "R": [],
    "S": [],
    "T": [],
    "U": [],
    "V": [],
    "W": [],
    "X": [],
    "Y": [],
    "Z": []
};

// Visualização do Ciclo: A -> C -> I -> Q -> A



function dfs(graph,init){
    let visited = []
    let queue = []
    const predecessor = {}
    
    visited.push(init)
    graph[init].forEach(element => {
        predecessor[element] = init
        queue.push(element)
    });

    while(queue.length != 0){
        const index = queue.shift()
        visited.push(index)

        for(let element of graph[index]){
            if(!visited.includes(element) && !queue.includes(element)){
                queue.push(element)
                predecessor[element] = index
            }else{
                return true
            }
        }
    }
    return false
}

console.log(dfs(graphWithCycle,"A"))