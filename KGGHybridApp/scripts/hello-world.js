// JavaScript Document

// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
   filmleriGetir();
    navigator.splashscreen.hide();
}

function filmleriGetir()
{
    var dataSource = new kendo.data.DataSource({
        type:"odata",
        pageSize:10,
        transport:{
            read:"http://odata.netflix.com/Catalog/Titles"
        }
    });
    
    $("#netFlix").kendoMobileListView({
        dataSource:dataSource,
        template:"<div class='data'>${data.Name}</div><img src='${data.BoxArt.MediumUrl}' />"
    });
}