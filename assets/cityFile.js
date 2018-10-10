var cityParams = [
  //	[city, lat, long, gmt, dst]
  //['City Name',	GPHI,	GL,	TZ,	SUW],
  ["عجمان", 25.4105522, 55.5022193, 4, 8],
  ["Kuwait", 29 + 23 / 60.0, 48, 3, 8],
  ["Abadan", 30 + 22 / 60.0, 48 + 18 / 60.0, 3.5, 6],
  ["Abidjan", 5 + 19 / 60.0, -(4 + 1 / 60.0), 0, 8],
  ["Abu-dhabi", 24 + 28 / 60.0, 54 + 25 / 60.0, 4, 8],
  ["Abuja", 9 + 40 / 60.0, 7 + 29 / 60.0, 1, 8],
  ["Accra", 5 + 32 / 60.0, -(12 / 60.0), 0, 0],
  ["Adeliad", -(34 + 56 / 60.0), 138 + 35 / 60.0, 9, 4],
  ["Aden", 12 + 47 / 60.0, 45 + 2 / 60.0, 3, 8],
  ["Ahsaa", 23 + 25 / 60.0, 49 + 36 / 60.0, 3, 8],
  ["Ahwaz", 31 + 25 / 60.0, 48 + 40 / 60.0, 3.5, 6],
  ["Alger", 36 + 45 / 60.0, 3 + 5 / 60.0, 0, 0],
  ["Amman", 31 + 57 / 60.0, 35 + 56 / 60.0, 2, 1],
  ["Amsterdam", 52 + 23 / 60.0, 4 + 53 / 60.0, 1, 1],
  ["Ankara", 39 + 56 / 60.0, 32 + 52 / 60.0, 2, 1],
  ["Annajaf", 31 + 59 / 60.0, 44 + 20 / 60.0, 3, 8],
  ["Antibes", 43.5875, 7.1161, 1, 1],
  ["Arbil", 36 + 11 / 60.0, 43 + 59 / 60.0, 3, 8],
  ["Asfahan", 32 + 40 / 60.0, 51 + 30 / 60.0, 3.5, 6],
  ["Ashkabad", 37 + 57 / 60.0, 58 + 23 / 60.0, 4, 0],
  ["Baalabck", 34, 36 + 12 / 60.0, 2, 1],
  ["Baghdad", 33 + 23 / 60.0, 44 + 30 / 60.0, 3, 8],
  ["Baku", 40 + 25 / 60.0, 49 + 50 / 60.0, 4, 0],
  ["Bamako", 12 + 39 / 60.0, -(7 + 59 / 60.0), 0, 8],
  ["Bangkok", 13 + 45 / 60.0, 100 + 31 / 60.0, 7, 0],
  ["Banglor", 12 + 57 / 60.0, 77 + 33 / 60.0, 5.5, 8],
  ["Banjul", 13 + 27 / 60.0, -(16 + 35 / 60.0), 0, 8],
  ["Basrah", 30 + 30 / 60.0, 47 + 50 / 60.0, 3, 8],
  ["Beirut", 33.9 + 22 / 3600, 35 + 28 / 60.0, 2, 1],
  ["Berlin", 52 + 30 / 60.0, 13 + 23 / 60.0, 1, 1],
  ["Bern", 52 + 31 / 60.0, 13 + 24 / 60.0, 1, 1],
  ["Bintjubail", 33 + 7 / 60.0, 35 + 26 / 60.0, 2, 1],
  ["Bissau", 11 + 50 / 60.0, -(15 + 37 / 60.0), 0, 8],
  ["Blacks burg", 35 + 7 / 60.0, -(81 + 31 / 60.0), -5, 3],
  ["Bochum", 51 + 28 / 60.0, 7 + 12 / 60.0, 1, 1],
  ["Bombay", 19, 72 + 50 / 60.0, 5.5, 8],
  ["Bonn", 50 + 43 / 60.0, 7 + 5 / 60.0, 1, 1],
  ["Boston", 42 + 18 / 60.0, -71, -5, 3],
  ["Boulder", 40.015, -(105 + 27 / 60.0), -7, 3],
  ["Brazzaville", -(4 + 7 / 60.0), 15 + 15 / 60.0, 1, 8],
  ["Breiten-Germany", 47 + 31 / 60.0, 10 + 20 / 60.0, 1, 1],
  ["Bremen", 53 + 6 / 60.0, 8 + 51 / 60.0, 1, 1],
  ["Brisbann", -(27 + 28 / 60.0), 153 + 1 / 60.0, 10, 4],
  ["Brussels", 50 + 51 / 60.0, 4 + 21 / 60.0, 1, 2],
  ["Buenos aires", -(34 + 50 / 60.0), -(58 + 37 / 60.0), -4, 5],
  ["Buffalo", 42.8954, -78.886, -5, 3],
  ["Cairo", 30 + 3 / 60.0, 31 + 15 / 60.0, 2, 7],
  ["Canberra", -(35 + 20 / 60.0), 149 + 10 / 60.0, 10, 4],
  ["Cape town", -(33 + 59 / 60.0), 18 + 30 / 60.0, 1, 8],
  ["Caracas", 10 + 52 / 60.0, -(66 + 50 / 60.0), -4.5, 5],
  ["Casablanca", 33 + 36 / 60.0, -(7 + 37 / 60.0), 0, 8],
  ["Cheltenham", 51 + 53 / 60.0, -(2 + 4 / 60.0), 0, 1],
  ["Chemnitz 1", 50.8333, 12.9167, 1, 1],
  ["Chemnitz 2", 54.1935, 9.092241, 1, 1],
  ["Chicago", 41 + 50 / 60.0, -(87 + 50 / 60.0), -6, 3],
  ["Clascow", 55 + 51 / 60.0, -(4 + 16 / 60.0), 0, 1],
  ["Colorado-Center", 39, -(105 + 38 / 60.0), -7, 3],
  ["Columbia", 46 + 15 / 60.0, -124, -8, 3],
  ["Conakry", 9 + 30 / 60.0, -(13 + 43 / 60.0), 0, 8],
  ["Copenhagen", 55 + 40 / 60.0, 12 + 35 / 60.0, 1, 1],
  ["Cotonou", 6 + 27 / 60.0, 2 + 27 / 60.0, 1, 8],
  ["Curitiba", -(25 + 25 / 60.0), -(49 + 45 / 60.0), -3, 8],
  ["Dacca", 23 + 49 / 60.0, 90 + 25 / 60.0, 6, 0],
  ["Dakar", 14 + 40 / 60.0, -(17 + 26 / 60.0), 0, 8],
  ["Dalhi", 28 + 39 / 60.0, 77 + 14 / 60.0, 5.5, 8],
  ["Damascus", 33 + 30 / 60.0, 36 + 18 / 60.0, 2, 2],
  ["Dar es salaam", -(6 + 48 / 60.0), 39 + 12 / 60.0, 3, 8],
  ["Daraa", 32 + 37 / 60.0, 36 + 6 / 60.0, 2, 2],
  ["Deir ez zor", 35 + 19 / 60.0, 40.25, 2, 2],
  ["Dettriot", 42 + 22 / 60.0, -(83 + 7 / 60.0), -5, 3],
  ["Dillingen", 49 + 20 / 60.0, 6 + 43 / 60.0, 1, 1],
  ["Diwanyya", 31.977375, 44.896359, 3, 8],
  ["Diyalah", 33 + 44 / 60.0, 44 + 41 / 60.0, 3, 8],
  ["Djakarta", -(6 + 9 / 60.0), 106 + 49 / 60.0, 7, 0],
  ["Doha", 25 + 17 / 60.0, 51 + 32 / 60.0, 3, 8],
  ["Douala", 4, -(5 + 30 / 60.0), 1, 8],
  ["Dubai", 25 + 15 / 60.0, 55 + 15 / 60.0, 4, 8],
  ["Dublin", 53 + 26 / 60.0, -(6 + 15 / 60.0), 0, 1],
  ["Dunver", 39.7618, -104.881, -7, 3],
  ["Dushamb", 38 + 34 / 60.0, 68 + 48 / 60.0, 5, 8],
  ["Edlib", 35 + 55 / 60.0, 36 + 37 / 60.0, 2, 2],
  ["Edmonton", 53 + 33 / 60.0, -(113 + 30 / 60.0), -7, 3],
  ["Entebbe", 2 / 60.0, 32 + 26 / 60.0, 3, 8],
  ["Essouara", 31 + 40 / 60.0, -(9 + 45 / 60.0), 0, 8],
  ["Fort Mackay", 57.1867, -111.63676, -7, 3],
  ["Fortmucmmury", 56 + 52 / 60.0, -(111 + 18 / 60.0), -7, 3],
  ["Foz do iguassu", -(25 + 30 / 60.0), -(54 + 30 / 60.0), -3, 5],
  ["Frankfurt", 50 + 5 / 60.0, 8 + 42 / 60.0, 1, 1],
  ["Freetown", 8 + 29 / 60.0, -(13 + 12 / 60.0), 0, 8],
  ["Ganderkesee", 53 + 1 / 60.0, 8 + 31 / 60.0, 1, 1],
  ["Gao", 28 + 37 / 60.0, 72 + 11 / 60.0, 5.5, 8],
  ["Grozny", 43 + 20 / 60.0, 45 + 42 / 60.0, 3, 8],
  ["Halab", 36 + 30 / 60.0, 37 + 22 / 60.0, 2, 2],
  ["Hama", 36 + 42 / 60.0, 35 + 10 / 60.0, 2, 2],
  ["Hannover", 52 + 25 / 60.0, 9 + 45 / 60.0, 1, 1],
  ["Harare", -(17 + 50 / 60.0), 31 + 2 / 60.0, 2, 8],
  ["Helsinki", 60 + 13 / 60.0, 24 + 55 / 60.0, 2, 1],
  ["Hermel", 34.3914, 36.3958, 2, 1],
  ["Hilla", 32 + 40 / 60.0, 44 + 35 / 60.0, 3, 8],
  ["Hofuf", 25 + 23 / 60.0, 49 + 34 / 60.0, 3, 8],
  ["Homs", 34 + 44 / 60.0, 36 + 43 / 60.0, 2, 2],
  ["Honolulu", 21 + 20 / 60.0, -158, -10, 3],
  ["Hyderabad  India", 17 + 25 / 60.0, 78 + 35 / 60.0, 5.5, 0],
  ["Hyderabad Pakistan", 25 + 24 / 60.0, 68 + 22 / 60.0, 5, 0],
  ["Istanbul", 41 + 1 / 60.0, 28 + 56 / 60.0, 2, 1],
  ["Jersy", 40 + 45 / 60.0, -(74 + 1 / 6), -5, 3],
  ["Jidda", 21 + 30 / 60.0, 39, 3, 8],
  ["Johannesburg", -(26 + 15 / 60.0), 28 + 4 / 60.0, 2, 8],
  ["Kabul", 34 + 30 / 60.0, 69 + 13 / 60.0, 4.5, 0],
  ["Kampala", 19 / 60.0, 32 + 35 / 60.0, 3, 8],
  ["Kano", 12, 8 + 32 / 60.0, 1, 8],
  ["Karashi", 24 + 52 / 60.0, 67 + 2 / 60.0, 5, 0],
  ["Karbalaa", 32 + 37 / 60.0, 44 + 2 / 60.0, 3, 8],
  ["Karlsruhe", 49 + 1 / 60.0, 8 + 24 / 60.0, 1, 1],
  ["Keil", 54 + 16 / 60.0, 10 + 3 / 60.0, 1, 1],
  ["Keiv(Ukrane)", 50 + 26 / 60.0, 30 + 30 / 60.0, 3, 8],
  ["Khartum", 15 + 36 / 60.0, 32 + 33 / 60.0, 2, 0],
  ["Khubar", 26 + 16 / 60.0, 50 + 12 / 60.0, 3, 8],
  ["Kinshasa", -(4 + 18 / 60.0), 15 + 18 / 60.0, 1, 8],
  ["Kirkuk", 35 + 28 / 60.0, 44 + 23 / 60.0, 3, 8],
  ["Kitwe", -(12 + 49 / 60.0), 28 + 13 / 60.0, 2, 8],
  ["Koot", 32 + 30 / 60.0, 45 + 50 / 60.0, 3, 8],
  ["Kualalumphur", 3 + 10 / 60.0, 101 + 42 / 60.0, 7.5, 0],
  ["Kuwait", 29 + 23 / 60.0, 48, 3, 8],
  ["Lagos", 6 + 27 / 60.0, 3 + 23 / 60.0, 1, 8],
  ["Las vigas", 36 + 12 / 60.0, -(115 + 12 / 60.0), -8, 3],
  ["Lathiqia", 35 + 31 / 60.0, 35 + 45 / 60.0, 2, 2],
  ["Libreville", 25 / 60.0, 9 + 25 / 60.0, 1, 8],
  ["Lilongwe", -14, 33 + 40 / 60.0, 2, 8],
  ["Lisbon", 38 + 43 / 60.0, -(9 + 10 / 60.0), 0, 1],
  ["Lome", 6 + 8 / 60.0, 1 + 10 / 60.0, 0, 8],
  ["London", 51 + 30 / 60.0, -(5 / 60.0), 0, 1],
  ["Los angeles", 33 + 50 / 60.0, -(118 + 22 / 60.0), -8, 3],
  ["Luanda", -(8 + 51 / 60.0), 13 + 14 / 60.0, 1, 8],
  ["Lubumbashi", -(11 + 40 / 60.0), 27 + 28 / 60.0, 2, 8],
  ["Lucknow", 26 + 50 / 60.0, 80 + 56 / 60.0, 5.5, 8],
  ["Lusaka", -(15 + 3 / 60.0), 28 + 30 / 60.0, 2, 8],
  ["Lyons", 45 + 47 / 60.0, 4 + 50 / 60.0, 1, 1],
  ["Madinah", 24 + 20 / 60.0, 39 + 55 / 60.0, 3, 8],
  ["Madras", 13 + 4 / 60.0, 80 + 17 / 60.0, 5.5, 8],
  ["Madrid", 40 + 25 / 60.0, -(3 + 41 / 60.0), 0, 1],
  ["Mainz", 50 + 6 / 60.0, 8 + 16 / 60.0, 1, 1],
  ["Malmo", 55 + 33 / 60.0, 13 + 22 / 60.0, 1, 1],
  ["Manama", 26 + 14 / 60.0, 50 + 35 / 60.0, 3, 8],
  ["Manica", -(18 + 57 / 60.0), 32 + 52 / 60.0, 2, 8],
  ["Manila", 14 + 35 / 60.0, 120 + 59 / 60.0, 8, 0],
  ["Mannhiem", 49 + 29 / 60.0, 8 + 27 / 60.0, 1, 1],
  ["Maputo", -(25 + 58 / 60.0), 32 + 36 / 60.0, 2, 8],
  ["Marturine", 9 + 40 / 60.0, -(63 + 19 / 60.0), -4.5, 5],
  ["Mashhad", 36 + 18 / 60.0, 59 + 36 / 60.0, 3.5, 6],
  ["Mecca", 21 + 26 / 60.0, 39 + 49 / 60.0, 3, 8],
  ["Mechernich", 50.6399, 6.7042, 1, 1],
  ["Melbourn", -(37 + 50 / 60.0), 145, 10, 4],
  ["Monrovia", 6 + 20 / 60.0, -(10 + 48 / 60.0), 0, 8],
  ["Montreal", 45 + 42 / 60.0, -(73 + 50 / 60.0), -5, 3],
  ["Moscow", 55 + 45 / 60.0, 37 + 47 / 60.0, 3, 1],
  ["Mousel", 36 + 20 / 60.0, 43 + 8 / 60.0, 3, 8],
  ["Munchen", 48 + 8 / 60.0, 11 + 34 / 60.0, 1, 1],
  ["Munden", 51.419285, 9.65575, 1, 1],
  ["Muscat", 23 + 40 / 60.0, 58 + 38 / 60.0, 4, 8],
  ["Nabatiya", 33 + 23 / 60.0, 35 + 29 / 60.0, 2, 1],
  ["Naimey", 13 + 31 / 60.0, 2 + 20 / 60.0, 1, 8],
  ["Nairobi", -(1 + 17 / 60.0), 36 + 49 / 60.0, 3, 8],
  ["Nasriya", 31 + 1 / 60.0, 46 + 15 / 60.0, 3, 8],
  ["New york", 40.7, -73.8, -5, 3],
  ["Newcastle", 54.97, 1.6132, 1, 1],
  ["Omarah", 31 + 51 / 60.0, 47 + 10 / 60.0, 3, 8],
  ["Oslo", 59 + 54 / 60.0, 10 + 50 / 60.0, 1, 1],
  ["Osnaburck", 52.27991, 8.04717, 1, 1],
  ["Ottawa", 45 + 20 / 60.0, -(75 + 41 / 60.0), -5, 3],
  ["Ouagadougou", 12 + 21 / 60.0, -(1 + 31 / 60.0), 0, 8],
  ["Paris", 48 + 57 / 60.0, 2 + 15 / 60.0, 1, 1],
  ["Peking", 39 + 49 / 60.0, 116 + 30 / 60.0, 8, 0],
  ["Pointe Noire", -(4 + 48 / 60.0), 12, 1, 8],
  ["Ponta grossa", -(25 + 6 / 60.0), -(50 + 1 / 60.0), -3, 5],
  ["Qanaa", 33 + 13 / 60.0, 35 + 18 / 60.0, 2, 1],
  ["Qatif", 26 + 30 / 60.0, 50, 3, 8],
  ["Qudus", 31 + 47 / 60.0, 35 + 13 / 60.0, 2, 1],
  ["Qum", 34 + 39 / 60.0, 50 + 54 / 60.0, 3.5, 6],
  ["Rabat", 34 + 2 / 60.0, -(6 + 50 / 60.0), 0, 8],
  ["Ramadi", 33 + 25 / 60.0, 43 + 21 / 60.0, 3, 8],
  ["Rio de janeiro", -(22 + 5 / 60.0), -(43 + 12 / 60.0), -3, 5],
  ["Riyadh", 24 + 39 / 60.0, 46 + 42 / 60.0, 3, 8],
  ["Samawa", 31 + 15 / 60.0, 45 + 15 / 60.0, 3, 8],
  ["Samraa", 34 + 12 / 60.0, 43 + 45 / 60.0, 3, 8],
  ["Sanaa", 15 + 21 / 60.0, 44 + 12 / 60.0, 3, 8],
  ["Sanfransisco", 37 + 40 / 60.0, -(122 + 25 / 60.0), -8, 3],
  ["Santiago 1", -(33 + 55 / 60.0), -(70 + 40 / 60.0), -4, 5],
  ["Santiago 2", -(33 + 55 / 60.0), -(70 + 40 / 60.0), -4, 8],
  ["Sao Paulo", -(23 + 37 / 60.0), -(46 + 39 / 60.0), -3, 5],
  ["Sarajevo", 43 + 37 / 60.0, 18 + 27 / 60.0, 1, 1],
  ["Shepparton", -(36 + 23 / 60.0), 145 + 24 / 60.0, 10, 4],
  ["Simferopol", 44 + 58 / 60.0, 34 + 2 / 60.0, 2, 1],
  ["Singapore", 1.17, 103.51, 7.5, 0],
  ["Srinagar", 34 + 5 / 60.0, 74 + 48 / 60.0, 5.5, 0],
  ["Stockholm", 59 + 21 / 60.0, 18 + 3 / 60.0, 1, 1],
  ["Stuttgart", 48 + 39 / 60.0, 9 + 15 / 60.0, 1, 1],
  ["Stuttgurt", 48 + 39 / 60.0, 9 + 16 / 60.0, 1, 1],
  ["Subre", 5 + 47 / 60.0, -(6 + 35 / 60.0), 0, 8],
  ["Suliamaniya", 35 + 33 / 60.0, 45 + 26 / 60.0, 3, 8],
  ["Suva", -(18 + 5 / 60.0), 178 + 20 / 60.0, 12, 4],
  ["Syda", 33 + 33 / 60.0, 35 + 22 / 60.0, 2, 1],
  ["Sydney", -(33 + 55 / 60.0), 151 + 10 / 60.0, 10, 4],
  ["Tabriz", 38 + 2 / 60.0, 46 + 24 / 60.0, 3.5, 6],
  ["Tall-afar", 36 + 22 / 60.0, 42 + 27 / 60.0, 3, 8],
  ["Tarablus", 34 + 26 / 60.0, 35 + 51 / 60.0, 2, 1],
  ["Tehran", 35 + 40 / 60.0, 51 + 26 / 60.0, 3.5, 6],
  ["Tokyou", 35 + 48 / 60.0, 139 + 45 / 60.0, 9, 0],
  ["Toronto", 43 + 42 / 60.0, -(79 + 30 / 60.0), -5, 3],
  ["Toronto", 45.09866, 7.68045, 1, 1],
  ["Tripoli", 33, 13.33, 1, 0],
  ["Tucson", 32 + 40 / 60.0, -(110 + 48 / 60.0), -7, 3],
  ["Tunis", 36 + 48 / 60.0, 10 + 10 / 60.0, 1, 8],
  ["Tyr (Sur)", 33 + 17 / 60.0, 35 + 11 / 60.0, 2, 1],
  ["Varel", 53.3969, 8.1361, 1, 1],
  ["Venissieux", 45 + 41 / 60.0, 4 + 52 / 60.0, 1, 1],
  ["Vienna", 48 + 12 / 60.0, 16 + 22 / 60.0, 1, 1],
  ["Wellington", -(41 + 18 / 60.0), 174 + 47 / 60.0, 12, 4],
  ["Windsor", 42 + 17 / 60.0, -(83 + 0 / 60.0), -5, 3],
  ["Wolfsburg", 52 + 25 / 60.0, 10 + 47 / 60.0, 1, 1]
];
