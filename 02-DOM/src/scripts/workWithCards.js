
const cardfunctions = {

    crtNewCrd: (txt) => {
        const div= document.createElement('div');      
        div.appendChild(document.createTextNode(txt));
        
        div.classList.add("newCard");
        const br= document.createElement("br");
        div.appendChild(br);


        const afterbtn= document.createElement('button');
        afterbtn.appendChild(document.createTextNode('Add After'));
        div.appendChild(afterbtn);

        const beforebtn= document.createElement('button');
        beforebtn.appendChild(document.createTextNode('Add Before'));
        div.appendChild(beforebtn);

        const deletebtn= document.createElement('button');
        deletebtn.appendChild(document.createTextNode('Delete'));
        div.appendChild(deletebtn);

        return div;      
    
    },

    addBefore: (node, txt) => {
        console.log(node);
        console.log(txt);
        const div= cardfunctions.crtNewCrd(txt);
        // node.parentElement.insertAdjacentElement("beforebegin", div);
        node.parentElement.insertBefore(div, node.previousSibling);
        
        // node.insertAdjacentElement(position, element)
    },

    addAfter: (node, txt) => {
        const div= cardfunctions.crtNewCrd(txt);
        node.parentElement.insertBefore(div, node.nextSibling);
    },

    deleteCrd: (node) => {
        node.parentElement.removeChild(node);
    },


};

export default cardfunctions;