function whatIsInAName(collection, ...source) {
    const newArr = [];
    collection.map((element, index) => {
        source.map((value, key) => {
            for(let c in element) {
                for(let i in value) {
                    console.log(element[c].charAt(source[i]));
                };
            };
            return source;
        });
        return element;
    });
    console.log(newArr);
    return newArr;
};

whatIsInAName([{"a": 1, "b": 2, "c": 3, "d": 9999}], {"a": 1, "b": 9999, "c": 3});

