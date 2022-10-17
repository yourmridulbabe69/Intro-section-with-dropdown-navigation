// FOR MOBILE HAMBURGER MANU

const dropdown = document.getElementById("feature_Expand");
const feature = document.getElementById("feature_Dropdownphn");

dropdown.addEventListener("click", ()=>{
    feature.classList.toggle("newActiveClass");
});
// -----------------------------------
const dropdown2 = document.getElementById("Company_Expand");
const company = document.getElementById("Company_Dropdownphn");

dropdown2.addEventListener("click", ()=>{
    company.classList.toggle("newActiveClass2");
});

// -----------------------------------------

const humbarger = document.getElementById("humbargericon");
const navUl = document.getElementById("navbar_Ul");
const closeManu = document.getElementById("closemanu");


humbarger.addEventListener("click", ()=>{
    navUl.classList.add("navbar_Add");
    humbarger.classList.add("hamburger_Remove");
    closeManu.classList.add("closeicon_Add");
});

closeManu.addEventListener("click", ()=>{
    navUl.classList.remove("navbar_Add")
    humbarger.classList.remove("hamburger_Remove");
    closeManu.classList.remove("closeicon_Add");
})

// FOR DESKTOP OR LAPTOPS

const dropdownpc = document.getElementById("Feature_ExpandPc");
const featurepc = document.getElementById("feature_dropdownPc");

dropdownpc.addEventListener("click", ()=>{
    featurepc.classList.toggle("newClass");
});

const dropdown2pc = document.getElementById("Company_Expandpc");
const companypc = document.getElementById("Company_Dropdownpc");

dropdown2pc.addEventListener("click", ()=>{
    companypc.classList.toggle("newClass2");
});
