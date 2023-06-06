function whatIsInAName(collection, ...source) {
    const iterator = collection.filter((element, index) => {
        return source.map((value, key) => {
            console.log(Object.keys(value))
            return value
        })
    });
    console.log(iterator)
    // return iterator;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2});

