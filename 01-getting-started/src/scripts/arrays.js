


const arraysList = {


    
    arrayAddNumber: (arr, add) => {       
        arr.push(add);
        return arr.length; 
        //array[x] = document.getElementById("arrayInput").value;
        // document.getElementById("arrayInput").value = "";
        
    },

    arrayShow: (arr) => {
        let i = ""
      for (let t=0; t<arr.length; t++)
      {      
        i += "Add " + t + " = " + arr[t] + "<br/>";
    }   
    document.getElementById("message").innerHTML = i;
    console.log(i);


    },

    sumArray: (arrsum) => {
        let total = 0;
    for(let s=0; s<arrsum.length; s++)
    {
        if(isNaN(arrsum[s])){
            continue;
            }
            total += Number(arrsum[s]);    
    }
        return total;
    
    },

    clearArray: (arr) => {
        arr=[];
        return arr.length;
    },

    


};

export default arraysList; 






