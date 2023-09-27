const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const time = ["08.15-09.50", "10.00-11.35", "12.30-14.05", "14.15-15.50", "16.00-17.35", "17.45-19.15"]
const src = [];
const template = "Diena: ";
const template2 = "Days before execution: ";
var currentweek;
var weeknumber;

// add according sequence - "Name", Timegap (time array), 0-even/1-odd/2-both week, start week, end week, start2, end2 if present. 
/* if even or odd without pair:
 ["", 3, 1, ""],
 ["TERMODINAMIKA UN SILTUMPĀRV.", 3, 0,"114"]

["ANGĻU VALODA", 3, 1, "215"],
["", 3, 0,""]
*/
const subjectMon = [
    ["KUĢU DĪZEĻIEK. UN TURBĪNAS", 0, 2, "125", 5, 18],
    ["MATEMĀTIKA", 1, 2, "306"],
    ["MATEMĀTIKA", 2, 2, "306"],
];
const subjectTue = [
    ["MATER. TEHNOL.", 1, 2, "B2", 14, 17],
    ["MATER. TEHNOL.", 2, 2, "B2", 1, 6, 13, 18],
    ["MATER. TEHNOL.", 3, 2, "B2", 1, 6, 13, 14],
    ["MATER. TEHNOL.", 4, 2, "B2", 1, 6, 13, 14]
];
const subjectWed = [
    ["TERMODINAMIKA UN SILTUMPĀRV.", 2, 2, "114"],
    ["ANGĻU VALODA", 3, 1, "215"],
    ["TERMODINAMIKA UN SILTUMPĀRV.", 3, 0,"114"]
];
const subjectThu = [
    ["ANGĻU VALODA", 1, 2, "220"]
];
const subjectFri = [
];

const linkList = [
    //TD aprekinu formulas
    "td-formula1.pdf",
    //MT monokristali
    "https://docs.google.com/presentation/d/1vvx-V1NSwz3Am0IZIlf-22a1K8RbnOWwcRtXNU_qe7s/edit?usp=sharing",
    //MT complex
    "https://docs.google.com/presentation/d/16q2iMWrG3ATVs2E7Cx8AUvIYgd8iRevm/edit?usp=sharing&ouid=114556415476615058181&rtpof=true&sd=true",
    //TD md
    "https://docs.google.com/spreadsheets/d/18vX50uu4GP8VsooMxbgxnd81jI9grzNb/edit?usp=sharing&ouid=114556415476615058181&rtpof=true&sd=true",
    //TD water-vapor-table-diag
    "WVTD.pdf",
    //TD humid-air-diag
    "Humid-air.pdf",
    //DT dual fuel
    "https://docs.google.com/presentation/d/1f2B3TC39I2Ss46jCih_VIdJodnZTq4Lv6sxjYUnITnU/edit?usp=sharing",
    //Physics 1.prez
    "https://docs.google.com/presentation/d/1VJUIOI32rE0v-2O0nS69O2Babl5Sl2trI5r3WUg3A28/edit?usp=sharing"
]
