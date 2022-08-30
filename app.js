
(() => {


   let city = JSON.parse(localStorage.getItem("city"))
   

   setTimeout(() => {
      document.getElementById('loading').style.display = "none";
      // document.getElementById('anchor').style.display = "inline";
      
   }, 2300);
   


  

   if (city) {


      window.location.herf = "./index.html"
   

   
   axios.get(`https://api.weatherapi.com/v1/forecast.json?key=ede7d8e1ad844d5aa2d122013222808&q=${city}&days=14`)
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
         mainInfo.appendChild(info1);

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

         let info21 = document.createElement('div');
         info21.setAttribute('class', "moreInfoBox");
         let info2Para11 = document.createElement("p");
         let info2Para1Text1 = document.createTextNode("Feel's :");
         let info2Para21 = document.createElement("p");
         let info2Para2Text1 = document.createTextNode(feelslike_c + " " + "°C");

         info2Para11.appendChild(info2Para1Text1);
         info21.appendChild(info2Para11);
         info2Para21.appendChild(info2Para2Text1);
         info21.appendChild(info2Para21);
         moreInfo.appendChild(info21);

         let info2 = document.createElement('div');
         info2.setAttribute('class', "moreInfoBox");
         let info2Para1 = document.createElement("p");
         let info2Para1Text = document.createTextNode("Wind :");
         let info2Para2 = document.createElement("p");
         let info2Para2Text = document.createTextNode(wind_mph + " " + "mph");

         info2Para1.appendChild(info2Para1Text);
         info2.appendChild(info2Para1);
         info2Para2.appendChild(info2Para2Text);
         info2.appendChild(info2Para2);
         moreInfo.appendChild(info2);

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


  
   ////////////////////////////////current section end////////////////////////////


         for (let i = 0; i < data.forecast.forecastday.length; i++) {
            
         

         let date1 = data.forecast.forecastday[i].date
         let futureMaxTemp1 = data.forecast.forecastday[i].day.maxtemp_c;
         let futureMinTemp1 = data.forecast.forecastday[i].day.mintemp_c;
         let futureWind1 = data.forecast.forecastday[i].day.maxwind_kph;
         let futurePrecip1 = data.forecast.forecastday[i].day.totalprecip_mm;
         let futureIcon1 = data.forecast.forecastday[i].day.condition.icon;
         let text1 = data.forecast.forecastday[i].day.condition.text;
         futureIcon1.replace("/file// ");
      
         let box2 = document.getElementById('box2');
         let day1 = document.createElement('div');
         day1.setAttribute('class', "forecastTime");
         let firstDate = document.createElement('p');
         let firstDateText = document.createTextNode("Forcast for " + " " + date1)
         firstDate.appendChild(firstDateText);
         day1.appendChild(firstDate);
         box2.appendChild(day1)
         
         let mainFutureForcast = document.createElement('div');
         mainFutureForcast.setAttribute('class', 'mainFutureForcast')
         let futureForCast = document.createElement('div')
         futureForCast.setAttribute('class', "futureForcast");
         let futureForCastBox1 = document.createElement('div');
         futureForCastBox1.setAttribute("class", "futureForcastbox1");
         let futureForCastImg1 = document.createElement('img');
         futureForCastImg1.src = futureIcon1;
         

         futureForCastBox1.appendChild(futureForCastImg1);
         futureForCast.appendChild(futureForCastBox1);
         mainFutureForcast.appendChild(futureForCast);
         
         

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
         
         
         let futureForCastBox3 = document.createElement('div');
         futureForCastBox3.setAttribute("class", "futureForcastbox3");
         
         let futureForCastBox3Para1 = document.createElement("p");
         let futureForCastBox3Para1Text = document.createTextNode("Wind :" + " " + futureWind1 + " " + "Kph")
         futureForCastBox3Para1.appendChild(futureForCastBox3Para1Text);
         futureForCastBox3.appendChild(futureForCastBox3Para1);
         box2.appendChild(mainFutureForcast);
         
         let futureForCastBox3Para2 = document.createElement("p");
         let futureForCastBox3Para2Text = document.createTextNode("Precipitation :" + " " + futurePrecip1 + " " + "%");
         futureForCastBox3Para2.appendChild(futureForCastBox3Para2Text);
         futureForCastBox3.appendChild(futureForCastBox3Para2);
         futureForCast.appendChild(futureForCastBox3);
         
         let sepPara = document.createElement("p");
         let sepParaText = document.createTextNode(text1);
         sepPara.appendChild(sepParaText);
         mainFutureForcast.appendChild(sepPara);

         }
         ///////////////////////////////////

      })
   }

   else{
      location.href = "./index.html"
   }

})();

