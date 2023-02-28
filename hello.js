const Maker = {
  tagName : "",
  attriElement: "",
  attriValue: "",

  create: function() {
    const element = document.createElement(this.tagName);
    element.setAttribute(this.attriElement, this.attriValue);
    this.parent.appendChild(element);
  }
}



// function createMaker (tagname,attrielement,attrivalue,parent) {
//   const element = document.createElement(tagname);
//   element.setAttribute(attrielement, attrivalue);
//   parent.appendChild(element);
//   }
// console.dir(root);
// createMaker('div', 'id', 'item');