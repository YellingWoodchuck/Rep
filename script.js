window.onload = function() {

    const d = new Date();
    let month = months[d.getMonth()];
    let date = d.getDate();
    //document.getElementById("TimeLeft").innerHTML = template + month + " " + date;
    


    // JavaScript program to illustrate 
    // calculation of no. of days between two date 

    // To set two dates to two variables
    var date1 = new Date();
    var date2 = new Date("05/26/2023");

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

    //To display the final no. of days (result)
    document.getElementById("counter").innerHTML = template2 + Difference_In_Days;


    var date3 = new Date("01/16/2023");
    var text;
    currentweek = Math.floor(Math.ceil((date1 - date3) / (1000 * 3600 * 24)) / 7) + 1;
    weeknumber = Math.floor(Math.ceil((date1 - date3) / (1000 * 3600 * 24)) / 7) % 2 +1;
    
    document.getElementById("CurrentDay").innerHTML = template + month + " " + date + ", " + currentweek + ". nedēļa";

    var dom = document.getElementById("tbody");
    const mon = [];
    arrayToObj(subjectMon, mon);
    arrayToObj(subjectTue, mon);
    arrayToObj(subjectWed, mon);
    arrayToObj(subjectThu, mon);
    arrayToObj(subjectFri, mon);
    tableConstr(mon, dom);
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
    }
    let node = document.createTextNode(element);
    data.appendChild(node);
    parent.appendChild(data);
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
    input.forEach(element => {
        var row = document.createElement("tr");
        createNode(row, days[i], 8, i);
        dom.appendChild(row);
        i++;
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
                }
                else {
                    createNode(row, element.weekstart + "-" + element.weekend);
                }
            }
            if (element.week == 2 || element.week == 0) {
                dom.appendChild(row);
            }
            
        }
        )
    }
    )
}



