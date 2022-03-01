function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let results = {}

let pers = ["sam", "john", "sarah", "max", "jack", "axel", "kevin", "dave", "jimmy", "ricky", 'tom', "patrick"]

pers.forEach(e => {
   results[e]= randomNumber(1, 1000)
});

let length = Object.values(results)

let minLength = Math.min(...length)

Object.entries(results).map(
    ([key, value]) => {
        if (value === minLength){
            console.log(results)
            console.log(`La personne qui dormira sans tente est : ${key}`);
        }
    }
)
