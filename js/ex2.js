const displayText400=()=>{
    const lvl400=Array.from(document.getElementsByClassName("400level"));
    
    for (const i of lvl400){
        console.log(i.textContent);
    }
}

displayText400();