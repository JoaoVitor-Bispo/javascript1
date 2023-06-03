function whatIsInAName(collection, ...source) {
    const iterator = collection.filter((element, index) => {
        let arrayObj = Object.entries(element)
        return element == source.map((value, key) => {
            let entries = Object.entries(value)
            console.log(arrayObj)
        })
    });

    // return iterator;
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2});

