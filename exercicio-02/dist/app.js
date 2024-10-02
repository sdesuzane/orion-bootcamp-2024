"use strict";
//array inicial
let list = [
    { "id": 1, "name": "Ada Lovelace", "bio": "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { "id": 2, "name": "Alan Turing", "bio": "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { "id": 3, "name": "Nikola Tesla", "bio": "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { "id": 4, "name": "Nicolau Copérnico", "bio": "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
// função que retorne a bio do id passado - imperativo
function userBio(id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i]["id"] === id) {
            return list[i]["bio"];
        }
    }
}
// função que retorne a bio do id passado - functional   
function userBio2(id) {
    var _a;
    return (_a = list.find(item => item["id"] === id)) === null || _a === void 0 ? void 0 : _a["bio"];
}
// função que retorne o name do id passado - imperativo
function userName(id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i]["id"] === id) {
            return list[i]["name"];
        }
    }
}
// função que retorne o name do id passado - funcional
function userName2(id) {
    var _a;
    return (_a = list.find(item => item["id"] === id)) === null || _a === void 0 ? void 0 : _a["name"];
}
// função que apague um item da lista a partir de um id passado - imperativo
function deleteUser(id) {
    for (let i = 0; i < list.length; i++) {
        if (list[i]["id"] === id) {
            list.splice(i, 1);
        }
    }
}
// função que apague um item da list a partir de um id passado - funcional
function deleteUser2(id) {
    list = list.filter(item => item["id"] !== id);
}
// função que altere a bio ou o name a partir de um id passado - imperativo
function changeUser(id, newName, newBio) {
    for (let i = 0; i < list.length; i++) {
        if (list[i]["id"] === id) {
            if (newName)
                list[i]["name"] = newName;
            if (newBio)
                list[i]["bio"] = newBio;
        }
    }
}
// função que altere a bio ou o name a partir de um id passado - funcional
function changeUser2(id, newName, newBio) {
    list = list.map(item => item.id === id ? { id: item.id, name: newName !== null && newName !== void 0 ? newName : item.name, bio: newBio !== null && newBio !== void 0 ? newBio : item.bio } : item);
}
console.log(userBio(1));
console.log(userBio2(2));
console.log(userName(1));
console.log(userName2(2));
deleteUser(1);
console.log(list);
deleteUser2(2);
console.log(list);
changeUser(4, "Suzane Terto");
console.log(list);
changeUser2(3, "Suzane Nascimento");
console.log(list);
