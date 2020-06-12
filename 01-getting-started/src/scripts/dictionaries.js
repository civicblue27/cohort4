const provinces = {
   
prov:(pc)=>{
    let pv=pc.toUpperCase();

    if (pv=="BC") return "British Columbia"; 
    else if(pv=="AB")return "Alberta";
    else if(pv=="SK")return "Saskatchewan";
    else if(pv=="MB")return "Manitoba";
    else if(pv=="ON")return "Ontario";
    else if(pv=="PQ")return "Quebec";
    else if(pv=="NL")return "Newfoundland and Labrador";
    else if(pv=="PE")return "Prince Edward Island";
    else if(pv=="NS")return "Nova Scotia";
    else if(pv=="NB")return "New Brunswick";
    else if(pv=="YT")return "Yukon";
    else if(pv=="NT")return "Northwest Territories";
    else if (pv=="NU")return "Nunavut";
    else return "This is not a valid Province code in Canada"
}


};
export default provinces;