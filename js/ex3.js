const para_element_style=()=>{

    const para_list=document.getElementsByTagName("p");
    for(const i of para_list){
        i.style.fontWeight="bold";
        i.style.backgroundColor="yellow";
    }
}
para_element_style();