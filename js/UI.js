class UI{


    printStates(){
        const data = covidapi.getStates()
              .then(fullData => {
                  const stateWiseData  = fullData.data.statewise;
                  const countryData  = fullData.data.statewise.splice(0,1);
                  const statesData = fullData.data.statewise;
                  const numbers={
                    "Total": "+91-11-23978046, 1075",
                    "Andhra Pradesh" : "0866-2410978",    
                    "Arunachal Pradesh" : "9436055743",
                    "Assam" : "6913347770",
                    "Bihar" : "104",
                    "Chhattisgarh" : "104",
                    "Goa" : "104",
                    "Gujarat" : "104",
                    "Jammu and Kashmir":"",
                    "Haryana" : "8558893911",
                    "Himachal Pradesh" : "104",
                    "Jharkhand" : "104",
                    "Karnataka" : "104",
                    "Kerala" : "0471-2552056",
                    "Madhya Pradesh" : "104",
                    "Maharashtra" : "020-26127394",
                    "Manipur" : "3852411668",
                    "Meghalaya" : "108",
                    "Mizoram" : "102",
                    "Nagaland" : "7005539653",
                    "Odisha" : "9439994859",
                    "Punjab" : "104",
                    "Rajasthan" : "0141-2225624",
                    "Sikkim" : "104",
                    "Tamil Nadu" : "044-29510500",
                    "Telangana" : "104",
                    "Tripura" : "0381-2315879",
                    "Uttarakhand" : "104",
                    "Uttar Pradesh" : "18001805145",
                    "West Bengal" : "1800313444222, 03323412600",
                    "Andaman and Nicobar Islands" : "03192-232102",
                    "Chandigarh" : "9779558282",
                    "Dadra and Nagar Haveli" : "104",
                    "Daman and Diu": "104",
                    "Delhi" : "011-22307145",
                    "Jammu & Kashmir" : "01912520982, 0194-2440283",
                    "Ladakh" : "01982256462" ,
                    "Lakshadweep" : "104",
                    "Puducherry" : "104"
                   }

                    const activa = ((countryData[0].deltaconfirmed)-(countryData[0].deltarecovered))-(countryData[0].deltadeaths);
                    const stats = document.querySelector('#favorites tbody');
                    const confirmed = document.getElementById("danger");
                    const active = document.getElementById('primary');
                    const recovered = document.getElementById('success');
                    const deceased = document.getElementById('muted');
                    const update = document.getElementById('update');
                    const ht = document.createElement('h6');
                    const h = document.createElement('h3');
                    ht.innerHTML = `[+${countryData[0].deltaconfirmed}]`;
                    h.innerHTML = `${countryData[0].confirmed}`; 
                    confirmed.appendChild(ht);
                    confirmed.appendChild(h);
                    const gt = document.createElement('h6');
                    const g = document.createElement('h3');
                    gt.innerHTML = `[${activa}]`;
                    g.innerHTML = `${countryData[0].active}`; 
                    active.appendChild(gt);
                    active.appendChild(g);
                    const ft = document.createElement('h6');
                    const f = document.createElement('h3');
                    ft.innerHTML = `[+${countryData[0].deltarecovered}]`;
                    f.innerHTML = `${countryData[0].recovered}`; 
                    recovered.appendChild(ft);
                    recovered.appendChild(f);
                    const et = document.createElement('h6');
                    const e = document.createElement('h3');
                    et.innerHTML = `[+${countryData[0].deltadeaths}]`;
                    e.innerHTML = `${countryData[0].deaths}`; 
                    deceased.appendChild(et);
                    deceased.appendChild(e);
                    const dt = document.createElement('p');
                    dt.innerHTML = `Last Updated on: ${countryData[0].lastupdatedtime}<br>Central Helpline Number for corona-virus: +91-11-23978046, 1075`;
                    update.appendChild(dt);
                    const names=['Nagaland','Daman and Diu','Lakshadweep','Sikkim']
                    statesData.forEach(state => {
                      let image='<a href=""><img class="one onee" src="images/right.png"></a>';
                      for (let i = 0; i < names.length; i++) {
                        if(names[i]===state.state){
                          image = ''
                          break;}
                      }
                    const tr = document.createElement('tr');
                    tr.classList.add('states');
                    tr.innerHTML = `
                            <td class="st one"><span>${image}</span>${state.state}</td>
                            <td class="statee">${state.confirmed}<span><img src="images/red.png">${state.deltaconfirmed}</span></td>
                            <td class="state">${state.active}</td>
                            <td class="state">${state.recovered}<span><img src="images/green.png">${state.deltarecovered}</span></td>
                            <td class="state">${state.deaths}<span><img src="images/red.png">${state.deltadeaths}</span></td>
                            <td class="state">${numbers[state.state]}</td>
                            <td class="statees">${state.lastupdatedtime}</td>
                    `;
                    stats.appendChild(tr);
               })

              }
              )

    }

    printCountries(){
        const data = covidapi.getCountries()
              .then(fullData => {
                  const worldData  = fullData.data.splice(0,1);
                  const confirmed = document.getElementById("danger");
                  const active = document.getElementById('primary');
                  const recovered = document.getElementById('success');
                  const deceased = document.getElementById('muted');
                  const ht = document.createElement('h6');
                  const h = document.createElement('h3');
                  ht.innerHTML = `[+${worldData[0].todayCases}]`;
                  h.innerHTML = `${worldData[0].cases}`; 
                  confirmed.appendChild(ht);
                  confirmed.appendChild(h);
                  const gt = document.createElement('h6');
                  const g = document.createElement('h3');
                  //gt.innerHTML = `[${activa}]`;
                  g.innerHTML = `${worldData[0].active}`; 
                  //active.appendChild(gt);
                  active.appendChild(g);
                  //const ft = document.createElement('h6');
                  const f = document.createElement('h3');
                 // ft.innerHTML = `[+${worldData[0].deltarecovered}]`;
                  f.innerHTML = `${worldData[0].recovered}`; 
                  //recovered.appendChild(ft);
                  recovered.appendChild(f);
                  const et = document.createElement('h6');
                  const e = document.createElement('h3');
                  et.innerHTML = `[+${worldData[0].todayDeaths}]`;
                  e.innerHTML = `${worldData[0].deaths}`; 
                  deceased.appendChild(et);
                  deceased.appendChild(e);

                 
                    const stats = document.querySelector('#favorites tbody');
                    fullData.data.forEach(country => {
                    const tr = document.createElement('tr');
                    tr.classList.add('country');
                    tr.innerHTML = `
                            <td>${country.country}</td>
                            <td>${country.cases}<span><img src="images/red.png">${country.todayCases}</span></td>
                            <td>${country.active}</td>
                            <td>${country.recovered}</td>
                            <td>${country.critical}</td>
                            <td>${country.deaths}<span><img src="images/red.png">${country.todayDeaths}</span></td>
                            <td>${country.totalTests}</td>
                            <td>${country.casesPerOneMillion}</td>
                            <td>${country.deathsPerOneMillion}</td>
                            <td>${country.testsPerOneMillion}</td>
                    `;
                
                
                    stats.appendChild(tr);
                })


              }
              )

    }

    printDistricts(my){
        const mystate = my.textContent;
        const target = my.parentElement;
        const ourDiv = target.parentElement;
        var zonesData;
        const zones = covidapi.getZones()
              .then(fullData => {
                zonesData = fullData.data.zones;
                
              })
        console.log(zonesData);
        const data = covidapi.getDistricts()
              .then(fullData => {
                  const stats = fullData.data;
                  stats.forEach(state =>{
                      if (state.state === mystate){
                              let districtData = state.districtData;
                              districtData.sort(function(a,b){return a.confirmed-b.confirmed})   

                              districtData.forEach(dist => {                            
                                const tr = document.createElement('tr');
                                tr.classList.add('del');     
                                tr.innerHTML = `
                                     <td id="name">${dist.district}</td>
                                     <td>${dist.confirmed}<span><img src="images/red.png">${dist.delta.confirmed}</span></td>
                                     <td>${dist.active}</td>
                                     <td>${dist.recovered}<span><img src="images/green.png">${dist.delta.recovered}</span></td>
                                     <td>${dist.deceased}<span><img src="images/red.png">${dist.delta.deceased}</span></td>
                                `;
                                
                                  
                            
                                ourDiv.insertBefore(tr, target.nextSibling);
                            
                            })
                      }
                  })
              })
              

    }
          
     
        

    
}