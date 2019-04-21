var itemList = [
    "Jannathan",
    "Miller",
    "Killer",
    "Sachin",
    "Kohli",
    "Raina",
    "Rohit",
    "Panth",
    "Axar"
];
window.onload = mainFun;

// add item
document.getElementById("addNew").addEventListener("click", addN, false);

function addN() {
    var a = document.getElementById("addFriend").value;
    itemList.push(a);
    mainFun();
}

// show html
function mainFun() {
    var html = "<h1>Friend List</h1><table>";
    for (var x = 0; x < itemList.length; x++) {
        html +=
            '<tr id="id' +
            x +
            '" data-row="' +
            x +
            '"><td>' +
            itemList[x] +
            '</td><td><a href="#" data-action="delete">Del</a></td><td><a href="#" data-action="edit">Edit</a></td></tr>';
    }
    document.querySelector(".output").innerHTML = html;

    // delete item
    var dad = document.querySelectorAll('[data-action="delete"]');
    for (var x = 0; x < dad.length; x++) {
        dad[x].addEventListener("click", function() {
            event.preventDefault();
            var iValue = this.closest("[data-row]").getAttribute("data-row");
            //this.parentElement.parentElement.remove(); avabeo kora jabe
            var r = itemList.splice(iValue, 1);
            mainFun();
        });
    }

    // edit item
    var update = document.querySelectorAll('[data-action="edit"]');
    for (var x = 0; x < update.length; x++) {
        update[x].addEventListener("click", function() {
            event.preventDefault();
            var row = this.closest("[data-row]"); // oi html elemenet ta show kore
            var rid = row.getAttribute("data-row"); // oi element ta to number index a ace sata bar kore
            row.style.backgroundColor = "Yellow";

            var td = row.firstElementChild;
            var input = document.createElement("input");
            input.type = "text";
            input.value = td.innerText;
            td.innerHTML = "";
            td.appendChild(input);
            input.focus();

            input.onblur = function() {
                td.removeChild(input);
                td.innerHTML = input.value;
                row.style.backgroundColor = "transparent";
            };
        });
    }
}