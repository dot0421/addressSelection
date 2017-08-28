var addressInit = function(province, city, district)  
{  
    var currProvince = document.getElementById(province);  
    var currCity = document.getElementById(city);  
    var currDistrict = document.getElementById(district);  
      

    function addOption(address, str, obj)  
    {  
        var option = document.createElement("OPTION");  
        address.options.add(option);  
        option.innerText = str;  
        option.value = str;  
        option.obj = obj;  
    }  
      
    function changeCity()  
    {  
        currDistrict.options.length = 0;  
        var item = currCity.options[currCity.selectedIndex].obj;  
        for(var i=0; i<item.areaList.length; i++)  
        {  
            addOption(currDistrict, item.areaList[i], null);  
        }  
        
    }
      
    function changeProvince()  
    {  
        currCity.options.length = 0;  
        var item = currProvince.options[currProvince.selectedIndex].obj;  
        for(var i=0; i<item.cityList.length; i++)  
        {  
            addOption(currCity, item.cityList[i].name, item.cityList[i]);  
        }  
        changeCity();  
        currCity.onchange = changeCity;  
    }  
      
    for(var i=0; i<provinceList.length; i++)  
    {  
        addOption(currProvince, provinceList[i].name, provinceList[i]);  
    }

    changeProvince();  
    currProvince.onchange = changeProvince;  
}  