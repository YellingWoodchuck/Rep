window.onload = function() {

    const d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();

    var date1 = new Date();
    var date2 = new Date("05/26/2023");
    var date3 = new Date("01/16/2023");
    var Difference_In_Time = date2.getTime() - date1.getTime();
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
    document.getElementById("counter").innerHTML = template2 + Difference_In_Days;
    
    currentweek = Math.floor(Math.ceil((date1 - date3) / (1000 * 3600 * 24)) / 7) + 1;
    weeknumber = Math.floor(Math.ceil(((date1 - date3) / (1000 * 3600 * 24)) / 7)) % 2;
    
    document.getElementById("CurrentDay").innerHTML = template + month + " " + date + ", " + currentweek + ". nedēļa";

    var dom = document.getElementById("tbody");
    const src = [];
    arrayToObj(subjectMon, src);
    arrayToObj(subjectTue, src);
    arrayToObj(subjectWed, src);
    arrayToObj(subjectThu, src);
    arrayToObj(subjectFri, src);
    tableConstr(src, dom);
    if (weeknumber == 0) {
        document.getElementById("even").style.color = "red";
    }
    else {
        document.getElementById("odd").style.color = "red";
    }
}

function Subject(name, time, week = 2, where, weekstart = 1, weekend = 18, weekstart2 = 1, weekend2 = 18) {
    this.name = name;
    this.time = time;
    this.aud = where;
    this.weekstart = weekstart;
    this.weekend = weekend;
    this.weekstart2 = weekstart2;
    this.weekend2 = weekend2;
    this.week = week;
}

function createNode(parent, element, colspan = 1, day = 10) {
    let data = document.createElement("td");
    data.setAttribute("colspan", colspan);
    let d = new Date();
    if (day == d.getDay()-1) {
        data.setAttribute("style", "color: red");
        data.setAttribute("class", "current");
    }
    let node = document.createTextNode(element);
    data.appendChild(node);
    parent.appendChild(data);
}

function weekCheck(element, weekstart = 1, weekend = 18, currentweek) {
    let check = false
    if (!(currentweek >= weekstart && currentweek <= weekend)) {
        element.setAttribute("style", "text-decoration-line: line-through");
    }
    if (currentweek >= weekstart && currentweek <= weekend) {
        element.setAttribute("style", "text-decoration-line: none");
        check = true;
    }
    return check;
}

function arrayToObj(resource, output) {
    var out = [];
    resource.forEach(element => {
        var s = new Subject(element[0], element[1], element[2], element[3], element[4], element[5], element[6], element[7]);
        out.push(s);
    }
    )
    output.push(out);
}

function tableConstr(input, dom) {
    let i = 0;
    let d = new Date();
    let dd = d.getDay();
    dd--;
    input.forEach(element => {
        var row = document.createElement("tr");
        createNode(row, days[i], 8, i);
        dom.appendChild(row);
        element.forEach(element => {         
            if (element.week == 2 || element.week == 1) {
                row = document.createElement("tr");
                createNode(row, time[element.time]);
            }
            if (element.week == 2) {
                createNode(row, element.name, 3);
            }
            else {
                createNode(row, element.name);
            }
            createNode(row, element.aud);
            if (element.weekstart != 1 || element.weekend != 18) {
                if (element.weekstart2 != 1 || element.weekend2 != 18) {
                    createNode(row, element.weekstart + "-" + element.weekend + " / " + element.weekstart2 + "-" + element.weekend2);               
                    if (!weekCheck(row, element.weekstart, element.weekend, currentweek)) {
                        weekCheck(row, element.weekstart2, element.weekend2, currentweek);
                    }
                }
                else {
                    createNode(row, element.weekstart + "-" + element.weekend);
                    weekCheck(row, element.weekstart, element.weekend, currentweek);
                }
            }         
            if (i == (dd)) {
                row.setAttribute("class", "current");
            }
            if (element.week == 2 || element.week == 0) {
                dom.appendChild(row);
            }           
        }
        )
        i++;
    }
    )
}
