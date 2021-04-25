function count_chars(data){
       if (data.length > 0){
             var store = {};
             for ( let c in data){
               if(store[data[c]] == null){
                 store[data[c]] = 0;
               }
               store[data[c]] = store[data[c]] + 1 ;

             }

             console.log(store);

       }else{
          console.log(" You  string is empty ");

       }
}
var name="";
count_chars(name);
