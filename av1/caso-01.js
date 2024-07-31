const graph_init = {
    "A": ["B", "E", "H"],
    "B": ["C", "D"],  // Removemos "A" para evitar o ciclo A-B-A
    "C": [],         // "C" só é acessível a partir de "B"
    "D": [],         // "D" só é acessível a partir de "B"
    "E": ["F"],      // Removemos "A" e "G" para evitar ciclos
    "F": [],         // "F" só é acessível a partir de "E"
    "G": [],         // "G" só é acessível a partir de "E"
    "H": []          // Removemos "A" para evitar o ciclo A-H-A
};



function dfs(graph,init,target){
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
        if(index == target){
            console.log("PacMan encontrado...")
            const path = []
            let step = target
            while (step) {
                path.unshift(step)
                step = predecessor[step]
            }
            console.log("Caminho mais curto:", path)
            return
        }
        graph[index].forEach(element => {
            if(!visited.includes(element) && !queue.includes(element)){
                queue.push(element)
                predecessor[element] = index
            }
        })
    }
    return console.log("Não foi possivel achar o elemento no grafo")
}

dfs(graph_init,"A","D")