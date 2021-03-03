const words = [{
    term: "Procrastination",
    definition: "Avoidance of doing a task that needs to be accomplished"
  }, {
    term: "Tautology",
    definition: "logical argument constructed in such a way that it is logically irrefutable"
  }, {
    term: "Oxymoron",
    definition: "figure of speech that juxtaposes elements that appear to be contradictory"
  }];

  const dict_Element=document.createElement("dl");
  for(const i of words){
      const term_elem=document.createElement("dt");
      const definition_elem=document.createElement("dd");
      term_elem.textContent=i.term;
      dict_Element.appendChild(term_elem).style.fontWeight="bold";
      definition_elem.textContent=i.definition;
      dict_Element.appendChild(definition_elem);  
  }

document.getElementById("content").appendChild(dict_Element);