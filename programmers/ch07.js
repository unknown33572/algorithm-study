function solution(my_string, is_suffix) {
    let array = [];
    for(let i = 0; i < my_string.length; i++) {
        array.push(my_string.substr(i))
    }
    return array.includes(is_suffix) ? 1 : 0
}