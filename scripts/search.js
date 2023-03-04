let dict = {};
for (let row in data) {
    if (row != 'laws') {
        for (let hex in data[row]) {
            for (let gk in data[row][hex]) {
                let element = data[row][hex][gk];
                let gk_name = Object.keys(element)[0];
                let name = element[gk_name].name;
                if (name != "" && name != "_" && name != "dE/dt")
                    dict[name] = hex + " " + gk_name;
            }
        }
    }
}

let input = document.getElementById("search");
let list = document.getElementById("list");
input.oninput = function() {
    let str = input.value.toLowerCase();
    list.innerHTML = "";
    if (str.length < 1)  // здесь можно изменить количество символов, при котором будет срабатывать поиск
        return;
    str = str.replaceAll('0','⁰').replaceAll('1','¹').replaceAll('2','²').replaceAll('3','³').replaceAll('4','⁴')
    .replaceAll('5','⁵').replaceAll('6','⁶').replaceAll('7','⁷').replaceAll('8','⁸').replaceAll('9','⁹').replaceAll('-','⁻')
    for (let name in dict) {
        if (name.toLowerCase().indexOf(str) != -1) {
            let li = document.createElement('li');
            li.innerHTML = "<span style=\"margin-right: auto;\">" + name + "</span><span>" + dict[name] + "</span>";
            list.append(li);
        }
    }
};
