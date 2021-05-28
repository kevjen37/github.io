const auth_link = "https://www.strava.com/oauth/token"

//Kevin.Data
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function getActivites_kev(res){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?per_page=200&access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => res.json())
        .then(function (data){

            for(var x=0; x<data.length; x++){

                if ((data[x].map.summary_polyline) != null) {
                	console.log(data[x].map.summary_polyline)
                	var coordinates = L.Polyline.fromEncoded(data[x].map.summary_polyline).getLatLngs()
                	console.log(coordinates)

                	L.polyline(

                    	coordinates,
                    	{
                        	color:"red",
                        	weight:5,
                        	opacity:.7,
                        	lineJoin:'round'
                    	}

                	).addTo(map)
                }
            }

        }
        )
}

function reAuthorize_kev() {
    fetch(auth_link, {
        method: 'post',

        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            client_id: '66642',
            client_secret: 'bfac709db726163c51137267d35f085e7f22953a',
            refresh_token: '0a82bd99ab00773609241974c7126e7ff2c9849f',
            grant_type: 'refresh_token'

        })

    }).then(res => res.json())
        .then(res => getActivites_kev(res))
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
//Brandon.Data
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getActivites_bran(res){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?per_page=200&access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => res.json())
        .then(function (data){

            for(var x=0; x<data.length; x++){

                if ((data[x].map.summary_polyline) != null) {
                    console.log(data[x].map.summary_polyline)
                    var coordinates = L.Polyline.fromEncoded(data[x].map.summary_polyline).getLatLngs()
                    console.log(coordinates)

                    L.polyline(

                        coordinates,
                        {
                            color:"blue",
                            weight:3,
                            opacity:.7,
                            lineJoin:'round'
                        }

                    ).addTo(map)
                }
            }

        }
        )
}   

function reAuthorize_bran() {
    fetch(auth_link, {
        method: 'post',

        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            client_id: '66642',
            client_secret: 'bfac709db726163c51137267d35f085e7f22953a',
            refresh_token: '61f855ab1e672e12e26ef6614f246c1dde4de27e',
            grant_type: 'refresh_token'

        })

    }).then(res => res.json())
        .then(res => getActivites_bran(res))
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Vicki.Data
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function getActivites_vic(res){

    const activities_link = `https://www.strava.com/api/v3/athlete/activities?per_page=200&access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => res.json())
        .then(function (data){

            for(var x=0; x<data.length; x++){

                if ((data[x].map.summary_polyline) != null) {
                    console.log(data[x].map.summary_polyline)
                    var coordinates = L.Polyline.fromEncoded(data[x].map.summary_polyline).getLatLngs()
                    console.log(coordinates)

                    L.polyline(

                        coordinates,
                        {
                            color:"green",
                            weight:4,
                            opacity:.7,
                            lineJoin:'round'
                        }

                    ).addTo(map)
                }
            }

        }
        )
}   

function reAuthorize_vic() {
    fetch(auth_link, {
        method: 'post',

        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({

            client_id: '66642',
            client_secret: 'bfac709db726163c51137267d35f085e7f22953a',
            refresh_token: '153c93800096f1d3c6055a3347d8ae23e846be40',
            grant_type: 'refresh_token'

        })

    }).then(res => res.json())
        .then(res => getActivites_vic(res))
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var map = L.map('map').setView([40.7178, -74.4431], 9);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

reAuthorize_bran()
reAuthorize_vic()
reAuthorize_kev()