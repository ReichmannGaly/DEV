let mot_le_plus_long = (array) => {
    let temp = []
    array.forEach(element => {
        temp.push(element.length)
    });
    return Math.max(...temp);
}
let tableau = ["tableau", "avoir", "anticonstitutionnellement", "partage", "groupe"]
console.log(mot_le_plus_long(tableau));