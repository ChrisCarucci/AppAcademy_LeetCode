

// Two Sum


let twoSum = (array, sum) => {
    let map = new Map();
    
    for(let i=0;i < array.length; i++){
        let target = sum - array[i]
        let compliment = target - array[i];
        if(map.has(target)) {
          return [i, map.get(target, i)]
        }
        map.set(array[i], i)
    }
  }


  // Count Islands

  function numIslands(matrix) {

    // Create a visited set to store visited nodes
    let visited = new Set();
    // Initialize count to 0
    let count = 0;
    // Iterate through all indices in matrix
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[0].length; col++) {
        // If an index contains a 1 and has not been visited, 
        if (matrix[row][col] === 1 && !visited.has([row, col].toString())) {
          // increment island count and start traversing neighbors
          count++;
          // Initialize a stack with current index
          let stack = [[row, col]];
          // Add stringified version of current index to the visited set
          visited.add(stack[stack.length - 1].toString());
          // While stack contains elements
          while (stack.length) {
            // Pop element from stack
            let currNode = stack.pop();
            // Get valid neighbors of current element
            let neighbors = getNeighbors(currNode[0], currNode[1], matrix);
            // Iterate over neigbors
            neighbors.forEach(neighbor => {
              // If neighbor has not been visited
              if (!visited.has([neighbor[0], neighbor[1]].toString())) {
                // Add neighbor to stack
                stack.push(neighbor);
                // Mark neighbor as visited
                visited.add(neighbor.toString());
              }
            })
          }
        }
      }
  
    }
    // Return island count
    return count;
  }


  // Find Town Judge

  var findJudge = function(n, trust) {
    const Trusted = new Array(n+1).fill(0);
    for(let [i,j] of trust) {
        Trusted[i] -= 1
        Trusted[j] += 1
    }
    
    for(let i = 1; i < Trusted.length; i++) {
        if ((n-1) === Trusted[i]) {
            return i;
        }
    }
    return -1
};