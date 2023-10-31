function whatIsInAName(collection, source) {

    const filteredObjects = []

    collection.forEach(element => {
        for(let c in element) console.log(element[c], source[c])
    })
    
    // console.log(filteredObjects)
    return filteredObjects
    
};

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 })