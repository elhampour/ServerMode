var http=require("http");
const math = require('mathjs');
const dateTime = require('date-time');

var weatherData="";
var weatherData="";
var CityName="abadan"
var url="http://api.apixu.com/v1/forecast.json?key=9ab851aa977348f1aba113815182812&q=Ahvaz"
var data;
var data1;
var min,max;
var b="0";
http.request(url,function(weatherResponse){
  weatherResponse.on("data",function(data){
    weatherData +=data;
  })
  weatherResponse.on("end",function(){;
    data=JSON.parse(weatherData);
    console.log(data);

    tbase=0;
    tupper=26;
    min=  data.forecast.forecastday[0].day.mintemp_c;
    max=  data.forecast.forecastday[0].day.maxtemp_c;
    t_l=data.current.temp_c;
    tmean=data.forecast.forecastday[0].day.avgtemp_c;
    teta1=data.location.lat;

    teta=(teta1*math.pi)/180;

    time=data.location.localtime;
    M=time.slice(5, 7);
    D=time.slice(8, 10);

    temp=math.floor(275*(M/9)-30+D);
    J=temp-2;

    delta=0.409*math.sin(0.0172*J-1.39);
    ws=math.acos((-1*math.tan(teta))*math.tan(delta));

    dr=1+(0.033*math.cos(0.0172*J));

    temp1=ws*math.sin(teta)*math.sin(delta);
    temp2=math.cos(teta)*math.cos(delta)*math.sin(ws);
    Ra=37.6*dr*(temp1+temp2);

    ET0=0.408*0.00243*(tmean+17.8)*math.sqrt(max-min)*Ra;

    GDD=math.abs(tmean-t_l);

    sigmaGDD=GDD+0;

    if(min<tbase){
      min=tbase;
    }
    if(max>tupper){
      max=tupper;
    }

    var Kc;
    if(sigmaGDD<1){
      Kc=0;
    }else if(sigmaGDD>=1 && sigmaGDD<=1300){
      y=1+math.exp((-1*(sigmaGDD-576.2))/146.2);
      Kc=1.03/y;
    }else if(sigmaGDD>1300 && sigmaGDD<=1550){
      Kc=1.03-0.0005*GDD
    }else if(sigmaGDD>1550 && sigmaGDD<=2300){
      Kc=(((-1.23)+0.0032)*sigmaGDD) + (-10.15*math.pow(10,-6)*math.pow(sigmaGDD,2))
    }

    y1=1-math.exp(-1*(sigmaGDD-851.7)/214.2);
    Zr=0.3351+0.4642/y1;

    ETc=Kc*ET0;

    R=data.forecast.forecastday[0].day.totalprecip_mm;

    ER=(1.253*0.824*R-2.935)*10*(0.001*ETc);

    TAW=70*Zr;
    console.log(TAW);
    RAW=0.55*TAW;

    Irr=10;

    Dri_1=RAW;
    Dr=(Dri_1-Irr-ER+ETc);

    var ETc_adg;
    console.log(ETc);
    var Ks;
    if(Dr <= RAW){
      Irr=Dr*45/100;
    }else{
      Ks=(TAW-Dr)/(TAW-RAW);
      ETc_adg=Ks*ETc;
      Dr=(Dri_1-Irr-ER+ETc_adg);
      Irr=Dr*45/100;
    }
console.log(Dr);
console.log(Irr);
    var y3=TAW*55/100;
    if(Irr > y3){
      console.log(Irr);
    }

})
}).end()
