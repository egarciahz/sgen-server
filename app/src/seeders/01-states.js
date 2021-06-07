const states = [
    {
        name: 'Andaman and Nicobar Islands',
        country_id: 101,
    },
    {
        name: 'Andhra Pradesh',
        country_id: 101,
    },
    {
        name: 'Arunachal Pradesh',
        country_id: 101,
    },
    {
        name: 'Assam',
        country_id: 101,
    },
    {
        name: 'Bihar',
        country_id: 101,
    },
    {
        name: 'Chandigarh',
        country_id: 101,
    },
    {
        name: 'Chhattisgarh',
        country_id: 101,
    },
    {
        name: 'Dadra and Nagar Haveli',
        country_id: 101,
    },
    {
        name: 'Daman and Diu',
        country_id: 101,
    },
    {
        name: 'Delhi',
        country_id: 101,
    },
    {
        name: 'Goa',
        country_id: 101,
    },
    {
        name: 'Gujarat',
        country_id: 101,
    },
    {
        name: 'Haryana',
        country_id: 101,
    },
    {
        name: 'Himachal Pradesh',
        country_id: 101,
    },
    {
        name: 'Jammu and Kashmir',
        country_id: 101,
    },
    {
        name: 'Jharkhand',
        country_id: 101,
    },
    {
        name: 'Karnataka',
        country_id: 101,
    },
    {
        name: 'Kenmore',
        country_id: 101,
    },
    {
        name: 'Kerala',
        country_id: 101,
    },
    {
        name: 'Lakshadweep',
        country_id: 101,
    },
    {
        name: 'Madhya Pradesh',
        country_id: 101,
    },
    {
        name: 'Maharashtra',
        country_id: 101,
    },
    {
        name: 'Manipur',
        country_id: 101,
    },
    {
        name: 'Meghalaya',
        country_id: 101,
    },
    {
        name: 'Mizoram',
        country_id: 101,
    },
    {
        name: 'Nagaland',
        country_id: 101,
    },
    {
        name: 'Narora',
        country_id: 101,
    },
    {
        name: 'Natwar',
        country_id: 101,
    },
    {
        name: 'Odisha',
        country_id: 101,
    },
    {
        name: 'Paschim Medinipur',
        country_id: 101,
    },
    {
        name: 'Pondicherry',
        country_id: 101,
    },
    {
        name: 'Punjab',
        country_id: 101,
    },
    {
        name: 'Rajasthan',
        country_id: 101,
    },
    {
        name: 'Sikkim',
        country_id: 101,
    },
    {
        name: 'Tamil Nadu',
        country_id: 101,
    },
    {
        name: 'Telangana',
        country_id: 101,
    },
    {
        name: 'Tripura',
        country_id: 101,
    },
    {
        name: 'Uttar Pradesh',
        country_id: 101,
    },
    {
        name: 'Uttarakhand',
        country_id: 101,
    },
    {
        name: 'Vaishali',
        country_id: 101,
    },
    {
        name: 'West Bengal',
        country_id: 101,
    },
    {
        name: 'Badakhshan',
        country_id: 1,
    },
    {
        name: 'Badgis',
        country_id: 1,
    },
    {
        name: 'Baglan',
        country_id: 1,
    },
    {
        name: 'Balkh',
        country_id: 1,
    },
    {
        name: 'Bamiyan',
        country_id: 1,
    },
    {
        name: 'Farah',
        country_id: 1,
    },
    {
        name: 'Faryab',
        country_id: 1,
    },
    {
        name: 'Gawr',
        country_id: 1,
    },
    {
        name: 'Gazni',
        country_id: 1,
    },
    {
        name: 'Herat',
        country_id: 1,
    },
    {
        name: 'Hilmand',
        country_id: 1,
    },
    {
        name: 'Jawzjan',
        country_id: 1,
    },
    {
        name: 'Kabul',
        country_id: 1,
    },
    {
        name: 'Kapisa',
        country_id: 1,
    },
    {
        name: 'Khawst',
        country_id: 1,
    },
    {
        name: 'Kunar',
        country_id: 1,
    },
    {
        name: 'Lagman',
        country_id: 1,
    },
    {
        name: 'Lawghar',
        country_id: 1,
    },
    {
        name: 'Nangarhar',
        country_id: 1,
    },
    {
        name: 'Nimruz',
        country_id: 1,
    },
    {
        name: 'Nuristan',
        country_id: 1,
    },
    {
        name: 'Paktika',
        country_id: 1,
    },
    {
        name: 'Paktiya',
        country_id: 1,
    },
    {
        name: 'Parwan',
        country_id: 1,
    },
    {
        name: 'Qandahar',
        country_id: 1,
    },
    {
        name: 'Qunduz',
        country_id: 1,
    },
    {
        name: 'Samangan',
        country_id: 1,
    },
    {
        name: 'Sar-e Pul',
        country_id: 1,
    },
    {
        name: 'Takhar',
        country_id: 1,
    },
    {
        name: 'Uruzgan',
        country_id: 1,
    },
    {
        name: 'Wardak',
        country_id: 1,
    },
    {
        name: 'Zabul',
        country_id: 1,
    },
    {
        name: 'Berat',
        country_id: 2,
    },
    {
        name: 'Bulqize',
        country_id: 2,
    },
    {
        name: 'Delvine',
        country_id: 2,
    },
    {
        name: 'Devoll',
        country_id: 2,
    },
    {
        name: 'Dibre',
        country_id: 2,
    },
    {
        name: 'Durres',
        country_id: 2,
    },
    {
        name: 'Elbasan',
        country_id: 2,
    },
    {
        name: 'Fier',
        country_id: 2,
    },
    {
        name: 'Gjirokaster',
        country_id: 2,
    },
    {
        name: 'Gramsh',
        country_id: 2,
    },
    {
        name: 'Has',
        country_id: 2,
    },
    {
        name: 'Kavaje',
        country_id: 2,
    },
    {
        name: 'Kolonje',
        country_id: 2,
    },
    {
        name: 'Korce',
        country_id: 2,
    },
    {
        name: 'Kruje',
        country_id: 2,
    },
    {
        name: 'Kucove',
        country_id: 2,
    },
    {
        name: 'Kukes',
        country_id: 2,
    },
    {
        name: 'Kurbin',
        country_id: 2,
    },
    {
        name: 'Lezhe',
        country_id: 2,
    },
    {
        name: 'Librazhd',
        country_id: 2,
    },
    {
        name: 'Lushnje',
        country_id: 2,
    },
    {
        name: 'Mallakaster',
        country_id: 2,
    },
    {
        name: 'Malsi e Madhe',
        country_id: 2,
    },
    {
        name: 'Mat',
        country_id: 2,
    },
    {
        name: 'Mirdite',
        country_id: 2,
    },
    {
        name: 'Peqin',
        country_id: 2,
    },
    {
        name: 'Permet',
        country_id: 2,
    },
    {
        name: 'Pogradec',
        country_id: 2,
    },
    {
        name: 'Puke',
        country_id: 2,
    },
    {
        name: 'Sarande',
        country_id: 2,
    },
    {
        name: 'Shkoder',
        country_id: 2,
    },
    {
        name: 'Skrapar',
        country_id: 2,
    },
    {
        name: 'Tepelene',
        country_id: 2,
    },
    {
        name: 'Tirane',
        country_id: 2,
    },
    {
        name: 'Tropoje',
        country_id: 2,
    },
    {
        name: 'Vlore',
        country_id: 2,
    },
    {
        name: "'Ayn Daflah",
        country_id: 3,
    },
    {
        name: "'Ayn Tamushanat",
        country_id: 3,
    },
    {
        name: 'Adrar',
        country_id: 3,
    },
    {
        name: 'Algiers',
        country_id: 3,
    },
    {
        name: 'Annabah',
        country_id: 3,
    },
    {
        name: 'Bashshar',
        country_id: 3,
    },
    {
        name: 'Batnah',
        country_id: 3,
    },
    {
        name: 'Bijayah',
        country_id: 3,
    },
    {
        name: 'Biskrah',
        country_id: 3,
    },
    {
        name: 'Blidah',
        country_id: 3,
    },
    {
        name: 'Buirah',
        country_id: 3,
    },
    {
        name: 'Bumardas',
        country_id: 3,
    },
    {
        name: 'Burj Bu Arririj',
        country_id: 3,
    },
    {
        name: 'Ghalizan',
        country_id: 3,
    },
    {
        name: 'Ghardayah',
        country_id: 3,
    },
    {
        name: 'Ilizi',
        country_id: 3,
    },
    {
        name: 'Jijili',
        country_id: 3,
    },
    {
        name: 'Jilfah',
        country_id: 3,
    },
    {
        name: 'Khanshalah',
        country_id: 3,
    },
    {
        name: 'Masilah',
        country_id: 3,
    },
    {
        name: 'Midyah',
        country_id: 3,
    },
    {
        name: 'Milah',
        country_id: 3,
    },
    {
        name: 'Muaskar',
        country_id: 3,
    },
    {
        name: 'Mustaghanam',
        country_id: 3,
    },
    {
        name: 'Naama',
        country_id: 3,
    },
    {
        name: 'Oran',
        country_id: 3,
    },
    {
        name: 'Ouargla',
        country_id: 3,
    },
    {
        name: 'Qalmah',
        country_id: 3,
    },
    {
        name: 'Qustantinah',
        country_id: 3,
    },
    {
        name: 'Sakikdah',
        country_id: 3,
    },
    {
        name: 'Satif',
        country_id: 3,
    },
    {
        name: "Sayda'",
        country_id: 3,
    },
    {
        name: "Sidi ban-al-'Abbas",
        country_id: 3,
    },
    {
        name: 'Suq Ahras',
        country_id: 3,
    },
    {
        name: 'Tamanghasat',
        country_id: 3,
    },
    {
        name: 'Tibazah',
        country_id: 3,
    },
    {
        name: 'Tibissah',
        country_id: 3,
    },
    {
        name: 'Tilimsan',
        country_id: 3,
    },
    {
        name: 'Tinduf',
        country_id: 3,
    },
    {
        name: 'Tisamsilt',
        country_id: 3,
    },
    {
        name: 'Tiyarat',
        country_id: 3,
    },
    {
        name: 'Tizi Wazu',
        country_id: 3,
    },
    {
        name: 'Umm-al-Bawaghi',
        country_id: 3,
    },
    {
        name: 'Wahran',
        country_id: 3,
    },
    {
        name: 'Warqla',
        country_id: 3,
    },
    {
        name: 'Wilaya d Alger',
        country_id: 3,
    },
    {
        name: 'Wilaya de Bejaia',
        country_id: 3,
    },
    {
        name: 'Wilaya de Constantine',
        country_id: 3,
    },
    {
        name: 'al-Aghwat',
        country_id: 3,
    },
    {
        name: 'al-Bayadh',
        country_id: 3,
    },
    {
        name: "al-Jaza'ir",
        country_id: 3,
    },
    {
        name: 'al-Wad',
        country_id: 3,
    },
    {
        name: 'ash-Shalif',
        country_id: 3,
    },
    {
        name: 'at-Tarif',
        country_id: 3,
    },
    {
        name: 'Eastern',
        country_id: 4,
    },
    {
        name: "Manu'a",
        country_id: 4,
    },
    {
        name: 'Swains Island',
        country_id: 4,
    },
    {
        name: 'Western',
        country_id: 4,
    },
    {
        name: 'Andorra la Vella',
        country_id: 5,
    },
    {
        name: 'Canillo',
        country_id: 5,
    },
    {
        name: 'Encamp',
        country_id: 5,
    },
    {
        name: 'La Massana',
        country_id: 5,
    },
    {
        name: 'Les Escaldes',
        country_id: 5,
    },
    {
        name: 'Ordino',
        country_id: 5,
    },
    {
        name: 'Sant Julia de Loria',
        country_id: 5,
    },
    {
        name: 'Bengo',
        country_id: 6,
    },
    {
        name: 'Benguela',
        country_id: 6,
    },
    {
        name: 'Bie',
        country_id: 6,
    },
    {
        name: 'Cabinda',
        country_id: 6,
    },
    {
        name: 'Cunene',
        country_id: 6,
    },
    {
        name: 'Huambo',
        country_id: 6,
    },
    {
        name: 'Huila',
        country_id: 6,
    },
    {
        name: 'Kuando-Kubango',
        country_id: 6,
    },
    {
        name: 'Kwanza Norte',
        country_id: 6,
    },
    {
        name: 'Kwanza Sul',
        country_id: 6,
    },
    {
        name: 'Luanda',
        country_id: 6,
    },
    {
        name: 'Lunda Norte',
        country_id: 6,
    },
    {
        name: 'Lunda Sul',
        country_id: 6,
    },
    {
        name: 'Malanje',
        country_id: 6,
    },
    {
        name: 'Moxico',
        country_id: 6,
    },
    {
        name: 'Namibe',
        country_id: 6,
    },
    {
        name: 'Uige',
        country_id: 6,
    },
    {
        name: 'Zaire',
        country_id: 6,
    },
    {
        name: 'Other Provinces',
        country_id: 7,
    },
    {
        name: 'Sector claimed by Argentina/Ch',
        country_id: 8,
    },
    {
        name: 'Sector claimed by Argentina/UK',
        country_id: 8,
    },
    {
        name: 'Sector claimed by Australia',
        country_id: 8,
    },
    {
        name: 'Sector claimed by France',
        country_id: 8,
    },
    {
        name: 'Sector claimed by New Zealand',
        country_id: 8,
    },
    {
        name: 'Sector claimed by Norway',
        country_id: 8,
    },
    {
        name: 'Unclaimed Sector',
        country_id: 8,
    },
    {
        name: 'Barbuda',
        country_id: 9,
    },
    {
        name: 'Saint George',
        country_id: 9,
    },
    {
        name: 'Saint John',
        country_id: 9,
    },
    {
        name: 'Saint Mary',
        country_id: 9,
    },
    {
        name: 'Saint Paul',
        country_id: 9,
    },
    {
        name: 'Saint Peter',
        country_id: 9,
    },
    {
        name: 'Saint Philip',
        country_id: 9,
    },
    {
        name: 'Buenos Aires',
        country_id: 10,
    },
    {
        name: 'Catamarca',
        country_id: 10,
    },
    {
        name: 'Chaco',
        country_id: 10,
    },
    {
        name: 'Chubut',
        country_id: 10,
    },
    {
        name: 'Cordoba',
        country_id: 10,
    },
    {
        name: 'Corrientes',
        country_id: 10,
    },
    {
        name: 'Distrito Federal',
        country_id: 10,
    },
    {
        name: 'Entre Rios',
        country_id: 10,
    },
    {
        name: 'Formosa',
        country_id: 10,
    },
    {
        name: 'Jujuy',
        country_id: 10,
    },
    {
        name: 'La Pampa',
        country_id: 10,
    },
    {
        name: 'La Rioja',
        country_id: 10,
    },
    {
        name: 'Mendoza',
        country_id: 10,
    },
    {
        name: 'Misiones',
        country_id: 10,
    },
    {
        name: 'Neuquen',
        country_id: 10,
    },
    {
        name: 'Rio Negro',
        country_id: 10,
    },
    {
        name: 'Salta',
        country_id: 10,
    },
    {
        name: 'San Juan',
        country_id: 10,
    },
    {
        name: 'San Luis',
        country_id: 10,
    },
    {
        name: 'Santa Cruz',
        country_id: 10,
    },
    {
        name: 'Santa Fe',
        country_id: 10,
    },
    {
        name: 'Santiago del Estero',
        country_id: 10,
    },
    {
        name: 'Tierra del Fuego',
        country_id: 10,
    },
    {
        name: 'Tucuman',
        country_id: 10,
    },
    {
        name: 'Aragatsotn',
        country_id: 11,
    },
    {
        name: 'Ararat',
        country_id: 11,
    },
    {
        name: 'Armavir',
        country_id: 11,
    },
    {
        name: 'Gegharkunik',
        country_id: 11,
    },
    {
        name: 'Kotaik',
        country_id: 11,
    },
    {
        name: 'Lori',
        country_id: 11,
    },
    {
        name: 'Shirak',
        country_id: 11,
    },
    {
        name: 'Stepanakert',
        country_id: 11,
    },
    {
        name: 'Syunik',
        country_id: 11,
    },
    {
        name: 'Tavush',
        country_id: 11,
    },
    {
        name: 'Vayots Dzor',
        country_id: 11,
    },
    {
        name: 'Yerevan',
        country_id: 11,
    },
    {
        name: 'Aruba',
        country_id: 12,
    },
    {
        name: 'Auckland',
        country_id: 13,
    },
    {
        name: 'Australian Capital Territory',
        country_id: 13,
    },
    {
        name: 'Balgowlah',
        country_id: 13,
    },
    {
        name: 'Balmain',
        country_id: 13,
    },
    {
        name: 'Bankstown',
        country_id: 13,
    },
    {
        name: 'Baulkham Hills',
        country_id: 13,
    },
    {
        name: 'Bonnet Bay',
        country_id: 13,
    },
    {
        name: 'Camberwell',
        country_id: 13,
    },
    {
        name: 'Carole Park',
        country_id: 13,
    },
    {
        name: 'Castle Hill',
        country_id: 13,
    },
    {
        name: 'Caulfield',
        country_id: 13,
    },
    {
        name: 'Chatswood',
        country_id: 13,
    },
    {
        name: 'Cheltenham',
        country_id: 13,
    },
    {
        name: 'Cherrybrook',
        country_id: 13,
    },
    {
        name: 'Clayton',
        country_id: 13,
    },
    {
        name: 'Collingwood',
        country_id: 13,
    },
    {
        name: 'Frenchs Forest',
        country_id: 13,
    },
    {
        name: 'Hawthorn',
        country_id: 13,
    },
    {
        name: 'Jannnali',
        country_id: 13,
    },
    {
        name: 'Knoxfield',
        country_id: 13,
    },
    {
        name: 'Melbourne',
        country_id: 13,
    },
    {
        name: 'New South Wales',
        country_id: 13,
    },
    {
        name: 'Northern Territory',
        country_id: 13,
    },
    {
        name: 'Perth',
        country_id: 13,
    },
    {
        name: 'Queensland',
        country_id: 13,
    },
    {
        name: 'South Australia',
        country_id: 13,
    },
    {
        name: 'Tasmania',
        country_id: 13,
    },
    {
        name: 'Templestowe',
        country_id: 13,
    },
    {
        name: 'Victoria',
        country_id: 13,
    },
    {
        name: 'Werribee south',
        country_id: 13,
    },
    {
        name: 'Western Australia',
        country_id: 13,
    },
    {
        name: 'Wheeler',
        country_id: 13,
    },
    {
        name: 'Bundesland Salzburg',
        country_id: 14,
    },
    {
        name: 'Bundesland Steiermark',
        country_id: 14,
    },
    {
        name: 'Bundesland Tirol',
        country_id: 14,
    },
    {
        name: 'Burgenland',
        country_id: 14,
    },
    {
        name: 'Carinthia',
        country_id: 14,
    },
    {
        name: 'Karnten',
        country_id: 14,
    },
    {
        name: 'Liezen',
        country_id: 14,
    },
    {
        name: 'Lower Austria',
        country_id: 14,
    },
    {
        name: 'Niederosterreich',
        country_id: 14,
    },
    {
        name: 'Oberosterreich',
        country_id: 14,
    },
    {
        name: 'Salzburg',
        country_id: 14,
    },
    {
        name: 'Schleswig-Holstein',
        country_id: 14,
    },
    {
        name: 'Steiermark',
        country_id: 14,
    },
    {
        name: 'Styria',
        country_id: 14,
    },
    {
        name: 'Tirol',
        country_id: 14,
    },
    {
        name: 'Upper Austria',
        country_id: 14,
    },
    {
        name: 'Vorarlberg',
        country_id: 14,
    },
    {
        name: 'Wien',
        country_id: 14,
    },
    {
        name: 'Abseron',
        country_id: 15,
    },
    {
        name: 'Baki Sahari',
        country_id: 15,
    },
    {
        name: 'Ganca',
        country_id: 15,
    },
    {
        name: 'Ganja',
        country_id: 15,
    },
    {
        name: 'Kalbacar',
        country_id: 15,
    },
    {
        name: 'Lankaran',
        country_id: 15,
    },
    {
        name: 'Mil-Qarabax',
        country_id: 15,
    },
    {
        name: 'Mugan-Salyan',
        country_id: 15,
    },
    {
        name: 'Nagorni-Qarabax',
        country_id: 15,
    },
    {
        name: 'Naxcivan',
        country_id: 15,
    },
    {
        name: 'Priaraks',
        country_id: 15,
    },
    {
        name: 'Qazax',
        country_id: 15,
    },
    {
        name: 'Saki',
        country_id: 15,
    },
    {
        name: 'Sirvan',
        country_id: 15,
    },
    {
        name: 'Xacmaz',
        country_id: 15,
    },
    {
        name: 'Abaco',
        country_id: 16,
    },
    {
        name: 'Acklins Island',
        country_id: 16,
    },
    {
        name: 'Andros',
        country_id: 16,
    },
    {
        name: 'Berry Islands',
        country_id: 16,
    },
    {
        name: 'Biminis',
        country_id: 16,
    },
    {
        name: 'Cat Island',
        country_id: 16,
    },
    {
        name: 'Crooked Island',
        country_id: 16,
    },
    {
        name: 'Eleuthera',
        country_id: 16,
    },
    {
        name: 'Exuma and Cays',
        country_id: 16,
    },
    {
        name: 'Grand Bahama',
        country_id: 16,
    },
    {
        name: 'Inagua Islands',
        country_id: 16,
    },
    {
        name: 'Long Island',
        country_id: 16,
    },
    {
        name: 'Mayaguana',
        country_id: 16,
    },
    {
        name: 'New Providence',
        country_id: 16,
    },
    {
        name: 'Ragged Island',
        country_id: 16,
    },
    {
        name: 'Rum Cay',
        country_id: 16,
    },
    {
        name: 'San Salvador',
        country_id: 16,
    },
    {
        name: "'Isa",
        country_id: 17,
    },
    {
        name: 'Badiyah',
        country_id: 17,
    },
    {
        name: 'Hidd',
        country_id: 17,
    },
    {
        name: 'Jidd Hafs',
        country_id: 17,
    },
    {
        name: 'Mahama',
        country_id: 17,
    },
    {
        name: 'Manama',
        country_id: 17,
    },
    {
        name: 'Sitrah',
        country_id: 17,
    },
    {
        name: 'al-Manamah',
        country_id: 17,
    },
    {
        name: 'al-Muharraq',
        country_id: 17,
    },
    {
        name: "ar-Rifa'a",
        country_id: 17,
    },
    {
        name: 'Bagar Hat',
        country_id: 18,
    },
    {
        name: 'Bandarban',
        country_id: 18,
    },
    {
        name: 'Barguna',
        country_id: 18,
    },
    {
        name: 'Barisal',
        country_id: 18,
    },
    {
        name: 'Bhola',
        country_id: 18,
    },
    {
        name: 'Bogora',
        country_id: 18,
    },
    {
        name: 'Brahman Bariya',
        country_id: 18,
    },
    {
        name: 'Chandpur',
        country_id: 18,
    },
    {
        name: 'Chattagam',
        country_id: 18,
    },
    {
        name: 'Chittagong Division',
        country_id: 18,
    },
    {
        name: 'Chuadanga',
        country_id: 18,
    },
    {
        name: 'Dhaka',
        country_id: 18,
    },
    {
        name: 'Dinajpur',
        country_id: 18,
    },
    {
        name: 'Faridpur',
        country_id: 18,
    },
    {
        name: 'Feni',
        country_id: 18,
    },
    {
        name: 'Gaybanda',
        country_id: 18,
    },
    {
        name: 'Gazipur',
        country_id: 18,
    },
    {
        name: 'Gopalganj',
        country_id: 18,
    },
    {
        name: 'Habiganj',
        country_id: 18,
    },
    {
        name: 'Jaipur Hat',
        country_id: 18,
    },
    {
        name: 'Jamalpur',
        country_id: 18,
    },
    {
        name: 'Jessor',
        country_id: 18,
    },
    {
        name: 'Jhalakati',
        country_id: 18,
    },
    {
        name: 'Jhanaydah',
        country_id: 18,
    },
    {
        name: 'Khagrachhari',
        country_id: 18,
    },
    {
        name: 'Khulna',
        country_id: 18,
    },
    {
        name: 'Kishorganj',
        country_id: 18,
    },
    {
        name: 'Koks Bazar',
        country_id: 18,
    },
    {
        name: 'Komilla',
        country_id: 18,
    },
    {
        name: 'Kurigram',
        country_id: 18,
    },
    {
        name: 'Kushtiya',
        country_id: 18,
    },
    {
        name: 'Lakshmipur',
        country_id: 18,
    },
    {
        name: 'Lalmanir Hat',
        country_id: 18,
    },
    {
        name: 'Madaripur',
        country_id: 18,
    },
    {
        name: 'Magura',
        country_id: 18,
    },
    {
        name: 'Maimansingh',
        country_id: 18,
    },
    {
        name: 'Manikganj',
        country_id: 18,
    },
    {
        name: 'Maulvi Bazar',
        country_id: 18,
    },
    {
        name: 'Meherpur',
        country_id: 18,
    },
    {
        name: 'Munshiganj',
        country_id: 18,
    },
    {
        name: 'Naral',
        country_id: 18,
    },
    {
        name: 'Narayanganj',
        country_id: 18,
    },
    {
        name: 'Narsingdi',
        country_id: 18,
    },
    {
        name: 'Nator',
        country_id: 18,
    },
    {
        name: 'Naugaon',
        country_id: 18,
    },
    {
        name: 'Nawabganj',
        country_id: 18,
    },
    {
        name: 'Netrakona',
        country_id: 18,
    },
    {
        name: 'Nilphamari',
        country_id: 18,
    },
    {
        name: 'Noakhali',
        country_id: 18,
    },
    {
        name: 'Pabna',
        country_id: 18,
    },
    {
        name: 'Panchagarh',
        country_id: 18,
    },
    {
        name: 'Patuakhali',
        country_id: 18,
    },
    {
        name: 'Pirojpur',
        country_id: 18,
    },
    {
        name: 'Rajbari',
        country_id: 18,
    },
    {
        name: 'Rajshahi',
        country_id: 18,
    },
    {
        name: 'Rangamati',
        country_id: 18,
    },
    {
        name: 'Rangpur',
        country_id: 18,
    },
    {
        name: 'Satkhira',
        country_id: 18,
    },
    {
        name: 'Shariatpur',
        country_id: 18,
    },
    {
        name: 'Sherpur',
        country_id: 18,
    },
    {
        name: 'Silhat',
        country_id: 18,
    },
    {
        name: 'Sirajganj',
        country_id: 18,
    },
    {
        name: 'Sunamganj',
        country_id: 18,
    },
    {
        name: 'Tangayal',
        country_id: 18,
    },
    {
        name: 'Thakurgaon',
        country_id: 18,
    },
    {
        name: 'Christ Church',
        country_id: 19,
    },
    {
        name: 'Saint Andrew',
        country_id: 19,
    },
    {
        name: 'Saint George',
        country_id: 19,
    },
    {
        name: 'Saint James',
        country_id: 19,
    },
    {
        name: 'Saint John',
        country_id: 19,
    },
    {
        name: 'Saint Joseph',
        country_id: 19,
    },
    {
        name: 'Saint Lucy',
        country_id: 19,
    },
    {
        name: 'Saint Michael',
        country_id: 19,
    },
    {
        name: 'Saint Peter',
        country_id: 19,
    },
    {
        name: 'Saint Philip',
        country_id: 19,
    },
    {
        name: 'Saint Thomas',
        country_id: 19,
    },
    {
        name: 'Brest',
        country_id: 20,
    },
    {
        name: "Homjel'",
        country_id: 20,
    },
    {
        name: 'Hrodna',
        country_id: 20,
    },
    {
        name: 'Mahiljow',
        country_id: 20,
    },
    {
        name: 'Mahilyowskaya Voblasts',
        country_id: 20,
    },
    {
        name: 'Minsk',
        country_id: 20,
    },
    {
        name: "Minskaja Voblasts'",
        country_id: 20,
    },
    {
        name: 'Petrik',
        country_id: 20,
    },
    {
        name: 'Vicebsk',
        country_id: 20,
    },
    {
        name: 'Antwerpen',
        country_id: 21,
    },
    {
        name: 'Berchem',
        country_id: 21,
    },
    {
        name: 'Brabant',
        country_id: 21,
    },
    {
        name: 'Brabant Wallon',
        country_id: 21,
    },
    {
        name: 'Brussel',
        country_id: 21,
    },
    {
        name: 'East Flanders',
        country_id: 21,
    },
    {
        name: 'Hainaut',
        country_id: 21,
    },
    {
        name: 'Liege',
        country_id: 21,
    },
    {
        name: 'Limburg',
        country_id: 21,
    },
    {
        name: 'Luxembourg',
        country_id: 21,
    },
    {
        name: 'Namur',
        country_id: 21,
    },
    {
        name: 'Ontario',
        country_id: 21,
    },
    {
        name: 'Oost-Vlaanderen',
        country_id: 21,
    },
    {
        name: 'Provincie Brabant',
        country_id: 21,
    },
    {
        name: 'Vlaams-Brabant',
        country_id: 21,
    },
    {
        name: 'Wallonne',
        country_id: 21,
    },
    {
        name: 'West-Vlaanderen',
        country_id: 21,
    },
    {
        name: 'Belize',
        country_id: 22,
    },
    {
        name: 'Cayo',
        country_id: 22,
    },
    {
        name: 'Corozal',
        country_id: 22,
    },
    {
        name: 'Orange Walk',
        country_id: 22,
    },
    {
        name: 'Stann Creek',
        country_id: 22,
    },
    {
        name: 'Toledo',
        country_id: 22,
    },
    {
        name: 'Alibori',
        country_id: 23,
    },
    {
        name: 'Atacora',
        country_id: 23,
    },
    {
        name: 'Atlantique',
        country_id: 23,
    },
    {
        name: 'Borgou',
        country_id: 23,
    },
    {
        name: 'Collines',
        country_id: 23,
    },
    {
        name: 'Couffo',
        country_id: 23,
    },
    {
        name: 'Donga',
        country_id: 23,
    },
    {
        name: 'Littoral',
        country_id: 23,
    },
    {
        name: 'Mono',
        country_id: 23,
    },
    {
        name: 'Oueme',
        country_id: 23,
    },
    {
        name: 'Plateau',
        country_id: 23,
    },
    {
        name: 'Zou',
        country_id: 23,
    },
    {
        name: 'Hamilton',
        country_id: 24,
    },
    {
        name: 'Saint George',
        country_id: 24,
    },
    {
        name: 'Bumthang',
        country_id: 25,
    },
    {
        name: 'Chhukha',
        country_id: 25,
    },
    {
        name: 'Chirang',
        country_id: 25,
    },
    {
        name: 'Daga',
        country_id: 25,
    },
    {
        name: 'Geylegphug',
        country_id: 25,
    },
    {
        name: 'Ha',
        country_id: 25,
    },
    {
        name: 'Lhuntshi',
        country_id: 25,
    },
    {
        name: 'Mongar',
        country_id: 25,
    },
    {
        name: 'Pemagatsel',
        country_id: 25,
    },
    {
        name: 'Punakha',
        country_id: 25,
    },
    {
        name: 'Rinpung',
        country_id: 25,
    },
    {
        name: 'Samchi',
        country_id: 25,
    },
    {
        name: 'Samdrup Jongkhar',
        country_id: 25,
    },
    {
        name: 'Shemgang',
        country_id: 25,
    },
    {
        name: 'Tashigang',
        country_id: 25,
    },
    {
        name: 'Timphu',
        country_id: 25,
    },
    {
        name: 'Tongsa',
        country_id: 25,
    },
    {
        name: 'Wangdiphodrang',
        country_id: 25,
    },
    {
        name: 'Beni',
        country_id: 26,
    },
    {
        name: 'Chuquisaca',
        country_id: 26,
    },
    {
        name: 'Cochabamba',
        country_id: 26,
    },
    {
        name: 'La Paz',
        country_id: 26,
    },
    {
        name: 'Oruro',
        country_id: 26,
    },
    {
        name: 'Pando',
        country_id: 26,
    },
    {
        name: 'Potosi',
        country_id: 26,
    },
    {
        name: 'Santa Cruz',
        country_id: 26,
    },
    {
        name: 'Tarija',
        country_id: 26,
    },
    {
        name: 'Federacija Bosna i Hercegovina',
        country_id: 27,
    },
    {
        name: 'Republika Srpska',
        country_id: 27,
    },
    {
        name: 'Central Bobonong',
        country_id: 28,
    },
    {
        name: 'Central Boteti',
        country_id: 28,
    },
    {
        name: 'Central Mahalapye',
        country_id: 28,
    },
    {
        name: 'Central Serowe-Palapye',
        country_id: 28,
    },
    {
        name: 'Central Tutume',
        country_id: 28,
    },
    {
        name: 'Chobe',
        country_id: 28,
    },
    {
        name: 'Francistown',
        country_id: 28,
    },
    {
        name: 'Gaborone',
        country_id: 28,
    },
    {
        name: 'Ghanzi',
        country_id: 28,
    },
    {
        name: 'Jwaneng',
        country_id: 28,
    },
    {
        name: 'Kgalagadi North',
        country_id: 28,
    },
    {
        name: 'Kgalagadi South',
        country_id: 28,
    },
    {
        name: 'Kgatleng',
        country_id: 28,
    },
    {
        name: 'Kweneng',
        country_id: 28,
    },
    {
        name: 'Lobatse',
        country_id: 28,
    },
    {
        name: 'Ngamiland',
        country_id: 28,
    },
    {
        name: 'Ngwaketse',
        country_id: 28,
    },
    {
        name: 'North East',
        country_id: 28,
    },
    {
        name: 'Okavango',
        country_id: 28,
    },
    {
        name: 'Orapa',
        country_id: 28,
    },
    {
        name: 'Selibe Phikwe',
        country_id: 28,
    },
    {
        name: 'South East',
        country_id: 28,
    },
    {
        name: 'Sowa',
        country_id: 28,
    },
    {
        name: 'Bouvet Island',
        country_id: 29,
    },
    {
        name: 'Acre',
        country_id: 30,
    },
    {
        name: 'Alagoas',
        country_id: 30,
    },
    {
        name: 'Amapa',
        country_id: 30,
    },
    {
        name: 'Amazonas',
        country_id: 30,
    },
    {
        name: 'Bahia',
        country_id: 30,
    },
    {
        name: 'Ceara',
        country_id: 30,
    },
    {
        name: 'Distrito Federal',
        country_id: 30,
    },
    {
        name: 'Espirito Santo',
        country_id: 30,
    },
    {
        name: 'Estado de Sao Paulo',
        country_id: 30,
    },
    {
        name: 'Goias',
        country_id: 30,
    },
    {
        name: 'Maranhao',
        country_id: 30,
    },
    {
        name: 'Mato Grosso',
        country_id: 30,
    },
    {
        name: 'Mato Grosso do Sul',
        country_id: 30,
    },
    {
        name: 'Minas Gerais',
        country_id: 30,
    },
    {
        name: 'Para',
        country_id: 30,
    },
    {
        name: 'Paraiba',
        country_id: 30,
    },
    {
        name: 'Parana',
        country_id: 30,
    },
    {
        name: 'Pernambuco',
        country_id: 30,
    },
    {
        name: 'Piaui',
        country_id: 30,
    },
    {
        name: 'Rio Grande do Norte',
        country_id: 30,
    },
    {
        name: 'Rio Grande do Sul',
        country_id: 30,
    },
    {
        name: 'Rio de Janeiro',
        country_id: 30,
    },
    {
        name: 'Rondonia',
        country_id: 30,
    },
    {
        name: 'Roraima',
        country_id: 30,
    },
    {
        name: 'Santa Catarina',
        country_id: 30,
    },
    {
        name: 'Sao Paulo',
        country_id: 30,
    },
    {
        name: 'Sergipe',
        country_id: 30,
    },
    {
        name: 'Tocantins',
        country_id: 30,
    },
    {
        name: 'British Indian Ocean Territory',
        country_id: 31,
    },
    {
        name: 'Belait',
        country_id: 32,
    },
    {
        name: 'Brunei-Muara',
        country_id: 32,
    },
    {
        name: 'Temburong',
        country_id: 32,
    },
    {
        name: 'Tutong',
        country_id: 32,
    },
    {
        name: 'Blagoevgrad',
        country_id: 33,
    },
    {
        name: 'Burgas',
        country_id: 33,
    },
    {
        name: 'Dobrich',
        country_id: 33,
    },
    {
        name: 'Gabrovo',
        country_id: 33,
    },
    {
        name: 'Haskovo',
        country_id: 33,
    },
    {
        name: 'Jambol',
        country_id: 33,
    },
    {
        name: 'Kardzhali',
        country_id: 33,
    },
    {
        name: 'Kjustendil',
        country_id: 33,
    },
    {
        name: 'Lovech',
        country_id: 33,
    },
    {
        name: 'Montana',
        country_id: 33,
    },
    {
        name: 'Oblast Sofiya-Grad',
        country_id: 33,
    },
    {
        name: 'Pazardzhik',
        country_id: 33,
    },
    {
        name: 'Pernik',
        country_id: 33,
    },
    {
        name: 'Pleven',
        country_id: 33,
    },
    {
        name: 'Plovdiv',
        country_id: 33,
    },
    {
        name: 'Razgrad',
        country_id: 33,
    },
    {
        name: 'Ruse',
        country_id: 33,
    },
    {
        name: 'Shumen',
        country_id: 33,
    },
    {
        name: 'Silistra',
        country_id: 33,
    },
    {
        name: 'Sliven',
        country_id: 33,
    },
    {
        name: 'Smoljan',
        country_id: 33,
    },
    {
        name: 'Sofija grad',
        country_id: 33,
    },
    {
        name: 'Sofijska oblast',
        country_id: 33,
    },
    {
        name: 'Stara Zagora',
        country_id: 33,
    },
    {
        name: 'Targovishte',
        country_id: 33,
    },
    {
        name: 'Varna',
        country_id: 33,
    },
    {
        name: 'Veliko Tarnovo',
        country_id: 33,
    },
    {
        name: 'Vidin',
        country_id: 33,
    },
    {
        name: 'Vraca',
        country_id: 33,
    },
    {
        name: 'Yablaniza',
        country_id: 33,
    },
    {
        name: 'Bale',
        country_id: 34,
    },
    {
        name: 'Bam',
        country_id: 34,
    },
    {
        name: 'Bazega',
        country_id: 34,
    },
    {
        name: 'Bougouriba',
        country_id: 34,
    },
    {
        name: 'Boulgou',
        country_id: 34,
    },
    {
        name: 'Boulkiemde',
        country_id: 34,
    },
    {
        name: 'Comoe',
        country_id: 34,
    },
    {
        name: 'Ganzourgou',
        country_id: 34,
    },
    {
        name: 'Gnagna',
        country_id: 34,
    },
    {
        name: 'Gourma',
        country_id: 34,
    },
    {
        name: 'Houet',
        country_id: 34,
    },
    {
        name: 'Ioba',
        country_id: 34,
    },
    {
        name: 'Kadiogo',
        country_id: 34,
    },
    {
        name: 'Kenedougou',
        country_id: 34,
    },
    {
        name: 'Komandjari',
        country_id: 34,
    },
    {
        name: 'Kompienga',
        country_id: 34,
    },
    {
        name: 'Kossi',
        country_id: 34,
    },
    {
        name: 'Kouritenga',
        country_id: 34,
    },
    {
        name: 'Kourweogo',
        country_id: 34,
    },
    {
        name: 'Leraba',
        country_id: 34,
    },
    {
        name: 'Mouhoun',
        country_id: 34,
    },
    {
        name: 'Nahouri',
        country_id: 34,
    },
    {
        name: 'Namentenga',
        country_id: 34,
    },
    {
        name: 'Noumbiel',
        country_id: 34,
    },
    {
        name: 'Oubritenga',
        country_id: 34,
    },
    {
        name: 'Oudalan',
        country_id: 34,
    },
    {
        name: 'Passore',
        country_id: 34,
    },
    {
        name: 'Poni',
        country_id: 34,
    },
    {
        name: 'Sanguie',
        country_id: 34,
    },
    {
        name: 'Sanmatenga',
        country_id: 34,
    },
    {
        name: 'Seno',
        country_id: 34,
    },
    {
        name: 'Sissili',
        country_id: 34,
    },
    {
        name: 'Soum',
        country_id: 34,
    },
    {
        name: 'Sourou',
        country_id: 34,
    },
    {
        name: 'Tapoa',
        country_id: 34,
    },
    {
        name: 'Tuy',
        country_id: 34,
    },
    {
        name: 'Yatenga',
        country_id: 34,
    },
    {
        name: 'Zondoma',
        country_id: 34,
    },
    {
        name: 'Zoundweogo',
        country_id: 34,
    },
    {
        name: 'Bubanza',
        country_id: 35,
    },
    {
        name: 'Bujumbura',
        country_id: 35,
    },
    {
        name: 'Bururi',
        country_id: 35,
    },
    {
        name: 'Cankuzo',
        country_id: 35,
    },
    {
        name: 'Cibitoke',
        country_id: 35,
    },
    {
        name: 'Gitega',
        country_id: 35,
    },
    {
        name: 'Karuzi',
        country_id: 35,
    },
    {
        name: 'Kayanza',
        country_id: 35,
    },
    {
        name: 'Kirundo',
        country_id: 35,
    },
    {
        name: 'Makamba',
        country_id: 35,
    },
    {
        name: 'Muramvya',
        country_id: 35,
    },
    {
        name: 'Muyinga',
        country_id: 35,
    },
    {
        name: 'Ngozi',
        country_id: 35,
    },
    {
        name: 'Rutana',
        country_id: 35,
    },
    {
        name: 'Ruyigi',
        country_id: 35,
    },
    {
        name: 'Banteay Mean Chey',
        country_id: 36,
    },
    {
        name: 'Bat Dambang',
        country_id: 36,
    },
    {
        name: 'Kampong Cham',
        country_id: 36,
    },
    {
        name: 'Kampong Chhnang',
        country_id: 36,
    },
    {
        name: 'Kampong Spoeu',
        country_id: 36,
    },
    {
        name: 'Kampong Thum',
        country_id: 36,
    },
    {
        name: 'Kampot',
        country_id: 36,
    },
    {
        name: 'Kandal',
        country_id: 36,
    },
    {
        name: 'Kaoh Kong',
        country_id: 36,
    },
    {
        name: 'Kracheh',
        country_id: 36,
    },
    {
        name: 'Krong Kaeb',
        country_id: 36,
    },
    {
        name: 'Krong Pailin',
        country_id: 36,
    },
    {
        name: 'Krong Preah Sihanouk',
        country_id: 36,
    },
    {
        name: 'Mondol Kiri',
        country_id: 36,
    },
    {
        name: 'Otdar Mean Chey',
        country_id: 36,
    },
    {
        name: 'Phnum Penh',
        country_id: 36,
    },
    {
        name: 'Pousat',
        country_id: 36,
    },
    {
        name: 'Preah Vihear',
        country_id: 36,
    },
    {
        name: 'Prey Veaeng',
        country_id: 36,
    },
    {
        name: 'Rotanak Kiri',
        country_id: 36,
    },
    {
        name: 'Siem Reab',
        country_id: 36,
    },
    {
        name: 'Stueng Traeng',
        country_id: 36,
    },
    {
        name: 'Svay Rieng',
        country_id: 36,
    },
    {
        name: 'Takaev',
        country_id: 36,
    },
    {
        name: 'Adamaoua',
        country_id: 37,
    },
    {
        name: 'Centre',
        country_id: 37,
    },
    {
        name: 'Est',
        country_id: 37,
    },
    {
        name: 'Littoral',
        country_id: 37,
    },
    {
        name: 'Nord',
        country_id: 37,
    },
    {
        name: 'Nord Extreme',
        country_id: 37,
    },
    {
        name: 'Nordouest',
        country_id: 37,
    },
    {
        name: 'Ouest',
        country_id: 37,
    },
    {
        name: 'Sud',
        country_id: 37,
    },
    {
        name: 'Sudouest',
        country_id: 37,
    },
    {
        name: 'Alberta',
        country_id: 38,
    },
    {
        name: 'British Columbia',
        country_id: 38,
    },
    {
        name: 'Manitoba',
        country_id: 38,
    },
    {
        name: 'New Brunswick',
        country_id: 38,
    },
    {
        name: 'Newfoundland and Labrador',
        country_id: 38,
    },
    {
        name: 'Northwest Territories',
        country_id: 38,
    },
    {
        name: 'Nova Scotia',
        country_id: 38,
    },
    {
        name: 'Nunavut',
        country_id: 38,
    },
    {
        name: 'Ontario',
        country_id: 38,
    },
    {
        name: 'Prince Edward Island',
        country_id: 38,
    },
    {
        name: 'Quebec',
        country_id: 38,
    },
    {
        name: 'Saskatchewan',
        country_id: 38,
    },
    {
        name: 'Yukon',
        country_id: 38,
    },
    {
        name: 'Boavista',
        country_id: 39,
    },
    {
        name: 'Brava',
        country_id: 39,
    },
    {
        name: 'Fogo',
        country_id: 39,
    },
    {
        name: 'Maio',
        country_id: 39,
    },
    {
        name: 'Sal',
        country_id: 39,
    },
    {
        name: 'Santo Antao',
        country_id: 39,
    },
    {
        name: 'Sao Nicolau',
        country_id: 39,
    },
    {
        name: 'Sao Tiago',
        country_id: 39,
    },
    {
        name: 'Sao Vicente',
        country_id: 39,
    },
    {
        name: 'Grand Cayman',
        country_id: 40,
    },
    {
        name: 'Bamingui-Bangoran',
        country_id: 41,
    },
    {
        name: 'Bangui',
        country_id: 41,
    },
    {
        name: 'Basse-Kotto',
        country_id: 41,
    },
    {
        name: 'Haut-Mbomou',
        country_id: 41,
    },
    {
        name: 'Haute-Kotto',
        country_id: 41,
    },
    {
        name: 'Kemo',
        country_id: 41,
    },
    {
        name: 'Lobaye',
        country_id: 41,
    },
    {
        name: 'Mambere-Kadei',
        country_id: 41,
    },
    {
        name: 'Mbomou',
        country_id: 41,
    },
    {
        name: 'Nana-Gribizi',
        country_id: 41,
    },
    {
        name: 'Nana-Mambere',
        country_id: 41,
    },
    {
        name: 'Ombella Mpoko',
        country_id: 41,
    },
    {
        name: 'Ouaka',
        country_id: 41,
    },
    {
        name: 'Ouham',
        country_id: 41,
    },
    {
        name: 'Ouham-Pende',
        country_id: 41,
    },
    {
        name: 'Sangha-Mbaere',
        country_id: 41,
    },
    {
        name: 'Vakaga',
        country_id: 41,
    },
    {
        name: 'Batha',
        country_id: 42,
    },
    {
        name: 'Biltine',
        country_id: 42,
    },
    {
        name: 'Bourkou-Ennedi-Tibesti',
        country_id: 42,
    },
    {
        name: 'Chari-Baguirmi',
        country_id: 42,
    },
    {
        name: 'Guera',
        country_id: 42,
    },
    {
        name: 'Kanem',
        country_id: 42,
    },
    {
        name: 'Lac',
        country_id: 42,
    },
    {
        name: 'Logone Occidental',
        country_id: 42,
    },
    {
        name: 'Logone Oriental',
        country_id: 42,
    },
    {
        name: 'Mayo-Kebbi',
        country_id: 42,
    },
    {
        name: 'Moyen-Chari',
        country_id: 42,
    },
    {
        name: 'Ouaddai',
        country_id: 42,
    },
    {
        name: 'Salamat',
        country_id: 42,
    },
    {
        name: 'Tandjile',
        country_id: 42,
    },
    {
        name: 'Aisen',
        country_id: 43,
    },
    {
        name: 'Antofagasta',
        country_id: 43,
    },
    {
        name: 'Araucania',
        country_id: 43,
    },
    {
        name: 'Atacama',
        country_id: 43,
    },
    {
        name: 'Bio Bio',
        country_id: 43,
    },
    {
        name: 'Coquimbo',
        country_id: 43,
    },
    {
        name: "Libertador General Bernardo O'",
        country_id: 43,
    },
    {
        name: 'Los Lagos',
        country_id: 43,
    },
    {
        name: 'Magellanes',
        country_id: 43,
    },
    {
        name: 'Maule',
        country_id: 43,
    },
    {
        name: 'Metropolitana',
        country_id: 43,
    },
    {
        name: 'Metropolitana de Santiago',
        country_id: 43,
    },
    {
        name: 'Tarapaca',
        country_id: 43,
    },
    {
        name: 'Valparaiso',
        country_id: 43,
    },
    {
        name: 'Anhui',
        country_id: 44,
    },
    {
        name: 'Anhui Province',
        country_id: 44,
    },
    {
        name: 'Anhui Sheng',
        country_id: 44,
    },
    {
        name: 'Aomen',
        country_id: 44,
    },
    {
        name: 'Beijing',
        country_id: 44,
    },
    {
        name: 'Beijing Shi',
        country_id: 44,
    },
    {
        name: 'Chongqing',
        country_id: 44,
    },
    {
        name: 'Fujian',
        country_id: 44,
    },
    {
        name: 'Fujian Sheng',
        country_id: 44,
    },
    {
        name: 'Gansu',
        country_id: 44,
    },
    {
        name: 'Guangdong',
        country_id: 44,
    },
    {
        name: 'Guangdong Sheng',
        country_id: 44,
    },
    {
        name: 'Guangxi',
        country_id: 44,
    },
    {
        name: 'Guizhou',
        country_id: 44,
    },
    {
        name: 'Hainan',
        country_id: 44,
    },
    {
        name: 'Hebei',
        country_id: 44,
    },
    {
        name: 'Heilongjiang',
        country_id: 44,
    },
    {
        name: 'Henan',
        country_id: 44,
    },
    {
        name: 'Hubei',
        country_id: 44,
    },
    {
        name: 'Hunan',
        country_id: 44,
    },
    {
        name: 'Jiangsu',
        country_id: 44,
    },
    {
        name: 'Jiangsu Sheng',
        country_id: 44,
    },
    {
        name: 'Jiangxi',
        country_id: 44,
    },
    {
        name: 'Jilin',
        country_id: 44,
    },
    {
        name: 'Liaoning',
        country_id: 44,
    },
    {
        name: 'Liaoning Sheng',
        country_id: 44,
    },
    {
        name: 'Nei Monggol',
        country_id: 44,
    },
    {
        name: 'Ningxia Hui',
        country_id: 44,
    },
    {
        name: 'Qinghai',
        country_id: 44,
    },
    {
        name: 'Shaanxi',
        country_id: 44,
    },
    {
        name: 'Shandong',
        country_id: 44,
    },
    {
        name: 'Shandong Sheng',
        country_id: 44,
    },
    {
        name: 'Shanghai',
        country_id: 44,
    },
    {
        name: 'Shanxi',
        country_id: 44,
    },
    {
        name: 'Sichuan',
        country_id: 44,
    },
    {
        name: 'Tianjin',
        country_id: 44,
    },
    {
        name: 'Xianggang',
        country_id: 44,
    },
    {
        name: 'Xinjiang',
        country_id: 44,
    },
    {
        name: 'Xizang',
        country_id: 44,
    },
    {
        name: 'Yunnan',
        country_id: 44,
    },
    {
        name: 'Zhejiang',
        country_id: 44,
    },
    {
        name: 'Zhejiang Sheng',
        country_id: 44,
    },
    {
        name: 'Christmas Island',
        country_id: 45,
    },
    {
        name: 'Cocos (Keeling) Islands',
        country_id: 46,
    },
    {
        name: 'Amazonas',
        country_id: 47,
    },
    {
        name: 'Antioquia',
        country_id: 47,
    },
    {
        name: 'Arauca',
        country_id: 47,
    },
    {
        name: 'Atlantico',
        country_id: 47,
    },
    {
        name: 'Bogota',
        country_id: 47,
    },
    {
        name: 'Bolivar',
        country_id: 47,
    },
    {
        name: 'Boyaca',
        country_id: 47,
    },
    {
        name: 'Caldas',
        country_id: 47,
    },
    {
        name: 'Caqueta',
        country_id: 47,
    },
    {
        name: 'Casanare',
        country_id: 47,
    },
    {
        name: 'Cauca',
        country_id: 47,
    },
    {
        name: 'Cesar',
        country_id: 47,
    },
    {
        name: 'Choco',
        country_id: 47,
    },
    {
        name: 'Cordoba',
        country_id: 47,
    },
    {
        name: 'Cundinamarca',
        country_id: 47,
    },
    {
        name: 'Guainia',
        country_id: 47,
    },
    {
        name: 'Guaviare',
        country_id: 47,
    },
    {
        name: 'Huila',
        country_id: 47,
    },
    {
        name: 'La Guajira',
        country_id: 47,
    },
    {
        name: 'Magdalena',
        country_id: 47,
    },
    {
        name: 'Meta',
        country_id: 47,
    },
    {
        name: 'Narino',
        country_id: 47,
    },
    {
        name: 'Norte de Santander',
        country_id: 47,
    },
    {
        name: 'Putumayo',
        country_id: 47,
    },
    {
        name: 'Quindio',
        country_id: 47,
    },
    {
        name: 'Risaralda',
        country_id: 47,
    },
    {
        name: 'San Andres y Providencia',
        country_id: 47,
    },
    {
        name: 'Santander',
        country_id: 47,
    },
    {
        name: 'Sucre',
        country_id: 47,
    },
    {
        name: 'Tolima',
        country_id: 47,
    },
    {
        name: 'Valle del Cauca',
        country_id: 47,
    },
    {
        name: 'Vaupes',
        country_id: 47,
    },
    {
        name: 'Vichada',
        country_id: 47,
    },
    {
        name: 'Mwali',
        country_id: 48,
    },
    {
        name: 'Njazidja',
        country_id: 48,
    },
    {
        name: 'Nzwani',
        country_id: 48,
    },
    {
        name: 'Bouenza',
        country_id: 49,
    },
    {
        name: 'Brazzaville',
        country_id: 49,
    },
    {
        name: 'Cuvette',
        country_id: 49,
    },
    {
        name: 'Kouilou',
        country_id: 49,
    },
    {
        name: 'Lekoumou',
        country_id: 49,
    },
    {
        name: 'Likouala',
        country_id: 49,
    },
    {
        name: 'Niari',
        country_id: 49,
    },
    {
        name: 'Plateaux',
        country_id: 49,
    },
    {
        name: 'Pool',
        country_id: 49,
    },
    {
        name: 'Sangha',
        country_id: 49,
    },
    {
        name: 'Bandundu',
        country_id: 50,
    },
    {
        name: 'Bas-Congo',
        country_id: 50,
    },
    {
        name: 'Equateur',
        country_id: 50,
    },
    {
        name: 'Haut-Congo',
        country_id: 50,
    },
    {
        name: 'Kasai-Occidental',
        country_id: 50,
    },
    {
        name: 'Kasai-Oriental',
        country_id: 50,
    },
    {
        name: 'Katanga',
        country_id: 50,
    },
    {
        name: 'Kinshasa',
        country_id: 50,
    },
    {
        name: 'Maniema',
        country_id: 50,
    },
    {
        name: 'Nord-Kivu',
        country_id: 50,
    },
    {
        name: 'Sud-Kivu',
        country_id: 50,
    },
    {
        name: 'Aitutaki',
        country_id: 51,
    },
    {
        name: 'Atiu',
        country_id: 51,
    },
    {
        name: 'Mangaia',
        country_id: 51,
    },
    {
        name: 'Manihiki',
        country_id: 51,
    },
    {
        name: 'Mauke',
        country_id: 51,
    },
    {
        name: 'Mitiaro',
        country_id: 51,
    },
    {
        name: 'Nassau',
        country_id: 51,
    },
    {
        name: 'Pukapuka',
        country_id: 51,
    },
    {
        name: 'Rakahanga',
        country_id: 51,
    },
    {
        name: 'Rarotonga',
        country_id: 51,
    },
    {
        name: 'Tongareva',
        country_id: 51,
    },
    {
        name: 'Alajuela',
        country_id: 52,
    },
    {
        name: 'Cartago',
        country_id: 52,
    },
    {
        name: 'Guanacaste',
        country_id: 52,
    },
    {
        name: 'Heredia',
        country_id: 52,
    },
    {
        name: 'Limon',
        country_id: 52,
    },
    {
        name: 'Puntarenas',
        country_id: 52,
    },
    {
        name: 'San Jose',
        country_id: 52,
    },
    {
        name: 'Abidjan',
        country_id: 53,
    },
    {
        name: 'Agneby',
        country_id: 53,
    },
    {
        name: 'Bafing',
        country_id: 53,
    },
    {
        name: 'Denguele',
        country_id: 53,
    },
    {
        name: 'Dix-huit Montagnes',
        country_id: 53,
    },
    {
        name: 'Fromager',
        country_id: 53,
    },
    {
        name: 'Haut-Sassandra',
        country_id: 53,
    },
    {
        name: 'Lacs',
        country_id: 53,
    },
    {
        name: 'Lagunes',
        country_id: 53,
    },
    {
        name: 'Marahoue',
        country_id: 53,
    },
    {
        name: 'Moyen-Cavally',
        country_id: 53,
    },
    {
        name: 'Moyen-Comoe',
        country_id: 53,
    },
    {
        name: "N'zi-Comoe",
        country_id: 53,
    },
    {
        name: 'Sassandra',
        country_id: 53,
    },
    {
        name: 'Savanes',
        country_id: 53,
    },
    {
        name: 'Sud-Bandama',
        country_id: 53,
    },
    {
        name: 'Sud-Comoe',
        country_id: 53,
    },
    {
        name: 'Vallee du Bandama',
        country_id: 53,
    },
    {
        name: 'Worodougou',
        country_id: 53,
    },
    {
        name: 'Zanzan',
        country_id: 53,
    },
    {
        name: 'Bjelovar-Bilogora',
        country_id: 54,
    },
    {
        name: 'Dubrovnik-Neretva',
        country_id: 54,
    },
    {
        name: 'Grad Zagreb',
        country_id: 54,
    },
    {
        name: 'Istra',
        country_id: 54,
    },
    {
        name: 'Karlovac',
        country_id: 54,
    },
    {
        name: 'Koprivnica-Krizhevci',
        country_id: 54,
    },
    {
        name: 'Krapina-Zagorje',
        country_id: 54,
    },
    {
        name: 'Lika-Senj',
        country_id: 54,
    },
    {
        name: 'Medhimurje',
        country_id: 54,
    },
    {
        name: 'Medimurska Zupanija',
        country_id: 54,
    },
    {
        name: 'Osijek-Baranja',
        country_id: 54,
    },
    {
        name: 'Osjecko-Baranjska Zupanija',
        country_id: 54,
    },
    {
        name: 'Pozhega-Slavonija',
        country_id: 54,
    },
    {
        name: 'Primorje-Gorski Kotar',
        country_id: 54,
    },
    {
        name: 'Shibenik-Knin',
        country_id: 54,
    },
    {
        name: 'Sisak-Moslavina',
        country_id: 54,
    },
    {
        name: 'Slavonski Brod-Posavina',
        country_id: 54,
    },
    {
        name: 'Split-Dalmacija',
        country_id: 54,
    },
    {
        name: 'Varazhdin',
        country_id: 54,
    },
    {
        name: 'Virovitica-Podravina',
        country_id: 54,
    },
    {
        name: 'Vukovar-Srijem',
        country_id: 54,
    },
    {
        name: 'Zadar',
        country_id: 54,
    },
    {
        name: 'Zagreb',
        country_id: 54,
    },
    {
        name: 'Camaguey',
        country_id: 55,
    },
    {
        name: 'Ciego de Avila',
        country_id: 55,
    },
    {
        name: 'Cienfuegos',
        country_id: 55,
    },
    {
        name: 'Ciudad de la Habana',
        country_id: 55,
    },
    {
        name: 'Granma',
        country_id: 55,
    },
    {
        name: 'Guantanamo',
        country_id: 55,
    },
    {
        name: 'Habana',
        country_id: 55,
    },
    {
        name: 'Holguin',
        country_id: 55,
    },
    {
        name: 'Isla de la Juventud',
        country_id: 55,
    },
    {
        name: 'La Habana',
        country_id: 55,
    },
    {
        name: 'Las Tunas',
        country_id: 55,
    },
    {
        name: 'Matanzas',
        country_id: 55,
    },
    {
        name: 'Pinar del Rio',
        country_id: 55,
    },
    {
        name: 'Sancti Spiritus',
        country_id: 55,
    },
    {
        name: 'Santiago de Cuba',
        country_id: 55,
    },
    {
        name: 'Villa Clara',
        country_id: 55,
    },
    {
        name: 'Government controlled area',
        country_id: 56,
    },
    {
        name: 'Limassol',
        country_id: 56,
    },
    {
        name: 'Nicosia District',
        country_id: 56,
    },
    {
        name: 'Paphos',
        country_id: 56,
    },
    {
        name: 'Turkish controlled area',
        country_id: 56,
    },
    {
        name: 'Central Bohemian',
        country_id: 57,
    },
    {
        name: 'Frycovice',
        country_id: 57,
    },
    {
        name: 'Jihocesky Kraj',
        country_id: 57,
    },
    {
        name: 'Jihochesky',
        country_id: 57,
    },
    {
        name: 'Jihomoravsky',
        country_id: 57,
    },
    {
        name: 'Karlovarsky',
        country_id: 57,
    },
    {
        name: 'Klecany',
        country_id: 57,
    },
    {
        name: 'Kralovehradecky',
        country_id: 57,
    },
    {
        name: 'Liberecky',
        country_id: 57,
    },
    {
        name: 'Lipov',
        country_id: 57,
    },
    {
        name: 'Moravskoslezsky',
        country_id: 57,
    },
    {
        name: 'Olomoucky',
        country_id: 57,
    },
    {
        name: 'Olomoucky Kraj',
        country_id: 57,
    },
    {
        name: 'Pardubicky',
        country_id: 57,
    },
    {
        name: 'Plzensky',
        country_id: 57,
    },
    {
        name: 'Praha',
        country_id: 57,
    },
    {
        name: 'Rajhrad',
        country_id: 57,
    },
    {
        name: 'Smirice',
        country_id: 57,
    },
    {
        name: 'South Moravian',
        country_id: 57,
    },
    {
        name: 'Straz nad Nisou',
        country_id: 57,
    },
    {
        name: 'Stredochesky',
        country_id: 57,
    },
    {
        name: 'Unicov',
        country_id: 57,
    },
    {
        name: 'Ustecky',
        country_id: 57,
    },
    {
        name: 'Valletta',
        country_id: 57,
    },
    {
        name: 'Velesin',
        country_id: 57,
    },
    {
        name: 'Vysochina',
        country_id: 57,
    },
    {
        name: 'Zlinsky',
        country_id: 57,
    },
    {
        name: 'Arhus',
        country_id: 58,
    },
    {
        name: 'Bornholm',
        country_id: 58,
    },
    {
        name: 'Frederiksborg',
        country_id: 58,
    },
    {
        name: 'Fyn',
        country_id: 58,
    },
    {
        name: 'Hovedstaden',
        country_id: 58,
    },
    {
        name: 'Kobenhavn',
        country_id: 58,
    },
    {
        name: 'Kobenhavns Amt',
        country_id: 58,
    },
    {
        name: 'Kobenhavns Kommune',
        country_id: 58,
    },
    {
        name: 'Nordjylland',
        country_id: 58,
    },
    {
        name: 'Ribe',
        country_id: 58,
    },
    {
        name: 'Ringkobing',
        country_id: 58,
    },
    {
        name: 'Roervig',
        country_id: 58,
    },
    {
        name: 'Roskilde',
        country_id: 58,
    },
    {
        name: 'Roslev',
        country_id: 58,
    },
    {
        name: 'Sjaelland',
        country_id: 58,
    },
    {
        name: 'Soeborg',
        country_id: 58,
    },
    {
        name: 'Sonderjylland',
        country_id: 58,
    },
    {
        name: 'Storstrom',
        country_id: 58,
    },
    {
        name: 'Syddanmark',
        country_id: 58,
    },
    {
        name: 'Toelloese',
        country_id: 58,
    },
    {
        name: 'Vejle',
        country_id: 58,
    },
    {
        name: 'Vestsjalland',
        country_id: 58,
    },
    {
        name: 'Viborg',
        country_id: 58,
    },
    {
        name: "'Ali Sabih",
        country_id: 59,
    },
    {
        name: 'Dikhil',
        country_id: 59,
    },
    {
        name: 'Jibuti',
        country_id: 59,
    },
    {
        name: 'Tajurah',
        country_id: 59,
    },
    {
        name: 'Ubuk',
        country_id: 59,
    },
    {
        name: 'Saint Andrew',
        country_id: 60,
    },
    {
        name: 'Saint David',
        country_id: 60,
    },
    {
        name: 'Saint George',
        country_id: 60,
    },
    {
        name: 'Saint John',
        country_id: 60,
    },
    {
        name: 'Saint Joseph',
        country_id: 60,
    },
    {
        name: 'Saint Luke',
        country_id: 60,
    },
    {
        name: 'Saint Mark',
        country_id: 60,
    },
    {
        name: 'Saint Patrick',
        country_id: 60,
    },
    {
        name: 'Saint Paul',
        country_id: 60,
    },
    {
        name: 'Saint Peter',
        country_id: 60,
    },
    {
        name: 'Azua',
        country_id: 61,
    },
    {
        name: 'Bahoruco',
        country_id: 61,
    },
    {
        name: 'Barahona',
        country_id: 61,
    },
    {
        name: 'Dajabon',
        country_id: 61,
    },
    {
        name: 'Distrito Nacional',
        country_id: 61,
    },
    {
        name: 'Duarte',
        country_id: 61,
    },
    {
        name: 'El Seybo',
        country_id: 61,
    },
    {
        name: 'Elias Pina',
        country_id: 61,
    },
    {
        name: 'Espaillat',
        country_id: 61,
    },
    {
        name: 'Hato Mayor',
        country_id: 61,
    },
    {
        name: 'Independencia',
        country_id: 61,
    },
    {
        name: 'La Altagracia',
        country_id: 61,
    },
    {
        name: 'La Romana',
        country_id: 61,
    },
    {
        name: 'La Vega',
        country_id: 61,
    },
    {
        name: 'Maria Trinidad Sanchez',
        country_id: 61,
    },
    {
        name: 'Monsenor Nouel',
        country_id: 61,
    },
    {
        name: 'Monte Cristi',
        country_id: 61,
    },
    {
        name: 'Monte Plata',
        country_id: 61,
    },
    {
        name: 'Pedernales',
        country_id: 61,
    },
    {
        name: 'Peravia',
        country_id: 61,
    },
    {
        name: 'Puerto Plata',
        country_id: 61,
    },
    {
        name: 'Salcedo',
        country_id: 61,
    },
    {
        name: 'Samana',
        country_id: 61,
    },
    {
        name: 'San Cristobal',
        country_id: 61,
    },
    {
        name: 'San Juan',
        country_id: 61,
    },
    {
        name: 'San Pedro de Macoris',
        country_id: 61,
    },
    {
        name: 'Sanchez Ramirez',
        country_id: 61,
    },
    {
        name: 'Santiago',
        country_id: 61,
    },
    {
        name: 'Santiago Rodriguez',
        country_id: 61,
    },
    {
        name: 'Valverde',
        country_id: 61,
    },
    {
        name: 'Aileu',
        country_id: 62,
    },
    {
        name: 'Ainaro',
        country_id: 62,
    },
    {
        name: 'Ambeno',
        country_id: 62,
    },
    {
        name: 'Baucau',
        country_id: 62,
    },
    {
        name: 'Bobonaro',
        country_id: 62,
    },
    {
        name: 'Cova Lima',
        country_id: 62,
    },
    {
        name: 'Dili',
        country_id: 62,
    },
    {
        name: 'Ermera',
        country_id: 62,
    },
    {
        name: 'Lautem',
        country_id: 62,
    },
    {
        name: 'Liquica',
        country_id: 62,
    },
    {
        name: 'Manatuto',
        country_id: 62,
    },
    {
        name: 'Manufahi',
        country_id: 62,
    },
    {
        name: 'Viqueque',
        country_id: 62,
    },
    {
        name: 'Azuay',
        country_id: 63,
    },
    {
        name: 'Bolivar',
        country_id: 63,
    },
    {
        name: 'Canar',
        country_id: 63,
    },
    {
        name: 'Carchi',
        country_id: 63,
    },
    {
        name: 'Chimborazo',
        country_id: 63,
    },
    {
        name: 'Cotopaxi',
        country_id: 63,
    },
    {
        name: 'El Oro',
        country_id: 63,
    },
    {
        name: 'Esmeraldas',
        country_id: 63,
    },
    {
        name: 'Galapagos',
        country_id: 63,
    },
    {
        name: 'Guayas',
        country_id: 63,
    },
    {
        name: 'Imbabura',
        country_id: 63,
    },
    {
        name: 'Loja',
        country_id: 63,
    },
    {
        name: 'Los Rios',
        country_id: 63,
    },
    {
        name: 'Manabi',
        country_id: 63,
    },
    {
        name: 'Morona Santiago',
        country_id: 63,
    },
    {
        name: 'Napo',
        country_id: 63,
    },
    {
        name: 'Orellana',
        country_id: 63,
    },
    {
        name: 'Pastaza',
        country_id: 63,
    },
    {
        name: 'Pichincha',
        country_id: 63,
    },
    {
        name: 'Sucumbios',
        country_id: 63,
    },
    {
        name: 'Tungurahua',
        country_id: 63,
    },
    {
        name: 'Zamora Chinchipe',
        country_id: 63,
    },
    {
        name: 'Aswan',
        country_id: 64,
    },
    {
        name: 'Asyut',
        country_id: 64,
    },
    {
        name: 'Bani Suwayf',
        country_id: 64,
    },
    {
        name: "Bur Sa'id",
        country_id: 64,
    },
    {
        name: 'Cairo',
        country_id: 64,
    },
    {
        name: 'Dumyat',
        country_id: 64,
    },
    {
        name: 'Kafr-ash-Shaykh',
        country_id: 64,
    },
    {
        name: 'Matruh',
        country_id: 64,
    },
    {
        name: 'Muhafazat ad Daqahliyah',
        country_id: 64,
    },
    {
        name: 'Muhafazat al Fayyum',
        country_id: 64,
    },
    {
        name: 'Muhafazat al Gharbiyah',
        country_id: 64,
    },
    {
        name: 'Muhafazat al Iskandariyah',
        country_id: 64,
    },
    {
        name: 'Muhafazat al Qahirah',
        country_id: 64,
    },
    {
        name: 'Qina',
        country_id: 64,
    },
    {
        name: 'Sawhaj',
        country_id: 64,
    },
    {
        name: 'Sina al-Janubiyah',
        country_id: 64,
    },
    {
        name: 'Sina ash-Shamaliyah',
        country_id: 64,
    },
    {
        name: 'ad-Daqahliyah',
        country_id: 64,
    },
    {
        name: 'al-Bahr-al-Ahmar',
        country_id: 64,
    },
    {
        name: 'al-Buhayrah',
        country_id: 64,
    },
    {
        name: 'al-Fayyum',
        country_id: 64,
    },
    {
        name: 'al-Gharbiyah',
        country_id: 64,
    },
    {
        name: 'al-Iskandariyah',
        country_id: 64,
    },
    {
        name: 'al-Ismailiyah',
        country_id: 64,
    },
    {
        name: 'al-Jizah',
        country_id: 64,
    },
    {
        name: 'al-Minufiyah',
        country_id: 64,
    },
    {
        name: 'al-Minya',
        country_id: 64,
    },
    {
        name: 'al-Qahira',
        country_id: 64,
    },
    {
        name: 'al-Qalyubiyah',
        country_id: 64,
    },
    {
        name: 'al-Uqsur',
        country_id: 64,
    },
    {
        name: 'al-Wadi al-Jadid',
        country_id: 64,
    },
    {
        name: 'as-Suways',
        country_id: 64,
    },
    {
        name: 'ash-Sharqiyah',
        country_id: 64,
    },
    {
        name: 'Ahuachapan',
        country_id: 65,
    },
    {
        name: 'Cabanas',
        country_id: 65,
    },
    {
        name: 'Chalatenango',
        country_id: 65,
    },
    {
        name: 'Cuscatlan',
        country_id: 65,
    },
    {
        name: 'La Libertad',
        country_id: 65,
    },
    {
        name: 'La Paz',
        country_id: 65,
    },
    {
        name: 'La Union',
        country_id: 65,
    },
    {
        name: 'Morazan',
        country_id: 65,
    },
    {
        name: 'San Miguel',
        country_id: 65,
    },
    {
        name: 'San Salvador',
        country_id: 65,
    },
    {
        name: 'San Vicente',
        country_id: 65,
    },
    {
        name: 'Santa Ana',
        country_id: 65,
    },
    {
        name: 'Sonsonate',
        country_id: 65,
    },
    {
        name: 'Usulutan',
        country_id: 65,
    },
    {
        name: 'Annobon',
        country_id: 66,
    },
    {
        name: 'Bioko Norte',
        country_id: 66,
    },
    {
        name: 'Bioko Sur',
        country_id: 66,
    },
    {
        name: 'Centro Sur',
        country_id: 66,
    },
    {
        name: 'Kie-Ntem',
        country_id: 66,
    },
    {
        name: 'Litoral',
        country_id: 66,
    },
    {
        name: 'Wele-Nzas',
        country_id: 66,
    },
    {
        name: 'Anseba',
        country_id: 67,
    },
    {
        name: 'Debub',
        country_id: 67,
    },
    {
        name: 'Debub-Keih-Bahri',
        country_id: 67,
    },
    {
        name: 'Gash-Barka',
        country_id: 67,
    },
    {
        name: 'Maekel',
        country_id: 67,
    },
    {
        name: 'Semien-Keih-Bahri',
        country_id: 67,
    },
    {
        name: 'Harju',
        country_id: 68,
    },
    {
        name: 'Hiiu',
        country_id: 68,
    },
    {
        name: 'Ida-Viru',
        country_id: 68,
    },
    {
        name: 'Jarva',
        country_id: 68,
    },
    {
        name: 'Jogeva',
        country_id: 68,
    },
    {
        name: 'Laane',
        country_id: 68,
    },
    {
        name: 'Laane-Viru',
        country_id: 68,
    },
    {
        name: 'Parnu',
        country_id: 68,
    },
    {
        name: 'Polva',
        country_id: 68,
    },
    {
        name: 'Rapla',
        country_id: 68,
    },
    {
        name: 'Saare',
        country_id: 68,
    },
    {
        name: 'Tartu',
        country_id: 68,
    },
    {
        name: 'Valga',
        country_id: 68,
    },
    {
        name: 'Viljandi',
        country_id: 68,
    },
    {
        name: 'Voru',
        country_id: 68,
    },
    {
        name: 'Addis Abeba',
        country_id: 69,
    },
    {
        name: 'Afar',
        country_id: 69,
    },
    {
        name: 'Amhara',
        country_id: 69,
    },
    {
        name: 'Benishangul',
        country_id: 69,
    },
    {
        name: 'Diredawa',
        country_id: 69,
    },
    {
        name: 'Gambella',
        country_id: 69,
    },
    {
        name: 'Harar',
        country_id: 69,
    },
    {
        name: 'Jigjiga',
        country_id: 69,
    },
    {
        name: 'Mekele',
        country_id: 69,
    },
    {
        name: 'Oromia',
        country_id: 69,
    },
    {
        name: 'Somali',
        country_id: 69,
    },
    {
        name: 'Southern',
        country_id: 69,
    },
    {
        name: 'Tigray',
        country_id: 69,
    },
    {
        name: 'Christmas Island',
        country_id: 70,
    },
    {
        name: 'Cocos Islands',
        country_id: 70,
    },
    {
        name: 'Coral Sea Islands',
        country_id: 70,
    },
    {
        name: 'Falkland Islands',
        country_id: 71,
    },
    {
        name: 'South Georgia',
        country_id: 71,
    },
    {
        name: 'Klaksvik',
        country_id: 72,
    },
    {
        name: 'Nor ara Eysturoy',
        country_id: 72,
    },
    {
        name: 'Nor oy',
        country_id: 72,
    },
    {
        name: 'Sandoy',
        country_id: 72,
    },
    {
        name: 'Streymoy',
        country_id: 72,
    },
    {
        name: 'Su uroy',
        country_id: 72,
    },
    {
        name: 'Sy ra Eysturoy',
        country_id: 72,
    },
    {
        name: 'Torshavn',
        country_id: 72,
    },
    {
        name: 'Vaga',
        country_id: 72,
    },
    {
        name: 'Central',
        country_id: 73,
    },
    {
        name: 'Eastern',
        country_id: 73,
    },
    {
        name: 'Northern',
        country_id: 73,
    },
    {
        name: 'South Pacific',
        country_id: 73,
    },
    {
        name: 'Western',
        country_id: 73,
    },
    {
        name: 'Ahvenanmaa',
        country_id: 74,
    },
    {
        name: 'Etela-Karjala',
        country_id: 74,
    },
    {
        name: 'Etela-Pohjanmaa',
        country_id: 74,
    },
    {
        name: 'Etela-Savo',
        country_id: 74,
    },
    {
        name: 'Etela-Suomen Laani',
        country_id: 74,
    },
    {
        name: 'Ita-Suomen Laani',
        country_id: 74,
    },
    {
        name: 'Ita-Uusimaa',
        country_id: 74,
    },
    {
        name: 'Kainuu',
        country_id: 74,
    },
    {
        name: 'Kanta-Hame',
        country_id: 74,
    },
    {
        name: 'Keski-Pohjanmaa',
        country_id: 74,
    },
    {
        name: 'Keski-Suomi',
        country_id: 74,
    },
    {
        name: 'Kymenlaakso',
        country_id: 74,
    },
    {
        name: 'Lansi-Suomen Laani',
        country_id: 74,
    },
    {
        name: 'Lappi',
        country_id: 74,
    },
    {
        name: 'Northern Savonia',
        country_id: 74,
    },
    {
        name: 'Ostrobothnia',
        country_id: 74,
    },
    {
        name: 'Oulun Laani',
        country_id: 74,
    },
    {
        name: 'Paijat-Hame',
        country_id: 74,
    },
    {
        name: 'Pirkanmaa',
        country_id: 74,
    },
    {
        name: 'Pohjanmaa',
        country_id: 74,
    },
    {
        name: 'Pohjois-Karjala',
        country_id: 74,
    },
    {
        name: 'Pohjois-Pohjanmaa',
        country_id: 74,
    },
    {
        name: 'Pohjois-Savo',
        country_id: 74,
    },
    {
        name: 'Saarijarvi',
        country_id: 74,
    },
    {
        name: 'Satakunta',
        country_id: 74,
    },
    {
        name: 'Southern Savonia',
        country_id: 74,
    },
    {
        name: 'Tavastia Proper',
        country_id: 74,
    },
    {
        name: 'Uleaborgs Lan',
        country_id: 74,
    },
    {
        name: 'Uusimaa',
        country_id: 74,
    },
    {
        name: 'Varsinais-Suomi',
        country_id: 74,
    },
    {
        name: 'Ain',
        country_id: 75,
    },
    {
        name: 'Aisne',
        country_id: 75,
    },
    {
        name: 'Albi Le Sequestre',
        country_id: 75,
    },
    {
        name: 'Allier',
        country_id: 75,
    },
    {
        name: 'Alpes-Cote dAzur',
        country_id: 75,
    },
    {
        name: 'Alpes-Maritimes',
        country_id: 75,
    },
    {
        name: 'Alpes-de-Haute-Provence',
        country_id: 75,
    },
    {
        name: 'Alsace',
        country_id: 75,
    },
    {
        name: 'Aquitaine',
        country_id: 75,
    },
    {
        name: 'Ardeche',
        country_id: 75,
    },
    {
        name: 'Ardennes',
        country_id: 75,
    },
    {
        name: 'Ariege',
        country_id: 75,
    },
    {
        name: 'Aube',
        country_id: 75,
    },
    {
        name: 'Aude',
        country_id: 75,
    },
    {
        name: 'Auvergne',
        country_id: 75,
    },
    {
        name: 'Aveyron',
        country_id: 75,
    },
    {
        name: 'Bas-Rhin',
        country_id: 75,
    },
    {
        name: 'Basse-Normandie',
        country_id: 75,
    },
    {
        name: 'Bouches-du-Rhone',
        country_id: 75,
    },
    {
        name: 'Bourgogne',
        country_id: 75,
    },
    {
        name: 'Bretagne',
        country_id: 75,
    },
    {
        name: 'Brittany',
        country_id: 75,
    },
    {
        name: 'Burgundy',
        country_id: 75,
    },
    {
        name: 'Calvados',
        country_id: 75,
    },
    {
        name: 'Cantal',
        country_id: 75,
    },
    {
        name: 'Cedex',
        country_id: 75,
    },
    {
        name: 'Centre',
        country_id: 75,
    },
    {
        name: 'Charente',
        country_id: 75,
    },
    {
        name: 'Charente-Maritime',
        country_id: 75,
    },
    {
        name: 'Cher',
        country_id: 75,
    },
    {
        name: 'Correze',
        country_id: 75,
    },
    {
        name: 'Corse-du-Sud',
        country_id: 75,
    },
    {
        name: "Cote-d'Or",
        country_id: 75,
    },
    {
        name: "Cotes-d'Armor",
        country_id: 75,
    },
    {
        name: 'Creuse',
        country_id: 75,
    },
    {
        name: 'Crolles',
        country_id: 75,
    },
    {
        name: 'Deux-Sevres',
        country_id: 75,
    },
    {
        name: 'Dordogne',
        country_id: 75,
    },
    {
        name: 'Doubs',
        country_id: 75,
    },
    {
        name: 'Drome',
        country_id: 75,
    },
    {
        name: 'Essonne',
        country_id: 75,
    },
    {
        name: 'Eure',
        country_id: 75,
    },
    {
        name: 'Eure-et-Loir',
        country_id: 75,
    },
    {
        name: 'Feucherolles',
        country_id: 75,
    },
    {
        name: 'Finistere',
        country_id: 75,
    },
    {
        name: 'Franche-Comte',
        country_id: 75,
    },
    {
        name: 'Gard',
        country_id: 75,
    },
    {
        name: 'Gers',
        country_id: 75,
    },
    {
        name: 'Gironde',
        country_id: 75,
    },
    {
        name: 'Haut-Rhin',
        country_id: 75,
    },
    {
        name: 'Haute-Corse',
        country_id: 75,
    },
    {
        name: 'Haute-Garonne',
        country_id: 75,
    },
    {
        name: 'Haute-Loire',
        country_id: 75,
    },
    {
        name: 'Haute-Marne',
        country_id: 75,
    },
    {
        name: 'Haute-Saone',
        country_id: 75,
    },
    {
        name: 'Haute-Savoie',
        country_id: 75,
    },
    {
        name: 'Haute-Vienne',
        country_id: 75,
    },
    {
        name: 'Hautes-Alpes',
        country_id: 75,
    },
    {
        name: 'Hautes-Pyrenees',
        country_id: 75,
    },
    {
        name: 'Hauts-de-Seine',
        country_id: 75,
    },
    {
        name: 'Herault',
        country_id: 75,
    },
    {
        name: 'Ile-de-France',
        country_id: 75,
    },
    {
        name: 'Ille-et-Vilaine',
        country_id: 75,
    },
    {
        name: 'Indre',
        country_id: 75,
    },
    {
        name: 'Indre-et-Loire',
        country_id: 75,
    },
    {
        name: 'Isere',
        country_id: 75,
    },
    {
        name: 'Jura',
        country_id: 75,
    },
    {
        name: 'Klagenfurt',
        country_id: 75,
    },
    {
        name: 'Landes',
        country_id: 75,
    },
    {
        name: 'Languedoc-Roussillon',
        country_id: 75,
    },
    {
        name: 'Larcay',
        country_id: 75,
    },
    {
        name: 'Le Castellet',
        country_id: 75,
    },
    {
        name: 'Le Creusot',
        country_id: 75,
    },
    {
        name: 'Limousin',
        country_id: 75,
    },
    {
        name: 'Loir-et-Cher',
        country_id: 75,
    },
    {
        name: 'Loire',
        country_id: 75,
    },
    {
        name: 'Loire-Atlantique',
        country_id: 75,
    },
    {
        name: 'Loiret',
        country_id: 75,
    },
    {
        name: 'Lorraine',
        country_id: 75,
    },
    {
        name: 'Lot',
        country_id: 75,
    },
    {
        name: 'Lot-et-Garonne',
        country_id: 75,
    },
    {
        name: 'Lower Normandy',
        country_id: 75,
    },
    {
        name: 'Lozere',
        country_id: 75,
    },
    {
        name: 'Maine-et-Loire',
        country_id: 75,
    },
    {
        name: 'Manche',
        country_id: 75,
    },
    {
        name: 'Marne',
        country_id: 75,
    },
    {
        name: 'Mayenne',
        country_id: 75,
    },
    {
        name: 'Meurthe-et-Moselle',
        country_id: 75,
    },
    {
        name: 'Meuse',
        country_id: 75,
    },
    {
        name: 'Midi-Pyrenees',
        country_id: 75,
    },
    {
        name: 'Morbihan',
        country_id: 75,
    },
    {
        name: 'Moselle',
        country_id: 75,
    },
    {
        name: 'Nievre',
        country_id: 75,
    },
    {
        name: 'Nord',
        country_id: 75,
    },
    {
        name: 'Nord-Pas-de-Calais',
        country_id: 75,
    },
    {
        name: 'Oise',
        country_id: 75,
    },
    {
        name: 'Orne',
        country_id: 75,
    },
    {
        name: 'Paris',
        country_id: 75,
    },
    {
        name: 'Pas-de-Calais',
        country_id: 75,
    },
    {
        name: 'Pays de la Loire',
        country_id: 75,
    },
    {
        name: 'Pays-de-la-Loire',
        country_id: 75,
    },
    {
        name: 'Picardy',
        country_id: 75,
    },
    {
        name: 'Puy-de-Dome',
        country_id: 75,
    },
    {
        name: 'Pyrenees-Atlantiques',
        country_id: 75,
    },
    {
        name: 'Pyrenees-Orientales',
        country_id: 75,
    },
    {
        name: 'Quelmes',
        country_id: 75,
    },
    {
        name: 'Rhone',
        country_id: 75,
    },
    {
        name: 'Rhone-Alpes',
        country_id: 75,
    },
    {
        name: 'Saint Ouen',
        country_id: 75,
    },
    {
        name: 'Saint Viatre',
        country_id: 75,
    },
    {
        name: 'Saone-et-Loire',
        country_id: 75,
    },
    {
        name: 'Sarthe',
        country_id: 75,
    },
    {
        name: 'Savoie',
        country_id: 75,
    },
    {
        name: 'Seine-Maritime',
        country_id: 75,
    },
    {
        name: 'Seine-Saint-Denis',
        country_id: 75,
    },
    {
        name: 'Seine-et-Marne',
        country_id: 75,
    },
    {
        name: 'Somme',
        country_id: 75,
    },
    {
        name: 'Sophia Antipolis',
        country_id: 75,
    },
    {
        name: 'Souvans',
        country_id: 75,
    },
    {
        name: 'Tarn',
        country_id: 75,
    },
    {
        name: 'Tarn-et-Garonne',
        country_id: 75,
    },
    {
        name: 'Territoire de Belfort',
        country_id: 75,
    },
    {
        name: 'Treignac',
        country_id: 75,
    },
    {
        name: 'Upper Normandy',
        country_id: 75,
    },
    {
        name: "Val-d'Oise",
        country_id: 75,
    },
    {
        name: 'Val-de-Marne',
        country_id: 75,
    },
    {
        name: 'Var',
        country_id: 75,
    },
    {
        name: 'Vaucluse',
        country_id: 75,
    },
    {
        name: 'Vellise',
        country_id: 75,
    },
    {
        name: 'Vendee',
        country_id: 75,
    },
    {
        name: 'Vienne',
        country_id: 75,
    },
    {
        name: 'Vosges',
        country_id: 75,
    },
    {
        name: 'Yonne',
        country_id: 75,
    },
    {
        name: 'Yvelines',
        country_id: 75,
    },
    {
        name: 'Cayenne',
        country_id: 76,
    },
    {
        name: 'Saint-Laurent-du-Maroni',
        country_id: 76,
    },
    {
        name: 'Iles du Vent',
        country_id: 77,
    },
    {
        name: 'Iles sous le Vent',
        country_id: 77,
    },
    {
        name: 'Marquesas',
        country_id: 77,
    },
    {
        name: 'Tuamotu',
        country_id: 77,
    },
    {
        name: 'Tubuai',
        country_id: 77,
    },
    {
        name: 'Amsterdam',
        country_id: 78,
    },
    {
        name: 'Crozet Islands',
        country_id: 78,
    },
    {
        name: 'Kerguelen',
        country_id: 78,
    },
    {
        name: 'Estuaire',
        country_id: 79,
    },
    {
        name: 'Haut-Ogooue',
        country_id: 79,
    },
    {
        name: 'Moyen-Ogooue',
        country_id: 79,
    },
    {
        name: 'Ngounie',
        country_id: 79,
    },
    {
        name: 'Nyanga',
        country_id: 79,
    },
    {
        name: 'Ogooue-Ivindo',
        country_id: 79,
    },
    {
        name: 'Ogooue-Lolo',
        country_id: 79,
    },
    {
        name: 'Ogooue-Maritime',
        country_id: 79,
    },
    {
        name: 'Woleu-Ntem',
        country_id: 79,
    },
    {
        name: 'Banjul',
        country_id: 80,
    },
    {
        name: 'Basse',
        country_id: 80,
    },
    {
        name: 'Brikama',
        country_id: 80,
    },
    {
        name: 'Janjanbureh',
        country_id: 80,
    },
    {
        name: 'Kanifing',
        country_id: 80,
    },
    {
        name: 'Kerewan',
        country_id: 80,
    },
    {
        name: 'Kuntaur',
        country_id: 80,
    },
    {
        name: 'Mansakonko',
        country_id: 80,
    },
    {
        name: 'Abhasia',
        country_id: 81,
    },
    {
        name: 'Ajaria',
        country_id: 81,
    },
    {
        name: 'Guria',
        country_id: 81,
    },
    {
        name: 'Imereti',
        country_id: 81,
    },
    {
        name: 'Kaheti',
        country_id: 81,
    },
    {
        name: 'Kvemo Kartli',
        country_id: 81,
    },
    {
        name: 'Mcheta-Mtianeti',
        country_id: 81,
    },
    {
        name: 'Racha',
        country_id: 81,
    },
    {
        name: 'Samagrelo-Zemo Svaneti',
        country_id: 81,
    },
    {
        name: 'Samche-Zhavaheti',
        country_id: 81,
    },
    {
        name: 'Shida Kartli',
        country_id: 81,
    },
    {
        name: 'Tbilisi',
        country_id: 81,
    },
    {
        name: 'Auvergne',
        country_id: 82,
    },
    {
        name: 'Baden-Wurttemberg',
        country_id: 82,
    },
    {
        name: 'Bavaria',
        country_id: 82,
    },
    {
        name: 'Bayern',
        country_id: 82,
    },
    {
        name: 'Beilstein Wurtt',
        country_id: 82,
    },
    {
        name: 'Berlin',
        country_id: 82,
    },
    {
        name: 'Brandenburg',
        country_id: 82,
    },
    {
        name: 'Bremen',
        country_id: 82,
    },
    {
        name: 'Dreisbach',
        country_id: 82,
    },
    {
        name: 'Freistaat Bayern',
        country_id: 82,
    },
    {
        name: 'Hamburg',
        country_id: 82,
    },
    {
        name: 'Hannover',
        country_id: 82,
    },
    {
        name: 'Heroldstatt',
        country_id: 82,
    },
    {
        name: 'Hessen',
        country_id: 82,
    },
    {
        name: 'Kortenberg',
        country_id: 82,
    },
    {
        name: 'Laasdorf',
        country_id: 82,
    },
    {
        name: 'Land Baden-Wurttemberg',
        country_id: 82,
    },
    {
        name: 'Land Bayern',
        country_id: 82,
    },
    {
        name: 'Land Brandenburg',
        country_id: 82,
    },
    {
        name: 'Land Hessen',
        country_id: 82,
    },
    {
        name: 'Land Mecklenburg-Vorpommern',
        country_id: 82,
    },
    {
        name: 'Land Nordrhein-Westfalen',
        country_id: 82,
    },
    {
        name: 'Land Rheinland-Pfalz',
        country_id: 82,
    },
    {
        name: 'Land Sachsen',
        country_id: 82,
    },
    {
        name: 'Land Sachsen-Anhalt',
        country_id: 82,
    },
    {
        name: 'Land Thuringen',
        country_id: 82,
    },
    {
        name: 'Lower Saxony',
        country_id: 82,
    },
    {
        name: 'Mecklenburg-Vorpommern',
        country_id: 82,
    },
    {
        name: 'Mulfingen',
        country_id: 82,
    },
    {
        name: 'Munich',
        country_id: 82,
    },
    {
        name: 'Neubeuern',
        country_id: 82,
    },
    {
        name: 'Niedersachsen',
        country_id: 82,
    },
    {
        name: 'Noord-Holland',
        country_id: 82,
    },
    {
        name: 'Nordrhein-Westfalen',
        country_id: 82,
    },
    {
        name: 'North Rhine-Westphalia',
        country_id: 82,
    },
    {
        name: 'Osterode',
        country_id: 82,
    },
    {
        name: 'Rheinland-Pfalz',
        country_id: 82,
    },
    {
        name: 'Rhineland-Palatinate',
        country_id: 82,
    },
    {
        name: 'Saarland',
        country_id: 82,
    },
    {
        name: 'Sachsen',
        country_id: 82,
    },
    {
        name: 'Sachsen-Anhalt',
        country_id: 82,
    },
    {
        name: 'Saxony',
        country_id: 82,
    },
    {
        name: 'Schleswig-Holstein',
        country_id: 82,
    },
    {
        name: 'Thuringia',
        country_id: 82,
    },
    {
        name: 'Webling',
        country_id: 82,
    },
    {
        name: 'Weinstrabe',
        country_id: 82,
    },
    {
        name: 'schlobborn',
        country_id: 82,
    },
    {
        name: 'Ashanti',
        country_id: 83,
    },
    {
        name: 'Brong-Ahafo',
        country_id: 83,
    },
    {
        name: 'Central',
        country_id: 83,
    },
    {
        name: 'Eastern',
        country_id: 83,
    },
    {
        name: 'Greater Accra',
        country_id: 83,
    },
    {
        name: 'Northern',
        country_id: 83,
    },
    {
        name: 'Upper East',
        country_id: 83,
    },
    {
        name: 'Upper West',
        country_id: 83,
    },
    {
        name: 'Volta',
        country_id: 83,
    },
    {
        name: 'Western',
        country_id: 83,
    },
    {
        name: 'Gibraltar',
        country_id: 84,
    },
    {
        name: 'Acharnes',
        country_id: 85,
    },
    {
        name: 'Ahaia',
        country_id: 85,
    },
    {
        name: 'Aitolia kai Akarnania',
        country_id: 85,
    },
    {
        name: 'Argolis',
        country_id: 85,
    },
    {
        name: 'Arkadia',
        country_id: 85,
    },
    {
        name: 'Arta',
        country_id: 85,
    },
    {
        name: 'Attica',
        country_id: 85,
    },
    {
        name: 'Attiki',
        country_id: 85,
    },
    {
        name: 'Ayion Oros',
        country_id: 85,
    },
    {
        name: 'Crete',
        country_id: 85,
    },
    {
        name: 'Dodekanisos',
        country_id: 85,
    },
    {
        name: 'Drama',
        country_id: 85,
    },
    {
        name: 'Evia',
        country_id: 85,
    },
    {
        name: 'Evritania',
        country_id: 85,
    },
    {
        name: 'Evros',
        country_id: 85,
    },
    {
        name: 'Evvoia',
        country_id: 85,
    },
    {
        name: 'Florina',
        country_id: 85,
    },
    {
        name: 'Fokis',
        country_id: 85,
    },
    {
        name: 'Fthiotis',
        country_id: 85,
    },
    {
        name: 'Grevena',
        country_id: 85,
    },
    {
        name: 'Halandri',
        country_id: 85,
    },
    {
        name: 'Halkidiki',
        country_id: 85,
    },
    {
        name: 'Hania',
        country_id: 85,
    },
    {
        name: 'Heraklion',
        country_id: 85,
    },
    {
        name: 'Hios',
        country_id: 85,
    },
    {
        name: 'Ilia',
        country_id: 85,
    },
    {
        name: 'Imathia',
        country_id: 85,
    },
    {
        name: 'Ioannina',
        country_id: 85,
    },
    {
        name: 'Iraklion',
        country_id: 85,
    },
    {
        name: 'Karditsa',
        country_id: 85,
    },
    {
        name: 'Kastoria',
        country_id: 85,
    },
    {
        name: 'Kavala',
        country_id: 85,
    },
    {
        name: 'Kefallinia',
        country_id: 85,
    },
    {
        name: 'Kerkira',
        country_id: 85,
    },
    {
        name: 'Kiklades',
        country_id: 85,
    },
    {
        name: 'Kilkis',
        country_id: 85,
    },
    {
        name: 'Korinthia',
        country_id: 85,
    },
    {
        name: 'Kozani',
        country_id: 85,
    },
    {
        name: 'Lakonia',
        country_id: 85,
    },
    {
        name: 'Larisa',
        country_id: 85,
    },
    {
        name: 'Lasithi',
        country_id: 85,
    },
    {
        name: 'Lesvos',
        country_id: 85,
    },
    {
        name: 'Levkas',
        country_id: 85,
    },
    {
        name: 'Magnisia',
        country_id: 85,
    },
    {
        name: 'Messinia',
        country_id: 85,
    },
    {
        name: 'Nomos Attikis',
        country_id: 85,
    },
    {
        name: 'Nomos Zakynthou',
        country_id: 85,
    },
    {
        name: 'Pella',
        country_id: 85,
    },
    {
        name: 'Pieria',
        country_id: 85,
    },
    {
        name: 'Piraios',
        country_id: 85,
    },
    {
        name: 'Preveza',
        country_id: 85,
    },
    {
        name: 'Rethimni',
        country_id: 85,
    },
    {
        name: 'Rodopi',
        country_id: 85,
    },
    {
        name: 'Samos',
        country_id: 85,
    },
    {
        name: 'Serrai',
        country_id: 85,
    },
    {
        name: 'Thesprotia',
        country_id: 85,
    },
    {
        name: 'Thessaloniki',
        country_id: 85,
    },
    {
        name: 'Trikala',
        country_id: 85,
    },
    {
        name: 'Voiotia',
        country_id: 85,
    },
    {
        name: 'West Greece',
        country_id: 85,
    },
    {
        name: 'Xanthi',
        country_id: 85,
    },
    {
        name: 'Zakinthos',
        country_id: 85,
    },
    {
        name: 'Aasiaat',
        country_id: 86,
    },
    {
        name: 'Ammassalik',
        country_id: 86,
    },
    {
        name: 'Illoqqortoormiut',
        country_id: 86,
    },
    {
        name: 'Ilulissat',
        country_id: 86,
    },
    {
        name: 'Ivittuut',
        country_id: 86,
    },
    {
        name: 'Kangaatsiaq',
        country_id: 86,
    },
    {
        name: 'Maniitsoq',
        country_id: 86,
    },
    {
        name: 'Nanortalik',
        country_id: 86,
    },
    {
        name: 'Narsaq',
        country_id: 86,
    },
    {
        name: 'Nuuk',
        country_id: 86,
    },
    {
        name: 'Paamiut',
        country_id: 86,
    },
    {
        name: 'Qaanaaq',
        country_id: 86,
    },
    {
        name: 'Qaqortoq',
        country_id: 86,
    },
    {
        name: 'Qasigiannguit',
        country_id: 86,
    },
    {
        name: 'Qeqertarsuaq',
        country_id: 86,
    },
    {
        name: 'Sisimiut',
        country_id: 86,
    },
    {
        name: 'Udenfor kommunal inddeling',
        country_id: 86,
    },
    {
        name: 'Upernavik',
        country_id: 86,
    },
    {
        name: 'Uummannaq',
        country_id: 86,
    },
    {
        name: 'Carriacou-Petite Martinique',
        country_id: 87,
    },
    {
        name: 'Saint Andrew',
        country_id: 87,
    },
    {
        name: 'Saint Davids',
        country_id: 87,
    },
    {
        name: "Saint George's",
        country_id: 87,
    },
    {
        name: 'Saint John',
        country_id: 87,
    },
    {
        name: 'Saint Mark',
        country_id: 87,
    },
    {
        name: 'Saint Patrick',
        country_id: 87,
    },
    {
        name: 'Basse-Terre',
        country_id: 88,
    },
    {
        name: 'Grande-Terre',
        country_id: 88,
    },
    {
        name: 'Iles des Saintes',
        country_id: 88,
    },
    {
        name: 'La Desirade',
        country_id: 88,
    },
    {
        name: 'Marie-Galante',
        country_id: 88,
    },
    {
        name: 'Saint Barthelemy',
        country_id: 88,
    },
    {
        name: 'Saint Martin',
        country_id: 88,
    },
    {
        name: 'Agana Heights',
        country_id: 89,
    },
    {
        name: 'Agat',
        country_id: 89,
    },
    {
        name: 'Barrigada',
        country_id: 89,
    },
    {
        name: 'Chalan-Pago-Ordot',
        country_id: 89,
    },
    {
        name: 'Dededo',
        country_id: 89,
    },
    {
        name: 'Hagatna',
        country_id: 89,
    },
    {
        name: 'Inarajan',
        country_id: 89,
    },
    {
        name: 'Mangilao',
        country_id: 89,
    },
    {
        name: 'Merizo',
        country_id: 89,
    },
    {
        name: 'Mongmong-Toto-Maite',
        country_id: 89,
    },
    {
        name: 'Santa Rita',
        country_id: 89,
    },
    {
        name: 'Sinajana',
        country_id: 89,
    },
    {
        name: 'Talofofo',
        country_id: 89,
    },
    {
        name: 'Tamuning',
        country_id: 89,
    },
    {
        name: 'Yigo',
        country_id: 89,
    },
    {
        name: 'Yona',
        country_id: 89,
    },
    {
        name: 'Alta Verapaz',
        country_id: 90,
    },
    {
        name: 'Baja Verapaz',
        country_id: 90,
    },
    {
        name: 'Chimaltenango',
        country_id: 90,
    },
    {
        name: 'Chiquimula',
        country_id: 90,
    },
    {
        name: 'El Progreso',
        country_id: 90,
    },
    {
        name: 'Escuintla',
        country_id: 90,
    },
    {
        name: 'Guatemala',
        country_id: 90,
    },
    {
        name: 'Huehuetenango',
        country_id: 90,
    },
    {
        name: 'Izabal',
        country_id: 90,
    },
    {
        name: 'Jalapa',
        country_id: 90,
    },
    {
        name: 'Jutiapa',
        country_id: 90,
    },
    {
        name: 'Peten',
        country_id: 90,
    },
    {
        name: 'Quezaltenango',
        country_id: 90,
    },
    {
        name: 'Quiche',
        country_id: 90,
    },
    {
        name: 'Retalhuleu',
        country_id: 90,
    },
    {
        name: 'Sacatepequez',
        country_id: 90,
    },
    {
        name: 'San Marcos',
        country_id: 90,
    },
    {
        name: 'Santa Rosa',
        country_id: 90,
    },
    {
        name: 'Solola',
        country_id: 90,
    },
    {
        name: 'Suchitepequez',
        country_id: 90,
    },
    {
        name: 'Totonicapan',
        country_id: 90,
    },
    {
        name: 'Zacapa',
        country_id: 90,
    },
    {
        name: 'Alderney',
        country_id: 91,
    },
    {
        name: 'Castel',
        country_id: 91,
    },
    {
        name: 'Forest',
        country_id: 91,
    },
    {
        name: 'Saint Andrew',
        country_id: 91,
    },
    {
        name: 'Saint Martin',
        country_id: 91,
    },
    {
        name: 'Saint Peter Port',
        country_id: 91,
    },
    {
        name: 'Saint Pierre du Bois',
        country_id: 91,
    },
    {
        name: 'Saint Sampson',
        country_id: 91,
    },
    {
        name: 'Saint Saviour',
        country_id: 91,
    },
    {
        name: 'Sark',
        country_id: 91,
    },
    {
        name: 'Torteval',
        country_id: 91,
    },
    {
        name: 'Vale',
        country_id: 91,
    },
    {
        name: 'Beyla',
        country_id: 92,
    },
    {
        name: 'Boffa',
        country_id: 92,
    },
    {
        name: 'Boke',
        country_id: 92,
    },
    {
        name: 'Conakry',
        country_id: 92,
    },
    {
        name: 'Coyah',
        country_id: 92,
    },
    {
        name: 'Dabola',
        country_id: 92,
    },
    {
        name: 'Dalaba',
        country_id: 92,
    },
    {
        name: 'Dinguiraye',
        country_id: 92,
    },
    {
        name: 'Faranah',
        country_id: 92,
    },
    {
        name: 'Forecariah',
        country_id: 92,
    },
    {
        name: 'Fria',
        country_id: 92,
    },
    {
        name: 'Gaoual',
        country_id: 92,
    },
    {
        name: 'Gueckedou',
        country_id: 92,
    },
    {
        name: 'Kankan',
        country_id: 92,
    },
    {
        name: 'Kerouane',
        country_id: 92,
    },
    {
        name: 'Kindia',
        country_id: 92,
    },
    {
        name: 'Kissidougou',
        country_id: 92,
    },
    {
        name: 'Koubia',
        country_id: 92,
    },
    {
        name: 'Koundara',
        country_id: 92,
    },
    {
        name: 'Kouroussa',
        country_id: 92,
    },
    {
        name: 'Labe',
        country_id: 92,
    },
    {
        name: 'Lola',
        country_id: 92,
    },
    {
        name: 'Macenta',
        country_id: 92,
    },
    {
        name: 'Mali',
        country_id: 92,
    },
    {
        name: 'Mamou',
        country_id: 92,
    },
    {
        name: 'Mandiana',
        country_id: 92,
    },
    {
        name: 'Nzerekore',
        country_id: 92,
    },
    {
        name: 'Pita',
        country_id: 92,
    },
    {
        name: 'Siguiri',
        country_id: 92,
    },
    {
        name: 'Telimele',
        country_id: 92,
    },
    {
        name: 'Tougue',
        country_id: 92,
    },
    {
        name: 'Yomou',
        country_id: 92,
    },
    {
        name: 'Bafata',
        country_id: 93,
    },
    {
        name: 'Bissau',
        country_id: 93,
    },
    {
        name: 'Bolama',
        country_id: 93,
    },
    {
        name: 'Cacheu',
        country_id: 93,
    },
    {
        name: 'Gabu',
        country_id: 93,
    },
    {
        name: 'Oio',
        country_id: 93,
    },
    {
        name: 'Quinara',
        country_id: 93,
    },
    {
        name: 'Tombali',
        country_id: 93,
    },
    {
        name: 'Barima-Waini',
        country_id: 94,
    },
    {
        name: 'Cuyuni-Mazaruni',
        country_id: 94,
    },
    {
        name: 'Demerara-Mahaica',
        country_id: 94,
    },
    {
        name: 'East Berbice-Corentyne',
        country_id: 94,
    },
    {
        name: 'Essequibo Islands-West Demerar',
        country_id: 94,
    },
    {
        name: 'Mahaica-Berbice',
        country_id: 94,
    },
    {
        name: 'Pomeroon-Supenaam',
        country_id: 94,
    },
    {
        name: 'Potaro-Siparuni',
        country_id: 94,
    },
    {
        name: 'Upper Demerara-Berbice',
        country_id: 94,
    },
    {
        name: 'Upper Takutu-Upper Essequibo',
        country_id: 94,
    },
    {
        name: 'Artibonite',
        country_id: 95,
    },
    {
        name: 'Centre',
        country_id: 95,
    },
    {
        name: "Grand'Anse",
        country_id: 95,
    },
    {
        name: 'Nord',
        country_id: 95,
    },
    {
        name: 'Nord-Est',
        country_id: 95,
    },
    {
        name: 'Nord-Ouest',
        country_id: 95,
    },
    {
        name: 'Ouest',
        country_id: 95,
    },
    {
        name: 'Sud',
        country_id: 95,
    },
    {
        name: 'Sud-Est',
        country_id: 95,
    },
    {
        name: 'Heard and McDonald Islands',
        country_id: 96,
    },
    {
        name: 'Atlantida',
        country_id: 97,
    },
    {
        name: 'Choluteca',
        country_id: 97,
    },
    {
        name: 'Colon',
        country_id: 97,
    },
    {
        name: 'Comayagua',
        country_id: 97,
    },
    {
        name: 'Copan',
        country_id: 97,
    },
    {
        name: 'Cortes',
        country_id: 97,
    },
    {
        name: 'Distrito Central',
        country_id: 97,
    },
    {
        name: 'El Paraiso',
        country_id: 97,
    },
    {
        name: 'Francisco Morazan',
        country_id: 97,
    },
    {
        name: 'Gracias a Dios',
        country_id: 97,
    },
    {
        name: 'Intibuca',
        country_id: 97,
    },
    {
        name: 'Islas de la Bahia',
        country_id: 97,
    },
    {
        name: 'La Paz',
        country_id: 97,
    },
    {
        name: 'Lempira',
        country_id: 97,
    },
    {
        name: 'Ocotepeque',
        country_id: 97,
    },
    {
        name: 'Olancho',
        country_id: 97,
    },
    {
        name: 'Santa Barbara',
        country_id: 97,
    },
    {
        name: 'Valle',
        country_id: 97,
    },
    {
        name: 'Yoro',
        country_id: 97,
    },
    {
        name: 'Hong Kong',
        country_id: 98,
    },
    {
        name: 'Bacs-Kiskun',
        country_id: 99,
    },
    {
        name: 'Baranya',
        country_id: 99,
    },
    {
        name: 'Bekes',
        country_id: 99,
    },
    {
        name: 'Borsod-Abauj-Zemplen',
        country_id: 99,
    },
    {
        name: 'Budapest',
        country_id: 99,
    },
    {
        name: 'Csongrad',
        country_id: 99,
    },
    {
        name: 'Fejer',
        country_id: 99,
    },
    {
        name: 'Gyor-Moson-Sopron',
        country_id: 99,
    },
    {
        name: 'Hajdu-Bihar',
        country_id: 99,
    },
    {
        name: 'Heves',
        country_id: 99,
    },
    {
        name: 'Jasz-Nagykun-Szolnok',
        country_id: 99,
    },
    {
        name: 'Komarom-Esztergom',
        country_id: 99,
    },
    {
        name: 'Nograd',
        country_id: 99,
    },
    {
        name: 'Pest',
        country_id: 99,
    },
    {
        name: 'Somogy',
        country_id: 99,
    },
    {
        name: 'Szabolcs-Szatmar-Bereg',
        country_id: 99,
    },
    {
        name: 'Tolna',
        country_id: 99,
    },
    {
        name: 'Vas',
        country_id: 99,
    },
    {
        name: 'Veszprem',
        country_id: 99,
    },
    {
        name: 'Zala',
        country_id: 99,
    },
    {
        name: 'Austurland',
        country_id: 100,
    },
    {
        name: 'Gullbringusysla',
        country_id: 100,
    },
    {
        name: 'Hofu borgarsva i',
        country_id: 100,
    },
    {
        name: 'Nor urland eystra',
        country_id: 100,
    },
    {
        name: 'Nor urland vestra',
        country_id: 100,
    },
    {
        name: 'Su urland',
        country_id: 100,
    },
    {
        name: 'Su urnes',
        country_id: 100,
    },
    {
        name: 'Vestfir ir',
        country_id: 100,
    },
    {
        name: 'Vesturland',
        country_id: 100,
    },
    {
        name: 'Aceh',
        country_id: 102,
    },
    {
        name: 'Bali',
        country_id: 102,
    },
    {
        name: 'Bangka-Belitung',
        country_id: 102,
    },
    {
        name: 'Banten',
        country_id: 102,
    },
    {
        name: 'Bengkulu',
        country_id: 102,
    },
    {
        name: 'Gandaria',
        country_id: 102,
    },
    {
        name: 'Gorontalo',
        country_id: 102,
    },
    {
        name: 'Jakarta',
        country_id: 102,
    },
    {
        name: 'Jambi',
        country_id: 102,
    },
    {
        name: 'Jawa Barat',
        country_id: 102,
    },
    {
        name: 'Jawa Tengah',
        country_id: 102,
    },
    {
        name: 'Jawa Timur',
        country_id: 102,
    },
    {
        name: 'Kalimantan Barat',
        country_id: 102,
    },
    {
        name: 'Kalimantan Selatan',
        country_id: 102,
    },
    {
        name: 'Kalimantan Tengah',
        country_id: 102,
    },
    {
        name: 'Kalimantan Timur',
        country_id: 102,
    },
    {
        name: 'Kendal',
        country_id: 102,
    },
    {
        name: 'Lampung',
        country_id: 102,
    },
    {
        name: 'Maluku',
        country_id: 102,
    },
    {
        name: 'Maluku Utara',
        country_id: 102,
    },
    {
        name: 'Nusa Tenggara Barat',
        country_id: 102,
    },
    {
        name: 'Nusa Tenggara Timur',
        country_id: 102,
    },
    {
        name: 'Papua',
        country_id: 102,
    },
    {
        name: 'Riau',
        country_id: 102,
    },
    {
        name: 'Riau Kepulauan',
        country_id: 102,
    },
    {
        name: 'Solo',
        country_id: 102,
    },
    {
        name: 'Sulawesi Selatan',
        country_id: 102,
    },
    {
        name: 'Sulawesi Tengah',
        country_id: 102,
    },
    {
        name: 'Sulawesi Tenggara',
        country_id: 102,
    },
    {
        name: 'Sulawesi Utara',
        country_id: 102,
    },
    {
        name: 'Sumatera Barat',
        country_id: 102,
    },
    {
        name: 'Sumatera Selatan',
        country_id: 102,
    },
    {
        name: 'Sumatera Utara',
        country_id: 102,
    },
    {
        name: 'Yogyakarta',
        country_id: 102,
    },
    {
        name: 'Ardabil',
        country_id: 103,
    },
    {
        name: 'Azarbayjan-e Bakhtari',
        country_id: 103,
    },
    {
        name: 'Azarbayjan-e Khavari',
        country_id: 103,
    },
    {
        name: 'Bushehr',
        country_id: 103,
    },
    {
        name: 'Chahar Mahal-e Bakhtiari',
        country_id: 103,
    },
    {
        name: 'Esfahan',
        country_id: 103,
    },
    {
        name: 'Fars',
        country_id: 103,
    },
    {
        name: 'Gilan',
        country_id: 103,
    },
    {
        name: 'Golestan',
        country_id: 103,
    },
    {
        name: 'Hamadan',
        country_id: 103,
    },
    {
        name: 'Hormozgan',
        country_id: 103,
    },
    {
        name: 'Ilam',
        country_id: 103,
    },
    {
        name: 'Kerman',
        country_id: 103,
    },
    {
        name: 'Kermanshah',
        country_id: 103,
    },
    {
        name: 'Khorasan',
        country_id: 103,
    },
    {
        name: 'Khuzestan',
        country_id: 103,
    },
    {
        name: 'Kohgiluyeh-e Boyerahmad',
        country_id: 103,
    },
    {
        name: 'Kordestan',
        country_id: 103,
    },
    {
        name: 'Lorestan',
        country_id: 103,
    },
    {
        name: 'Markazi',
        country_id: 103,
    },
    {
        name: 'Mazandaran',
        country_id: 103,
    },
    {
        name: 'Ostan-e Esfahan',
        country_id: 103,
    },
    {
        name: 'Qazvin',
        country_id: 103,
    },
    {
        name: 'Qom',
        country_id: 103,
    },
    {
        name: 'Semnan',
        country_id: 103,
    },
    {
        name: 'Sistan-e Baluchestan',
        country_id: 103,
    },
    {
        name: 'Tehran',
        country_id: 103,
    },
    {
        name: 'Yazd',
        country_id: 103,
    },
    {
        name: 'Zanjan',
        country_id: 103,
    },
    {
        name: 'Babil',
        country_id: 104,
    },
    {
        name: 'Baghdad',
        country_id: 104,
    },
    {
        name: 'Dahuk',
        country_id: 104,
    },
    {
        name: 'Dhi Qar',
        country_id: 104,
    },
    {
        name: 'Diyala',
        country_id: 104,
    },
    {
        name: 'Erbil',
        country_id: 104,
    },
    {
        name: 'Irbil',
        country_id: 104,
    },
    {
        name: 'Karbala',
        country_id: 104,
    },
    {
        name: 'Kurdistan',
        country_id: 104,
    },
    {
        name: 'Maysan',
        country_id: 104,
    },
    {
        name: 'Ninawa',
        country_id: 104,
    },
    {
        name: 'Salah-ad-Din',
        country_id: 104,
    },
    {
        name: 'Wasit',
        country_id: 104,
    },
    {
        name: 'al-Anbar',
        country_id: 104,
    },
    {
        name: 'al-Basrah',
        country_id: 104,
    },
    {
        name: 'al-Muthanna',
        country_id: 104,
    },
    {
        name: 'al-Qadisiyah',
        country_id: 104,
    },
    {
        name: 'an-Najaf',
        country_id: 104,
    },
    {
        name: 'as-Sulaymaniyah',
        country_id: 104,
    },
    {
        name: "at-Ta'mim",
        country_id: 104,
    },
    {
        name: 'Armagh',
        country_id: 105,
    },
    {
        name: 'Carlow',
        country_id: 105,
    },
    {
        name: 'Cavan',
        country_id: 105,
    },
    {
        name: 'Clare',
        country_id: 105,
    },
    {
        name: 'Cork',
        country_id: 105,
    },
    {
        name: 'Donegal',
        country_id: 105,
    },
    {
        name: 'Dublin',
        country_id: 105,
    },
    {
        name: 'Galway',
        country_id: 105,
    },
    {
        name: 'Kerry',
        country_id: 105,
    },
    {
        name: 'Kildare',
        country_id: 105,
    },
    {
        name: 'Kilkenny',
        country_id: 105,
    },
    {
        name: 'Laois',
        country_id: 105,
    },
    {
        name: 'Leinster',
        country_id: 105,
    },
    {
        name: 'Leitrim',
        country_id: 105,
    },
    {
        name: 'Limerick',
        country_id: 105,
    },
    {
        name: 'Loch Garman',
        country_id: 105,
    },
    {
        name: 'Longford',
        country_id: 105,
    },
    {
        name: 'Louth',
        country_id: 105,
    },
    {
        name: 'Mayo',
        country_id: 105,
    },
    {
        name: 'Meath',
        country_id: 105,
    },
    {
        name: 'Monaghan',
        country_id: 105,
    },
    {
        name: 'Offaly',
        country_id: 105,
    },
    {
        name: 'Roscommon',
        country_id: 105,
    },
    {
        name: 'Sligo',
        country_id: 105,
    },
    {
        name: 'Tipperary North Riding',
        country_id: 105,
    },
    {
        name: 'Tipperary South Riding',
        country_id: 105,
    },
    {
        name: 'Ulster',
        country_id: 105,
    },
    {
        name: 'Waterford',
        country_id: 105,
    },
    {
        name: 'Westmeath',
        country_id: 105,
    },
    {
        name: 'Wexford',
        country_id: 105,
    },
    {
        name: 'Wicklow',
        country_id: 105,
    },
    {
        name: 'Beit Hanania',
        country_id: 106,
    },
    {
        name: 'Ben Gurion Airport',
        country_id: 106,
    },
    {
        name: 'Bethlehem',
        country_id: 106,
    },
    {
        name: 'Caesarea',
        country_id: 106,
    },
    {
        name: 'Centre',
        country_id: 106,
    },
    {
        name: 'Gaza',
        country_id: 106,
    },
    {
        name: 'Hadaron',
        country_id: 106,
    },
    {
        name: 'Haifa District',
        country_id: 106,
    },
    {
        name: 'Hamerkaz',
        country_id: 106,
    },
    {
        name: 'Hazafon',
        country_id: 106,
    },
    {
        name: 'Hebron',
        country_id: 106,
    },
    {
        name: 'Jaffa',
        country_id: 106,
    },
    {
        name: 'Jerusalem',
        country_id: 106,
    },
    {
        name: 'Khefa',
        country_id: 106,
    },
    {
        name: 'Kiryat Yam',
        country_id: 106,
    },
    {
        name: 'Lower Galilee',
        country_id: 106,
    },
    {
        name: 'Qalqilya',
        country_id: 106,
    },
    {
        name: 'Talme Elazar',
        country_id: 106,
    },
    {
        name: 'Tel Aviv',
        country_id: 106,
    },
    {
        name: 'Tsafon',
        country_id: 106,
    },
    {
        name: 'Umm El Fahem',
        country_id: 106,
    },
    {
        name: 'Yerushalayim',
        country_id: 106,
    },
    {
        name: 'Abruzzi',
        country_id: 107,
    },
    {
        name: 'Abruzzo',
        country_id: 107,
    },
    {
        name: 'Agrigento',
        country_id: 107,
    },
    {
        name: 'Alessandria',
        country_id: 107,
    },
    {
        name: 'Ancona',
        country_id: 107,
    },
    {
        name: 'Arezzo',
        country_id: 107,
    },
    {
        name: 'Ascoli Piceno',
        country_id: 107,
    },
    {
        name: 'Asti',
        country_id: 107,
    },
    {
        name: 'Avellino',
        country_id: 107,
    },
    {
        name: 'Bari',
        country_id: 107,
    },
    {
        name: 'Basilicata',
        country_id: 107,
    },
    {
        name: 'Belluno',
        country_id: 107,
    },
    {
        name: 'Benevento',
        country_id: 107,
    },
    {
        name: 'Bergamo',
        country_id: 107,
    },
    {
        name: 'Biella',
        country_id: 107,
    },
    {
        name: 'Bologna',
        country_id: 107,
    },
    {
        name: 'Bolzano',
        country_id: 107,
    },
    {
        name: 'Brescia',
        country_id: 107,
    },
    {
        name: 'Brindisi',
        country_id: 107,
    },
    {
        name: 'Calabria',
        country_id: 107,
    },
    {
        name: 'Campania',
        country_id: 107,
    },
    {
        name: 'Cartoceto',
        country_id: 107,
    },
    {
        name: 'Caserta',
        country_id: 107,
    },
    {
        name: 'Catania',
        country_id: 107,
    },
    {
        name: 'Chieti',
        country_id: 107,
    },
    {
        name: 'Como',
        country_id: 107,
    },
    {
        name: 'Cosenza',
        country_id: 107,
    },
    {
        name: 'Cremona',
        country_id: 107,
    },
    {
        name: 'Cuneo',
        country_id: 107,
    },
    {
        name: 'Emilia-Romagna',
        country_id: 107,
    },
    {
        name: 'Ferrara',
        country_id: 107,
    },
    {
        name: 'Firenze',
        country_id: 107,
    },
    {
        name: 'Florence',
        country_id: 107,
    },
    {
        name: 'Forli-Cesena ',
        country_id: 107,
    },
    {
        name: 'Friuli-Venezia Giulia',
        country_id: 107,
    },
    {
        name: 'Frosinone',
        country_id: 107,
    },
    {
        name: 'Genoa',
        country_id: 107,
    },
    {
        name: 'Gorizia',
        country_id: 107,
    },
    {
        name: "L'Aquila",
        country_id: 107,
    },
    {
        name: 'Lazio',
        country_id: 107,
    },
    {
        name: 'Lecce',
        country_id: 107,
    },
    {
        name: 'Lecco',
        country_id: 107,
    },
    {
        name: 'Lecco Province',
        country_id: 107,
    },
    {
        name: 'Liguria',
        country_id: 107,
    },
    {
        name: 'Lodi',
        country_id: 107,
    },
    {
        name: 'Lombardia',
        country_id: 107,
    },
    {
        name: 'Lombardy',
        country_id: 107,
    },
    {
        name: 'Macerata',
        country_id: 107,
    },
    {
        name: 'Mantova',
        country_id: 107,
    },
    {
        name: 'Marche',
        country_id: 107,
    },
    {
        name: 'Messina',
        country_id: 107,
    },
    {
        name: 'Milan',
        country_id: 107,
    },
    {
        name: 'Modena',
        country_id: 107,
    },
    {
        name: 'Molise',
        country_id: 107,
    },
    {
        name: 'Molteno',
        country_id: 107,
    },
    {
        name: 'Montenegro',
        country_id: 107,
    },
    {
        name: 'Monza and Brianza',
        country_id: 107,
    },
    {
        name: 'Naples',
        country_id: 107,
    },
    {
        name: 'Novara',
        country_id: 107,
    },
    {
        name: 'Padova',
        country_id: 107,
    },
    {
        name: 'Parma',
        country_id: 107,
    },
    {
        name: 'Pavia',
        country_id: 107,
    },
    {
        name: 'Perugia',
        country_id: 107,
    },
    {
        name: 'Pesaro-Urbino',
        country_id: 107,
    },
    {
        name: 'Piacenza',
        country_id: 107,
    },
    {
        name: 'Piedmont',
        country_id: 107,
    },
    {
        name: 'Piemonte',
        country_id: 107,
    },
    {
        name: 'Pisa',
        country_id: 107,
    },
    {
        name: 'Pordenone',
        country_id: 107,
    },
    {
        name: 'Potenza',
        country_id: 107,
    },
    {
        name: 'Puglia',
        country_id: 107,
    },
    {
        name: 'Reggio Emilia',
        country_id: 107,
    },
    {
        name: 'Rimini',
        country_id: 107,
    },
    {
        name: 'Roma',
        country_id: 107,
    },
    {
        name: 'Salerno',
        country_id: 107,
    },
    {
        name: 'Sardegna',
        country_id: 107,
    },
    {
        name: 'Sassari',
        country_id: 107,
    },
    {
        name: 'Savona',
        country_id: 107,
    },
    {
        name: 'Sicilia',
        country_id: 107,
    },
    {
        name: 'Siena',
        country_id: 107,
    },
    {
        name: 'Sondrio',
        country_id: 107,
    },
    {
        name: 'South Tyrol',
        country_id: 107,
    },
    {
        name: 'Taranto',
        country_id: 107,
    },
    {
        name: 'Teramo',
        country_id: 107,
    },
    {
        name: 'Torino',
        country_id: 107,
    },
    {
        name: 'Toscana',
        country_id: 107,
    },
    {
        name: 'Trapani',
        country_id: 107,
    },
    {
        name: 'Trentino-Alto Adige',
        country_id: 107,
    },
    {
        name: 'Trento',
        country_id: 107,
    },
    {
        name: 'Treviso',
        country_id: 107,
    },
    {
        name: 'Udine',
        country_id: 107,
    },
    {
        name: 'Umbria',
        country_id: 107,
    },
    {
        name: "Valle d'Aosta",
        country_id: 107,
    },
    {
        name: 'Varese',
        country_id: 107,
    },
    {
        name: 'Veneto',
        country_id: 107,
    },
    {
        name: 'Venezia',
        country_id: 107,
    },
    {
        name: 'Verbano-Cusio-Ossola',
        country_id: 107,
    },
    {
        name: 'Vercelli',
        country_id: 107,
    },
    {
        name: 'Verona',
        country_id: 107,
    },
    {
        name: 'Vicenza',
        country_id: 107,
    },
    {
        name: 'Viterbo',
        country_id: 107,
    },
    {
        name: 'Buxoro Viloyati',
        country_id: 108,
    },
    {
        name: 'Clarendon',
        country_id: 108,
    },
    {
        name: 'Hanover',
        country_id: 108,
    },
    {
        name: 'Kingston',
        country_id: 108,
    },
    {
        name: 'Manchester',
        country_id: 108,
    },
    {
        name: 'Portland',
        country_id: 108,
    },
    {
        name: 'Saint Andrews',
        country_id: 108,
    },
    {
        name: 'Saint Ann',
        country_id: 108,
    },
    {
        name: 'Saint Catherine',
        country_id: 108,
    },
    {
        name: 'Saint Elizabeth',
        country_id: 108,
    },
    {
        name: 'Saint James',
        country_id: 108,
    },
    {
        name: 'Saint Mary',
        country_id: 108,
    },
    {
        name: 'Saint Thomas',
        country_id: 108,
    },
    {
        name: 'Trelawney',
        country_id: 108,
    },
    {
        name: 'Westmoreland',
        country_id: 108,
    },
    {
        name: 'Aichi',
        country_id: 109,
    },
    {
        name: 'Akita',
        country_id: 109,
    },
    {
        name: 'Aomori',
        country_id: 109,
    },
    {
        name: 'Chiba',
        country_id: 109,
    },
    {
        name: 'Ehime',
        country_id: 109,
    },
    {
        name: 'Fukui',
        country_id: 109,
    },
    {
        name: 'Fukuoka',
        country_id: 109,
    },
    {
        name: 'Fukushima',
        country_id: 109,
    },
    {
        name: 'Gifu',
        country_id: 109,
    },
    {
        name: 'Gumma',
        country_id: 109,
    },
    {
        name: 'Hiroshima',
        country_id: 109,
    },
    {
        name: 'Hokkaido',
        country_id: 109,
    },
    {
        name: 'Hyogo',
        country_id: 109,
    },
    {
        name: 'Ibaraki',
        country_id: 109,
    },
    {
        name: 'Ishikawa',
        country_id: 109,
    },
    {
        name: 'Iwate',
        country_id: 109,
    },
    {
        name: 'Kagawa',
        country_id: 109,
    },
    {
        name: 'Kagoshima',
        country_id: 109,
    },
    {
        name: 'Kanagawa',
        country_id: 109,
    },
    {
        name: 'Kanto',
        country_id: 109,
    },
    {
        name: 'Kochi',
        country_id: 109,
    },
    {
        name: 'Kumamoto',
        country_id: 109,
    },
    {
        name: 'Kyoto',
        country_id: 109,
    },
    {
        name: 'Mie',
        country_id: 109,
    },
    {
        name: 'Miyagi',
        country_id: 109,
    },
    {
        name: 'Miyazaki',
        country_id: 109,
    },
    {
        name: 'Nagano',
        country_id: 109,
    },
    {
        name: 'Nagasaki',
        country_id: 109,
    },
    {
        name: 'Nara',
        country_id: 109,
    },
    {
        name: 'Niigata',
        country_id: 109,
    },
    {
        name: 'Oita',
        country_id: 109,
    },
    {
        name: 'Okayama',
        country_id: 109,
    },
    {
        name: 'Okinawa',
        country_id: 109,
    },
    {
        name: 'Osaka',
        country_id: 109,
    },
    {
        name: 'Saga',
        country_id: 109,
    },
    {
        name: 'Saitama',
        country_id: 109,
    },
    {
        name: 'Shiga',
        country_id: 109,
    },
    {
        name: 'Shimane',
        country_id: 109,
    },
    {
        name: 'Shizuoka',
        country_id: 109,
    },
    {
        name: 'Tochigi',
        country_id: 109,
    },
    {
        name: 'Tokushima',
        country_id: 109,
    },
    {
        name: 'Tokyo',
        country_id: 109,
    },
    {
        name: 'Tottori',
        country_id: 109,
    },
    {
        name: 'Toyama',
        country_id: 109,
    },
    {
        name: 'Wakayama',
        country_id: 109,
    },
    {
        name: 'Yamagata',
        country_id: 109,
    },
    {
        name: 'Yamaguchi',
        country_id: 109,
    },
    {
        name: 'Yamanashi',
        country_id: 109,
    },
    {
        name: 'Grouville',
        country_id: 110,
    },
    {
        name: 'Saint Brelade',
        country_id: 110,
    },
    {
        name: 'Saint Clement',
        country_id: 110,
    },
    {
        name: 'Saint Helier',
        country_id: 110,
    },
    {
        name: 'Saint John',
        country_id: 110,
    },
    {
        name: 'Saint Lawrence',
        country_id: 110,
    },
    {
        name: 'Saint Martin',
        country_id: 110,
    },
    {
        name: 'Saint Mary',
        country_id: 110,
    },
    {
        name: 'Saint Peter',
        country_id: 110,
    },
    {
        name: 'Saint Saviour',
        country_id: 110,
    },
    {
        name: 'Trinity',
        country_id: 110,
    },
    {
        name: "'Ajlun",
        country_id: 111,
    },
    {
        name: 'Amman',
        country_id: 111,
    },
    {
        name: 'Irbid',
        country_id: 111,
    },
    {
        name: 'Jarash',
        country_id: 111,
    },
    {
        name: "Ma'an",
        country_id: 111,
    },
    {
        name: 'Madaba',
        country_id: 111,
    },
    {
        name: "al-'Aqabah",
        country_id: 111,
    },
    {
        name: "al-Balqa'",
        country_id: 111,
    },
    {
        name: 'al-Karak',
        country_id: 111,
    },
    {
        name: 'al-Mafraq',
        country_id: 111,
    },
    {
        name: 'at-Tafilah',
        country_id: 111,
    },
    {
        name: "az-Zarqa'",
        country_id: 111,
    },
    {
        name: 'Akmecet',
        country_id: 112,
    },
    {
        name: 'Akmola',
        country_id: 112,
    },
    {
        name: 'Aktobe',
        country_id: 112,
    },
    {
        name: 'Almati',
        country_id: 112,
    },
    {
        name: 'Atirau',
        country_id: 112,
    },
    {
        name: 'Batis Kazakstan',
        country_id: 112,
    },
    {
        name: 'Burlinsky Region',
        country_id: 112,
    },
    {
        name: 'Karagandi',
        country_id: 112,
    },
    {
        name: 'Kostanay',
        country_id: 112,
    },
    {
        name: 'Mankistau',
        country_id: 112,
    },
    {
        name: 'Ontustik Kazakstan',
        country_id: 112,
    },
    {
        name: 'Pavlodar',
        country_id: 112,
    },
    {
        name: 'Sigis Kazakstan',
        country_id: 112,
    },
    {
        name: 'Soltustik Kazakstan',
        country_id: 112,
    },
    {
        name: 'Taraz',
        country_id: 112,
    },
    {
        name: 'Central',
        country_id: 113,
    },
    {
        name: 'Coast',
        country_id: 113,
    },
    {
        name: 'Eastern',
        country_id: 113,
    },
    {
        name: 'Nairobi',
        country_id: 113,
    },
    {
        name: 'North Eastern',
        country_id: 113,
    },
    {
        name: 'Nyanza',
        country_id: 113,
    },
    {
        name: 'Rift Valley',
        country_id: 113,
    },
    {
        name: 'Western',
        country_id: 113,
    },
    {
        name: 'Abaiang',
        country_id: 114,
    },
    {
        name: 'Abemana',
        country_id: 114,
    },
    {
        name: 'Aranuka',
        country_id: 114,
    },
    {
        name: 'Arorae',
        country_id: 114,
    },
    {
        name: 'Banaba',
        country_id: 114,
    },
    {
        name: 'Beru',
        country_id: 114,
    },
    {
        name: 'Butaritari',
        country_id: 114,
    },
    {
        name: 'Kiritimati',
        country_id: 114,
    },
    {
        name: 'Kuria',
        country_id: 114,
    },
    {
        name: 'Maiana',
        country_id: 114,
    },
    {
        name: 'Makin',
        country_id: 114,
    },
    {
        name: 'Marakei',
        country_id: 114,
    },
    {
        name: 'Nikunau',
        country_id: 114,
    },
    {
        name: 'Nonouti',
        country_id: 114,
    },
    {
        name: 'Onotoa',
        country_id: 114,
    },
    {
        name: 'Phoenix Islands',
        country_id: 114,
    },
    {
        name: 'Tabiteuea North',
        country_id: 114,
    },
    {
        name: 'Tabiteuea South',
        country_id: 114,
    },
    {
        name: 'Tabuaeran',
        country_id: 114,
    },
    {
        name: 'Tamana',
        country_id: 114,
    },
    {
        name: 'Tarawa North',
        country_id: 114,
    },
    {
        name: 'Tarawa South',
        country_id: 114,
    },
    {
        name: 'Teraina',
        country_id: 114,
    },
    {
        name: 'Chagangdo',
        country_id: 115,
    },
    {
        name: 'Hamgyeongbukto',
        country_id: 115,
    },
    {
        name: 'Hamgyeongnamdo',
        country_id: 115,
    },
    {
        name: 'Hwanghaebukto',
        country_id: 115,
    },
    {
        name: 'Hwanghaenamdo',
        country_id: 115,
    },
    {
        name: 'Kaeseong',
        country_id: 115,
    },
    {
        name: 'Kangweon',
        country_id: 115,
    },
    {
        name: 'Nampo',
        country_id: 115,
    },
    {
        name: 'Pyeonganbukto',
        country_id: 115,
    },
    {
        name: 'Pyeongannamdo',
        country_id: 115,
    },
    {
        name: 'Pyeongyang',
        country_id: 115,
    },
    {
        name: 'Yanggang',
        country_id: 115,
    },
    {
        name: 'Busan',
        country_id: 116,
    },
    {
        name: 'Cheju',
        country_id: 116,
    },
    {
        name: 'Chollabuk',
        country_id: 116,
    },
    {
        name: 'Chollanam',
        country_id: 116,
    },
    {
        name: 'Chungbuk',
        country_id: 116,
    },
    {
        name: 'Chungcheongbuk',
        country_id: 116,
    },
    {
        name: 'Chungcheongnam',
        country_id: 116,
    },
    {
        name: 'Chungnam',
        country_id: 116,
    },
    {
        name: 'Daegu',
        country_id: 116,
    },
    {
        name: 'Gangwon-do',
        country_id: 116,
    },
    {
        name: 'Goyang-si',
        country_id: 116,
    },
    {
        name: 'Gyeonggi-do',
        country_id: 116,
    },
    {
        name: 'Gyeongsang ',
        country_id: 116,
    },
    {
        name: 'Gyeongsangnam-do',
        country_id: 116,
    },
    {
        name: 'Incheon',
        country_id: 116,
    },
    {
        name: 'Jeju-Si',
        country_id: 116,
    },
    {
        name: 'Jeonbuk',
        country_id: 116,
    },
    {
        name: 'Kangweon',
        country_id: 116,
    },
    {
        name: 'Kwangju',
        country_id: 116,
    },
    {
        name: 'Kyeonggi',
        country_id: 116,
    },
    {
        name: 'Kyeongsangbuk',
        country_id: 116,
    },
    {
        name: 'Kyeongsangnam',
        country_id: 116,
    },
    {
        name: 'Kyonggi-do',
        country_id: 116,
    },
    {
        name: 'Kyungbuk-Do',
        country_id: 116,
    },
    {
        name: 'Kyunggi-Do',
        country_id: 116,
    },
    {
        name: 'Kyunggi-do',
        country_id: 116,
    },
    {
        name: 'Pusan',
        country_id: 116,
    },
    {
        name: 'Seoul',
        country_id: 116,
    },
    {
        name: 'Sudogwon',
        country_id: 116,
    },
    {
        name: 'Taegu',
        country_id: 116,
    },
    {
        name: 'Taejeon',
        country_id: 116,
    },
    {
        name: 'Taejon-gwangyoksi',
        country_id: 116,
    },
    {
        name: 'Ulsan',
        country_id: 116,
    },
    {
        name: 'Wonju',
        country_id: 116,
    },
    {
        name: 'gwangyoksi',
        country_id: 116,
    },
    {
        name: 'Al Asimah',
        country_id: 117,
    },
    {
        name: 'Hawalli',
        country_id: 117,
    },
    {
        name: 'Mishref',
        country_id: 117,
    },
    {
        name: 'Qadesiya',
        country_id: 117,
    },
    {
        name: 'Safat',
        country_id: 117,
    },
    {
        name: 'Salmiya',
        country_id: 117,
    },
    {
        name: 'al-Ahmadi',
        country_id: 117,
    },
    {
        name: 'al-Farwaniyah',
        country_id: 117,
    },
    {
        name: 'al-Jahra',
        country_id: 117,
    },
    {
        name: 'al-Kuwayt',
        country_id: 117,
    },
    {
        name: 'Batken',
        country_id: 118,
    },
    {
        name: 'Bishkek',
        country_id: 118,
    },
    {
        name: 'Chui',
        country_id: 118,
    },
    {
        name: 'Issyk-Kul',
        country_id: 118,
    },
    {
        name: 'Jalal-Abad',
        country_id: 118,
    },
    {
        name: 'Naryn',
        country_id: 118,
    },
    {
        name: 'Osh',
        country_id: 118,
    },
    {
        name: 'Talas',
        country_id: 118,
    },
    {
        name: 'Attopu',
        country_id: 119,
    },
    {
        name: 'Bokeo',
        country_id: 119,
    },
    {
        name: 'Bolikhamsay',
        country_id: 119,
    },
    {
        name: 'Champasak',
        country_id: 119,
    },
    {
        name: 'Houaphanh',
        country_id: 119,
    },
    {
        name: 'Khammouane',
        country_id: 119,
    },
    {
        name: 'Luang Nam Tha',
        country_id: 119,
    },
    {
        name: 'Luang Prabang',
        country_id: 119,
    },
    {
        name: 'Oudomxay',
        country_id: 119,
    },
    {
        name: 'Phongsaly',
        country_id: 119,
    },
    {
        name: 'Saravan',
        country_id: 119,
    },
    {
        name: 'Savannakhet',
        country_id: 119,
    },
    {
        name: 'Sekong',
        country_id: 119,
    },
    {
        name: 'Viangchan Prefecture',
        country_id: 119,
    },
    {
        name: 'Viangchan Province',
        country_id: 119,
    },
    {
        name: 'Xaignabury',
        country_id: 119,
    },
    {
        name: 'Xiang Khuang',
        country_id: 119,
    },
    {
        name: 'Aizkraukles',
        country_id: 120,
    },
    {
        name: 'Aluksnes',
        country_id: 120,
    },
    {
        name: 'Balvu',
        country_id: 120,
    },
    {
        name: 'Bauskas',
        country_id: 120,
    },
    {
        name: 'Cesu',
        country_id: 120,
    },
    {
        name: 'Daugavpils',
        country_id: 120,
    },
    {
        name: 'Daugavpils City',
        country_id: 120,
    },
    {
        name: 'Dobeles',
        country_id: 120,
    },
    {
        name: 'Gulbenes',
        country_id: 120,
    },
    {
        name: 'Jekabspils',
        country_id: 120,
    },
    {
        name: 'Jelgava',
        country_id: 120,
    },
    {
        name: 'Jelgavas',
        country_id: 120,
    },
    {
        name: 'Jurmala City',
        country_id: 120,
    },
    {
        name: 'Kraslavas',
        country_id: 120,
    },
    {
        name: 'Kuldigas',
        country_id: 120,
    },
    {
        name: 'Liepaja',
        country_id: 120,
    },
    {
        name: 'Liepajas',
        country_id: 120,
    },
    {
        name: 'Limbazhu',
        country_id: 120,
    },
    {
        name: 'Ludzas',
        country_id: 120,
    },
    {
        name: 'Madonas',
        country_id: 120,
    },
    {
        name: 'Ogres',
        country_id: 120,
    },
    {
        name: 'Preilu',
        country_id: 120,
    },
    {
        name: 'Rezekne',
        country_id: 120,
    },
    {
        name: 'Rezeknes',
        country_id: 120,
    },
    {
        name: 'Riga',
        country_id: 120,
    },
    {
        name: 'Rigas',
        country_id: 120,
    },
    {
        name: 'Saldus',
        country_id: 120,
    },
    {
        name: 'Talsu',
        country_id: 120,
    },
    {
        name: 'Tukuma',
        country_id: 120,
    },
    {
        name: 'Valkas',
        country_id: 120,
    },
    {
        name: 'Valmieras',
        country_id: 120,
    },
    {
        name: 'Ventspils',
        country_id: 120,
    },
    {
        name: 'Ventspils City',
        country_id: 120,
    },
    {
        name: 'Beirut',
        country_id: 121,
    },
    {
        name: 'Jabal Lubnan',
        country_id: 121,
    },
    {
        name: 'Mohafazat Liban-Nord',
        country_id: 121,
    },
    {
        name: 'Mohafazat Mont-Liban',
        country_id: 121,
    },
    {
        name: 'Sidon',
        country_id: 121,
    },
    {
        name: 'al-Biqa',
        country_id: 121,
    },
    {
        name: 'al-Janub',
        country_id: 121,
    },
    {
        name: 'an-Nabatiyah',
        country_id: 121,
    },
    {
        name: 'ash-Shamal',
        country_id: 121,
    },
    {
        name: 'Berea',
        country_id: 122,
    },
    {
        name: 'Butha-Buthe',
        country_id: 122,
    },
    {
        name: 'Leribe',
        country_id: 122,
    },
    {
        name: 'Mafeteng',
        country_id: 122,
    },
    {
        name: 'Maseru',
        country_id: 122,
    },
    {
        name: "Mohale's Hoek",
        country_id: 122,
    },
    {
        name: 'Mokhotlong',
        country_id: 122,
    },
    {
        name: "Qacha's Nek",
        country_id: 122,
    },
    {
        name: 'Quthing',
        country_id: 122,
    },
    {
        name: 'Thaba-Tseka',
        country_id: 122,
    },
    {
        name: 'Bomi',
        country_id: 123,
    },
    {
        name: 'Bong',
        country_id: 123,
    },
    {
        name: 'Grand Bassa',
        country_id: 123,
    },
    {
        name: 'Grand Cape Mount',
        country_id: 123,
    },
    {
        name: 'Grand Gedeh',
        country_id: 123,
    },
    {
        name: 'Loffa',
        country_id: 123,
    },
    {
        name: 'Margibi',
        country_id: 123,
    },
    {
        name: 'Maryland and Grand Kru',
        country_id: 123,
    },
    {
        name: 'Montserrado',
        country_id: 123,
    },
    {
        name: 'Nimba',
        country_id: 123,
    },
    {
        name: 'Rivercess',
        country_id: 123,
    },
    {
        name: 'Sinoe',
        country_id: 123,
    },
    {
        name: 'Ajdabiya',
        country_id: 124,
    },
    {
        name: 'Fezzan',
        country_id: 124,
    },
    {
        name: 'Banghazi',
        country_id: 124,
    },
    {
        name: 'Darnah',
        country_id: 124,
    },
    {
        name: 'Ghadamis',
        country_id: 124,
    },
    {
        name: 'Gharyan',
        country_id: 124,
    },
    {
        name: 'Misratah',
        country_id: 124,
    },
    {
        name: 'Murzuq',
        country_id: 124,
    },
    {
        name: 'Sabha',
        country_id: 124,
    },
    {
        name: 'Sawfajjin',
        country_id: 124,
    },
    {
        name: 'Surt',
        country_id: 124,
    },
    {
        name: 'Tarabulus',
        country_id: 124,
    },
    {
        name: 'Tarhunah',
        country_id: 124,
    },
    {
        name: 'Tripolitania',
        country_id: 124,
    },
    {
        name: 'Tubruq',
        country_id: 124,
    },
    {
        name: 'Yafran',
        country_id: 124,
    },
    {
        name: 'Zlitan',
        country_id: 124,
    },
    {
        name: "al-'Aziziyah",
        country_id: 124,
    },
    {
        name: 'al-Fatih',
        country_id: 124,
    },
    {
        name: 'al-Jabal al Akhdar',
        country_id: 124,
    },
    {
        name: 'al-Jufrah',
        country_id: 124,
    },
    {
        name: 'al-Khums',
        country_id: 124,
    },
    {
        name: 'al-Kufrah',
        country_id: 124,
    },
    {
        name: 'an-Nuqat al-Khams',
        country_id: 124,
    },
    {
        name: "ash-Shati'",
        country_id: 124,
    },
    {
        name: 'az-Zawiyah',
        country_id: 124,
    },
    {
        name: 'Balzers',
        country_id: 125,
    },
    {
        name: 'Eschen',
        country_id: 125,
    },
    {
        name: 'Gamprin',
        country_id: 125,
    },
    {
        name: 'Mauren',
        country_id: 125,
    },
    {
        name: 'Planken',
        country_id: 125,
    },
    {
        name: 'Ruggell',
        country_id: 125,
    },
    {
        name: 'Schaan',
        country_id: 125,
    },
    {
        name: 'Schellenberg',
        country_id: 125,
    },
    {
        name: 'Triesen',
        country_id: 125,
    },
    {
        name: 'Triesenberg',
        country_id: 125,
    },
    {
        name: 'Vaduz',
        country_id: 125,
    },
    {
        name: 'Alytaus',
        country_id: 126,
    },
    {
        name: 'Anyksciai',
        country_id: 126,
    },
    {
        name: 'Kauno',
        country_id: 126,
    },
    {
        name: 'Klaipedos',
        country_id: 126,
    },
    {
        name: 'Marijampoles',
        country_id: 126,
    },
    {
        name: 'Panevezhio',
        country_id: 126,
    },
    {
        name: 'Panevezys',
        country_id: 126,
    },
    {
        name: 'Shiauliu',
        country_id: 126,
    },
    {
        name: 'Taurages',
        country_id: 126,
    },
    {
        name: 'Telshiu',
        country_id: 126,
    },
    {
        name: 'Telsiai',
        country_id: 126,
    },
    {
        name: 'Utenos',
        country_id: 126,
    },
    {
        name: 'Vilniaus',
        country_id: 126,
    },
    {
        name: 'Capellen',
        country_id: 127,
    },
    {
        name: 'Clervaux',
        country_id: 127,
    },
    {
        name: 'Diekirch',
        country_id: 127,
    },
    {
        name: 'Echternach',
        country_id: 127,
    },
    {
        name: 'Esch-sur-Alzette',
        country_id: 127,
    },
    {
        name: 'Grevenmacher',
        country_id: 127,
    },
    {
        name: 'Luxembourg',
        country_id: 127,
    },
    {
        name: 'Mersch',
        country_id: 127,
    },
    {
        name: 'Redange',
        country_id: 127,
    },
    {
        name: 'Remich',
        country_id: 127,
    },
    {
        name: 'Vianden',
        country_id: 127,
    },
    {
        name: 'Wiltz',
        country_id: 127,
    },
    {
        name: 'Macau',
        country_id: 128,
    },
    {
        name: 'Berovo',
        country_id: 129,
    },
    {
        name: 'Bitola',
        country_id: 129,
    },
    {
        name: 'Brod',
        country_id: 129,
    },
    {
        name: 'Debar',
        country_id: 129,
    },
    {
        name: 'Delchevo',
        country_id: 129,
    },
    {
        name: 'Demir Hisar',
        country_id: 129,
    },
    {
        name: 'Gevgelija',
        country_id: 129,
    },
    {
        name: 'Gostivar',
        country_id: 129,
    },
    {
        name: 'Kavadarci',
        country_id: 129,
    },
    {
        name: 'Kichevo',
        country_id: 129,
    },
    {
        name: 'Kochani',
        country_id: 129,
    },
    {
        name: 'Kratovo',
        country_id: 129,
    },
    {
        name: 'Kriva Palanka',
        country_id: 129,
    },
    {
        name: 'Krushevo',
        country_id: 129,
    },
    {
        name: 'Kumanovo',
        country_id: 129,
    },
    {
        name: 'Negotino',
        country_id: 129,
    },
    {
        name: 'Ohrid',
        country_id: 129,
    },
    {
        name: 'Prilep',
        country_id: 129,
    },
    {
        name: 'Probishtip',
        country_id: 129,
    },
    {
        name: 'Radovish',
        country_id: 129,
    },
    {
        name: 'Resen',
        country_id: 129,
    },
    {
        name: 'Shtip',
        country_id: 129,
    },
    {
        name: 'Skopje',
        country_id: 129,
    },
    {
        name: 'Struga',
        country_id: 129,
    },
    {
        name: 'Strumica',
        country_id: 129,
    },
    {
        name: 'Sveti Nikole',
        country_id: 129,
    },
    {
        name: 'Tetovo',
        country_id: 129,
    },
    {
        name: 'Valandovo',
        country_id: 129,
    },
    {
        name: 'Veles',
        country_id: 129,
    },
    {
        name: 'Vinica',
        country_id: 129,
    },
    {
        name: 'Antananarivo',
        country_id: 130,
    },
    {
        name: 'Antsiranana',
        country_id: 130,
    },
    {
        name: 'Fianarantsoa',
        country_id: 130,
    },
    {
        name: 'Mahajanga',
        country_id: 130,
    },
    {
        name: 'Toamasina',
        country_id: 130,
    },
    {
        name: 'Toliary',
        country_id: 130,
    },
    {
        name: 'Balaka',
        country_id: 131,
    },
    {
        name: 'Blantyre City',
        country_id: 131,
    },
    {
        name: 'Chikwawa',
        country_id: 131,
    },
    {
        name: 'Chiradzulu',
        country_id: 131,
    },
    {
        name: 'Chitipa',
        country_id: 131,
    },
    {
        name: 'Dedza',
        country_id: 131,
    },
    {
        name: 'Dowa',
        country_id: 131,
    },
    {
        name: 'Karonga',
        country_id: 131,
    },
    {
        name: 'Kasungu',
        country_id: 131,
    },
    {
        name: 'Lilongwe City',
        country_id: 131,
    },
    {
        name: 'Machinga',
        country_id: 131,
    },
    {
        name: 'Mangochi',
        country_id: 131,
    },
    {
        name: 'Mchinji',
        country_id: 131,
    },
    {
        name: 'Mulanje',
        country_id: 131,
    },
    {
        name: 'Mwanza',
        country_id: 131,
    },
    {
        name: 'Mzimba',
        country_id: 131,
    },
    {
        name: 'Mzuzu City',
        country_id: 131,
    },
    {
        name: 'Nkhata Bay',
        country_id: 131,
    },
    {
        name: 'Nkhotakota',
        country_id: 131,
    },
    {
        name: 'Nsanje',
        country_id: 131,
    },
    {
        name: 'Ntcheu',
        country_id: 131,
    },
    {
        name: 'Ntchisi',
        country_id: 131,
    },
    {
        name: 'Phalombe',
        country_id: 131,
    },
    {
        name: 'Rumphi',
        country_id: 131,
    },
    {
        name: 'Salima',
        country_id: 131,
    },
    {
        name: 'Thyolo',
        country_id: 131,
    },
    {
        name: 'Zomba Municipality',
        country_id: 131,
    },
    {
        name: 'Johor',
        country_id: 132,
    },
    {
        name: 'Kedah',
        country_id: 132,
    },
    {
        name: 'Kelantan',
        country_id: 132,
    },
    {
        name: 'Kuala Lumpur',
        country_id: 132,
    },
    {
        name: 'Labuan',
        country_id: 132,
    },
    {
        name: 'Melaka',
        country_id: 132,
    },
    {
        name: 'Negeri Johor',
        country_id: 132,
    },
    {
        name: 'Negeri Sembilan',
        country_id: 132,
    },
    {
        name: 'Pahang',
        country_id: 132,
    },
    {
        name: 'Penang',
        country_id: 132,
    },
    {
        name: 'Perak',
        country_id: 132,
    },
    {
        name: 'Perlis',
        country_id: 132,
    },
    {
        name: 'Pulau Pinang',
        country_id: 132,
    },
    {
        name: 'Sabah',
        country_id: 132,
    },
    {
        name: 'Sarawak',
        country_id: 132,
    },
    {
        name: 'Selangor',
        country_id: 132,
    },
    {
        name: 'Sembilan',
        country_id: 132,
    },
    {
        name: 'Terengganu',
        country_id: 132,
    },
    {
        name: 'Alif Alif',
        country_id: 133,
    },
    {
        name: 'Alif Dhaal',
        country_id: 133,
    },
    {
        name: 'Baa',
        country_id: 133,
    },
    {
        name: 'Dhaal',
        country_id: 133,
    },
    {
        name: 'Faaf',
        country_id: 133,
    },
    {
        name: 'Gaaf Alif',
        country_id: 133,
    },
    {
        name: 'Gaaf Dhaal',
        country_id: 133,
    },
    {
        name: 'Ghaviyani',
        country_id: 133,
    },
    {
        name: 'Haa Alif',
        country_id: 133,
    },
    {
        name: 'Haa Dhaal',
        country_id: 133,
    },
    {
        name: 'Kaaf',
        country_id: 133,
    },
    {
        name: 'Laam',
        country_id: 133,
    },
    {
        name: 'Lhaviyani',
        country_id: 133,
    },
    {
        name: 'Male',
        country_id: 133,
    },
    {
        name: 'Miim',
        country_id: 133,
    },
    {
        name: 'Nuun',
        country_id: 133,
    },
    {
        name: 'Raa',
        country_id: 133,
    },
    {
        name: 'Shaviyani',
        country_id: 133,
    },
    {
        name: 'Siin',
        country_id: 133,
    },
    {
        name: 'Thaa',
        country_id: 133,
    },
    {
        name: 'Vaav',
        country_id: 133,
    },
    {
        name: 'Bamako',
        country_id: 134,
    },
    {
        name: 'Gao',
        country_id: 134,
    },
    {
        name: 'Kayes',
        country_id: 134,
    },
    {
        name: 'Kidal',
        country_id: 134,
    },
    {
        name: 'Koulikoro',
        country_id: 134,
    },
    {
        name: 'Mopti',
        country_id: 134,
    },
    {
        name: 'Segou',
        country_id: 134,
    },
    {
        name: 'Sikasso',
        country_id: 134,
    },
    {
        name: 'Tombouctou',
        country_id: 134,
    },
    {
        name: 'Gozo and Comino',
        country_id: 135,
    },
    {
        name: 'Inner Harbour',
        country_id: 135,
    },
    {
        name: 'Northern',
        country_id: 135,
    },
    {
        name: 'Outer Harbour',
        country_id: 135,
    },
    {
        name: 'South Eastern',
        country_id: 135,
    },
    {
        name: 'Valletta',
        country_id: 135,
    },
    {
        name: 'Western',
        country_id: 135,
    },
    {
        name: 'Castletown',
        country_id: 136,
    },
    {
        name: 'Douglas',
        country_id: 136,
    },
    {
        name: 'Laxey',
        country_id: 136,
    },
    {
        name: 'Onchan',
        country_id: 136,
    },
    {
        name: 'Peel',
        country_id: 136,
    },
    {
        name: 'Port Erin',
        country_id: 136,
    },
    {
        name: 'Port Saint Mary',
        country_id: 136,
    },
    {
        name: 'Ramsey',
        country_id: 136,
    },
    {
        name: 'Ailinlaplap',
        country_id: 137,
    },
    {
        name: 'Ailuk',
        country_id: 137,
    },
    {
        name: 'Arno',
        country_id: 137,
    },
    {
        name: 'Aur',
        country_id: 137,
    },
    {
        name: 'Bikini',
        country_id: 137,
    },
    {
        name: 'Ebon',
        country_id: 137,
    },
    {
        name: 'Enewetak',
        country_id: 137,
    },
    {
        name: 'Jabat',
        country_id: 137,
    },
    {
        name: 'Jaluit',
        country_id: 137,
    },
    {
        name: 'Kili',
        country_id: 137,
    },
    {
        name: 'Kwajalein',
        country_id: 137,
    },
    {
        name: 'Lae',
        country_id: 137,
    },
    {
        name: 'Lib',
        country_id: 137,
    },
    {
        name: 'Likiep',
        country_id: 137,
    },
    {
        name: 'Majuro',
        country_id: 137,
    },
    {
        name: 'Maloelap',
        country_id: 137,
    },
    {
        name: 'Mejit',
        country_id: 137,
    },
    {
        name: 'Mili',
        country_id: 137,
    },
    {
        name: 'Namorik',
        country_id: 137,
    },
    {
        name: 'Namu',
        country_id: 137,
    },
    {
        name: 'Rongelap',
        country_id: 137,
    },
    {
        name: 'Ujae',
        country_id: 137,
    },
    {
        name: 'Utrik',
        country_id: 137,
    },
    {
        name: 'Wotho',
        country_id: 137,
    },
    {
        name: 'Wotje',
        country_id: 137,
    },
    {
        name: 'Fort-de-France',
        country_id: 138,
    },
    {
        name: 'La Trinite',
        country_id: 138,
    },
    {
        name: 'Le Marin',
        country_id: 138,
    },
    {
        name: 'Saint-Pierre',
        country_id: 138,
    },
    {
        name: 'Adrar',
        country_id: 139,
    },
    {
        name: 'Assaba',
        country_id: 139,
    },
    {
        name: 'Brakna',
        country_id: 139,
    },
    {
        name: 'Dhakhlat Nawadibu',
        country_id: 139,
    },
    {
        name: 'Hudh-al-Gharbi',
        country_id: 139,
    },
    {
        name: 'Hudh-ash-Sharqi',
        country_id: 139,
    },
    {
        name: 'Inshiri',
        country_id: 139,
    },
    {
        name: 'Nawakshut',
        country_id: 139,
    },
    {
        name: 'Qidimagha',
        country_id: 139,
    },
    {
        name: 'Qurqul',
        country_id: 139,
    },
    {
        name: 'Taqant',
        country_id: 139,
    },
    {
        name: 'Tiris Zammur',
        country_id: 139,
    },
    {
        name: 'Trarza',
        country_id: 139,
    },
    {
        name: 'Black River',
        country_id: 140,
    },
    {
        name: 'Eau Coulee',
        country_id: 140,
    },
    {
        name: 'Flacq',
        country_id: 140,
    },
    {
        name: 'Floreal',
        country_id: 140,
    },
    {
        name: 'Grand Port',
        country_id: 140,
    },
    {
        name: 'Moka',
        country_id: 140,
    },
    {
        name: 'Pamplempousses',
        country_id: 140,
    },
    {
        name: 'Plaines Wilhelm',
        country_id: 140,
    },
    {
        name: 'Port Louis',
        country_id: 140,
    },
    {
        name: 'Riviere du Rempart',
        country_id: 140,
    },
    {
        name: 'Rodrigues',
        country_id: 140,
    },
    {
        name: 'Rose Hill',
        country_id: 140,
    },
    {
        name: 'Savanne',
        country_id: 140,
    },
    {
        name: 'Mayotte',
        country_id: 141,
    },
    {
        name: 'Pamanzi',
        country_id: 141,
    },
    {
        name: 'Aguascalientes',
        country_id: 142,
    },
    {
        name: 'Baja California',
        country_id: 142,
    },
    {
        name: 'Baja California Sur',
        country_id: 142,
    },
    {
        name: 'Campeche',
        country_id: 142,
    },
    {
        name: 'Chiapas',
        country_id: 142,
    },
    {
        name: 'Chihuahua',
        country_id: 142,
    },
    {
        name: 'Coahuila',
        country_id: 142,
    },
    {
        name: 'Colima',
        country_id: 142,
    },
    {
        name: 'Distrito Federal',
        country_id: 142,
    },
    {
        name: 'Durango',
        country_id: 142,
    },
    {
        name: 'Estado de Mexico',
        country_id: 142,
    },
    {
        name: 'Guanajuato',
        country_id: 142,
    },
    {
        name: 'Guerrero',
        country_id: 142,
    },
    {
        name: 'Hidalgo',
        country_id: 142,
    },
    {
        name: 'Jalisco',
        country_id: 142,
    },
    {
        name: 'Mexico',
        country_id: 142,
    },
    {
        name: 'Michoacan',
        country_id: 142,
    },
    {
        name: 'Morelos',
        country_id: 142,
    },
    {
        name: 'Nayarit',
        country_id: 142,
    },
    {
        name: 'Nuevo Leon',
        country_id: 142,
    },
    {
        name: 'Oaxaca',
        country_id: 142,
    },
    {
        name: 'Puebla',
        country_id: 142,
    },
    {
        name: 'Queretaro',
        country_id: 142,
    },
    {
        name: 'Quintana Roo',
        country_id: 142,
    },
    {
        name: 'San Luis Potosi',
        country_id: 142,
    },
    {
        name: 'Sinaloa',
        country_id: 142,
    },
    {
        name: 'Sonora',
        country_id: 142,
    },
    {
        name: 'Tabasco',
        country_id: 142,
    },
    {
        name: 'Tamaulipas',
        country_id: 142,
    },
    {
        name: 'Tlaxcala',
        country_id: 142,
    },
    {
        name: 'Veracruz',
        country_id: 142,
    },
    {
        name: 'Yucatan',
        country_id: 142,
    },
    {
        name: 'Zacatecas',
        country_id: 142,
    },
    {
        name: 'Chuuk',
        country_id: 143,
    },
    {
        name: 'Kusaie',
        country_id: 143,
    },
    {
        name: 'Pohnpei',
        country_id: 143,
    },
    {
        name: 'Yap',
        country_id: 143,
    },
    {
        name: 'Balti',
        country_id: 144,
    },
    {
        name: 'Cahul',
        country_id: 144,
    },
    {
        name: 'Chisinau',
        country_id: 144,
    },
    {
        name: 'Chisinau Oras',
        country_id: 144,
    },
    {
        name: 'Edinet',
        country_id: 144,
    },
    {
        name: 'Gagauzia',
        country_id: 144,
    },
    {
        name: 'Lapusna',
        country_id: 144,
    },
    {
        name: 'Orhei',
        country_id: 144,
    },
    {
        name: 'Soroca',
        country_id: 144,
    },
    {
        name: 'Taraclia',
        country_id: 144,
    },
    {
        name: 'Tighina',
        country_id: 144,
    },
    {
        name: 'Transnistria',
        country_id: 144,
    },
    {
        name: 'Ungheni',
        country_id: 144,
    },
    {
        name: 'Fontvieille',
        country_id: 145,
    },
    {
        name: 'La Condamine',
        country_id: 145,
    },
    {
        name: 'Monaco-Ville',
        country_id: 145,
    },
    {
        name: 'Monte Carlo',
        country_id: 145,
    },
    {
        name: 'Arhangaj',
        country_id: 146,
    },
    {
        name: 'Bajan-Olgij',
        country_id: 146,
    },
    {
        name: 'Bajanhongor',
        country_id: 146,
    },
    {
        name: 'Bulgan',
        country_id: 146,
    },
    {
        name: 'Darhan-Uul',
        country_id: 146,
    },
    {
        name: 'Dornod',
        country_id: 146,
    },
    {
        name: 'Dornogovi',
        country_id: 146,
    },
    {
        name: 'Dundgovi',
        country_id: 146,
    },
    {
        name: 'Govi-Altaj',
        country_id: 146,
    },
    {
        name: 'Govisumber',
        country_id: 146,
    },
    {
        name: 'Hentij',
        country_id: 146,
    },
    {
        name: 'Hovd',
        country_id: 146,
    },
    {
        name: 'Hovsgol',
        country_id: 146,
    },
    {
        name: 'Omnogovi',
        country_id: 146,
    },
    {
        name: 'Orhon',
        country_id: 146,
    },
    {
        name: 'Ovorhangaj',
        country_id: 146,
    },
    {
        name: 'Selenge',
        country_id: 146,
    },
    {
        name: 'Suhbaatar',
        country_id: 146,
    },
    {
        name: 'Tov',
        country_id: 146,
    },
    {
        name: 'Ulaanbaatar',
        country_id: 146,
    },
    {
        name: 'Uvs',
        country_id: 146,
    },
    {
        name: 'Zavhan',
        country_id: 146,
    },
    {
        name: 'Montserrat',
        country_id: 147,
    },
    {
        name: 'Agadir',
        country_id: 148,
    },
    {
        name: 'Casablanca',
        country_id: 148,
    },
    {
        name: 'Chaouia-Ouardigha',
        country_id: 148,
    },
    {
        name: 'Doukkala-Abda',
        country_id: 148,
    },
    {
        name: 'Fes-Boulemane',
        country_id: 148,
    },
    {
        name: 'Gharb-Chrarda-Beni Hssen',
        country_id: 148,
    },
    {
        name: 'Guelmim',
        country_id: 148,
    },
    {
        name: 'Kenitra',
        country_id: 148,
    },
    {
        name: 'Marrakech-Tensift-Al Haouz',
        country_id: 148,
    },
    {
        name: 'Meknes-Tafilalet',
        country_id: 148,
    },
    {
        name: 'Oriental',
        country_id: 148,
    },
    {
        name: 'Oujda',
        country_id: 148,
    },
    {
        name: 'Province de Tanger',
        country_id: 148,
    },
    {
        name: 'Rabat-Sale-Zammour-Zaer',
        country_id: 148,
    },
    {
        name: 'Sala Al Jadida',
        country_id: 148,
    },
    {
        name: 'Settat',
        country_id: 148,
    },
    {
        name: 'Souss Massa-Draa',
        country_id: 148,
    },
    {
        name: 'Tadla-Azilal',
        country_id: 148,
    },
    {
        name: 'Tangier-Tetouan',
        country_id: 148,
    },
    {
        name: 'Taza-Al Hoceima-Taounate',
        country_id: 148,
    },
    {
        name: 'Wilaya de Casablanca',
        country_id: 148,
    },
    {
        name: 'Wilaya de Rabat-Sale',
        country_id: 148,
    },
    {
        name: 'Cabo Delgado',
        country_id: 149,
    },
    {
        name: 'Gaza',
        country_id: 149,
    },
    {
        name: 'Inhambane',
        country_id: 149,
    },
    {
        name: 'Manica',
        country_id: 149,
    },
    {
        name: 'Maputo',
        country_id: 149,
    },
    {
        name: 'Maputo Provincia',
        country_id: 149,
    },
    {
        name: 'Nampula',
        country_id: 149,
    },
    {
        name: 'Niassa',
        country_id: 149,
    },
    {
        name: 'Sofala',
        country_id: 149,
    },
    {
        name: 'Tete',
        country_id: 149,
    },
    {
        name: 'Zambezia',
        country_id: 149,
    },
    {
        name: 'Ayeyarwady',
        country_id: 150,
    },
    {
        name: 'Bago',
        country_id: 150,
    },
    {
        name: 'Chin',
        country_id: 150,
    },
    {
        name: 'Kachin',
        country_id: 150,
    },
    {
        name: 'Kayah',
        country_id: 150,
    },
    {
        name: 'Kayin',
        country_id: 150,
    },
    {
        name: 'Magway',
        country_id: 150,
    },
    {
        name: 'Mandalay',
        country_id: 150,
    },
    {
        name: 'Mon',
        country_id: 150,
    },
    {
        name: 'Nay Pyi Taw',
        country_id: 150,
    },
    {
        name: 'Rakhine',
        country_id: 150,
    },
    {
        name: 'Sagaing',
        country_id: 150,
    },
    {
        name: 'Shan',
        country_id: 150,
    },
    {
        name: 'Tanintharyi',
        country_id: 150,
    },
    {
        name: 'Yangon',
        country_id: 150,
    },
    {
        name: 'Caprivi',
        country_id: 151,
    },
    {
        name: 'Erongo',
        country_id: 151,
    },
    {
        name: 'Hardap',
        country_id: 151,
    },
    {
        name: 'Karas',
        country_id: 151,
    },
    {
        name: 'Kavango',
        country_id: 151,
    },
    {
        name: 'Khomas',
        country_id: 151,
    },
    {
        name: 'Kunene',
        country_id: 151,
    },
    {
        name: 'Ohangwena',
        country_id: 151,
    },
    {
        name: 'Omaheke',
        country_id: 151,
    },
    {
        name: 'Omusati',
        country_id: 151,
    },
    {
        name: 'Oshana',
        country_id: 151,
    },
    {
        name: 'Oshikoto',
        country_id: 151,
    },
    {
        name: 'Otjozondjupa',
        country_id: 151,
    },
    {
        name: 'Yaren',
        country_id: 152,
    },
    {
        name: 'Bagmati',
        country_id: 153,
    },
    {
        name: 'Bheri',
        country_id: 153,
    },
    {
        name: 'Dhawalagiri',
        country_id: 153,
    },
    {
        name: 'Gandaki',
        country_id: 153,
    },
    {
        name: 'Janakpur',
        country_id: 153,
    },
    {
        name: 'Karnali',
        country_id: 153,
    },
    {
        name: 'Koshi',
        country_id: 153,
    },
    {
        name: 'Lumbini',
        country_id: 153,
    },
    {
        name: 'Mahakali',
        country_id: 153,
    },
    {
        name: 'Mechi',
        country_id: 153,
    },
    {
        name: 'Narayani',
        country_id: 153,
    },
    {
        name: 'Rapti',
        country_id: 153,
    },
    {
        name: 'Sagarmatha',
        country_id: 153,
    },
    {
        name: 'Seti',
        country_id: 153,
    },
    {
        name: 'Bonaire',
        country_id: 154,
    },
    {
        name: 'Curacao',
        country_id: 154,
    },
    {
        name: 'Saba',
        country_id: 154,
    },
    {
        name: 'Sint Eustatius',
        country_id: 154,
    },
    {
        name: 'Sint Maarten',
        country_id: 154,
    },
    {
        name: 'Amsterdam',
        country_id: 155,
    },
    {
        name: 'Benelux',
        country_id: 155,
    },
    {
        name: 'Drenthe',
        country_id: 155,
    },
    {
        name: 'Flevoland',
        country_id: 155,
    },
    {
        name: 'Friesland',
        country_id: 155,
    },
    {
        name: 'Gelderland',
        country_id: 155,
    },
    {
        name: 'Groningen',
        country_id: 155,
    },
    {
        name: 'Limburg',
        country_id: 155,
    },
    {
        name: 'Noord-Brabant',
        country_id: 155,
    },
    {
        name: 'Noord-Holland',
        country_id: 155,
    },
    {
        name: 'Overijssel',
        country_id: 155,
    },
    {
        name: 'South Holland',
        country_id: 155,
    },
    {
        name: 'Utrecht',
        country_id: 155,
    },
    {
        name: 'Zeeland',
        country_id: 155,
    },
    {
        name: 'Zuid-Holland',
        country_id: 155,
    },
    {
        name: 'Iles',
        country_id: 156,
    },
    {
        name: 'Nord',
        country_id: 156,
    },
    {
        name: 'Sud',
        country_id: 156,
    },
    {
        name: 'Area Outside Region',
        country_id: 157,
    },
    {
        name: 'Auckland',
        country_id: 157,
    },
    {
        name: 'Bay of Plenty',
        country_id: 157,
    },
    {
        name: 'Canterbury',
        country_id: 157,
    },
    {
        name: 'Christchurch',
        country_id: 157,
    },
    {
        name: 'Gisborne',
        country_id: 157,
    },
    {
        name: "Hawke's Bay",
        country_id: 157,
    },
    {
        name: 'Manawatu-Wanganui',
        country_id: 157,
    },
    {
        name: 'Marlborough',
        country_id: 157,
    },
    {
        name: 'Nelson',
        country_id: 157,
    },
    {
        name: 'Northland',
        country_id: 157,
    },
    {
        name: 'Otago',
        country_id: 157,
    },
    {
        name: 'Rodney',
        country_id: 157,
    },
    {
        name: 'Southland',
        country_id: 157,
    },
    {
        name: 'Taranaki',
        country_id: 157,
    },
    {
        name: 'Tasman',
        country_id: 157,
    },
    {
        name: 'Waikato',
        country_id: 157,
    },
    {
        name: 'Wellington',
        country_id: 157,
    },
    {
        name: 'West Coast',
        country_id: 157,
    },
    {
        name: 'Atlantico Norte',
        country_id: 158,
    },
    {
        name: 'Atlantico Sur',
        country_id: 158,
    },
    {
        name: 'Boaco',
        country_id: 158,
    },
    {
        name: 'Carazo',
        country_id: 158,
    },
    {
        name: 'Chinandega',
        country_id: 158,
    },
    {
        name: 'Chontales',
        country_id: 158,
    },
    {
        name: 'Esteli',
        country_id: 158,
    },
    {
        name: 'Granada',
        country_id: 158,
    },
    {
        name: 'Jinotega',
        country_id: 158,
    },
    {
        name: 'Leon',
        country_id: 158,
    },
    {
        name: 'Madriz',
        country_id: 158,
    },
    {
        name: 'Managua',
        country_id: 158,
    },
    {
        name: 'Masaya',
        country_id: 158,
    },
    {
        name: 'Matagalpa',
        country_id: 158,
    },
    {
        name: 'Nueva Segovia',
        country_id: 158,
    },
    {
        name: 'Rio San Juan',
        country_id: 158,
    },
    {
        name: 'Rivas',
        country_id: 158,
    },
    {
        name: 'Agadez',
        country_id: 159,
    },
    {
        name: 'Diffa',
        country_id: 159,
    },
    {
        name: 'Dosso',
        country_id: 159,
    },
    {
        name: 'Maradi',
        country_id: 159,
    },
    {
        name: 'Niamey',
        country_id: 159,
    },
    {
        name: 'Tahoua',
        country_id: 159,
    },
    {
        name: 'Tillabery',
        country_id: 159,
    },
    {
        name: 'Zinder',
        country_id: 159,
    },
    {
        name: 'Abia',
        country_id: 160,
    },
    {
        name: 'Abuja Federal Capital Territor',
        country_id: 160,
    },
    {
        name: 'Adamawa',
        country_id: 160,
    },
    {
        name: 'Akwa Ibom',
        country_id: 160,
    },
    {
        name: 'Anambra',
        country_id: 160,
    },
    {
        name: 'Bauchi',
        country_id: 160,
    },
    {
        name: 'Bayelsa',
        country_id: 160,
    },
    {
        name: 'Benue',
        country_id: 160,
    },
    {
        name: 'Borno',
        country_id: 160,
    },
    {
        name: 'Cross River',
        country_id: 160,
    },
    {
        name: 'Delta',
        country_id: 160,
    },
    {
        name: 'Ebonyi',
        country_id: 160,
    },
    {
        name: 'Edo',
        country_id: 160,
    },
    {
        name: 'Ekiti',
        country_id: 160,
    },
    {
        name: 'Enugu',
        country_id: 160,
    },
    {
        name: 'Gombe',
        country_id: 160,
    },
    {
        name: 'Imo',
        country_id: 160,
    },
    {
        name: 'Jigawa',
        country_id: 160,
    },
    {
        name: 'Kaduna',
        country_id: 160,
    },
    {
        name: 'Kano',
        country_id: 160,
    },
    {
        name: 'Katsina',
        country_id: 160,
    },
    {
        name: 'Kebbi',
        country_id: 160,
    },
    {
        name: 'Kogi',
        country_id: 160,
    },
    {
        name: 'Kwara',
        country_id: 160,
    },
    {
        name: 'Lagos',
        country_id: 160,
    },
    {
        name: 'Nassarawa',
        country_id: 160,
    },
    {
        name: 'Niger',
        country_id: 160,
    },
    {
        name: 'Ogun',
        country_id: 160,
    },
    {
        name: 'Ondo',
        country_id: 160,
    },
    {
        name: 'Osun',
        country_id: 160,
    },
    {
        name: 'Oyo',
        country_id: 160,
    },
    {
        name: 'Plateau',
        country_id: 160,
    },
    {
        name: 'Rivers',
        country_id: 160,
    },
    {
        name: 'Sokoto',
        country_id: 160,
    },
    {
        name: 'Taraba',
        country_id: 160,
    },
    {
        name: 'Yobe',
        country_id: 160,
    },
    {
        name: 'Zamfara',
        country_id: 160,
    },
    {
        name: 'Niue',
        country_id: 161,
    },
    {
        name: 'Norfolk Island',
        country_id: 162,
    },
    {
        name: 'Northern Islands',
        country_id: 163,
    },
    {
        name: 'Rota',
        country_id: 163,
    },
    {
        name: 'Saipan',
        country_id: 163,
    },
    {
        name: 'Tinian',
        country_id: 163,
    },
    {
        name: 'Akershus',
        country_id: 164,
    },
    {
        name: 'Aust Agder',
        country_id: 164,
    },
    {
        name: 'Bergen',
        country_id: 164,
    },
    {
        name: 'Buskerud',
        country_id: 164,
    },
    {
        name: 'Finnmark',
        country_id: 164,
    },
    {
        name: 'Hedmark',
        country_id: 164,
    },
    {
        name: 'Hordaland',
        country_id: 164,
    },
    {
        name: 'Moere og Romsdal',
        country_id: 164,
    },
    {
        name: 'Nord Trondelag',
        country_id: 164,
    },
    {
        name: 'Nordland',
        country_id: 164,
    },
    {
        name: 'Oestfold',
        country_id: 164,
    },
    {
        name: 'Oppland',
        country_id: 164,
    },
    {
        name: 'Oslo',
        country_id: 164,
    },
    {
        name: 'Rogaland',
        country_id: 164,
    },
    {
        name: 'Soer Troendelag',
        country_id: 164,
    },
    {
        name: 'Sogn og Fjordane',
        country_id: 164,
    },
    {
        name: 'Stavern',
        country_id: 164,
    },
    {
        name: 'Sykkylven',
        country_id: 164,
    },
    {
        name: 'Telemark',
        country_id: 164,
    },
    {
        name: 'Troms',
        country_id: 164,
    },
    {
        name: 'Vest Agder',
        country_id: 164,
    },
    {
        name: 'Vestfold',
        country_id: 164,
    },
    {
        name: '\u00c3\u0192\u00c2\u02dcstfold',
        country_id: 164,
    },
    {
        name: 'Al Buraimi',
        country_id: 165,
    },
    {
        name: 'Dhufar',
        country_id: 165,
    },
    {
        name: 'Masqat',
        country_id: 165,
    },
    {
        name: 'Musandam',
        country_id: 165,
    },
    {
        name: 'Rusayl',
        country_id: 165,
    },
    {
        name: 'Wadi Kabir',
        country_id: 165,
    },
    {
        name: 'ad-Dakhiliyah',
        country_id: 165,
    },
    {
        name: 'adh-Dhahirah',
        country_id: 165,
    },
    {
        name: 'al-Batinah',
        country_id: 165,
    },
    {
        name: 'ash-Sharqiyah',
        country_id: 165,
    },
    {
        name: 'Azad kashmir',
        country_id: 166,
    },
    {
        name: 'Balochistan',
        country_id: 166,
    },
    {
        name: 'Fata',
        country_id: 166,
    },
    {
        name: 'Gilgit\u2013baltistan',
        country_id: 166,
    },
    {
        name: 'Islamabad capital territory',
        country_id: 166,
    },
    {
        name: 'Khyber Pakhtunkhwa',
        country_id: 166,
    },
    {
        name: 'Punjab',
        country_id: 166,
    },
    {
        name: 'Sindh',
        country_id: 166,
    },
    {
        name: 'Aimeliik',
        country_id: 167,
    },
    {
        name: 'Airai',
        country_id: 167,
    },
    {
        name: 'Angaur',
        country_id: 167,
    },
    {
        name: 'Hatobohei',
        country_id: 167,
    },
    {
        name: 'Kayangel',
        country_id: 167,
    },
    {
        name: 'Koror',
        country_id: 167,
    },
    {
        name: 'Melekeok',
        country_id: 167,
    },
    {
        name: 'Ngaraard',
        country_id: 167,
    },
    {
        name: 'Ngardmau',
        country_id: 167,
    },
    {
        name: 'Ngaremlengui',
        country_id: 167,
    },
    {
        name: 'Ngatpang',
        country_id: 167,
    },
    {
        name: 'Ngchesar',
        country_id: 167,
    },
    {
        name: 'Ngerchelong',
        country_id: 167,
    },
    {
        name: 'Ngiwal',
        country_id: 167,
    },
    {
        name: 'Peleliu',
        country_id: 167,
    },
    {
        name: 'Sonsorol',
        country_id: 167,
    },
    {
        name: 'Ariha',
        country_id: 168,
    },
    {
        name: 'Bayt Lahm',
        country_id: 168,
    },
    {
        name: 'Bethlehem',
        country_id: 168,
    },
    {
        name: 'Dayr-al-Balah',
        country_id: 168,
    },
    {
        name: 'Ghazzah',
        country_id: 168,
    },
    {
        name: 'Ghazzah ash-Shamaliyah',
        country_id: 168,
    },
    {
        name: 'Janin',
        country_id: 168,
    },
    {
        name: 'Khan Yunis',
        country_id: 168,
    },
    {
        name: 'Nabulus',
        country_id: 168,
    },
    {
        name: 'Qalqilyah',
        country_id: 168,
    },
    {
        name: 'Rafah',
        country_id: 168,
    },
    {
        name: 'Ram Allah wal-Birah',
        country_id: 168,
    },
    {
        name: 'Salfit',
        country_id: 168,
    },
    {
        name: 'Tubas',
        country_id: 168,
    },
    {
        name: 'Tulkarm',
        country_id: 168,
    },
    {
        name: 'al-Khalil',
        country_id: 168,
    },
    {
        name: 'al-Quds',
        country_id: 168,
    },
    {
        name: 'Bocas del Toro',
        country_id: 169,
    },
    {
        name: 'Chiriqui',
        country_id: 169,
    },
    {
        name: 'Cocle',
        country_id: 169,
    },
    {
        name: 'Colon',
        country_id: 169,
    },
    {
        name: 'Darien',
        country_id: 169,
    },
    {
        name: 'Embera',
        country_id: 169,
    },
    {
        name: 'Herrera',
        country_id: 169,
    },
    {
        name: 'Kuna Yala',
        country_id: 169,
    },
    {
        name: 'Los Santos',
        country_id: 169,
    },
    {
        name: 'Ngobe Bugle',
        country_id: 169,
    },
    {
        name: 'Panama',
        country_id: 169,
    },
    {
        name: 'Veraguas',
        country_id: 169,
    },
    {
        name: 'East New Britain',
        country_id: 170,
    },
    {
        name: 'East Sepik',
        country_id: 170,
    },
    {
        name: 'Eastern Highlands',
        country_id: 170,
    },
    {
        name: 'Enga',
        country_id: 170,
    },
    {
        name: 'Fly River',
        country_id: 170,
    },
    {
        name: 'Gulf',
        country_id: 170,
    },
    {
        name: 'Madang',
        country_id: 170,
    },
    {
        name: 'Manus',
        country_id: 170,
    },
    {
        name: 'Milne Bay',
        country_id: 170,
    },
    {
        name: 'Morobe',
        country_id: 170,
    },
    {
        name: 'National Capital District',
        country_id: 170,
    },
    {
        name: 'New Ireland',
        country_id: 170,
    },
    {
        name: 'North Solomons',
        country_id: 170,
    },
    {
        name: 'Oro',
        country_id: 170,
    },
    {
        name: 'Sandaun',
        country_id: 170,
    },
    {
        name: 'Simbu',
        country_id: 170,
    },
    {
        name: 'Southern Highlands',
        country_id: 170,
    },
    {
        name: 'West New Britain',
        country_id: 170,
    },
    {
        name: 'Western Highlands',
        country_id: 170,
    },
    {
        name: 'Alto Paraguay',
        country_id: 171,
    },
    {
        name: 'Alto Parana',
        country_id: 171,
    },
    {
        name: 'Amambay',
        country_id: 171,
    },
    {
        name: 'Asuncion',
        country_id: 171,
    },
    {
        name: 'Boqueron',
        country_id: 171,
    },
    {
        name: 'Caaguazu',
        country_id: 171,
    },
    {
        name: 'Caazapa',
        country_id: 171,
    },
    {
        name: 'Canendiyu',
        country_id: 171,
    },
    {
        name: 'Central',
        country_id: 171,
    },
    {
        name: 'Concepcion',
        country_id: 171,
    },
    {
        name: 'Cordillera',
        country_id: 171,
    },
    {
        name: 'Guaira',
        country_id: 171,
    },
    {
        name: 'Itapua',
        country_id: 171,
    },
    {
        name: 'Misiones',
        country_id: 171,
    },
    {
        name: 'Neembucu',
        country_id: 171,
    },
    {
        name: 'Paraguari',
        country_id: 171,
    },
    {
        name: 'Presidente Hayes',
        country_id: 171,
    },
    {
        name: 'San Pedro',
        country_id: 171,
    },
    {
        name: 'Amazonas',
        country_id: 172,
    },
    {
        name: 'Ancash',
        country_id: 172,
    },
    {
        name: 'Apurimac',
        country_id: 172,
    },
    {
        name: 'Arequipa',
        country_id: 172,
    },
    {
        name: 'Ayacucho',
        country_id: 172,
    },
    {
        name: 'Cajamarca',
        country_id: 172,
    },
    {
        name: 'Cusco',
        country_id: 172,
    },
    {
        name: 'Huancavelica',
        country_id: 172,
    },
    {
        name: 'Huanuco',
        country_id: 172,
    },
    {
        name: 'Ica',
        country_id: 172,
    },
    {
        name: 'Junin',
        country_id: 172,
    },
    {
        name: 'La Libertad',
        country_id: 172,
    },
    {
        name: 'Lambayeque',
        country_id: 172,
    },
    {
        name: 'Lima y Callao',
        country_id: 172,
    },
    {
        name: 'Loreto',
        country_id: 172,
    },
    {
        name: 'Madre de Dios',
        country_id: 172,
    },
    {
        name: 'Moquegua',
        country_id: 172,
    },
    {
        name: 'Pasco',
        country_id: 172,
    },
    {
        name: 'Piura',
        country_id: 172,
    },
    {
        name: 'Puno',
        country_id: 172,
    },
    {
        name: 'San Martin',
        country_id: 172,
    },
    {
        name: 'Tacna',
        country_id: 172,
    },
    {
        name: 'Tumbes',
        country_id: 172,
    },
    {
        name: 'Ucayali',
        country_id: 172,
    },
    {
        name: 'Batangas',
        country_id: 173,
    },
    {
        name: 'Bicol',
        country_id: 173,
    },
    {
        name: 'Bulacan',
        country_id: 173,
    },
    {
        name: 'Cagayan',
        country_id: 173,
    },
    {
        name: 'Caraga',
        country_id: 173,
    },
    {
        name: 'Central Luzon',
        country_id: 173,
    },
    {
        name: 'Central Mindanao',
        country_id: 173,
    },
    {
        name: 'Central Visayas',
        country_id: 173,
    },
    {
        name: 'Cordillera',
        country_id: 173,
    },
    {
        name: 'Davao',
        country_id: 173,
    },
    {
        name: 'Eastern Visayas',
        country_id: 173,
    },
    {
        name: 'Greater Metropolitan Area',
        country_id: 173,
    },
    {
        name: 'Ilocos',
        country_id: 173,
    },
    {
        name: 'Laguna',
        country_id: 173,
    },
    {
        name: 'Luzon',
        country_id: 173,
    },
    {
        name: 'Mactan',
        country_id: 173,
    },
    {
        name: 'Metropolitan Manila Area',
        country_id: 173,
    },
    {
        name: 'Muslim Mindanao',
        country_id: 173,
    },
    {
        name: 'Northern Mindanao',
        country_id: 173,
    },
    {
        name: 'Southern Mindanao',
        country_id: 173,
    },
    {
        name: 'Southern Tagalog',
        country_id: 173,
    },
    {
        name: 'Western Mindanao',
        country_id: 173,
    },
    {
        name: 'Western Visayas',
        country_id: 173,
    },
    {
        name: 'Pitcairn Island',
        country_id: 174,
    },
    {
        name: 'Biale Blota',
        country_id: 175,
    },
    {
        name: 'Dobroszyce',
        country_id: 175,
    },
    {
        name: 'Dolnoslaskie',
        country_id: 175,
    },
    {
        name: 'Dziekanow Lesny',
        country_id: 175,
    },
    {
        name: 'Hopowo',
        country_id: 175,
    },
    {
        name: 'Kartuzy',
        country_id: 175,
    },
    {
        name: 'Koscian',
        country_id: 175,
    },
    {
        name: 'Krakow',
        country_id: 175,
    },
    {
        name: 'Kujawsko-Pomorskie',
        country_id: 175,
    },
    {
        name: 'Lodzkie',
        country_id: 175,
    },
    {
        name: 'Lubelskie',
        country_id: 175,
    },
    {
        name: 'Lubuskie',
        country_id: 175,
    },
    {
        name: 'Malomice',
        country_id: 175,
    },
    {
        name: 'Malopolskie',
        country_id: 175,
    },
    {
        name: 'Mazowieckie',
        country_id: 175,
    },
    {
        name: 'Mirkow',
        country_id: 175,
    },
    {
        name: 'Opolskie',
        country_id: 175,
    },
    {
        name: 'Ostrowiec',
        country_id: 175,
    },
    {
        name: 'Podkarpackie',
        country_id: 175,
    },
    {
        name: 'Podlaskie',
        country_id: 175,
    },
    {
        name: 'Polska',
        country_id: 175,
    },
    {
        name: 'Pomorskie',
        country_id: 175,
    },
    {
        name: 'Poznan',
        country_id: 175,
    },
    {
        name: 'Pruszkow',
        country_id: 175,
    },
    {
        name: 'Rymanowska',
        country_id: 175,
    },
    {
        name: 'Rzeszow',
        country_id: 175,
    },
    {
        name: 'Slaskie',
        country_id: 175,
    },
    {
        name: 'Stare Pole',
        country_id: 175,
    },
    {
        name: 'Swietokrzyskie',
        country_id: 175,
    },
    {
        name: 'Warminsko-Mazurskie',
        country_id: 175,
    },
    {
        name: 'Warsaw',
        country_id: 175,
    },
    {
        name: 'Wejherowo',
        country_id: 175,
    },
    {
        name: 'Wielkopolskie',
        country_id: 175,
    },
    {
        name: 'Wroclaw',
        country_id: 175,
    },
    {
        name: 'Zachodnio-Pomorskie',
        country_id: 175,
    },
    {
        name: 'Zukowo',
        country_id: 175,
    },
    {
        name: 'Abrantes',
        country_id: 176,
    },
    {
        name: 'Acores',
        country_id: 176,
    },
    {
        name: 'Alentejo',
        country_id: 176,
    },
    {
        name: 'Algarve',
        country_id: 176,
    },
    {
        name: 'Braga',
        country_id: 176,
    },
    {
        name: 'Centro',
        country_id: 176,
    },
    {
        name: 'Distrito de Leiria',
        country_id: 176,
    },
    {
        name: 'Distrito de Viana do Castelo',
        country_id: 176,
    },
    {
        name: 'Distrito de Vila Real',
        country_id: 176,
    },
    {
        name: 'Distrito do Porto',
        country_id: 176,
    },
    {
        name: 'Lisboa e Vale do Tejo',
        country_id: 176,
    },
    {
        name: 'Madeira',
        country_id: 176,
    },
    {
        name: 'Norte',
        country_id: 176,
    },
    {
        name: 'Paivas',
        country_id: 176,
    },
    {
        name: 'Arecibo',
        country_id: 177,
    },
    {
        name: 'Bayamon',
        country_id: 177,
    },
    {
        name: 'Carolina',
        country_id: 177,
    },
    {
        name: 'Florida',
        country_id: 177,
    },
    {
        name: 'Guayama',
        country_id: 177,
    },
    {
        name: 'Humacao',
        country_id: 177,
    },
    {
        name: 'Mayaguez-Aguadilla',
        country_id: 177,
    },
    {
        name: 'Ponce',
        country_id: 177,
    },
    {
        name: 'Salinas',
        country_id: 177,
    },
    {
        name: 'San Juan',
        country_id: 177,
    },
    {
        name: 'Doha',
        country_id: 178,
    },
    {
        name: 'Jarian-al-Batnah',
        country_id: 178,
    },
    {
        name: 'Umm Salal',
        country_id: 178,
    },
    {
        name: 'ad-Dawhah',
        country_id: 178,
    },
    {
        name: 'al-Ghuwayriyah',
        country_id: 178,
    },
    {
        name: 'al-Jumayliyah',
        country_id: 178,
    },
    {
        name: 'al-Khawr',
        country_id: 178,
    },
    {
        name: 'al-Wakrah',
        country_id: 178,
    },
    {
        name: 'ar-Rayyan',
        country_id: 178,
    },
    {
        name: 'ash-Shamal',
        country_id: 178,
    },
    {
        name: 'Saint-Benoit',
        country_id: 179,
    },
    {
        name: 'Saint-Denis',
        country_id: 179,
    },
    {
        name: 'Saint-Paul',
        country_id: 179,
    },
    {
        name: 'Saint-Pierre',
        country_id: 179,
    },
    {
        name: 'Alba',
        country_id: 180,
    },
    {
        name: 'Arad',
        country_id: 180,
    },
    {
        name: 'Arges',
        country_id: 180,
    },
    {
        name: 'Bacau',
        country_id: 180,
    },
    {
        name: 'Bihor',
        country_id: 180,
    },
    {
        name: 'Bistrita-Nasaud',
        country_id: 180,
    },
    {
        name: 'Botosani',
        country_id: 180,
    },
    {
        name: 'Braila',
        country_id: 180,
    },
    {
        name: 'Brasov',
        country_id: 180,
    },
    {
        name: 'Bucuresti',
        country_id: 180,
    },
    {
        name: 'Buzau',
        country_id: 180,
    },
    {
        name: 'Calarasi',
        country_id: 180,
    },
    {
        name: 'Caras-Severin',
        country_id: 180,
    },
    {
        name: 'Cluj',
        country_id: 180,
    },
    {
        name: 'Constanta',
        country_id: 180,
    },
    {
        name: 'Covasna',
        country_id: 180,
    },
    {
        name: 'Dambovita',
        country_id: 180,
    },
    {
        name: 'Dolj',
        country_id: 180,
    },
    {
        name: 'Galati',
        country_id: 180,
    },
    {
        name: 'Giurgiu',
        country_id: 180,
    },
    {
        name: 'Gorj',
        country_id: 180,
    },
    {
        name: 'Harghita',
        country_id: 180,
    },
    {
        name: 'Hunedoara',
        country_id: 180,
    },
    {
        name: 'Ialomita',
        country_id: 180,
    },
    {
        name: 'Iasi',
        country_id: 180,
    },
    {
        name: 'Ilfov',
        country_id: 180,
    },
    {
        name: 'Maramures',
        country_id: 180,
    },
    {
        name: 'Mehedinti',
        country_id: 180,
    },
    {
        name: 'Mures',
        country_id: 180,
    },
    {
        name: 'Neamt',
        country_id: 180,
    },
    {
        name: 'Olt',
        country_id: 180,
    },
    {
        name: 'Prahova',
        country_id: 180,
    },
    {
        name: 'Salaj',
        country_id: 180,
    },
    {
        name: 'Satu Mare',
        country_id: 180,
    },
    {
        name: 'Sibiu',
        country_id: 180,
    },
    {
        name: 'Sondelor',
        country_id: 180,
    },
    {
        name: 'Suceava',
        country_id: 180,
    },
    {
        name: 'Teleorman',
        country_id: 180,
    },
    {
        name: 'Timis',
        country_id: 180,
    },
    {
        name: 'Tulcea',
        country_id: 180,
    },
    {
        name: 'Valcea',
        country_id: 180,
    },
    {
        name: 'Vaslui',
        country_id: 180,
    },
    {
        name: 'Vrancea',
        country_id: 180,
    },
    {
        name: 'Adygeja',
        country_id: 181,
    },
    {
        name: 'Aga',
        country_id: 181,
    },
    {
        name: 'Alanija',
        country_id: 181,
    },
    {
        name: 'Altaj',
        country_id: 181,
    },
    {
        name: 'Amur',
        country_id: 181,
    },
    {
        name: 'Arhangelsk',
        country_id: 181,
    },
    {
        name: 'Astrahan',
        country_id: 181,
    },
    {
        name: 'Bashkortostan',
        country_id: 181,
    },
    {
        name: 'Belgorod',
        country_id: 181,
    },
    {
        name: 'Brjansk',
        country_id: 181,
    },
    {
        name: 'Burjatija',
        country_id: 181,
    },
    {
        name: 'Chechenija',
        country_id: 181,
    },
    {
        name: 'Cheljabinsk',
        country_id: 181,
    },
    {
        name: 'Chita',
        country_id: 181,
    },
    {
        name: 'Chukotka',
        country_id: 181,
    },
    {
        name: 'Chuvashija',
        country_id: 181,
    },
    {
        name: 'Dagestan',
        country_id: 181,
    },
    {
        name: 'Evenkija',
        country_id: 181,
    },
    {
        name: 'Gorno-Altaj',
        country_id: 181,
    },
    {
        name: 'Habarovsk',
        country_id: 181,
    },
    {
        name: 'Hakasija',
        country_id: 181,
    },
    {
        name: 'Hanty-Mansija',
        country_id: 181,
    },
    {
        name: 'Ingusetija',
        country_id: 181,
    },
    {
        name: 'Irkutsk',
        country_id: 181,
    },
    {
        name: 'Ivanovo',
        country_id: 181,
    },
    {
        name: 'Jamalo-Nenets',
        country_id: 181,
    },
    {
        name: 'Jaroslavl',
        country_id: 181,
    },
    {
        name: 'Jevrej',
        country_id: 181,
    },
    {
        name: 'Kabardino-Balkarija',
        country_id: 181,
    },
    {
        name: 'Kaliningrad',
        country_id: 181,
    },
    {
        name: 'Kalmykija',
        country_id: 181,
    },
    {
        name: 'Kaluga',
        country_id: 181,
    },
    {
        name: 'Kamchatka',
        country_id: 181,
    },
    {
        name: 'Karachaj-Cherkessija',
        country_id: 181,
    },
    {
        name: 'Karelija',
        country_id: 181,
    },
    {
        name: 'Kemerovo',
        country_id: 181,
    },
    {
        name: 'Khabarovskiy Kray',
        country_id: 181,
    },
    {
        name: 'Kirov',
        country_id: 181,
    },
    {
        name: 'Komi',
        country_id: 181,
    },
    {
        name: 'Komi-Permjakija',
        country_id: 181,
    },
    {
        name: 'Korjakija',
        country_id: 181,
    },
    {
        name: 'Kostroma',
        country_id: 181,
    },
    {
        name: 'Krasnodar',
        country_id: 181,
    },
    {
        name: 'Krasnojarsk',
        country_id: 181,
    },
    {
        name: 'Krasnoyarskiy Kray',
        country_id: 181,
    },
    {
        name: 'Kurgan',
        country_id: 181,
    },
    {
        name: 'Kursk',
        country_id: 181,
    },
    {
        name: 'Leningrad',
        country_id: 181,
    },
    {
        name: 'Lipeck',
        country_id: 181,
    },
    {
        name: 'Magadan',
        country_id: 181,
    },
    {
        name: 'Marij El',
        country_id: 181,
    },
    {
        name: 'Mordovija',
        country_id: 181,
    },
    {
        name: 'Moscow',
        country_id: 181,
    },
    {
        name: 'Moskovskaja Oblast',
        country_id: 181,
    },
    {
        name: 'Moskovskaya Oblast',
        country_id: 181,
    },
    {
        name: 'Moskva',
        country_id: 181,
    },
    {
        name: 'Murmansk',
        country_id: 181,
    },
    {
        name: 'Nenets',
        country_id: 181,
    },
    {
        name: 'Nizhnij Novgorod',
        country_id: 181,
    },
    {
        name: 'Novgorod',
        country_id: 181,
    },
    {
        name: 'Novokusnezk',
        country_id: 181,
    },
    {
        name: 'Novosibirsk',
        country_id: 181,
    },
    {
        name: 'Omsk',
        country_id: 181,
    },
    {
        name: 'Orenburg',
        country_id: 181,
    },
    {
        name: 'Orjol',
        country_id: 181,
    },
    {
        name: 'Penza',
        country_id: 181,
    },
    {
        name: 'Perm',
        country_id: 181,
    },
    {
        name: 'Primorje',
        country_id: 181,
    },
    {
        name: 'Pskov',
        country_id: 181,
    },
    {
        name: 'Pskovskaya Oblast',
        country_id: 181,
    },
    {
        name: 'Rjazan',
        country_id: 181,
    },
    {
        name: 'Rostov',
        country_id: 181,
    },
    {
        name: 'Saha',
        country_id: 181,
    },
    {
        name: 'Sahalin',
        country_id: 181,
    },
    {
        name: 'Samara',
        country_id: 181,
    },
    {
        name: 'Samarskaya',
        country_id: 181,
    },
    {
        name: 'Sankt-Peterburg',
        country_id: 181,
    },
    {
        name: 'Saratov',
        country_id: 181,
    },
    {
        name: 'Smolensk',
        country_id: 181,
    },
    {
        name: 'Stavropol',
        country_id: 181,
    },
    {
        name: 'Sverdlovsk',
        country_id: 181,
    },
    {
        name: 'Tajmyrija',
        country_id: 181,
    },
    {
        name: 'Tambov',
        country_id: 181,
    },
    {
        name: 'Tatarstan',
        country_id: 181,
    },
    {
        name: 'Tjumen',
        country_id: 181,
    },
    {
        name: 'Tomsk',
        country_id: 181,
    },
    {
        name: 'Tula',
        country_id: 181,
    },
    {
        name: 'Tver',
        country_id: 181,
    },
    {
        name: 'Tyva',
        country_id: 181,
    },
    {
        name: 'Udmurtija',
        country_id: 181,
    },
    {
        name: 'Uljanovsk',
        country_id: 181,
    },
    {
        name: 'Ulyanovskaya Oblast',
        country_id: 181,
    },
    {
        name: 'Ust-Orda',
        country_id: 181,
    },
    {
        name: 'Vladimir',
        country_id: 181,
    },
    {
        name: 'Volgograd',
        country_id: 181,
    },
    {
        name: 'Vologda',
        country_id: 181,
    },
    {
        name: 'Voronezh',
        country_id: 181,
    },
    {
        name: 'Butare',
        country_id: 182,
    },
    {
        name: 'Byumba',
        country_id: 182,
    },
    {
        name: 'Cyangugu',
        country_id: 182,
    },
    {
        name: 'Gikongoro',
        country_id: 182,
    },
    {
        name: 'Gisenyi',
        country_id: 182,
    },
    {
        name: 'Gitarama',
        country_id: 182,
    },
    {
        name: 'Kibungo',
        country_id: 182,
    },
    {
        name: 'Kibuye',
        country_id: 182,
    },
    {
        name: 'Kigali-ngali',
        country_id: 182,
    },
    {
        name: 'Ruhengeri',
        country_id: 182,
    },
    {
        name: 'Ascension',
        country_id: 183,
    },
    {
        name: 'Gough Island',
        country_id: 183,
    },
    {
        name: 'Saint Helena',
        country_id: 183,
    },
    {
        name: 'Tristan da Cunha',
        country_id: 183,
    },
    {
        name: 'Christ Church Nichola Town',
        country_id: 184,
    },
    {
        name: 'Saint Anne Sandy Point',
        country_id: 184,
    },
    {
        name: 'Saint George Basseterre',
        country_id: 184,
    },
    {
        name: 'Saint George Gingerland',
        country_id: 184,
    },
    {
        name: 'Saint James Windward',
        country_id: 184,
    },
    {
        name: 'Saint John Capesterre',
        country_id: 184,
    },
    {
        name: 'Saint John Figtree',
        country_id: 184,
    },
    {
        name: 'Saint Mary Cayon',
        country_id: 184,
    },
    {
        name: 'Saint Paul Capesterre',
        country_id: 184,
    },
    {
        name: 'Saint Paul Charlestown',
        country_id: 184,
    },
    {
        name: 'Saint Peter Basseterre',
        country_id: 184,
    },
    {
        name: 'Saint Thomas Lowland',
        country_id: 184,
    },
    {
        name: 'Saint Thomas Middle Island',
        country_id: 184,
    },
    {
        name: 'Trinity Palmetto Point',
        country_id: 184,
    },
    {
        name: 'Anse-la-Raye',
        country_id: 185,
    },
    {
        name: 'Canaries',
        country_id: 185,
    },
    {
        name: 'Castries',
        country_id: 185,
    },
    {
        name: 'Choiseul',
        country_id: 185,
    },
    {
        name: 'Dennery',
        country_id: 185,
    },
    {
        name: 'Gros Inlet',
        country_id: 185,
    },
    {
        name: 'Laborie',
        country_id: 185,
    },
    {
        name: 'Micoud',
        country_id: 185,
    },
    {
        name: 'Soufriere',
        country_id: 185,
    },
    {
        name: 'Vieux Fort',
        country_id: 185,
    },
    {
        name: 'Miquelon-Langlade',
        country_id: 186,
    },
    {
        name: 'Saint-Pierre',
        country_id: 186,
    },
    {
        name: 'Charlotte',
        country_id: 187,
    },
    {
        name: 'Grenadines',
        country_id: 187,
    },
    {
        name: 'Saint Andrew',
        country_id: 187,
    },
    {
        name: 'Saint David',
        country_id: 187,
    },
    {
        name: 'Saint George',
        country_id: 187,
    },
    {
        name: 'Saint Patrick',
        country_id: 187,
    },
    {
        name: "A'ana",
        country_id: 188,
    },
    {
        name: 'Aiga-i-le-Tai',
        country_id: 188,
    },
    {
        name: 'Atua',
        country_id: 188,
    },
    {
        name: "Fa'asaleleaga",
        country_id: 188,
    },
    {
        name: "Gaga'emauga",
        country_id: 188,
    },
    {
        name: 'Gagaifomauga',
        country_id: 188,
    },
    {
        name: 'Palauli',
        country_id: 188,
    },
    {
        name: "Satupa'itea",
        country_id: 188,
    },
    {
        name: 'Tuamasaga',
        country_id: 188,
    },
    {
        name: "Va'a-o-Fonoti",
        country_id: 188,
    },
    {
        name: 'Vaisigano',
        country_id: 188,
    },
    {
        name: 'Acquaviva',
        country_id: 189,
    },
    {
        name: 'Borgo Maggiore',
        country_id: 189,
    },
    {
        name: 'Chiesanuova',
        country_id: 189,
    },
    {
        name: 'Domagnano',
        country_id: 189,
    },
    {
        name: 'Faetano',
        country_id: 189,
    },
    {
        name: 'Fiorentino',
        country_id: 189,
    },
    {
        name: 'Montegiardino',
        country_id: 189,
    },
    {
        name: 'San Marino',
        country_id: 189,
    },
    {
        name: 'Serravalle',
        country_id: 189,
    },
    {
        name: 'Agua Grande',
        country_id: 190,
    },
    {
        name: 'Cantagalo',
        country_id: 190,
    },
    {
        name: 'Lemba',
        country_id: 190,
    },
    {
        name: 'Lobata',
        country_id: 190,
    },
    {
        name: 'Me-Zochi',
        country_id: 190,
    },
    {
        name: 'Pague',
        country_id: 190,
    },
    {
        name: 'Al Khobar',
        country_id: 191,
    },
    {
        name: 'Aseer',
        country_id: 191,
    },
    {
        name: 'Ash Sharqiyah',
        country_id: 191,
    },
    {
        name: 'Asir',
        country_id: 191,
    },
    {
        name: 'Central Province',
        country_id: 191,
    },
    {
        name: 'Eastern Province',
        country_id: 191,
    },
    {
        name: "Ha'il",
        country_id: 191,
    },
    {
        name: 'Jawf',
        country_id: 191,
    },
    {
        name: 'Jizan',
        country_id: 191,
    },
    {
        name: 'Makkah',
        country_id: 191,
    },
    {
        name: 'Najran',
        country_id: 191,
    },
    {
        name: 'Qasim',
        country_id: 191,
    },
    {
        name: 'Tabuk',
        country_id: 191,
    },
    {
        name: 'Western Province',
        country_id: 191,
    },
    {
        name: 'al-Bahah',
        country_id: 191,
    },
    {
        name: 'al-Hudud-ash-Shamaliyah',
        country_id: 191,
    },
    {
        name: 'al-Madinah',
        country_id: 191,
    },
    {
        name: 'ar-Riyad',
        country_id: 191,
    },
    {
        name: 'Dakar',
        country_id: 192,
    },
    {
        name: 'Diourbel',
        country_id: 192,
    },
    {
        name: 'Fatick',
        country_id: 192,
    },
    {
        name: 'Kaolack',
        country_id: 192,
    },
    {
        name: 'Kolda',
        country_id: 192,
    },
    {
        name: 'Louga',
        country_id: 192,
    },
    {
        name: 'Saint-Louis',
        country_id: 192,
    },
    {
        name: 'Tambacounda',
        country_id: 192,
    },
    {
        name: 'Thies',
        country_id: 192,
    },
    {
        name: 'Ziguinchor',
        country_id: 192,
    },
    {
        name: 'Central Serbia',
        country_id: 193,
    },
    {
        name: 'Kosovo and Metohija',
        country_id: 193,
    },
    {
        name: 'Vojvodina',
        country_id: 193,
    },
    {
        name: 'Anse Boileau',
        country_id: 194,
    },
    {
        name: 'Anse Royale',
        country_id: 194,
    },
    {
        name: 'Cascade',
        country_id: 194,
    },
    {
        name: 'Takamaka',
        country_id: 194,
    },
    {
        name: 'Victoria',
        country_id: 194,
    },
    {
        name: 'Eastern',
        country_id: 195,
    },
    {
        name: 'Northern',
        country_id: 195,
    },
    {
        name: 'Southern',
        country_id: 195,
    },
    {
        name: 'Western',
        country_id: 195,
    },
    {
        name: 'Singapore',
        country_id: 196,
    },
    {
        name: 'Banskobystricky',
        country_id: 197,
    },
    {
        name: 'Bratislavsky',
        country_id: 197,
    },
    {
        name: 'Kosicky',
        country_id: 197,
    },
    {
        name: 'Nitriansky',
        country_id: 197,
    },
    {
        name: 'Presovsky',
        country_id: 197,
    },
    {
        name: 'Trenciansky',
        country_id: 197,
    },
    {
        name: 'Trnavsky',
        country_id: 197,
    },
    {
        name: 'Zilinsky',
        country_id: 197,
    },
    {
        name: 'Benedikt',
        country_id: 198,
    },
    {
        name: 'Gorenjska',
        country_id: 198,
    },
    {
        name: 'Gorishka',
        country_id: 198,
    },
    {
        name: 'Jugovzhodna Slovenija',
        country_id: 198,
    },
    {
        name: 'Koroshka',
        country_id: 198,
    },
    {
        name: 'Notranjsko-krashka',
        country_id: 198,
    },
    {
        name: 'Obalno-krashka',
        country_id: 198,
    },
    {
        name: 'Obcina Domzale',
        country_id: 198,
    },
    {
        name: 'Obcina Vitanje',
        country_id: 198,
    },
    {
        name: 'Osrednjeslovenska',
        country_id: 198,
    },
    {
        name: 'Podravska',
        country_id: 198,
    },
    {
        name: 'Pomurska',
        country_id: 198,
    },
    {
        name: 'Savinjska',
        country_id: 198,
    },
    {
        name: 'Slovenian Littoral',
        country_id: 198,
    },
    {
        name: 'Spodnjeposavska',
        country_id: 198,
    },
    {
        name: 'Zasavska',
        country_id: 198,
    },
    {
        name: 'Pitcairn',
        country_id: 199,
    },
    {
        name: 'Central',
        country_id: 200,
    },
    {
        name: 'Choiseul',
        country_id: 200,
    },
    {
        name: 'Guadalcanal',
        country_id: 200,
    },
    {
        name: 'Isabel',
        country_id: 200,
    },
    {
        name: 'Makira and Ulawa',
        country_id: 200,
    },
    {
        name: 'Malaita',
        country_id: 200,
    },
    {
        name: 'Rennell and Bellona',
        country_id: 200,
    },
    {
        name: 'Temotu',
        country_id: 200,
    },
    {
        name: 'Western',
        country_id: 200,
    },
    {
        name: 'Awdal',
        country_id: 201,
    },
    {
        name: 'Bakol',
        country_id: 201,
    },
    {
        name: 'Banadir',
        country_id: 201,
    },
    {
        name: 'Bari',
        country_id: 201,
    },
    {
        name: 'Bay',
        country_id: 201,
    },
    {
        name: 'Galgudug',
        country_id: 201,
    },
    {
        name: 'Gedo',
        country_id: 201,
    },
    {
        name: 'Hiran',
        country_id: 201,
    },
    {
        name: 'Jubbada Hose',
        country_id: 201,
    },
    {
        name: 'Jubbadha Dexe',
        country_id: 201,
    },
    {
        name: 'Mudug',
        country_id: 201,
    },
    {
        name: 'Nugal',
        country_id: 201,
    },
    {
        name: 'Sanag',
        country_id: 201,
    },
    {
        name: 'Shabellaha Dhexe',
        country_id: 201,
    },
    {
        name: 'Shabellaha Hose',
        country_id: 201,
    },
    {
        name: 'Togdher',
        country_id: 201,
    },
    {
        name: 'Woqoyi Galbed',
        country_id: 201,
    },
    {
        name: 'Eastern Cape',
        country_id: 202,
    },
    {
        name: 'Free State',
        country_id: 202,
    },
    {
        name: 'Gauteng',
        country_id: 202,
    },
    {
        name: 'Kempton Park',
        country_id: 202,
    },
    {
        name: 'Kramerville',
        country_id: 202,
    },
    {
        name: 'KwaZulu Natal',
        country_id: 202,
    },
    {
        name: 'Limpopo',
        country_id: 202,
    },
    {
        name: 'Mpumalanga',
        country_id: 202,
    },
    {
        name: 'North West',
        country_id: 202,
    },
    {
        name: 'Northern Cape',
        country_id: 202,
    },
    {
        name: 'Parow',
        country_id: 202,
    },
    {
        name: 'Table View',
        country_id: 202,
    },
    {
        name: 'Umtentweni',
        country_id: 202,
    },
    {
        name: 'Western Cape',
        country_id: 202,
    },
    {
        name: 'South Georgia',
        country_id: 203,
    },
    {
        name: 'Central Equatoria',
        country_id: 204,
    },
    {
        name: 'A Coruna',
        country_id: 205,
    },
    {
        name: 'Alacant',
        country_id: 205,
    },
    {
        name: 'Alava',
        country_id: 205,
    },
    {
        name: 'Albacete',
        country_id: 205,
    },
    {
        name: 'Almeria',
        country_id: 205,
    },
    {
        name: 'Andalucia',
        country_id: 205,
    },
    {
        name: 'Asturias',
        country_id: 205,
    },
    {
        name: 'Avila',
        country_id: 205,
    },
    {
        name: 'Badajoz',
        country_id: 205,
    },
    {
        name: 'Balears',
        country_id: 205,
    },
    {
        name: 'Barcelona',
        country_id: 205,
    },
    {
        name: 'Bertamirans',
        country_id: 205,
    },
    {
        name: 'Biscay',
        country_id: 205,
    },
    {
        name: 'Burgos',
        country_id: 205,
    },
    {
        name: 'Caceres',
        country_id: 205,
    },
    {
        name: 'Cadiz',
        country_id: 205,
    },
    {
        name: 'Cantabria',
        country_id: 205,
    },
    {
        name: 'Castello',
        country_id: 205,
    },
    {
        name: 'Catalunya',
        country_id: 205,
    },
    {
        name: 'Ceuta',
        country_id: 205,
    },
    {
        name: 'Ciudad Real',
        country_id: 205,
    },
    {
        name: 'Comunidad Autonoma de Canarias',
        country_id: 205,
    },
    {
        name: 'Comunidad Autonoma de Cataluna',
        country_id: 205,
    },
    {
        name: 'Comunidad Autonoma de Galicia',
        country_id: 205,
    },
    {
        name: 'Comunidad Autonoma de las Isla',
        country_id: 205,
    },
    {
        name: 'Comunidad Autonoma del Princip',
        country_id: 205,
    },
    {
        name: 'Comunidad Valenciana',
        country_id: 205,
    },
    {
        name: 'Cordoba',
        country_id: 205,
    },
    {
        name: 'Cuenca',
        country_id: 205,
    },
    {
        name: 'Gipuzkoa',
        country_id: 205,
    },
    {
        name: 'Girona',
        country_id: 205,
    },
    {
        name: 'Granada',
        country_id: 205,
    },
    {
        name: 'Guadalajara',
        country_id: 205,
    },
    {
        name: 'Guipuzcoa',
        country_id: 205,
    },
    {
        name: 'Huelva',
        country_id: 205,
    },
    {
        name: 'Huesca',
        country_id: 205,
    },
    {
        name: 'Jaen',
        country_id: 205,
    },
    {
        name: 'La Rioja',
        country_id: 205,
    },
    {
        name: 'Las Palmas',
        country_id: 205,
    },
    {
        name: 'Leon',
        country_id: 205,
    },
    {
        name: 'Lerida',
        country_id: 205,
    },
    {
        name: 'Lleida',
        country_id: 205,
    },
    {
        name: 'Lugo',
        country_id: 205,
    },
    {
        name: 'Madrid',
        country_id: 205,
    },
    {
        name: 'Malaga',
        country_id: 205,
    },
    {
        name: 'Melilla',
        country_id: 205,
    },
    {
        name: 'Murcia',
        country_id: 205,
    },
    {
        name: 'Navarra',
        country_id: 205,
    },
    {
        name: 'Ourense',
        country_id: 205,
    },
    {
        name: 'Pais Vasco',
        country_id: 205,
    },
    {
        name: 'Palencia',
        country_id: 205,
    },
    {
        name: 'Pontevedra',
        country_id: 205,
    },
    {
        name: 'Salamanca',
        country_id: 205,
    },
    {
        name: 'Santa Cruz de Tenerife',
        country_id: 205,
    },
    {
        name: 'Segovia',
        country_id: 205,
    },
    {
        name: 'Sevilla',
        country_id: 205,
    },
    {
        name: 'Soria',
        country_id: 205,
    },
    {
        name: 'Tarragona',
        country_id: 205,
    },
    {
        name: 'Tenerife',
        country_id: 205,
    },
    {
        name: 'Teruel',
        country_id: 205,
    },
    {
        name: 'Toledo',
        country_id: 205,
    },
    {
        name: 'Valencia',
        country_id: 205,
    },
    {
        name: 'Valladolid',
        country_id: 205,
    },
    {
        name: 'Vizcaya',
        country_id: 205,
    },
    {
        name: 'Zamora',
        country_id: 205,
    },
    {
        name: 'Zaragoza',
        country_id: 205,
    },
    {
        name: 'Amparai',
        country_id: 206,
    },
    {
        name: 'Anuradhapuraya',
        country_id: 206,
    },
    {
        name: 'Badulla',
        country_id: 206,
    },
    {
        name: 'Boralesgamuwa',
        country_id: 206,
    },
    {
        name: 'Colombo',
        country_id: 206,
    },
    {
        name: 'Galla',
        country_id: 206,
    },
    {
        name: 'Gampaha',
        country_id: 206,
    },
    {
        name: 'Hambantota',
        country_id: 206,
    },
    {
        name: 'Kalatura',
        country_id: 206,
    },
    {
        name: 'Kegalla',
        country_id: 206,
    },
    {
        name: 'Kilinochchi',
        country_id: 206,
    },
    {
        name: 'Kurunegala',
        country_id: 206,
    },
    {
        name: 'Madakalpuwa',
        country_id: 206,
    },
    {
        name: 'Maha Nuwara',
        country_id: 206,
    },
    {
        name: 'Malwana',
        country_id: 206,
    },
    {
        name: 'Mannarama',
        country_id: 206,
    },
    {
        name: 'Matale',
        country_id: 206,
    },
    {
        name: 'Matara',
        country_id: 206,
    },
    {
        name: 'Monaragala',
        country_id: 206,
    },
    {
        name: 'Mullaitivu',
        country_id: 206,
    },
    {
        name: 'North Eastern Province',
        country_id: 206,
    },
    {
        name: 'North Western Province',
        country_id: 206,
    },
    {
        name: 'Nuwara Eliya',
        country_id: 206,
    },
    {
        name: 'Polonnaruwa',
        country_id: 206,
    },
    {
        name: 'Puttalama',
        country_id: 206,
    },
    {
        name: 'Ratnapuraya',
        country_id: 206,
    },
    {
        name: 'Southern Province',
        country_id: 206,
    },
    {
        name: 'Tirikunamalaya',
        country_id: 206,
    },
    {
        name: 'Tuscany',
        country_id: 206,
    },
    {
        name: 'Vavuniyawa',
        country_id: 206,
    },
    {
        name: 'Western Province',
        country_id: 206,
    },
    {
        name: 'Yapanaya',
        country_id: 206,
    },
    {
        name: 'kadawatha',
        country_id: 206,
    },
    {
        name: "A'ali-an-Nil",
        country_id: 207,
    },
    {
        name: 'Bahr-al-Jabal',
        country_id: 207,
    },
    {
        name: 'Central Equatoria',
        country_id: 207,
    },
    {
        name: 'Gharb Bahr-al-Ghazal',
        country_id: 207,
    },
    {
        name: 'Gharb Darfur',
        country_id: 207,
    },
    {
        name: 'Gharb Kurdufan',
        country_id: 207,
    },
    {
        name: "Gharb-al-Istiwa'iyah",
        country_id: 207,
    },
    {
        name: 'Janub Darfur',
        country_id: 207,
    },
    {
        name: 'Janub Kurdufan',
        country_id: 207,
    },
    {
        name: 'Junqali',
        country_id: 207,
    },
    {
        name: 'Kassala',
        country_id: 207,
    },
    {
        name: 'Nahr-an-Nil',
        country_id: 207,
    },
    {
        name: 'Shamal Bahr-al-Ghazal',
        country_id: 207,
    },
    {
        name: 'Shamal Darfur',
        country_id: 207,
    },
    {
        name: 'Shamal Kurdufan',
        country_id: 207,
    },
    {
        name: "Sharq-al-Istiwa'iyah",
        country_id: 207,
    },
    {
        name: 'Sinnar',
        country_id: 207,
    },
    {
        name: 'Warab',
        country_id: 207,
    },
    {
        name: 'Wilayat al Khartum',
        country_id: 207,
    },
    {
        name: 'al-Bahr-al-Ahmar',
        country_id: 207,
    },
    {
        name: 'al-Buhayrat',
        country_id: 207,
    },
    {
        name: 'al-Jazirah',
        country_id: 207,
    },
    {
        name: 'al-Khartum',
        country_id: 207,
    },
    {
        name: 'al-Qadarif',
        country_id: 207,
    },
    {
        name: 'al-Wahdah',
        country_id: 207,
    },
    {
        name: 'an-Nil-al-Abyad',
        country_id: 207,
    },
    {
        name: 'an-Nil-al-Azraq',
        country_id: 207,
    },
    {
        name: 'ash-Shamaliyah',
        country_id: 207,
    },
    {
        name: 'Brokopondo',
        country_id: 208,
    },
    {
        name: 'Commewijne',
        country_id: 208,
    },
    {
        name: 'Coronie',
        country_id: 208,
    },
    {
        name: 'Marowijne',
        country_id: 208,
    },
    {
        name: 'Nickerie',
        country_id: 208,
    },
    {
        name: 'Para',
        country_id: 208,
    },
    {
        name: 'Paramaribo',
        country_id: 208,
    },
    {
        name: 'Saramacca',
        country_id: 208,
    },
    {
        name: 'Wanica',
        country_id: 208,
    },
    {
        name: 'Svalbard',
        country_id: 209,
    },
    {
        name: 'Hhohho',
        country_id: 210,
    },
    {
        name: 'Lubombo',
        country_id: 210,
    },
    {
        name: 'Manzini',
        country_id: 210,
    },
    {
        name: 'Shiselweni',
        country_id: 210,
    },
    {
        name: 'Alvsborgs Lan',
        country_id: 211,
    },
    {
        name: 'Angermanland',
        country_id: 211,
    },
    {
        name: 'Blekinge',
        country_id: 211,
    },
    {
        name: 'Bohuslan',
        country_id: 211,
    },
    {
        name: 'Dalarna',
        country_id: 211,
    },
    {
        name: 'Gavleborg',
        country_id: 211,
    },
    {
        name: 'Gaza',
        country_id: 211,
    },
    {
        name: 'Gotland',
        country_id: 211,
    },
    {
        name: 'Halland',
        country_id: 211,
    },
    {
        name: 'Jamtland',
        country_id: 211,
    },
    {
        name: 'Jonkoping',
        country_id: 211,
    },
    {
        name: 'Kalmar',
        country_id: 211,
    },
    {
        name: 'Kristianstads',
        country_id: 211,
    },
    {
        name: 'Kronoberg',
        country_id: 211,
    },
    {
        name: 'Norrbotten',
        country_id: 211,
    },
    {
        name: 'Orebro',
        country_id: 211,
    },
    {
        name: 'Ostergotland',
        country_id: 211,
    },
    {
        name: 'Saltsjo-Boo',
        country_id: 211,
    },
    {
        name: 'Skane',
        country_id: 211,
    },
    {
        name: 'Smaland',
        country_id: 211,
    },
    {
        name: 'Sodermanland',
        country_id: 211,
    },
    {
        name: 'Stockholm',
        country_id: 211,
    },
    {
        name: 'Uppsala',
        country_id: 211,
    },
    {
        name: 'Varmland',
        country_id: 211,
    },
    {
        name: 'Vasterbotten',
        country_id: 211,
    },
    {
        name: 'Vastergotland',
        country_id: 211,
    },
    {
        name: 'Vasternorrland',
        country_id: 211,
    },
    {
        name: 'Vastmanland',
        country_id: 211,
    },
    {
        name: 'Vastra Gotaland',
        country_id: 211,
    },
    {
        name: 'Aargau',
        country_id: 212,
    },
    {
        name: 'Appenzell Inner-Rhoden',
        country_id: 212,
    },
    {
        name: 'Appenzell-Ausser Rhoden',
        country_id: 212,
    },
    {
        name: 'Basel-Landschaft',
        country_id: 212,
    },
    {
        name: 'Basel-Stadt',
        country_id: 212,
    },
    {
        name: 'Bern',
        country_id: 212,
    },
    {
        name: 'Canton Ticino',
        country_id: 212,
    },
    {
        name: 'Fribourg',
        country_id: 212,
    },
    {
        name: 'Geneve',
        country_id: 212,
    },
    {
        name: 'Glarus',
        country_id: 212,
    },
    {
        name: 'Graubunden',
        country_id: 212,
    },
    {
        name: 'Heerbrugg',
        country_id: 212,
    },
    {
        name: 'Jura',
        country_id: 212,
    },
    {
        name: 'Kanton Aargau',
        country_id: 212,
    },
    {
        name: 'Luzern',
        country_id: 212,
    },
    {
        name: 'Morbio Inferiore',
        country_id: 212,
    },
    {
        name: 'Muhen',
        country_id: 212,
    },
    {
        name: 'Neuchatel',
        country_id: 212,
    },
    {
        name: 'Nidwalden',
        country_id: 212,
    },
    {
        name: 'Obwalden',
        country_id: 212,
    },
    {
        name: 'Sankt Gallen',
        country_id: 212,
    },
    {
        name: 'Schaffhausen',
        country_id: 212,
    },
    {
        name: 'Schwyz',
        country_id: 212,
    },
    {
        name: 'Solothurn',
        country_id: 212,
    },
    {
        name: 'Thurgau',
        country_id: 212,
    },
    {
        name: 'Ticino',
        country_id: 212,
    },
    {
        name: 'Uri',
        country_id: 212,
    },
    {
        name: 'Valais',
        country_id: 212,
    },
    {
        name: 'Vaud',
        country_id: 212,
    },
    {
        name: 'Vauffelin',
        country_id: 212,
    },
    {
        name: 'Zug',
        country_id: 212,
    },
    {
        name: 'Zurich',
        country_id: 212,
    },
    {
        name: 'Aleppo',
        country_id: 213,
    },
    {
        name: "Dar'a",
        country_id: 213,
    },
    {
        name: 'Dayr-az-Zawr',
        country_id: 213,
    },
    {
        name: 'Dimashq',
        country_id: 213,
    },
    {
        name: 'Halab',
        country_id: 213,
    },
    {
        name: 'Hamah',
        country_id: 213,
    },
    {
        name: 'Hims',
        country_id: 213,
    },
    {
        name: 'Idlib',
        country_id: 213,
    },
    {
        name: 'Madinat Dimashq',
        country_id: 213,
    },
    {
        name: 'Tartus',
        country_id: 213,
    },
    {
        name: 'al-Hasakah',
        country_id: 213,
    },
    {
        name: 'al-Ladhiqiyah',
        country_id: 213,
    },
    {
        name: 'al-Qunaytirah',
        country_id: 213,
    },
    {
        name: 'ar-Raqqah',
        country_id: 213,
    },
    {
        name: 'as-Suwayda',
        country_id: 213,
    },
    {
        name: 'Changhwa',
        country_id: 214,
    },
    {
        name: 'Chiayi Hsien',
        country_id: 214,
    },
    {
        name: 'Chiayi Shih',
        country_id: 214,
    },
    {
        name: 'Eastern Taipei',
        country_id: 214,
    },
    {
        name: 'Hsinchu Hsien',
        country_id: 214,
    },
    {
        name: 'Hsinchu Shih',
        country_id: 214,
    },
    {
        name: 'Hualien',
        country_id: 214,
    },
    {
        name: 'Ilan',
        country_id: 214,
    },
    {
        name: 'Kaohsiung Hsien',
        country_id: 214,
    },
    {
        name: 'Kaohsiung Shih',
        country_id: 214,
    },
    {
        name: 'Keelung Shih',
        country_id: 214,
    },
    {
        name: 'Kinmen',
        country_id: 214,
    },
    {
        name: 'Miaoli',
        country_id: 214,
    },
    {
        name: 'Nantou',
        country_id: 214,
    },
    {
        name: 'Northern Taiwan',
        country_id: 214,
    },
    {
        name: 'Penghu',
        country_id: 214,
    },
    {
        name: 'Pingtung',
        country_id: 214,
    },
    {
        name: 'Taichung',
        country_id: 214,
    },
    {
        name: 'Taichung Hsien',
        country_id: 214,
    },
    {
        name: 'Taichung Shih',
        country_id: 214,
    },
    {
        name: 'Tainan Hsien',
        country_id: 214,
    },
    {
        name: 'Tainan Shih',
        country_id: 214,
    },
    {
        name: 'Taipei Hsien',
        country_id: 214,
    },
    {
        name: 'Taipei Shih / Taipei Hsien',
        country_id: 214,
    },
    {
        name: 'Taitung',
        country_id: 214,
    },
    {
        name: 'Taoyuan',
        country_id: 214,
    },
    {
        name: 'Yilan',
        country_id: 214,
    },
    {
        name: 'Yun-Lin Hsien',
        country_id: 214,
    },
    {
        name: 'Yunlin',
        country_id: 214,
    },
    {
        name: 'Dushanbe',
        country_id: 215,
    },
    {
        name: 'Gorno-Badakhshan',
        country_id: 215,
    },
    {
        name: 'Karotegin',
        country_id: 215,
    },
    {
        name: 'Khatlon',
        country_id: 215,
    },
    {
        name: 'Sughd',
        country_id: 215,
    },
    {
        name: 'Arusha',
        country_id: 216,
    },
    {
        name: 'Dar es Salaam',
        country_id: 216,
    },
    {
        name: 'Dodoma',
        country_id: 216,
    },
    {
        name: 'Iringa',
        country_id: 216,
    },
    {
        name: 'Kagera',
        country_id: 216,
    },
    {
        name: 'Kigoma',
        country_id: 216,
    },
    {
        name: 'Kilimanjaro',
        country_id: 216,
    },
    {
        name: 'Lindi',
        country_id: 216,
    },
    {
        name: 'Mara',
        country_id: 216,
    },
    {
        name: 'Mbeya',
        country_id: 216,
    },
    {
        name: 'Morogoro',
        country_id: 216,
    },
    {
        name: 'Mtwara',
        country_id: 216,
    },
    {
        name: 'Mwanza',
        country_id: 216,
    },
    {
        name: 'Pwani',
        country_id: 216,
    },
    {
        name: 'Rukwa',
        country_id: 216,
    },
    {
        name: 'Ruvuma',
        country_id: 216,
    },
    {
        name: 'Shinyanga',
        country_id: 216,
    },
    {
        name: 'Singida',
        country_id: 216,
    },
    {
        name: 'Tabora',
        country_id: 216,
    },
    {
        name: 'Tanga',
        country_id: 216,
    },
    {
        name: 'Zanzibar and Pemba',
        country_id: 216,
    },
    {
        name: 'Amnat Charoen',
        country_id: 217,
    },
    {
        name: 'Ang Thong',
        country_id: 217,
    },
    {
        name: 'Bangkok',
        country_id: 217,
    },
    {
        name: 'Buri Ram',
        country_id: 217,
    },
    {
        name: 'Chachoengsao',
        country_id: 217,
    },
    {
        name: 'Chai Nat',
        country_id: 217,
    },
    {
        name: 'Chaiyaphum',
        country_id: 217,
    },
    {
        name: 'Changwat Chaiyaphum',
        country_id: 217,
    },
    {
        name: 'Chanthaburi',
        country_id: 217,
    },
    {
        name: 'Chiang Mai',
        country_id: 217,
    },
    {
        name: 'Chiang Rai',
        country_id: 217,
    },
    {
        name: 'Chon Buri',
        country_id: 217,
    },
    {
        name: 'Chumphon',
        country_id: 217,
    },
    {
        name: 'Kalasin',
        country_id: 217,
    },
    {
        name: 'Kamphaeng Phet',
        country_id: 217,
    },
    {
        name: 'Kanchanaburi',
        country_id: 217,
    },
    {
        name: 'Khon Kaen',
        country_id: 217,
    },
    {
        name: 'Krabi',
        country_id: 217,
    },
    {
        name: 'Krung Thep',
        country_id: 217,
    },
    {
        name: 'Lampang',
        country_id: 217,
    },
    {
        name: 'Lamphun',
        country_id: 217,
    },
    {
        name: 'Loei',
        country_id: 217,
    },
    {
        name: 'Lop Buri',
        country_id: 217,
    },
    {
        name: 'Mae Hong Son',
        country_id: 217,
    },
    {
        name: 'Maha Sarakham',
        country_id: 217,
    },
    {
        name: 'Mukdahan',
        country_id: 217,
    },
    {
        name: 'Nakhon Nayok',
        country_id: 217,
    },
    {
        name: 'Nakhon Pathom',
        country_id: 217,
    },
    {
        name: 'Nakhon Phanom',
        country_id: 217,
    },
    {
        name: 'Nakhon Ratchasima',
        country_id: 217,
    },
    {
        name: 'Nakhon Sawan',
        country_id: 217,
    },
    {
        name: 'Nakhon Si Thammarat',
        country_id: 217,
    },
    {
        name: 'Nan',
        country_id: 217,
    },
    {
        name: 'Narathiwat',
        country_id: 217,
    },
    {
        name: 'Nong Bua Lam Phu',
        country_id: 217,
    },
    {
        name: 'Nong Khai',
        country_id: 217,
    },
    {
        name: 'Nonthaburi',
        country_id: 217,
    },
    {
        name: 'Pathum Thani',
        country_id: 217,
    },
    {
        name: 'Pattani',
        country_id: 217,
    },
    {
        name: 'Phangnga',
        country_id: 217,
    },
    {
        name: 'Phatthalung',
        country_id: 217,
    },
    {
        name: 'Phayao',
        country_id: 217,
    },
    {
        name: 'Phetchabun',
        country_id: 217,
    },
    {
        name: 'Phetchaburi',
        country_id: 217,
    },
    {
        name: 'Phichit',
        country_id: 217,
    },
    {
        name: 'Phitsanulok',
        country_id: 217,
    },
    {
        name: 'Phra Nakhon Si Ayutthaya',
        country_id: 217,
    },
    {
        name: 'Phrae',
        country_id: 217,
    },
    {
        name: 'Phuket',
        country_id: 217,
    },
    {
        name: 'Prachin Buri',
        country_id: 217,
    },
    {
        name: 'Prachuap Khiri Khan',
        country_id: 217,
    },
    {
        name: 'Ranong',
        country_id: 217,
    },
    {
        name: 'Ratchaburi',
        country_id: 217,
    },
    {
        name: 'Rayong',
        country_id: 217,
    },
    {
        name: 'Roi Et',
        country_id: 217,
    },
    {
        name: 'Sa Kaeo',
        country_id: 217,
    },
    {
        name: 'Sakon Nakhon',
        country_id: 217,
    },
    {
        name: 'Samut Prakan',
        country_id: 217,
    },
    {
        name: 'Samut Sakhon',
        country_id: 217,
    },
    {
        name: 'Samut Songkhran',
        country_id: 217,
    },
    {
        name: 'Saraburi',
        country_id: 217,
    },
    {
        name: 'Satun',
        country_id: 217,
    },
    {
        name: 'Si Sa Ket',
        country_id: 217,
    },
    {
        name: 'Sing Buri',
        country_id: 217,
    },
    {
        name: 'Songkhla',
        country_id: 217,
    },
    {
        name: 'Sukhothai',
        country_id: 217,
    },
    {
        name: 'Suphan Buri',
        country_id: 217,
    },
    {
        name: 'Surat Thani',
        country_id: 217,
    },
    {
        name: 'Surin',
        country_id: 217,
    },
    {
        name: 'Tak',
        country_id: 217,
    },
    {
        name: 'Trang',
        country_id: 217,
    },
    {
        name: 'Trat',
        country_id: 217,
    },
    {
        name: 'Ubon Ratchathani',
        country_id: 217,
    },
    {
        name: 'Udon Thani',
        country_id: 217,
    },
    {
        name: 'Uthai Thani',
        country_id: 217,
    },
    {
        name: 'Uttaradit',
        country_id: 217,
    },
    {
        name: 'Yala',
        country_id: 217,
    },
    {
        name: 'Yasothon',
        country_id: 217,
    },
    {
        name: 'Centre',
        country_id: 218,
    },
    {
        name: 'Kara',
        country_id: 218,
    },
    {
        name: 'Maritime',
        country_id: 218,
    },
    {
        name: 'Plateaux',
        country_id: 218,
    },
    {
        name: 'Savanes',
        country_id: 218,
    },
    {
        name: 'Atafu',
        country_id: 219,
    },
    {
        name: 'Fakaofo',
        country_id: 219,
    },
    {
        name: 'Nukunonu',
        country_id: 219,
    },
    {
        name: 'Eua',
        country_id: 220,
    },
    {
        name: "Ha'apai",
        country_id: 220,
    },
    {
        name: 'Niuas',
        country_id: 220,
    },
    {
        name: 'Tongatapu',
        country_id: 220,
    },
    {
        name: "Vava'u",
        country_id: 220,
    },
    {
        name: 'Arima-Tunapuna-Piarco',
        country_id: 221,
    },
    {
        name: 'Caroni',
        country_id: 221,
    },
    {
        name: 'Chaguanas',
        country_id: 221,
    },
    {
        name: 'Couva-Tabaquite-Talparo',
        country_id: 221,
    },
    {
        name: 'Diego Martin',
        country_id: 221,
    },
    {
        name: 'Glencoe',
        country_id: 221,
    },
    {
        name: 'Penal Debe',
        country_id: 221,
    },
    {
        name: 'Point Fortin',
        country_id: 221,
    },
    {
        name: 'Port of Spain',
        country_id: 221,
    },
    {
        name: 'Princes Town',
        country_id: 221,
    },
    {
        name: 'Saint George',
        country_id: 221,
    },
    {
        name: 'San Fernando',
        country_id: 221,
    },
    {
        name: 'San Juan',
        country_id: 221,
    },
    {
        name: 'Sangre Grande',
        country_id: 221,
    },
    {
        name: 'Siparia',
        country_id: 221,
    },
    {
        name: 'Tobago',
        country_id: 221,
    },
    {
        name: 'Aryanah',
        country_id: 222,
    },
    {
        name: 'Bajah',
        country_id: 222,
    },
    {
        name: "Bin 'Arus",
        country_id: 222,
    },
    {
        name: 'Binzart',
        country_id: 222,
    },
    {
        name: 'Gouvernorat de Ariana',
        country_id: 222,
    },
    {
        name: 'Gouvernorat de Nabeul',
        country_id: 222,
    },
    {
        name: 'Gouvernorat de Sousse',
        country_id: 222,
    },
    {
        name: 'Hammamet Yasmine',
        country_id: 222,
    },
    {
        name: 'Jundubah',
        country_id: 222,
    },
    {
        name: 'Madaniyin',
        country_id: 222,
    },
    {
        name: 'Manubah',
        country_id: 222,
    },
    {
        name: 'Monastir',
        country_id: 222,
    },
    {
        name: 'Nabul',
        country_id: 222,
    },
    {
        name: 'Qabis',
        country_id: 222,
    },
    {
        name: 'Qafsah',
        country_id: 222,
    },
    {
        name: 'Qibili',
        country_id: 222,
    },
    {
        name: 'Safaqis',
        country_id: 222,
    },
    {
        name: 'Sfax',
        country_id: 222,
    },
    {
        name: 'Sidi Bu Zayd',
        country_id: 222,
    },
    {
        name: 'Silyanah',
        country_id: 222,
    },
    {
        name: 'Susah',
        country_id: 222,
    },
    {
        name: 'Tatawin',
        country_id: 222,
    },
    {
        name: 'Tawzar',
        country_id: 222,
    },
    {
        name: 'Tunis',
        country_id: 222,
    },
    {
        name: 'Zaghwan',
        country_id: 222,
    },
    {
        name: 'al-Kaf',
        country_id: 222,
    },
    {
        name: 'al-Mahdiyah',
        country_id: 222,
    },
    {
        name: 'al-Munastir',
        country_id: 222,
    },
    {
        name: 'al-Qasrayn',
        country_id: 222,
    },
    {
        name: 'al-Qayrawan',
        country_id: 222,
    },
    {
        name: 'Adana',
        country_id: 223,
    },
    {
        name: 'Adiyaman',
        country_id: 223,
    },
    {
        name: 'Afyon',
        country_id: 223,
    },
    {
        name: 'Agri',
        country_id: 223,
    },
    {
        name: 'Aksaray',
        country_id: 223,
    },
    {
        name: 'Amasya',
        country_id: 223,
    },
    {
        name: 'Ankara',
        country_id: 223,
    },
    {
        name: 'Antalya',
        country_id: 223,
    },
    {
        name: 'Ardahan',
        country_id: 223,
    },
    {
        name: 'Artvin',
        country_id: 223,
    },
    {
        name: 'Aydin',
        country_id: 223,
    },
    {
        name: 'Balikesir',
        country_id: 223,
    },
    {
        name: 'Bartin',
        country_id: 223,
    },
    {
        name: 'Batman',
        country_id: 223,
    },
    {
        name: 'Bayburt',
        country_id: 223,
    },
    {
        name: 'Bilecik',
        country_id: 223,
    },
    {
        name: 'Bingol',
        country_id: 223,
    },
    {
        name: 'Bitlis',
        country_id: 223,
    },
    {
        name: 'Bolu',
        country_id: 223,
    },
    {
        name: 'Burdur',
        country_id: 223,
    },
    {
        name: 'Bursa',
        country_id: 223,
    },
    {
        name: 'Canakkale',
        country_id: 223,
    },
    {
        name: 'Cankiri',
        country_id: 223,
    },
    {
        name: 'Corum',
        country_id: 223,
    },
    {
        name: 'Denizli',
        country_id: 223,
    },
    {
        name: 'Diyarbakir',
        country_id: 223,
    },
    {
        name: 'Duzce',
        country_id: 223,
    },
    {
        name: 'Edirne',
        country_id: 223,
    },
    {
        name: 'Elazig',
        country_id: 223,
    },
    {
        name: 'Erzincan',
        country_id: 223,
    },
    {
        name: 'Erzurum',
        country_id: 223,
    },
    {
        name: 'Eskisehir',
        country_id: 223,
    },
    {
        name: 'Gaziantep',
        country_id: 223,
    },
    {
        name: 'Giresun',
        country_id: 223,
    },
    {
        name: 'Gumushane',
        country_id: 223,
    },
    {
        name: 'Hakkari',
        country_id: 223,
    },
    {
        name: 'Hatay',
        country_id: 223,
    },
    {
        name: 'Icel',
        country_id: 223,
    },
    {
        name: 'Igdir',
        country_id: 223,
    },
    {
        name: 'Isparta',
        country_id: 223,
    },
    {
        name: 'Istanbul',
        country_id: 223,
    },
    {
        name: 'Izmir',
        country_id: 223,
    },
    {
        name: 'Kahramanmaras',
        country_id: 223,
    },
    {
        name: 'Karabuk',
        country_id: 223,
    },
    {
        name: 'Karaman',
        country_id: 223,
    },
    {
        name: 'Kars',
        country_id: 223,
    },
    {
        name: 'Karsiyaka',
        country_id: 223,
    },
    {
        name: 'Kastamonu',
        country_id: 223,
    },
    {
        name: 'Kayseri',
        country_id: 223,
    },
    {
        name: 'Kilis',
        country_id: 223,
    },
    {
        name: 'Kirikkale',
        country_id: 223,
    },
    {
        name: 'Kirklareli',
        country_id: 223,
    },
    {
        name: 'Kirsehir',
        country_id: 223,
    },
    {
        name: 'Kocaeli',
        country_id: 223,
    },
    {
        name: 'Konya',
        country_id: 223,
    },
    {
        name: 'Kutahya',
        country_id: 223,
    },
    {
        name: 'Lefkosa',
        country_id: 223,
    },
    {
        name: 'Malatya',
        country_id: 223,
    },
    {
        name: 'Manisa',
        country_id: 223,
    },
    {
        name: 'Mardin',
        country_id: 223,
    },
    {
        name: 'Mugla',
        country_id: 223,
    },
    {
        name: 'Mus',
        country_id: 223,
    },
    {
        name: 'Nevsehir',
        country_id: 223,
    },
    {
        name: 'Nigde',
        country_id: 223,
    },
    {
        name: 'Ordu',
        country_id: 223,
    },
    {
        name: 'Osmaniye',
        country_id: 223,
    },
    {
        name: 'Rize',
        country_id: 223,
    },
    {
        name: 'Sakarya',
        country_id: 223,
    },
    {
        name: 'Samsun',
        country_id: 223,
    },
    {
        name: 'Sanliurfa',
        country_id: 223,
    },
    {
        name: 'Siirt',
        country_id: 223,
    },
    {
        name: 'Sinop',
        country_id: 223,
    },
    {
        name: 'Sirnak',
        country_id: 223,
    },
    {
        name: 'Sivas',
        country_id: 223,
    },
    {
        name: 'Tekirdag',
        country_id: 223,
    },
    {
        name: 'Tokat',
        country_id: 223,
    },
    {
        name: 'Trabzon',
        country_id: 223,
    },
    {
        name: 'Tunceli',
        country_id: 223,
    },
    {
        name: 'Usak',
        country_id: 223,
    },
    {
        name: 'Van',
        country_id: 223,
    },
    {
        name: 'Yalova',
        country_id: 223,
    },
    {
        name: 'Yozgat',
        country_id: 223,
    },
    {
        name: 'Zonguldak',
        country_id: 223,
    },
    {
        name: 'Ahal',
        country_id: 224,
    },
    {
        name: 'Asgabat',
        country_id: 224,
    },
    {
        name: 'Balkan',
        country_id: 224,
    },
    {
        name: 'Dasoguz',
        country_id: 224,
    },
    {
        name: 'Lebap',
        country_id: 224,
    },
    {
        name: 'Mari',
        country_id: 224,
    },
    {
        name: 'Grand Turk',
        country_id: 225,
    },
    {
        name: 'South Caicos and East Caicos',
        country_id: 225,
    },
    {
        name: 'Funafuti',
        country_id: 226,
    },
    {
        name: 'Nanumanga',
        country_id: 226,
    },
    {
        name: 'Nanumea',
        country_id: 226,
    },
    {
        name: 'Niutao',
        country_id: 226,
    },
    {
        name: 'Nui',
        country_id: 226,
    },
    {
        name: 'Nukufetau',
        country_id: 226,
    },
    {
        name: 'Nukulaelae',
        country_id: 226,
    },
    {
        name: 'Vaitupu',
        country_id: 226,
    },
    {
        name: 'Central',
        country_id: 227,
    },
    {
        name: 'Eastern',
        country_id: 227,
    },
    {
        name: 'Northern',
        country_id: 227,
    },
    {
        name: 'Western',
        country_id: 227,
    },
    {
        name: "Cherkas'ka",
        country_id: 228,
    },
    {
        name: "Chernihivs'ka",
        country_id: 228,
    },
    {
        name: "Chernivets'ka",
        country_id: 228,
    },
    {
        name: 'Crimea',
        country_id: 228,
    },
    {
        name: 'Dnipropetrovska',
        country_id: 228,
    },
    {
        name: "Donets'ka",
        country_id: 228,
    },
    {
        name: "Ivano-Frankivs'ka",
        country_id: 228,
    },
    {
        name: 'Kharkiv',
        country_id: 228,
    },
    {
        name: 'Kharkov',
        country_id: 228,
    },
    {
        name: 'Khersonska',
        country_id: 228,
    },
    {
        name: "Khmel'nyts'ka",
        country_id: 228,
    },
    {
        name: 'Kirovohrad',
        country_id: 228,
    },
    {
        name: 'Krym',
        country_id: 228,
    },
    {
        name: 'Kyyiv',
        country_id: 228,
    },
    {
        name: "Kyyivs'ka",
        country_id: 228,
    },
    {
        name: "L'vivs'ka",
        country_id: 228,
    },
    {
        name: "Luhans'ka",
        country_id: 228,
    },
    {
        name: "Mykolayivs'ka",
        country_id: 228,
    },
    {
        name: "Odes'ka",
        country_id: 228,
    },
    {
        name: 'Odessa',
        country_id: 228,
    },
    {
        name: "Poltavs'ka",
        country_id: 228,
    },
    {
        name: "Rivnens'ka",
        country_id: 228,
    },
    {
        name: "Sevastopol'",
        country_id: 228,
    },
    {
        name: "Sums'ka",
        country_id: 228,
    },
    {
        name: "Ternopil's'ka",
        country_id: 228,
    },
    {
        name: "Volyns'ka",
        country_id: 228,
    },
    {
        name: "Vynnyts'ka",
        country_id: 228,
    },
    {
        name: "Zakarpats'ka",
        country_id: 228,
    },
    {
        name: 'Zaporizhia',
        country_id: 228,
    },
    {
        name: "Zhytomyrs'ka",
        country_id: 228,
    },
    {
        name: 'Abu Zabi',
        country_id: 229,
    },
    {
        name: 'Ajman',
        country_id: 229,
    },
    {
        name: 'Dubai',
        country_id: 229,
    },
    {
        name: 'Ras al-Khaymah',
        country_id: 229,
    },
    {
        name: 'Sharjah',
        country_id: 229,
    },
    {
        name: 'Sharjha',
        country_id: 229,
    },
    {
        name: 'Umm al Qaywayn',
        country_id: 229,
    },
    {
        name: 'al-Fujayrah',
        country_id: 229,
    },
    {
        name: 'ash-Shariqah',
        country_id: 229,
    },
    {
        name: 'Aberdeen',
        country_id: 230,
    },
    {
        name: 'Aberdeenshire',
        country_id: 230,
    },
    {
        name: 'Argyll',
        country_id: 230,
    },
    {
        name: 'Armagh',
        country_id: 230,
    },
    {
        name: 'Bedfordshire',
        country_id: 230,
    },
    {
        name: 'Belfast',
        country_id: 230,
    },
    {
        name: 'Berkshire',
        country_id: 230,
    },
    {
        name: 'Birmingham',
        country_id: 230,
    },
    {
        name: 'Brechin',
        country_id: 230,
    },
    {
        name: 'Bridgnorth',
        country_id: 230,
    },
    {
        name: 'Bristol',
        country_id: 230,
    },
    {
        name: 'Buckinghamshire',
        country_id: 230,
    },
    {
        name: 'Cambridge',
        country_id: 230,
    },
    {
        name: 'Cambridgeshire',
        country_id: 230,
    },
    {
        name: 'Channel Islands',
        country_id: 230,
    },
    {
        name: 'Cheshire',
        country_id: 230,
    },
    {
        name: 'Cleveland',
        country_id: 230,
    },
    {
        name: 'Co Fermanagh',
        country_id: 230,
    },
    {
        name: 'Conwy',
        country_id: 230,
    },
    {
        name: 'Cornwall',
        country_id: 230,
    },
    {
        name: 'Coventry',
        country_id: 230,
    },
    {
        name: 'Craven Arms',
        country_id: 230,
    },
    {
        name: 'Cumbria',
        country_id: 230,
    },
    {
        name: 'Denbighshire',
        country_id: 230,
    },
    {
        name: 'Derby',
        country_id: 230,
    },
    {
        name: 'Derbyshire',
        country_id: 230,
    },
    {
        name: 'Devon',
        country_id: 230,
    },
    {
        name: 'Dial Code Dungannon',
        country_id: 230,
    },
    {
        name: 'Didcot',
        country_id: 230,
    },
    {
        name: 'Dorset',
        country_id: 230,
    },
    {
        name: 'Dunbartonshire',
        country_id: 230,
    },
    {
        name: 'Durham',
        country_id: 230,
    },
    {
        name: 'East Dunbartonshire',
        country_id: 230,
    },
    {
        name: 'East Lothian',
        country_id: 230,
    },
    {
        name: 'East Midlands',
        country_id: 230,
    },
    {
        name: 'East Sussex',
        country_id: 230,
    },
    {
        name: 'East Yorkshire',
        country_id: 230,
    },
    {
        name: 'England',
        country_id: 230,
    },
    {
        name: 'Essex',
        country_id: 230,
    },
    {
        name: 'Fermanagh',
        country_id: 230,
    },
    {
        name: 'Fife',
        country_id: 230,
    },
    {
        name: 'Flintshire',
        country_id: 230,
    },
    {
        name: 'Fulham',
        country_id: 230,
    },
    {
        name: 'Gainsborough',
        country_id: 230,
    },
    {
        name: 'Glocestershire',
        country_id: 230,
    },
    {
        name: 'Gwent',
        country_id: 230,
    },
    {
        name: 'Hampshire',
        country_id: 230,
    },
    {
        name: 'Hants',
        country_id: 230,
    },
    {
        name: 'Herefordshire',
        country_id: 230,
    },
    {
        name: 'Hertfordshire',
        country_id: 230,
    },
    {
        name: 'Ireland',
        country_id: 230,
    },
    {
        name: 'Isle Of Man',
        country_id: 230,
    },
    {
        name: 'Isle of Wight',
        country_id: 230,
    },
    {
        name: 'Kenford',
        country_id: 230,
    },
    {
        name: 'Kent',
        country_id: 230,
    },
    {
        name: 'Kilmarnock',
        country_id: 230,
    },
    {
        name: 'Lanarkshire',
        country_id: 230,
    },
    {
        name: 'Lancashire',
        country_id: 230,
    },
    {
        name: 'Leicestershire',
        country_id: 230,
    },
    {
        name: 'Lincolnshire',
        country_id: 230,
    },
    {
        name: 'Llanymynech',
        country_id: 230,
    },
    {
        name: 'London',
        country_id: 230,
    },
    {
        name: 'Ludlow',
        country_id: 230,
    },
    {
        name: 'Manchester',
        country_id: 230,
    },
    {
        name: 'Mayfair',
        country_id: 230,
    },
    {
        name: 'Merseyside',
        country_id: 230,
    },
    {
        name: 'Mid Glamorgan',
        country_id: 230,
    },
    {
        name: 'Middlesex',
        country_id: 230,
    },
    {
        name: 'Mildenhall',
        country_id: 230,
    },
    {
        name: 'Monmouthshire',
        country_id: 230,
    },
    {
        name: 'Newton Stewart',
        country_id: 230,
    },
    {
        name: 'Norfolk',
        country_id: 230,
    },
    {
        name: 'North Humberside',
        country_id: 230,
    },
    {
        name: 'North Yorkshire',
        country_id: 230,
    },
    {
        name: 'Northamptonshire',
        country_id: 230,
    },
    {
        name: 'Northants',
        country_id: 230,
    },
    {
        name: 'Northern Ireland',
        country_id: 230,
    },
    {
        name: 'Northumberland',
        country_id: 230,
    },
    {
        name: 'Nottinghamshire',
        country_id: 230,
    },
    {
        name: 'Oxford',
        country_id: 230,
    },
    {
        name: 'Powys',
        country_id: 230,
    },
    {
        name: 'Roos-shire',
        country_id: 230,
    },
    {
        name: 'SUSSEX',
        country_id: 230,
    },
    {
        name: 'Sark',
        country_id: 230,
    },
    {
        name: 'Scotland',
        country_id: 230,
    },
    {
        name: 'Scottish Borders',
        country_id: 230,
    },
    {
        name: 'Shropshire',
        country_id: 230,
    },
    {
        name: 'Somerset',
        country_id: 230,
    },
    {
        name: 'South Glamorgan',
        country_id: 230,
    },
    {
        name: 'South Wales',
        country_id: 230,
    },
    {
        name: 'South Yorkshire',
        country_id: 230,
    },
    {
        name: 'Southwell',
        country_id: 230,
    },
    {
        name: 'Staffordshire',
        country_id: 230,
    },
    {
        name: 'Strabane',
        country_id: 230,
    },
    {
        name: 'Suffolk',
        country_id: 230,
    },
    {
        name: 'Surrey',
        country_id: 230,
    },
    {
        name: 'Sussex',
        country_id: 230,
    },
    {
        name: 'Twickenham',
        country_id: 230,
    },
    {
        name: 'Tyne and Wear',
        country_id: 230,
    },
    {
        name: 'Tyrone',
        country_id: 230,
    },
    {
        name: 'Utah',
        country_id: 230,
    },
    {
        name: 'Wales',
        country_id: 230,
    },
    {
        name: 'Warwickshire',
        country_id: 230,
    },
    {
        name: 'West Lothian',
        country_id: 230,
    },
    {
        name: 'West Midlands',
        country_id: 230,
    },
    {
        name: 'West Sussex',
        country_id: 230,
    },
    {
        name: 'West Yorkshire',
        country_id: 230,
    },
    {
        name: 'Whissendine',
        country_id: 230,
    },
    {
        name: 'Wiltshire',
        country_id: 230,
    },
    {
        name: 'Wokingham',
        country_id: 230,
    },
    {
        name: 'Worcestershire',
        country_id: 230,
    },
    {
        name: 'Wrexham',
        country_id: 230,
    },
    {
        name: 'Wurttemberg',
        country_id: 230,
    },
    {
        name: 'Yorkshire',
        country_id: 230,
    },
    {
        name: 'Alabama',
        country_id: 231,
    },
    {
        name: 'Alaska',
        country_id: 231,
    },
    {
        name: 'Arizona',
        country_id: 231,
    },
    {
        name: 'Arkansas',
        country_id: 231,
    },
    {
        name: 'Byram',
        country_id: 231,
    },
    {
        name: 'California',
        country_id: 231,
    },
    {
        name: 'Cokato',
        country_id: 231,
    },
    {
        name: 'Colorado',
        country_id: 231,
    },
    {
        name: 'Connecticut',
        country_id: 231,
    },
    {
        name: 'Delaware',
        country_id: 231,
    },
    {
        name: 'District of Columbia',
        country_id: 231,
    },
    {
        name: 'Florida',
        country_id: 231,
    },
    {
        name: 'Georgia',
        country_id: 231,
    },
    {
        name: 'Hawaii',
        country_id: 231,
    },
    {
        name: 'Idaho',
        country_id: 231,
    },
    {
        name: 'Illinois',
        country_id: 231,
    },
    {
        name: 'Indiana',
        country_id: 231,
    },
    {
        name: 'Iowa',
        country_id: 231,
    },
    {
        name: 'Kansas',
        country_id: 231,
    },
    {
        name: 'Kentucky',
        country_id: 231,
    },
    {
        name: 'Louisiana',
        country_id: 231,
    },
    {
        name: 'Lowa',
        country_id: 231,
    },
    {
        name: 'Maine',
        country_id: 231,
    },
    {
        name: 'Maryland',
        country_id: 231,
    },
    {
        name: 'Massachusetts',
        country_id: 231,
    },
    {
        name: 'Medfield',
        country_id: 231,
    },
    {
        name: 'Michigan',
        country_id: 231,
    },
    {
        name: 'Minnesota',
        country_id: 231,
    },
    {
        name: 'Mississippi',
        country_id: 231,
    },
    {
        name: 'Missouri',
        country_id: 231,
    },
    {
        name: 'Montana',
        country_id: 231,
    },
    {
        name: 'Nebraska',
        country_id: 231,
    },
    {
        name: 'Nevada',
        country_id: 231,
    },
    {
        name: 'New Hampshire',
        country_id: 231,
    },
    {
        name: 'New Jersey',
        country_id: 231,
    },
    {
        name: 'New Jersy',
        country_id: 231,
    },
    {
        name: 'New Mexico',
        country_id: 231,
    },
    {
        name: 'New York',
        country_id: 231,
    },
    {
        name: 'North Carolina',
        country_id: 231,
    },
    {
        name: 'North Dakota',
        country_id: 231,
    },
    {
        name: 'Ohio',
        country_id: 231,
    },
    {
        name: 'Oklahoma',
        country_id: 231,
    },
    {
        name: 'Ontario',
        country_id: 231,
    },
    {
        name: 'Oregon',
        country_id: 231,
    },
    {
        name: 'Pennsylvania',
        country_id: 231,
    },
    {
        name: 'Ramey',
        country_id: 231,
    },
    {
        name: 'Rhode Island',
        country_id: 231,
    },
    {
        name: 'South Carolina',
        country_id: 231,
    },
    {
        name: 'South Dakota',
        country_id: 231,
    },
    {
        name: 'Sublimity',
        country_id: 231,
    },
    {
        name: 'Tennessee',
        country_id: 231,
    },
    {
        name: 'Texas',
        country_id: 231,
    },
    {
        name: 'Trimble',
        country_id: 231,
    },
    {
        name: 'Utah',
        country_id: 231,
    },
    {
        name: 'Vermont',
        country_id: 231,
    },
    {
        name: 'Virginia',
        country_id: 231,
    },
    {
        name: 'Washington',
        country_id: 231,
    },
    {
        name: 'West Virginia',
        country_id: 231,
    },
    {
        name: 'Wisconsin',
        country_id: 231,
    },
    {
        name: 'Wyoming',
        country_id: 231,
    },
    {
        name: 'United States Minor Outlying I',
        country_id: 232,
    },
    {
        name: 'Artigas',
        country_id: 233,
    },
    {
        name: 'Canelones',
        country_id: 233,
    },
    {
        name: 'Cerro Largo',
        country_id: 233,
    },
    {
        name: 'Colonia',
        country_id: 233,
    },
    {
        name: 'Durazno',
        country_id: 233,
    },
    {
        name: 'FLorida',
        country_id: 233,
    },
    {
        name: 'Flores',
        country_id: 233,
    },
    {
        name: 'Lavalleja',
        country_id: 233,
    },
    {
        name: 'Maldonado',
        country_id: 233,
    },
    {
        name: 'Montevideo',
        country_id: 233,
    },
    {
        name: 'Paysandu',
        country_id: 233,
    },
    {
        name: 'Rio Negro',
        country_id: 233,
    },
    {
        name: 'Rivera',
        country_id: 233,
    },
    {
        name: 'Rocha',
        country_id: 233,
    },
    {
        name: 'Salto',
        country_id: 233,
    },
    {
        name: 'San Jose',
        country_id: 233,
    },
    {
        name: 'Soriano',
        country_id: 233,
    },
    {
        name: 'Tacuarembo',
        country_id: 233,
    },
    {
        name: 'Treinta y Tres',
        country_id: 233,
    },
    {
        name: 'Andijon',
        country_id: 234,
    },
    {
        name: 'Buhoro',
        country_id: 234,
    },
    {
        name: 'Buxoro Viloyati',
        country_id: 234,
    },
    {
        name: 'Cizah',
        country_id: 234,
    },
    {
        name: 'Fargona',
        country_id: 234,
    },
    {
        name: 'Horazm',
        country_id: 234,
    },
    {
        name: 'Kaskadar',
        country_id: 234,
    },
    {
        name: 'Korakalpogiston',
        country_id: 234,
    },
    {
        name: 'Namangan',
        country_id: 234,
    },
    {
        name: 'Navoi',
        country_id: 234,
    },
    {
        name: 'Samarkand',
        country_id: 234,
    },
    {
        name: 'Sirdare',
        country_id: 234,
    },
    {
        name: 'Surhondar',
        country_id: 234,
    },
    {
        name: 'Toskent',
        country_id: 234,
    },
    {
        name: 'Malampa',
        country_id: 235,
    },
    {
        name: 'Penama',
        country_id: 235,
    },
    {
        name: 'Sanma',
        country_id: 235,
    },
    {
        name: 'Shefa',
        country_id: 235,
    },
    {
        name: 'Tafea',
        country_id: 235,
    },
    {
        name: 'Torba',
        country_id: 235,
    },
    {
        name: 'Vatican City State (Holy See)',
        country_id: 236,
    },
    {
        name: 'Amazonas',
        country_id: 237,
    },
    {
        name: 'Anzoategui',
        country_id: 237,
    },
    {
        name: 'Apure',
        country_id: 237,
    },
    {
        name: 'Aragua',
        country_id: 237,
    },
    {
        name: 'Barinas',
        country_id: 237,
    },
    {
        name: 'Bolivar',
        country_id: 237,
    },
    {
        name: 'Carabobo',
        country_id: 237,
    },
    {
        name: 'Cojedes',
        country_id: 237,
    },
    {
        name: 'Delta Amacuro',
        country_id: 237,
    },
    {
        name: 'Distrito Federal',
        country_id: 237,
    },
    {
        name: 'Falcon',
        country_id: 237,
    },
    {
        name: 'Guarico',
        country_id: 237,
    },
    {
        name: 'Lara',
        country_id: 237,
    },
    {
        name: 'Merida',
        country_id: 237,
    },
    {
        name: 'Miranda',
        country_id: 237,
    },
    {
        name: 'Monagas',
        country_id: 237,
    },
    {
        name: 'Nueva Esparta',
        country_id: 237,
    },
    {
        name: 'Portuguesa',
        country_id: 237,
    },
    {
        name: 'Sucre',
        country_id: 237,
    },
    {
        name: 'Tachira',
        country_id: 237,
    },
    {
        name: 'Trujillo',
        country_id: 237,
    },
    {
        name: 'Vargas',
        country_id: 237,
    },
    {
        name: 'Yaracuy',
        country_id: 237,
    },
    {
        name: 'Zulia',
        country_id: 237,
    },
    {
        name: 'Bac Giang',
        country_id: 238,
    },
    {
        name: 'Binh Dinh',
        country_id: 238,
    },
    {
        name: 'Binh Duong',
        country_id: 238,
    },
    {
        name: 'Da Nang',
        country_id: 238,
    },
    {
        name: 'Dong Bang Song Cuu Long',
        country_id: 238,
    },
    {
        name: 'Dong Bang Song Hong',
        country_id: 238,
    },
    {
        name: 'Dong Nai',
        country_id: 238,
    },
    {
        name: 'Dong Nam Bo',
        country_id: 238,
    },
    {
        name: 'Duyen Hai Mien Trung',
        country_id: 238,
    },
    {
        name: 'Hanoi',
        country_id: 238,
    },
    {
        name: 'Hung Yen',
        country_id: 238,
    },
    {
        name: 'Khu Bon Cu',
        country_id: 238,
    },
    {
        name: 'Long An',
        country_id: 238,
    },
    {
        name: 'Mien Nui Va Trung Du',
        country_id: 238,
    },
    {
        name: 'Thai Nguyen',
        country_id: 238,
    },
    {
        name: 'Thanh Pho Ho Chi Minh',
        country_id: 238,
    },
    {
        name: 'Thu Do Ha Noi',
        country_id: 238,
    },
    {
        name: 'Tinh Can Tho',
        country_id: 238,
    },
    {
        name: 'Tinh Da Nang',
        country_id: 238,
    },
    {
        name: 'Tinh Gia Lai',
        country_id: 238,
    },
    {
        name: 'Anegada',
        country_id: 239,
    },
    {
        name: 'Jost van Dyke',
        country_id: 239,
    },
    {
        name: 'Tortola',
        country_id: 239,
    },
    {
        name: 'Saint Croix',
        country_id: 240,
    },
    {
        name: 'Saint John',
        country_id: 240,
    },
    {
        name: 'Saint Thomas',
        country_id: 240,
    },
    {
        name: 'Alo',
        country_id: 241,
    },
    {
        name: 'Singave',
        country_id: 241,
    },
    {
        name: 'Wallis',
        country_id: 241,
    },
    {
        name: 'Bu Jaydur',
        country_id: 242,
    },
    {
        name: 'Wad-adh-Dhahab',
        country_id: 242,
    },
    {
        name: "al-'Ayun",
        country_id: 242,
    },
    {
        name: 'as-Samarah',
        country_id: 242,
    },
    {
        name: "'Adan",
        country_id: 243,
    },
    {
        name: 'Abyan',
        country_id: 243,
    },
    {
        name: 'Dhamar',
        country_id: 243,
    },
    {
        name: 'Hadramaut',
        country_id: 243,
    },
    {
        name: 'Hajjah',
        country_id: 243,
    },
    {
        name: 'Hudaydah',
        country_id: 243,
    },
    {
        name: 'Ibb',
        country_id: 243,
    },
    {
        name: 'Lahij',
        country_id: 243,
    },
    {
        name: "Ma'rib",
        country_id: 243,
    },
    {
        name: "Madinat San'a",
        country_id: 243,
    },
    {
        name: "Sa'dah",
        country_id: 243,
    },
    {
        name: 'Sana',
        country_id: 243,
    },
    {
        name: 'Shabwah',
        country_id: 243,
    },
    {
        name: "Ta'izz",
        country_id: 243,
    },
    {
        name: 'al-Bayda',
        country_id: 243,
    },
    {
        name: 'al-Hudaydah',
        country_id: 243,
    },
    {
        name: 'al-Jawf',
        country_id: 243,
    },
    {
        name: 'al-Mahrah',
        country_id: 243,
    },
    {
        name: 'al-Mahwit',
        country_id: 243,
    },
    {
        name: 'Central Serbia',
        country_id: 244,
    },
    {
        name: 'Kosovo and Metohija',
        country_id: 244,
    },
    {
        name: 'Montenegro',
        country_id: 244,
    },
    {
        name: 'Republic of Serbia',
        country_id: 244,
    },
    {
        name: 'Serbia',
        country_id: 244,
    },
    {
        name: 'Vojvodina',
        country_id: 244,
    },
    {
        name: 'Central',
        country_id: 245,
    },
    {
        name: 'Copperbelt',
        country_id: 245,
    },
    {
        name: 'Eastern',
        country_id: 245,
    },
    {
        name: 'Luapala',
        country_id: 245,
    },
    {
        name: 'Lusaka',
        country_id: 245,
    },
    {
        name: 'North-Western',
        country_id: 245,
    },
    {
        name: 'Northern',
        country_id: 245,
    },
    {
        name: 'Southern',
        country_id: 245,
    },
    {
        name: 'Western',
        country_id: 245,
    },
    {
        name: 'Bulawayo',
        country_id: 246,
    },
    {
        name: 'Harare',
        country_id: 246,
    },
    {
        name: 'Manicaland',
        country_id: 246,
    },
    {
        name: 'Mashonaland Central',
        country_id: 246,
    },
    {
        name: 'Mashonaland East',
        country_id: 246,
    },
    {
        name: 'Mashonaland West',
        country_id: 246,
    },
    {
        name: 'Masvingo',
        country_id: 246,
    },
    {
        name: 'Matabeleland North',
        country_id: 246,
    },
    {
        name: 'Matabeleland South',
        country_id: 246,
    },
    {
        name: 'Midlands',
        country_id: 246,
    },
].map((input, id) => ({
    id,
    createdAt: new Date(),
    updatedAt: new Date(),
    ...input,
}))

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('States', states, {})
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('States', null, {})
    },
}
