const table_elem=document.createElement("table");
table_elem.style.border="1px solid black";

for(let i=1;i<=12;i++){
    const row_elem=document.createElement("tr");
    const cell_elem=document.createElement("td");
    cell_elem.style.border="1px solid black"
    cell_elem.innerText=i;    

    if(i%4===0){
        cell_elem.style.backgroundColor="lightblue";
    }
   
    row_elem.appendChild(cell_elem);
    table_elem.appendChild(row_elem);
};

const div_elem=document.getElementById("output");
div_elem.appendChild(table_elem);