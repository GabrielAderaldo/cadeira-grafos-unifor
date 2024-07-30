const initGraph = {
    "A":["B","E","H"],
    "B":["A","C","D"],
    "C":["B"],
    "D":["B"],
    "E":["A","F","G"],
    "F":["E"],
    "G":["G"],
    "H":["A"]
}


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



console.log(dfs(initGraph,"A"))