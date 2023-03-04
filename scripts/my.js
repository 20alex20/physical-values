/*var dict = {};
for (var row in data) {
  if (row == "laws")
    break;
  for (var lt in data[row]) {
    var elements = data[row][lt];
    //for (var i = 0; i < elements.length; i++) {
      for (var gk in elements[0]) {
        for (var element in elements[0][gk]) {
          var name = elements[0][gk]["name"];
          if (name != "") {
              console.log(name, JSON.stringify(elements[0][gk]));
            if (typeof dict[name] !== "undefined") {
              dict[name].push(lt + " " + gk);
            }
            else
              dict[name] = [lt + " " + gk];
          }
        }
      }
    //}
  }
}
console.log(JSON.stringify(dict));*/

var dict = {};
for (let row in data) {
    if (row != 'laws') {
        for (let hex in data[row]) {
            for (let gk in data[row][hex]) {
                var name = getNGK(data[row][hex],gk).name;
                if (name != "") {
                    var gk_name = Object.keys(data[row][hex][gk])[0];
                    console.log(JSON.stringify(data[row][hex][gk]));
                    if (typeof dict[name] !== "undefined")
                        dict[name].push(hex + " " + gk_name);
                    else
                        dict[name] = [hex + " " + gk_name];
                }
            }
        }
    }
}

var input = document.getElementById("search");
var listt = document.getElementById("list");
input.oninput = function() {
  var str = input.value;
  listt.innerHTML = "";
  if (str == "")
      return;
  //console.log(JSON.stringify(dict));
  for (var name in dict) {
    var q = 0
    if (name[0] == '(' && str[0] != '(')
      q = 1;
    if (name.substr(q, str.length).toLowerCase() == str.toLowerCase()) {
      var result = "";
      for (var i = 0; i < dict[name].length; i++) {
        let li = document.createElement('li');
        li.innerHTML = "<span style=\"margin-right: auto;\">" + name + "</span><span>" + dict[name][i] + "</span>";
        listt.append(li);
      }
    }
  }
};
