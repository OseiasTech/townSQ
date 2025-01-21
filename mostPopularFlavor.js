function mostPopularFlavor(votes) {
    const voteCount = {};
  
    for (let vote of votes) {
      voteCount[vote] = (voteCount[vote] || 0) + 1;
    }
  
    let mostPopular = votes[0];
    for (let flavor in voteCount) {
      if (
        voteCount[flavor] > voteCount[mostPopular] || 
        (voteCount[flavor] === voteCount[mostPopular] && flavor < mostPopular)
      ) {
        mostPopular = flavor;
      }
    }
  
    return parseInt(mostPopular);
  }
  
  console.log(mostPopularFlavor([0, 2, 3, 4, 4])); // Output: 4
  console.log(mostPopularFlavor([1, 1, 1, 3, 4, 4])); // Output: 1
  console.log(mostPopularFlavor([1, 1, 3, 0, 1, 4, 0, 0])); // Output: 0
  