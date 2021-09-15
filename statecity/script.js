function fillcity(){
    removeCity()
    switch(states.selectedIndex){
        case 1:
           var mpcity=["--Select City--","Gwalior","Indore","Jabalpur","Bhopal"]
           fillDD(mpcity)
        break;
        case 2:
            var hcity=["--Select City--","Gurugram","Karnal","Rohtak"]
            fillDD(hcity)
        break;
        case 3:
            var ucity=["--Select City--","Agra","Lucknow","Kanpur","Merath"]
            fillDD(ucity)
        break;
    
    }
    map.src=states.value+".jpg"
}

function fillDD(array_city){

    for(i=0; i<array_city.length; i++){
        var opt=document.createElement("option");
        opt.text=array_city[i]
        opt.value=array_city[i]
        city.add(opt);
    }
}

function removeCity(){
    
    for( i=city.options.length-1; i>=0; i--){
       city.remove(i);
    }
}

function showMap(){
    map.src=city.value+".jpg"
}