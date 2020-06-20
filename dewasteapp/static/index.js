var map;
var bhangarwala = "bh";
var ebin = "ebin";
var disposalData = [];
var bhangarwalaData = [];
var locations = [];

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 19.103115, lng: 72.860539 },
        zoom: 12,
        scaleControl: true
    });

    var centerControlDiv = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv, map, "Show Bhangarwalas");

    centerControlDiv.index = 1;
    map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv);

    centerControlDiv.addEventListener('click', function () {
        clearMarkers()
        getBhangarwalaSiteDataFromFirebase()
    });

    var centerControlDiv2 = document.createElement('div');
    var centerControl2 = new CenterControl(centerControlDiv2, map, "Show E-bins");

    centerControlDiv2.index = 2;
    map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv2);

    centerControlDiv2.addEventListener('click', function () {
        clearMarkers()
        getDisposalSiteDataFromFirebase()
    });

    var centerControlDiv3 = document.createElement('div');
    var centerControl = new CenterControl(centerControlDiv3, map, "Clear all");

    centerControlDiv.index = 3;
    map.controls[google.maps.ControlPosition.LEFT_CENTER].push(centerControlDiv3);

    centerControlDiv3.addEventListener('click', function () {
        clearMarkers()
    });
}

function clearMarkers(){
    for(var i in locations){
        locations[i].setMap(null)
    }

    locations = []
}

function addMarker(element,color){
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(parseFloat(element.data()['lat']),parseFloat(element.data()['lng'])),
        title:element.data()['Title'],
        icon: {
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            fillColor: color,
            fillOpacity: 1,
            strokeColor: color,
            strokeOpacity: 0.9,
            strokeWeight: 1,
            scale: 7
        }
    });

    locations.push(marker);

    var infowindow = new google.maps.InfoWindow({
        content: element.data()['Address']
      });


    marker.setMap(map)
    
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
}

function addEbinDataToFirebase(){
    var firestore = firebase.firestore();
    var docRef = firestore.collection("ebins");
    
    var jsond = '[{"Title":"Asus serviving center 1","Address":"shop 1 mezzanine floor,mahatma kabir nagar,op  suba international hotel,andheri west 400099  ","lat":"19.1062577","lng":"72.8603199"},{"Title":"Asus serviving center 2","Address":"Indian Corporation ,Dapoda Village , Mankoli Naka, Dapode, Bhiwandi, Maharashtra 421302  ","lat":"19.242294","lng":"73.0400705"},{"Title":"Asus serviving center 3","Address":"Campuage Infocom ltd,Sim Lim Square, 408\\/409,, Lamington Rd, Krishna Kunj, Grant Road East, Shapur Baug, Grant Road, Mumbai, Maharashtra 400007  ","lat":"18.961499","lng":"72.817641"},{"Title":"Asus serviving center 4","Address":"IT system solutions Reti Bunder Rd, Mahagiri Koliwada, Kharkar Alley, Thane West, Thane, Maharashtra 400601  ","lat":"19.194516","lng":"72.981978"},{"Title":"eco tech recycling:","Address":"319, 3rd Floor, Bldg. No. 11, Commercial Tower, Near Trade Centre, Bandra Kurla Complex, Bandra (East), Mumbai, Maharashtra 400051  ","lat":"19.0716085","lng":"72.8690857"},{"Title":"The Cricket Club of India Limited","Address":"Stadium House, Veer Nariman Road, Churchgate, Mumbai, Maharashtra 400020  ","lat":"18.931464","lng":"72.824515"},{"Title":"ecocentrics2","Address":"625 G.D. Somani Marg, Cuffe Parade, Ganesh Murti Nagar, Cuffe Parade, Mumbai, Maharashtra 400005  ","lat":"18.916380","lng":"72.819606"},{"Title":"ecocentric3","Address":"A.T.E. HUBER Envirotech Private Limited,CTS 689, A-19,2nd Floor, Bhagwati House,, Veera Desai Road, Andheri (West), Veera Desai Industrial Estate, Andheri West, Mumbai, Maharashtra 400053 4RPP+C7 Mumbai, Maharashtra  ","lat":"19.136058","lng":"72.835694"},{"Title":"ecocentric4","Address":"Lokhandwala Complex, Garden No 5, Lokhandwala Complex, Andheri (W), Mumbai, Maharashtra 400053  ","lat":"19.146794","lng":"72.826342"},{"Title":"ecocentric5","Address":"Indian Merchants\\u2019 Chamber.IMC Marg, Churchgate, Churchgate, Mumbai, Maharashtra 400020  ","lat":"19.194516","lng":"72.981978"},{"Title":"ecoreco1","Address":"Unit No. 422, 4th Floor, The Summit Business Bay, Opp. Cine Max Theater, Landmark: WEH Metro Station, Andheri - Kurla Road, Andheri (East), Mumbai - 400093  ","lat":"19.1151494","lng":"72.858703"},{"Title":"ecoreco2","Address":"Eco House, S. No. 22, H. No.6 & 7, Bhoipada, Near Range Office, Sativali, Vasai (East), District: Palghar - 401 208.  ","lat":"19.4058501","lng":"72.8534558"},{"Title":"ecocreco3","Address":"Borivali Ajmera Global School Eksar Road, Yogi Nagar, Borivali West, Mumbai, Maharashtra - 400092  ","lat":"19.2373624","lng":"72.8429813"},{"Title":"ecocreco4","Address":"Churchgate   St. Xavier\'s Institute of Education 40 A, New Marine Lines, Opp. State Bank of India, Marine Lines, Mumbai, Maharashtra - 400020  ","lat":"18.9358306","lng":"72.8280473"},{"Title":"ecocreco5","Address":"Goregaon West  Patkar - Varde College S. V. Road, Goregaon West, Mumbai, Maharashtra - 400104  ","lat":"19.1686545","lng":"72.8456256"},{"Title":"ecocreco6","Address":"Kandivali West  KES Shroff College Bhulabhai Desai Rd, Kandivali west, Mumbai, Maharashtra - 400067  ","lat":"19.2021334","lng":"72.8466761"},{"Title":"ecocreco7","Address":"Matunga  R.A. Podar College Of Commerce L.N. Road, Matunga (CR), Mumbai, Maharashtra - 400019  ","lat":"19.0246884","lng":"72.8503017"},{"Title":"ecocreco8","Address":"Mira Road Royal College of Art, Commerce and Science Bhaktivedanta Swami Marg, Srishti Complex, Mira Road East, Penkar Pada, Mira Bhayandar, Maharashtra - 401107  ","lat":"19.2871393","lng":"72.8688418"},{"Title":"ecocreco9","Address":"Navi Mumbai Navi Mumbai Bengali Association, (Kali Mandir) Plot No. 25A, Sector 6, Vashi, Navi Mumbai, Maharashtra - 400703  ","lat":"19.0721564","lng":"72.9898552"},{"Title":"ecocreco10","Address":"Thane Mumbra Ward Office Opposite MM valley behind Talavpali, Kausa, Mumbra, Thane, Maharashtra - 400612  ","lat":"19.1663204","lng":"73.0317865"}]';
    var arr = JSON.parse(jsond);
    
    for(var i = 0 ; i < arr.length ; i++){
        docRef.add(arr[i]).then(function(){
            console.log("Done deal");
        }).catch(function(error){
            console.log(error);
        });
    }
}

function addBhangarwalaDataToFirebase(){
    var firestore = firebase.firestore();
    var docRef = firestore.collection("bhangarwalas");
    
    var jsond = '[{"Title":"ecocreco11","Address":"Thane Kalwa Ward Office Near New Kalwa High School, Budhaji Nagar, Kalwa, Thane - 400605  ","lat":"19.1926641","lng":"72.9890501"},{"Title":"ecocreco12","Address":"Thane Wagle Estate Ward Office Near Aplab Company, Mulund Checknaka, Wagle Estate, Thane - 400604  ","lat":"19.1860697","lng":"72.9578179"},{"Title":"ecocreco13","Address":"Thane Majiwada-Manpada Ward Office Opp. Balkum Fire Brigade, Balkum, Thane - 400607  ","lat":"19.2192399","lng":"72.9840526"},{"Title":"ecocreco14","Address":"Thane Lokmanyanagar-Sawarkar Nagar Ward Office Vedant Complex, Vartak Nagar, Thane - 400606  ","lat":"19.2192399","lng":"72.9840526"},{"Title":"ecocreco15","Address":"Thane Thane Municipal Corporation (Head Office) Mahapalika Bhavan, Major General Arunkumar Vaidya Road, Panchpakhadi, Chandanwadi, Thane - 400602  ","lat":"19.1975258","lng":"72.9672792"},{"Title":"ecocreco16","Address":"Vile Parle West Lokmanya Seva Sangh Ram Mandir Rd, Satsang CHSL, Vile Parle East, Vile Parle, Mumbai, Maharashtra - 400057  ","lat":"19.100778","lng":"72.8474676"},{"Title":"ecocreco17","Address":"Chembur Associate Professor & Chairperson - Entrepreneurship Cell Vivekananda Education Society (Institute of Management) 495\\/497, Hashu Advani Memorial Complex, Collectors Colony, Chembur, Wadivali Village, Mumbai, Maharashtra - 400074  ","lat":"19.045393","lng":"72.8896053"},{"Title":"ecocreco18","Address":"Cuffe Parade World Trade Centre World Trade Centre, Cuffe Parade, Mumbai - 400005  ","lat":"18.9150932","lng":"72.8185437"},{"Title":"ecocreco19","Address":"Juhu Juhu Vile Parle Gymkhana (JVPG) Club Plot No. U-13, N. S. Road No. 13, Opp. Juhu Bus Depot, JVPD Scheme, Juhu, Mumbai, Maharashtra - 400049  ","lat":"19.1084749","lng":"72.8270143"},{"Title":"ecocreco20","Address":"Kanjurmarg West Great Eastern Gardens Lal Bahadur Shastri Marg, MMRDA Colony, Ambedkar Nagar, Kanjurmarg West, Bhandup West, Mumbai, Maharashtra - 400078  ","lat":"19.1340917","lng":"72.9297974"},{"Title":"ecocreco21","Address":"Mulund West Mulund College Of Commerce S.N. Road, Near Court, Mulund West, Mumbai, Maharashtra - 400080  ","lat":"19.1754327","lng":"72.9583228"},{"Title":"ecocreco22","Address":"Prabhadevi (For resident only) Sumer Trinity Towers Sayani Road, Prabhadevi, Mumbai, Maharashtra - 400025  ","lat":"19.01122","lng":"72.8297783"},{"Title":"ecocreco23","Address":"Santa Cruz Chhatrapati Shivaji International Airport (T2, T1B) Chhatrapati Shivaji International Airport Area, Vile Parle, Mumbai, Maharashtra - 400099  ","lat":"19.0895595","lng":"72.8656144"},{"Title":"ecocreco24","Address":"Thane Diva Ward Office Khardi Gaon, Khardi-Diva Road, Thane.  ","lat":"19.169304","lng":"73.0452109"},{"Title":"ecocreco30","Address":"Thane Shahu Market, Naupada, Thane - 400602  ","lat":"19.188666","lng":"72.967522"},{"Title":"ecocreco25","Address":"Thane Naupada-Kopari Ward Office Shahu Market, Naupada, Thane - 400602  ","lat":"19.182931","lng":"72.9758718"},{"Title":"ecocreco26","Address":"Thane Vartak Nagar Ward Office Vedant Complex, Vartak Nagar, Thane - 400606  ","lat":"19.2083711","lng":"72.9601638"},{"Title":"ecocreco27","Address":"Thane Uthalsar Ward Office Jogila Market, Dr. Ambedkar Road, Uthalsar, Thane - 400601  ","lat":"19.2010794","lng":"72.9775328"},{"Title":"ecocreco28","Address":"Wadala East Vidyalankar Technology Institute Vidyalankar campus,Vidyalankar College Marg, Wadala East, Mumbai, Maharashtra - 400037  ","lat":"19.0215885","lng":"72.8707363"},{"Title":"ecocreco29","Address":"Vile Parle West Sannyas Ashram Near Tata Compound Municipal School, Sanyas Ashram Marg, Vile Parle West, Mumbai, Maharashtra - 400056  ","lat":"19.1044822","lng":"72.8410824"}]';
    var arr = JSON.parse(jsond);
    
    for(var i = 0 ; i < arr.length ; i++){
        docRef.add(arr[i]).then(function(){
            console.log("Done deal");
        }).catch(function(error){
            console.log(error);
        });
    }
}

function getDisposalSiteDataFromFirebase(){
    var firestore = firebase.firestore()
    var docRef = firestore.collection("ebins")

    docRef.get().then(function(docs){
        docs.forEach(element => {
            disposalData.push(element.data())
    
            addMarker(element,"#00f")
    
            console.log(parseFloat(element.data()['lat']),parseFloat(element.data()['lng']))
        });
    
        // console.log(locationData[0])
    }).catch(function(error){
        console.log(error);
    })
}

function getBhangarwalaSiteDataFromFirebase(){
    var firestore = firebase.firestore()
    var docRef = firestore.collection("bhangarwalas")

    docRef.get().then(function(docs){
        docs.forEach(element => {
            bhangarwalaData.push(element.data())
    
            addMarker(element,"#f00")
    
            console.log(parseFloat(element.data()['lat']),parseFloat(element.data()['lng']))
        });
    
        // console.log(locationData[0])
    }).catch(function(error){
        console.log(error);
    })
}

function CenterControl(controlDiv, map, text) {
    var chicago = { lat: 19.133050, lng: 72.913381 };

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '16px';
    controlText.style.lineHeight = '38px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = text;
    controlUI.appendChild(controlText);
}

// addEbinDataToFirebase()
// addBhangarwalaDataToFirebase()
// getDisposalSiteDataFromFirebase()
// getBhangarwalaSiteDataFromFirebase()