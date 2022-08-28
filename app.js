
(()=>{
axios.get(`http://api.weatherapi.com/v1/current.json?key=ede7d8e1ad844d5aa2d122013222808&q=karachi`)
    .then(function (response) {

        const data = response.data;


        //for current weather//

        let location = data.location.name;
        let last_updated = data.current.last_updated;
        last_updated = last_updated.slice(12);
        let temp_c = data.current.temp_c;
        let wind_mph = data.current.wind_mph;
        let feelslike_c = data.current.feelslike_c;
        let icon = data.current.condition.icon;
        icon.replace("/file// ");
        let visibility = data.current.vis_km;
        let humidity = data.current.humidity;
        let Precipitation = data.current.precip_in;


        ////////////////////////Current Forecast//////////////////////////////

        let head = document.getElementById('head');
        let heading = document.createElement("h1");
        heading.setAttribute("class", "heading")
        let headingText = document.createTextNode(location);
        heading.appendChild(headingText);
        head.appendChild(heading)

        let subHeading = document.createElement('h3');
        let subHeadingText = document.createTextNode('CURRENT');
        subHeading.setAttribute("class", 'subHeading');
        subHeading.appendChild(subHeadingText);
        head.appendChild(subHeading);

        let forecastTime = document.getElementById('forecastTime');
        let forecastTimePara = document.createElement('p')
        let forecastTimeParaText = document.createTextNode('Last Update : ' + " " + last_updated)
        forecastTimePara.appendChild(forecastTimeParaText);
        forecastTime.appendChild(forecastTimePara);

        let mainInfo = document.getElementById('mainInfo');
        let info1 = document.createElement('div');
        info1.setAttribute('class', "info1");
        let info1Para = document.createElement("p");
        let info1paraText = document.createTextNode(temp_c + "°C");
        info1Para.appendChild(info1paraText);
        info1.appendChild(info1Para);
        mainInfo.appendChild(info1)

        let info2 = document.createElement('div');
        info2.setAttribute('class', "info2");
        let info2Para1 = document.createElement("p");
        let info2Para1Text = document.createTextNode(wind_mph + " " + "mph");
        info2Para1.appendChild(info2Para1Text);
        info2.appendChild(info2Para1);

        let info2Para2 = document.createElement("p");
        let info2Para2Text = document.createTextNode("Feel's" + ' ' + feelslike_c + "°C");
        info2Para2.appendChild(info2Para2Text);
        info2.appendChild(info2Para2);

        mainInfo.appendChild(info2)

        let info3 = document.createElement('div');
        info3.setAttribute('class', "info3");
        let imgIcon = document.createElement('img')
        imgIcon.src = icon;
        info3.appendChild(imgIcon);
        mainInfo.appendChild(info3)

        let moreInfo = document.getElementById('moreInfo');
        let moreInfoBox = document.createElement("div");
        moreInfoBox.setAttribute("class", "moreInfoBox");
        let moreInfoBoxPara1 = document.createElement('p');
        let moreInfoBoxPara1Text = document.createTextNode("Precipitation : ");
        let moreInfoBoxPara2 = document.createElement('p');
        let moreInfoBoxPara2Text = document.createTextNode(Precipitation + " " + "%");

        moreInfoBoxPara1.appendChild(moreInfoBoxPara1Text);
        moreInfoBox.appendChild(moreInfoBoxPara1);
        moreInfo.appendChild(moreInfoBox);

        moreInfoBoxPara2.appendChild(moreInfoBoxPara2Text);
        moreInfoBox.appendChild(moreInfoBoxPara2);
        moreInfo.appendChild(moreInfoBox)


        let moreInfoBox2 = document.createElement("div");
        moreInfoBox2.setAttribute("class", "moreInfoBox");
        let moreInfoBox2Para1 = document.createElement('p');
        let moreInfoBox2Para1Text = document.createTextNode("Visibility : ");
        let moreInfoBox2Para2 = document.createElement('p');
        let moreInfoBox2Para2Text = document.createTextNode(visibility + " " + "Km");

        moreInfoBox2Para1.appendChild(moreInfoBox2Para1Text);
        moreInfoBox2.appendChild(moreInfoBox2Para1);
        moreInfo.appendChild(moreInfoBox);

        moreInfoBox2Para2.appendChild(moreInfoBox2Para2Text);
        moreInfoBox2.appendChild(moreInfoBox2Para2);
        moreInfo.appendChild(moreInfoBox2)

        let moreInfoBox3 = document.createElement("div");
        moreInfoBox3.setAttribute("class", "moreInfoBox");
        let moreInfoBox3Para1 = document.createElement('p');
        let moreInfoBox3Para1Text = document.createTextNode("Humidity : ");
        let moreInfoBox3Para2 = document.createElement('p');
        let moreInfoBox3Para2Text = document.createTextNode(humidity + " " + "%");

        moreInfoBox3Para1.appendChild(moreInfoBox3Para1Text);
        moreInfoBox3.appendChild(moreInfoBox3Para1);
        moreInfo.appendChild(moreInfoBox);

        moreInfoBox3Para2.appendChild(moreInfoBox3Para2Text);
        moreInfoBox3.appendChild(moreInfoBox3Para2);
        moreInfo.appendChild(moreInfoBox3);

    })
        ////////////////////////////////end////////////////////////////

        axios.get(`http://api.weatherapi.com/v1/forecast.json?key=ede7d8e1ad844d5aa2d122013222808&q=karachi&days=7`)
        .then(function (response) {
    
            const data = response.data;
        //for future weather//

        let date1 = data.forecast.forecastday[0].date
        let futureMaxTemp1 = data.forecast.forecastday[0].day.maxtemp_c;
        let futureMinTemp1 = data.forecast.forecastday[0].day.mintemp_c;
        let futureWind1 = data.forecast.forecastday[0].day.maxwind_kph;
        let futurePrecip1 = data.forecast.forecastday[0].day.totalprecip_mm;
        let futureIcon1 = data.forecast.forecastday[0].day.condition.icon;
        let text1 = data.forecast.forecastday[0].day.condition.text;
        futureIcon1.replace("/file// ");
        let date2 = data.forecast.forecastday[1].date
        let futureMaxTemp2 = data.forecast.forecastday[1].day.maxtemp_c;
        let futureMinTemp2 = data.forecast.forecastday[1].day.mintemp_c;
        let futureWind2 = data.forecast.forecastday[1].day.maxwind_kph;
        let futurePrecip2 = data.forecast.forecastday[1].day.totalprecip_mm;
        let futureIcon2 = data.forecast.forecastday[1].day.condition.icon;
        let text2 = data.forecast.forecastday[1].day.condition.text;
        futureIcon2.replace("/file// ");
        let date3 = data.forecast.forecastday[2].date
        let futureMaxTemp3 = data.forecast.forecastday[2].day.maxtemp_c;
        let futureMinTemp3 = data.forecast.forecastday[2].day.mintemp_c;
        let futureWind3 = data.forecast.forecastday[2].day.maxwind_kph;
        let futurePrecip3 = data.forecast.forecastday[2].day.totalprecip_mm;
        let futureIcon3 = data.forecast.forecastday[2].day.condition.icon;
        let text3 = data.forecast.forecastday[2].day.condition.text;
        futureIcon3.replace("/file// ");

       

        let day1 = document.getElementById('date1');
        let firstDate = document.createElement('p');
        let firstDateText = document.createTextNode("Forcast for " + " " + date1)
        firstDate.appendChild(firstDateText);
        day1.appendChild(firstDate);

        let futureForCast = document.getElementById('futureForcast');
        let futureForCastBox1 = document.createElement('div');
        futureForCastBox1.setAttribute("class", "futureForcastbox1");
        let futureForCastImg1 = document.createElement('img');
        futureForCastImg1.src = futureIcon1;

        futureForCastBox1.appendChild(futureForCastImg1);
        futureForCast.appendChild(futureForCastBox1);

        //////////////////////////////

        let futureForCastBox2 = document.createElement('div');
        futureForCastBox2.setAttribute("class", "futureForcastbox2");

        let futureForCastBox2Para1 = document.createElement("p");
        let futureForCastBox2Para1Text = document.createTextNode("Max Temp. :" + " " + futureMaxTemp1 + " " + "°C")
        futureForCastBox2Para1.appendChild(futureForCastBox2Para1Text);
        futureForCastBox2.appendChild(futureForCastBox2Para1);

        let futureForCastBox2Para2 = document.createElement("p");
        let futureForCastBox2Para2Text = document.createTextNode("Min Temp. :" + " " + futureMinTemp1 + " " + "°C");
        futureForCastBox2Para2.appendChild(futureForCastBox2Para2Text);
        futureForCastBox2.appendChild(futureForCastBox2Para2);

        futureForCast.appendChild(futureForCastBox2);

        //////////////////////

        let futureForCastBox3 = document.createElement('div');
        futureForCastBox3.setAttribute("class", "futureForcastbox3");

        let futureForCastBox3Para1 = document.createElement("p");
        let futureForCastBox3Para1Text = document.createTextNode("Wind :" + " " + futureWind1 + " " + "Kph")
        futureForCastBox3Para1.appendChild(futureForCastBox3Para1Text);
        futureForCastBox3.appendChild(futureForCastBox3Para1);

        let futureForCastBox3Para2 = document.createElement("p");
        let futureForCastBox3Para2Text = document.createTextNode("Precipitation :" + " " + futurePrecip1 + " " + "%");
        futureForCastBox3Para2.appendChild(futureForCastBox3Para2Text);
        futureForCastBox3.appendChild(futureForCastBox3Para2);
        futureForCast.appendChild(futureForCastBox3);


        ///////////////////////
        let mainFutureForcast = document.getElementById("mainFutureForcast")
        let sepPara = document.createElement("p");
        let sepParaText = document.createTextNode(text1);
        sepPara.appendChild(sepParaText);
        mainFutureForcast.appendChild(sepPara);

      ///////////////////////////////////

        let day2 = document.getElementById('date2');
        let firstDate2 = document.createElement('p');
        let firstDate2Text2 = document.createTextNode("Forcast for " + " " + date2)
        firstDate2.appendChild(firstDate2Text2);
        day2.appendChild(firstDate2);

        let futureForCast2 = document.getElementById('futureForcast2');
        let futureForCastBox12 = document.createElement('div');
        futureForCastBox12.setAttribute("class", "futureForcastbox1");
        let futureForCastImg12 = document.createElement('img');
        futureForCastImg12.src = futureIcon2;

        futureForCastBox12.appendChild(futureForCastImg12);
        futureForCast2.appendChild(futureForCastBox12);

        //////////////////////////////

        let futureForCastBox22 = document.createElement('div');
        futureForCastBox22.setAttribute("class", "futureForcastbox2");

        let futureForCastBox2Para12 = document.createElement("p");
        let futureForCastBox2Para1Text2 = document.createTextNode("Max Temp. :" + " " + futureMaxTemp2 + " " + "°C")
        futureForCastBox2Para12.appendChild(futureForCastBox2Para1Text2);
        futureForCastBox22.appendChild(futureForCastBox2Para12);

        let futureForCastBox2Para22 = document.createElement("p");
        let futureForCastBox2Para2Text2 = document.createTextNode("Min Temp. :" + " " + futureMinTemp2 + " " + "°C");
        futureForCastBox2Para22.appendChild(futureForCastBox2Para2Text2);
        futureForCastBox22.appendChild(futureForCastBox2Para22);

        futureForCast2.appendChild(futureForCastBox22);

        //////////////////////

        let futureForCastBox32 = document.createElement('div');
        futureForCastBox32.setAttribute("class", "futureForcastbox3");

        let futureForCastBox3Para12 = document.createElement("p");
        let futureForCastBox3Para1Text2 = document.createTextNode("Wind :" + " " + futureWind2  + " " + "Kph")
        futureForCastBox3Para12.appendChild(futureForCastBox3Para1Text2);
        futureForCastBox32.appendChild(futureForCastBox3Para12);

        let futureForCastBox3Para22 = document.createElement("p");
        let futureForCastBox3Para2Text2 = document.createTextNode("Precipitation :" + " " + futurePrecip2 + " " + "%");
        futureForCastBox3Para22.appendChild(futureForCastBox3Para2Text2);
        futureForCastBox32.appendChild(futureForCastBox3Para22);
        futureForCast2.appendChild(futureForCastBox32);


        ///////////////////////
        let mainFutureForcast2 = document.getElementById("mainFutureForcast2")
        let sepPara2 = document.createElement("p");
        let sepParaText2 = document.createTextNode(text2);
        sepPara2.appendChild(sepParaText2);
        mainFutureForcast2.appendChild(sepPara2);

        //////////////////////////

        let day3 = document.getElementById('date3');
        let firstDate23 = document.createElement('p');
        let firstDate2Text23 = document.createTextNode("Forcast for " + " " + date3)
        firstDate23.appendChild(firstDate2Text23);
        day3.appendChild(firstDate23);

        let futureForCast23 = document.getElementById('futureForcast3');
        let futureForCastBox123 = document.createElement('div');
        futureForCastBox123.setAttribute("class", "futureForcastbox1");
        let futureForCastImg123 = document.createElement('img');
        futureForCastImg123.src = futureIcon2;

        futureForCastBox123.appendChild(futureForCastImg123);
        futureForCast23.appendChild(futureForCastBox123);

        //////////////////////////////

        let futureForCastBox223 = document.createElement('div');
        futureForCastBox223.setAttribute("class", "futureForcastbox2");

        let futureForCastBox2Para123 = document.createElement("p");
        let futureForCastBox2Para1Text23 = document.createTextNode("Max Temp. :" + " " + futureMaxTemp3 + " " + "°C")
        futureForCastBox2Para123.appendChild(futureForCastBox2Para1Text23);
        futureForCastBox223.appendChild(futureForCastBox2Para123);

        let futureForCastBox2Para223 = document.createElement("p");
        let futureForCastBox2Para2Text23 = document.createTextNode("Min Temp. :" + " " + futureMinTemp3 + " " + "°C");
        futureForCastBox2Para223.appendChild(futureForCastBox2Para2Text23);
        futureForCastBox223.appendChild(futureForCastBox2Para223);

        futureForCast23.appendChild(futureForCastBox223);

        //////////////////////

        let futureForCastBox323 = document.createElement('div');
        futureForCastBox323.setAttribute("class", "futureForcastbox3");

        let futureForCastBox3Para123 = document.createElement("p");
        let futureForCastBox3Para1Text23 = document.createTextNode("Wind :" + " " + futureWind3 + " " + "Kph")
        futureForCastBox3Para123.appendChild(futureForCastBox3Para1Text23);
        futureForCastBox323.appendChild(futureForCastBox3Para123);

        let futureForCastBox3Para223 = document.createElement("p");
        let futureForCastBox3Para2Text23 = document.createTextNode("Precipitation :" + " " + futurePrecip3 + " " + "%");
        futureForCastBox3Para223.appendChild(futureForCastBox3Para2Text23);
        futureForCastBox323.appendChild(futureForCastBox3Para223);
        futureForCast23.appendChild(futureForCastBox323);


        ///////////////////////
        let mainFutureForcast23 = document.getElementById("mainFutureForcast3")
        let sepPara23 = document.createElement("p");
        let sepParaText23 = document.createTextNode(text3);
        sepPara23.appendChild(sepParaText23);
        mainFutureForcast23.appendChild(sepPara23);

        //////////////////////////end//////////////////


        }) 
        
    })();

    setInterval(() => {
        const time = document.querySelector("#clock");
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let day_night = "AM";
        if (hours > 12) {
           day_night = "PM";
           hours = hours - 12;
        }
        if (seconds < 10) {
           seconds = "0" + seconds;
        }
        if (minutes < 10) {
           minutes = "0" + minutes;
        }
        if (hours < 10) {
           hours = "0" + hours;
        }
        time.textContent = hours + ":" + minutes + ":" + seconds + " " + day_night;
     });