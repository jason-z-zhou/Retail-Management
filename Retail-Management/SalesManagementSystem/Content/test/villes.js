var villes = [
    {name:"Paris",dpts:75,region:"Ile-de-France",lat:48.8566667,lng:2.3509870999999976, data:'Paris !', data:'test !'},
    {name:"Marseille",dpts:13,region:"Provence-Alpes-Côte d'Azur",lat:43.2976116,lng:5.381042100000059, data:'Paris !', data:'test !'},
    {name:"Lyon",dpts:69,region:"Rhône-Alpes",lat:45.7673095,lng:4.834251300000005, data:'test !'},
    {name:"Toulouse",dpts:31,region:"Midi-Pyrénées",lat:43.604363,lng:1.4429513000000043, data:'test !'},
    {name:"Nice",dpts:6,region:"Provence-Alpes-Côte d'Azur",lat:43.708412,lng:7.267056, data:'test !'},
    {name:"Nantes",dpts:44,region:"Pays de la Loire",lat:47.2168424,lng:-1.5567445000000362, data:'test !'},
    {name:"Strasbourg",dpts:67,region:"Alsace",lat:48.5829331,lng:7.7437488000000485, data:'test !'},
    {name:"Montpellier",dpts:34,region:"Languedoc-Roussillon",lat:43.608176,lng:3.8794454999999743, data:'test !'},
    {name:"Bordeaux",dpts:33,region:"Aquitaine",lat:44.8373682,lng:-0.5761439999999993, data:'test !'},
    {name:"Rennes",dpts:35,region:"Bretagne",lat:48.1117806,lng:-1.6802640999999312, data:'test !'},
    {name:"Le Havre",dpts:76,region:"Haute-Normandie",lat:49.4925909,lng:0.10650269999996453, data:'test !'},
    {name:"Reims",dpts:51,region:"Champagne-Ardenne",lat:49.2566023,lng:4.033090899999934, data:'test !'},
    {name:"Lille",dpts:59,region:"Nord-Pas-de-Calais",lat:50.6371834,lng:3.063017400000035, data:'test !'},
    {name:"Saint-Etienne",dpts:42,region:"Rhône-Alpes",lat:45.439654,lng:4.38781270000004, data:'test !'},
    {name:"Toulon",dpts:83,region:"Provence-Alpes-Côte d'Azur",lat:43.1251606,lng:5.931111900000019, data:'test !'},
    {name:"Angers",dpts:49,region:"Pays de la Loire",lat:47.4694458,lng:-0.5490345000000616, data:'test !'},
    {name:"Brest",dpts:29,region:"Bretagne",lat:48.3899091,lng:-4.487186299999962, data:'test !'},
    {name:"Grenoble",dpts:38,region:"Rhône-Alpes",lat:45.1942765,lng:5.731633500000044, data:'test !'},
    {name:"Dijon",dpts:21,region:"Bourgogne",lat:47.327213,lng:5.043987499999957, data:'test !'},
    {name:"Le Mans",dpts:72,region:"Pays de la Loire",lat:48.0077158,lng:0.19857869999998456, data:'test !'},
    {name:"Clermont-Ferrand",dpts:63,region:"Auvergne",lat:45.7771681,lng:3.082417699999951, data:'test !'},
    {name:"Amiens",dpts:80,region:"Picardie",lat:49.8939183,lng:2.294243599999959, data:'test !'},
    {name:"Limoges",dpts:87,region:"Limousin",lat:45.8285215,lng:1.2617460000000165, data:'test !'},
    {name:"Aix-en-Provence",dpts:13,region:"Provence-Alpes-Côte d'Azur",lat:43.5249088,lng:5.454144400000018, data:'test !'},
    {name:"Nîmes",dpts:30,region:"Languedoc-Roussillon",lat:43.83459,lng:4.360863699999982, data:'test !'},
    {name:"Tours",dpts:37,region:"Centre",lat:47.3902942,lng:0.6888513999999759, data:'test !'},
    {name:"Metz",dpts:57,region:"Lorraine",lat:49.1161273,lng:6.172695500000032, data:'test !'},
    {name:"Villeurbanne",dpts:69,region:"Rhône-Alpes",lat:45.7647117,lng:4.880393799999979, data:'test !'},
    {name:"Besançon",dpts:25,region:"Franche-Comté",lat:47.2412254,lng:6.025565599999936, data:'test !'},
    {name:"Caen",dpts:14,region:"Basse-Normandie",lat:49.1847173,lng:-0.3602988000000096, data:'test !'},
    {name:"Orléans",dpts:45,region:"Centre",lat:47.9013811,lng:1.9039103999999725, data:'test !'},
    {name:"Mulhouse",dpts:68,region:"Alsace",lat:47.7494919,lng:7.33978060000004, data:'test !'},
    {name:"Rouen",dpts:76,region:"Haute-Normandie",lat:49.4423668,lng:1.098492399999941, data:'test !'},
    {name:"Perpignan",dpts:66,region:"Languedoc-Roussillon",lat:42.7015792,lng:2.894170600000052, data:'test !'},
    {name:"Boulogne-Billancourt",dpts:92,region:"Ile-de-France",lat:48.8338029,lng:2.2433300000000145, data:'test !'},
    {name:"Nancy",dpts:54,region:"Lorraine",lat:48.6907887,lng:6.182504399999971, data:'test !'},
    {name:"Roubaix",dpts:59,region:"Nord-Pas-de-Calais",lat:50.6912705,lng:3.1732050000000527, data:'test !'},
    {name:"Argenteuil",dpts:95,region:"Ile-de-France",lat:48.9442517,lng:2.250959899999998, data:'test !'},
    {name:"Tourcoing",dpts:59,region:"Nord-Pas-de-Calais",lat:50.7225209,lng:3.1595413000000008, data:'test !'},
    {name:"Montreuil",dpts:93,region:"Ile-de-France",lat:48.8582468,lng:2.436806199999978, data:'test !'},
    {name:"Versailles",dpts:78,region:"Ile-de-France",lat:48.80233,lng:2.129822699999977, data:'test !'},
    {name:"Avignon",dpts:84,region:"Provence-Alpes-Côte d'Azur",lat:43.9487445,lng:4.805940700000065, data:'test !'},
    {name:"Poitiers",dpts:86,region:"Poitou-Charentes",lat:46.5869855,lng:0.34264789999997447, data:'test !'},
    {name:"Saint-Denis",dpts:93,region:"Ile-de-France",lat:48.9360802,lng:2.3648842999999715, data:'test !'},
    {name:"Nanterre",dpts:92,region:"Ile-de-France",lat:48.8900063,lng:2.1970221000000265, data:'test !'},
    {name:"Créteil",dpts:94,region:"Ile-de-France",lat:48.789613,lng:2.452627600000028, data:'test !'},
    {name:"Pau",dpts:64,region:"Aquitaine",lat:43.297521,lng:-0.3743617999999742, data:'test !'},
    {name:"Aulnay-sous-Bois",dpts:93,region:"Ile-de-France",lat:48.9402158,lng:2.50224639999999, data:'test !'},
    {name:"La Rochelle",dpts:17,region:"Poitou-Charentes",lat:46.1580216,lng:-1.1535950999999613, data:'test !'},
    {name:"Vitry-sur-Seine",dpts:94,region:"Ile-de-France",lat:48.7894538,lng:2.389352899999949, data:'test !'},
    {name:"Calais",dpts:62,region:"Nord-Pas-de-Calais",lat:50.9580293,lng:1.8524128999999903, data:'test !'},
    {name:"Colombes",dpts:92,region:"Ile-de-France",lat:48.9230455,lng:2.254945399999997, data:'test !'},
    {name:"Asnières-sur-Seine",dpts:92,region:"Ile-de-France",lat:48.9181753,lng:2.2835459000000355, data:'test !'},
    {name:"Bourges",dpts:18,region:"Centre",lat:47.082892,lng:2.396578800000043, data:'test !'},
    {name:"Rueil-Malmaison",dpts:92,region:"Ile-de-France",lat:48.8773946,lng:2.1791329000000133, data:'test !'},
    {name:"Champigny-sur-Marne",dpts:94,region:"Ile-de-France",lat:48.8172586,lng:2.497046800000021, data:'test !'},
    {name:"Saint-Maur-des-Fossés",dpts:94,region:"Ile-de-France",lat:48.7979883,lng:2.5028961000000436, data:'test !'},
    {name:"Antibes",dpts:6,region:"Alpes-Maritimes",lat:43.6162274,lng:7.119040600000062, data:'test !'},
    {name:"Dunkerque",dpts:59,region:"Nord-Pas-de-Calais",lat:51.0342918,lng:2.3768198999999868, data:'test !'},
    {name:"Béziers",dpts:34,region:"Languedoc-Roussillon",lat:43.3416292,lng:3.2178159999999707, data:'test !'},
    {name:"Courbevoie",dpts:92,region:"Ile-de-France",lat:48.8968232,lng:2.256540599999994, data:'test !'},
    {name:"Saint-Nazaire",dpts:44,region:"Pays de la Loire",lat:47.274331,lng:-2.21371709999994, data:'test !'},
    {name:"Cannes",dpts:6,region:"Alpes-Maritimes",lat:43.5539246,lng:7.017068999999992, data:'test !'},
    {name:"Colmar",dpts:68,region:"Alsace",lat:48.0806788,lng:7.35997210000005, data:'test !'},
    {name:"Quimper",dpts:29,region:"Bretagne",lat:47.9959505,lng:-4.099922300000003, data:'test !'},
    {name:"Valence",dpts:26,region:"Rhône-Alpes",lat:44.9299029,lng:4.889940900000056, data:'test !'},
    {name:"Villeneuve-d’Ascq",dpts:59,region:"Nord-Pas-de-Calais",lat:50.6206973,lng:3.1314976999999544, data:'test !'},
    {name:"Aubervilliers",dpts:93,region:"Ile-de-France",lat:48.9148234,lng:2.3812070999999833, data:'test !'},
    {name:"Mérignac",dpts:33,region:"Aquitaine",lat:44.8417671,lng:-0.6477955000000293, data:'test !'},
    {name:"Drancy",dpts:93,region:"Ile-de-France",lat:48.9197923,lng:2.451480100000026, data:'test !'},
    {name:"Troyes",dpts:10,region:"Champagne-Ardenne",lat:48.2974686,lng:4.0748009999999795, data:'test !'},
    {name:"Lorient",dpts:56,region:"Bretagne",lat:47.7475738,lng:-3.36457740000003, data:'test !'},
    {name:"Saint-Quentin",dpts:2,region:"Bérigny",lat:49.1545493,lng:-0.9496134999999413, data:'test !'},
    {name:"La Seyne-sur-Mer",dpts:83,region:"Provence-Alpes-Côte d'Azur",lat:43.0944682,lng:5.882861100000014, data:'test !'},
    {name:"Antony",dpts:92,region:"Ile-de-France",lat:48.7536648,lng:2.2971119000000044, data:'test !'},
    {name:"Neuilly-sur-Seine",dpts:92,region:"Ile-de-France",lat:48.8836306,lng:2.2725205000000415, data:'test !'},
    {name:"Niort",dpts:79,region:"Poitou-Charentes",lat:46.3238567,lng:-0.45758360000002085, data:'test !'},
    {name:"Noisy-le-Grand",dpts:93,region:"Ile-de-France",lat:48.8477982,lng:2.5527549999999337, data:'test !'},
    {name:"Sarcelles",dpts:95,region:"Ile-de-France",lat:48.9963082,lng:2.3794639999999845, data:'test !'},
    {name:"Charleville-Mézières",dpts:8,region:"Ardennes",lat:49.799262,lng:4.717026, data:'test !'},
    {name:"Chambéry",dpts:73,region:"Rhône-Alpes",lat:45.5667045,lng:5.920987400000058, data:'test !'},
    {name:"Beauvais",dpts:60,region:"Picardie",lat:49.4292901,lng:2.081068899999991, data:'test !'},
    {name:"Pessac",dpts:33,region:"Aquitaine",lat:44.8037499,lng:-0.6316784000000553, data:'test !'},
    {name:"Vénissieux",dpts:69,region:"Rhône-Alpes",lat:45.696475,lng:4.883792699999958, data:'test !'},
    {name:"Cholet",dpts:49,region:"Pays de la Loire",lat:47.0579466,lng:-0.8791205999999647, data:'test !'},
    {name:"Cergy",dpts:95,region:"Ile-de-France",lat:49.0525005,lng:2.0388295999999855, data:'test !'},
    {name:"Levallois-Perret",dpts:92,region:"Ile-de-France",lat:48.8943429,lng:2.2883372999999665, data:'test !'},
    {name:"Ajaccio",dpts:20,region:"Corse-du-Sud",lat:41.909853,lng:8.692083300000036, data:'test !'},
    {name:"Vannes",dpts:56,region:"Bretagne",lat:47.6549032,lng:-2.7595205999999735, data:'test !'},
    {name:"Montauban",dpts:82,region:"Midi-Pyrénées",lat:44.0175746,lng:1.358914499999969, data:'test !'},
    {name:"Laval",dpts:53,region:"Pays de la Loire",lat:48.0704325,lng:-0.7735635999999886, data:'test !'},
    {name:"Evreux",dpts:27,region:"Haute-Normandie",lat:49.0245289,lng:1.1511090000000195, data:'test !'},
    {name:"Hyères",dpts:83,region:"Provence-Alpes-Côte d'Azur",lat:43.1198686,lng:6.128576800000019, data:'test !'},
    {name:"Issy-les-Moulineaux",dpts:92,region:"Ile-de-France",lat:48.8230697,lng:2.273393599999963}
];