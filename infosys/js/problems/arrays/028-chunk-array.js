// 28. Split an array into consecutive chunks of size chunkSize.
function chunkArray(values, chunkSize) {
    if(chunkSize<=0){
      return [];
    }

    const chunks = []

    for(let i=0;i<values.length;i+=chunkSize){
      chunks.push(values.slice(i,i+chunkSize))
    }
  
    return chunks;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]