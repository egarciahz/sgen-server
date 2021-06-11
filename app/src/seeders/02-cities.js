const cities = [
    {
        id: 1,
        name: 'Bombuflat',
        state_id: 1,
    },
    {
        name: 'Garacharma',
        state_id: 1,
    },
    {
        name: 'Port Blair',
        state_id: 1,
    },
    {
        name: 'Rangat',
        state_id: 1,
    },
    {
        name: 'Addanki',
        state_id: 2,
    },
    {
        name: 'Adivivaram',
        state_id: 2,
    },
    {
        name: 'Adoni',
        state_id: 2,
    },
    {
        name: 'Aganampudi',
        state_id: 2,
    },
    {
        name: 'Ajjaram',
        state_id: 2,
    },
    {
        name: 'Akividu',
        state_id: 2,
    },
    {
        name: 'Akkarampalle',
        state_id: 2,
    },
    {
        name: 'Akkayapalle',
        state_id: 2,
    },
    {
        name: 'Akkireddipalem',
        state_id: 2,
    },
    {
        name: 'Alampur',
        state_id: 2,
    },
    {
        name: 'Amalapuram',
        state_id: 2,
    },
    {
        name: 'Amudalavalasa',
        state_id: 2,
    },
    {
        name: 'Amur',
        state_id: 2,
    },
    {
        name: 'Anakapalle',
        state_id: 2,
    },
    {
        name: 'Anantapur',
        state_id: 2,
    },
    {
        name: 'Andole',
        state_id: 2,
    },
    {
        name: 'Atmakur',
        state_id: 2,
    },
    {
        name: 'Attili',
        state_id: 2,
    },
    {
        name: 'Avanigadda',
        state_id: 2,
    },
    {
        name: 'Badepalli',
        state_id: 2,
    },
    {
        name: 'Badvel',
        state_id: 2,
    },
    {
        name: 'Balapur',
        state_id: 2,
    },
    {
        name: 'Bandarulanka',
        state_id: 2,
    },
    {
        name: 'Banganapalle',
        state_id: 2,
    },
    {
        name: 'Bapatla',
        state_id: 2,
    },
    {
        name: 'Bapulapadu',
        state_id: 2,
    },
    {
        name: 'Belampalli',
        state_id: 2,
    },
    {
        name: 'Bestavaripeta',
        state_id: 2,
    },
    {
        name: 'Betamcherla',
        state_id: 2,
    },
    {
        name: 'Bhattiprolu',
        state_id: 2,
    },
    {
        name: 'Bhimavaram',
        state_id: 2,
    },
    {
        name: 'Bhimunipatnam',
        state_id: 2,
    },
    {
        name: 'Bobbili',
        state_id: 2,
    },
    {
        name: 'Bombuflat',
        state_id: 2,
    },
    {
        name: 'Bommuru',
        state_id: 2,
    },
    {
        name: 'Bugganipalle',
        state_id: 2,
    },
    {
        name: 'Challapalle',
        state_id: 2,
    },
    {
        name: 'Chandur',
        state_id: 2,
    },
    {
        name: 'Chatakonda',
        state_id: 2,
    },
    {
        name: 'Chemmumiahpet',
        state_id: 2,
    },
    {
        name: 'Chidiga',
        state_id: 2,
    },
    {
        name: 'Chilakaluripet',
        state_id: 2,
    },
    {
        name: 'Chimakurthy',
        state_id: 2,
    },
    {
        name: 'Chinagadila',
        state_id: 2,
    },
    {
        name: 'Chinagantyada',
        state_id: 2,
    },
    {
        name: 'Chinnachawk',
        state_id: 2,
    },
    {
        name: 'Chintalavalasa',
        state_id: 2,
    },
    {
        name: 'Chipurupalle',
        state_id: 2,
    },
    {
        name: 'Chirala',
        state_id: 2,
    },
    {
        name: 'Chittoor',
        state_id: 2,
    },
    {
        name: 'Chodavaram',
        state_id: 2,
    },
    {
        name: 'Choutuppal',
        state_id: 2,
    },
    {
        name: 'Chunchupalle',
        state_id: 2,
    },
    {
        name: 'Cuddapah',
        state_id: 2,
    },
    {
        name: 'Cumbum',
        state_id: 2,
    },
    {
        name: 'Darnakal',
        state_id: 2,
    },
    {
        name: 'Dasnapur',
        state_id: 2,
    },
    {
        name: 'Dauleshwaram',
        state_id: 2,
    },
    {
        name: 'Dharmavaram',
        state_id: 2,
    },
    {
        name: 'Dhone',
        state_id: 2,
    },
    {
        name: 'Dommara Nandyal',
        state_id: 2,
    },
    {
        name: 'Dowlaiswaram',
        state_id: 2,
    },
    {
        name: 'East Godavari Dist.',
        state_id: 2,
    },
    {
        name: 'Eddumailaram',
        state_id: 2,
    },
    {
        name: 'Edulapuram',
        state_id: 2,
    },
    {
        name: 'Ekambara kuppam',
        state_id: 2,
    },
    {
        name: 'Eluru',
        state_id: 2,
    },
    {
        name: 'Enikapadu',
        state_id: 2,
    },
    {
        name: 'Fakirtakya',
        state_id: 2,
    },
    {
        name: 'Farrukhnagar',
        state_id: 2,
    },
    {
        name: 'Gaddiannaram',
        state_id: 2,
    },
    {
        name: 'Gajapathinagaram',
        state_id: 2,
    },
    {
        name: 'Gajularega',
        state_id: 2,
    },
    {
        name: 'Gajuvaka',
        state_id: 2,
    },
    {
        name: 'Gannavaram',
        state_id: 2,
    },
    {
        name: 'Garacharma',
        state_id: 2,
    },
    {
        name: 'Garimellapadu',
        state_id: 2,
    },
    {
        name: 'Giddalur',
        state_id: 2,
    },
    {
        name: 'Godavarikhani',
        state_id: 2,
    },
    {
        name: 'Gopalapatnam',
        state_id: 2,
    },
    {
        name: 'Gopalur',
        state_id: 2,
    },
    {
        name: 'Gorrekunta',
        state_id: 2,
    },
    {
        name: 'Gudivada',
        state_id: 2,
    },
    {
        name: 'Gudur',
        state_id: 2,
    },
    {
        name: 'Guntakal',
        state_id: 2,
    },
    {
        name: 'Guntur',
        state_id: 2,
    },
    {
        name: 'Guti',
        state_id: 2,
    },
    {
        name: 'Hindupur',
        state_id: 2,
    },
    {
        name: 'Hukumpeta',
        state_id: 2,
    },
    {
        name: 'Ichchapuram',
        state_id: 2,
    },
    {
        name: 'Isnapur',
        state_id: 2,
    },
    {
        name: 'Jaggayyapeta',
        state_id: 2,
    },
    {
        name: 'Jallaram Kamanpur',
        state_id: 2,
    },
    {
        name: 'Jammalamadugu',
        state_id: 2,
    },
    {
        name: 'Jangampalli',
        state_id: 2,
    },
    {
        name: 'Jarjapupeta',
        state_id: 2,
    },
    {
        name: 'Kadiri',
        state_id: 2,
    },
    {
        name: 'Kaikalur',
        state_id: 2,
    },
    {
        name: 'Kakinada',
        state_id: 2,
    },
    {
        name: 'Kallur',
        state_id: 2,
    },
    {
        name: 'Kalyandurg',
        state_id: 2,
    },
    {
        name: 'Kamalapuram',
        state_id: 2,
    },
    {
        name: 'Kamareddi',
        state_id: 2,
    },
    {
        name: 'Kanapaka',
        state_id: 2,
    },
    {
        name: 'Kanigiri',
        state_id: 2,
    },
    {
        name: 'Kanithi',
        state_id: 2,
    },
    {
        name: 'Kankipadu',
        state_id: 2,
    },
    {
        name: 'Kantabamsuguda',
        state_id: 2,
    },
    {
        name: 'Kanuru',
        state_id: 2,
    },
    {
        name: 'Karnul',
        state_id: 2,
    },
    {
        name: 'Katheru',
        state_id: 2,
    },
    {
        name: 'Kavali',
        state_id: 2,
    },
    {
        name: 'Kazipet',
        state_id: 2,
    },
    {
        name: 'Khanapuram Haveli',
        state_id: 2,
    },
    {
        name: 'Kodar',
        state_id: 2,
    },
    {
        name: 'Kollapur',
        state_id: 2,
    },
    {
        name: 'Kondapalem',
        state_id: 2,
    },
    {
        name: 'Kondapalle',
        state_id: 2,
    },
    {
        name: 'Kondukur',
        state_id: 2,
    },
    {
        name: 'Kosgi',
        state_id: 2,
    },
    {
        name: 'Kothavalasa',
        state_id: 2,
    },
    {
        name: 'Kottapalli',
        state_id: 2,
    },
    {
        name: 'Kovur',
        state_id: 2,
    },
    {
        name: 'Kovurpalle',
        state_id: 2,
    },
    {
        name: 'Kovvur',
        state_id: 2,
    },
    {
        name: 'Krishna',
        state_id: 2,
    },
    {
        name: 'Kuppam',
        state_id: 2,
    },
    {
        name: 'Kurmannapalem',
        state_id: 2,
    },
    {
        name: 'Kurnool',
        state_id: 2,
    },
    {
        name: 'Lakshettipet',
        state_id: 2,
    },
    {
        name: 'Lalbahadur Nagar',
        state_id: 2,
    },
    {
        name: 'Machavaram',
        state_id: 2,
    },
    {
        name: 'Macherla',
        state_id: 2,
    },
    {
        name: 'Machilipatnam',
        state_id: 2,
    },
    {
        name: 'Madanapalle',
        state_id: 2,
    },
    {
        name: 'Madaram',
        state_id: 2,
    },
    {
        name: 'Madhuravada',
        state_id: 2,
    },
    {
        name: 'Madikonda',
        state_id: 2,
    },
    {
        name: 'Madugule',
        state_id: 2,
    },
    {
        name: 'Mahabubnagar',
        state_id: 2,
    },
    {
        name: 'Mahbubabad',
        state_id: 2,
    },
    {
        name: 'Malkajgiri',
        state_id: 2,
    },
    {
        name: 'Mamilapalle',
        state_id: 2,
    },
    {
        name: 'Mancheral',
        state_id: 2,
    },
    {
        name: 'Mandapeta',
        state_id: 2,
    },
    {
        name: 'Mandasa',
        state_id: 2,
    },
    {
        name: 'Mangalagiri',
        state_id: 2,
    },
    {
        name: 'Manthani',
        state_id: 2,
    },
    {
        name: 'Markapur',
        state_id: 2,
    },
    {
        name: 'Marturu',
        state_id: 2,
    },
    {
        name: 'Metpalli',
        state_id: 2,
    },
    {
        name: 'Mindi',
        state_id: 2,
    },
    {
        name: 'Mirpet',
        state_id: 2,
    },
    {
        name: 'Moragudi',
        state_id: 2,
    },
    {
        name: 'Mothugudam',
        state_id: 2,
    },
    {
        name: 'Nagari',
        state_id: 2,
    },
    {
        name: 'Nagireddipalle',
        state_id: 2,
    },
    {
        name: 'Nandigama',
        state_id: 2,
    },
    {
        name: 'Nandikotkur',
        state_id: 2,
    },
    {
        name: 'Nandyal',
        state_id: 2,
    },
    {
        name: 'Narasannapeta',
        state_id: 2,
    },
    {
        name: 'Narasapur',
        state_id: 2,
    },
    {
        name: 'Narasaraopet',
        state_id: 2,
    },
    {
        name: 'Narayanavanam',
        state_id: 2,
    },
    {
        name: 'Narsapur',
        state_id: 2,
    },
    {
        name: 'Narsingi',
        state_id: 2,
    },
    {
        name: 'Narsipatnam',
        state_id: 2,
    },
    {
        name: 'Naspur',
        state_id: 2,
    },
    {
        name: 'Nathayyapalem',
        state_id: 2,
    },
    {
        name: 'Nayudupeta',
        state_id: 2,
    },
    {
        name: 'Nelimaria',
        state_id: 2,
    },
    {
        name: 'Nellore',
        state_id: 2,
    },
    {
        name: 'Nidadavole',
        state_id: 2,
    },
    {
        name: 'Nuzvid',
        state_id: 2,
    },
    {
        name: 'Omerkhan daira',
        state_id: 2,
    },
    {
        name: 'Ongole',
        state_id: 2,
    },
    {
        name: 'Osmania University',
        state_id: 2,
    },
    {
        name: 'Pakala',
        state_id: 2,
    },
    {
        name: 'Palakole',
        state_id: 2,
    },
    {
        name: 'Palakurthi',
        state_id: 2,
    },
    {
        name: 'Palasa',
        state_id: 2,
    },
    {
        name: 'Palempalle',
        state_id: 2,
    },
    {
        name: 'Palkonda',
        state_id: 2,
    },
    {
        name: 'Palmaner',
        state_id: 2,
    },
    {
        name: 'Pamur',
        state_id: 2,
    },
    {
        name: 'Panjim',
        state_id: 2,
    },
    {
        name: 'Papampeta',
        state_id: 2,
    },
    {
        name: 'Parasamba',
        state_id: 2,
    },
    {
        name: 'Parvatipuram',
        state_id: 2,
    },
    {
        name: 'Patancheru',
        state_id: 2,
    },
    {
        name: 'Payakaraopet',
        state_id: 2,
    },
    {
        name: 'Pedagantyada',
        state_id: 2,
    },
    {
        name: 'Pedana',
        state_id: 2,
    },
    {
        name: 'Peddapuram',
        state_id: 2,
    },
    {
        name: 'Pendurthi',
        state_id: 2,
    },
    {
        name: 'Penugonda',
        state_id: 2,
    },
    {
        name: 'Penukonda',
        state_id: 2,
    },
    {
        name: 'Phirangipuram',
        state_id: 2,
    },
    {
        name: 'Pithapuram',
        state_id: 2,
    },
    {
        name: 'Ponnur',
        state_id: 2,
    },
    {
        name: 'Port Blair',
        state_id: 2,
    },
    {
        name: 'Pothinamallayyapalem',
        state_id: 2,
    },
    {
        name: 'Prakasam',
        state_id: 2,
    },
    {
        name: 'Prasadampadu',
        state_id: 2,
    },
    {
        name: 'Prasantinilayam',
        state_id: 2,
    },
    {
        name: 'Proddatur',
        state_id: 2,
    },
    {
        name: 'Pulivendla',
        state_id: 2,
    },
    {
        name: 'Punganuru',
        state_id: 2,
    },
    {
        name: 'Puttur',
        state_id: 2,
    },
    {
        name: 'Qutubullapur',
        state_id: 2,
    },
    {
        name: 'Rajahmundry',
        state_id: 2,
    },
    {
        name: 'Rajamahendri',
        state_id: 2,
    },
    {
        name: 'Rajampet',
        state_id: 2,
    },
    {
        name: 'Rajendranagar',
        state_id: 2,
    },
    {
        name: 'Rajoli',
        state_id: 2,
    },
    {
        name: 'Ramachandrapuram',
        state_id: 2,
    },
    {
        name: 'Ramanayyapeta',
        state_id: 2,
    },
    {
        name: 'Ramapuram',
        state_id: 2,
    },
    {
        name: 'Ramarajupalli',
        state_id: 2,
    },
    {
        name: 'Ramavarappadu',
        state_id: 2,
    },
    {
        name: 'Rameswaram',
        state_id: 2,
    },
    {
        name: 'Rampachodavaram',
        state_id: 2,
    },
    {
        name: 'Ravulapalam',
        state_id: 2,
    },
    {
        name: 'Rayachoti',
        state_id: 2,
    },
    {
        name: 'Rayadrug',
        state_id: 2,
    },
    {
        name: 'Razam',
        state_id: 2,
    },
    {
        name: 'Razole',
        state_id: 2,
    },
    {
        name: 'Renigunta',
        state_id: 2,
    },
    {
        name: 'Repalle',
        state_id: 2,
    },
    {
        name: 'Rishikonda',
        state_id: 2,
    },
    {
        name: 'Salur',
        state_id: 2,
    },
    {
        name: 'Samalkot',
        state_id: 2,
    },
    {
        name: 'Sattenapalle',
        state_id: 2,
    },
    {
        name: 'Seetharampuram',
        state_id: 2,
    },
    {
        name: 'Serilungampalle',
        state_id: 2,
    },
    {
        name: 'Shankarampet',
        state_id: 2,
    },
    {
        name: 'Shar',
        state_id: 2,
    },
    {
        name: 'Singarayakonda',
        state_id: 2,
    },
    {
        name: 'Sirpur',
        state_id: 2,
    },
    {
        name: 'Sirsilla',
        state_id: 2,
    },
    {
        name: 'Sompeta',
        state_id: 2,
    },
    {
        name: 'Sriharikota',
        state_id: 2,
    },
    {
        name: 'Srikakulam',
        state_id: 2,
    },
    {
        name: 'Srikalahasti',
        state_id: 2,
    },
    {
        name: 'Sriramnagar',
        state_id: 2,
    },
    {
        name: 'Sriramsagar',
        state_id: 2,
    },
    {
        name: 'Srisailam',
        state_id: 2,
    },
    {
        name: 'Srisailamgudem Devasthanam',
        state_id: 2,
    },
    {
        name: 'Sulurpeta',
        state_id: 2,
    },
    {
        name: 'Suriapet',
        state_id: 2,
    },
    {
        name: 'Suryaraopet',
        state_id: 2,
    },
    {
        name: 'Tadepalle',
        state_id: 2,
    },
    {
        name: 'Tadepalligudem',
        state_id: 2,
    },
    {
        name: 'Tadpatri',
        state_id: 2,
    },
    {
        name: 'Tallapalle',
        state_id: 2,
    },
    {
        name: 'Tanuku',
        state_id: 2,
    },
    {
        name: 'Tekkali',
        state_id: 2,
    },
    {
        name: 'Tenali',
        state_id: 2,
    },
    {
        name: 'Tigalapahad',
        state_id: 2,
    },
    {
        name: 'Tiruchanur',
        state_id: 2,
    },
    {
        name: 'Tirumala',
        state_id: 2,
    },
    {
        name: 'Tirupati',
        state_id: 2,
    },
    {
        name: 'Tirvuru',
        state_id: 2,
    },
    {
        name: 'Trimulgherry',
        state_id: 2,
    },
    {
        name: 'Tuni',
        state_id: 2,
    },
    {
        name: 'Turangi',
        state_id: 2,
    },
    {
        name: 'Ukkayapalli',
        state_id: 2,
    },
    {
        name: 'Ukkunagaram',
        state_id: 2,
    },
    {
        name: 'Uppal Kalan',
        state_id: 2,
    },
    {
        name: 'Upper Sileru',
        state_id: 2,
    },
    {
        name: 'Uravakonda',
        state_id: 2,
    },
    {
        name: 'Vadlapudi',
        state_id: 2,
    },
    {
        name: 'Vaparala',
        state_id: 2,
    },
    {
        name: 'Vemalwada',
        state_id: 2,
    },
    {
        name: 'Venkatagiri',
        state_id: 2,
    },
    {
        name: 'Venkatapuram',
        state_id: 2,
    },
    {
        name: 'Vepagunta',
        state_id: 2,
    },
    {
        name: 'Vetapalem',
        state_id: 2,
    },
    {
        name: 'Vijayapuri',
        state_id: 2,
    },
    {
        name: 'Vijayapuri South',
        state_id: 2,
    },
    {
        name: 'Vijayawada',
        state_id: 2,
    },
    {
        name: 'Vinukonda',
        state_id: 2,
    },
    {
        name: 'Visakhapatnam',
        state_id: 2,
    },
    {
        name: 'Vizianagaram',
        state_id: 2,
    },
    {
        name: 'Vuyyuru',
        state_id: 2,
    },
    {
        name: 'Wanparti',
        state_id: 2,
    },
    {
        name: 'West Godavari Dist.',
        state_id: 2,
    },
    {
        name: 'Yadagirigutta',
        state_id: 2,
    },
    {
        name: 'Yarada',
        state_id: 2,
    },
    {
        name: 'Yellamanchili',
        state_id: 2,
    },
    {
        name: 'Yemmiganur',
        state_id: 2,
    },
    {
        name: 'Yenamalakudru',
        state_id: 2,
    },
    {
        name: 'Yendada',
        state_id: 2,
    },
    {
        name: 'Yerraguntla',
        state_id: 2,
    },
    {
        name: 'Along',
        state_id: 3,
    },
    {
        name: 'Basar',
        state_id: 3,
    },
    {
        name: 'Bondila',
        state_id: 3,
    },
    {
        name: 'Changlang',
        state_id: 3,
    },
    {
        name: 'Daporijo',
        state_id: 3,
    },
    {
        name: 'Deomali',
        state_id: 3,
    },
    {
        name: 'Itanagar',
        state_id: 3,
    },
    {
        name: 'Jairampur',
        state_id: 3,
    },
    {
        name: 'Khonsa',
        state_id: 3,
    },
    {
        name: 'Naharlagun',
        state_id: 3,
    },
    {
        name: 'Namsai',
        state_id: 3,
    },
    {
        name: 'Pasighat',
        state_id: 3,
    },
    {
        name: 'Roing',
        state_id: 3,
    },
    {
        name: 'Seppa',
        state_id: 3,
    },
    {
        name: 'Tawang',
        state_id: 3,
    },
    {
        name: 'Tezu',
        state_id: 3,
    },
    {
        name: 'Ziro',
        state_id: 3,
    },
    {
        name: 'Abhayapuri',
        state_id: 4,
    },
    {
        name: 'Ambikapur',
        state_id: 4,
    },
    {
        name: 'Amguri',
        state_id: 4,
    },
    {
        name: 'Anand Nagar',
        state_id: 4,
    },
    {
        name: 'Badarpur',
        state_id: 4,
    },
    {
        name: 'Badarpur Railway Town',
        state_id: 4,
    },
    {
        name: 'Bahbari Gaon',
        state_id: 4,
    },
    {
        name: 'Bamun Sualkuchi',
        state_id: 4,
    },
    {
        name: 'Barbari',
        state_id: 4,
    },
    {
        name: 'Barpathar',
        state_id: 4,
    },
    {
        name: 'Barpeta',
        state_id: 4,
    },
    {
        name: 'Barpeta Road',
        state_id: 4,
    },
    {
        name: 'Basugaon',
        state_id: 4,
    },
    {
        name: 'Bihpuria',
        state_id: 4,
    },
    {
        name: 'Bijni',
        state_id: 4,
    },
    {
        name: 'Bilasipara',
        state_id: 4,
    },
    {
        name: 'Biswanath Chariali',
        state_id: 4,
    },
    {
        name: 'Bohori',
        state_id: 4,
    },
    {
        name: 'Bokajan',
        state_id: 4,
    },
    {
        name: 'Bokokhat',
        state_id: 4,
    },
    {
        name: 'Bongaigaon',
        state_id: 4,
    },
    {
        name: 'Bongaigaon Petro-chemical Town',
        state_id: 4,
    },
    {
        name: 'Borgolai',
        state_id: 4,
    },
    {
        name: 'Chabua',
        state_id: 4,
    },
    {
        name: 'Chandrapur Bagicha',
        state_id: 4,
    },
    {
        name: 'Chapar',
        state_id: 4,
    },
    {
        name: 'Chekonidhara',
        state_id: 4,
    },
    {
        name: 'Choto Haibor',
        state_id: 4,
    },
    {
        name: 'Dergaon',
        state_id: 4,
    },
    {
        name: 'Dharapur',
        state_id: 4,
    },
    {
        name: 'Dhekiajuli',
        state_id: 4,
    },
    {
        name: 'Dhemaji',
        state_id: 4,
    },
    {
        name: 'Dhing',
        state_id: 4,
    },
    {
        name: 'Dhubri',
        state_id: 4,
    },
    {
        name: 'Dhuburi',
        state_id: 4,
    },
    {
        name: 'Dibrugarh',
        state_id: 4,
    },
    {
        name: 'Digboi',
        state_id: 4,
    },
    {
        name: 'Digboi Oil Town',
        state_id: 4,
    },
    {
        name: 'Dimaruguri',
        state_id: 4,
    },
    {
        name: 'Diphu',
        state_id: 4,
    },
    {
        name: 'Dispur',
        state_id: 4,
    },
    {
        name: 'Doboka',
        state_id: 4,
    },
    {
        name: 'Dokmoka',
        state_id: 4,
    },
    {
        name: 'Donkamokan',
        state_id: 4,
    },
    {
        name: 'Duliagaon',
        state_id: 4,
    },
    {
        name: 'Duliajan',
        state_id: 4,
    },
    {
        name: 'Duliajan No.1',
        state_id: 4,
    },
    {
        name: 'Dum Duma',
        state_id: 4,
    },
    {
        name: 'Durga Nagar',
        state_id: 4,
    },
    {
        name: 'Gauripur',
        state_id: 4,
    },
    {
        name: 'Goalpara',
        state_id: 4,
    },
    {
        name: 'Gohpur',
        state_id: 4,
    },
    {
        name: 'Golaghat',
        state_id: 4,
    },
    {
        name: 'Golakganj',
        state_id: 4,
    },
    {
        name: 'Gossaigaon',
        state_id: 4,
    },
    {
        name: 'Guwahati',
        state_id: 4,
    },
    {
        name: 'Haflong',
        state_id: 4,
    },
    {
        name: 'Hailakandi',
        state_id: 4,
    },
    {
        name: 'Hamren',
        state_id: 4,
    },
    {
        name: 'Hauli',
        state_id: 4,
    },
    {
        name: 'Hauraghat',
        state_id: 4,
    },
    {
        name: 'Hojai',
        state_id: 4,
    },
    {
        name: 'Jagiroad',
        state_id: 4,
    },
    {
        name: 'Jagiroad Paper Mill',
        state_id: 4,
    },
    {
        name: 'Jogighopa',
        state_id: 4,
    },
    {
        name: 'Jonai Bazar',
        state_id: 4,
    },
    {
        name: 'Jorhat',
        state_id: 4,
    },
    {
        name: 'Kampur Town',
        state_id: 4,
    },
    {
        name: 'Kamrup',
        state_id: 4,
    },
    {
        name: 'Kanakpur',
        state_id: 4,
    },
    {
        name: 'Karimganj',
        state_id: 4,
    },
    {
        name: 'Kharijapikon',
        state_id: 4,
    },
    {
        name: 'Kharupetia',
        state_id: 4,
    },
    {
        name: 'Kochpara',
        state_id: 4,
    },
    {
        name: 'Kokrajhar',
        state_id: 4,
    },
    {
        name: 'Kumar Kaibarta Gaon',
        state_id: 4,
    },
    {
        name: 'Lakhimpur',
        state_id: 4,
    },
    {
        name: 'Lakhipur',
        state_id: 4,
    },
    {
        name: 'Lala',
        state_id: 4,
    },
    {
        name: 'Lanka',
        state_id: 4,
    },
    {
        name: 'Lido Tikok',
        state_id: 4,
    },
    {
        name: 'Lido Town',
        state_id: 4,
    },
    {
        name: 'Lumding',
        state_id: 4,
    },
    {
        name: 'Lumding Railway Colony',
        state_id: 4,
    },
    {
        name: 'Mahur',
        state_id: 4,
    },
    {
        name: 'Maibong',
        state_id: 4,
    },
    {
        name: 'Majgaon',
        state_id: 4,
    },
    {
        name: 'Makum',
        state_id: 4,
    },
    {
        name: 'Mangaldai',
        state_id: 4,
    },
    {
        name: 'Mankachar',
        state_id: 4,
    },
    {
        name: 'Margherita',
        state_id: 4,
    },
    {
        name: 'Mariani',
        state_id: 4,
    },
    {
        name: 'Marigaon',
        state_id: 4,
    },
    {
        name: 'Moran',
        state_id: 4,
    },
    {
        name: 'Moranhat',
        state_id: 4,
    },
    {
        name: 'Nagaon',
        state_id: 4,
    },
    {
        name: 'Naharkatia',
        state_id: 4,
    },
    {
        name: 'Nalbari',
        state_id: 4,
    },
    {
        name: 'Namrup',
        state_id: 4,
    },
    {
        name: 'Naubaisa Gaon',
        state_id: 4,
    },
    {
        name: 'Nazira',
        state_id: 4,
    },
    {
        name: 'New Bongaigaon Railway Colony',
        state_id: 4,
    },
    {
        name: 'Niz-Hajo',
        state_id: 4,
    },
    {
        name: 'North Guwahati',
        state_id: 4,
    },
    {
        name: 'Numaligarh',
        state_id: 4,
    },
    {
        name: 'Palasbari',
        state_id: 4,
    },
    {
        name: 'Panchgram',
        state_id: 4,
    },
    {
        name: 'Pathsala',
        state_id: 4,
    },
    {
        name: 'Raha',
        state_id: 4,
    },
    {
        name: 'Rangapara',
        state_id: 4,
    },
    {
        name: 'Rangia',
        state_id: 4,
    },
    {
        name: 'Salakati',
        state_id: 4,
    },
    {
        name: 'Sapatgram',
        state_id: 4,
    },
    {
        name: 'Sarthebari',
        state_id: 4,
    },
    {
        name: 'Sarupathar',
        state_id: 4,
    },
    {
        name: 'Sarupathar Bengali',
        state_id: 4,
    },
    {
        name: 'Senchoagaon',
        state_id: 4,
    },
    {
        name: 'Sibsagar',
        state_id: 4,
    },
    {
        name: 'Silapathar',
        state_id: 4,
    },
    {
        name: 'Silchar',
        state_id: 4,
    },
    {
        name: 'Silchar Part-X',
        state_id: 4,
    },
    {
        name: 'Sonari',
        state_id: 4,
    },
    {
        name: 'Sorbhog',
        state_id: 4,
    },
    {
        name: 'Sualkuchi',
        state_id: 4,
    },
    {
        name: 'Tangla',
        state_id: 4,
    },
    {
        name: 'Tezpur',
        state_id: 4,
    },
    {
        name: 'Tihu',
        state_id: 4,
    },
    {
        name: 'Tinsukia',
        state_id: 4,
    },
    {
        name: 'Titabor',
        state_id: 4,
    },
    {
        name: 'Udalguri',
        state_id: 4,
    },
    {
        name: 'Umrangso',
        state_id: 4,
    },
    {
        name: 'Uttar Krishnapur Part-I',
        state_id: 4,
    },
    {
        name: 'Amarpur',
        state_id: 5,
    },
    {
        name: 'Ara',
        state_id: 5,
    },
    {
        name: 'Araria',
        state_id: 5,
    },
    {
        name: 'Areraj',
        state_id: 5,
    },
    {
        name: 'Asarganj',
        state_id: 5,
    },
    {
        name: 'Aurangabad',
        state_id: 5,
    },
    {
        name: 'Bagaha',
        state_id: 5,
    },
    {
        name: 'Bahadurganj',
        state_id: 5,
    },
    {
        name: 'Bairgania',
        state_id: 5,
    },
    {
        name: 'Bakhtiyarpur',
        state_id: 5,
    },
    {
        name: 'Banka',
        state_id: 5,
    },
    {
        name: 'Banmankhi',
        state_id: 5,
    },
    {
        name: 'Bar Bigha',
        state_id: 5,
    },
    {
        name: 'Barauli',
        state_id: 5,
    },
    {
        name: 'Barauni Oil Township',
        state_id: 5,
    },
    {
        name: 'Barh',
        state_id: 5,
    },
    {
        name: 'Barhiya',
        state_id: 5,
    },
    {
        name: 'Bariapur',
        state_id: 5,
    },
    {
        name: 'Baruni',
        state_id: 5,
    },
    {
        name: 'Begusarai',
        state_id: 5,
    },
    {
        name: 'Behea',
        state_id: 5,
    },
    {
        name: 'Belsand',
        state_id: 5,
    },
    {
        name: 'Bettiah',
        state_id: 5,
    },
    {
        name: 'Bhabua',
        state_id: 5,
    },
    {
        name: 'Bhagalpur',
        state_id: 5,
    },
    {
        name: 'Bhimnagar',
        state_id: 5,
    },
    {
        name: 'Bhojpur',
        state_id: 5,
    },
    {
        name: 'Bihar',
        state_id: 5,
    },
    {
        name: 'Bihar Sharif',
        state_id: 5,
    },
    {
        name: 'Bihariganj',
        state_id: 5,
    },
    {
        name: 'Bikramganj',
        state_id: 5,
    },
    {
        name: 'Birpur',
        state_id: 5,
    },
    {
        name: 'Bodh Gaya',
        state_id: 5,
    },
    {
        name: 'Buxar',
        state_id: 5,
    },
    {
        name: 'Chakia',
        state_id: 5,
    },
    {
        name: 'Chanpatia',
        state_id: 5,
    },
    {
        name: 'Chhapra',
        state_id: 5,
    },
    {
        name: 'Chhatapur',
        state_id: 5,
    },
    {
        name: 'Colgong',
        state_id: 5,
    },
    {
        name: 'Dalsingh Sarai',
        state_id: 5,
    },
    {
        name: 'Darbhanga',
        state_id: 5,
    },
    {
        name: 'Daudnagar',
        state_id: 5,
    },
    {
        name: 'Dehri',
        state_id: 5,
    },
    {
        name: 'Dhaka',
        state_id: 5,
    },
    {
        name: 'Dighwara',
        state_id: 5,
    },
    {
        name: 'Dinapur',
        state_id: 5,
    },
    {
        name: 'Dinapur Cantonment',
        state_id: 5,
    },
    {
        name: 'Dumra',
        state_id: 5,
    },
    {
        name: 'Dumraon',
        state_id: 5,
    },
    {
        name: 'Fatwa',
        state_id: 5,
    },
    {
        name: 'Forbesganj',
        state_id: 5,
    },
    {
        name: 'Gaya',
        state_id: 5,
    },
    {
        name: 'Gazipur',
        state_id: 5,
    },
    {
        name: 'Ghoghardiha',
        state_id: 5,
    },
    {
        name: 'Gogri Jamalpur',
        state_id: 5,
    },
    {
        name: 'Gopalganj',
        state_id: 5,
    },
    {
        name: 'Habibpur',
        state_id: 5,
    },
    {
        name: 'Hajipur',
        state_id: 5,
    },
    {
        name: 'Hasanpur',
        state_id: 5,
    },
    {
        name: 'Hazaribagh',
        state_id: 5,
    },
    {
        name: 'Hilsa',
        state_id: 5,
    },
    {
        name: 'Hisua',
        state_id: 5,
    },
    {
        name: 'Islampur',
        state_id: 5,
    },
    {
        name: 'Jagdispur',
        state_id: 5,
    },
    {
        name: 'Jahanabad',
        state_id: 5,
    },
    {
        name: 'Jamalpur',
        state_id: 5,
    },
    {
        name: 'Jamhaur',
        state_id: 5,
    },
    {
        name: 'Jamui',
        state_id: 5,
    },
    {
        name: 'Janakpur Road',
        state_id: 5,
    },
    {
        name: 'Janpur',
        state_id: 5,
    },
    {
        name: 'Jaynagar',
        state_id: 5,
    },
    {
        name: 'Jha Jha',
        state_id: 5,
    },
    {
        name: 'Jhanjharpur',
        state_id: 5,
    },
    {
        name: 'Jogbani',
        state_id: 5,
    },
    {
        name: 'Kanti',
        state_id: 5,
    },
    {
        name: 'Kasba',
        state_id: 5,
    },
    {
        name: 'Kataiya',
        state_id: 5,
    },
    {
        name: 'Katihar',
        state_id: 5,
    },
    {
        name: 'Khagaria',
        state_id: 5,
    },
    {
        name: 'Khagaul',
        state_id: 5,
    },
    {
        name: 'Kharagpur',
        state_id: 5,
    },
    {
        name: 'Khusrupur',
        state_id: 5,
    },
    {
        name: 'Kishanganj',
        state_id: 5,
    },
    {
        name: 'Koath',
        state_id: 5,
    },
    {
        name: 'Koilwar',
        state_id: 5,
    },
    {
        name: 'Lakhisarai',
        state_id: 5,
    },
    {
        name: 'Lalganj',
        state_id: 5,
    },
    {
        name: 'Lauthaha',
        state_id: 5,
    },
    {
        name: 'Madhepura',
        state_id: 5,
    },
    {
        name: 'Madhubani',
        state_id: 5,
    },
    {
        name: 'Maharajganj',
        state_id: 5,
    },
    {
        name: 'Mahnar Bazar',
        state_id: 5,
    },
    {
        name: 'Mairwa',
        state_id: 5,
    },
    {
        name: 'Makhdumpur',
        state_id: 5,
    },
    {
        name: 'Maner',
        state_id: 5,
    },
    {
        name: 'Manihari',
        state_id: 5,
    },
    {
        name: 'Marhaura',
        state_id: 5,
    },
    {
        name: 'Masaurhi',
        state_id: 5,
    },
    {
        name: 'Mirganj',
        state_id: 5,
    },
    {
        name: 'Mohiuddinagar',
        state_id: 5,
    },
    {
        name: 'Mokama',
        state_id: 5,
    },
    {
        name: 'Motihari',
        state_id: 5,
    },
    {
        name: 'Motipur',
        state_id: 5,
    },
    {
        name: 'Munger',
        state_id: 5,
    },
    {
        name: 'Murliganj',
        state_id: 5,
    },
    {
        name: 'Muzaffarpur',
        state_id: 5,
    },
    {
        name: 'Nabinagar',
        state_id: 5,
    },
    {
        name: 'Narkatiaganj',
        state_id: 5,
    },
    {
        name: 'Nasriganj',
        state_id: 5,
    },
    {
        name: 'Natwar',
        state_id: 5,
    },
    {
        name: 'Naugachhia',
        state_id: 5,
    },
    {
        name: 'Nawada',
        state_id: 5,
    },
    {
        name: 'Nirmali',
        state_id: 5,
    },
    {
        name: 'Nokha',
        state_id: 5,
    },
    {
        name: 'Paharpur',
        state_id: 5,
    },
    {
        name: 'Patna',
        state_id: 5,
    },
    {
        name: 'Phulwari',
        state_id: 5,
    },
    {
        name: 'Piro',
        state_id: 5,
    },
    {
        name: 'Purnia',
        state_id: 5,
    },
    {
        name: 'Pusa',
        state_id: 5,
    },
    {
        name: 'Rafiganj',
        state_id: 5,
    },
    {
        name: 'Raghunathpur',
        state_id: 5,
    },
    {
        name: 'Rajgir',
        state_id: 5,
    },
    {
        name: 'Ramnagar',
        state_id: 5,
    },
    {
        name: 'Raxaul',
        state_id: 5,
    },
    {
        name: 'Revelganj',
        state_id: 5,
    },
    {
        name: 'Rusera',
        state_id: 5,
    },
    {
        name: 'Sagauli',
        state_id: 5,
    },
    {
        name: 'Saharsa',
        state_id: 5,
    },
    {
        name: 'Samastipur',
        state_id: 5,
    },
    {
        name: 'Sasaram',
        state_id: 5,
    },
    {
        name: 'Shahpur',
        state_id: 5,
    },
    {
        name: 'Shaikhpura',
        state_id: 5,
    },
    {
        name: 'Sherghati',
        state_id: 5,
    },
    {
        name: 'Shivhar',
        state_id: 5,
    },
    {
        name: 'Silao',
        state_id: 5,
    },
    {
        name: 'Sitamarhi',
        state_id: 5,
    },
    {
        name: 'Siwan',
        state_id: 5,
    },
    {
        name: 'Sonepur',
        state_id: 5,
    },
    {
        name: 'Sultanganj',
        state_id: 5,
    },
    {
        name: 'Supaul',
        state_id: 5,
    },
    {
        name: 'Teghra',
        state_id: 5,
    },
    {
        name: 'Tekari',
        state_id: 5,
    },
    {
        name: 'Thakurganj',
        state_id: 5,
    },
    {
        name: 'Vaishali',
        state_id: 5,
    },
    {
        name: 'Waris Aliganj',
        state_id: 5,
    },
    {
        name: 'Chandigarh',
        state_id: 6,
    },
    {
        name: 'Ahiwara',
        state_id: 7,
    },
    {
        name: 'Akaltara',
        state_id: 7,
    },
    {
        name: 'Ambagarh Chauki',
        state_id: 7,
    },
    {
        name: 'Ambikapur',
        state_id: 7,
    },
    {
        name: 'Arang',
        state_id: 7,
    },
    {
        name: 'Bade Bacheli',
        state_id: 7,
    },
    {
        name: 'Bagbahara',
        state_id: 7,
    },
    {
        name: 'Baikunthpur',
        state_id: 7,
    },
    {
        name: 'Balod',
        state_id: 7,
    },
    {
        name: 'Baloda',
        state_id: 7,
    },
    {
        name: 'Baloda Bazar',
        state_id: 7,
    },
    {
        name: 'Banarsi',
        state_id: 7,
    },
    {
        name: 'Basna',
        state_id: 7,
    },
    {
        name: 'Bemetra',
        state_id: 7,
    },
    {
        name: 'Bhanpuri',
        state_id: 7,
    },
    {
        name: 'Bhatapara',
        state_id: 7,
    },
    {
        name: 'Bhatgaon',
        state_id: 7,
    },
    {
        name: 'Bhilai',
        state_id: 7,
    },
    {
        name: 'Bilaspur',
        state_id: 7,
    },
    {
        name: 'Bilha',
        state_id: 7,
    },
    {
        name: 'Birgaon',
        state_id: 7,
    },
    {
        name: 'Bodri',
        state_id: 7,
    },
    {
        name: 'Champa',
        state_id: 7,
    },
    {
        name: 'Charcha',
        state_id: 7,
    },
    {
        name: 'Charoda',
        state_id: 7,
    },
    {
        name: 'Chhuikhadan',
        state_id: 7,
    },
    {
        name: 'Chirmiri',
        state_id: 7,
    },
    {
        name: 'Dantewada',
        state_id: 7,
    },
    {
        name: 'Deori',
        state_id: 7,
    },
    {
        name: 'Dhamdha',
        state_id: 7,
    },
    {
        name: 'Dhamtari',
        state_id: 7,
    },
    {
        name: 'Dharamjaigarh',
        state_id: 7,
    },
    {
        name: 'Dipka',
        state_id: 7,
    },
    {
        name: 'Doman Hill Colliery',
        state_id: 7,
    },
    {
        name: 'Dongargaon',
        state_id: 7,
    },
    {
        name: 'Dongragarh',
        state_id: 7,
    },
    {
        name: 'Durg',
        state_id: 7,
    },
    {
        name: 'Frezarpur',
        state_id: 7,
    },
    {
        name: 'Gandai',
        state_id: 7,
    },
    {
        name: 'Gariaband',
        state_id: 7,
    },
    {
        name: 'Gaurela',
        state_id: 7,
    },
    {
        name: 'Gelhapani',
        state_id: 7,
    },
    {
        name: 'Gharghoda',
        state_id: 7,
    },
    {
        name: 'Gidam',
        state_id: 7,
    },
    {
        name: 'Gobra Nawapara',
        state_id: 7,
    },
    {
        name: 'Gogaon',
        state_id: 7,
    },
    {
        name: 'Hatkachora',
        state_id: 7,
    },
    {
        name: 'Jagdalpur',
        state_id: 7,
    },
    {
        name: 'Jamui',
        state_id: 7,
    },
    {
        name: 'Jashpurnagar',
        state_id: 7,
    },
    {
        name: 'Jhagrakhand',
        state_id: 7,
    },
    {
        name: 'Kanker',
        state_id: 7,
    },
    {
        name: 'Katghora',
        state_id: 7,
    },
    {
        name: 'Kawardha',
        state_id: 7,
    },
    {
        name: 'Khairagarh',
        state_id: 7,
    },
    {
        name: 'Khamhria',
        state_id: 7,
    },
    {
        name: 'Kharod',
        state_id: 7,
    },
    {
        name: 'Kharsia',
        state_id: 7,
    },
    {
        name: 'Khonga Pani',
        state_id: 7,
    },
    {
        name: 'Kirandu',
        state_id: 7,
    },
    {
        name: 'Kirandul',
        state_id: 7,
    },
    {
        name: 'Kohka',
        state_id: 7,
    },
    {
        name: 'Kondagaon',
        state_id: 7,
    },
    {
        name: 'Korba',
        state_id: 7,
    },
    {
        name: 'Korea',
        state_id: 7,
    },
    {
        name: 'Koria Block',
        state_id: 7,
    },
    {
        name: 'Kota',
        state_id: 7,
    },
    {
        name: 'Kumhari',
        state_id: 7,
    },
    {
        name: 'Kumud Katta',
        state_id: 7,
    },
    {
        name: 'Kurasia',
        state_id: 7,
    },
    {
        name: 'Kurud',
        state_id: 7,
    },
    {
        name: 'Lingiyadih',
        state_id: 7,
    },
    {
        name: 'Lormi',
        state_id: 7,
    },
    {
        name: 'Mahasamund',
        state_id: 7,
    },
    {
        name: 'Mahendragarh',
        state_id: 7,
    },
    {
        name: 'Mehmand',
        state_id: 7,
    },
    {
        name: 'Mongra',
        state_id: 7,
    },
    {
        name: 'Mowa',
        state_id: 7,
    },
    {
        name: 'Mungeli',
        state_id: 7,
    },
    {
        name: 'Nailajanjgir',
        state_id: 7,
    },
    {
        name: 'Namna Kalan',
        state_id: 7,
    },
    {
        name: 'Naya Baradwar',
        state_id: 7,
    },
    {
        name: 'Pandariya',
        state_id: 7,
    },
    {
        name: 'Patan',
        state_id: 7,
    },
    {
        name: 'Pathalgaon',
        state_id: 7,
    },
    {
        name: 'Pendra',
        state_id: 7,
    },
    {
        name: 'Phunderdihari',
        state_id: 7,
    },
    {
        name: 'Pithora',
        state_id: 7,
    },
    {
        name: 'Raigarh',
        state_id: 7,
    },
    {
        name: 'Raipur',
        state_id: 7,
    },
    {
        name: 'Rajgamar',
        state_id: 7,
    },
    {
        name: 'Rajhara',
        state_id: 7,
    },
    {
        name: 'Rajnandgaon',
        state_id: 7,
    },
    {
        name: 'Ramanuj Ganj',
        state_id: 7,
    },
    {
        name: 'Ratanpur',
        state_id: 7,
    },
    {
        name: 'Sakti',
        state_id: 7,
    },
    {
        name: 'Saraipali',
        state_id: 7,
    },
    {
        name: 'Sarajpur',
        state_id: 7,
    },
    {
        name: 'Sarangarh',
        state_id: 7,
    },
    {
        name: 'Shivrinarayan',
        state_id: 7,
    },
    {
        name: 'Simga',
        state_id: 7,
    },
    {
        name: 'Sirgiti',
        state_id: 7,
    },
    {
        name: 'Takhatpur',
        state_id: 7,
    },
    {
        name: 'Telgaon',
        state_id: 7,
    },
    {
        name: 'Tildanewra',
        state_id: 7,
    },
    {
        name: 'Urla',
        state_id: 7,
    },
    {
        name: 'Vishrampur',
        state_id: 7,
    },
    {
        name: 'Amli',
        state_id: 8,
    },
    {
        name: 'Silvassa',
        state_id: 8,
    },
    {
        name: 'Daman',
        state_id: 9,
    },
    {
        name: 'Diu',
        state_id: 9,
    },
    {
        name: 'Delhi',
        state_id: 10,
    },
    {
        name: 'New Delhi',
        state_id: 10,
    },
    {
        name: 'Aldona',
        state_id: 11,
    },
    {
        name: 'Altinho',
        state_id: 11,
    },
    {
        name: 'Aquem',
        state_id: 11,
    },
    {
        name: 'Arpora',
        state_id: 11,
    },
    {
        name: 'Bambolim',
        state_id: 11,
    },
    {
        name: 'Bandora',
        state_id: 11,
    },
    {
        name: 'Bardez',
        state_id: 11,
    },
    {
        name: 'Benaulim',
        state_id: 11,
    },
    {
        name: 'Betora',
        state_id: 11,
    },
    {
        name: 'Bicholim',
        state_id: 11,
    },
    {
        name: 'Calapor',
        state_id: 11,
    },
    {
        name: 'Candolim',
        state_id: 11,
    },
    {
        name: 'Caranzalem',
        state_id: 11,
    },
    {
        name: 'Carapur',
        state_id: 11,
    },
    {
        name: 'Chicalim',
        state_id: 11,
    },
    {
        name: 'Chimbel',
        state_id: 11,
    },
    {
        name: 'Chinchinim',
        state_id: 11,
    },
    {
        name: 'Colvale',
        state_id: 11,
    },
    {
        name: 'Corlim',
        state_id: 11,
    },
    {
        name: 'Cortalim',
        state_id: 11,
    },
    {
        name: 'Cuncolim',
        state_id: 11,
    },
    {
        name: 'Curchorem',
        state_id: 11,
    },
    {
        name: 'Curti',
        state_id: 11,
    },
    {
        name: 'Davorlim',
        state_id: 11,
    },
    {
        name: 'Dona Paula',
        state_id: 11,
    },
    {
        name: 'Goa',
        state_id: 11,
    },
    {
        name: 'Guirim',
        state_id: 11,
    },
    {
        name: 'Jua',
        state_id: 11,
    },
    {
        name: 'Kalangat',
        state_id: 11,
    },
    {
        name: 'Kankon',
        state_id: 11,
    },
    {
        name: 'Kundaim',
        state_id: 11,
    },
    {
        name: 'Loutulim',
        state_id: 11,
    },
    {
        name: 'Madgaon',
        state_id: 11,
    },
    {
        name: 'Mapusa',
        state_id: 11,
    },
    {
        name: 'Margao',
        state_id: 11,
    },
    {
        name: 'Margaon',
        state_id: 11,
    },
    {
        name: 'Miramar',
        state_id: 11,
    },
    {
        name: 'Morjim',
        state_id: 11,
    },
    {
        name: 'Mormugao',
        state_id: 11,
    },
    {
        name: 'Navelim',
        state_id: 11,
    },
    {
        name: 'Pale',
        state_id: 11,
    },
    {
        name: 'Panaji',
        state_id: 11,
    },
    {
        name: 'Parcem',
        state_id: 11,
    },
    {
        name: 'Parra',
        state_id: 11,
    },
    {
        name: 'Penha de Franca',
        state_id: 11,
    },
    {
        name: 'Pernem',
        state_id: 11,
    },
    {
        name: 'Pilerne',
        state_id: 11,
    },
    {
        name: 'Pissurlem',
        state_id: 11,
    },
    {
        name: 'Ponda',
        state_id: 11,
    },
    {
        name: 'Porvorim',
        state_id: 11,
    },
    {
        name: 'Quepem',
        state_id: 11,
    },
    {
        name: 'Queula',
        state_id: 11,
    },
    {
        name: 'Raia',
        state_id: 11,
    },
    {
        name: 'Reis Magos',
        state_id: 11,
    },
    {
        name: 'Salcette',
        state_id: 11,
    },
    {
        name: 'Saligao',
        state_id: 11,
    },
    {
        name: 'Sancoale',
        state_id: 11,
    },
    {
        name: 'Sanguem',
        state_id: 11,
    },
    {
        name: 'Sanquelim',
        state_id: 11,
    },
    {
        name: 'Sanvordem',
        state_id: 11,
    },
    {
        name: 'Sao Jose-de-Areal',
        state_id: 11,
    },
    {
        name: 'Sattari',
        state_id: 11,
    },
    {
        name: 'Serula',
        state_id: 11,
    },
    {
        name: 'Sinquerim',
        state_id: 11,
    },
    {
        name: 'Siolim',
        state_id: 11,
    },
    {
        name: 'Taleigao',
        state_id: 11,
    },
    {
        name: 'Tivim',
        state_id: 11,
    },
    {
        name: 'Valpoi',
        state_id: 11,
    },
    {
        name: 'Varca',
        state_id: 11,
    },
    {
        name: 'Vasco',
        state_id: 11,
    },
    {
        name: 'Verna',
        state_id: 11,
    },
    {
        name: 'Abrama',
        state_id: 12,
    },
    {
        name: 'Adalaj',
        state_id: 12,
    },
    {
        name: 'Adityana',
        state_id: 12,
    },
    {
        name: 'Advana',
        state_id: 12,
    },
    {
        name: 'Ahmedabad',
        state_id: 12,
    },
    {
        name: 'Ahwa',
        state_id: 12,
    },
    {
        name: 'Alang',
        state_id: 12,
    },
    {
        name: 'Ambaji',
        state_id: 12,
    },
    {
        name: 'Ambaliyasan',
        state_id: 12,
    },
    {
        name: 'Amod',
        state_id: 12,
    },
    {
        name: 'Amreli',
        state_id: 12,
    },
    {
        name: 'Amroli',
        state_id: 12,
    },
    {
        name: 'Anand',
        state_id: 12,
    },
    {
        name: 'Andada',
        state_id: 12,
    },
    {
        name: 'Anjar',
        state_id: 12,
    },
    {
        name: 'Anklav',
        state_id: 12,
    },
    {
        name: 'Ankleshwar',
        state_id: 12,
    },
    {
        name: 'Anklesvar INA',
        state_id: 12,
    },
    {
        name: 'Antaliya',
        state_id: 12,
    },
    {
        name: 'Arambhada',
        state_id: 12,
    },
    {
        name: 'Asarma',
        state_id: 12,
    },
    {
        name: 'Atul',
        state_id: 12,
    },
    {
        name: 'Babra',
        state_id: 12,
    },
    {
        name: 'Bag-e-Firdosh',
        state_id: 12,
    },
    {
        name: 'Bagasara',
        state_id: 12,
    },
    {
        name: 'Bahadarpar',
        state_id: 12,
    },
    {
        name: 'Bajipura',
        state_id: 12,
    },
    {
        name: 'Bajva',
        state_id: 12,
    },
    {
        name: 'Balasinor',
        state_id: 12,
    },
    {
        name: 'Banaskantha',
        state_id: 12,
    },
    {
        name: 'Bansda',
        state_id: 12,
    },
    {
        name: 'Bantva',
        state_id: 12,
    },
    {
        name: 'Bardoli',
        state_id: 12,
    },
    {
        name: 'Barwala',
        state_id: 12,
    },
    {
        name: 'Bayad',
        state_id: 12,
    },
    {
        name: 'Bechar',
        state_id: 12,
    },
    {
        name: 'Bedi',
        state_id: 12,
    },
    {
        name: 'Beyt',
        state_id: 12,
    },
    {
        name: 'Bhachau',
        state_id: 12,
    },
    {
        name: 'Bhanvad',
        state_id: 12,
    },
    {
        name: 'Bharuch',
        state_id: 12,
    },
    {
        name: 'Bharuch INA',
        state_id: 12,
    },
    {
        name: 'Bhavnagar',
        state_id: 12,
    },
    {
        name: 'Bhayavadar',
        state_id: 12,
    },
    {
        name: 'Bhestan',
        state_id: 12,
    },
    {
        name: 'Bhuj',
        state_id: 12,
    },
    {
        name: 'Bilimora',
        state_id: 12,
    },
    {
        name: 'Bilkha',
        state_id: 12,
    },
    {
        name: 'Billimora',
        state_id: 12,
    },
    {
        name: 'Bodakdev',
        state_id: 12,
    },
    {
        name: 'Bodeli',
        state_id: 12,
    },
    {
        name: 'Bopal',
        state_id: 12,
    },
    {
        name: 'Boria',
        state_id: 12,
    },
    {
        name: 'Boriavi',
        state_id: 12,
    },
    {
        name: 'Borsad',
        state_id: 12,
    },
    {
        name: 'Botad',
        state_id: 12,
    },
    {
        name: 'Cambay',
        state_id: 12,
    },
    {
        name: 'Chaklasi',
        state_id: 12,
    },
    {
        name: 'Chala',
        state_id: 12,
    },
    {
        name: 'Chalala',
        state_id: 12,
    },
    {
        name: 'Chalthan',
        state_id: 12,
    },
    {
        name: 'Chanasma',
        state_id: 12,
    },
    {
        name: 'Chandisar',
        state_id: 12,
    },
    {
        name: 'Chandkheda',
        state_id: 12,
    },
    {
        name: 'Chanod',
        state_id: 12,
    },
    {
        name: 'Chaya',
        state_id: 12,
    },
    {
        name: 'Chenpur',
        state_id: 12,
    },
    {
        name: 'Chhapi',
        state_id: 12,
    },
    {
        name: 'Chhaprabhatha',
        state_id: 12,
    },
    {
        name: 'Chhatral',
        state_id: 12,
    },
    {
        name: 'Chhota Udepur',
        state_id: 12,
    },
    {
        name: 'Chikhli',
        state_id: 12,
    },
    {
        name: 'Chiloda',
        state_id: 12,
    },
    {
        name: 'Chorvad',
        state_id: 12,
    },
    {
        name: 'Chotila',
        state_id: 12,
    },
    {
        name: 'Dabhoi',
        state_id: 12,
    },
    {
        name: 'Dadara',
        state_id: 12,
    },
    {
        name: 'Dahod',
        state_id: 12,
    },
    {
        name: 'Dakor',
        state_id: 12,
    },
    {
        name: 'Damnagar',
        state_id: 12,
    },
    {
        name: 'Deesa',
        state_id: 12,
    },
    {
        name: 'Delvada',
        state_id: 12,
    },
    {
        name: 'Devgadh Baria',
        state_id: 12,
    },
    {
        name: 'Devsar',
        state_id: 12,
    },
    {
        name: 'Dhandhuka',
        state_id: 12,
    },
    {
        name: 'Dhanera',
        state_id: 12,
    },
    {
        name: 'Dhangdhra',
        state_id: 12,
    },
    {
        name: 'Dhansura',
        state_id: 12,
    },
    {
        name: 'Dharampur',
        state_id: 12,
    },
    {
        name: 'Dhari',
        state_id: 12,
    },
    {
        name: 'Dhola',
        state_id: 12,
    },
    {
        name: 'Dholka',
        state_id: 12,
    },
    {
        name: 'Dholka Rural',
        state_id: 12,
    },
    {
        name: 'Dhoraji',
        state_id: 12,
    },
    {
        name: 'Dhrangadhra',
        state_id: 12,
    },
    {
        name: 'Dhrol',
        state_id: 12,
    },
    {
        name: 'Dhuva',
        state_id: 12,
    },
    {
        name: 'Dhuwaran',
        state_id: 12,
    },
    {
        name: 'Digvijaygram',
        state_id: 12,
    },
    {
        name: 'Disa',
        state_id: 12,
    },
    {
        name: 'Dungar',
        state_id: 12,
    },
    {
        name: 'Dungarpur',
        state_id: 12,
    },
    {
        name: 'Dungra',
        state_id: 12,
    },
    {
        name: 'Dwarka',
        state_id: 12,
    },
    {
        name: 'Flelanganj',
        state_id: 12,
    },
    {
        name: 'GSFC Complex',
        state_id: 12,
    },
    {
        name: 'Gadhda',
        state_id: 12,
    },
    {
        name: 'Gandevi',
        state_id: 12,
    },
    {
        name: 'Gandhidham',
        state_id: 12,
    },
    {
        name: 'Gandhinagar',
        state_id: 12,
    },
    {
        name: 'Gariadhar',
        state_id: 12,
    },
    {
        name: 'Ghogha',
        state_id: 12,
    },
    {
        name: 'Godhra',
        state_id: 12,
    },
    {
        name: 'Gondal',
        state_id: 12,
    },
    {
        name: 'Hajira INA',
        state_id: 12,
    },
    {
        name: 'Halol',
        state_id: 12,
    },
    {
        name: 'Halvad',
        state_id: 12,
    },
    {
        name: 'Hansot',
        state_id: 12,
    },
    {
        name: 'Harij',
        state_id: 12,
    },
    {
        name: 'Himatnagar',
        state_id: 12,
    },
    {
        name: 'Ichchhapor',
        state_id: 12,
    },
    {
        name: 'Idar',
        state_id: 12,
    },
    {
        name: 'Jafrabad',
        state_id: 12,
    },
    {
        name: 'Jalalpore',
        state_id: 12,
    },
    {
        name: 'Jambusar',
        state_id: 12,
    },
    {
        name: 'Jamjodhpur',
        state_id: 12,
    },
    {
        name: 'Jamnagar',
        state_id: 12,
    },
    {
        name: 'Jasdan',
        state_id: 12,
    },
    {
        name: 'Jawaharnagar',
        state_id: 12,
    },
    {
        name: 'Jetalsar',
        state_id: 12,
    },
    {
        name: 'Jetpur',
        state_id: 12,
    },
    {
        name: 'Jodiya',
        state_id: 12,
    },
    {
        name: 'Joshipura',
        state_id: 12,
    },
    {
        name: 'Junagadh',
        state_id: 12,
    },
    {
        name: 'Kadi',
        state_id: 12,
    },
    {
        name: 'Kadodara',
        state_id: 12,
    },
    {
        name: 'Kalavad',
        state_id: 12,
    },
    {
        name: 'Kali',
        state_id: 12,
    },
    {
        name: 'Kaliawadi',
        state_id: 12,
    },
    {
        name: 'Kalol',
        state_id: 12,
    },
    {
        name: 'Kalol INA',
        state_id: 12,
    },
    {
        name: 'Kandla',
        state_id: 12,
    },
    {
        name: 'Kanjari',
        state_id: 12,
    },
    {
        name: 'Kanodar',
        state_id: 12,
    },
    {
        name: 'Kapadwanj',
        state_id: 12,
    },
    {
        name: 'Karachiya',
        state_id: 12,
    },
    {
        name: 'Karamsad',
        state_id: 12,
    },
    {
        name: 'Karjan',
        state_id: 12,
    },
    {
        name: 'Kathial',
        state_id: 12,
    },
    {
        name: 'Kathor',
        state_id: 12,
    },
    {
        name: 'Katpar',
        state_id: 12,
    },
    {
        name: 'Kavant',
        state_id: 12,
    },
    {
        name: 'Keshod',
        state_id: 12,
    },
    {
        name: 'Kevadiya',
        state_id: 12,
    },
    {
        name: 'Khambhaliya',
        state_id: 12,
    },
    {
        name: 'Khambhat',
        state_id: 12,
    },
    {
        name: 'Kharaghoda',
        state_id: 12,
    },
    {
        name: 'Khed Brahma',
        state_id: 12,
    },
    {
        name: 'Kheda',
        state_id: 12,
    },
    {
        name: 'Kheralu',
        state_id: 12,
    },
    {
        name: 'Kodinar',
        state_id: 12,
    },
    {
        name: 'Kosamba',
        state_id: 12,
    },
    {
        name: 'Kundla',
        state_id: 12,
    },
    {
        name: 'Kutch',
        state_id: 12,
    },
    {
        name: 'Kutiyana',
        state_id: 12,
    },
    {
        name: 'Lakhtar',
        state_id: 12,
    },
    {
        name: 'Lalpur',
        state_id: 12,
    },
    {
        name: 'Lambha',
        state_id: 12,
    },
    {
        name: 'Lathi',
        state_id: 12,
    },
    {
        name: 'Limbdi',
        state_id: 12,
    },
    {
        name: 'Limla',
        state_id: 12,
    },
    {
        name: 'Lunavada',
        state_id: 12,
    },
    {
        name: 'Madhapar',
        state_id: 12,
    },
    {
        name: 'Maflipur',
        state_id: 12,
    },
    {
        name: 'Mahemdavad',
        state_id: 12,
    },
    {
        name: 'Mahudha',
        state_id: 12,
    },
    {
        name: 'Mahuva',
        state_id: 12,
    },
    {
        name: 'Mahuvar',
        state_id: 12,
    },
    {
        name: 'Makarba',
        state_id: 12,
    },
    {
        name: 'Makarpura',
        state_id: 12,
    },
    {
        name: 'Makassar',
        state_id: 12,
    },
    {
        name: 'Maktampur',
        state_id: 12,
    },
    {
        name: 'Malia',
        state_id: 12,
    },
    {
        name: 'Malpur',
        state_id: 12,
    },
    {
        name: 'Manavadar',
        state_id: 12,
    },
    {
        name: 'Mandal',
        state_id: 12,
    },
    {
        name: 'Mandvi',
        state_id: 12,
    },
    {
        name: 'Mangrol',
        state_id: 12,
    },
    {
        name: 'Mansa',
        state_id: 12,
    },
    {
        name: 'Meghraj',
        state_id: 12,
    },
    {
        name: 'Mehsana',
        state_id: 12,
    },
    {
        name: 'Mendarla',
        state_id: 12,
    },
    {
        name: 'Mithapur',
        state_id: 12,
    },
    {
        name: 'Modasa',
        state_id: 12,
    },
    {
        name: 'Mogravadi',
        state_id: 12,
    },
    {
        name: 'Morbi',
        state_id: 12,
    },
    {
        name: 'Morvi',
        state_id: 12,
    },
    {
        name: 'Mundra',
        state_id: 12,
    },
    {
        name: 'Nadiad',
        state_id: 12,
    },
    {
        name: 'Naliya',
        state_id: 12,
    },
    {
        name: 'Nanakvada',
        state_id: 12,
    },
    {
        name: 'Nandej',
        state_id: 12,
    },
    {
        name: 'Nandesari',
        state_id: 12,
    },
    {
        name: 'Nandesari INA',
        state_id: 12,
    },
    {
        name: 'Naroda',
        state_id: 12,
    },
    {
        name: 'Navagadh',
        state_id: 12,
    },
    {
        name: 'Navagam Ghed',
        state_id: 12,
    },
    {
        name: 'Navsari',
        state_id: 12,
    },
    {
        name: 'Ode',
        state_id: 12,
    },
    {
        name: 'Okaf',
        state_id: 12,
    },
    {
        name: 'Okha',
        state_id: 12,
    },
    {
        name: 'Olpad',
        state_id: 12,
    },
    {
        name: 'Paddhari',
        state_id: 12,
    },
    {
        name: 'Padra',
        state_id: 12,
    },
    {
        name: 'Palanpur',
        state_id: 12,
    },
    {
        name: 'Palej',
        state_id: 12,
    },
    {
        name: 'Pali',
        state_id: 12,
    },
    {
        name: 'Palitana',
        state_id: 12,
    },
    {
        name: 'Paliyad',
        state_id: 12,
    },
    {
        name: 'Pandesara',
        state_id: 12,
    },
    {
        name: 'Panoli',
        state_id: 12,
    },
    {
        name: 'Pardi',
        state_id: 12,
    },
    {
        name: 'Parnera',
        state_id: 12,
    },
    {
        name: 'Parvat',
        state_id: 12,
    },
    {
        name: 'Patan',
        state_id: 12,
    },
    {
        name: 'Patdi',
        state_id: 12,
    },
    {
        name: 'Petlad',
        state_id: 12,
    },
    {
        name: 'Petrochemical Complex',
        state_id: 12,
    },
    {
        name: 'Porbandar',
        state_id: 12,
    },
    {
        name: 'Prantij',
        state_id: 12,
    },
    {
        name: 'Radhanpur',
        state_id: 12,
    },
    {
        name: 'Raiya',
        state_id: 12,
    },
    {
        name: 'Rajkot',
        state_id: 12,
    },
    {
        name: 'Rajpipla',
        state_id: 12,
    },
    {
        name: 'Rajula',
        state_id: 12,
    },
    {
        name: 'Ramod',
        state_id: 12,
    },
    {
        name: 'Ranavav',
        state_id: 12,
    },
    {
        name: 'Ranoli',
        state_id: 12,
    },
    {
        name: 'Rapar',
        state_id: 12,
    },
    {
        name: 'Sahij',
        state_id: 12,
    },
    {
        name: 'Salaya',
        state_id: 12,
    },
    {
        name: 'Sanand',
        state_id: 12,
    },
    {
        name: 'Sankheda',
        state_id: 12,
    },
    {
        name: 'Santrampur',
        state_id: 12,
    },
    {
        name: 'Saribujrang',
        state_id: 12,
    },
    {
        name: 'Sarigam INA',
        state_id: 12,
    },
    {
        name: 'Sayan',
        state_id: 12,
    },
    {
        name: 'Sayla',
        state_id: 12,
    },
    {
        name: 'Shahpur',
        state_id: 12,
    },
    {
        name: 'Shahwadi',
        state_id: 12,
    },
    {
        name: 'Shapar',
        state_id: 12,
    },
    {
        name: 'Shivrajpur',
        state_id: 12,
    },
    {
        name: 'Siddhapur',
        state_id: 12,
    },
    {
        name: 'Sidhpur',
        state_id: 12,
    },
    {
        name: 'Sihor',
        state_id: 12,
    },
    {
        name: 'Sika',
        state_id: 12,
    },
    {
        name: 'Singarva',
        state_id: 12,
    },
    {
        name: 'Sinor',
        state_id: 12,
    },
    {
        name: 'Sojitra',
        state_id: 12,
    },
    {
        name: 'Sola',
        state_id: 12,
    },
    {
        name: 'Songadh',
        state_id: 12,
    },
    {
        name: 'Suraj Karadi',
        state_id: 12,
    },
    {
        name: 'Surat',
        state_id: 12,
    },
    {
        name: 'Surendranagar',
        state_id: 12,
    },
    {
        name: 'Talaja',
        state_id: 12,
    },
    {
        name: 'Talala',
        state_id: 12,
    },
    {
        name: 'Talod',
        state_id: 12,
    },
    {
        name: 'Tankara',
        state_id: 12,
    },
    {
        name: 'Tarsali',
        state_id: 12,
    },
    {
        name: 'Thangadh',
        state_id: 12,
    },
    {
        name: 'Tharad',
        state_id: 12,
    },
    {
        name: 'Thasra',
        state_id: 12,
    },
    {
        name: 'Udyognagar',
        state_id: 12,
    },
    {
        name: 'Ukai',
        state_id: 12,
    },
    {
        name: 'Umbergaon',
        state_id: 12,
    },
    {
        name: 'Umbergaon INA',
        state_id: 12,
    },
    {
        name: 'Umrala',
        state_id: 12,
    },
    {
        name: 'Umreth',
        state_id: 12,
    },
    {
        name: 'Un',
        state_id: 12,
    },
    {
        name: 'Una',
        state_id: 12,
    },
    {
        name: 'Unjha',
        state_id: 12,
    },
    {
        name: 'Upleta',
        state_id: 12,
    },
    {
        name: 'Utran',
        state_id: 12,
    },
    {
        name: 'Uttarsanda',
        state_id: 12,
    },
    {
        name: 'V.U. Nagar',
        state_id: 12,
    },
    {
        name: 'V.V. Nagar',
        state_id: 12,
    },
    {
        name: 'Vadia',
        state_id: 12,
    },
    {
        name: 'Vadla',
        state_id: 12,
    },
    {
        name: 'Vadnagar',
        state_id: 12,
    },
    {
        name: 'Vadodara',
        state_id: 12,
    },
    {
        name: 'Vaghodia INA',
        state_id: 12,
    },
    {
        name: 'Valbhipur',
        state_id: 12,
    },
    {
        name: 'Vallabh Vidyanagar',
        state_id: 12,
    },
    {
        name: 'Valsad',
        state_id: 12,
    },
    {
        name: 'Valsad INA',
        state_id: 12,
    },
    {
        name: 'Vanthali',
        state_id: 12,
    },
    {
        name: 'Vapi',
        state_id: 12,
    },
    {
        name: 'Vapi INA',
        state_id: 12,
    },
    {
        name: 'Vartej',
        state_id: 12,
    },
    {
        name: 'Vasad',
        state_id: 12,
    },
    {
        name: 'Vasna Borsad INA',
        state_id: 12,
    },
    {
        name: 'Vaso',
        state_id: 12,
    },
    {
        name: 'Veraval',
        state_id: 12,
    },
    {
        name: 'Vidyanagar',
        state_id: 12,
    },
    {
        name: 'Vijalpor',
        state_id: 12,
    },
    {
        name: 'Vijapur',
        state_id: 12,
    },
    {
        name: 'Vinchhiya',
        state_id: 12,
    },
    {
        name: 'Vinzol',
        state_id: 12,
    },
    {
        name: 'Virpur',
        state_id: 12,
    },
    {
        name: 'Visavadar',
        state_id: 12,
    },
    {
        name: 'Visnagar',
        state_id: 12,
    },
    {
        name: 'Vyara',
        state_id: 12,
    },
    {
        name: 'Wadhwan',
        state_id: 12,
    },
    {
        name: 'Waghai',
        state_id: 12,
    },
    {
        name: 'Waghodia',
        state_id: 12,
    },
    {
        name: 'Wankaner',
        state_id: 12,
    },
    {
        name: 'Zalod',
        state_id: 12,
    },
    {
        name: 'Ambala',
        state_id: 13,
    },
    {
        name: 'Ambala Cantt',
        state_id: 13,
    },
    {
        name: 'Asan Khurd',
        state_id: 13,
    },
    {
        name: 'Asandh',
        state_id: 13,
    },
    {
        name: 'Ateli',
        state_id: 13,
    },
    {
        name: 'Babiyal',
        state_id: 13,
    },
    {
        name: 'Bahadurgarh',
        state_id: 13,
    },
    {
        name: 'Ballabgarh',
        state_id: 13,
    },
    {
        name: 'Barwala',
        state_id: 13,
    },
    {
        name: 'Bawal',
        state_id: 13,
    },
    {
        name: 'Bawani Khera',
        state_id: 13,
    },
    {
        name: 'Beri',
        state_id: 13,
    },
    {
        name: 'Bhiwani',
        state_id: 13,
    },
    {
        name: 'Bilaspur',
        state_id: 13,
    },
    {
        name: 'Buria',
        state_id: 13,
    },
    {
        name: 'Charkhi Dadri',
        state_id: 13,
    },
    {
        name: 'Chhachhrauli',
        state_id: 13,
    },
    {
        name: 'Chita',
        state_id: 13,
    },
    {
        name: 'Dabwali',
        state_id: 13,
    },
    {
        name: 'Dharuhera',
        state_id: 13,
    },
    {
        name: 'Dundahera',
        state_id: 13,
    },
    {
        name: 'Ellenabad',
        state_id: 13,
    },
    {
        name: 'Farakhpur',
        state_id: 13,
    },
    {
        name: 'Faridabad',
        state_id: 13,
    },
    {
        name: 'Farrukhnagar',
        state_id: 13,
    },
    {
        name: 'Fatehabad',
        state_id: 13,
    },
    {
        name: 'Firozpur Jhirka',
        state_id: 13,
    },
    {
        name: 'Gannaur',
        state_id: 13,
    },
    {
        name: 'Ghraunda',
        state_id: 13,
    },
    {
        name: 'Gohana',
        state_id: 13,
    },
    {
        name: 'Gurgaon',
        state_id: 13,
    },
    {
        name: 'Haileymandi',
        state_id: 13,
    },
    {
        name: 'Hansi',
        state_id: 13,
    },
    {
        name: 'Hasanpur',
        state_id: 13,
    },
    {
        name: 'Hathin',
        state_id: 13,
    },
    {
        name: 'Hisar',
        state_id: 13,
    },
    {
        name: 'Hissar',
        state_id: 13,
    },
    {
        name: 'Hodal',
        state_id: 13,
    },
    {
        name: 'Indri',
        state_id: 13,
    },
    {
        name: 'Jagadhri',
        state_id: 13,
    },
    {
        name: 'Jakhal Mandi',
        state_id: 13,
    },
    {
        name: 'Jhajjar',
        state_id: 13,
    },
    {
        name: 'Jind',
        state_id: 13,
    },
    {
        name: 'Julana',
        state_id: 13,
    },
    {
        name: 'Kaithal',
        state_id: 13,
    },
    {
        name: 'Kalanur',
        state_id: 13,
    },
    {
        name: 'Kalanwali',
        state_id: 13,
    },
    {
        name: 'Kalayat',
        state_id: 13,
    },
    {
        name: 'Kalka',
        state_id: 13,
    },
    {
        name: 'Kanina',
        state_id: 13,
    },
    {
        name: 'Kansepur',
        state_id: 13,
    },
    {
        name: 'Kardhan',
        state_id: 13,
    },
    {
        name: 'Karnal',
        state_id: 13,
    },
    {
        name: 'Kharkhoda',
        state_id: 13,
    },
    {
        name: 'Kheri Sampla',
        state_id: 13,
    },
    {
        name: 'Kundli',
        state_id: 13,
    },
    {
        name: 'Kurukshetra',
        state_id: 13,
    },
    {
        name: 'Ladrawan',
        state_id: 13,
    },
    {
        name: 'Ladwa',
        state_id: 13,
    },
    {
        name: 'Loharu',
        state_id: 13,
    },
    {
        name: 'Maham',
        state_id: 13,
    },
    {
        name: 'Mahendragarh',
        state_id: 13,
    },
    {
        name: 'Mustafabad',
        state_id: 13,
    },
    {
        name: 'Nagai Chaudhry',
        state_id: 13,
    },
    {
        name: 'Narayangarh',
        state_id: 13,
    },
    {
        name: 'Narnaul',
        state_id: 13,
    },
    {
        name: 'Narnaund',
        state_id: 13,
    },
    {
        name: 'Narwana',
        state_id: 13,
    },
    {
        name: 'Nilokheri',
        state_id: 13,
    },
    {
        name: 'Nuh',
        state_id: 13,
    },
    {
        name: 'Palwal',
        state_id: 13,
    },
    {
        name: 'Panchkula',
        state_id: 13,
    },
    {
        name: 'Panipat',
        state_id: 13,
    },
    {
        name: 'Panipat Taraf Ansar',
        state_id: 13,
    },
    {
        name: 'Panipat Taraf Makhdum Zadgan',
        state_id: 13,
    },
    {
        name: 'Panipat Taraf Rajputan',
        state_id: 13,
    },
    {
        name: 'Pehowa',
        state_id: 13,
    },
    {
        name: 'Pinjaur',
        state_id: 13,
    },
    {
        name: 'Punahana',
        state_id: 13,
    },
    {
        name: 'Pundri',
        state_id: 13,
    },
    {
        name: 'Radaur',
        state_id: 13,
    },
    {
        name: 'Raipur Rani',
        state_id: 13,
    },
    {
        name: 'Rania',
        state_id: 13,
    },
    {
        name: 'Ratiya',
        state_id: 13,
    },
    {
        name: 'Rewari',
        state_id: 13,
    },
    {
        name: 'Rohtak',
        state_id: 13,
    },
    {
        name: 'Ropar',
        state_id: 13,
    },
    {
        name: 'Sadauri',
        state_id: 13,
    },
    {
        name: 'Safidon',
        state_id: 13,
    },
    {
        name: 'Samalkha',
        state_id: 13,
    },
    {
        name: 'Sankhol',
        state_id: 13,
    },
    {
        name: 'Sasauli',
        state_id: 13,
    },
    {
        name: 'Shahabad',
        state_id: 13,
    },
    {
        name: 'Sirsa',
        state_id: 13,
    },
    {
        name: 'Siwani',
        state_id: 13,
    },
    {
        name: 'Sohna',
        state_id: 13,
    },
    {
        name: 'Sonipat',
        state_id: 13,
    },
    {
        name: 'Sukhrali',
        state_id: 13,
    },
    {
        name: 'Taoru',
        state_id: 13,
    },
    {
        name: 'Taraori',
        state_id: 13,
    },
    {
        name: 'Tauru',
        state_id: 13,
    },
    {
        name: 'Thanesar',
        state_id: 13,
    },
    {
        name: 'Tilpat',
        state_id: 13,
    },
    {
        name: 'Tohana',
        state_id: 13,
    },
    {
        name: 'Tosham',
        state_id: 13,
    },
    {
        name: 'Uchana',
        state_id: 13,
    },
    {
        name: 'Uklana Mandi',
        state_id: 13,
    },
    {
        name: 'Uncha Siwana',
        state_id: 13,
    },
    {
        name: 'Yamunanagar',
        state_id: 13,
    },
    {
        name: 'Arki',
        state_id: 14,
    },
    {
        name: 'Baddi',
        state_id: 14,
    },
    {
        name: 'Bakloh',
        state_id: 14,
    },
    {
        name: 'Banjar',
        state_id: 14,
    },
    {
        name: 'Bhota',
        state_id: 14,
    },
    {
        name: 'Bhuntar',
        state_id: 14,
    },
    {
        name: 'Bilaspur',
        state_id: 14,
    },
    {
        name: 'Chamba',
        state_id: 14,
    },
    {
        name: 'Chaupal',
        state_id: 14,
    },
    {
        name: 'Chuari Khas',
        state_id: 14,
    },
    {
        name: 'Dagshai',
        state_id: 14,
    },
    {
        name: 'Dalhousie',
        state_id: 14,
    },
    {
        name: 'Dalhousie Cantonment',
        state_id: 14,
    },
    {
        name: 'Damtal',
        state_id: 14,
    },
    {
        name: 'Daulatpur',
        state_id: 14,
    },
    {
        name: 'Dera Gopipur',
        state_id: 14,
    },
    {
        name: 'Dhalli',
        state_id: 14,
    },
    {
        name: 'Dharamshala',
        state_id: 14,
    },
    {
        name: 'Gagret',
        state_id: 14,
    },
    {
        name: 'Ghamarwin',
        state_id: 14,
    },
    {
        name: 'Hamirpur',
        state_id: 14,
    },
    {
        name: 'Jawala Mukhi',
        state_id: 14,
    },
    {
        name: 'Jogindarnagar',
        state_id: 14,
    },
    {
        name: 'Jubbal',
        state_id: 14,
    },
    {
        name: 'Jutogh',
        state_id: 14,
    },
    {
        name: 'Kala Amb',
        state_id: 14,
    },
    {
        name: 'Kalpa',
        state_id: 14,
    },
    {
        name: 'Kangra',
        state_id: 14,
    },
    {
        name: 'Kasauli',
        state_id: 14,
    },
    {
        name: 'Kot Khai',
        state_id: 14,
    },
    {
        name: 'Kullu',
        state_id: 14,
    },
    {
        name: 'Kulu',
        state_id: 14,
    },
    {
        name: 'Manali',
        state_id: 14,
    },
    {
        name: 'Mandi',
        state_id: 14,
    },
    {
        name: 'Mant Khas',
        state_id: 14,
    },
    {
        name: 'Mehatpur Basdehra',
        state_id: 14,
    },
    {
        name: 'Nadaun',
        state_id: 14,
    },
    {
        name: 'Nagrota',
        state_id: 14,
    },
    {
        name: 'Nahan',
        state_id: 14,
    },
    {
        name: 'Naina Devi',
        state_id: 14,
    },
    {
        name: 'Nalagarh',
        state_id: 14,
    },
    {
        name: 'Narkanda',
        state_id: 14,
    },
    {
        name: 'Nurpur',
        state_id: 14,
    },
    {
        name: 'Palampur',
        state_id: 14,
    },
    {
        name: 'Pandoh',
        state_id: 14,
    },
    {
        name: 'Paonta Sahib',
        state_id: 14,
    },
    {
        name: 'Parwanoo',
        state_id: 14,
    },
    {
        name: 'Parwanu',
        state_id: 14,
    },
    {
        name: 'Rajgarh',
        state_id: 14,
    },
    {
        name: 'Rampur',
        state_id: 14,
    },
    {
        name: 'Rawalsar',
        state_id: 14,
    },
    {
        name: 'Rohru',
        state_id: 14,
    },
    {
        name: 'Sabathu',
        state_id: 14,
    },
    {
        name: 'Santokhgarh',
        state_id: 14,
    },
    {
        name: 'Sarahan',
        state_id: 14,
    },
    {
        name: 'Sarka Ghat',
        state_id: 14,
    },
    {
        name: 'Seoni',
        state_id: 14,
    },
    {
        name: 'Shimla',
        state_id: 14,
    },
    {
        name: 'Sirmaur',
        state_id: 14,
    },
    {
        name: 'Solan',
        state_id: 14,
    },
    {
        name: 'Solon',
        state_id: 14,
    },
    {
        name: 'Sundarnagar',
        state_id: 14,
    },
    {
        name: 'Sundernagar',
        state_id: 14,
    },
    {
        name: 'Talai',
        state_id: 14,
    },
    {
        name: 'Theog',
        state_id: 14,
    },
    {
        name: 'Tira Sujanpur',
        state_id: 14,
    },
    {
        name: 'Una',
        state_id: 14,
    },
    {
        name: 'Yol',
        state_id: 14,
    },
    {
        name: 'Achabal',
        state_id: 15,
    },
    {
        name: 'Akhnur',
        state_id: 15,
    },
    {
        name: 'Anantnag',
        state_id: 15,
    },
    {
        name: 'Arnia',
        state_id: 15,
    },
    {
        name: 'Awantipora',
        state_id: 15,
    },
    {
        name: 'Badami Bagh',
        state_id: 15,
    },
    {
        name: 'Bandipur',
        state_id: 15,
    },
    {
        name: 'Banihal',
        state_id: 15,
    },
    {
        name: 'Baramula',
        state_id: 15,
    },
    {
        name: 'Baramulla',
        state_id: 15,
    },
    {
        name: 'Bari Brahmana',
        state_id: 15,
    },
    {
        name: 'Bashohli',
        state_id: 15,
    },
    {
        name: 'Batote',
        state_id: 15,
    },
    {
        name: 'Bhaderwah',
        state_id: 15,
    },
    {
        name: 'Bijbiara',
        state_id: 15,
    },
    {
        name: 'Billawar',
        state_id: 15,
    },
    {
        name: 'Birwah',
        state_id: 15,
    },
    {
        name: 'Bishna',
        state_id: 15,
    },
    {
        name: 'Budgam',
        state_id: 15,
    },
    {
        name: 'Charari Sharief',
        state_id: 15,
    },
    {
        name: 'Chenani',
        state_id: 15,
    },
    {
        name: 'Doda',
        state_id: 15,
    },
    {
        name: 'Duru-Verinag',
        state_id: 15,
    },
    {
        name: 'Gandarbat',
        state_id: 15,
    },
    {
        name: 'Gho Manhasan',
        state_id: 15,
    },
    {
        name: 'Gorah Salathian',
        state_id: 15,
    },
    {
        name: 'Gulmarg',
        state_id: 15,
    },
    {
        name: 'Hajan',
        state_id: 15,
    },
    {
        name: 'Handwara',
        state_id: 15,
    },
    {
        name: 'Hiranagar',
        state_id: 15,
    },
    {
        name: 'Jammu',
        state_id: 15,
    },
    {
        name: 'Jammu Cantonment',
        state_id: 15,
    },
    {
        name: 'Jammu Tawi',
        state_id: 15,
    },
    {
        name: 'Jourian',
        state_id: 15,
    },
    {
        name: 'Kargil',
        state_id: 15,
    },
    {
        name: 'Kathua',
        state_id: 15,
    },
    {
        name: 'Katra',
        state_id: 15,
    },
    {
        name: 'Khan Sahib',
        state_id: 15,
    },
    {
        name: 'Khour',
        state_id: 15,
    },
    {
        name: 'Khrew',
        state_id: 15,
    },
    {
        name: 'Kishtwar',
        state_id: 15,
    },
    {
        name: 'Kud',
        state_id: 15,
    },
    {
        name: 'Kukernag',
        state_id: 15,
    },
    {
        name: 'Kulgam',
        state_id: 15,
    },
    {
        name: 'Kunzer',
        state_id: 15,
    },
    {
        name: 'Kupwara',
        state_id: 15,
    },
    {
        name: 'Lakhenpur',
        state_id: 15,
    },
    {
        name: 'Leh',
        state_id: 15,
    },
    {
        name: 'Magam',
        state_id: 15,
    },
    {
        name: 'Mattan',
        state_id: 15,
    },
    {
        name: 'Naushehra',
        state_id: 15,
    },
    {
        name: 'Pahalgam',
        state_id: 15,
    },
    {
        name: 'Pampore',
        state_id: 15,
    },
    {
        name: 'Parole',
        state_id: 15,
    },
    {
        name: 'Pattan',
        state_id: 15,
    },
    {
        name: 'Pulwama',
        state_id: 15,
    },
    {
        name: 'Punch',
        state_id: 15,
    },
    {
        name: 'Qazigund',
        state_id: 15,
    },
    {
        name: 'Rajauri',
        state_id: 15,
    },
    {
        name: 'Ramban',
        state_id: 15,
    },
    {
        name: 'Ramgarh',
        state_id: 15,
    },
    {
        name: 'Ramnagar',
        state_id: 15,
    },
    {
        name: 'Ranbirsingh Pora',
        state_id: 15,
    },
    {
        name: 'Reasi',
        state_id: 15,
    },
    {
        name: 'Rehambal',
        state_id: 15,
    },
    {
        name: 'Samba',
        state_id: 15,
    },
    {
        name: 'Shupiyan',
        state_id: 15,
    },
    {
        name: 'Sopur',
        state_id: 15,
    },
    {
        name: 'Srinagar',
        state_id: 15,
    },
    {
        name: 'Sumbal',
        state_id: 15,
    },
    {
        name: 'Sunderbani',
        state_id: 15,
    },
    {
        name: 'Talwara',
        state_id: 15,
    },
    {
        name: 'Thanamandi',
        state_id: 15,
    },
    {
        name: 'Tral',
        state_id: 15,
    },
    {
        name: 'Udhampur',
        state_id: 15,
    },
    {
        name: 'Uri',
        state_id: 15,
    },
    {
        name: 'Vijaypur',
        state_id: 15,
    },
    {
        name: 'Adityapur',
        state_id: 16,
    },
    {
        name: 'Amlabad',
        state_id: 16,
    },
    {
        name: 'Angarpathar',
        state_id: 16,
    },
    {
        name: 'Ara',
        state_id: 16,
    },
    {
        name: 'Babua Kalan',
        state_id: 16,
    },
    {
        name: 'Bagbahra',
        state_id: 16,
    },
    {
        name: 'Baliapur',
        state_id: 16,
    },
    {
        name: 'Baliari',
        state_id: 16,
    },
    {
        name: 'Balkundra',
        state_id: 16,
    },
    {
        name: 'Bandhgora',
        state_id: 16,
    },
    {
        name: 'Barajamda',
        state_id: 16,
    },
    {
        name: 'Barhi',
        state_id: 16,
    },
    {
        name: 'Barka Kana',
        state_id: 16,
    },
    {
        name: 'Barki Saraiya',
        state_id: 16,
    },
    {
        name: 'Barughutu',
        state_id: 16,
    },
    {
        name: 'Barwadih',
        state_id: 16,
    },
    {
        name: 'Basaria',
        state_id: 16,
    },
    {
        name: 'Basukinath',
        state_id: 16,
    },
    {
        name: 'Bermo',
        state_id: 16,
    },
    {
        name: 'Bhagatdih',
        state_id: 16,
    },
    {
        name: 'Bhaurah',
        state_id: 16,
    },
    {
        name: 'Bhojudih',
        state_id: 16,
    },
    {
        name: 'Bhuli',
        state_id: 16,
    },
    {
        name: 'Bokaro',
        state_id: 16,
    },
    {
        name: 'Borio Bazar',
        state_id: 16,
    },
    {
        name: 'Bundu',
        state_id: 16,
    },
    {
        name: 'Chaibasa',
        state_id: 16,
    },
    {
        name: 'Chaitudih',
        state_id: 16,
    },
    {
        name: 'Chakradharpur',
        state_id: 16,
    },
    {
        name: 'Chakulia',
        state_id: 16,
    },
    {
        name: 'Chandaur',
        state_id: 16,
    },
    {
        name: 'Chandil',
        state_id: 16,
    },
    {
        name: 'Chandrapura',
        state_id: 16,
    },
    {
        name: 'Chas',
        state_id: 16,
    },
    {
        name: 'Chatra',
        state_id: 16,
    },
    {
        name: 'Chhatatanr',
        state_id: 16,
    },
    {
        name: 'Chhotaputki',
        state_id: 16,
    },
    {
        name: 'Chiria',
        state_id: 16,
    },
    {
        name: 'Chirkunda',
        state_id: 16,
    },
    {
        name: 'Churi',
        state_id: 16,
    },
    {
        name: 'Daltenganj',
        state_id: 16,
    },
    {
        name: 'Danguwapasi',
        state_id: 16,
    },
    {
        name: 'Dari',
        state_id: 16,
    },
    {
        name: 'Deoghar',
        state_id: 16,
    },
    {
        name: 'Deorikalan',
        state_id: 16,
    },
    {
        name: 'Devghar',
        state_id: 16,
    },
    {
        name: 'Dhanbad',
        state_id: 16,
    },
    {
        name: 'Dhanwar',
        state_id: 16,
    },
    {
        name: 'Dhaunsar',
        state_id: 16,
    },
    {
        name: 'Dugda',
        state_id: 16,
    },
    {
        name: 'Dumarkunda',
        state_id: 16,
    },
    {
        name: 'Dumka',
        state_id: 16,
    },
    {
        name: 'Egarkunr',
        state_id: 16,
    },
    {
        name: 'Gadhra',
        state_id: 16,
    },
    {
        name: 'Garwa',
        state_id: 16,
    },
    {
        name: 'Ghatsila',
        state_id: 16,
    },
    {
        name: 'Ghorabandha',
        state_id: 16,
    },
    {
        name: 'Gidi',
        state_id: 16,
    },
    {
        name: 'Giridih',
        state_id: 16,
    },
    {
        name: 'Gobindpur',
        state_id: 16,
    },
    {
        name: 'Godda',
        state_id: 16,
    },
    {
        name: 'Godhar',
        state_id: 16,
    },
    {
        name: 'Golphalbari',
        state_id: 16,
    },
    {
        name: 'Gomoh',
        state_id: 16,
    },
    {
        name: 'Gua',
        state_id: 16,
    },
    {
        name: 'Gumia',
        state_id: 16,
    },
    {
        name: 'Gumla',
        state_id: 16,
    },
    {
        name: 'Haludbani',
        state_id: 16,
    },
    {
        name: 'Hazaribag',
        state_id: 16,
    },
    {
        name: 'Hesla',
        state_id: 16,
    },
    {
        name: 'Husainabad',
        state_id: 16,
    },
    {
        name: 'Isri',
        state_id: 16,
    },
    {
        name: 'Jadugora',
        state_id: 16,
    },
    {
        name: 'Jagannathpur',
        state_id: 16,
    },
    {
        name: 'Jamadoba',
        state_id: 16,
    },
    {
        name: 'Jamshedpur',
        state_id: 16,
    },
    {
        name: 'Jamtara',
        state_id: 16,
    },
    {
        name: 'Jarangdih',
        state_id: 16,
    },
    {
        name: 'Jaridih',
        state_id: 16,
    },
    {
        name: 'Jasidih',
        state_id: 16,
    },
    {
        name: 'Jena',
        state_id: 16,
    },
    {
        name: 'Jharia',
        state_id: 16,
    },
    {
        name: 'Jharia Khas',
        state_id: 16,
    },
    {
        name: 'Jhinkpani',
        state_id: 16,
    },
    {
        name: 'Jhumri Tilaiya',
        state_id: 16,
    },
    {
        name: 'Jorapokhar',
        state_id: 16,
    },
    {
        name: 'Jugsalai',
        state_id: 16,
    },
    {
        name: 'Kailudih',
        state_id: 16,
    },
    {
        name: 'Kalikapur',
        state_id: 16,
    },
    {
        name: 'Kandra',
        state_id: 16,
    },
    {
        name: 'Kanke',
        state_id: 16,
    },
    {
        name: 'Katras',
        state_id: 16,
    },
    {
        name: 'Kedla',
        state_id: 16,
    },
    {
        name: 'Kenduadih',
        state_id: 16,
    },
    {
        name: 'Kharkhari',
        state_id: 16,
    },
    {
        name: 'Kharsawan',
        state_id: 16,
    },
    {
        name: 'Khelari',
        state_id: 16,
    },
    {
        name: 'Khunti',
        state_id: 16,
    },
    {
        name: 'Kiri Buru',
        state_id: 16,
    },
    {
        name: 'Kiriburu',
        state_id: 16,
    },
    {
        name: 'Kodarma',
        state_id: 16,
    },
    {
        name: 'Kuju',
        state_id: 16,
    },
    {
        name: 'Kurpania',
        state_id: 16,
    },
    {
        name: 'Kustai',
        state_id: 16,
    },
    {
        name: 'Lakarka',
        state_id: 16,
    },
    {
        name: 'Lapanga',
        state_id: 16,
    },
    {
        name: 'Latehar',
        state_id: 16,
    },
    {
        name: 'Lohardaga',
        state_id: 16,
    },
    {
        name: 'Loiya',
        state_id: 16,
    },
    {
        name: 'Loyabad',
        state_id: 16,
    },
    {
        name: 'Madhupur',
        state_id: 16,
    },
    {
        name: 'Mahesh Mundi',
        state_id: 16,
    },
    {
        name: 'Maithon',
        state_id: 16,
    },
    {
        name: 'Malkera',
        state_id: 16,
    },
    {
        name: 'Mango',
        state_id: 16,
    },
    {
        name: 'Manoharpur',
        state_id: 16,
    },
    {
        name: 'Marma',
        state_id: 16,
    },
    {
        name: 'Meghahatuburu Forest village',
        state_id: 16,
    },
    {
        name: 'Mera',
        state_id: 16,
    },
    {
        name: 'Meru',
        state_id: 16,
    },
    {
        name: 'Mihijam',
        state_id: 16,
    },
    {
        name: 'Mugma',
        state_id: 16,
    },
    {
        name: 'Muri',
        state_id: 16,
    },
    {
        name: 'Mushabani',
        state_id: 16,
    },
    {
        name: 'Nagri Kalan',
        state_id: 16,
    },
    {
        name: 'Netarhat',
        state_id: 16,
    },
    {
        name: 'Nirsa',
        state_id: 16,
    },
    {
        name: 'Noamundi',
        state_id: 16,
    },
    {
        name: 'Okni',
        state_id: 16,
    },
    {
        name: 'Orla',
        state_id: 16,
    },
    {
        name: 'Pakaur',
        state_id: 16,
    },
    {
        name: 'Palamau',
        state_id: 16,
    },
    {
        name: 'Palawa',
        state_id: 16,
    },
    {
        name: 'Panchet',
        state_id: 16,
    },
    {
        name: 'Panrra',
        state_id: 16,
    },
    {
        name: 'Paratdih',
        state_id: 16,
    },
    {
        name: 'Pathardih',
        state_id: 16,
    },
    {
        name: 'Patratu',
        state_id: 16,
    },
    {
        name: 'Phusro',
        state_id: 16,
    },
    {
        name: 'Pondar Kanali',
        state_id: 16,
    },
    {
        name: 'Rajmahal',
        state_id: 16,
    },
    {
        name: 'Ramgarh',
        state_id: 16,
    },
    {
        name: 'Ranchi',
        state_id: 16,
    },
    {
        name: 'Ray',
        state_id: 16,
    },
    {
        name: 'Rehla',
        state_id: 16,
    },
    {
        name: 'Religara',
        state_id: 16,
    },
    {
        name: 'Rohraband',
        state_id: 16,
    },
    {
        name: 'Sahibganj',
        state_id: 16,
    },
    {
        name: 'Sahnidih',
        state_id: 16,
    },
    {
        name: 'Saraidhela',
        state_id: 16,
    },
    {
        name: 'Saraikela',
        state_id: 16,
    },
    {
        name: 'Sarjamda',
        state_id: 16,
    },
    {
        name: 'Saunda',
        state_id: 16,
    },
    {
        name: 'Sewai',
        state_id: 16,
    },
    {
        name: 'Sijhua',
        state_id: 16,
    },
    {
        name: 'Sijua',
        state_id: 16,
    },
    {
        name: 'Simdega',
        state_id: 16,
    },
    {
        name: 'Sindari',
        state_id: 16,
    },
    {
        name: 'Sinduria',
        state_id: 16,
    },
    {
        name: 'Sini',
        state_id: 16,
    },
    {
        name: 'Sirka',
        state_id: 16,
    },
    {
        name: 'Siuliban',
        state_id: 16,
    },
    {
        name: 'Surubera',
        state_id: 16,
    },
    {
        name: 'Tati',
        state_id: 16,
    },
    {
        name: 'Tenudam',
        state_id: 16,
    },
    {
        name: 'Tisra',
        state_id: 16,
    },
    {
        name: 'Topa',
        state_id: 16,
    },
    {
        name: 'Topchanchi',
        state_id: 16,
    },
    {
        name: 'Adityanagar',
        state_id: 17,
    },
    {
        name: 'Adityapatna',
        state_id: 17,
    },
    {
        name: 'Afzalpur',
        state_id: 17,
    },
    {
        name: 'Ajjampur',
        state_id: 17,
    },
    {
        name: 'Aland',
        state_id: 17,
    },
    {
        name: 'Almatti Sitimani',
        state_id: 17,
    },
    {
        name: 'Alnavar',
        state_id: 17,
    },
    {
        name: 'Alur',
        state_id: 17,
    },
    {
        name: 'Ambikanagara',
        state_id: 17,
    },
    {
        name: 'Anekal',
        state_id: 17,
    },
    {
        name: 'Ankola',
        state_id: 17,
    },
    {
        name: 'Annigeri',
        state_id: 17,
    },
    {
        name: 'Arkalgud',
        state_id: 17,
    },
    {
        name: 'Arsikere',
        state_id: 17,
    },
    {
        name: 'Athni',
        state_id: 17,
    },
    {
        name: 'Aurad',
        state_id: 17,
    },
    {
        name: 'Badagavettu',
        state_id: 17,
    },
    {
        name: 'Badami',
        state_id: 17,
    },
    {
        name: 'Bagalkot',
        state_id: 17,
    },
    {
        name: 'Bagepalli',
        state_id: 17,
    },
    {
        name: 'Bailhongal',
        state_id: 17,
    },
    {
        name: 'Baindur',
        state_id: 17,
    },
    {
        name: 'Bajala',
        state_id: 17,
    },
    {
        name: 'Bajpe',
        state_id: 17,
    },
    {
        name: 'Banavar',
        state_id: 17,
    },
    {
        name: 'Bangarapet',
        state_id: 17,
    },
    {
        name: 'Bankapura',
        state_id: 17,
    },
    {
        name: 'Bannur',
        state_id: 17,
    },
    {
        name: 'Bantwal',
        state_id: 17,
    },
    {
        name: 'Basavakalyan',
        state_id: 17,
    },
    {
        name: 'Basavana Bagevadi',
        state_id: 17,
    },
    {
        name: 'Belagula',
        state_id: 17,
    },
    {
        name: 'Belakavadiq',
        state_id: 17,
    },
    {
        name: 'Belgaum',
        state_id: 17,
    },
    {
        name: 'Belgaum Cantonment',
        state_id: 17,
    },
    {
        name: 'Bellary',
        state_id: 17,
    },
    {
        name: 'Belluru',
        state_id: 17,
    },
    {
        name: 'Beltangadi',
        state_id: 17,
    },
    {
        name: 'Belur',
        state_id: 17,
    },
    {
        name: 'Belvata',
        state_id: 17,
    },
    {
        name: 'Bengaluru',
        state_id: 17,
    },
    {
        name: 'Bhadravati',
        state_id: 17,
    },
    {
        name: 'Bhalki',
        state_id: 17,
    },
    {
        name: 'Bhatkal',
        state_id: 17,
    },
    {
        name: 'Bhimarayanagudi',
        state_id: 17,
    },
    {
        name: 'Bhogadi',
        state_id: 17,
    },
    {
        name: 'Bidar',
        state_id: 17,
    },
    {
        name: 'Bijapur',
        state_id: 17,
    },
    {
        name: 'Bilgi',
        state_id: 17,
    },
    {
        name: 'Birur',
        state_id: 17,
    },
    {
        name: 'Bommanahalli',
        state_id: 17,
    },
    {
        name: 'Bommasandra',
        state_id: 17,
    },
    {
        name: 'Byadgi',
        state_id: 17,
    },
    {
        name: 'Byatarayanapura',
        state_id: 17,
    },
    {
        name: 'Chakranagar Colony',
        state_id: 17,
    },
    {
        name: 'Challakere',
        state_id: 17,
    },
    {
        name: 'Chamrajnagar',
        state_id: 17,
    },
    {
        name: 'Chamundi Betta',
        state_id: 17,
    },
    {
        name: 'Channagiri',
        state_id: 17,
    },
    {
        name: 'Channapatna',
        state_id: 17,
    },
    {
        name: 'Channarayapatna',
        state_id: 17,
    },
    {
        name: 'Chickballapur',
        state_id: 17,
    },
    {
        name: 'Chik Ballapur',
        state_id: 17,
    },
    {
        name: 'Chikkaballapur',
        state_id: 17,
    },
    {
        name: 'Chikmagalur',
        state_id: 17,
    },
    {
        name: 'Chiknayakanhalli',
        state_id: 17,
    },
    {
        name: 'Chikodi',
        state_id: 17,
    },
    {
        name: 'Chincholi',
        state_id: 17,
    },
    {
        name: 'Chintamani',
        state_id: 17,
    },
    {
        name: 'Chitaguppa',
        state_id: 17,
    },
    {
        name: 'Chitapur',
        state_id: 17,
    },
    {
        name: 'Chitradurga',
        state_id: 17,
    },
    {
        name: 'Coorg',
        state_id: 17,
    },
    {
        name: 'Dandeli',
        state_id: 17,
    },
    {
        name: 'Dargajogihalli',
        state_id: 17,
    },
    {
        name: 'Dasarahalli',
        state_id: 17,
    },
    {
        name: 'Davangere',
        state_id: 17,
    },
    {
        name: 'Devadurga',
        state_id: 17,
    },
    {
        name: 'Devagiri',
        state_id: 17,
    },
    {
        name: 'Devanhalli',
        state_id: 17,
    },
    {
        name: 'Dharwar',
        state_id: 17,
    },
    {
        name: 'Dhupdal',
        state_id: 17,
    },
    {
        name: 'Dod Ballapur',
        state_id: 17,
    },
    {
        name: 'Donimalai',
        state_id: 17,
    },
    {
        name: 'Gadag',
        state_id: 17,
    },
    {
        name: 'Gajendragarh',
        state_id: 17,
    },
    {
        name: 'Ganeshgudi',
        state_id: 17,
    },
    {
        name: 'Gangawati',
        state_id: 17,
    },
    {
        name: 'Gangoli',
        state_id: 17,
    },
    {
        name: 'Gauribidanur',
        state_id: 17,
    },
    {
        name: 'Gokak',
        state_id: 17,
    },
    {
        name: 'Gokak Falls',
        state_id: 17,
    },
    {
        name: 'Gonikoppal',
        state_id: 17,
    },
    {
        name: 'Gorur',
        state_id: 17,
    },
    {
        name: 'Gottikere',
        state_id: 17,
    },
    {
        name: 'Gubbi',
        state_id: 17,
    },
    {
        name: 'Gudibanda',
        state_id: 17,
    },
    {
        name: 'Gulbarga',
        state_id: 17,
    },
    {
        name: 'Guledgudda',
        state_id: 17,
    },
    {
        name: 'Gundlupet',
        state_id: 17,
    },
    {
        name: 'Gurmatkal',
        state_id: 17,
    },
    {
        name: 'Haliyal',
        state_id: 17,
    },
    {
        name: 'Hangal',
        state_id: 17,
    },
    {
        name: 'Harihar',
        state_id: 17,
    },
    {
        name: 'Harpanahalli',
        state_id: 17,
    },
    {
        name: 'Hassan',
        state_id: 17,
    },
    {
        name: 'Hatti',
        state_id: 17,
    },
    {
        name: 'Hatti Gold Mines',
        state_id: 17,
    },
    {
        name: 'Haveri',
        state_id: 17,
    },
    {
        name: 'Hebbagodi',
        state_id: 17,
    },
    {
        name: 'Hebbalu',
        state_id: 17,
    },
    {
        name: 'Hebri',
        state_id: 17,
    },
    {
        name: 'Heggadadevanakote',
        state_id: 17,
    },
    {
        name: 'Herohalli',
        state_id: 17,
    },
    {
        name: 'Hidkal',
        state_id: 17,
    },
    {
        name: 'Hindalgi',
        state_id: 17,
    },
    {
        name: 'Hirekerur',
        state_id: 17,
    },
    {
        name: 'Hiriyur',
        state_id: 17,
    },
    {
        name: 'Holalkere',
        state_id: 17,
    },
    {
        name: 'Hole Narsipur',
        state_id: 17,
    },
    {
        name: 'Homnabad',
        state_id: 17,
    },
    {
        name: 'Honavar',
        state_id: 17,
    },
    {
        name: 'Honnali',
        state_id: 17,
    },
    {
        name: 'Hosakote',
        state_id: 17,
    },
    {
        name: 'Hosanagara',
        state_id: 17,
    },
    {
        name: 'Hosangadi',
        state_id: 17,
    },
    {
        name: 'Hosdurga',
        state_id: 17,
    },
    {
        name: 'Hoskote',
        state_id: 17,
    },
    {
        name: 'Hospet',
        state_id: 17,
    },
    {
        name: 'Hubli',
        state_id: 17,
    },
    {
        name: 'Hukeri',
        state_id: 17,
    },
    {
        name: 'Hunasagi',
        state_id: 17,
    },
    {
        name: 'Hunasamaranahalli',
        state_id: 17,
    },
    {
        name: 'Hungund',
        state_id: 17,
    },
    {
        name: 'Hunsur',
        state_id: 17,
    },
    {
        name: 'Huvina Hadagalli',
        state_id: 17,
    },
    {
        name: 'Ilkal',
        state_id: 17,
    },
    {
        name: 'Indi',
        state_id: 17,
    },
    {
        name: 'Jagalur',
        state_id: 17,
    },
    {
        name: 'Jamkhandi',
        state_id: 17,
    },
    {
        name: 'Jevargi',
        state_id: 17,
    },
    {
        name: 'Jog Falls',
        state_id: 17,
    },
    {
        name: 'Kabini Colony',
        state_id: 17,
    },
    {
        name: 'Kadur',
        state_id: 17,
    },
    {
        name: 'Kalghatgi',
        state_id: 17,
    },
    {
        name: 'Kamalapuram',
        state_id: 17,
    },
    {
        name: 'Kampli',
        state_id: 17,
    },
    {
        name: 'Kanakapura',
        state_id: 17,
    },
    {
        name: 'Kangrali BK',
        state_id: 17,
    },
    {
        name: 'Kangrali KH',
        state_id: 17,
    },
    {
        name: 'Kannur',
        state_id: 17,
    },
    {
        name: 'Karkala',
        state_id: 17,
    },
    {
        name: 'Karwar',
        state_id: 17,
    },
    {
        name: 'Kemminja',
        state_id: 17,
    },
    {
        name: 'Kengeri',
        state_id: 17,
    },
    {
        name: 'Kerur',
        state_id: 17,
    },
    {
        name: 'Khanapur',
        state_id: 17,
    },
    {
        name: 'Kodigenahalli',
        state_id: 17,
    },
    {
        name: 'Kodiyal',
        state_id: 17,
    },
    {
        name: 'Kodlipet',
        state_id: 17,
    },
    {
        name: 'Kolar',
        state_id: 17,
    },
    {
        name: 'Kollegal',
        state_id: 17,
    },
    {
        name: 'Konanakunte',
        state_id: 17,
    },
    {
        name: 'Konanur',
        state_id: 17,
    },
    {
        name: 'Konnur',
        state_id: 17,
    },
    {
        name: 'Koppa',
        state_id: 17,
    },
    {
        name: 'Koppal',
        state_id: 17,
    },
    {
        name: 'Koratagere',
        state_id: 17,
    },
    {
        name: 'Kotekara',
        state_id: 17,
    },
    {
        name: 'Kothnur',
        state_id: 17,
    },
    {
        name: 'Kotturu',
        state_id: 17,
    },
    {
        name: 'Krishnapura',
        state_id: 17,
    },
    {
        name: 'Krishnarajanagar',
        state_id: 17,
    },
    {
        name: 'Krishnarajapura',
        state_id: 17,
    },
    {
        name: 'Krishnarajasagara',
        state_id: 17,
    },
    {
        name: 'Krishnarajpet',
        state_id: 17,
    },
    {
        name: 'Kudchi',
        state_id: 17,
    },
    {
        name: 'Kudligi',
        state_id: 17,
    },
    {
        name: 'Kudremukh',
        state_id: 17,
    },
    {
        name: 'Kumsi',
        state_id: 17,
    },
    {
        name: 'Kumta',
        state_id: 17,
    },
    {
        name: 'Kundapura',
        state_id: 17,
    },
    {
        name: 'Kundgol',
        state_id: 17,
    },
    {
        name: 'Kunigal',
        state_id: 17,
    },
    {
        name: 'Kurgunta',
        state_id: 17,
    },
    {
        name: 'Kushalnagar',
        state_id: 17,
    },
    {
        name: 'Kushtagi',
        state_id: 17,
    },
    {
        name: 'Kyathanahalli',
        state_id: 17,
    },
    {
        name: 'Lakshmeshwar',
        state_id: 17,
    },
    {
        name: 'Lingsugur',
        state_id: 17,
    },
    {
        name: 'Londa',
        state_id: 17,
    },
    {
        name: 'Maddur',
        state_id: 17,
    },
    {
        name: 'Madhugiri',
        state_id: 17,
    },
    {
        name: 'Madikeri',
        state_id: 17,
    },
    {
        name: 'Magadi',
        state_id: 17,
    },
    {
        name: 'Magod Falls',
        state_id: 17,
    },
    {
        name: 'Mahadeswara Hills',
        state_id: 17,
    },
    {
        name: 'Mahadevapura',
        state_id: 17,
    },
    {
        name: 'Mahalingpur',
        state_id: 17,
    },
    {
        name: 'Maisuru',
        state_id: 17,
    },
    {
        name: 'Maisuru Cantonment',
        state_id: 17,
    },
    {
        name: 'Malavalli',
        state_id: 17,
    },
    {
        name: 'Mallar',
        state_id: 17,
    },
    {
        name: 'Malpe',
        state_id: 17,
    },
    {
        name: 'Malur',
        state_id: 17,
    },
    {
        name: 'Manchenahalli',
        state_id: 17,
    },
    {
        name: 'Mandya',
        state_id: 17,
    },
    {
        name: 'Mangalore',
        state_id: 17,
    },
    {
        name: 'Mangaluru',
        state_id: 17,
    },
    {
        name: 'Manipal',
        state_id: 17,
    },
    {
        name: 'Manvi',
        state_id: 17,
    },
    {
        name: 'Maski',
        state_id: 17,
    },
    {
        name: 'Mastikatte Colony',
        state_id: 17,
    },
    {
        name: 'Mayakonda',
        state_id: 17,
    },
    {
        name: 'Melukote',
        state_id: 17,
    },
    {
        name: 'Molakalmuru',
        state_id: 17,
    },
    {
        name: 'Mudalgi',
        state_id: 17,
    },
    {
        name: 'Mudbidri',
        state_id: 17,
    },
    {
        name: 'Muddebihal',
        state_id: 17,
    },
    {
        name: 'Mudgal',
        state_id: 17,
    },
    {
        name: 'Mudhol',
        state_id: 17,
    },
    {
        name: 'Mudigere',
        state_id: 17,
    },
    {
        name: 'Mudushedde',
        state_id: 17,
    },
    {
        name: 'Mulbagal',
        state_id: 17,
    },
    {
        name: 'Mulgund',
        state_id: 17,
    },
    {
        name: 'Mulki',
        state_id: 17,
    },
    {
        name: 'Mulur',
        state_id: 17,
    },
    {
        name: 'Mundargi',
        state_id: 17,
    },
    {
        name: 'Mundgod',
        state_id: 17,
    },
    {
        name: 'Munirabad',
        state_id: 17,
    },
    {
        name: 'Munnur',
        state_id: 17,
    },
    {
        name: 'Murudeshwara',
        state_id: 17,
    },
    {
        name: 'Mysore',
        state_id: 17,
    },
    {
        name: 'Nagamangala',
        state_id: 17,
    },
    {
        name: 'Nanjangud',
        state_id: 17,
    },
    {
        name: 'Naragund',
        state_id: 17,
    },
    {
        name: 'Narasimharajapura',
        state_id: 17,
    },
    {
        name: 'Naravi',
        state_id: 17,
    },
    {
        name: 'Narayanpur',
        state_id: 17,
    },
    {
        name: 'Naregal',
        state_id: 17,
    },
    {
        name: 'Navalgund',
        state_id: 17,
    },
    {
        name: 'Nelmangala',
        state_id: 17,
    },
    {
        name: 'Nipani',
        state_id: 17,
    },
    {
        name: 'Nitte',
        state_id: 17,
    },
    {
        name: 'Nyamati',
        state_id: 17,
    },
    {
        name: 'Padu',
        state_id: 17,
    },
    {
        name: 'Pandavapura',
        state_id: 17,
    },
    {
        name: 'Pattanagere',
        state_id: 17,
    },
    {
        name: 'Pavagada',
        state_id: 17,
    },
    {
        name: 'Piriyapatna',
        state_id: 17,
    },
    {
        name: 'Ponnampet',
        state_id: 17,
    },
    {
        name: 'Puttur',
        state_id: 17,
    },
    {
        name: 'Rabkavi',
        state_id: 17,
    },
    {
        name: 'Raichur',
        state_id: 17,
    },
    {
        name: 'Ramanagaram',
        state_id: 17,
    },
    {
        name: 'Ramdurg',
        state_id: 17,
    },
    {
        name: 'Ranibennur',
        state_id: 17,
    },
    {
        name: 'Raybag',
        state_id: 17,
    },
    {
        name: 'Robertsonpet',
        state_id: 17,
    },
    {
        name: 'Ron',
        state_id: 17,
    },
    {
        name: 'Sadalgi',
        state_id: 17,
    },
    {
        name: 'Sagar',
        state_id: 17,
    },
    {
        name: 'Sakleshpur',
        state_id: 17,
    },
    {
        name: 'Saligram',
        state_id: 17,
    },
    {
        name: 'Sandur',
        state_id: 17,
    },
    {
        name: 'Sanivarsante',
        state_id: 17,
    },
    {
        name: 'Sankeshwar',
        state_id: 17,
    },
    {
        name: 'Sargur',
        state_id: 17,
    },
    {
        name: 'Sathyamangala',
        state_id: 17,
    },
    {
        name: 'Saundatti Yellamma',
        state_id: 17,
    },
    {
        name: 'Savanur',
        state_id: 17,
    },
    {
        name: 'Sedam',
        state_id: 17,
    },
    {
        name: 'Shahabad',
        state_id: 17,
    },
    {
        name: 'Shahabad A.C.C.',
        state_id: 17,
    },
    {
        name: 'Shahapur',
        state_id: 17,
    },
    {
        name: 'Shahpur',
        state_id: 17,
    },
    {
        name: 'Shaktinagar',
        state_id: 17,
    },
    {
        name: 'Shiggaon',
        state_id: 17,
    },
    {
        name: 'Shikarpur',
        state_id: 17,
    },
    {
        name: 'Shimoga',
        state_id: 17,
    },
    {
        name: 'Shirhatti',
        state_id: 17,
    },
    {
        name: 'Shorapur',
        state_id: 17,
    },
    {
        name: 'Shravanabelagola',
        state_id: 17,
    },
    {
        name: 'Shrirangapattana',
        state_id: 17,
    },
    {
        name: 'Siddapur',
        state_id: 17,
    },
    {
        name: 'Sidlaghatta',
        state_id: 17,
    },
    {
        name: 'Sindgi',
        state_id: 17,
    },
    {
        name: 'Sindhnur',
        state_id: 17,
    },
    {
        name: 'Sira',
        state_id: 17,
    },
    {
        name: 'Sirakoppa',
        state_id: 17,
    },
    {
        name: 'Sirsi',
        state_id: 17,
    },
    {
        name: 'Siruguppa',
        state_id: 17,
    },
    {
        name: 'Someshwar',
        state_id: 17,
    },
    {
        name: 'Somvarpet',
        state_id: 17,
    },
    {
        name: 'Sorab',
        state_id: 17,
    },
    {
        name: 'Sringeri',
        state_id: 17,
    },
    {
        name: 'Srinivaspur',
        state_id: 17,
    },
    {
        name: 'Sulya',
        state_id: 17,
    },
    {
        name: 'Suntikopa',
        state_id: 17,
    },
    {
        name: 'Talikota',
        state_id: 17,
    },
    {
        name: 'Tarikera',
        state_id: 17,
    },
    {
        name: 'Tekkalakota',
        state_id: 17,
    },
    {
        name: 'Terdal',
        state_id: 17,
    },
    {
        name: 'Thokur',
        state_id: 17,
    },
    {
        name: 'Thumbe',
        state_id: 17,
    },
    {
        name: 'Tiptur',
        state_id: 17,
    },
    {
        name: 'Tirthahalli',
        state_id: 17,
    },
    {
        name: 'Tirumakudal Narsipur',
        state_id: 17,
    },
    {
        name: 'Tonse',
        state_id: 17,
    },
    {
        name: 'Tumkur',
        state_id: 17,
    },
    {
        name: 'Turuvekere',
        state_id: 17,
    },
    {
        name: 'Udupi',
        state_id: 17,
    },
    {
        name: 'Ullal',
        state_id: 17,
    },
    {
        name: 'Uttarahalli',
        state_id: 17,
    },
    {
        name: 'Venkatapura',
        state_id: 17,
    },
    {
        name: 'Vijayapura',
        state_id: 17,
    },
    {
        name: 'Virarajendrapet',
        state_id: 17,
    },
    {
        name: 'Wadi',
        state_id: 17,
    },
    {
        name: 'Wadi A.C.C.',
        state_id: 17,
    },
    {
        name: 'Yadgir',
        state_id: 17,
    },
    {
        name: 'Yelahanka',
        state_id: 17,
    },
    {
        name: 'Yelandur',
        state_id: 17,
    },
    {
        name: 'Yelbarga',
        state_id: 17,
    },
    {
        name: 'Yellapur',
        state_id: 17,
    },
    {
        name: 'Yenagudde',
        state_id: 17,
    },
    {
        name: 'Adimaly',
        state_id: 19,
    },
    {
        name: 'Adoor',
        state_id: 19,
    },
    {
        name: 'Adur',
        state_id: 19,
    },
    {
        name: 'Akathiyur',
        state_id: 19,
    },
    {
        name: 'Alangad',
        state_id: 19,
    },
    {
        name: 'Alappuzha',
        state_id: 19,
    },
    {
        name: 'Aluva',
        state_id: 19,
    },
    {
        name: 'Ancharakandy',
        state_id: 19,
    },
    {
        name: 'Angamaly',
        state_id: 19,
    },
    {
        name: 'Aroor',
        state_id: 19,
    },
    {
        name: 'Arukutti',
        state_id: 19,
    },
    {
        name: 'Attingal',
        state_id: 19,
    },
    {
        name: 'Avinissery',
        state_id: 19,
    },
    {
        name: 'Azhikode North',
        state_id: 19,
    },
    {
        name: 'Azhikode South',
        state_id: 19,
    },
    {
        name: 'Azhiyur',
        state_id: 19,
    },
    {
        name: 'Balussery',
        state_id: 19,
    },
    {
        name: 'Bangramanjeshwar',
        state_id: 19,
    },
    {
        name: 'Beypur',
        state_id: 19,
    },
    {
        name: 'Brahmakulam',
        state_id: 19,
    },
    {
        name: 'Chala',
        state_id: 19,
    },
    {
        name: 'Chalakudi',
        state_id: 19,
    },
    {
        name: 'Changanacheri',
        state_id: 19,
    },
    {
        name: 'Chauwara',
        state_id: 19,
    },
    {
        name: 'Chavakkad',
        state_id: 19,
    },
    {
        name: 'Chelakkara',
        state_id: 19,
    },
    {
        name: 'Chelora',
        state_id: 19,
    },
    {
        name: 'Chendamangalam',
        state_id: 19,
    },
    {
        name: 'Chengamanad',
        state_id: 19,
    },
    {
        name: 'Chengannur',
        state_id: 19,
    },
    {
        name: 'Cheranallur',
        state_id: 19,
    },
    {
        name: 'Cheriyakadavu',
        state_id: 19,
    },
    {
        name: 'Cherthala',
        state_id: 19,
    },
    {
        name: 'Cherukunnu',
        state_id: 19,
    },
    {
        name: 'Cheruthazham',
        state_id: 19,
    },
    {
        name: 'Cheruvannur',
        state_id: 19,
    },
    {
        name: 'Cheruvattur',
        state_id: 19,
    },
    {
        name: 'Chevvur',
        state_id: 19,
    },
    {
        name: 'Chirakkal',
        state_id: 19,
    },
    {
        name: 'Chittur',
        state_id: 19,
    },
    {
        name: 'Chockli',
        state_id: 19,
    },
    {
        name: 'Churnikkara',
        state_id: 19,
    },
    {
        name: 'Dharmadam',
        state_id: 19,
    },
    {
        name: 'Edappal',
        state_id: 19,
    },
    {
        name: 'Edathala',
        state_id: 19,
    },
    {
        name: 'Elayavur',
        state_id: 19,
    },
    {
        name: 'Elur',
        state_id: 19,
    },
    {
        name: 'Eranholi',
        state_id: 19,
    },
    {
        name: 'Erattupetta',
        state_id: 19,
    },
    {
        name: 'Ernakulam',
        state_id: 19,
    },
    {
        name: 'Eruvatti',
        state_id: 19,
    },
    {
        name: 'Ettumanoor',
        state_id: 19,
    },
    {
        name: 'Feroke',
        state_id: 19,
    },
    {
        name: 'Guruvayur',
        state_id: 19,
    },
    {
        name: 'Haripad',
        state_id: 19,
    },
    {
        name: 'Hosabettu',
        state_id: 19,
    },
    {
        name: 'Idukki',
        state_id: 19,
    },
    {
        name: 'Iringaprom',
        state_id: 19,
    },
    {
        name: 'Irinjalakuda',
        state_id: 19,
    },
    {
        name: 'Iriveri',
        state_id: 19,
    },
    {
        name: 'Kadachira',
        state_id: 19,
    },
    {
        name: 'Kadalundi',
        state_id: 19,
    },
    {
        name: 'Kadamakkudy',
        state_id: 19,
    },
    {
        name: 'Kadirur',
        state_id: 19,
    },
    {
        name: 'Kadungallur',
        state_id: 19,
    },
    {
        name: 'Kakkodi',
        state_id: 19,
    },
    {
        name: 'Kalady',
        state_id: 19,
    },
    {
        name: 'Kalamassery',
        state_id: 19,
    },
    {
        name: 'Kalliasseri',
        state_id: 19,
    },
    {
        name: 'Kalpetta',
        state_id: 19,
    },
    {
        name: 'Kanhangad',
        state_id: 19,
    },
    {
        name: 'Kanhirode',
        state_id: 19,
    },
    {
        name: 'Kanjikkuzhi',
        state_id: 19,
    },
    {
        name: 'Kanjikode',
        state_id: 19,
    },
    {
        name: 'Kanjirappalli',
        state_id: 19,
    },
    {
        name: 'Kannadiparamba',
        state_id: 19,
    },
    {
        name: 'Kannangad',
        state_id: 19,
    },
    {
        name: 'Kannapuram',
        state_id: 19,
    },
    {
        name: 'Kannur',
        state_id: 19,
    },
    {
        name: 'Kannur Cantonment',
        state_id: 19,
    },
    {
        name: 'Karunagappally',
        state_id: 19,
    },
    {
        name: 'Karuvamyhuruthy',
        state_id: 19,
    },
    {
        name: 'Kasaragod',
        state_id: 19,
    },
    {
        name: 'Kasargod',
        state_id: 19,
    },
    {
        name: 'Kattappana',
        state_id: 19,
    },
    {
        name: 'Kayamkulam',
        state_id: 19,
    },
    {
        name: 'Kedamangalam',
        state_id: 19,
    },
    {
        name: 'Kochi',
        state_id: 19,
    },
    {
        name: 'Kodamthuruthu',
        state_id: 19,
    },
    {
        name: 'Kodungallur',
        state_id: 19,
    },
    {
        name: 'Koduvally',
        state_id: 19,
    },
    {
        name: 'Koduvayur',
        state_id: 19,
    },
    {
        name: 'Kokkothamangalam',
        state_id: 19,
    },
    {
        name: 'Kolazhy',
        state_id: 19,
    },
    {
        name: 'Kollam',
        state_id: 19,
    },
    {
        name: 'Komalapuram',
        state_id: 19,
    },
    {
        name: 'Koothattukulam',
        state_id: 19,
    },
    {
        name: 'Koratty',
        state_id: 19,
    },
    {
        name: 'Kothamangalam',
        state_id: 19,
    },
    {
        name: 'Kottarakkara',
        state_id: 19,
    },
    {
        name: 'Kottayam',
        state_id: 19,
    },
    {
        name: 'Kottayam Malabar',
        state_id: 19,
    },
    {
        name: 'Kottuvally',
        state_id: 19,
    },
    {
        name: 'Koyilandi',
        state_id: 19,
    },
    {
        name: 'Kozhikode',
        state_id: 19,
    },
    {
        name: 'Kudappanakunnu',
        state_id: 19,
    },
    {
        name: 'Kudlu',
        state_id: 19,
    },
    {
        name: 'Kumarakom',
        state_id: 19,
    },
    {
        name: 'Kumily',
        state_id: 19,
    },
    {
        name: 'Kunnamangalam',
        state_id: 19,
    },
    {
        name: 'Kunnamkulam',
        state_id: 19,
    },
    {
        name: 'Kurikkad',
        state_id: 19,
    },
    {
        name: 'Kurkkanchery',
        state_id: 19,
    },
    {
        name: 'Kuthuparamba',
        state_id: 19,
    },
    {
        name: 'Kuttakulam',
        state_id: 19,
    },
    {
        name: 'Kuttikkattur',
        state_id: 19,
    },
    {
        name: 'Kuttur',
        state_id: 19,
    },
    {
        name: 'Malappuram',
        state_id: 19,
    },
    {
        name: 'Mallappally',
        state_id: 19,
    },
    {
        name: 'Manjeri',
        state_id: 19,
    },
    {
        name: 'Manjeshwar',
        state_id: 19,
    },
    {
        name: 'Mannancherry',
        state_id: 19,
    },
    {
        name: 'Mannar',
        state_id: 19,
    },
    {
        name: 'Mannarakkat',
        state_id: 19,
    },
    {
        name: 'Maradu',
        state_id: 19,
    },
    {
        name: 'Marathakkara',
        state_id: 19,
    },
    {
        name: 'Marutharod',
        state_id: 19,
    },
    {
        name: 'Mattannur',
        state_id: 19,
    },
    {
        name: 'Mavelikara',
        state_id: 19,
    },
    {
        name: 'Mavilayi',
        state_id: 19,
    },
    {
        name: 'Mavur',
        state_id: 19,
    },
    {
        name: 'Methala',
        state_id: 19,
    },
    {
        name: 'Muhamma',
        state_id: 19,
    },
    {
        name: 'Mulavukad',
        state_id: 19,
    },
    {
        name: 'Mundakayam',
        state_id: 19,
    },
    {
        name: 'Munderi',
        state_id: 19,
    },
    {
        name: 'Munnar',
        state_id: 19,
    },
    {
        name: 'Muthakunnam',
        state_id: 19,
    },
    {
        name: 'Muvattupuzha',
        state_id: 19,
    },
    {
        name: 'Muzhappilangad',
        state_id: 19,
    },
    {
        name: 'Nadapuram',
        state_id: 19,
    },
    {
        name: 'Nadathara',
        state_id: 19,
    },
    {
        name: 'Narath',
        state_id: 19,
    },
    {
        name: 'Nattakam',
        state_id: 19,
    },
    {
        name: 'Nedumangad',
        state_id: 19,
    },
    {
        name: 'Nenmenikkara',
        state_id: 19,
    },
    {
        name: 'New Mahe',
        state_id: 19,
    },
    {
        name: 'Neyyattinkara',
        state_id: 19,
    },
    {
        name: 'Nileshwar',
        state_id: 19,
    },
    {
        name: 'Olavanna',
        state_id: 19,
    },
    {
        name: 'Ottapalam',
        state_id: 19,
    },
    {
        name: 'Ottappalam',
        state_id: 19,
    },
    {
        name: 'Paduvilayi',
        state_id: 19,
    },
    {
        name: 'Palai',
        state_id: 19,
    },
    {
        name: 'Palakkad',
        state_id: 19,
    },
    {
        name: 'Palayad',
        state_id: 19,
    },
    {
        name: 'Palissery',
        state_id: 19,
    },
    {
        name: 'Pallikkunnu',
        state_id: 19,
    },
    {
        name: 'Paluvai',
        state_id: 19,
    },
    {
        name: 'Panniyannur',
        state_id: 19,
    },
    {
        name: 'Pantalam',
        state_id: 19,
    },
    {
        name: 'Panthiramkavu',
        state_id: 19,
    },
    {
        name: 'Panur',
        state_id: 19,
    },
    {
        name: 'Pappinisseri',
        state_id: 19,
    },
    {
        name: 'Parassala',
        state_id: 19,
    },
    {
        name: 'Paravur',
        state_id: 19,
    },
    {
        name: 'Pathanamthitta',
        state_id: 19,
    },
    {
        name: 'Pathanapuram',
        state_id: 19,
    },
    {
        name: 'Pathiriyad',
        state_id: 19,
    },
    {
        name: 'Pattambi',
        state_id: 19,
    },
    {
        name: 'Pattiom',
        state_id: 19,
    },
    {
        name: 'Pavaratty',
        state_id: 19,
    },
    {
        name: 'Payyannur',
        state_id: 19,
    },
    {
        name: 'Peermade',
        state_id: 19,
    },
    {
        name: 'Perakam',
        state_id: 19,
    },
    {
        name: 'Peralasseri',
        state_id: 19,
    },
    {
        name: 'Peringathur',
        state_id: 19,
    },
    {
        name: 'Perinthalmanna',
        state_id: 19,
    },
    {
        name: 'Perole',
        state_id: 19,
    },
    {
        name: 'Perumanna',
        state_id: 19,
    },
    {
        name: 'Perumbaikadu',
        state_id: 19,
    },
    {
        name: 'Perumbavoor',
        state_id: 19,
    },
    {
        name: 'Pinarayi',
        state_id: 19,
    },
    {
        name: 'Piravam',
        state_id: 19,
    },
    {
        name: 'Ponnani',
        state_id: 19,
    },
    {
        name: 'Pottore',
        state_id: 19,
    },
    {
        name: 'Pudukad',
        state_id: 19,
    },
    {
        name: 'Punalur',
        state_id: 19,
    },
    {
        name: 'Puranattukara',
        state_id: 19,
    },
    {
        name: 'Puthunagaram',
        state_id: 19,
    },
    {
        name: 'Puthuppariyaram',
        state_id: 19,
    },
    {
        name: 'Puzhathi',
        state_id: 19,
    },
    {
        name: 'Ramanattukara',
        state_id: 19,
    },
    {
        name: 'Shoranur',
        state_id: 19,
    },
    {
        name: 'Sultans Battery',
        state_id: 19,
    },
    {
        name: 'Sulthan Bathery',
        state_id: 19,
    },
    {
        name: 'Talipparamba',
        state_id: 19,
    },
    {
        name: 'Thaikkad',
        state_id: 19,
    },
    {
        name: 'Thalassery',
        state_id: 19,
    },
    {
        name: 'Thannirmukkam',
        state_id: 19,
    },
    {
        name: 'Theyyalingal',
        state_id: 19,
    },
    {
        name: 'Thiruvalla',
        state_id: 19,
    },
    {
        name: 'Thiruvananthapuram',
        state_id: 19,
    },
    {
        name: 'Thiruvankulam',
        state_id: 19,
    },
    {
        name: 'Thodupuzha',
        state_id: 19,
    },
    {
        name: 'Thottada',
        state_id: 19,
    },
    {
        name: 'Thrippunithura',
        state_id: 19,
    },
    {
        name: 'Thrissur',
        state_id: 19,
    },
    {
        name: 'Tirur',
        state_id: 19,
    },
    {
        name: 'Udma',
        state_id: 19,
    },
    {
        name: 'Vadakara',
        state_id: 19,
    },
    {
        name: 'Vaikam',
        state_id: 19,
    },
    {
        name: 'Valapattam',
        state_id: 19,
    },
    {
        name: 'Vallachira',
        state_id: 19,
    },
    {
        name: 'Varam',
        state_id: 19,
    },
    {
        name: 'Varappuzha',
        state_id: 19,
    },
    {
        name: 'Varkala',
        state_id: 19,
    },
    {
        name: 'Vayalar',
        state_id: 19,
    },
    {
        name: 'Vazhakkala',
        state_id: 19,
    },
    {
        name: 'Venmanad',
        state_id: 19,
    },
    {
        name: 'Villiappally',
        state_id: 19,
    },
    {
        name: 'Wayanad',
        state_id: 19,
    },
    {
        name: 'Agethi',
        state_id: 20,
    },
    {
        name: 'Amini',
        state_id: 20,
    },
    {
        name: 'Androth Island',
        state_id: 20,
    },
    {
        name: 'Kavaratti',
        state_id: 20,
    },
    {
        name: 'Minicoy',
        state_id: 20,
    },
    {
        name: 'Agar',
        state_id: 21,
    },
    {
        name: 'Ajaigarh',
        state_id: 21,
    },
    {
        name: 'Akoda',
        state_id: 21,
    },
    {
        name: 'Akodia',
        state_id: 21,
    },
    {
        name: 'Alampur',
        state_id: 21,
    },
    {
        name: 'Alirajpur',
        state_id: 21,
    },
    {
        name: 'Alot',
        state_id: 21,
    },
    {
        name: 'Amanganj',
        state_id: 21,
    },
    {
        name: 'Amarkantak',
        state_id: 21,
    },
    {
        name: 'Amarpatan',
        state_id: 21,
    },
    {
        name: 'Amarwara',
        state_id: 21,
    },
    {
        name: 'Ambada',
        state_id: 21,
    },
    {
        name: 'Ambah',
        state_id: 21,
    },
    {
        name: 'Amla',
        state_id: 21,
    },
    {
        name: 'Amlai',
        state_id: 21,
    },
    {
        name: 'Anjad',
        state_id: 21,
    },
    {
        name: 'Antri',
        state_id: 21,
    },
    {
        name: 'Anuppur',
        state_id: 21,
    },
    {
        name: 'Aron',
        state_id: 21,
    },
    {
        name: 'Ashoknagar',
        state_id: 21,
    },
    {
        name: 'Ashta',
        state_id: 21,
    },
    {
        name: 'Babai',
        state_id: 21,
    },
    {
        name: 'Bada Malhera',
        state_id: 21,
    },
    {
        name: 'Badagaon',
        state_id: 21,
    },
    {
        name: 'Badagoan',
        state_id: 21,
    },
    {
        name: 'Badarwas',
        state_id: 21,
    },
    {
        name: 'Badawada',
        state_id: 21,
    },
    {
        name: 'Badi',
        state_id: 21,
    },
    {
        name: 'Badkuhi',
        state_id: 21,
    },
    {
        name: 'Badnagar',
        state_id: 21,
    },
    {
        name: 'Badnawar',
        state_id: 21,
    },
    {
        name: 'Badod',
        state_id: 21,
    },
    {
        name: 'Badoda',
        state_id: 21,
    },
    {
        name: 'Badra',
        state_id: 21,
    },
    {
        name: 'Bagh',
        state_id: 21,
    },
    {
        name: 'Bagli',
        state_id: 21,
    },
    {
        name: 'Baihar',
        state_id: 21,
    },
    {
        name: 'Baikunthpur',
        state_id: 21,
    },
    {
        name: 'Bakswaha',
        state_id: 21,
    },
    {
        name: 'Balaghat',
        state_id: 21,
    },
    {
        name: 'Baldeogarh',
        state_id: 21,
    },
    {
        name: 'Bamaniya',
        state_id: 21,
    },
    {
        name: 'Bamhani',
        state_id: 21,
    },
    {
        name: 'Bamor',
        state_id: 21,
    },
    {
        name: 'Bamora',
        state_id: 21,
    },
    {
        name: 'Banda',
        state_id: 21,
    },
    {
        name: 'Bangawan',
        state_id: 21,
    },
    {
        name: 'Bansatar Kheda',
        state_id: 21,
    },
    {
        name: 'Baraily',
        state_id: 21,
    },
    {
        name: 'Barela',
        state_id: 21,
    },
    {
        name: 'Barghat',
        state_id: 21,
    },
    {
        name: 'Bargi',
        state_id: 21,
    },
    {
        name: 'Barhi',
        state_id: 21,
    },
    {
        name: 'Barigarh',
        state_id: 21,
    },
    {
        name: 'Barwaha',
        state_id: 21,
    },
    {
        name: 'Barwani',
        state_id: 21,
    },
    {
        name: 'Basoda',
        state_id: 21,
    },
    {
        name: 'Begamganj',
        state_id: 21,
    },
    {
        name: 'Beohari',
        state_id: 21,
    },
    {
        name: 'Berasia',
        state_id: 21,
    },
    {
        name: 'Betma',
        state_id: 21,
    },
    {
        name: 'Betul',
        state_id: 21,
    },
    {
        name: 'Betul Bazar',
        state_id: 21,
    },
    {
        name: 'Bhainsdehi',
        state_id: 21,
    },
    {
        name: 'Bhamodi',
        state_id: 21,
    },
    {
        name: 'Bhander',
        state_id: 21,
    },
    {
        name: 'Bhanpura',
        state_id: 21,
    },
    {
        name: 'Bharveli',
        state_id: 21,
    },
    {
        name: 'Bhaurasa',
        state_id: 21,
    },
    {
        name: 'Bhavra',
        state_id: 21,
    },
    {
        name: 'Bhedaghat',
        state_id: 21,
    },
    {
        name: 'Bhikangaon',
        state_id: 21,
    },
    {
        name: 'Bhilakhedi',
        state_id: 21,
    },
    {
        name: 'Bhind',
        state_id: 21,
    },
    {
        name: 'Bhitarwar',
        state_id: 21,
    },
    {
        name: 'Bhopal',
        state_id: 21,
    },
    {
        name: 'Bhuibandh',
        state_id: 21,
    },
    {
        name: 'Biaora',
        state_id: 21,
    },
    {
        name: 'Bijawar',
        state_id: 21,
    },
    {
        name: 'Bijeypur',
        state_id: 21,
    },
    {
        name: 'Bijrauni',
        state_id: 21,
    },
    {
        name: 'Bijuri',
        state_id: 21,
    },
    {
        name: 'Bilaua',
        state_id: 21,
    },
    {
        name: 'Bilpura',
        state_id: 21,
    },
    {
        name: 'Bina Railway Colony',
        state_id: 21,
    },
    {
        name: 'Bina-Etawa',
        state_id: 21,
    },
    {
        name: 'Birsinghpur',
        state_id: 21,
    },
    {
        name: 'Boda',
        state_id: 21,
    },
    {
        name: 'Budhni',
        state_id: 21,
    },
    {
        name: 'Burhanpur',
        state_id: 21,
    },
    {
        name: 'Burhar',
        state_id: 21,
    },
    {
        name: 'Chachaura Binaganj',
        state_id: 21,
    },
    {
        name: 'Chakghat',
        state_id: 21,
    },
    {
        name: 'Chandameta Butar',
        state_id: 21,
    },
    {
        name: 'Chanderi',
        state_id: 21,
    },
    {
        name: 'Chandia',
        state_id: 21,
    },
    {
        name: 'Chandla',
        state_id: 21,
    },
    {
        name: 'Chaurai Khas',
        state_id: 21,
    },
    {
        name: 'Chhatarpur',
        state_id: 21,
    },
    {
        name: 'Chhindwara',
        state_id: 21,
    },
    {
        name: 'Chhota Chhindwara',
        state_id: 21,
    },
    {
        name: 'Chichli',
        state_id: 21,
    },
    {
        name: 'Chitrakut',
        state_id: 21,
    },
    {
        name: 'Churhat',
        state_id: 21,
    },
    {
        name: 'Daboh',
        state_id: 21,
    },
    {
        name: 'Dabra',
        state_id: 21,
    },
    {
        name: 'Damoh',
        state_id: 21,
    },
    {
        name: 'Damua',
        state_id: 21,
    },
    {
        name: 'Datia',
        state_id: 21,
    },
    {
        name: 'Deodara',
        state_id: 21,
    },
    {
        name: 'Deori',
        state_id: 21,
    },
    {
        name: 'Deori Khas',
        state_id: 21,
    },
    {
        name: 'Depalpur',
        state_id: 21,
    },
    {
        name: 'Devendranagar',
        state_id: 21,
    },
    {
        name: 'Devhara',
        state_id: 21,
    },
    {
        name: 'Dewas',
        state_id: 21,
    },
    {
        name: 'Dhamnod',
        state_id: 21,
    },
    {
        name: 'Dhana',
        state_id: 21,
    },
    {
        name: 'Dhanpuri',
        state_id: 21,
    },
    {
        name: 'Dhar',
        state_id: 21,
    },
    {
        name: 'Dharampuri',
        state_id: 21,
    },
    {
        name: 'Dighawani',
        state_id: 21,
    },
    {
        name: 'Diken',
        state_id: 21,
    },
    {
        name: 'Dindori',
        state_id: 21,
    },
    {
        name: 'Dola',
        state_id: 21,
    },
    {
        name: 'Dumar Kachhar',
        state_id: 21,
    },
    {
        name: 'Dungariya Chhapara',
        state_id: 21,
    },
    {
        name: 'Gadarwara',
        state_id: 21,
    },
    {
        name: 'Gairatganj',
        state_id: 21,
    },
    {
        name: 'Gandhi Sagar Hydel Colony',
        state_id: 21,
    },
    {
        name: 'Ganjbasoda',
        state_id: 21,
    },
    {
        name: 'Garhakota',
        state_id: 21,
    },
    {
        name: 'Garhi Malhara',
        state_id: 21,
    },
    {
        name: 'Garoth',
        state_id: 21,
    },
    {
        name: 'Gautapura',
        state_id: 21,
    },
    {
        name: 'Ghansor',
        state_id: 21,
    },
    {
        name: 'Ghuwara',
        state_id: 21,
    },
    {
        name: 'Gogaon',
        state_id: 21,
    },
    {
        name: 'Gogapur',
        state_id: 21,
    },
    {
        name: 'Gohad',
        state_id: 21,
    },
    {
        name: 'Gormi',
        state_id: 21,
    },
    {
        name: 'Govindgarh',
        state_id: 21,
    },
    {
        name: 'Guna',
        state_id: 21,
    },
    {
        name: 'Gurh',
        state_id: 21,
    },
    {
        name: 'Gwalior',
        state_id: 21,
    },
    {
        name: 'Hanumana',
        state_id: 21,
    },
    {
        name: 'Harda',
        state_id: 21,
    },
    {
        name: 'Harpalpur',
        state_id: 21,
    },
    {
        name: 'Harrai',
        state_id: 21,
    },
    {
        name: 'Harsud',
        state_id: 21,
    },
    {
        name: 'Hatod',
        state_id: 21,
    },
    {
        name: 'Hatpipalya',
        state_id: 21,
    },
    {
        name: 'Hatta',
        state_id: 21,
    },
    {
        name: 'Hindoria',
        state_id: 21,
    },
    {
        name: 'Hirapur',
        state_id: 21,
    },
    {
        name: 'Hoshangabad',
        state_id: 21,
    },
    {
        name: 'Ichhawar',
        state_id: 21,
    },
    {
        name: 'Iklehra',
        state_id: 21,
    },
    {
        name: 'Indergarh',
        state_id: 21,
    },
    {
        name: 'Indore',
        state_id: 21,
    },
    {
        name: 'Isagarh',
        state_id: 21,
    },
    {
        name: 'Itarsi',
        state_id: 21,
    },
    {
        name: 'Jabalpur',
        state_id: 21,
    },
    {
        name: 'Jabalpur Cantonment',
        state_id: 21,
    },
    {
        name: 'Jabalpur G.C.F',
        state_id: 21,
    },
    {
        name: 'Jaisinghnagar',
        state_id: 21,
    },
    {
        name: 'Jaithari',
        state_id: 21,
    },
    {
        name: 'Jaitwara',
        state_id: 21,
    },
    {
        name: 'Jamai',
        state_id: 21,
    },
    {
        name: 'Jaora',
        state_id: 21,
    },
    {
        name: 'Jatachhapar',
        state_id: 21,
    },
    {
        name: 'Jatara',
        state_id: 21,
    },
    {
        name: 'Jawad',
        state_id: 21,
    },
    {
        name: 'Jawar',
        state_id: 21,
    },
    {
        name: 'Jeronkhalsa',
        state_id: 21,
    },
    {
        name: 'Jhabua',
        state_id: 21,
    },
    {
        name: 'Jhundpura',
        state_id: 21,
    },
    {
        name: 'Jiran',
        state_id: 21,
    },
    {
        name: 'Jirapur',
        state_id: 21,
    },
    {
        name: 'Jobat',
        state_id: 21,
    },
    {
        name: 'Joura',
        state_id: 21,
    },
    {
        name: 'Kailaras',
        state_id: 21,
    },
    {
        name: 'Kaimur',
        state_id: 21,
    },
    {
        name: 'Kakarhati',
        state_id: 21,
    },
    {
        name: 'Kalichhapar',
        state_id: 21,
    },
    {
        name: 'Kanad',
        state_id: 21,
    },
    {
        name: 'Kannod',
        state_id: 21,
    },
    {
        name: 'Kantaphod',
        state_id: 21,
    },
    {
        name: 'Kareli',
        state_id: 21,
    },
    {
        name: 'Karera',
        state_id: 21,
    },
    {
        name: 'Kari',
        state_id: 21,
    },
    {
        name: 'Karnawad',
        state_id: 21,
    },
    {
        name: 'Karrapur',
        state_id: 21,
    },
    {
        name: 'Kasrawad',
        state_id: 21,
    },
    {
        name: 'Katangi',
        state_id: 21,
    },
    {
        name: 'Katni',
        state_id: 21,
    },
    {
        name: 'Kelhauri',
        state_id: 21,
    },
    {
        name: 'Khachrod',
        state_id: 21,
    },
    {
        name: 'Khajuraho',
        state_id: 21,
    },
    {
        name: 'Khamaria',
        state_id: 21,
    },
    {
        name: 'Khand',
        state_id: 21,
    },
    {
        name: 'Khandwa',
        state_id: 21,
    },
    {
        name: 'Khaniyadhana',
        state_id: 21,
    },
    {
        name: 'Khargapur',
        state_id: 21,
    },
    {
        name: 'Khargone',
        state_id: 21,
    },
    {
        name: 'Khategaon',
        state_id: 21,
    },
    {
        name: 'Khetia',
        state_id: 21,
    },
    {
        name: 'Khilchipur',
        state_id: 21,
    },
    {
        name: 'Khirkiya',
        state_id: 21,
    },
    {
        name: 'Khujner',
        state_id: 21,
    },
    {
        name: 'Khurai',
        state_id: 21,
    },
    {
        name: 'Kolaras',
        state_id: 21,
    },
    {
        name: 'Kotar',
        state_id: 21,
    },
    {
        name: 'Kothi',
        state_id: 21,
    },
    {
        name: 'Kotma',
        state_id: 21,
    },
    {
        name: 'Kukshi',
        state_id: 21,
    },
    {
        name: 'Kumbhraj',
        state_id: 21,
    },
    {
        name: 'Kurwai',
        state_id: 21,
    },
    {
        name: 'Lahar',
        state_id: 21,
    },
    {
        name: 'Lakhnadon',
        state_id: 21,
    },
    {
        name: 'Lateri',
        state_id: 21,
    },
    {
        name: 'Laundi',
        state_id: 21,
    },
    {
        name: 'Lidhora Khas',
        state_id: 21,
    },
    {
        name: 'Lodhikheda',
        state_id: 21,
    },
    {
        name: 'Loharda',
        state_id: 21,
    },
    {
        name: 'Machalpur',
        state_id: 21,
    },
    {
        name: 'Madhogarh',
        state_id: 21,
    },
    {
        name: 'Maharajpur',
        state_id: 21,
    },
    {
        name: 'Maheshwar',
        state_id: 21,
    },
    {
        name: 'Mahidpur',
        state_id: 21,
    },
    {
        name: 'Maihar',
        state_id: 21,
    },
    {
        name: 'Majholi',
        state_id: 21,
    },
    {
        name: 'Makronia',
        state_id: 21,
    },
    {
        name: 'Maksi',
        state_id: 21,
    },
    {
        name: 'Malaj Khand',
        state_id: 21,
    },
    {
        name: 'Malanpur',
        state_id: 21,
    },
    {
        name: 'Malhargarh',
        state_id: 21,
    },
    {
        name: 'Manasa',
        state_id: 21,
    },
    {
        name: 'Manawar',
        state_id: 21,
    },
    {
        name: 'Mandav',
        state_id: 21,
    },
    {
        name: 'Mandideep',
        state_id: 21,
    },
    {
        name: 'Mandla',
        state_id: 21,
    },
    {
        name: 'Mandleshwar',
        state_id: 21,
    },
    {
        name: 'Mandsaur',
        state_id: 21,
    },
    {
        name: 'Manegaon',
        state_id: 21,
    },
    {
        name: 'Mangawan',
        state_id: 21,
    },
    {
        name: 'Manglaya Sadak',
        state_id: 21,
    },
    {
        name: 'Manpur',
        state_id: 21,
    },
    {
        name: 'Mau',
        state_id: 21,
    },
    {
        name: 'Mauganj',
        state_id: 21,
    },
    {
        name: 'Meghnagar',
        state_id: 21,
    },
    {
        name: 'Mehara Gaon',
        state_id: 21,
    },
    {
        name: 'Mehgaon',
        state_id: 21,
    },
    {
        name: 'Mhaugaon',
        state_id: 21,
    },
    {
        name: 'Mhow',
        state_id: 21,
    },
    {
        name: 'Mihona',
        state_id: 21,
    },
    {
        name: 'Mohgaon',
        state_id: 21,
    },
    {
        name: 'Morar',
        state_id: 21,
    },
    {
        name: 'Morena',
        state_id: 21,
    },
    {
        name: 'Morwa',
        state_id: 21,
    },
    {
        name: 'Multai',
        state_id: 21,
    },
    {
        name: 'Mundi',
        state_id: 21,
    },
    {
        name: 'Mungaoli',
        state_id: 21,
    },
    {
        name: 'Murwara',
        state_id: 21,
    },
    {
        name: 'Nagda',
        state_id: 21,
    },
    {
        name: 'Nagod',
        state_id: 21,
    },
    {
        name: 'Nagri',
        state_id: 21,
    },
    {
        name: 'Naigarhi',
        state_id: 21,
    },
    {
        name: 'Nainpur',
        state_id: 21,
    },
    {
        name: 'Nalkheda',
        state_id: 21,
    },
    {
        name: 'Namli',
        state_id: 21,
    },
    {
        name: 'Narayangarh',
        state_id: 21,
    },
    {
        name: 'Narsimhapur',
        state_id: 21,
    },
    {
        name: 'Narsingarh',
        state_id: 21,
    },
    {
        name: 'Narsinghpur',
        state_id: 21,
    },
    {
        name: 'Narwar',
        state_id: 21,
    },
    {
        name: 'Nasrullaganj',
        state_id: 21,
    },
    {
        name: 'Naudhia',
        state_id: 21,
    },
    {
        name: 'Naugaon',
        state_id: 21,
    },
    {
        name: 'Naurozabad',
        state_id: 21,
    },
    {
        name: 'Neemuch',
        state_id: 21,
    },
    {
        name: 'Nepa Nagar',
        state_id: 21,
    },
    {
        name: 'Neuton Chikhli Kalan',
        state_id: 21,
    },
    {
        name: 'Nimach',
        state_id: 21,
    },
    {
        name: 'Niwari',
        state_id: 21,
    },
    {
        name: 'Obedullaganj',
        state_id: 21,
    },
    {
        name: 'Omkareshwar',
        state_id: 21,
    },
    {
        name: 'Orachha',
        state_id: 21,
    },
    {
        name: 'Ordinance Factory Itarsi',
        state_id: 21,
    },
    {
        name: 'Pachmarhi',
        state_id: 21,
    },
    {
        name: 'Pachmarhi Cantonment',
        state_id: 21,
    },
    {
        name: 'Pachore',
        state_id: 21,
    },
    {
        name: 'Palchorai',
        state_id: 21,
    },
    {
        name: 'Palda',
        state_id: 21,
    },
    {
        name: 'Palera',
        state_id: 21,
    },
    {
        name: 'Pali',
        state_id: 21,
    },
    {
        name: 'Panagar',
        state_id: 21,
    },
    {
        name: 'Panara',
        state_id: 21,
    },
    {
        name: 'Pandaria',
        state_id: 21,
    },
    {
        name: 'Pandhana',
        state_id: 21,
    },
    {
        name: 'Pandhurna',
        state_id: 21,
    },
    {
        name: 'Panna',
        state_id: 21,
    },
    {
        name: 'Pansemal',
        state_id: 21,
    },
    {
        name: 'Parasia',
        state_id: 21,
    },
    {
        name: 'Pasan',
        state_id: 21,
    },
    {
        name: 'Patan',
        state_id: 21,
    },
    {
        name: 'Patharia',
        state_id: 21,
    },
    {
        name: 'Pawai',
        state_id: 21,
    },
    {
        name: 'Petlawad',
        state_id: 21,
    },
    {
        name: 'Phuph Kalan',
        state_id: 21,
    },
    {
        name: 'Pichhore',
        state_id: 21,
    },
    {
        name: 'Pipariya',
        state_id: 21,
    },
    {
        name: 'Pipliya Mandi',
        state_id: 21,
    },
    {
        name: 'Piploda',
        state_id: 21,
    },
    {
        name: 'Pithampur',
        state_id: 21,
    },
    {
        name: 'Polay Kalan',
        state_id: 21,
    },
    {
        name: 'Porsa',
        state_id: 21,
    },
    {
        name: 'Prithvipur',
        state_id: 21,
    },
    {
        name: 'Raghogarh',
        state_id: 21,
    },
    {
        name: 'Rahatgarh',
        state_id: 21,
    },
    {
        name: 'Raisen',
        state_id: 21,
    },
    {
        name: 'Rajakhedi',
        state_id: 21,
    },
    {
        name: 'Rajgarh',
        state_id: 21,
    },
    {
        name: 'Rajnagar',
        state_id: 21,
    },
    {
        name: 'Rajpur',
        state_id: 21,
    },
    {
        name: 'Rampur Baghelan',
        state_id: 21,
    },
    {
        name: 'Rampur Naikin',
        state_id: 21,
    },
    {
        name: 'Rampura',
        state_id: 21,
    },
    {
        name: 'Ranapur',
        state_id: 21,
    },
    {
        name: 'Ranipura',
        state_id: 21,
    },
    {
        name: 'Ratangarh',
        state_id: 21,
    },
    {
        name: 'Ratlam',
        state_id: 21,
    },
    {
        name: 'Ratlam Kasba',
        state_id: 21,
    },
    {
        name: 'Rau',
        state_id: 21,
    },
    {
        name: 'Rehli',
        state_id: 21,
    },
    {
        name: 'Rehti',
        state_id: 21,
    },
    {
        name: 'Rewa',
        state_id: 21,
    },
    {
        name: 'Sabalgarh',
        state_id: 21,
    },
    {
        name: 'Sagar',
        state_id: 21,
    },
    {
        name: 'Sagar Cantonment',
        state_id: 21,
    },
    {
        name: 'Sailana',
        state_id: 21,
    },
    {
        name: 'Sanawad',
        state_id: 21,
    },
    {
        name: 'Sanchi',
        state_id: 21,
    },
    {
        name: 'Sanwer',
        state_id: 21,
    },
    {
        name: 'Sarangpur',
        state_id: 21,
    },
    {
        name: 'Sardarpur',
        state_id: 21,
    },
    {
        name: 'Sarni',
        state_id: 21,
    },
    {
        name: 'Satai',
        state_id: 21,
    },
    {
        name: 'Satna',
        state_id: 21,
    },
    {
        name: 'Satwas',
        state_id: 21,
    },
    {
        name: 'Sausar',
        state_id: 21,
    },
    {
        name: 'Sehore',
        state_id: 21,
    },
    {
        name: 'Semaria',
        state_id: 21,
    },
    {
        name: 'Sendhwa',
        state_id: 21,
    },
    {
        name: 'Seondha',
        state_id: 21,
    },
    {
        name: 'Seoni',
        state_id: 21,
    },
    {
        name: 'Seoni Malwa',
        state_id: 21,
    },
    {
        name: 'Sethia',
        state_id: 21,
    },
    {
        name: 'Shahdol',
        state_id: 21,
    },
    {
        name: 'Shahgarh',
        state_id: 21,
    },
    {
        name: 'Shahpur',
        state_id: 21,
    },
    {
        name: 'Shahpura',
        state_id: 21,
    },
    {
        name: 'Shajapur',
        state_id: 21,
    },
    {
        name: 'Shamgarh',
        state_id: 21,
    },
    {
        name: 'Sheopur',
        state_id: 21,
    },
    {
        name: 'Shivpuri',
        state_id: 21,
    },
    {
        name: 'Shujalpur',
        state_id: 21,
    },
    {
        name: 'Sidhi',
        state_id: 21,
    },
    {
        name: 'Sihora',
        state_id: 21,
    },
    {
        name: 'Singolo',
        state_id: 21,
    },
    {
        name: 'Singrauli',
        state_id: 21,
    },
    {
        name: 'Sinhasa',
        state_id: 21,
    },
    {
        name: 'Sirgora',
        state_id: 21,
    },
    {
        name: 'Sirmaur',
        state_id: 21,
    },
    {
        name: 'Sironj',
        state_id: 21,
    },
    {
        name: 'Sitamau',
        state_id: 21,
    },
    {
        name: 'Sohagpur',
        state_id: 21,
    },
    {
        name: 'Sonkatch',
        state_id: 21,
    },
    {
        name: 'Soyatkalan',
        state_id: 21,
    },
    {
        name: 'Suhagi',
        state_id: 21,
    },
    {
        name: 'Sultanpur',
        state_id: 21,
    },
    {
        name: 'Susner',
        state_id: 21,
    },
    {
        name: 'Suthaliya',
        state_id: 21,
    },
    {
        name: 'Tal',
        state_id: 21,
    },
    {
        name: 'Talen',
        state_id: 21,
    },
    {
        name: 'Tarana',
        state_id: 21,
    },
    {
        name: 'Taricharkalan',
        state_id: 21,
    },
    {
        name: 'Tekanpur',
        state_id: 21,
    },
    {
        name: 'Tendukheda',
        state_id: 21,
    },
    {
        name: 'Teonthar',
        state_id: 21,
    },
    {
        name: 'Thandia',
        state_id: 21,
    },
    {
        name: 'Tikamgarh',
        state_id: 21,
    },
    {
        name: 'Timarni',
        state_id: 21,
    },
    {
        name: 'Tirodi',
        state_id: 21,
    },
    {
        name: 'Udaipura',
        state_id: 21,
    },
    {
        name: 'Ujjain',
        state_id: 21,
    },
    {
        name: 'Ukwa',
        state_id: 21,
    },
    {
        name: 'Umaria',
        state_id: 21,
    },
    {
        name: 'Unchahara',
        state_id: 21,
    },
    {
        name: 'Unhel',
        state_id: 21,
    },
    {
        name: 'Vehicle Factory Jabalpur',
        state_id: 21,
    },
    {
        name: 'Vidisha',
        state_id: 21,
    },
    {
        name: 'Vijayraghavgarh',
        state_id: 21,
    },
    {
        name: 'Waraseoni',
        state_id: 21,
    },
    {
        name: 'Achalpur',
        state_id: 22,
    },
    {
        name: 'Aheri',
        state_id: 22,
    },
    {
        name: 'Ahmadnagar Cantonment',
        state_id: 22,
    },
    {
        name: 'Ahmadpur',
        state_id: 22,
    },
    {
        name: 'Ahmednagar',
        state_id: 22,
    },
    {
        name: 'Ajra',
        state_id: 22,
    },
    {
        name: 'Akalkot',
        state_id: 22,
    },
    {
        name: 'Akkalkuwa',
        state_id: 22,
    },
    {
        name: 'Akola',
        state_id: 22,
    },
    {
        name: 'Akot',
        state_id: 22,
    },
    {
        name: 'Alandi',
        state_id: 22,
    },
    {
        name: 'Alibag',
        state_id: 22,
    },
    {
        name: 'Allapalli',
        state_id: 22,
    },
    {
        name: 'Alore',
        state_id: 22,
    },
    {
        name: 'Amalner',
        state_id: 22,
    },
    {
        name: 'Ambad',
        state_id: 22,
    },
    {
        name: 'Ambajogai',
        state_id: 22,
    },
    {
        name: 'Ambernath',
        state_id: 22,
    },
    {
        name: 'Ambivali Tarf Wankhal',
        state_id: 22,
    },
    {
        name: 'Amgaon',
        state_id: 22,
    },
    {
        name: 'Amravati',
        state_id: 22,
    },
    {
        name: 'Anjangaon',
        state_id: 22,
    },
    {
        name: 'Arvi',
        state_id: 22,
    },
    {
        name: 'Ashta',
        state_id: 22,
    },
    {
        name: 'Ashti',
        state_id: 22,
    },
    {
        name: 'Aurangabad',
        state_id: 22,
    },
    {
        name: 'Aurangabad Cantonment',
        state_id: 22,
    },
    {
        name: 'Ausa',
        state_id: 22,
    },
    {
        name: 'Babhulgaon',
        state_id: 22,
    },
    {
        name: 'Badlapur',
        state_id: 22,
    },
    {
        name: 'Balapur',
        state_id: 22,
    },
    {
        name: 'Ballarpur',
        state_id: 22,
    },
    {
        name: 'Baramati',
        state_id: 22,
    },
    {
        name: 'Barshi',
        state_id: 22,
    },
    {
        name: 'Basmat',
        state_id: 22,
    },
    {
        name: 'Beed',
        state_id: 22,
    },
    {
        name: 'Bhadravati',
        state_id: 22,
    },
    {
        name: 'Bhagur',
        state_id: 22,
    },
    {
        name: 'Bhandara',
        state_id: 22,
    },
    {
        name: 'Bhigvan',
        state_id: 22,
    },
    {
        name: 'Bhingar',
        state_id: 22,
    },
    {
        name: 'Bhiwandi',
        state_id: 22,
    },
    {
        name: 'Bhokhardan',
        state_id: 22,
    },
    {
        name: 'Bhor',
        state_id: 22,
    },
    {
        name: 'Bhosari',
        state_id: 22,
    },
    {
        name: 'Bhum',
        state_id: 22,
    },
    {
        name: 'Bhusawal',
        state_id: 22,
    },
    {
        name: 'Bid',
        state_id: 22,
    },
    {
        name: 'Biloli',
        state_id: 22,
    },
    {
        name: 'Birwadi',
        state_id: 22,
    },
    {
        name: 'Boisar',
        state_id: 22,
    },
    {
        name: 'Bop Khel',
        state_id: 22,
    },
    {
        name: 'Brahmapuri',
        state_id: 22,
    },
    {
        name: 'Budhgaon',
        state_id: 22,
    },
    {
        name: 'Buldana',
        state_id: 22,
    },
    {
        name: 'Buldhana',
        state_id: 22,
    },
    {
        name: 'Butibori',
        state_id: 22,
    },
    {
        name: 'Chakan',
        state_id: 22,
    },
    {
        name: 'Chalisgaon',
        state_id: 22,
    },
    {
        name: 'Chandrapur',
        state_id: 22,
    },
    {
        name: 'Chandur',
        state_id: 22,
    },
    {
        name: 'Chandur Bazar',
        state_id: 22,
    },
    {
        name: 'Chandvad',
        state_id: 22,
    },
    {
        name: 'Chicholi',
        state_id: 22,
    },
    {
        name: 'Chikhala',
        state_id: 22,
    },
    {
        name: 'Chikhaldara',
        state_id: 22,
    },
    {
        name: 'Chikhli',
        state_id: 22,
    },
    {
        name: 'Chinchani',
        state_id: 22,
    },
    {
        name: 'Chinchwad',
        state_id: 22,
    },
    {
        name: 'Chiplun',
        state_id: 22,
    },
    {
        name: 'Chopda',
        state_id: 22,
    },
    {
        name: 'Dabhol',
        state_id: 22,
    },
    {
        name: 'Dahance',
        state_id: 22,
    },
    {
        name: 'Dahanu',
        state_id: 22,
    },
    {
        name: 'Daharu',
        state_id: 22,
    },
    {
        name: 'Dapoli Camp',
        state_id: 22,
    },
    {
        name: 'Darwa',
        state_id: 22,
    },
    {
        name: 'Daryapur',
        state_id: 22,
    },
    {
        name: 'Dattapur',
        state_id: 22,
    },
    {
        name: 'Daund',
        state_id: 22,
    },
    {
        name: 'Davlameti',
        state_id: 22,
    },
    {
        name: 'Deglur',
        state_id: 22,
    },
    {
        name: 'Dehu Road',
        state_id: 22,
    },
    {
        name: 'Deolali',
        state_id: 22,
    },
    {
        name: 'Deolali Pravara',
        state_id: 22,
    },
    {
        name: 'Deoli',
        state_id: 22,
    },
    {
        name: 'Desaiganj',
        state_id: 22,
    },
    {
        name: 'Deulgaon Raja',
        state_id: 22,
    },
    {
        name: 'Dewhadi',
        state_id: 22,
    },
    {
        name: 'Dharangaon',
        state_id: 22,
    },
    {
        name: 'Dharmabad',
        state_id: 22,
    },
    {
        name: 'Dharur',
        state_id: 22,
    },
    {
        name: 'Dhatau',
        state_id: 22,
    },
    {
        name: 'Dhule',
        state_id: 22,
    },
    {
        name: 'Digdoh',
        state_id: 22,
    },
    {
        name: 'Diglur',
        state_id: 22,
    },
    {
        name: 'Digras',
        state_id: 22,
    },
    {
        name: 'Dombivli',
        state_id: 22,
    },
    {
        name: 'Dondaicha',
        state_id: 22,
    },
    {
        name: 'Dudhani',
        state_id: 22,
    },
    {
        name: 'Durgapur',
        state_id: 22,
    },
    {
        name: 'Dyane',
        state_id: 22,
    },
    {
        name: 'Edandol',
        state_id: 22,
    },
    {
        name: 'Eklahare',
        state_id: 22,
    },
    {
        name: 'Faizpur',
        state_id: 22,
    },
    {
        name: 'Fekari',
        state_id: 22,
    },
    {
        name: 'Gadchiroli',
        state_id: 22,
    },
    {
        name: 'Gadhinghaj',
        state_id: 22,
    },
    {
        name: 'Gandhi Nagar',
        state_id: 22,
    },
    {
        name: 'Ganeshpur',
        state_id: 22,
    },
    {
        name: 'Gangakher',
        state_id: 22,
    },
    {
        name: 'Gangapur',
        state_id: 22,
    },
    {
        name: 'Gevrai',
        state_id: 22,
    },
    {
        name: 'Ghatanji',
        state_id: 22,
    },
    {
        name: 'Ghoti',
        state_id: 22,
    },
    {
        name: 'Ghugus',
        state_id: 22,
    },
    {
        name: 'Ghulewadi',
        state_id: 22,
    },
    {
        name: 'Godoli',
        state_id: 22,
    },
    {
        name: 'Gondia',
        state_id: 22,
    },
    {
        name: 'Guhagar',
        state_id: 22,
    },
    {
        name: 'Hadgaon',
        state_id: 22,
    },
    {
        name: 'Harnai Beach',
        state_id: 22,
    },
    {
        name: 'Hinganghat',
        state_id: 22,
    },
    {
        name: 'Hingoli',
        state_id: 22,
    },
    {
        name: 'Hupari',
        state_id: 22,
    },
    {
        name: 'Ichalkaranji',
        state_id: 22,
    },
    {
        name: 'Igatpuri',
        state_id: 22,
    },
    {
        name: 'Indapur',
        state_id: 22,
    },
    {
        name: 'Jaisinghpur',
        state_id: 22,
    },
    {
        name: 'Jalgaon',
        state_id: 22,
    },
    {
        name: 'Jalna',
        state_id: 22,
    },
    {
        name: 'Jamkhed',
        state_id: 22,
    },
    {
        name: 'Jawhar',
        state_id: 22,
    },
    {
        name: 'Jaysingpur',
        state_id: 22,
    },
    {
        name: 'Jejuri',
        state_id: 22,
    },
    {
        name: 'Jintur',
        state_id: 22,
    },
    {
        name: 'Junnar',
        state_id: 22,
    },
    {
        name: 'Kabnur',
        state_id: 22,
    },
    {
        name: 'Kagal',
        state_id: 22,
    },
    {
        name: 'Kalamb',
        state_id: 22,
    },
    {
        name: 'Kalamnuri',
        state_id: 22,
    },
    {
        name: 'Kalas',
        state_id: 22,
    },
    {
        name: 'Kalmeshwar',
        state_id: 22,
    },
    {
        name: 'Kalundre',
        state_id: 22,
    },
    {
        name: 'Kalyan',
        state_id: 22,
    },
    {
        name: 'Kamthi',
        state_id: 22,
    },
    {
        name: 'Kamthi Cantonment',
        state_id: 22,
    },
    {
        name: 'Kandari',
        state_id: 22,
    },
    {
        name: 'Kandhar',
        state_id: 22,
    },
    {
        name: 'Kandri',
        state_id: 22,
    },
    {
        name: 'Kandri II',
        state_id: 22,
    },
    {
        name: 'Kanhan',
        state_id: 22,
    },
    {
        name: 'Kankavli',
        state_id: 22,
    },
    {
        name: 'Kannad',
        state_id: 22,
    },
    {
        name: 'Karad',
        state_id: 22,
    },
    {
        name: 'Karanja',
        state_id: 22,
    },
    {
        name: 'Karanje Tarf',
        state_id: 22,
    },
    {
        name: 'Karivali',
        state_id: 22,
    },
    {
        name: 'Karjat',
        state_id: 22,
    },
    {
        name: 'Karmala',
        state_id: 22,
    },
    {
        name: 'Kasara Budruk',
        state_id: 22,
    },
    {
        name: 'Katai',
        state_id: 22,
    },
    {
        name: 'Katkar',
        state_id: 22,
    },
    {
        name: 'Katol',
        state_id: 22,
    },
    {
        name: 'Kegaon',
        state_id: 22,
    },
    {
        name: 'Khadkale',
        state_id: 22,
    },
    {
        name: 'Khadki',
        state_id: 22,
    },
    {
        name: 'Khamgaon',
        state_id: 22,
    },
    {
        name: 'Khapa',
        state_id: 22,
    },
    {
        name: 'Kharadi',
        state_id: 22,
    },
    {
        name: 'Kharakvasla',
        state_id: 22,
    },
    {
        name: 'Khed',
        state_id: 22,
    },
    {
        name: 'Kherdi',
        state_id: 22,
    },
    {
        name: 'Khoni',
        state_id: 22,
    },
    {
        name: 'Khopoli',
        state_id: 22,
    },
    {
        name: 'Khuldabad',
        state_id: 22,
    },
    {
        name: 'Kinwat',
        state_id: 22,
    },
    {
        name: 'Kodoli',
        state_id: 22,
    },
    {
        name: 'Kolhapur',
        state_id: 22,
    },
    {
        name: 'Kon',
        state_id: 22,
    },
    {
        name: 'Kondumal',
        state_id: 22,
    },
    {
        name: 'Kopargaon',
        state_id: 22,
    },
    {
        name: 'Kopharad',
        state_id: 22,
    },
    {
        name: 'Koradi',
        state_id: 22,
    },
    {
        name: 'Koregaon',
        state_id: 22,
    },
    {
        name: 'Korochi',
        state_id: 22,
    },
    {
        name: 'Kudal',
        state_id: 22,
    },
    {
        name: 'Kundaim',
        state_id: 22,
    },
    {
        name: 'Kundalwadi',
        state_id: 22,
    },
    {
        name: 'Kurandvad',
        state_id: 22,
    },
    {
        name: 'Kurduvadi',
        state_id: 22,
    },
    {
        name: 'Kusgaon Budruk',
        state_id: 22,
    },
    {
        name: 'Lanja',
        state_id: 22,
    },
    {
        name: 'Lasalgaon',
        state_id: 22,
    },
    {
        name: 'Latur',
        state_id: 22,
    },
    {
        name: 'Loha',
        state_id: 22,
    },
    {
        name: 'Lohegaon',
        state_id: 22,
    },
    {
        name: 'Lonar',
        state_id: 22,
    },
    {
        name: 'Lonavala',
        state_id: 22,
    },
    {
        name: 'Madhavnagar',
        state_id: 22,
    },
    {
        name: 'Mahabaleshwar',
        state_id: 22,
    },
    {
        name: 'Mahad',
        state_id: 22,
    },
    {
        name: 'Mahadula',
        state_id: 22,
    },
    {
        name: 'Maindargi',
        state_id: 22,
    },
    {
        name: 'Majalgaon',
        state_id: 22,
    },
    {
        name: 'Malegaon',
        state_id: 22,
    },
    {
        name: 'Malgaon',
        state_id: 22,
    },
    {
        name: 'Malkapur',
        state_id: 22,
    },
    {
        name: 'Malwan',
        state_id: 22,
    },
    {
        name: 'Manadur',
        state_id: 22,
    },
    {
        name: 'Manchar',
        state_id: 22,
    },
    {
        name: 'Mangalvedhe',
        state_id: 22,
    },
    {
        name: 'Mangrul Pir',
        state_id: 22,
    },
    {
        name: 'Manmad',
        state_id: 22,
    },
    {
        name: 'Manor',
        state_id: 22,
    },
    {
        name: 'Mansar',
        state_id: 22,
    },
    {
        name: 'Manwath',
        state_id: 22,
    },
    {
        name: 'Mapuca',
        state_id: 22,
    },
    {
        name: 'Matheran',
        state_id: 22,
    },
    {
        name: 'Mehkar',
        state_id: 22,
    },
    {
        name: 'Mhasla',
        state_id: 22,
    },
    {
        name: 'Mhaswad',
        state_id: 22,
    },
    {
        name: 'Mira Bhayandar',
        state_id: 22,
    },
    {
        name: 'Miraj',
        state_id: 22,
    },
    {
        name: 'Mohpa',
        state_id: 22,
    },
    {
        name: 'Mohpada',
        state_id: 22,
    },
    {
        name: 'Moram',
        state_id: 22,
    },
    {
        name: 'Morshi',
        state_id: 22,
    },
    {
        name: 'Mowad',
        state_id: 22,
    },
    {
        name: 'Mudkhed',
        state_id: 22,
    },
    {
        name: 'Mukhed',
        state_id: 22,
    },
    {
        name: 'Mul',
        state_id: 22,
    },
    {
        name: 'Mulshi',
        state_id: 22,
    },
    {
        name: 'Mumbai',
        state_id: 22,
    },
    {
        name: 'Murbad',
        state_id: 22,
    },
    {
        name: 'Murgud',
        state_id: 22,
    },
    {
        name: 'Murtijapur',
        state_id: 22,
    },
    {
        name: 'Murud',
        state_id: 22,
    },
    {
        name: 'Nachane',
        state_id: 22,
    },
    {
        name: 'Nagardeole',
        state_id: 22,
    },
    {
        name: 'Nagothane',
        state_id: 22,
    },
    {
        name: 'Nagpur',
        state_id: 22,
    },
    {
        name: 'Nakoda',
        state_id: 22,
    },
    {
        name: 'Nalasopara',
        state_id: 22,
    },
    {
        name: 'Naldurg',
        state_id: 22,
    },
    {
        name: 'Nanded',
        state_id: 22,
    },
    {
        name: 'Nandgaon',
        state_id: 22,
    },
    {
        name: 'Nandura',
        state_id: 22,
    },
    {
        name: 'Nandurbar',
        state_id: 22,
    },
    {
        name: 'Narkhed',
        state_id: 22,
    },
    {
        name: 'Nashik',
        state_id: 22,
    },
    {
        name: 'Navapur',
        state_id: 22,
    },
    {
        name: 'Navi Mumbai',
        state_id: 22,
    },
    {
        name: 'Navi Mumbai Panvel',
        state_id: 22,
    },
    {
        name: 'Neral',
        state_id: 22,
    },
    {
        name: 'Nigdi',
        state_id: 22,
    },
    {
        name: 'Nilanga',
        state_id: 22,
    },
    {
        name: 'Nildoh',
        state_id: 22,
    },
    {
        name: 'Nimbhore',
        state_id: 22,
    },
    {
        name: 'Ojhar',
        state_id: 22,
    },
    {
        name: 'Osmanabad',
        state_id: 22,
    },
    {
        name: 'Pachgaon',
        state_id: 22,
    },
    {
        name: 'Pachora',
        state_id: 22,
    },
    {
        name: 'Padagha',
        state_id: 22,
    },
    {
        name: 'Paithan',
        state_id: 22,
    },
    {
        name: 'Palghar',
        state_id: 22,
    },
    {
        name: 'Pali',
        state_id: 22,
    },
    {
        name: 'Panchgani',
        state_id: 22,
    },
    {
        name: 'Pandhakarwada',
        state_id: 22,
    },
    {
        name: 'Pandharpur',
        state_id: 22,
    },
    {
        name: 'Panhala',
        state_id: 22,
    },
    {
        name: 'Panvel',
        state_id: 22,
    },
    {
        name: 'Paranda',
        state_id: 22,
    },
    {
        name: 'Parbhani',
        state_id: 22,
    },
    {
        name: 'Parli',
        state_id: 22,
    },
    {
        name: 'Parola',
        state_id: 22,
    },
    {
        name: 'Partur',
        state_id: 22,
    },
    {
        name: 'Pasthal',
        state_id: 22,
    },
    {
        name: 'Patan',
        state_id: 22,
    },
    {
        name: 'Pathardi',
        state_id: 22,
    },
    {
        name: 'Pathri',
        state_id: 22,
    },
    {
        name: 'Patur',
        state_id: 22,
    },
    {
        name: 'Pawni',
        state_id: 22,
    },
    {
        name: 'Pen',
        state_id: 22,
    },
    {
        name: 'Pethumri',
        state_id: 22,
    },
    {
        name: 'Phaltan',
        state_id: 22,
    },
    {
        name: 'Pimpri',
        state_id: 22,
    },
    {
        name: 'Poladpur',
        state_id: 22,
    },
    {
        name: 'Pulgaon',
        state_id: 22,
    },
    {
        name: 'Pune',
        state_id: 22,
    },
    {
        name: 'Pune Cantonment',
        state_id: 22,
    },
    {
        name: 'Purna',
        state_id: 22,
    },
    {
        name: 'Purushottamnagar',
        state_id: 22,
    },
    {
        name: 'Pusad',
        state_id: 22,
    },
    {
        name: 'Rahimatpur',
        state_id: 22,
    },
    {
        name: 'Rahta Pimplas',
        state_id: 22,
    },
    {
        name: 'Rahuri',
        state_id: 22,
    },
    {
        name: 'Raigad',
        state_id: 22,
    },
    {
        name: 'Rajapur',
        state_id: 22,
    },
    {
        name: 'Rajgurunagar',
        state_id: 22,
    },
    {
        name: 'Rajur',
        state_id: 22,
    },
    {
        name: 'Rajura',
        state_id: 22,
    },
    {
        name: 'Ramtek',
        state_id: 22,
    },
    {
        name: 'Ratnagiri',
        state_id: 22,
    },
    {
        name: 'Ravalgaon',
        state_id: 22,
    },
    {
        name: 'Raver',
        state_id: 22,
    },
    {
        name: 'Revadanda',
        state_id: 22,
    },
    {
        name: 'Risod',
        state_id: 22,
    },
    {
        name: 'Roha Ashtami',
        state_id: 22,
    },
    {
        name: 'Sakri',
        state_id: 22,
    },
    {
        name: 'Sandor',
        state_id: 22,
    },
    {
        name: 'Sangamner',
        state_id: 22,
    },
    {
        name: 'Sangli',
        state_id: 22,
    },
    {
        name: 'Sangole',
        state_id: 22,
    },
    {
        name: 'Sasti',
        state_id: 22,
    },
    {
        name: 'Sasvad',
        state_id: 22,
    },
    {
        name: 'Satana',
        state_id: 22,
    },
    {
        name: 'Satara',
        state_id: 22,
    },
    {
        name: 'Savantvadi',
        state_id: 22,
    },
    {
        name: 'Savda',
        state_id: 22,
    },
    {
        name: 'Savner',
        state_id: 22,
    },
    {
        name: 'Sawari Jawharnagar',
        state_id: 22,
    },
    {
        name: 'Selu',
        state_id: 22,
    },
    {
        name: 'Shahada',
        state_id: 22,
    },
    {
        name: 'Shahapur',
        state_id: 22,
    },
    {
        name: 'Shegaon',
        state_id: 22,
    },
    {
        name: 'Shelar',
        state_id: 22,
    },
    {
        name: 'Shendurjana',
        state_id: 22,
    },
    {
        name: 'Shirdi',
        state_id: 22,
    },
    {
        name: 'Shirgaon',
        state_id: 22,
    },
    {
        name: 'Shirpur',
        state_id: 22,
    },
    {
        name: 'Shirur',
        state_id: 22,
    },
    {
        name: 'Shirwal',
        state_id: 22,
    },
    {
        name: 'Shivatkar',
        state_id: 22,
    },
    {
        name: 'Shrigonda',
        state_id: 22,
    },
    {
        name: 'Shrirampur',
        state_id: 22,
    },
    {
        name: 'Shrirampur Rural',
        state_id: 22,
    },
    {
        name: 'Sillewada',
        state_id: 22,
    },
    {
        name: 'Sillod',
        state_id: 22,
    },
    {
        name: 'Sindhudurg',
        state_id: 22,
    },
    {
        name: 'Sindi',
        state_id: 22,
    },
    {
        name: 'Sindi Turf Hindnagar',
        state_id: 22,
    },
    {
        name: 'Sindkhed Raja',
        state_id: 22,
    },
    {
        name: 'Singnapur',
        state_id: 22,
    },
    {
        name: 'Sinnar',
        state_id: 22,
    },
    {
        name: 'Sirur',
        state_id: 22,
    },
    {
        name: 'Sitasawangi',
        state_id: 22,
    },
    {
        name: 'Solapur',
        state_id: 22,
    },
    {
        name: 'Sonai',
        state_id: 22,
    },
    {
        name: 'Sonegaon',
        state_id: 22,
    },
    {
        name: 'Soyagaon',
        state_id: 22,
    },
    {
        name: 'Srivardhan',
        state_id: 22,
    },
    {
        name: 'Surgana',
        state_id: 22,
    },
    {
        name: 'Talegaon Dabhade',
        state_id: 22,
    },
    {
        name: 'Taloda',
        state_id: 22,
    },
    {
        name: 'Taloja',
        state_id: 22,
    },
    {
        name: 'Talwade',
        state_id: 22,
    },
    {
        name: 'Tarapur',
        state_id: 22,
    },
    {
        name: 'Tasgaon',
        state_id: 22,
    },
    {
        name: 'Tathavade',
        state_id: 22,
    },
    {
        name: 'Tekadi',
        state_id: 22,
    },
    {
        name: 'Telhara',
        state_id: 22,
    },
    {
        name: 'Thane',
        state_id: 22,
    },
    {
        name: 'Tirira',
        state_id: 22,
    },
    {
        name: 'Totaladoh',
        state_id: 22,
    },
    {
        name: 'Trimbak',
        state_id: 22,
    },
    {
        name: 'Tuljapur',
        state_id: 22,
    },
    {
        name: 'Tumsar',
        state_id: 22,
    },
    {
        name: 'Uchgaon',
        state_id: 22,
    },
    {
        name: 'Udgir',
        state_id: 22,
    },
    {
        name: 'Ulhasnagar',
        state_id: 22,
    },
    {
        name: 'Umarga',
        state_id: 22,
    },
    {
        name: 'Umarkhed',
        state_id: 22,
    },
    {
        name: 'Umarsara',
        state_id: 22,
    },
    {
        name: 'Umbar Pada Nandade',
        state_id: 22,
    },
    {
        name: 'Umred',
        state_id: 22,
    },
    {
        name: 'Umri Pragane Balapur',
        state_id: 22,
    },
    {
        name: 'Uran',
        state_id: 22,
    },
    {
        name: 'Uran Islampur',
        state_id: 22,
    },
    {
        name: 'Utekhol',
        state_id: 22,
    },
    {
        name: 'Vada',
        state_id: 22,
    },
    {
        name: 'Vadgaon',
        state_id: 22,
    },
    {
        name: 'Vadgaon Kasba',
        state_id: 22,
    },
    {
        name: 'Vaijapur',
        state_id: 22,
    },
    {
        name: 'Vanvadi',
        state_id: 22,
    },
    {
        name: 'Varangaon',
        state_id: 22,
    },
    {
        name: 'Vasai',
        state_id: 22,
    },
    {
        name: 'Vasantnagar',
        state_id: 22,
    },
    {
        name: 'Vashind',
        state_id: 22,
    },
    {
        name: 'Vengurla',
        state_id: 22,
    },
    {
        name: 'Virar',
        state_id: 22,
    },
    {
        name: 'Visapur',
        state_id: 22,
    },
    {
        name: 'Vite',
        state_id: 22,
    },
    {
        name: 'Vithalwadi',
        state_id: 22,
    },
    {
        name: 'Wadi',
        state_id: 22,
    },
    {
        name: 'Waghapur',
        state_id: 22,
    },
    {
        name: 'Wai',
        state_id: 22,
    },
    {
        name: 'Wajegaon',
        state_id: 22,
    },
    {
        name: 'Walani',
        state_id: 22,
    },
    {
        name: 'Wanadongri',
        state_id: 22,
    },
    {
        name: 'Wani',
        state_id: 22,
    },
    {
        name: 'Wardha',
        state_id: 22,
    },
    {
        name: 'Warora',
        state_id: 22,
    },
    {
        name: 'Warthi',
        state_id: 22,
    },
    {
        name: 'Warud',
        state_id: 22,
    },
    {
        name: 'Washim',
        state_id: 22,
    },
    {
        name: 'Yaval',
        state_id: 22,
    },
    {
        name: 'Yavatmal',
        state_id: 22,
    },
    {
        name: 'Yeola',
        state_id: 22,
    },
    {
        name: 'Yerkheda',
        state_id: 22,
    },
    {
        name: 'Andro',
        state_id: 23,
    },
    {
        name: 'Bijoy Govinda',
        state_id: 23,
    },
    {
        name: 'Bishnupur',
        state_id: 23,
    },
    {
        name: 'Churachandpur',
        state_id: 23,
    },
    {
        name: 'Heriok',
        state_id: 23,
    },
    {
        name: 'Imphal',
        state_id: 23,
    },
    {
        name: 'Jiribam',
        state_id: 23,
    },
    {
        name: 'Kakching',
        state_id: 23,
    },
    {
        name: 'Kakching Khunou',
        state_id: 23,
    },
    {
        name: 'Khongman',
        state_id: 23,
    },
    {
        name: 'Kumbi',
        state_id: 23,
    },
    {
        name: 'Kwakta',
        state_id: 23,
    },
    {
        name: 'Lamai',
        state_id: 23,
    },
    {
        name: 'Lamjaotongba',
        state_id: 23,
    },
    {
        name: 'Lamshang',
        state_id: 23,
    },
    {
        name: 'Lilong',
        state_id: 23,
    },
    {
        name: 'Mayang Imphal',
        state_id: 23,
    },
    {
        name: 'Moirang',
        state_id: 23,
    },
    {
        name: 'Moreh',
        state_id: 23,
    },
    {
        name: 'Nambol',
        state_id: 23,
    },
    {
        name: 'Naoriya Pakhanglakpa',
        state_id: 23,
    },
    {
        name: 'Ningthoukhong',
        state_id: 23,
    },
    {
        name: 'Oinam',
        state_id: 23,
    },
    {
        name: 'Porompat',
        state_id: 23,
    },
    {
        name: 'Samurou',
        state_id: 23,
    },
    {
        name: 'Sekmai Bazar',
        state_id: 23,
    },
    {
        name: 'Senapati',
        state_id: 23,
    },
    {
        name: 'Sikhong Sekmai',
        state_id: 23,
    },
    {
        name: 'Sugnu',
        state_id: 23,
    },
    {
        name: 'Thongkhong Laxmi Bazar',
        state_id: 23,
    },
    {
        name: 'Thoubal',
        state_id: 23,
    },
    {
        name: 'Torban',
        state_id: 23,
    },
    {
        name: 'Wangjing',
        state_id: 23,
    },
    {
        name: 'Wangoi',
        state_id: 23,
    },
    {
        name: 'Yairipok',
        state_id: 23,
    },
    {
        name: 'Baghmara',
        state_id: 24,
    },
    {
        name: 'Cherrapunji',
        state_id: 24,
    },
    {
        name: 'Jawai',
        state_id: 24,
    },
    {
        name: 'Madanrting',
        state_id: 24,
    },
    {
        name: 'Mairang',
        state_id: 24,
    },
    {
        name: 'Mawlai',
        state_id: 24,
    },
    {
        name: 'Nongmynsong',
        state_id: 24,
    },
    {
        name: 'Nongpoh',
        state_id: 24,
    },
    {
        name: 'Nongstoin',
        state_id: 24,
    },
    {
        name: 'Nongthymmai',
        state_id: 24,
    },
    {
        name: 'Pynthorumkhrah',
        state_id: 24,
    },
    {
        name: 'Resubelpara',
        state_id: 24,
    },
    {
        name: 'Shillong',
        state_id: 24,
    },
    {
        name: 'Shillong Cantonment',
        state_id: 24,
    },
    {
        name: 'Tura',
        state_id: 24,
    },
    {
        name: 'Williamnagar',
        state_id: 24,
    },
    {
        name: 'Aizawl',
        state_id: 25,
    },
    {
        name: 'Bairabi',
        state_id: 25,
    },
    {
        name: 'Biate',
        state_id: 25,
    },
    {
        name: 'Champhai',
        state_id: 25,
    },
    {
        name: 'Darlawn',
        state_id: 25,
    },
    {
        name: 'Hnahthial',
        state_id: 25,
    },
    {
        name: 'Kawnpui',
        state_id: 25,
    },
    {
        name: 'Khawhai',
        state_id: 25,
    },
    {
        name: 'Khawzawl',
        state_id: 25,
    },
    {
        name: 'Kolasib',
        state_id: 25,
    },
    {
        name: 'Lengpui',
        state_id: 25,
    },
    {
        name: 'Lunglei',
        state_id: 25,
    },
    {
        name: 'Mamit',
        state_id: 25,
    },
    {
        name: 'North Vanlaiphai',
        state_id: 25,
    },
    {
        name: 'Saiha',
        state_id: 25,
    },
    {
        name: 'Sairang',
        state_id: 25,
    },
    {
        name: 'Saitul',
        state_id: 25,
    },
    {
        name: 'Serchhip',
        state_id: 25,
    },
    {
        name: 'Thenzawl',
        state_id: 25,
    },
    {
        name: 'Tlabung',
        state_id: 25,
    },
    {
        name: 'Vairengte',
        state_id: 25,
    },
    {
        name: 'Zawlnuam',
        state_id: 25,
    },
    {
        name: 'Chumukedima',
        state_id: 26,
    },
    {
        name: 'Dimapur',
        state_id: 26,
    },
    {
        name: 'Kohima',
        state_id: 26,
    },
    {
        name: 'Mokokchung',
        state_id: 26,
    },
    {
        name: 'Mon',
        state_id: 26,
    },
    {
        name: 'Phek',
        state_id: 26,
    },
    {
        name: 'Tuensang',
        state_id: 26,
    },
    {
        name: 'Wokha',
        state_id: 26,
    },
    {
        name: 'Zunheboto',
        state_id: 26,
    },
    {
        name: 'Anandapur',
        state_id: 29,
    },
    {
        name: 'Angul',
        state_id: 29,
    },
    {
        name: 'Aska',
        state_id: 29,
    },
    {
        name: 'Athgarh',
        state_id: 29,
    },
    {
        name: 'Athmallik',
        state_id: 29,
    },
    {
        name: 'Balagoda',
        state_id: 29,
    },
    {
        name: 'Balangir',
        state_id: 29,
    },
    {
        name: 'Balasore',
        state_id: 29,
    },
    {
        name: 'Baleshwar',
        state_id: 29,
    },
    {
        name: 'Balimeta',
        state_id: 29,
    },
    {
        name: 'Balugaon',
        state_id: 29,
    },
    {
        name: 'Banapur',
        state_id: 29,
    },
    {
        name: 'Bangura',
        state_id: 29,
    },
    {
        name: 'Banki',
        state_id: 29,
    },
    {
        name: 'Banposh',
        state_id: 29,
    },
    {
        name: 'Barbil',
        state_id: 29,
    },
    {
        name: 'Bargarh',
        state_id: 29,
    },
    {
        name: 'Baripada',
        state_id: 29,
    },
    {
        name: 'Barpali',
        state_id: 29,
    },
    {
        name: 'Basudebpur',
        state_id: 29,
    },
    {
        name: 'Baudh',
        state_id: 29,
    },
    {
        name: 'Belagachhia',
        state_id: 29,
    },
    {
        name: 'Belaguntha',
        state_id: 29,
    },
    {
        name: 'Belpahar',
        state_id: 29,
    },
    {
        name: 'Berhampur',
        state_id: 29,
    },
    {
        name: 'Bhadrak',
        state_id: 29,
    },
    {
        name: 'Bhanjanagar',
        state_id: 29,
    },
    {
        name: 'Bhawanipatna',
        state_id: 29,
    },
    {
        name: 'Bhuban',
        state_id: 29,
    },
    {
        name: 'Bhubaneswar',
        state_id: 29,
    },
    {
        name: 'Binika',
        state_id: 29,
    },
    {
        name: 'Birmitrapur',
        state_id: 29,
    },
    {
        name: 'Bishama Katek',
        state_id: 29,
    },
    {
        name: 'Bolangir',
        state_id: 29,
    },
    {
        name: 'Brahmapur',
        state_id: 29,
    },
    {
        name: 'Brajrajnagar',
        state_id: 29,
    },
    {
        name: 'Buguda',
        state_id: 29,
    },
    {
        name: 'Burla',
        state_id: 29,
    },
    {
        name: 'Byasanagar',
        state_id: 29,
    },
    {
        name: 'Champua',
        state_id: 29,
    },
    {
        name: 'Chandapur',
        state_id: 29,
    },
    {
        name: 'Chandbali',
        state_id: 29,
    },
    {
        name: 'Chandili',
        state_id: 29,
    },
    {
        name: 'Charibatia',
        state_id: 29,
    },
    {
        name: 'Chatrapur',
        state_id: 29,
    },
    {
        name: 'Chikitigarh',
        state_id: 29,
    },
    {
        name: 'Chitrakonda',
        state_id: 29,
    },
    {
        name: 'Choudwar',
        state_id: 29,
    },
    {
        name: 'Cuttack',
        state_id: 29,
    },
    {
        name: 'Dadhapatna',
        state_id: 29,
    },
    {
        name: 'Daitari',
        state_id: 29,
    },
    {
        name: 'Damanjodi',
        state_id: 29,
    },
    {
        name: 'Deogarh',
        state_id: 29,
    },
    {
        name: 'Deracolliery',
        state_id: 29,
    },
    {
        name: 'Dhamanagar',
        state_id: 29,
    },
    {
        name: 'Dhenkanal',
        state_id: 29,
    },
    {
        name: 'Digapahandi',
        state_id: 29,
    },
    {
        name: 'Dungamal',
        state_id: 29,
    },
    {
        name: 'Fertilizer Corporation of Indi',
        state_id: 29,
    },
    {
        name: 'Ganjam',
        state_id: 29,
    },
    {
        name: 'Ghantapada',
        state_id: 29,
    },
    {
        name: 'Gopalpur',
        state_id: 29,
    },
    {
        name: 'Gudari',
        state_id: 29,
    },
    {
        name: 'Gunupur',
        state_id: 29,
    },
    {
        name: 'Hatibandha',
        state_id: 29,
    },
    {
        name: 'Hinjilikatu',
        state_id: 29,
    },
    {
        name: 'Hirakud',
        state_id: 29,
    },
    {
        name: 'Jagatsinghapur',
        state_id: 29,
    },
    {
        name: 'Jajpur',
        state_id: 29,
    },
    {
        name: 'Jalda',
        state_id: 29,
    },
    {
        name: 'Jaleswar',
        state_id: 29,
    },
    {
        name: 'Jatni',
        state_id: 29,
    },
    {
        name: 'Jaypur',
        state_id: 29,
    },
    {
        name: 'Jeypore',
        state_id: 29,
    },
    {
        name: 'Jharsuguda',
        state_id: 29,
    },
    {
        name: 'Jhumpura',
        state_id: 29,
    },
    {
        name: 'Joda',
        state_id: 29,
    },
    {
        name: 'Junagarh',
        state_id: 29,
    },
    {
        name: 'Kamakhyanagar',
        state_id: 29,
    },
    {
        name: 'Kantabanji',
        state_id: 29,
    },
    {
        name: 'Kantilo',
        state_id: 29,
    },
    {
        name: 'Karanja',
        state_id: 29,
    },
    {
        name: 'Kashinagara',
        state_id: 29,
    },
    {
        name: 'Kataka',
        state_id: 29,
    },
    {
        name: 'Kavisuryanagar',
        state_id: 29,
    },
    {
        name: 'Kendrapara',
        state_id: 29,
    },
    {
        name: 'Kendujhar',
        state_id: 29,
    },
    {
        name: 'Keonjhar',
        state_id: 29,
    },
    {
        name: 'Kesinga',
        state_id: 29,
    },
    {
        name: 'Khaliapali',
        state_id: 29,
    },
    {
        name: 'Khalikote',
        state_id: 29,
    },
    {
        name: 'Khandaparha',
        state_id: 29,
    },
    {
        name: 'Kharhial',
        state_id: 29,
    },
    {
        name: 'Kharhial Road',
        state_id: 29,
    },
    {
        name: 'Khatiguda',
        state_id: 29,
    },
    {
        name: 'Khurda',
        state_id: 29,
    },
    {
        name: 'Kochinda',
        state_id: 29,
    },
    {
        name: 'Kodala',
        state_id: 29,
    },
    {
        name: 'Konark',
        state_id: 29,
    },
    {
        name: 'Koraput',
        state_id: 29,
    },
    {
        name: 'Kotaparh',
        state_id: 29,
    },
    {
        name: 'Lanjigarh',
        state_id: 29,
    },
    {
        name: 'Lattikata',
        state_id: 29,
    },
    {
        name: 'Makundapur',
        state_id: 29,
    },
    {
        name: 'Malkangiri',
        state_id: 29,
    },
    {
        name: 'Mukhiguda',
        state_id: 29,
    },
    {
        name: 'Nabarangpur',
        state_id: 29,
    },
    {
        name: 'Nalco',
        state_id: 29,
    },
    {
        name: 'Naurangapur',
        state_id: 29,
    },
    {
        name: 'Nayagarh',
        state_id: 29,
    },
    {
        name: 'Nilagiri',
        state_id: 29,
    },
    {
        name: 'Nimaparha',
        state_id: 29,
    },
    {
        name: 'Nuapada',
        state_id: 29,
    },
    {
        name: 'Nuapatna',
        state_id: 29,
    },
    {
        name: 'OCL Industrialship',
        state_id: 29,
    },
    {
        name: 'Padampur',
        state_id: 29,
    },
    {
        name: 'Paradip',
        state_id: 29,
    },
    {
        name: 'Paradwip',
        state_id: 29,
    },
    {
        name: 'Parlakimidi',
        state_id: 29,
    },
    {
        name: 'Patamundai',
        state_id: 29,
    },
    {
        name: 'Patnagarh',
        state_id: 29,
    },
    {
        name: 'Phulabani',
        state_id: 29,
    },
    {
        name: 'Pipili',
        state_id: 29,
    },
    {
        name: 'Polasara',
        state_id: 29,
    },
    {
        name: 'Pratapsasan',
        state_id: 29,
    },
    {
        name: 'Puri',
        state_id: 29,
    },
    {
        name: 'Purushottampur',
        state_id: 29,
    },
    {
        name: 'Rairangpur',
        state_id: 29,
    },
    {
        name: 'Raj Gangpur',
        state_id: 29,
    },
    {
        name: 'Rambha',
        state_id: 29,
    },
    {
        name: 'Raurkela',
        state_id: 29,
    },
    {
        name: 'Raurkela Civil Township',
        state_id: 29,
    },
    {
        name: 'Rayagada',
        state_id: 29,
    },
    {
        name: 'Redhakhol',
        state_id: 29,
    },
    {
        name: 'Remuna',
        state_id: 29,
    },
    {
        name: 'Rengali',
        state_id: 29,
    },
    {
        name: 'Rourkela',
        state_id: 29,
    },
    {
        name: 'Sambalpur',
        state_id: 29,
    },
    {
        name: 'Sinapali',
        state_id: 29,
    },
    {
        name: 'Sonepur',
        state_id: 29,
    },
    {
        name: 'Sorada',
        state_id: 29,
    },
    {
        name: 'Soro',
        state_id: 29,
    },
    {
        name: 'Sunabeda',
        state_id: 29,
    },
    {
        name: 'Sundargarh',
        state_id: 29,
    },
    {
        name: 'Talcher',
        state_id: 29,
    },
    {
        name: 'Talcher Thermal Power Station ',
        state_id: 29,
    },
    {
        name: 'Tarabha',
        state_id: 29,
    },
    {
        name: 'Tensa',
        state_id: 29,
    },
    {
        name: 'Titlagarh',
        state_id: 29,
    },
    {
        name: 'Udala',
        state_id: 29,
    },
    {
        name: 'Udayagiri',
        state_id: 29,
    },
    {
        name: 'Umarkot',
        state_id: 29,
    },
    {
        name: 'Vikrampur',
        state_id: 29,
    },
    {
        name: 'Ariankuppam',
        state_id: 31,
    },
    {
        name: 'Karaikal',
        state_id: 31,
    },
    {
        name: 'Kurumbapet',
        state_id: 31,
    },
    {
        name: 'Mahe',
        state_id: 31,
    },
    {
        name: 'Ozhukarai',
        state_id: 31,
    },
    {
        name: 'Pondicherry',
        state_id: 31,
    },
    {
        name: 'Villianur',
        state_id: 31,
    },
    {
        name: 'Yanam',
        state_id: 31,
    },
    {
        name: 'Abohar',
        state_id: 32,
    },
    {
        name: 'Adampur',
        state_id: 32,
    },
    {
        name: 'Ahmedgarh',
        state_id: 32,
    },
    {
        name: 'Ajnala',
        state_id: 32,
    },
    {
        name: 'Akalgarh',
        state_id: 32,
    },
    {
        name: 'Alawalpur',
        state_id: 32,
    },
    {
        name: 'Amloh',
        state_id: 32,
    },
    {
        name: 'Amritsar',
        state_id: 32,
    },
    {
        name: 'Amritsar Cantonment',
        state_id: 32,
    },
    {
        name: 'Anandpur Sahib',
        state_id: 32,
    },
    {
        name: 'Badhni Kalan',
        state_id: 32,
    },
    {
        name: 'Bagh Purana',
        state_id: 32,
    },
    {
        name: 'Balachaur',
        state_id: 32,
    },
    {
        name: 'Banaur',
        state_id: 32,
    },
    {
        name: 'Banga',
        state_id: 32,
    },
    {
        name: 'Banur',
        state_id: 32,
    },
    {
        name: 'Baretta',
        state_id: 32,
    },
    {
        name: 'Bariwala',
        state_id: 32,
    },
    {
        name: 'Barnala',
        state_id: 32,
    },
    {
        name: 'Bassi Pathana',
        state_id: 32,
    },
    {
        name: 'Batala',
        state_id: 32,
    },
    {
        name: 'Bathinda',
        state_id: 32,
    },
    {
        name: 'Begowal',
        state_id: 32,
    },
    {
        name: 'Behrampur',
        state_id: 32,
    },
    {
        name: 'Bhabat',
        state_id: 32,
    },
    {
        name: 'Bhadur',
        state_id: 32,
    },
    {
        name: 'Bhankharpur',
        state_id: 32,
    },
    {
        name: 'Bharoli Kalan',
        state_id: 32,
    },
    {
        name: 'Bhawanigarh',
        state_id: 32,
    },
    {
        name: 'Bhikhi',
        state_id: 32,
    },
    {
        name: 'Bhikhiwind',
        state_id: 32,
    },
    {
        name: 'Bhisiana',
        state_id: 32,
    },
    {
        name: 'Bhogpur',
        state_id: 32,
    },
    {
        name: 'Bhuch',
        state_id: 32,
    },
    {
        name: 'Bhulath',
        state_id: 32,
    },
    {
        name: 'Budha Theh',
        state_id: 32,
    },
    {
        name: 'Budhlada',
        state_id: 32,
    },
    {
        name: 'Chima',
        state_id: 32,
    },
    {
        name: 'Chohal',
        state_id: 32,
    },
    {
        name: 'Dasuya',
        state_id: 32,
    },
    {
        name: 'Daulatpur',
        state_id: 32,
    },
    {
        name: 'Dera Baba Nanak',
        state_id: 32,
    },
    {
        name: 'Dera Bassi',
        state_id: 32,
    },
    {
        name: 'Dhanaula',
        state_id: 32,
    },
    {
        name: 'Dharam Kot',
        state_id: 32,
    },
    {
        name: 'Dhariwal',
        state_id: 32,
    },
    {
        name: 'Dhilwan',
        state_id: 32,
    },
    {
        name: 'Dhuri',
        state_id: 32,
    },
    {
        name: 'Dinanagar',
        state_id: 32,
    },
    {
        name: 'Dirba',
        state_id: 32,
    },
    {
        name: 'Doraha',
        state_id: 32,
    },
    {
        name: 'Faridkot',
        state_id: 32,
    },
    {
        name: 'Fateh Nangal',
        state_id: 32,
    },
    {
        name: 'Fatehgarh Churian',
        state_id: 32,
    },
    {
        name: 'Fatehgarh Sahib',
        state_id: 32,
    },
    {
        name: 'Fazilka',
        state_id: 32,
    },
    {
        name: 'Firozpur',
        state_id: 32,
    },
    {
        name: 'Firozpur Cantonment',
        state_id: 32,
    },
    {
        name: 'Gardhiwala',
        state_id: 32,
    },
    {
        name: 'Garhshankar',
        state_id: 32,
    },
    {
        name: 'Ghagga',
        state_id: 32,
    },
    {
        name: 'Ghanaur',
        state_id: 32,
    },
    {
        name: 'Giddarbaha',
        state_id: 32,
    },
    {
        name: 'Gobindgarh',
        state_id: 32,
    },
    {
        name: 'Goniana',
        state_id: 32,
    },
    {
        name: 'Goraya',
        state_id: 32,
    },
    {
        name: 'Gurdaspur',
        state_id: 32,
    },
    {
        name: 'Guru Har Sahai',
        state_id: 32,
    },
    {
        name: 'Hajipur',
        state_id: 32,
    },
    {
        name: 'Handiaya',
        state_id: 32,
    },
    {
        name: 'Hariana',
        state_id: 32,
    },
    {
        name: 'Hoshiarpur',
        state_id: 32,
    },
    {
        name: 'Hussainpur',
        state_id: 32,
    },
    {
        name: 'Jagraon',
        state_id: 32,
    },
    {
        name: 'Jaitu',
        state_id: 32,
    },
    {
        name: 'Jalalabad',
        state_id: 32,
    },
    {
        name: 'Jalandhar',
        state_id: 32,
    },
    {
        name: 'Jalandhar Cantonment',
        state_id: 32,
    },
    {
        name: 'Jandiala',
        state_id: 32,
    },
    {
        name: 'Jugial',
        state_id: 32,
    },
    {
        name: 'Kalanaur',
        state_id: 32,
    },
    {
        name: 'Kapurthala',
        state_id: 32,
    },
    {
        name: 'Karoran',
        state_id: 32,
    },
    {
        name: 'Kartarpur',
        state_id: 32,
    },
    {
        name: 'Khamanon',
        state_id: 32,
    },
    {
        name: 'Khanauri',
        state_id: 32,
    },
    {
        name: 'Khanna',
        state_id: 32,
    },
    {
        name: 'Kharar',
        state_id: 32,
    },
    {
        name: 'Khem Karan',
        state_id: 32,
    },
    {
        name: 'Kot Fatta',
        state_id: 32,
    },
    {
        name: 'Kot Isa Khan',
        state_id: 32,
    },
    {
        name: 'Kot Kapura',
        state_id: 32,
    },
    {
        name: 'Kotkapura',
        state_id: 32,
    },
    {
        name: 'Kurali',
        state_id: 32,
    },
    {
        name: 'Lalru',
        state_id: 32,
    },
    {
        name: 'Lehra Gaga',
        state_id: 32,
    },
    {
        name: 'Lodhian Khas',
        state_id: 32,
    },
    {
        name: 'Longowal',
        state_id: 32,
    },
    {
        name: 'Ludhiana',
        state_id: 32,
    },
    {
        name: 'Machhiwara',
        state_id: 32,
    },
    {
        name: 'Mahilpur',
        state_id: 32,
    },
    {
        name: 'Majitha',
        state_id: 32,
    },
    {
        name: 'Makhu',
        state_id: 32,
    },
    {
        name: 'Malaut',
        state_id: 32,
    },
    {
        name: 'Malerkotla',
        state_id: 32,
    },
    {
        name: 'Maloud',
        state_id: 32,
    },
    {
        name: 'Mandi Gobindgarh',
        state_id: 32,
    },
    {
        name: 'Mansa',
        state_id: 32,
    },
    {
        name: 'Maur',
        state_id: 32,
    },
    {
        name: 'Moga',
        state_id: 32,
    },
    {
        name: 'Mohali',
        state_id: 32,
    },
    {
        name: 'Moonak',
        state_id: 32,
    },
    {
        name: 'Morinda',
        state_id: 32,
    },
    {
        name: 'Mukerian',
        state_id: 32,
    },
    {
        name: 'Muktsar',
        state_id: 32,
    },
    {
        name: 'Mullanpur Dakha',
        state_id: 32,
    },
    {
        name: 'Mullanpur Garibdas',
        state_id: 32,
    },
    {
        name: 'Munak',
        state_id: 32,
    },
    {
        name: 'Muradpura',
        state_id: 32,
    },
    {
        name: 'Nabha',
        state_id: 32,
    },
    {
        name: 'Nakodar',
        state_id: 32,
    },
    {
        name: 'Nangal',
        state_id: 32,
    },
    {
        name: 'Nawashahr',
        state_id: 32,
    },
    {
        name: 'Naya Nangal',
        state_id: 32,
    },
    {
        name: 'Nehon',
        state_id: 32,
    },
    {
        name: 'Nurmahal',
        state_id: 32,
    },
    {
        name: 'Pathankot',
        state_id: 32,
    },
    {
        name: 'Patiala',
        state_id: 32,
    },
    {
        name: 'Patti',
        state_id: 32,
    },
    {
        name: 'Pattran',
        state_id: 32,
    },
    {
        name: 'Payal',
        state_id: 32,
    },
    {
        name: 'Phagwara',
        state_id: 32,
    },
    {
        name: 'Phillaur',
        state_id: 32,
    },
    {
        name: 'Qadian',
        state_id: 32,
    },
    {
        name: 'Rahon',
        state_id: 32,
    },
    {
        name: 'Raikot',
        state_id: 32,
    },
    {
        name: 'Raja Sansi',
        state_id: 32,
    },
    {
        name: 'Rajpura',
        state_id: 32,
    },
    {
        name: 'Ram Das',
        state_id: 32,
    },
    {
        name: 'Raman',
        state_id: 32,
    },
    {
        name: 'Rampura',
        state_id: 32,
    },
    {
        name: 'Rayya',
        state_id: 32,
    },
    {
        name: 'Rupnagar',
        state_id: 32,
    },
    {
        name: 'Rurki Kasba',
        state_id: 32,
    },
    {
        name: 'Sahnewal',
        state_id: 32,
    },
    {
        name: 'Samana',
        state_id: 32,
    },
    {
        name: 'Samrala',
        state_id: 32,
    },
    {
        name: 'Sanaur',
        state_id: 32,
    },
    {
        name: 'Sangat',
        state_id: 32,
    },
    {
        name: 'Sangrur',
        state_id: 32,
    },
    {
        name: 'Sansarpur',
        state_id: 32,
    },
    {
        name: 'Sardulgarh',
        state_id: 32,
    },
    {
        name: 'Shahkot',
        state_id: 32,
    },
    {
        name: 'Sham Churasi',
        state_id: 32,
    },
    {
        name: 'Shekhpura',
        state_id: 32,
    },
    {
        name: 'Sirhind',
        state_id: 32,
    },
    {
        name: 'Sri Hargobindpur',
        state_id: 32,
    },
    {
        name: 'Sujanpur',
        state_id: 32,
    },
    {
        name: 'Sultanpur Lodhi',
        state_id: 32,
    },
    {
        name: 'Sunam',
        state_id: 32,
    },
    {
        name: 'Talwandi Bhai',
        state_id: 32,
    },
    {
        name: 'Talwara',
        state_id: 32,
    },
    {
        name: 'Tappa',
        state_id: 32,
    },
    {
        name: 'Tarn Taran',
        state_id: 32,
    },
    {
        name: 'Urmar Tanda',
        state_id: 32,
    },
    {
        name: 'Zira',
        state_id: 32,
    },
    {
        name: 'Zirakpur',
        state_id: 32,
    },
    {
        name: 'Abu Road',
        state_id: 33,
    },
    {
        name: 'Ajmer',
        state_id: 33,
    },
    {
        name: 'Aklera',
        state_id: 33,
    },
    {
        name: 'Alwar',
        state_id: 33,
    },
    {
        name: 'Amet',
        state_id: 33,
    },
    {
        name: 'Antah',
        state_id: 33,
    },
    {
        name: 'Anupgarh',
        state_id: 33,
    },
    {
        name: 'Asind',
        state_id: 33,
    },
    {
        name: 'Bagar',
        state_id: 33,
    },
    {
        name: 'Bagru',
        state_id: 33,
    },
    {
        name: 'Bahror',
        state_id: 33,
    },
    {
        name: 'Bakani',
        state_id: 33,
    },
    {
        name: 'Bali',
        state_id: 33,
    },
    {
        name: 'Balotra',
        state_id: 33,
    },
    {
        name: 'Bandikui',
        state_id: 33,
    },
    {
        name: 'Banswara',
        state_id: 33,
    },
    {
        name: 'Baran',
        state_id: 33,
    },
    {
        name: 'Bari',
        state_id: 33,
    },
    {
        name: 'Bari Sadri',
        state_id: 33,
    },
    {
        name: 'Barmer',
        state_id: 33,
    },
    {
        name: 'Basi',
        state_id: 33,
    },
    {
        name: 'Basni Belima',
        state_id: 33,
    },
    {
        name: 'Baswa',
        state_id: 33,
    },
    {
        name: 'Bayana',
        state_id: 33,
    },
    {
        name: 'Beawar',
        state_id: 33,
    },
    {
        name: 'Begun',
        state_id: 33,
    },
    {
        name: 'Bhadasar',
        state_id: 33,
    },
    {
        name: 'Bhadra',
        state_id: 33,
    },
    {
        name: 'Bhalariya',
        state_id: 33,
    },
    {
        name: 'Bharatpur',
        state_id: 33,
    },
    {
        name: 'Bhasawar',
        state_id: 33,
    },
    {
        name: 'Bhawani Mandi',
        state_id: 33,
    },
    {
        name: 'Bhawri',
        state_id: 33,
    },
    {
        name: 'Bhilwara',
        state_id: 33,
    },
    {
        name: 'Bhindar',
        state_id: 33,
    },
    {
        name: 'Bhinmal',
        state_id: 33,
    },
    {
        name: 'Bhiwadi',
        state_id: 33,
    },
    {
        name: 'Bijoliya Kalan',
        state_id: 33,
    },
    {
        name: 'Bikaner',
        state_id: 33,
    },
    {
        name: 'Bilara',
        state_id: 33,
    },
    {
        name: 'Bissau',
        state_id: 33,
    },
    {
        name: 'Borkhera',
        state_id: 33,
    },
    {
        name: 'Budhpura',
        state_id: 33,
    },
    {
        name: 'Bundi',
        state_id: 33,
    },
    {
        name: 'Chatsu',
        state_id: 33,
    },
    {
        name: 'Chechat',
        state_id: 33,
    },
    {
        name: 'Chhabra',
        state_id: 33,
    },
    {
        name: 'Chhapar',
        state_id: 33,
    },
    {
        name: 'Chhipa Barod',
        state_id: 33,
    },
    {
        name: 'Chhoti Sadri',
        state_id: 33,
    },
    {
        name: 'Chirawa',
        state_id: 33,
    },
    {
        name: 'Chittaurgarh',
        state_id: 33,
    },
    {
        name: 'Chittorgarh',
        state_id: 33,
    },
    {
        name: 'Chomun',
        state_id: 33,
    },
    {
        name: 'Churu',
        state_id: 33,
    },
    {
        name: 'Daosa',
        state_id: 33,
    },
    {
        name: 'Dariba',
        state_id: 33,
    },
    {
        name: 'Dausa',
        state_id: 33,
    },
    {
        name: 'Deoli',
        state_id: 33,
    },
    {
        name: 'Deshnok',
        state_id: 33,
    },
    {
        name: 'Devgarh',
        state_id: 33,
    },
    {
        name: 'Devli',
        state_id: 33,
    },
    {
        name: 'Dhariawad',
        state_id: 33,
    },
    {
        name: 'Dhaulpur',
        state_id: 33,
    },
    {
        name: 'Dholpur',
        state_id: 33,
    },
    {
        name: 'Didwana',
        state_id: 33,
    },
    {
        name: 'Dig',
        state_id: 33,
    },
    {
        name: 'Dungargarh',
        state_id: 33,
    },
    {
        name: 'Dungarpur',
        state_id: 33,
    },
    {
        name: 'Falna',
        state_id: 33,
    },
    {
        name: 'Fatehnagar',
        state_id: 33,
    },
    {
        name: 'Fatehpur',
        state_id: 33,
    },
    {
        name: 'Gajsinghpur',
        state_id: 33,
    },
    {
        name: 'Galiakot',
        state_id: 33,
    },
    {
        name: 'Ganganagar',
        state_id: 33,
    },
    {
        name: 'Gangapur',
        state_id: 33,
    },
    {
        name: 'Goredi Chancha',
        state_id: 33,
    },
    {
        name: 'Gothra',
        state_id: 33,
    },
    {
        name: 'Govindgarh',
        state_id: 33,
    },
    {
        name: 'Gulabpura',
        state_id: 33,
    },
    {
        name: 'Hanumangarh',
        state_id: 33,
    },
    {
        name: 'Hindaun',
        state_id: 33,
    },
    {
        name: 'Indragarh',
        state_id: 33,
    },
    {
        name: 'Jahazpur',
        state_id: 33,
    },
    {
        name: 'Jaipur',
        state_id: 33,
    },
    {
        name: 'Jaisalmer',
        state_id: 33,
    },
    {
        name: 'Jaiselmer',
        state_id: 33,
    },
    {
        name: 'Jaitaran',
        state_id: 33,
    },
    {
        name: 'Jalore',
        state_id: 33,
    },
    {
        name: 'Jhalawar',
        state_id: 33,
    },
    {
        name: 'Jhalrapatan',
        state_id: 33,
    },
    {
        name: 'Jhunjhunun',
        state_id: 33,
    },
    {
        name: 'Jobner',
        state_id: 33,
    },
    {
        name: 'Jodhpur',
        state_id: 33,
    },
    {
        name: 'Kaithun',
        state_id: 33,
    },
    {
        name: 'Kaman',
        state_id: 33,
    },
    {
        name: 'Kankroli',
        state_id: 33,
    },
    {
        name: 'Kanor',
        state_id: 33,
    },
    {
        name: 'Kapasan',
        state_id: 33,
    },
    {
        name: 'Kaprain',
        state_id: 33,
    },
    {
        name: 'Karanpura',
        state_id: 33,
    },
    {
        name: 'Karauli',
        state_id: 33,
    },
    {
        name: 'Kekri',
        state_id: 33,
    },
    {
        name: 'Keshorai Patan',
        state_id: 33,
    },
    {
        name: 'Kesrisinghpur',
        state_id: 33,
    },
    {
        name: 'Khairthal',
        state_id: 33,
    },
    {
        name: 'Khandela',
        state_id: 33,
    },
    {
        name: 'Khanpur',
        state_id: 33,
    },
    {
        name: 'Kherli',
        state_id: 33,
    },
    {
        name: 'Kherliganj',
        state_id: 33,
    },
    {
        name: 'Kherwara Chhaoni',
        state_id: 33,
    },
    {
        name: 'Khetri',
        state_id: 33,
    },
    {
        name: 'Kiranipura',
        state_id: 33,
    },
    {
        name: 'Kishangarh',
        state_id: 33,
    },
    {
        name: 'Kishangarh Ranwal',
        state_id: 33,
    },
    {
        name: 'Kolvi Rajendrapura',
        state_id: 33,
    },
    {
        name: 'Kot Putli',
        state_id: 33,
    },
    {
        name: 'Kota',
        state_id: 33,
    },
    {
        name: 'Kuchaman',
        state_id: 33,
    },
    {
        name: 'Kuchera',
        state_id: 33,
    },
    {
        name: 'Kumbhalgarh',
        state_id: 33,
    },
    {
        name: 'Kumbhkot',
        state_id: 33,
    },
    {
        name: 'Kumher',
        state_id: 33,
    },
    {
        name: 'Kushalgarh',
        state_id: 33,
    },
    {
        name: 'Lachhmangarh',
        state_id: 33,
    },
    {
        name: 'Ladnun',
        state_id: 33,
    },
    {
        name: 'Lakheri',
        state_id: 33,
    },
    {
        name: 'Lalsot',
        state_id: 33,
    },
    {
        name: 'Losal',
        state_id: 33,
    },
    {
        name: 'Madanganj',
        state_id: 33,
    },
    {
        name: 'Mahu Kalan',
        state_id: 33,
    },
    {
        name: 'Mahwa',
        state_id: 33,
    },
    {
        name: 'Makrana',
        state_id: 33,
    },
    {
        name: 'Malpura',
        state_id: 33,
    },
    {
        name: 'Mandal',
        state_id: 33,
    },
    {
        name: 'Mandalgarh',
        state_id: 33,
    },
    {
        name: 'Mandawar',
        state_id: 33,
    },
    {
        name: 'Mandwa',
        state_id: 33,
    },
    {
        name: 'Mangrol',
        state_id: 33,
    },
    {
        name: 'Manohar Thana',
        state_id: 33,
    },
    {
        name: 'Manoharpur',
        state_id: 33,
    },
    {
        name: 'Marwar',
        state_id: 33,
    },
    {
        name: 'Merta',
        state_id: 33,
    },
    {
        name: 'Modak',
        state_id: 33,
    },
    {
        name: 'Mount Abu',
        state_id: 33,
    },
    {
        name: 'Mukandgarh',
        state_id: 33,
    },
    {
        name: 'Mundwa',
        state_id: 33,
    },
    {
        name: 'Nadbai',
        state_id: 33,
    },
    {
        name: 'Naenwa',
        state_id: 33,
    },
    {
        name: 'Nagar',
        state_id: 33,
    },
    {
        name: 'Nagaur',
        state_id: 33,
    },
    {
        name: 'Napasar',
        state_id: 33,
    },
    {
        name: 'Naraina',
        state_id: 33,
    },
    {
        name: 'Nasirabad',
        state_id: 33,
    },
    {
        name: 'Nathdwara',
        state_id: 33,
    },
    {
        name: 'Nawa',
        state_id: 33,
    },
    {
        name: 'Nawalgarh',
        state_id: 33,
    },
    {
        name: 'Neem Ka Thana',
        state_id: 33,
    },
    {
        name: 'Neemrana',
        state_id: 33,
    },
    {
        name: 'Newa Talai',
        state_id: 33,
    },
    {
        name: 'Nimaj',
        state_id: 33,
    },
    {
        name: 'Nimbahera',
        state_id: 33,
    },
    {
        name: 'Niwai',
        state_id: 33,
    },
    {
        name: 'Nohar',
        state_id: 33,
    },
    {
        name: 'Nokha',
        state_id: 33,
    },
    {
        name: 'One SGM',
        state_id: 33,
    },
    {
        name: 'Padampur',
        state_id: 33,
    },
    {
        name: 'Pali',
        state_id: 33,
    },
    {
        name: 'Partapur',
        state_id: 33,
    },
    {
        name: 'Parvatsar',
        state_id: 33,
    },
    {
        name: 'Pasoond',
        state_id: 33,
    },
    {
        name: 'Phalna',
        state_id: 33,
    },
    {
        name: 'Phalodi',
        state_id: 33,
    },
    {
        name: 'Phulera',
        state_id: 33,
    },
    {
        name: 'Pilani',
        state_id: 33,
    },
    {
        name: 'Pilibanga',
        state_id: 33,
    },
    {
        name: 'Pindwara',
        state_id: 33,
    },
    {
        name: 'Pipalia Kalan',
        state_id: 33,
    },
    {
        name: 'Pipar',
        state_id: 33,
    },
    {
        name: 'Pirawa',
        state_id: 33,
    },
    {
        name: 'Pokaran',
        state_id: 33,
    },
    {
        name: 'Pratapgarh',
        state_id: 33,
    },
    {
        name: 'Pushkar',
        state_id: 33,
    },
    {
        name: 'Raipur',
        state_id: 33,
    },
    {
        name: 'Raisinghnagar',
        state_id: 33,
    },
    {
        name: 'Rajakhera',
        state_id: 33,
    },
    {
        name: 'Rajaldesar',
        state_id: 33,
    },
    {
        name: 'Rajgarh',
        state_id: 33,
    },
    {
        name: 'Rajsamand',
        state_id: 33,
    },
    {
        name: 'Ramganj Mandi',
        state_id: 33,
    },
    {
        name: 'Ramgarh',
        state_id: 33,
    },
    {
        name: 'Rani',
        state_id: 33,
    },
    {
        name: 'Raniwara',
        state_id: 33,
    },
    {
        name: 'Ratan Nagar',
        state_id: 33,
    },
    {
        name: 'Ratangarh',
        state_id: 33,
    },
    {
        name: 'Rawatbhata',
        state_id: 33,
    },
    {
        name: 'Rawatsar',
        state_id: 33,
    },
    {
        name: 'Rikhabdev',
        state_id: 33,
    },
    {
        name: 'Ringas',
        state_id: 33,
    },
    {
        name: 'Sadri',
        state_id: 33,
    },
    {
        name: 'Sadulshahar',
        state_id: 33,
    },
    {
        name: 'Sagwara',
        state_id: 33,
    },
    {
        name: 'Salumbar',
        state_id: 33,
    },
    {
        name: 'Sambhar',
        state_id: 33,
    },
    {
        name: 'Samdari',
        state_id: 33,
    },
    {
        name: 'Sanchor',
        state_id: 33,
    },
    {
        name: 'Sangariya',
        state_id: 33,
    },
    {
        name: 'Sangod',
        state_id: 33,
    },
    {
        name: 'Sardarshahr',
        state_id: 33,
    },
    {
        name: 'Sarwar',
        state_id: 33,
    },
    {
        name: 'Satal Kheri',
        state_id: 33,
    },
    {
        name: 'Sawai Madhopur',
        state_id: 33,
    },
    {
        name: 'Sewan Kalan',
        state_id: 33,
    },
    {
        name: 'Shahpura',
        state_id: 33,
    },
    {
        name: 'Sheoganj',
        state_id: 33,
    },
    {
        name: 'Sikar',
        state_id: 33,
    },
    {
        name: 'Sirohi',
        state_id: 33,
    },
    {
        name: 'Siwana',
        state_id: 33,
    },
    {
        name: 'Sogariya',
        state_id: 33,
    },
    {
        name: 'Sojat',
        state_id: 33,
    },
    {
        name: 'Sojat Road',
        state_id: 33,
    },
    {
        name: 'Sri Madhopur',
        state_id: 33,
    },
    {
        name: 'Sriganganagar',
        state_id: 33,
    },
    {
        name: 'Sujangarh',
        state_id: 33,
    },
    {
        name: 'Suket',
        state_id: 33,
    },
    {
        name: 'Sumerpur',
        state_id: 33,
    },
    {
        name: 'Sunel',
        state_id: 33,
    },
    {
        name: 'Surajgarh',
        state_id: 33,
    },
    {
        name: 'Suratgarh',
        state_id: 33,
    },
    {
        name: 'Swaroopganj',
        state_id: 33,
    },
    {
        name: 'Takhatgarh',
        state_id: 33,
    },
    {
        name: 'Taranagar',
        state_id: 33,
    },
    {
        name: 'Three STR',
        state_id: 33,
    },
    {
        name: 'Tijara',
        state_id: 33,
    },
    {
        name: 'Toda Bhim',
        state_id: 33,
    },
    {
        name: 'Toda Raisingh',
        state_id: 33,
    },
    {
        name: 'Todra',
        state_id: 33,
    },
    {
        name: 'Tonk',
        state_id: 33,
    },
    {
        name: 'Udaipur',
        state_id: 33,
    },
    {
        name: 'Udpura',
        state_id: 33,
    },
    {
        name: 'Uniara',
        state_id: 33,
    },
    {
        name: 'Vanasthali',
        state_id: 33,
    },
    {
        name: 'Vidyavihar',
        state_id: 33,
    },
    {
        name: 'Vijainagar',
        state_id: 33,
    },
    {
        name: 'Viratnagar',
        state_id: 33,
    },
    {
        name: 'Wer',
        state_id: 33,
    },
    {
        name: 'Gangtok',
        state_id: 34,
    },
    {
        name: 'Gezing',
        state_id: 34,
    },
    {
        name: 'Jorethang',
        state_id: 34,
    },
    {
        name: 'Mangan',
        state_id: 34,
    },
    {
        name: 'Namchi',
        state_id: 34,
    },
    {
        name: 'Naya Bazar',
        state_id: 34,
    },
    {
        name: 'No City',
        state_id: 34,
    },
    {
        name: 'Rangpo',
        state_id: 34,
    },
    {
        name: 'Sikkim',
        state_id: 34,
    },
    {
        name: 'Singtam',
        state_id: 34,
    },
    {
        name: 'Upper Tadong',
        state_id: 34,
    },
    {
        name: 'Abiramam',
        state_id: 35,
    },
    {
        name: 'Achampudur',
        state_id: 35,
    },
    {
        name: 'Acharapakkam',
        state_id: 35,
    },
    {
        name: 'Acharipallam',
        state_id: 35,
    },
    {
        name: 'Achipatti',
        state_id: 35,
    },
    {
        name: 'Adikaratti',
        state_id: 35,
    },
    {
        name: 'Adiramapattinam',
        state_id: 35,
    },
    {
        name: 'Aduturai',
        state_id: 35,
    },
    {
        name: 'Adyar',
        state_id: 35,
    },
    {
        name: 'Agaram',
        state_id: 35,
    },
    {
        name: 'Agasthiswaram',
        state_id: 35,
    },
    {
        name: 'Akkaraipettai',
        state_id: 35,
    },
    {
        name: 'Alagappapuram',
        state_id: 35,
    },
    {
        name: 'Alagapuri',
        state_id: 35,
    },
    {
        name: 'Alampalayam',
        state_id: 35,
    },
    {
        name: 'Alandur',
        state_id: 35,
    },
    {
        name: 'Alanganallur',
        state_id: 35,
    },
    {
        name: 'Alangayam',
        state_id: 35,
    },
    {
        name: 'Alangudi',
        state_id: 35,
    },
    {
        name: 'Alangulam',
        state_id: 35,
    },
    {
        name: 'Alanthurai',
        state_id: 35,
    },
    {
        name: 'Alapakkam',
        state_id: 35,
    },
    {
        name: 'Allapuram',
        state_id: 35,
    },
    {
        name: 'Alur',
        state_id: 35,
    },
    {
        name: 'Alwar Tirunagari',
        state_id: 35,
    },
    {
        name: 'Alwarkurichi',
        state_id: 35,
    },
    {
        name: 'Ambasamudram',
        state_id: 35,
    },
    {
        name: 'Ambur',
        state_id: 35,
    },
    {
        name: 'Ammainaickanur',
        state_id: 35,
    },
    {
        name: 'Ammaparikuppam',
        state_id: 35,
    },
    {
        name: 'Ammapettai',
        state_id: 35,
    },
    {
        name: 'Ammavarikuppam',
        state_id: 35,
    },
    {
        name: 'Ammur',
        state_id: 35,
    },
    {
        name: 'Anaimalai',
        state_id: 35,
    },
    {
        name: 'Anaiyur',
        state_id: 35,
    },
    {
        name: 'Anakaputhur',
        state_id: 35,
    },
    {
        name: 'Ananthapuram',
        state_id: 35,
    },
    {
        name: 'Andanappettai',
        state_id: 35,
    },
    {
        name: 'Andipalayam',
        state_id: 35,
    },
    {
        name: 'Andippatti',
        state_id: 35,
    },
    {
        name: 'Anjugramam',
        state_id: 35,
    },
    {
        name: 'Annamalainagar',
        state_id: 35,
    },
    {
        name: 'Annavasal',
        state_id: 35,
    },
    {
        name: 'Annur',
        state_id: 35,
    },
    {
        name: 'Anthiyur',
        state_id: 35,
    },
    {
        name: 'Appakudal',
        state_id: 35,
    },
    {
        name: 'Arachalur',
        state_id: 35,
    },
    {
        name: 'Arakandanallur',
        state_id: 35,
    },
    {
        name: 'Arakonam',
        state_id: 35,
    },
    {
        name: 'Aralvaimozhi',
        state_id: 35,
    },
    {
        name: 'Arani',
        state_id: 35,
    },
    {
        name: 'Arani Road',
        state_id: 35,
    },
    {
        name: 'Arantangi',
        state_id: 35,
    },
    {
        name: 'Arasiramani',
        state_id: 35,
    },
    {
        name: 'Aravakurichi',
        state_id: 35,
    },
    {
        name: 'Aravankadu',
        state_id: 35,
    },
    {
        name: 'Arcot',
        state_id: 35,
    },
    {
        name: 'Arimalam',
        state_id: 35,
    },
    {
        name: 'Ariyalur',
        state_id: 35,
    },
    {
        name: 'Ariyappampalayam',
        state_id: 35,
    },
    {
        name: 'Ariyur',
        state_id: 35,
    },
    {
        name: 'Arni',
        state_id: 35,
    },
    {
        name: 'Arulmigu Thirumuruganpundi',
        state_id: 35,
    },
    {
        name: 'Arumanai',
        state_id: 35,
    },
    {
        name: 'Arumbavur',
        state_id: 35,
    },
    {
        name: 'Arumuganeri',
        state_id: 35,
    },
    {
        name: 'Aruppukkottai',
        state_id: 35,
    },
    {
        name: 'Ashokapuram',
        state_id: 35,
    },
    {
        name: 'Athani',
        state_id: 35,
    },
    {
        name: 'Athanur',
        state_id: 35,
    },
    {
        name: 'Athimarapatti',
        state_id: 35,
    },
    {
        name: 'Athipattu',
        state_id: 35,
    },
    {
        name: 'Athur',
        state_id: 35,
    },
    {
        name: 'Attayyampatti',
        state_id: 35,
    },
    {
        name: 'Attur',
        state_id: 35,
    },
    {
        name: 'Auroville',
        state_id: 35,
    },
    {
        name: 'Avadattur',
        state_id: 35,
    },
    {
        name: 'Avadi',
        state_id: 35,
    },
    {
        name: 'Avalpundurai',
        state_id: 35,
    },
    {
        name: 'Avaniapuram',
        state_id: 35,
    },
    {
        name: 'Avinashi',
        state_id: 35,
    },
    {
        name: 'Ayakudi',
        state_id: 35,
    },
    {
        name: 'Ayanadaippu',
        state_id: 35,
    },
    {
        name: 'Aygudi',
        state_id: 35,
    },
    {
        name: 'Ayothiapattinam',
        state_id: 35,
    },
    {
        name: 'Ayyalur',
        state_id: 35,
    },
    {
        name: 'Ayyampalayam',
        state_id: 35,
    },
    {
        name: 'Ayyampettai',
        state_id: 35,
    },
    {
        name: 'Azhagiapandiapuram',
        state_id: 35,
    },
    {
        name: 'Balakrishnampatti',
        state_id: 35,
    },
    {
        name: 'Balakrishnapuram',
        state_id: 35,
    },
    {
        name: 'Balapallam',
        state_id: 35,
    },
    {
        name: 'Balasamudram',
        state_id: 35,
    },
    {
        name: 'Bargur',
        state_id: 35,
    },
    {
        name: 'Belur',
        state_id: 35,
    },
    {
        name: 'Berhatty',
        state_id: 35,
    },
    {
        name: 'Bhavani',
        state_id: 35,
    },
    {
        name: 'Bhawanisagar',
        state_id: 35,
    },
    {
        name: 'Bhuvanagiri',
        state_id: 35,
    },
    {
        name: 'Bikketti',
        state_id: 35,
    },
    {
        name: 'Bodinayakkanur',
        state_id: 35,
    },
    {
        name: 'Brahmana Periya Agraharam',
        state_id: 35,
    },
    {
        name: 'Buthapandi',
        state_id: 35,
    },
    {
        name: 'Buthipuram',
        state_id: 35,
    },
    {
        name: 'Chatrapatti',
        state_id: 35,
    },
    {
        name: 'Chembarambakkam',
        state_id: 35,
    },
    {
        name: 'Chengalpattu',
        state_id: 35,
    },
    {
        name: 'Chengam',
        state_id: 35,
    },
    {
        name: 'Chennai',
        state_id: 35,
    },
    {
        name: 'Chennasamudram',
        state_id: 35,
    },
    {
        name: 'Chennimalai',
        state_id: 35,
    },
    {
        name: 'Cheranmadevi',
        state_id: 35,
    },
    {
        name: 'Cheruvanki',
        state_id: 35,
    },
    {
        name: 'Chetpet',
        state_id: 35,
    },
    {
        name: 'Chettiarpatti',
        state_id: 35,
    },
    {
        name: 'Chettipalaiyam',
        state_id: 35,
    },
    {
        name: 'Chettipalayam Cantonment',
        state_id: 35,
    },
    {
        name: 'Chettithangal',
        state_id: 35,
    },
    {
        name: 'Cheyur',
        state_id: 35,
    },
    {
        name: 'Cheyyar',
        state_id: 35,
    },
    {
        name: 'Chidambaram',
        state_id: 35,
    },
    {
        name: 'Chinalapatti',
        state_id: 35,
    },
    {
        name: 'Chinna Anuppanadi',
        state_id: 35,
    },
    {
        name: 'Chinna Salem',
        state_id: 35,
    },
    {
        name: 'Chinnakkampalayam',
        state_id: 35,
    },
    {
        name: 'Chinnammanur',
        state_id: 35,
    },
    {
        name: 'Chinnampalaiyam',
        state_id: 35,
    },
    {
        name: 'Chinnasekkadu',
        state_id: 35,
    },
    {
        name: 'Chinnavedampatti',
        state_id: 35,
    },
    {
        name: 'Chitlapakkam',
        state_id: 35,
    },
    {
        name: 'Chittodu',
        state_id: 35,
    },
    {
        name: 'Cholapuram',
        state_id: 35,
    },
    {
        name: 'Coimbatore',
        state_id: 35,
    },
    {
        name: 'Coonoor',
        state_id: 35,
    },
    {
        name: 'Courtalam',
        state_id: 35,
    },
    {
        name: 'Cuddalore',
        state_id: 35,
    },
    {
        name: 'Dalavaipatti',
        state_id: 35,
    },
    {
        name: 'Darasuram',
        state_id: 35,
    },
    {
        name: 'Denkanikottai',
        state_id: 35,
    },
    {
        name: 'Desur',
        state_id: 35,
    },
    {
        name: 'Devadanapatti',
        state_id: 35,
    },
    {
        name: 'Devakkottai',
        state_id: 35,
    },
    {
        name: 'Devakottai',
        state_id: 35,
    },
    {
        name: 'Devanangurichi',
        state_id: 35,
    },
    {
        name: 'Devarshola',
        state_id: 35,
    },
    {
        name: 'Devasthanam',
        state_id: 35,
    },
    {
        name: 'Dhalavoipuram',
        state_id: 35,
    },
    {
        name: 'Dhali',
        state_id: 35,
    },
    {
        name: 'Dhaliyur',
        state_id: 35,
    },
    {
        name: 'Dharapadavedu',
        state_id: 35,
    },
    {
        name: 'Dharapuram',
        state_id: 35,
    },
    {
        name: 'Dharmapuri',
        state_id: 35,
    },
    {
        name: 'Dindigul',
        state_id: 35,
    },
    {
        name: 'Dusi',
        state_id: 35,
    },
    {
        name: 'Edaganasalai',
        state_id: 35,
    },
    {
        name: 'Edaikodu',
        state_id: 35,
    },
    {
        name: 'Edakalinadu',
        state_id: 35,
    },
    {
        name: 'Elathur',
        state_id: 35,
    },
    {
        name: 'Elayirampannai',
        state_id: 35,
    },
    {
        name: 'Elumalai',
        state_id: 35,
    },
    {
        name: 'Eral',
        state_id: 35,
    },
    {
        name: 'Eraniel',
        state_id: 35,
    },
    {
        name: 'Eriodu',
        state_id: 35,
    },
    {
        name: 'Erode',
        state_id: 35,
    },
    {
        name: 'Erumaipatti',
        state_id: 35,
    },
    {
        name: 'Eruvadi',
        state_id: 35,
    },
    {
        name: 'Ethapur',
        state_id: 35,
    },
    {
        name: 'Ettaiyapuram',
        state_id: 35,
    },
    {
        name: 'Ettimadai',
        state_id: 35,
    },
    {
        name: 'Ezhudesam',
        state_id: 35,
    },
    {
        name: 'Ganapathipuram',
        state_id: 35,
    },
    {
        name: 'Gandhi Nagar',
        state_id: 35,
    },
    {
        name: 'Gangaikondan',
        state_id: 35,
    },
    {
        name: 'Gangavalli',
        state_id: 35,
    },
    {
        name: 'Ganguvarpatti',
        state_id: 35,
    },
    {
        name: 'Gingi',
        state_id: 35,
    },
    {
        name: 'Gopalasamudram',
        state_id: 35,
    },
    {
        name: 'Gopichettipalaiyam',
        state_id: 35,
    },
    {
        name: 'Gudalur',
        state_id: 35,
    },
    {
        name: 'Gudiyattam',
        state_id: 35,
    },
    {
        name: 'Guduvanchery',
        state_id: 35,
    },
    {
        name: 'Gummidipoondi',
        state_id: 35,
    },
    {
        name: 'Hanumanthampatti',
        state_id: 35,
    },
    {
        name: 'Harur',
        state_id: 35,
    },
    {
        name: 'Harveypatti',
        state_id: 35,
    },
    {
        name: 'Highways',
        state_id: 35,
    },
    {
        name: 'Hosur',
        state_id: 35,
    },
    {
        name: 'Hubbathala',
        state_id: 35,
    },
    {
        name: 'Huligal',
        state_id: 35,
    },
    {
        name: 'Idappadi',
        state_id: 35,
    },
    {
        name: 'Idikarai',
        state_id: 35,
    },
    {
        name: 'Ilampillai',
        state_id: 35,
    },
    {
        name: 'Ilanji',
        state_id: 35,
    },
    {
        name: 'Iluppaiyurani',
        state_id: 35,
    },
    {
        name: 'Iluppur',
        state_id: 35,
    },
    {
        name: 'Inam Karur',
        state_id: 35,
    },
    {
        name: 'Injambakkam',
        state_id: 35,
    },
    {
        name: 'Irugur',
        state_id: 35,
    },
    {
        name: 'Jaffrabad',
        state_id: 35,
    },
    {
        name: 'Jagathala',
        state_id: 35,
    },
    {
        name: 'Jalakandapuram',
        state_id: 35,
    },
    {
        name: 'Jalladiampet',
        state_id: 35,
    },
    {
        name: 'Jambai',
        state_id: 35,
    },
    {
        name: 'Jayankondam',
        state_id: 35,
    },
    {
        name: 'Jolarpet',
        state_id: 35,
    },
    {
        name: 'Kadambur',
        state_id: 35,
    },
    {
        name: 'Kadathur',
        state_id: 35,
    },
    {
        name: 'Kadayal',
        state_id: 35,
    },
    {
        name: 'Kadayampatti',
        state_id: 35,
    },
    {
        name: 'Kadayanallur',
        state_id: 35,
    },
    {
        name: 'Kadiapatti',
        state_id: 35,
    },
    {
        name: 'Kalakkad',
        state_id: 35,
    },
    {
        name: 'Kalambur',
        state_id: 35,
    },
    {
        name: 'Kalapatti',
        state_id: 35,
    },
    {
        name: 'Kalappanaickenpatti',
        state_id: 35,
    },
    {
        name: 'Kalavai',
        state_id: 35,
    },
    {
        name: 'Kalinjur',
        state_id: 35,
    },
    {
        name: 'Kaliyakkavilai',
        state_id: 35,
    },
    {
        name: 'Kallakkurichi',
        state_id: 35,
    },
    {
        name: 'Kallakudi',
        state_id: 35,
    },
    {
        name: 'Kallidaikurichchi',
        state_id: 35,
    },
    {
        name: 'Kallukuttam',
        state_id: 35,
    },
    {
        name: 'Kallupatti',
        state_id: 35,
    },
    {
        name: 'Kalpakkam',
        state_id: 35,
    },
    {
        name: 'Kalugumalai',
        state_id: 35,
    },
    {
        name: 'Kamayagoundanpatti',
        state_id: 35,
    },
    {
        name: 'Kambainallur',
        state_id: 35,
    },
    {
        name: 'Kambam',
        state_id: 35,
    },
    {
        name: 'Kamuthi',
        state_id: 35,
    },
    {
        name: 'Kanadukathan',
        state_id: 35,
    },
    {
        name: 'Kanakkampalayam',
        state_id: 35,
    },
    {
        name: 'Kanam',
        state_id: 35,
    },
    {
        name: 'Kanchipuram',
        state_id: 35,
    },
    {
        name: 'Kandanur',
        state_id: 35,
    },
    {
        name: 'Kangayam',
        state_id: 35,
    },
    {
        name: 'Kangayampalayam',
        state_id: 35,
    },
    {
        name: 'Kangeyanallur',
        state_id: 35,
    },
    {
        name: 'Kaniyur',
        state_id: 35,
    },
    {
        name: 'Kanjikoil',
        state_id: 35,
    },
    {
        name: 'Kannadendal',
        state_id: 35,
    },
    {
        name: 'Kannamangalam',
        state_id: 35,
    },
    {
        name: 'Kannampalayam',
        state_id: 35,
    },
    {
        name: 'Kannankurichi',
        state_id: 35,
    },
    {
        name: 'Kannapalaiyam',
        state_id: 35,
    },
    {
        name: 'Kannivadi',
        state_id: 35,
    },
    {
        name: 'Kanyakumari',
        state_id: 35,
    },
    {
        name: 'Kappiyarai',
        state_id: 35,
    },
    {
        name: 'Karaikkudi',
        state_id: 35,
    },
    {
        name: 'Karamadai',
        state_id: 35,
    },
    {
        name: 'Karambakkam',
        state_id: 35,
    },
    {
        name: 'Karambakkudi',
        state_id: 35,
    },
    {
        name: 'Kariamangalam',
        state_id: 35,
    },
    {
        name: 'Kariapatti',
        state_id: 35,
    },
    {
        name: 'Karugampattur',
        state_id: 35,
    },
    {
        name: 'Karumandi Chellipalayam',
        state_id: 35,
    },
    {
        name: 'Karumathampatti',
        state_id: 35,
    },
    {
        name: 'Karumbakkam',
        state_id: 35,
    },
    {
        name: 'Karungal',
        state_id: 35,
    },
    {
        name: 'Karunguzhi',
        state_id: 35,
    },
    {
        name: 'Karuppur',
        state_id: 35,
    },
    {
        name: 'Karur',
        state_id: 35,
    },
    {
        name: 'Kasipalaiyam',
        state_id: 35,
    },
    {
        name: 'Kasipalayam G',
        state_id: 35,
    },
    {
        name: 'Kathirvedu',
        state_id: 35,
    },
    {
        name: 'Kathujuganapalli',
        state_id: 35,
    },
    {
        name: 'Katpadi',
        state_id: 35,
    },
    {
        name: 'Kattivakkam',
        state_id: 35,
    },
    {
        name: 'Kattumannarkoil',
        state_id: 35,
    },
    {
        name: 'Kattupakkam',
        state_id: 35,
    },
    {
        name: 'Kattuputhur',
        state_id: 35,
    },
    {
        name: 'Kaveripakkam',
        state_id: 35,
    },
    {
        name: 'Kaveripattinam',
        state_id: 35,
    },
    {
        name: 'Kavundampalaiyam',
        state_id: 35,
    },
    {
        name: 'Kavundampalayam',
        state_id: 35,
    },
    {
        name: 'Kayalpattinam',
        state_id: 35,
    },
    {
        name: 'Kayattar',
        state_id: 35,
    },
    {
        name: 'Kelamangalam',
        state_id: 35,
    },
    {
        name: 'Kelambakkam',
        state_id: 35,
    },
    {
        name: 'Kembainaickenpalayam',
        state_id: 35,
    },
    {
        name: 'Kethi',
        state_id: 35,
    },
    {
        name: 'Kilakarai',
        state_id: 35,
    },
    {
        name: 'Kilampadi',
        state_id: 35,
    },
    {
        name: 'Kilkulam',
        state_id: 35,
    },
    {
        name: 'Kilkunda',
        state_id: 35,
    },
    {
        name: 'Killiyur',
        state_id: 35,
    },
    {
        name: 'Killlai',
        state_id: 35,
    },
    {
        name: 'Kilpennathur',
        state_id: 35,
    },
    {
        name: 'Kilvelur',
        state_id: 35,
    },
    {
        name: 'Kinathukadavu',
        state_id: 35,
    },
    {
        name: 'Kiramangalam',
        state_id: 35,
    },
    {
        name: 'Kiranur',
        state_id: 35,
    },
    {
        name: 'Kiripatti',
        state_id: 35,
    },
    {
        name: 'Kizhapavur',
        state_id: 35,
    },
    {
        name: 'Kmarasamipatti',
        state_id: 35,
    },
    {
        name: 'Kochadai',
        state_id: 35,
    },
    {
        name: 'Kodaikanal',
        state_id: 35,
    },
    {
        name: 'Kodambakkam',
        state_id: 35,
    },
    {
        name: 'Kodavasal',
        state_id: 35,
    },
    {
        name: 'Kodumudi',
        state_id: 35,
    },
    {
        name: 'Kolachal',
        state_id: 35,
    },
    {
        name: 'Kolappalur',
        state_id: 35,
    },
    {
        name: 'Kolathupalayam',
        state_id: 35,
    },
    {
        name: 'Kolathur',
        state_id: 35,
    },
    {
        name: 'Kollankodu',
        state_id: 35,
    },
    {
        name: 'Kollankoil',
        state_id: 35,
    },
    {
        name: 'Komaralingam',
        state_id: 35,
    },
    {
        name: 'Komarapalayam',
        state_id: 35,
    },
    {
        name: 'Kombai',
        state_id: 35,
    },
    {
        name: 'Konakkarai',
        state_id: 35,
    },
    {
        name: 'Konavattam',
        state_id: 35,
    },
    {
        name: 'Kondalampatti',
        state_id: 35,
    },
    {
        name: 'Konganapuram',
        state_id: 35,
    },
    {
        name: 'Koradacheri',
        state_id: 35,
    },
    {
        name: 'Korampallam',
        state_id: 35,
    },
    {
        name: 'Kotagiri',
        state_id: 35,
    },
    {
        name: 'Kothinallur',
        state_id: 35,
    },
    {
        name: 'Kottaiyur',
        state_id: 35,
    },
    {
        name: 'Kottakuppam',
        state_id: 35,
    },
    {
        name: 'Kottaram',
        state_id: 35,
    },
    {
        name: 'Kottivakkam',
        state_id: 35,
    },
    {
        name: 'Kottur',
        state_id: 35,
    },
    {
        name: 'Kovilpatti',
        state_id: 35,
    },
    {
        name: 'Koyampattur',
        state_id: 35,
    },
    {
        name: 'Krishnagiri',
        state_id: 35,
    },
    {
        name: 'Krishnarayapuram',
        state_id: 35,
    },
    {
        name: 'Krishnasamudram',
        state_id: 35,
    },
    {
        name: 'Kuchanur',
        state_id: 35,
    },
    {
        name: 'Kuhalur',
        state_id: 35,
    },
    {
        name: 'Kulasekarappattinam',
        state_id: 35,
    },
    {
        name: 'Kulasekarapuram',
        state_id: 35,
    },
    {
        name: 'Kulithalai',
        state_id: 35,
    },
    {
        name: 'Kumarapalaiyam',
        state_id: 35,
    },
    {
        name: 'Kumarapalayam',
        state_id: 35,
    },
    {
        name: 'Kumarapuram',
        state_id: 35,
    },
    {
        name: 'Kumbakonam',
        state_id: 35,
    },
    {
        name: 'Kundrathur',
        state_id: 35,
    },
    {
        name: 'Kuniyamuthur',
        state_id: 35,
    },
    {
        name: 'Kunnathur',
        state_id: 35,
    },
    {
        name: 'Kunur',
        state_id: 35,
    },
    {
        name: 'Kuraikundu',
        state_id: 35,
    },
    {
        name: 'Kurichi',
        state_id: 35,
    },
    {
        name: 'Kurinjippadi',
        state_id: 35,
    },
    {
        name: 'Kurudampalaiyam',
        state_id: 35,
    },
    {
        name: 'Kurumbalur',
        state_id: 35,
    },
    {
        name: 'Kuthalam',
        state_id: 35,
    },
    {
        name: 'Kuthappar',
        state_id: 35,
    },
    {
        name: 'Kuttalam',
        state_id: 35,
    },
    {
        name: 'Kuttanallur',
        state_id: 35,
    },
    {
        name: 'Kuzhithurai',
        state_id: 35,
    },
    {
        name: 'Labbaikudikadu',
        state_id: 35,
    },
    {
        name: 'Lakkampatti',
        state_id: 35,
    },
    {
        name: 'Lalgudi',
        state_id: 35,
    },
    {
        name: 'Lalpet',
        state_id: 35,
    },
    {
        name: 'Llayangudi',
        state_id: 35,
    },
    {
        name: 'Madambakkam',
        state_id: 35,
    },
    {
        name: 'Madanur',
        state_id: 35,
    },
    {
        name: 'Madathukulam',
        state_id: 35,
    },
    {
        name: 'Madhavaram',
        state_id: 35,
    },
    {
        name: 'Madippakkam',
        state_id: 35,
    },
    {
        name: 'Madukkarai',
        state_id: 35,
    },
    {
        name: 'Madukkur',
        state_id: 35,
    },
    {
        name: 'Madurai',
        state_id: 35,
    },
    {
        name: 'Maduranthakam',
        state_id: 35,
    },
    {
        name: 'Maduravoyal',
        state_id: 35,
    },
    {
        name: 'Mahabalipuram',
        state_id: 35,
    },
    {
        name: 'Makkinanpatti',
        state_id: 35,
    },
    {
        name: 'Mallamuppampatti',
        state_id: 35,
    },
    {
        name: 'Mallankinaru',
        state_id: 35,
    },
    {
        name: 'Mallapuram',
        state_id: 35,
    },
    {
        name: 'Mallasamudram',
        state_id: 35,
    },
    {
        name: 'Mallur',
        state_id: 35,
    },
    {
        name: 'Mamallapuram',
        state_id: 35,
    },
    {
        name: 'Mamsapuram',
        state_id: 35,
    },
    {
        name: 'Manachanallur',
        state_id: 35,
    },
    {
        name: 'Manali',
        state_id: 35,
    },
    {
        name: 'Manalmedu',
        state_id: 35,
    },
    {
        name: 'Manalurpet',
        state_id: 35,
    },
    {
        name: 'Manamadurai',
        state_id: 35,
    },
    {
        name: 'Manapakkam',
        state_id: 35,
    },
    {
        name: 'Manapparai',
        state_id: 35,
    },
    {
        name: 'Manavalakurichi',
        state_id: 35,
    },
    {
        name: 'Mandaikadu',
        state_id: 35,
    },
    {
        name: 'Mandapam',
        state_id: 35,
    },
    {
        name: 'Mangadu',
        state_id: 35,
    },
    {
        name: 'Mangalam',
        state_id: 35,
    },
    {
        name: 'Mangalampet',
        state_id: 35,
    },
    {
        name: 'Manimutharu',
        state_id: 35,
    },
    {
        name: 'Mannargudi',
        state_id: 35,
    },
    {
        name: 'Mappilaiurani',
        state_id: 35,
    },
    {
        name: 'Maraimalai Nagar',
        state_id: 35,
    },
    {
        name: 'Marakkanam',
        state_id: 35,
    },
    {
        name: 'Maramangalathupatti',
        state_id: 35,
    },
    {
        name: 'Marandahalli',
        state_id: 35,
    },
    {
        name: 'Markayankottai',
        state_id: 35,
    },
    {
        name: 'Marudur',
        state_id: 35,
    },
    {
        name: 'Marungur',
        state_id: 35,
    },
    {
        name: 'Masinigudi',
        state_id: 35,
    },
    {
        name: 'Mathigiri',
        state_id: 35,
    },
    {
        name: 'Mattur',
        state_id: 35,
    },
    {
        name: 'Mayiladuthurai',
        state_id: 35,
    },
    {
        name: 'Mecheri',
        state_id: 35,
    },
    {
        name: 'Melacheval',
        state_id: 35,
    },
    {
        name: 'Melachokkanathapuram',
        state_id: 35,
    },
    {
        name: 'Melagaram',
        state_id: 35,
    },
    {
        name: 'Melamadai',
        state_id: 35,
    },
    {
        name: 'Melamaiyur',
        state_id: 35,
    },
    {
        name: 'Melanattam',
        state_id: 35,
    },
    {
        name: 'Melathiruppanthuruthi',
        state_id: 35,
    },
    {
        name: 'Melattur',
        state_id: 35,
    },
    {
        name: 'Melmananbedu',
        state_id: 35,
    },
    {
        name: 'Melpattampakkam',
        state_id: 35,
    },
    {
        name: 'Melur',
        state_id: 35,
    },
    {
        name: 'Melvisharam',
        state_id: 35,
    },
    {
        name: 'Mettupalayam',
        state_id: 35,
    },
    {
        name: 'Mettur',
        state_id: 35,
    },
    {
        name: 'Meyyanur',
        state_id: 35,
    },
    {
        name: 'Milavittan',
        state_id: 35,
    },
    {
        name: 'Minakshipuram',
        state_id: 35,
    },
    {
        name: 'Minambakkam',
        state_id: 35,
    },
    {
        name: 'Minjur',
        state_id: 35,
    },
    {
        name: 'Modakurichi',
        state_id: 35,
    },
    {
        name: 'Mohanur',
        state_id: 35,
    },
    {
        name: 'Mopperipalayam',
        state_id: 35,
    },
    {
        name: 'Mudalur',
        state_id: 35,
    },
    {
        name: 'Mudichur',
        state_id: 35,
    },
    {
        name: 'Mudukulathur',
        state_id: 35,
    },
    {
        name: 'Mukasipidariyur',
        state_id: 35,
    },
    {
        name: 'Mukkudal',
        state_id: 35,
    },
    {
        name: 'Mulagumudu',
        state_id: 35,
    },
    {
        name: 'Mulakaraipatti',
        state_id: 35,
    },
    {
        name: 'Mulanur',
        state_id: 35,
    },
    {
        name: 'Mullakkadu',
        state_id: 35,
    },
    {
        name: 'Muruganpalayam',
        state_id: 35,
    },
    {
        name: 'Musiri',
        state_id: 35,
    },
    {
        name: 'Muthupet',
        state_id: 35,
    },
    {
        name: 'Muthur',
        state_id: 35,
    },
    {
        name: 'Muttayyapuram',
        state_id: 35,
    },
    {
        name: 'Muttupet',
        state_id: 35,
    },
    {
        name: 'Muvarasampettai',
        state_id: 35,
    },
    {
        name: 'Myladi',
        state_id: 35,
    },
    {
        name: 'Mylapore',
        state_id: 35,
    },
    {
        name: 'Nadukkuthagai',
        state_id: 35,
    },
    {
        name: 'Naduvattam',
        state_id: 35,
    },
    {
        name: 'Nagapattinam',
        state_id: 35,
    },
    {
        name: 'Nagavakulam',
        state_id: 35,
    },
    {
        name: 'Nagercoil',
        state_id: 35,
    },
    {
        name: 'Nagojanahalli',
        state_id: 35,
    },
    {
        name: 'Nallampatti',
        state_id: 35,
    },
    {
        name: 'Nallur',
        state_id: 35,
    },
    {
        name: 'Namagiripettai',
        state_id: 35,
    },
    {
        name: 'Namakkal',
        state_id: 35,
    },
    {
        name: 'Nambiyur',
        state_id: 35,
    },
    {
        name: 'Nambutalai',
        state_id: 35,
    },
    {
        name: 'Nandambakkam',
        state_id: 35,
    },
    {
        name: 'Nandivaram',
        state_id: 35,
    },
    {
        name: 'Nangavalli',
        state_id: 35,
    },
    {
        name: 'Nangavaram',
        state_id: 35,
    },
    {
        name: 'Nanguneri',
        state_id: 35,
    },
    {
        name: 'Nanjikottai',
        state_id: 35,
    },
    {
        name: 'Nannilam',
        state_id: 35,
    },
    {
        name: 'Naranammalpuram',
        state_id: 35,
    },
    {
        name: 'Naranapuram',
        state_id: 35,
    },
    {
        name: 'Narasimhanaickenpalayam',
        state_id: 35,
    },
    {
        name: 'Narasingapuram',
        state_id: 35,
    },
    {
        name: 'Narasojipatti',
        state_id: 35,
    },
    {
        name: 'Naravarikuppam',
        state_id: 35,
    },
    {
        name: 'Nasiyanur',
        state_id: 35,
    },
    {
        name: 'Natham',
        state_id: 35,
    },
    {
        name: 'Nathampannai',
        state_id: 35,
    },
    {
        name: 'Natrampalli',
        state_id: 35,
    },
    {
        name: 'Nattam',
        state_id: 35,
    },
    {
        name: 'Nattapettai',
        state_id: 35,
    },
    {
        name: 'Nattarasankottai',
        state_id: 35,
    },
    {
        name: 'Navalpattu',
        state_id: 35,
    },
    {
        name: 'Nazarethpettai',
        state_id: 35,
    },
    {
        name: 'Nazerath',
        state_id: 35,
    },
    {
        name: 'Neikkarapatti',
        state_id: 35,
    },
    {
        name: 'Neiyyur',
        state_id: 35,
    },
    {
        name: 'Nellikkuppam',
        state_id: 35,
    },
    {
        name: 'Nelliyalam',
        state_id: 35,
    },
    {
        name: 'Nemili',
        state_id: 35,
    },
    {
        name: 'Nemilicheri',
        state_id: 35,
    },
    {
        name: 'Neripperichal',
        state_id: 35,
    },
    {
        name: 'Nerkunram',
        state_id: 35,
    },
    {
        name: 'Nerkuppai',
        state_id: 35,
    },
    {
        name: 'Nerunjipettai',
        state_id: 35,
    },
    {
        name: 'Neykkarappatti',
        state_id: 35,
    },
    {
        name: 'Neyveli',
        state_id: 35,
    },
    {
        name: 'Nidamangalam',
        state_id: 35,
    },
    {
        name: 'Nilagiri',
        state_id: 35,
    },
    {
        name: 'Nilakkottai',
        state_id: 35,
    },
    {
        name: 'Nilankarai',
        state_id: 35,
    },
    {
        name: 'Odaipatti',
        state_id: 35,
    },
    {
        name: 'Odaiyakulam',
        state_id: 35,
    },
    {
        name: 'Oddanchatram',
        state_id: 35,
    },
    {
        name: 'Odugathur',
        state_id: 35,
    },
    {
        name: 'Oggiyamduraipakkam',
        state_id: 35,
    },
    {
        name: 'Olagadam',
        state_id: 35,
    },
    {
        name: 'Omalur',
        state_id: 35,
    },
    {
        name: 'Ooty',
        state_id: 35,
    },
    {
        name: 'Orathanadu',
        state_id: 35,
    },
    {
        name: 'Othakadai',
        state_id: 35,
    },
    {
        name: 'Othakalmandapam',
        state_id: 35,
    },
    {
        name: 'Ottapparai',
        state_id: 35,
    },
    {
        name: 'Pacode',
        state_id: 35,
    },
    {
        name: 'Padaividu',
        state_id: 35,
    },
    {
        name: 'Padianallur',
        state_id: 35,
    },
    {
        name: 'Padirikuppam',
        state_id: 35,
    },
    {
        name: 'Padmanabhapuram',
        state_id: 35,
    },
    {
        name: 'Padririvedu',
        state_id: 35,
    },
    {
        name: 'Palaganangudy',
        state_id: 35,
    },
    {
        name: 'Palaimpatti',
        state_id: 35,
    },
    {
        name: 'Palakkodu',
        state_id: 35,
    },
    {
        name: 'Palamedu',
        state_id: 35,
    },
    {
        name: 'Palani',
        state_id: 35,
    },
    {
        name: 'Palani Chettipatti',
        state_id: 35,
    },
    {
        name: 'Palavakkam',
        state_id: 35,
    },
    {
        name: 'Palavansathu',
        state_id: 35,
    },
    {
        name: 'Palayakayal',
        state_id: 35,
    },
    {
        name: 'Palayam',
        state_id: 35,
    },
    {
        name: 'Palayamkottai',
        state_id: 35,
    },
    {
        name: 'Palladam',
        state_id: 35,
    },
    {
        name: 'Pallapalayam',
        state_id: 35,
    },
    {
        name: 'Pallapatti',
        state_id: 35,
    },
    {
        name: 'Pallattur',
        state_id: 35,
    },
    {
        name: 'Pallavaram',
        state_id: 35,
    },
    {
        name: 'Pallikaranai',
        state_id: 35,
    },
    {
        name: 'Pallikonda',
        state_id: 35,
    },
    {
        name: 'Pallipalaiyam',
        state_id: 35,
    },
    {
        name: 'Pallipalaiyam Agraharam',
        state_id: 35,
    },
    {
        name: 'Pallipattu',
        state_id: 35,
    },
    {
        name: 'Pammal',
        state_id: 35,
    },
    {
        name: 'Panagudi',
        state_id: 35,
    },
    {
        name: 'Panaimarathupatti',
        state_id: 35,
    },
    {
        name: 'Panapakkam',
        state_id: 35,
    },
    {
        name: 'Panboli',
        state_id: 35,
    },
    {
        name: 'Pandamangalam',
        state_id: 35,
    },
    {
        name: 'Pannaikadu',
        state_id: 35,
    },
    {
        name: 'Pannaipuram',
        state_id: 35,
    },
    {
        name: 'Pannuratti',
        state_id: 35,
    },
    {
        name: 'Panruti',
        state_id: 35,
    },
    {
        name: 'Papanasam',
        state_id: 35,
    },
    {
        name: 'Pappankurichi',
        state_id: 35,
    },
    {
        name: 'Papparapatti',
        state_id: 35,
    },
    {
        name: 'Pappireddipatti',
        state_id: 35,
    },
    {
        name: 'Paramakkudi',
        state_id: 35,
    },
    {
        name: 'Paramankurichi',
        state_id: 35,
    },
    {
        name: 'Paramathi',
        state_id: 35,
    },
    {
        name: 'Parangippettai',
        state_id: 35,
    },
    {
        name: 'Paravai',
        state_id: 35,
    },
    {
        name: 'Pasur',
        state_id: 35,
    },
    {
        name: 'Pathamadai',
        state_id: 35,
    },
    {
        name: 'Pattinam',
        state_id: 35,
    },
    {
        name: 'Pattiviranpatti',
        state_id: 35,
    },
    {
        name: 'Pattukkottai',
        state_id: 35,
    },
    {
        name: 'Pazhugal',
        state_id: 35,
    },
    {
        name: 'Pennadam',
        state_id: 35,
    },
    {
        name: 'Pennagaram',
        state_id: 35,
    },
    {
        name: 'Pennathur',
        state_id: 35,
    },
    {
        name: 'Peraiyur',
        state_id: 35,
    },
    {
        name: 'Peralam',
        state_id: 35,
    },
    {
        name: 'Perambalur',
        state_id: 35,
    },
    {
        name: 'Peranamallur',
        state_id: 35,
    },
    {
        name: 'Peravurani',
        state_id: 35,
    },
    {
        name: 'Periyakodiveri',
        state_id: 35,
    },
    {
        name: 'Periyakulam',
        state_id: 35,
    },
    {
        name: 'Periyanayakkanpalaiyam',
        state_id: 35,
    },
    {
        name: 'Periyanegamam',
        state_id: 35,
    },
    {
        name: 'Periyapatti',
        state_id: 35,
    },
    {
        name: 'Periyasemur',
        state_id: 35,
    },
    {
        name: 'Pernambut',
        state_id: 35,
    },
    {
        name: 'Perumagalur',
        state_id: 35,
    },
    {
        name: 'Perumandi',
        state_id: 35,
    },
    {
        name: 'Perumuchi',
        state_id: 35,
    },
    {
        name: 'Perundurai',
        state_id: 35,
    },
    {
        name: 'Perungalathur',
        state_id: 35,
    },
    {
        name: 'Perungudi',
        state_id: 35,
    },
    {
        name: 'Perungulam',
        state_id: 35,
    },
    {
        name: 'Perur',
        state_id: 35,
    },
    {
        name: 'Perur Chettipalaiyam',
        state_id: 35,
    },
    {
        name: 'Pethampalayam',
        state_id: 35,
    },
    {
        name: 'Pethanaickenpalayam',
        state_id: 35,
    },
    {
        name: 'Pillanallur',
        state_id: 35,
    },
    {
        name: 'Pirkankaranai',
        state_id: 35,
    },
    {
        name: 'Polichalur',
        state_id: 35,
    },
    {
        name: 'Pollachi',
        state_id: 35,
    },
    {
        name: 'Polur',
        state_id: 35,
    },
    {
        name: 'Ponmani',
        state_id: 35,
    },
    {
        name: 'Ponnamaravathi',
        state_id: 35,
    },
    {
        name: 'Ponnampatti',
        state_id: 35,
    },
    {
        name: 'Ponneri',
        state_id: 35,
    },
    {
        name: 'Porur',
        state_id: 35,
    },
    {
        name: 'Pothanur',
        state_id: 35,
    },
    {
        name: 'Pothatturpettai',
        state_id: 35,
    },
    {
        name: 'Pudukadai',
        state_id: 35,
    },
    {
        name: 'Pudukkottai Cantonment',
        state_id: 35,
    },
    {
        name: 'Pudukottai',
        state_id: 35,
    },
    {
        name: 'Pudupalaiyam Aghraharam',
        state_id: 35,
    },
    {
        name: 'Pudupalayam',
        state_id: 35,
    },
    {
        name: 'Pudupatti',
        state_id: 35,
    },
    {
        name: 'Pudupattinam',
        state_id: 35,
    },
    {
        name: 'Pudur',
        state_id: 35,
    },
    {
        name: 'Puduvayal',
        state_id: 35,
    },
    {
        name: 'Pulambadi',
        state_id: 35,
    },
    {
        name: 'Pulampatti',
        state_id: 35,
    },
    {
        name: 'Puliyampatti',
        state_id: 35,
    },
    {
        name: 'Puliyankudi',
        state_id: 35,
    },
    {
        name: 'Puliyur',
        state_id: 35,
    },
    {
        name: 'Pullampadi',
        state_id: 35,
    },
    {
        name: 'Puluvapatti',
        state_id: 35,
    },
    {
        name: 'Punamalli',
        state_id: 35,
    },
    {
        name: 'Punjai Puliyampatti',
        state_id: 35,
    },
    {
        name: 'Punjai Thottakurichi',
        state_id: 35,
    },
    {
        name: 'Punjaipugalur',
        state_id: 35,
    },
    {
        name: 'Puthalam',
        state_id: 35,
    },
    {
        name: 'Putteri',
        state_id: 35,
    },
    {
        name: 'Puvalur',
        state_id: 35,
    },
    {
        name: 'Puzhal',
        state_id: 35,
    },
    {
        name: 'Puzhithivakkam',
        state_id: 35,
    },
    {
        name: 'Rajapalayam',
        state_id: 35,
    },
    {
        name: 'Ramanathapuram',
        state_id: 35,
    },
    {
        name: 'Ramapuram',
        state_id: 35,
    },
    {
        name: 'Rameswaram',
        state_id: 35,
    },
    {
        name: 'Ranipet',
        state_id: 35,
    },
    {
        name: 'Rasipuram',
        state_id: 35,
    },
    {
        name: 'Rayagiri',
        state_id: 35,
    },
    {
        name: 'Rithapuram',
        state_id: 35,
    },
    {
        name: 'Rosalpatti',
        state_id: 35,
    },
    {
        name: 'Rudravathi',
        state_id: 35,
    },
    {
        name: 'Sadayankuppam',
        state_id: 35,
    },
    {
        name: 'Saint Thomas Mount',
        state_id: 35,
    },
    {
        name: 'Salangapalayam',
        state_id: 35,
    },
    {
        name: 'Salem',
        state_id: 35,
    },
    {
        name: 'Samalapuram',
        state_id: 35,
    },
    {
        name: 'Samathur',
        state_id: 35,
    },
    {
        name: 'Sambavar Vadagarai',
        state_id: 35,
    },
    {
        name: 'Sankaramanallur',
        state_id: 35,
    },
    {
        name: 'Sankarankoil',
        state_id: 35,
    },
    {
        name: 'Sankarapuram',
        state_id: 35,
    },
    {
        name: 'Sankari',
        state_id: 35,
    },
    {
        name: 'Sankarnagar',
        state_id: 35,
    },
    {
        name: 'Saravanampatti',
        state_id: 35,
    },
    {
        name: 'Sarcarsamakulam',
        state_id: 35,
    },
    {
        name: 'Sathiyavijayanagaram',
        state_id: 35,
    },
    {
        name: 'Sathuvachari',
        state_id: 35,
    },
    {
        name: 'Sathyamangalam',
        state_id: 35,
    },
    {
        name: 'Sattankulam',
        state_id: 35,
    },
    {
        name: 'Sattur',
        state_id: 35,
    },
    {
        name: 'Sayalgudi',
        state_id: 35,
    },
    {
        name: 'Sayapuram',
        state_id: 35,
    },
    {
        name: 'Seithur',
        state_id: 35,
    },
    {
        name: 'Sembakkam',
        state_id: 35,
    },
    {
        name: 'Semmipalayam',
        state_id: 35,
    },
    {
        name: 'Sennirkuppam',
        state_id: 35,
    },
    {
        name: 'Senthamangalam',
        state_id: 35,
    },
    {
        name: 'Sentharapatti',
        state_id: 35,
    },
    {
        name: 'Senur',
        state_id: 35,
    },
    {
        name: 'Sethiathoppu',
        state_id: 35,
    },
    {
        name: 'Sevilimedu',
        state_id: 35,
    },
    {
        name: 'Sevugampatti',
        state_id: 35,
    },
    {
        name: 'Shenbakkam',
        state_id: 35,
    },
    {
        name: 'Shencottai',
        state_id: 35,
    },
    {
        name: 'Shenkottai',
        state_id: 35,
    },
    {
        name: 'Sholavandan',
        state_id: 35,
    },
    {
        name: 'Sholinganallur',
        state_id: 35,
    },
    {
        name: 'Sholingur',
        state_id: 35,
    },
    {
        name: 'Sholur',
        state_id: 35,
    },
    {
        name: 'Sikkarayapuram',
        state_id: 35,
    },
    {
        name: 'Singampuneri',
        state_id: 35,
    },
    {
        name: 'Singanallur',
        state_id: 35,
    },
    {
        name: 'Singaperumalkoil',
        state_id: 35,
    },
    {
        name: 'Sirapalli',
        state_id: 35,
    },
    {
        name: 'Sirkali',
        state_id: 35,
    },
    {
        name: 'Sirugamani',
        state_id: 35,
    },
    {
        name: 'Sirumugai',
        state_id: 35,
    },
    {
        name: 'Sithayankottai',
        state_id: 35,
    },
    {
        name: 'Sithurajapuram',
        state_id: 35,
    },
    {
        name: 'Sivaganga',
        state_id: 35,
    },
    {
        name: 'Sivagiri',
        state_id: 35,
    },
    {
        name: 'Sivakasi',
        state_id: 35,
    },
    {
        name: 'Sivanthipuram',
        state_id: 35,
    },
    {
        name: 'Sivur',
        state_id: 35,
    },
    {
        name: 'Soranjeri',
        state_id: 35,
    },
    {
        name: 'South Kannanur',
        state_id: 35,
    },
    {
        name: 'South Kodikulam',
        state_id: 35,
    },
    {
        name: 'Srimushnam',
        state_id: 35,
    },
    {
        name: 'Sriperumpudur',
        state_id: 35,
    },
    {
        name: 'Sriramapuram',
        state_id: 35,
    },
    {
        name: 'Srirangam',
        state_id: 35,
    },
    {
        name: 'Srivaikuntam',
        state_id: 35,
    },
    {
        name: 'Srivilliputtur',
        state_id: 35,
    },
    {
        name: 'Suchindram',
        state_id: 35,
    },
    {
        name: 'Suliswaranpatti',
        state_id: 35,
    },
    {
        name: 'Sulur',
        state_id: 35,
    },
    {
        name: 'Sundarapandiam',
        state_id: 35,
    },
    {
        name: 'Sundarapandiapuram',
        state_id: 35,
    },
    {
        name: 'Surampatti',
        state_id: 35,
    },
    {
        name: 'Surandai',
        state_id: 35,
    },
    {
        name: 'Suriyampalayam',
        state_id: 35,
    },
    {
        name: 'Swamimalai',
        state_id: 35,
    },
    {
        name: 'TNPL Pugalur',
        state_id: 35,
    },
    {
        name: 'Tambaram',
        state_id: 35,
    },
    {
        name: 'Taramangalam',
        state_id: 35,
    },
    {
        name: 'Tattayyangarpettai',
        state_id: 35,
    },
    {
        name: 'Tayilupatti',
        state_id: 35,
    },
    {
        name: 'Tenkasi',
        state_id: 35,
    },
    {
        name: 'Thadikombu',
        state_id: 35,
    },
    {
        name: 'Thakkolam',
        state_id: 35,
    },
    {
        name: 'Thalainayar',
        state_id: 35,
    },
    {
        name: 'Thalakudi',
        state_id: 35,
    },
    {
        name: 'Thamaraikulam',
        state_id: 35,
    },
    {
        name: 'Thammampatti',
        state_id: 35,
    },
    {
        name: 'Thanjavur',
        state_id: 35,
    },
    {
        name: 'Thanthoni',
        state_id: 35,
    },
    {
        name: 'Tharangambadi',
        state_id: 35,
    },
    {
        name: 'Thedavur',
        state_id: 35,
    },
    {
        name: 'Thenambakkam',
        state_id: 35,
    },
    {
        name: 'Thengampudur',
        state_id: 35,
    },
    {
        name: 'Theni',
        state_id: 35,
    },
    {
        name: 'Theni Allinagaram',
        state_id: 35,
    },
    {
        name: 'Thenkarai',
        state_id: 35,
    },
    {
        name: 'Thenthamaraikulam',
        state_id: 35,
    },
    {
        name: 'Thenthiruperai',
        state_id: 35,
    },
    {
        name: 'Thesur',
        state_id: 35,
    },
    {
        name: 'Thevaram',
        state_id: 35,
    },
    {
        name: 'Thevur',
        state_id: 35,
    },
    {
        name: 'Thiagadurgam',
        state_id: 35,
    },
    {
        name: 'Thiagarajar Colony',
        state_id: 35,
    },
    {
        name: 'Thingalnagar',
        state_id: 35,
    },
    {
        name: 'Thiruchirapalli',
        state_id: 35,
    },
    {
        name: 'Thirukarungudi',
        state_id: 35,
    },
    {
        name: 'Thirukazhukundram',
        state_id: 35,
    },
    {
        name: 'Thirumalayampalayam',
        state_id: 35,
    },
    {
        name: 'Thirumazhisai',
        state_id: 35,
    },
    {
        name: 'Thirunagar',
        state_id: 35,
    },
    {
        name: 'Thirunageswaram',
        state_id: 35,
    },
    {
        name: 'Thirunindravur',
        state_id: 35,
    },
    {
        name: 'Thirunirmalai',
        state_id: 35,
    },
    {
        name: 'Thiruparankundram',
        state_id: 35,
    },
    {
        name: 'Thiruparappu',
        state_id: 35,
    },
    {
        name: 'Thiruporur',
        state_id: 35,
    },
    {
        name: 'Thiruppanandal',
        state_id: 35,
    },
    {
        name: 'Thirupuvanam',
        state_id: 35,
    },
    {
        name: 'Thiruthangal',
        state_id: 35,
    },
    {
        name: 'Thiruthuraipundi',
        state_id: 35,
    },
    {
        name: 'Thiruvaivaru',
        state_id: 35,
    },
    {
        name: 'Thiruvalam',
        state_id: 35,
    },
    {
        name: 'Thiruvarur',
        state_id: 35,
    },
    {
        name: 'Thiruvattaru',
        state_id: 35,
    },
    {
        name: 'Thiruvenkatam',
        state_id: 35,
    },
    {
        name: 'Thiruvennainallur',
        state_id: 35,
    },
    {
        name: 'Thiruvithankodu',
        state_id: 35,
    },
    {
        name: 'Thisayanvilai',
        state_id: 35,
    },
    {
        name: 'Thittacheri',
        state_id: 35,
    },
    {
        name: 'Thondamuthur',
        state_id: 35,
    },
    {
        name: 'Thorapadi',
        state_id: 35,
    },
    {
        name: 'Thottipalayam',
        state_id: 35,
    },
    {
        name: 'Thottiyam',
        state_id: 35,
    },
    {
        name: 'Thudiyalur',
        state_id: 35,
    },
    {
        name: 'Thuthipattu',
        state_id: 35,
    },
    {
        name: 'Thuvakudi',
        state_id: 35,
    },
    {
        name: 'Timiri',
        state_id: 35,
    },
    {
        name: 'Tindivanam',
        state_id: 35,
    },
    {
        name: 'Tinnanur',
        state_id: 35,
    },
    {
        name: 'Tiruchchendur',
        state_id: 35,
    },
    {
        name: 'Tiruchengode',
        state_id: 35,
    },
    {
        name: 'Tirukkalukkundram',
        state_id: 35,
    },
    {
        name: 'Tirukkattuppalli',
        state_id: 35,
    },
    {
        name: 'Tirukkoyilur',
        state_id: 35,
    },
    {
        name: 'Tirumangalam',
        state_id: 35,
    },
    {
        name: 'Tirumullaivasal',
        state_id: 35,
    },
    {
        name: 'Tirumuruganpundi',
        state_id: 35,
    },
    {
        name: 'Tirunageswaram',
        state_id: 35,
    },
    {
        name: 'Tirunelveli',
        state_id: 35,
    },
    {
        name: 'Tirupathur',
        state_id: 35,
    },
    {
        name: 'Tirupattur',
        state_id: 35,
    },
    {
        name: 'Tiruppuvanam',
        state_id: 35,
    },
    {
        name: 'Tirupur',
        state_id: 35,
    },
    {
        name: 'Tirusulam',
        state_id: 35,
    },
    {
        name: 'Tiruttani',
        state_id: 35,
    },
    {
        name: 'Tiruvallur',
        state_id: 35,
    },
    {
        name: 'Tiruvannamalai',
        state_id: 35,
    },
    {
        name: 'Tiruverambur',
        state_id: 35,
    },
    {
        name: 'Tiruverkadu',
        state_id: 35,
    },
    {
        name: 'Tiruvethipuram',
        state_id: 35,
    },
    {
        name: 'Tiruvidaimarudur',
        state_id: 35,
    },
    {
        name: 'Tiruvottiyur',
        state_id: 35,
    },
    {
        name: 'Tittakudi',
        state_id: 35,
    },
    {
        name: 'Tondi',
        state_id: 35,
    },
    {
        name: 'Turaiyur',
        state_id: 35,
    },
    {
        name: 'Tuticorin',
        state_id: 35,
    },
    {
        name: 'Udagamandalam',
        state_id: 35,
    },
    {
        name: 'Udagamandalam Valley',
        state_id: 35,
    },
    {
        name: 'Udankudi',
        state_id: 35,
    },
    {
        name: 'Udayarpalayam',
        state_id: 35,
    },
    {
        name: 'Udumalaipettai',
        state_id: 35,
    },
    {
        name: 'Udumalpet',
        state_id: 35,
    },
    {
        name: 'Ullur',
        state_id: 35,
    },
    {
        name: 'Ulundurpettai',
        state_id: 35,
    },
    {
        name: 'Unjalaur',
        state_id: 35,
    },
    {
        name: 'Unnamalaikadai',
        state_id: 35,
    },
    {
        name: 'Uppidamangalam',
        state_id: 35,
    },
    {
        name: 'Uppiliapuram',
        state_id: 35,
    },
    {
        name: 'Urachikkottai',
        state_id: 35,
    },
    {
        name: 'Urapakkam',
        state_id: 35,
    },
    {
        name: 'Usilampatti',
        state_id: 35,
    },
    {
        name: 'Uthangarai',
        state_id: 35,
    },
    {
        name: 'Uthayendram',
        state_id: 35,
    },
    {
        name: 'Uthiramerur',
        state_id: 35,
    },
    {
        name: 'Uthukkottai',
        state_id: 35,
    },
    {
        name: 'Uttamapalaiyam',
        state_id: 35,
    },
    {
        name: 'Uttukkuli',
        state_id: 35,
    },
    {
        name: 'Vadakarai Kizhpadugai',
        state_id: 35,
    },
    {
        name: 'Vadakkanandal',
        state_id: 35,
    },
    {
        name: 'Vadakku Valliyur',
        state_id: 35,
    },
    {
        name: 'Vadalur',
        state_id: 35,
    },
    {
        name: 'Vadamadurai',
        state_id: 35,
    },
    {
        name: 'Vadavalli',
        state_id: 35,
    },
    {
        name: 'Vadipatti',
        state_id: 35,
    },
    {
        name: 'Vadugapatti',
        state_id: 35,
    },
    {
        name: 'Vaithiswarankoil',
        state_id: 35,
    },
    {
        name: 'Valangaiman',
        state_id: 35,
    },
    {
        name: 'Valasaravakkam',
        state_id: 35,
    },
    {
        name: 'Valavanur',
        state_id: 35,
    },
    {
        name: 'Vallam',
        state_id: 35,
    },
    {
        name: 'Valparai',
        state_id: 35,
    },
    {
        name: 'Valvaithankoshtam',
        state_id: 35,
    },
    {
        name: 'Vanavasi',
        state_id: 35,
    },
    {
        name: 'Vandalur',
        state_id: 35,
    },
    {
        name: 'Vandavasi',
        state_id: 35,
    },
    {
        name: 'Vandiyur',
        state_id: 35,
    },
    {
        name: 'Vaniputhur',
        state_id: 35,
    },
    {
        name: 'Vaniyambadi',
        state_id: 35,
    },
    {
        name: 'Varadarajanpettai',
        state_id: 35,
    },
    {
        name: 'Varadharajapuram',
        state_id: 35,
    },
    {
        name: 'Vasudevanallur',
        state_id: 35,
    },
    {
        name: 'Vathirairuppu',
        state_id: 35,
    },
    {
        name: 'Vattalkundu',
        state_id: 35,
    },
    {
        name: 'Vazhapadi',
        state_id: 35,
    },
    {
        name: 'Vedapatti',
        state_id: 35,
    },
    {
        name: 'Vedaranniyam',
        state_id: 35,
    },
    {
        name: 'Vedasandur',
        state_id: 35,
    },
    {
        name: 'Velampalaiyam',
        state_id: 35,
    },
    {
        name: 'Velankanni',
        state_id: 35,
    },
    {
        name: 'Vellakinar',
        state_id: 35,
    },
    {
        name: 'Vellakoil',
        state_id: 35,
    },
    {
        name: 'Vellalapatti',
        state_id: 35,
    },
    {
        name: 'Vellalur',
        state_id: 35,
    },
    {
        name: 'Vellanur',
        state_id: 35,
    },
    {
        name: 'Vellimalai',
        state_id: 35,
    },
    {
        name: 'Vellore',
        state_id: 35,
    },
    {
        name: 'Vellottamparappu',
        state_id: 35,
    },
    {
        name: 'Velluru',
        state_id: 35,
    },
    {
        name: 'Vengampudur',
        state_id: 35,
    },
    {
        name: 'Vengathur',
        state_id: 35,
    },
    {
        name: 'Vengavasal',
        state_id: 35,
    },
    {
        name: 'Venghatur',
        state_id: 35,
    },
    {
        name: 'Venkarai',
        state_id: 35,
    },
    {
        name: 'Vennanthur',
        state_id: 35,
    },
    {
        name: 'Veppathur',
        state_id: 35,
    },
    {
        name: 'Verkilambi',
        state_id: 35,
    },
    {
        name: 'Vettaikaranpudur',
        state_id: 35,
    },
    {
        name: 'Vettavalam',
        state_id: 35,
    },
    {
        name: 'Vijayapuri',
        state_id: 35,
    },
    {
        name: 'Vikramasingapuram',
        state_id: 35,
    },
    {
        name: 'Vikravandi',
        state_id: 35,
    },
    {
        name: 'Vilangudi',
        state_id: 35,
    },
    {
        name: 'Vilankurichi',
        state_id: 35,
    },
    {
        name: 'Vilapakkam',
        state_id: 35,
    },
    {
        name: 'Vilathikulam',
        state_id: 35,
    },
    {
        name: 'Vilavur',
        state_id: 35,
    },
    {
        name: 'Villukuri',
        state_id: 35,
    },
    {
        name: 'Villupuram',
        state_id: 35,
    },
    {
        name: 'Viraganur',
        state_id: 35,
    },
    {
        name: 'Virakeralam',
        state_id: 35,
    },
    {
        name: 'Virakkalpudur',
        state_id: 35,
    },
    {
        name: 'Virapandi',
        state_id: 35,
    },
    {
        name: 'Virapandi Cantonment',
        state_id: 35,
    },
    {
        name: 'Virappanchatram',
        state_id: 35,
    },
    {
        name: 'Viravanallur',
        state_id: 35,
    },
    {
        name: 'Virudambattu',
        state_id: 35,
    },
    {
        name: 'Virudhachalam',
        state_id: 35,
    },
    {
        name: 'Virudhunagar',
        state_id: 35,
    },
    {
        name: 'Virupakshipuram',
        state_id: 35,
    },
    {
        name: 'Viswanatham',
        state_id: 35,
    },
    {
        name: 'Vriddhachalam',
        state_id: 35,
    },
    {
        name: 'Walajabad',
        state_id: 35,
    },
    {
        name: 'Walajapet',
        state_id: 35,
    },
    {
        name: 'Wellington',
        state_id: 35,
    },
    {
        name: 'Yercaud',
        state_id: 35,
    },
    {
        name: 'Zamin Uthukuli',
        state_id: 35,
    },
    {
        name: 'Achampet',
        state_id: 36,
    },
    {
        name: 'Adilabad',
        state_id: 36,
    },
    {
        name: 'Armoor',
        state_id: 36,
    },
    {
        name: 'Asifabad',
        state_id: 36,
    },
    {
        name: 'Badepally',
        state_id: 36,
    },
    {
        name: 'Banswada',
        state_id: 36,
    },
    {
        name: 'Bellampalli',
        state_id: 36,
    },
    {
        name: 'Bhadrachalam',
        state_id: 36,
    },
    {
        name: 'Bhainsa',
        state_id: 36,
    },
    {
        name: 'Bhongir',
        state_id: 36,
    },
    {
        name: 'Bhupalpally',
        state_id: 36,
    },
    {
        name: 'Bodhan',
        state_id: 36,
    },
    {
        name: 'Bollaram',
        state_id: 36,
    },
    {
        name: 'Devarkonda',
        state_id: 36,
    },
    {
        name: 'Farooqnagar',
        state_id: 36,
    },
    {
        name: 'Gadwal',
        state_id: 36,
    },
    {
        name: 'Gajwel',
        state_id: 36,
    },
    {
        name: 'Ghatkesar',
        state_id: 36,
    },
    {
        name: 'Hyderabad',
        state_id: 36,
    },
    {
        name: 'Jagtial',
        state_id: 36,
    },
    {
        name: 'Jangaon',
        state_id: 36,
    },
    {
        name: 'Kagaznagar',
        state_id: 36,
    },
    {
        name: 'Kalwakurthy',
        state_id: 36,
    },
    {
        name: 'Kamareddy',
        state_id: 36,
    },
    {
        name: 'Karimnagar',
        state_id: 36,
    },
    {
        name: 'Khammam',
        state_id: 36,
    },
    {
        name: 'Kodada',
        state_id: 36,
    },
    {
        name: 'Koratla',
        state_id: 36,
    },
    {
        name: 'Kottagudem',
        state_id: 36,
    },
    {
        name: 'Kyathampalle',
        state_id: 36,
    },
    {
        name: 'Madhira',
        state_id: 36,
    },
    {
        name: 'Mahabubabad',
        state_id: 36,
    },
    {
        name: 'Mahbubnagar',
        state_id: 36,
    },
    {
        name: 'Mancherial',
        state_id: 36,
    },
    {
        name: 'Mandamarri',
        state_id: 36,
    },
    {
        name: 'Manuguru',
        state_id: 36,
    },
    {
        name: 'Medak',
        state_id: 36,
    },
    {
        name: 'Medchal',
        state_id: 36,
    },
    {
        name: 'Miryalaguda',
        state_id: 36,
    },
    {
        name: 'Nagar Karnul',
        state_id: 36,
    },
    {
        name: 'Nakrekal',
        state_id: 36,
    },
    {
        name: 'Nalgonda',
        state_id: 36,
    },
    {
        name: 'Narayanpet',
        state_id: 36,
    },
    {
        name: 'Narsampet',
        state_id: 36,
    },
    {
        name: 'Nirmal',
        state_id: 36,
    },
    {
        name: 'Nizamabad',
        state_id: 36,
    },
    {
        name: 'Palwancha',
        state_id: 36,
    },
    {
        name: 'Peddapalli',
        state_id: 36,
    },
    {
        name: 'Ramagundam',
        state_id: 36,
    },
    {
        name: 'Ranga Reddy district',
        state_id: 36,
    },
    {
        name: 'Sadasivpet',
        state_id: 36,
    },
    {
        name: 'Sangareddy',
        state_id: 36,
    },
    {
        name: 'Sarapaka',
        state_id: 36,
    },
    {
        name: 'Sathupalle',
        state_id: 36,
    },
    {
        name: 'Secunderabad',
        state_id: 36,
    },
    {
        name: 'Siddipet',
        state_id: 36,
    },
    {
        name: 'Singapur',
        state_id: 36,
    },
    {
        name: 'Sircilla',
        state_id: 36,
    },
    {
        name: 'Suryapet',
        state_id: 36,
    },
    {
        name: 'Tandur',
        state_id: 36,
    },
    {
        name: 'Vemulawada',
        state_id: 36,
    },
    {
        name: 'Vikarabad',
        state_id: 36,
    },
    {
        name: 'Wanaparthy',
        state_id: 36,
    },
    {
        name: 'Warangal',
        state_id: 36,
    },
    {
        name: 'Yellandu',
        state_id: 36,
    },
    {
        name: 'Zahirabad',
        state_id: 36,
    },
    {
        name: 'Agartala',
        state_id: 37,
    },
    {
        name: 'Amarpur',
        state_id: 37,
    },
    {
        name: 'Ambassa',
        state_id: 37,
    },
    {
        name: 'Badharghat',
        state_id: 37,
    },
    {
        name: 'Belonia',
        state_id: 37,
    },
    {
        name: 'Dharmanagar',
        state_id: 37,
    },
    {
        name: 'Gakulnagar',
        state_id: 37,
    },
    {
        name: 'Gandhigram',
        state_id: 37,
    },
    {
        name: 'Indranagar',
        state_id: 37,
    },
    {
        name: 'Jogendranagar',
        state_id: 37,
    },
    {
        name: 'Kailasahar',
        state_id: 37,
    },
    {
        name: 'Kamalpur',
        state_id: 37,
    },
    {
        name: 'Kanchanpur',
        state_id: 37,
    },
    {
        name: 'Khowai',
        state_id: 37,
    },
    {
        name: 'Kumarghat',
        state_id: 37,
    },
    {
        name: 'Kunjaban',
        state_id: 37,
    },
    {
        name: 'Narsingarh',
        state_id: 37,
    },
    {
        name: 'Pratapgarh',
        state_id: 37,
    },
    {
        name: 'Ranir Bazar',
        state_id: 37,
    },
    {
        name: 'Sabrum',
        state_id: 37,
    },
    {
        name: 'Sonamura',
        state_id: 37,
    },
    {
        name: 'Teliamura',
        state_id: 37,
    },
    {
        name: 'Udaipur',
        state_id: 37,
    },
    {
        name: 'Achhalda',
        state_id: 38,
    },
    {
        name: 'Achhnera',
        state_id: 38,
    },
    {
        name: 'Adari',
        state_id: 38,
    },
    {
        name: 'Afzalgarh',
        state_id: 38,
    },
    {
        name: 'Agarwal Mandi',
        state_id: 38,
    },
    {
        name: 'Agra',
        state_id: 38,
    },
    {
        name: 'Agra Cantonment',
        state_id: 38,
    },
    {
        name: 'Ahraura',
        state_id: 38,
    },
    {
        name: 'Ailum',
        state_id: 38,
    },
    {
        name: 'Air Force Area',
        state_id: 38,
    },
    {
        name: 'Ajhuwa',
        state_id: 38,
    },
    {
        name: 'Akbarpur',
        state_id: 38,
    },
    {
        name: 'Alapur',
        state_id: 38,
    },
    {
        name: 'Aliganj',
        state_id: 38,
    },
    {
        name: 'Aligarh',
        state_id: 38,
    },
    {
        name: 'Allahabad',
        state_id: 38,
    },
    {
        name: 'Allahabad Cantonment',
        state_id: 38,
    },
    {
        name: 'Allahganj',
        state_id: 38,
    },
    {
        name: 'Amanpur',
        state_id: 38,
    },
    {
        name: 'Ambahta',
        state_id: 38,
    },
    {
        name: 'Amethi',
        state_id: 38,
    },
    {
        name: 'Amila',
        state_id: 38,
    },
    {
        name: 'Amilo',
        state_id: 38,
    },
    {
        name: 'Aminagar Sarai',
        state_id: 38,
    },
    {
        name: 'Aminagar Urf Bhurbaral',
        state_id: 38,
    },
    {
        name: 'Amraudha',
        state_id: 38,
    },
    {
        name: 'Amroha',
        state_id: 38,
    },
    {
        name: 'Anandnagar',
        state_id: 38,
    },
    {
        name: 'Anpara',
        state_id: 38,
    },
    {
        name: 'Antu',
        state_id: 38,
    },
    {
        name: 'Anupshahr',
        state_id: 38,
    },
    {
        name: 'Aonla',
        state_id: 38,
    },
    {
        name: 'Armapur Estate',
        state_id: 38,
    },
    {
        name: 'Ashokpuram',
        state_id: 38,
    },
    {
        name: 'Ashrafpur Kichhauchha',
        state_id: 38,
    },
    {
        name: 'Atarra',
        state_id: 38,
    },
    {
        name: 'Atasu',
        state_id: 38,
    },
    {
        name: 'Atrauli',
        state_id: 38,
    },
    {
        name: 'Atraulia',
        state_id: 38,
    },
    {
        name: 'Auraiya',
        state_id: 38,
    },
    {
        name: 'Aurangabad',
        state_id: 38,
    },
    {
        name: 'Aurangabad Bangar',
        state_id: 38,
    },
    {
        name: 'Auras',
        state_id: 38,
    },
    {
        name: 'Awagarh',
        state_id: 38,
    },
    {
        name: 'Ayodhya',
        state_id: 38,
    },
    {
        name: 'Azamgarh',
        state_id: 38,
    },
    {
        name: 'Azizpur',
        state_id: 38,
    },
    {
        name: 'Azmatgarh',
        state_id: 38,
    },
    {
        name: 'Babarpur Ajitmal',
        state_id: 38,
    },
    {
        name: 'Baberu',
        state_id: 38,
    },
    {
        name: 'Babina',
        state_id: 38,
    },
    {
        name: 'Babrala',
        state_id: 38,
    },
    {
        name: 'Babugarh',
        state_id: 38,
    },
    {
        name: 'Bachhiowan',
        state_id: 38,
    },
    {
        name: 'Bachhraon',
        state_id: 38,
    },
    {
        name: 'Bad',
        state_id: 38,
    },
    {
        name: 'Badaun',
        state_id: 38,
    },
    {
        name: 'Baghpat',
        state_id: 38,
    },
    {
        name: 'Bah',
        state_id: 38,
    },
    {
        name: 'Bahadurganj',
        state_id: 38,
    },
    {
        name: 'Baheri',
        state_id: 38,
    },
    {
        name: 'Bahjoi',
        state_id: 38,
    },
    {
        name: 'Bahraich',
        state_id: 38,
    },
    {
        name: 'Bahsuma',
        state_id: 38,
    },
    {
        name: 'Bahua',
        state_id: 38,
    },
    {
        name: 'Bajna',
        state_id: 38,
    },
    {
        name: 'Bakewar',
        state_id: 38,
    },
    {
        name: 'Bakiabad',
        state_id: 38,
    },
    {
        name: 'Baldeo',
        state_id: 38,
    },
    {
        name: 'Ballia',
        state_id: 38,
    },
    {
        name: 'Balrampur',
        state_id: 38,
    },
    {
        name: 'Banat',
        state_id: 38,
    },
    {
        name: 'Banda',
        state_id: 38,
    },
    {
        name: 'Bangarmau',
        state_id: 38,
    },
    {
        name: 'Banki',
        state_id: 38,
    },
    {
        name: 'Bansdih',
        state_id: 38,
    },
    {
        name: 'Bansgaon',
        state_id: 38,
    },
    {
        name: 'Bansi',
        state_id: 38,
    },
    {
        name: 'Barabanki',
        state_id: 38,
    },
    {
        name: 'Baragaon',
        state_id: 38,
    },
    {
        name: 'Baraut',
        state_id: 38,
    },
    {
        name: 'Bareilly',
        state_id: 38,
    },
    {
        name: 'Bareilly Cantonment',
        state_id: 38,
    },
    {
        name: 'Barhalganj',
        state_id: 38,
    },
    {
        name: 'Barhani',
        state_id: 38,
    },
    {
        name: 'Barhapur',
        state_id: 38,
    },
    {
        name: 'Barkhera',
        state_id: 38,
    },
    {
        name: 'Barsana',
        state_id: 38,
    },
    {
        name: 'Barva Sagar',
        state_id: 38,
    },
    {
        name: 'Barwar',
        state_id: 38,
    },
    {
        name: 'Basti',
        state_id: 38,
    },
    {
        name: 'Begumabad Budhana',
        state_id: 38,
    },
    {
        name: 'Behat',
        state_id: 38,
    },
    {
        name: 'Behta Hajipur',
        state_id: 38,
    },
    {
        name: 'Bela',
        state_id: 38,
    },
    {
        name: 'Belthara',
        state_id: 38,
    },
    {
        name: 'Beniganj',
        state_id: 38,
    },
    {
        name: 'Beswan',
        state_id: 38,
    },
    {
        name: 'Bewar',
        state_id: 38,
    },
    {
        name: 'Bhadarsa',
        state_id: 38,
    },
    {
        name: 'Bhadohi',
        state_id: 38,
    },
    {
        name: 'Bhagwantnagar',
        state_id: 38,
    },
    {
        name: 'Bharatganj',
        state_id: 38,
    },
    {
        name: 'Bhargain',
        state_id: 38,
    },
    {
        name: 'Bharthana',
        state_id: 38,
    },
    {
        name: 'Bharuhana',
        state_id: 38,
    },
    {
        name: 'Bharwari',
        state_id: 38,
    },
    {
        name: 'Bhatni Bazar',
        state_id: 38,
    },
    {
        name: 'Bhatpar Rani',
        state_id: 38,
    },
    {
        name: 'Bhawan Bahadurnagar',
        state_id: 38,
    },
    {
        name: 'Bhinga',
        state_id: 38,
    },
    {
        name: 'Bhojpur Dharampur',
        state_id: 38,
    },
    {
        name: 'Bhokarhedi',
        state_id: 38,
    },
    {
        name: 'Bhongaon',
        state_id: 38,
    },
    {
        name: 'Bhulepur',
        state_id: 38,
    },
    {
        name: 'Bidhuna',
        state_id: 38,
    },
    {
        name: 'Bighapur',
        state_id: 38,
    },
    {
        name: 'Bijnor',
        state_id: 38,
    },
    {
        name: 'Bijpur',
        state_id: 38,
    },
    {
        name: 'Bikapur',
        state_id: 38,
    },
    {
        name: 'Bilari',
        state_id: 38,
    },
    {
        name: 'Bilaspur',
        state_id: 38,
    },
    {
        name: 'Bilgram',
        state_id: 38,
    },
    {
        name: 'Bilhaur',
        state_id: 38,
    },
    {
        name: 'Bilram',
        state_id: 38,
    },
    {
        name: 'Bilrayaganj',
        state_id: 38,
    },
    {
        name: 'Bilsanda',
        state_id: 38,
    },
    {
        name: 'Bilsi',
        state_id: 38,
    },
    {
        name: 'Bindki',
        state_id: 38,
    },
    {
        name: 'Bisalpur',
        state_id: 38,
    },
    {
        name: 'Bisanda Buzurg',
        state_id: 38,
    },
    {
        name: 'Bisauli',
        state_id: 38,
    },
    {
        name: 'Bisharatganj',
        state_id: 38,
    },
    {
        name: 'Bisokhar',
        state_id: 38,
    },
    {
        name: 'Biswan',
        state_id: 38,
    },
    {
        name: 'Bithur',
        state_id: 38,
    },
    {
        name: 'Budaun',
        state_id: 38,
    },
    {
        name: 'Bugrasi',
        state_id: 38,
    },
    {
        name: 'Bulandshahar',
        state_id: 38,
    },
    {
        name: 'Burhana',
        state_id: 38,
    },
    {
        name: 'Chail',
        state_id: 38,
    },
    {
        name: 'Chak Imam Ali',
        state_id: 38,
    },
    {
        name: 'Chakeri',
        state_id: 38,
    },
    {
        name: 'Chakia',
        state_id: 38,
    },
    {
        name: 'Chandauli',
        state_id: 38,
    },
    {
        name: 'Chandausi',
        state_id: 38,
    },
    {
        name: 'Chandpur',
        state_id: 38,
    },
    {
        name: 'Charkhari',
        state_id: 38,
    },
    {
        name: 'Charthawal',
        state_id: 38,
    },
    {
        name: 'Chaumuhan',
        state_id: 38,
    },
    {
        name: 'Chhaprauli',
        state_id: 38,
    },
    {
        name: 'Chhara Rafatpur',
        state_id: 38,
    },
    {
        name: 'Chharprauli',
        state_id: 38,
    },
    {
        name: 'Chhata',
        state_id: 38,
    },
    {
        name: 'Chhatari',
        state_id: 38,
    },
    {
        name: 'Chhibramau',
        state_id: 38,
    },
    {
        name: 'Chhutmalpur',
        state_id: 38,
    },
    {
        name: 'Chilkana Sultanpur',
        state_id: 38,
    },
    {
        name: 'Chirgaon',
        state_id: 38,
    },
    {
        name: 'Chit Baragaon',
        state_id: 38,
    },
    {
        name: 'Chitrakut Dham',
        state_id: 38,
    },
    {
        name: 'Chopan',
        state_id: 38,
    },
    {
        name: 'Choubepur Kalan',
        state_id: 38,
    },
    {
        name: 'Chunar',
        state_id: 38,
    },
    {
        name: 'Churk Ghurma',
        state_id: 38,
    },
    {
        name: 'Colonelganj',
        state_id: 38,
    },
    {
        name: 'Dadri',
        state_id: 38,
    },
    {
        name: 'Dalmau',
        state_id: 38,
    },
    {
        name: 'Dankaur',
        state_id: 38,
    },
    {
        name: 'Dariyabad',
        state_id: 38,
    },
    {
        name: 'Dasna',
        state_id: 38,
    },
    {
        name: 'Dataganj',
        state_id: 38,
    },
    {
        name: 'Daurala',
        state_id: 38,
    },
    {
        name: 'Dayal Bagh',
        state_id: 38,
    },
    {
        name: 'Deoband',
        state_id: 38,
    },
    {
        name: 'Deoranian',
        state_id: 38,
    },
    {
        name: 'Deoria',
        state_id: 38,
    },
    {
        name: 'Dewa',
        state_id: 38,
    },
    {
        name: 'Dhampur',
        state_id: 38,
    },
    {
        name: 'Dhanauha',
        state_id: 38,
    },
    {
        name: 'Dhanauli',
        state_id: 38,
    },
    {
        name: 'Dhanaura',
        state_id: 38,
    },
    {
        name: 'Dharoti Khurd',
        state_id: 38,
    },
    {
        name: 'Dhauratanda',
        state_id: 38,
    },
    {
        name: 'Dhaurhra',
        state_id: 38,
    },
    {
        name: 'Dibai',
        state_id: 38,
    },
    {
        name: 'Dibiyapur',
        state_id: 38,
    },
    {
        name: 'Dildarnagar Fatehpur',
        state_id: 38,
    },
    {
        name: 'Do Ghat',
        state_id: 38,
    },
    {
        name: 'Dohrighat',
        state_id: 38,
    },
    {
        name: 'Dostpur',
        state_id: 38,
    },
    {
        name: 'Dudhinagar',
        state_id: 38,
    },
    {
        name: 'Dulhipur',
        state_id: 38,
    },
    {
        name: 'Dundwaraganj',
        state_id: 38,
    },
    {
        name: 'Ekdil',
        state_id: 38,
    },
    {
        name: 'Erich',
        state_id: 38,
    },
    {
        name: 'Etah',
        state_id: 38,
    },
    {
        name: 'Etawah',
        state_id: 38,
    },
    {
        name: 'Faizabad',
        state_id: 38,
    },
    {
        name: 'Faizabad Cantonment',
        state_id: 38,
    },
    {
        name: 'Faizganj',
        state_id: 38,
    },
    {
        name: 'Farah',
        state_id: 38,
    },
    {
        name: 'Faridnagar',
        state_id: 38,
    },
    {
        name: 'Faridpur',
        state_id: 38,
    },
    {
        name: 'Faridpur Cantonment',
        state_id: 38,
    },
    {
        name: 'Fariha',
        state_id: 38,
    },
    {
        name: 'Farrukhabad',
        state_id: 38,
    },
    {
        name: 'Fatehabad',
        state_id: 38,
    },
    {
        name: 'Fatehganj Pashchimi',
        state_id: 38,
    },
    {
        name: 'Fatehganj Purvi',
        state_id: 38,
    },
    {
        name: 'Fatehgarh',
        state_id: 38,
    },
    {
        name: 'Fatehpur',
        state_id: 38,
    },
    {
        name: 'Fatehpur Chaurasi',
        state_id: 38,
    },
    {
        name: 'Fatehpur Sikri',
        state_id: 38,
    },
    {
        name: 'Firozabad',
        state_id: 38,
    },
    {
        name: 'Gajraula',
        state_id: 38,
    },
    {
        name: 'Ganga Ghat',
        state_id: 38,
    },
    {
        name: 'Gangapur',
        state_id: 38,
    },
    {
        name: 'Gangoh',
        state_id: 38,
    },
    {
        name: 'Ganj Muradabad',
        state_id: 38,
    },
    {
        name: 'Garautha',
        state_id: 38,
    },
    {
        name: 'Garhi Pukhta',
        state_id: 38,
    },
    {
        name: 'Garhmukteshwar',
        state_id: 38,
    },
    {
        name: 'Gaura Barahaj',
        state_id: 38,
    },
    {
        name: 'Gauri Bazar',
        state_id: 38,
    },
    {
        name: 'Gausganj',
        state_id: 38,
    },
    {
        name: 'Gawan',
        state_id: 38,
    },
    {
        name: 'Ghatampur',
        state_id: 38,
    },
    {
        name: 'Ghaziabad',
        state_id: 38,
    },
    {
        name: 'Ghazipur',
        state_id: 38,
    },
    {
        name: 'Ghiror',
        state_id: 38,
    },
    {
        name: 'Ghorawal',
        state_id: 38,
    },
    {
        name: 'Ghosi',
        state_id: 38,
    },
    {
        name: 'Ghosia Bazar',
        state_id: 38,
    },
    {
        name: 'Ghughuli',
        state_id: 38,
    },
    {
        name: 'Gohand',
        state_id: 38,
    },
    {
        name: 'Gokul',
        state_id: 38,
    },
    {
        name: 'Gola Bazar',
        state_id: 38,
    },
    {
        name: 'Gola Gokarannath',
        state_id: 38,
    },
    {
        name: 'Gonda',
        state_id: 38,
    },
    {
        name: 'Gopamau',
        state_id: 38,
    },
    {
        name: 'Gopiganj',
        state_id: 38,
    },
    {
        name: 'Gorakhpur',
        state_id: 38,
    },
    {
        name: 'Gosainganj',
        state_id: 38,
    },
    {
        name: 'Govardhan',
        state_id: 38,
    },
    {
        name: 'Greater Noida',
        state_id: 38,
    },
    {
        name: 'Gulaothi',
        state_id: 38,
    },
    {
        name: 'Gulariya',
        state_id: 38,
    },
    {
        name: 'Gulariya Bhindara',
        state_id: 38,
    },
    {
        name: 'Gunnaur',
        state_id: 38,
    },
    {
        name: 'Gursahaiganj',
        state_id: 38,
    },
    {
        name: 'Gursarai',
        state_id: 38,
    },
    {
        name: 'Gyanpur',
        state_id: 38,
    },
    {
        name: 'Hafizpur',
        state_id: 38,
    },
    {
        name: 'Haidergarh',
        state_id: 38,
    },
    {
        name: 'Haldaur',
        state_id: 38,
    },
    {
        name: 'Hamirpur',
        state_id: 38,
    },
    {
        name: 'Handia',
        state_id: 38,
    },
    {
        name: 'Hapur',
        state_id: 38,
    },
    {
        name: 'Hardoi',
        state_id: 38,
    },
    {
        name: 'Harduaganj',
        state_id: 38,
    },
    {
        name: 'Hargaon',
        state_id: 38,
    },
    {
        name: 'Hariharpur',
        state_id: 38,
    },
    {
        name: 'Harraiya',
        state_id: 38,
    },
    {
        name: 'Hasanpur',
        state_id: 38,
    },
    {
        name: 'Hasayan',
        state_id: 38,
    },
    {
        name: 'Hastinapur',
        state_id: 38,
    },
    {
        name: 'Hata',
        state_id: 38,
    },
    {
        name: 'Hathras',
        state_id: 38,
    },
    {
        name: 'Hyderabad',
        state_id: 38,
    },
    {
        name: 'Ibrahimpur',
        state_id: 38,
    },
    {
        name: 'Iglas',
        state_id: 38,
    },
    {
        name: 'Ikauna',
        state_id: 38,
    },
    {
        name: 'Iltifatganj Bazar',
        state_id: 38,
    },
    {
        name: 'Indian Telephone Industry Mank',
        state_id: 38,
    },
    {
        name: 'Islamnagar',
        state_id: 38,
    },
    {
        name: 'Itaunja',
        state_id: 38,
    },
    {
        name: 'Itimadpur',
        state_id: 38,
    },
    {
        name: 'Jagner',
        state_id: 38,
    },
    {
        name: 'Jahanabad',
        state_id: 38,
    },
    {
        name: 'Jahangirabad',
        state_id: 38,
    },
    {
        name: 'Jahangirpur',
        state_id: 38,
    },
    {
        name: 'Jais',
        state_id: 38,
    },
    {
        name: 'Jaithara',
        state_id: 38,
    },
    {
        name: 'Jalalabad',
        state_id: 38,
    },
    {
        name: 'Jalali',
        state_id: 38,
    },
    {
        name: 'Jalalpur',
        state_id: 38,
    },
    {
        name: 'Jalaun',
        state_id: 38,
    },
    {
        name: 'Jalesar',
        state_id: 38,
    },
    {
        name: 'Jamshila',
        state_id: 38,
    },
    {
        name: 'Jangipur',
        state_id: 38,
    },
    {
        name: 'Jansath',
        state_id: 38,
    },
    {
        name: 'Jarwal',
        state_id: 38,
    },
    {
        name: 'Jasrana',
        state_id: 38,
    },
    {
        name: 'Jaswantnagar',
        state_id: 38,
    },
    {
        name: 'Jatari',
        state_id: 38,
    },
    {
        name: 'Jaunpur',
        state_id: 38,
    },
    {
        name: 'Jewar',
        state_id: 38,
    },
    {
        name: 'Jhalu',
        state_id: 38,
    },
    {
        name: 'Jhansi',
        state_id: 38,
    },
    {
        name: 'Jhansi Cantonment',
        state_id: 38,
    },
    {
        name: 'Jhansi Railway Settlement',
        state_id: 38,
    },
    {
        name: 'Jhinjhak',
        state_id: 38,
    },
    {
        name: 'Jhinjhana',
        state_id: 38,
    },
    {
        name: 'Jhusi',
        state_id: 38,
    },
    {
        name: 'Jhusi Kohna',
        state_id: 38,
    },
    {
        name: 'Jiyanpur',
        state_id: 38,
    },
    {
        name: 'Joya',
        state_id: 38,
    },
    {
        name: 'Jyoti Khuria',
        state_id: 38,
    },
    {
        name: 'Jyotiba Phule Nagar',
        state_id: 38,
    },
    {
        name: 'Kabrai',
        state_id: 38,
    },
    {
        name: 'Kachhauna Patseni',
        state_id: 38,
    },
    {
        name: 'Kachhla',
        state_id: 38,
    },
    {
        name: 'Kachhwa',
        state_id: 38,
    },
    {
        name: 'Kadaura',
        state_id: 38,
    },
    {
        name: 'Kadipur',
        state_id: 38,
    },
    {
        name: 'Kailashpur',
        state_id: 38,
    },
    {
        name: 'Kaimganj',
        state_id: 38,
    },
    {
        name: 'Kairana',
        state_id: 38,
    },
    {
        name: 'Kakgaina',
        state_id: 38,
    },
    {
        name: 'Kakod',
        state_id: 38,
    },
    {
        name: 'Kakori',
        state_id: 38,
    },
    {
        name: 'Kakrala',
        state_id: 38,
    },
    {
        name: 'Kalinagar',
        state_id: 38,
    },
    {
        name: 'Kalpi',
        state_id: 38,
    },
    {
        name: 'Kamalganj',
        state_id: 38,
    },
    {
        name: 'Kampil',
        state_id: 38,
    },
    {
        name: 'Kandhla',
        state_id: 38,
    },
    {
        name: 'Kandwa',
        state_id: 38,
    },
    {
        name: 'Kannauj',
        state_id: 38,
    },
    {
        name: 'Kanpur',
        state_id: 38,
    },
    {
        name: 'Kant',
        state_id: 38,
    },
    {
        name: 'Kanth',
        state_id: 38,
    },
    {
        name: 'Kaptanganj',
        state_id: 38,
    },
    {
        name: 'Karaon',
        state_id: 38,
    },
    {
        name: 'Karari',
        state_id: 38,
    },
    {
        name: 'Karhal',
        state_id: 38,
    },
    {
        name: 'Karnawal',
        state_id: 38,
    },
    {
        name: 'Kasganj',
        state_id: 38,
    },
    {
        name: 'Katariya',
        state_id: 38,
    },
    {
        name: 'Katghar Lalganj',
        state_id: 38,
    },
    {
        name: 'Kathera',
        state_id: 38,
    },
    {
        name: 'Katra',
        state_id: 38,
    },
    {
        name: 'Katra Medniganj',
        state_id: 38,
    },
    {
        name: 'Kauriaganj',
        state_id: 38,
    },
    {
        name: 'Kemri',
        state_id: 38,
    },
    {
        name: 'Kerakat',
        state_id: 38,
    },
    {
        name: 'Khadda',
        state_id: 38,
    },
    {
        name: 'Khaga',
        state_id: 38,
    },
    {
        name: 'Khailar',
        state_id: 38,
    },
    {
        name: 'Khair',
        state_id: 38,
    },
    {
        name: 'Khairabad',
        state_id: 38,
    },
    {
        name: 'Khairagarh',
        state_id: 38,
    },
    {
        name: 'Khalilabad',
        state_id: 38,
    },
    {
        name: 'Khamaria',
        state_id: 38,
    },
    {
        name: 'Khanpur',
        state_id: 38,
    },
    {
        name: 'Kharela',
        state_id: 38,
    },
    {
        name: 'Khargupur',
        state_id: 38,
    },
    {
        name: 'Khariya',
        state_id: 38,
    },
    {
        name: 'Kharkhoda',
        state_id: 38,
    },
    {
        name: 'Khatauli',
        state_id: 38,
    },
    {
        name: 'Khatauli Rural',
        state_id: 38,
    },
    {
        name: 'Khekra',
        state_id: 38,
    },
    {
        name: 'Kheri',
        state_id: 38,
    },
    {
        name: 'Kheta Sarai',
        state_id: 38,
    },
    {
        name: 'Khudaganj',
        state_id: 38,
    },
    {
        name: 'Khurja',
        state_id: 38,
    },
    {
        name: 'Khutar',
        state_id: 38,
    },
    {
        name: 'Kiraoli',
        state_id: 38,
    },
    {
        name: 'Kiratpur',
        state_id: 38,
    },
    {
        name: 'Kishanpur',
        state_id: 38,
    },
    {
        name: 'Kishni',
        state_id: 38,
    },
    {
        name: 'Kithaur',
        state_id: 38,
    },
    {
        name: 'Koiripur',
        state_id: 38,
    },
    {
        name: 'Konch',
        state_id: 38,
    },
    {
        name: 'Kopaganj',
        state_id: 38,
    },
    {
        name: 'Kora Jahanabad',
        state_id: 38,
    },
    {
        name: 'Korwa',
        state_id: 38,
    },
    {
        name: 'Kosi Kalan',
        state_id: 38,
    },
    {
        name: 'Kota',
        state_id: 38,
    },
    {
        name: 'Kotra',
        state_id: 38,
    },
    {
        name: 'Kotwa',
        state_id: 38,
    },
    {
        name: 'Kulpahar',
        state_id: 38,
    },
    {
        name: 'Kunda',
        state_id: 38,
    },
    {
        name: 'Kundarki',
        state_id: 38,
    },
    {
        name: 'Kunwargaon',
        state_id: 38,
    },
    {
        name: 'Kurara',
        state_id: 38,
    },
    {
        name: 'Kurawali',
        state_id: 38,
    },
    {
        name: 'Kursath',
        state_id: 38,
    },
    {
        name: 'Kurthi Jafarpur',
        state_id: 38,
    },
    {
        name: 'Kushinagar',
        state_id: 38,
    },
    {
        name: 'Kusmara',
        state_id: 38,
    },
    {
        name: 'Laharpur',
        state_id: 38,
    },
    {
        name: 'Lakhimpur',
        state_id: 38,
    },
    {
        name: 'Lakhna',
        state_id: 38,
    },
    {
        name: 'Lalganj',
        state_id: 38,
    },
    {
        name: 'Lalitpur',
        state_id: 38,
    },
    {
        name: 'Lar',
        state_id: 38,
    },
    {
        name: 'Lawar',
        state_id: 38,
    },
    {
        name: 'Ledwa Mahuwa',
        state_id: 38,
    },
    {
        name: 'Lohta',
        state_id: 38,
    },
    {
        name: 'Loni',
        state_id: 38,
    },
    {
        name: 'Lucknow',
        state_id: 38,
    },
    {
        name: 'Machhlishahr',
        state_id: 38,
    },
    {
        name: 'Madhoganj',
        state_id: 38,
    },
    {
        name: 'Madhogarh',
        state_id: 38,
    },
    {
        name: 'Maghar',
        state_id: 38,
    },
    {
        name: 'Mahaban',
        state_id: 38,
    },
    {
        name: 'Maharajganj',
        state_id: 38,
    },
    {
        name: 'Mahmudabad',
        state_id: 38,
    },
    {
        name: 'Mahoba',
        state_id: 38,
    },
    {
        name: 'Maholi',
        state_id: 38,
    },
    {
        name: 'Mahona',
        state_id: 38,
    },
    {
        name: 'Mahroni',
        state_id: 38,
    },
    {
        name: 'Mailani',
        state_id: 38,
    },
    {
        name: 'Mainpuri',
        state_id: 38,
    },
    {
        name: 'Majhara Pipar Ehatmali',
        state_id: 38,
    },
    {
        name: 'Majhauli Raj',
        state_id: 38,
    },
    {
        name: 'Malihabad',
        state_id: 38,
    },
    {
        name: 'Mallanwam',
        state_id: 38,
    },
    {
        name: 'Mandawar',
        state_id: 38,
    },
    {
        name: 'Manikpur',
        state_id: 38,
    },
    {
        name: 'Maniyar',
        state_id: 38,
    },
    {
        name: 'Manjhanpur',
        state_id: 38,
    },
    {
        name: 'Mankapur',
        state_id: 38,
    },
    {
        name: 'Marehra',
        state_id: 38,
    },
    {
        name: 'Mariahu',
        state_id: 38,
    },
    {
        name: 'Maruadih',
        state_id: 38,
    },
    {
        name: 'Maswasi',
        state_id: 38,
    },
    {
        name: 'Mataundh',
        state_id: 38,
    },
    {
        name: 'Mathu',
        state_id: 38,
    },
    {
        name: 'Mathura',
        state_id: 38,
    },
    {
        name: 'Mathura Cantonment',
        state_id: 38,
    },
    {
        name: 'Mau',
        state_id: 38,
    },
    {
        name: 'Mau Aima',
        state_id: 38,
    },
    {
        name: 'Maudaha',
        state_id: 38,
    },
    {
        name: 'Mauranipur',
        state_id: 38,
    },
    {
        name: 'Maurawan',
        state_id: 38,
    },
    {
        name: 'Mawana',
        state_id: 38,
    },
    {
        name: 'Meerut',
        state_id: 38,
    },
    {
        name: 'Mehnagar',
        state_id: 38,
    },
    {
        name: 'Mehndawal',
        state_id: 38,
    },
    {
        name: 'Mendu',
        state_id: 38,
    },
    {
        name: 'Milak',
        state_id: 38,
    },
    {
        name: 'Miranpur',
        state_id: 38,
    },
    {
        name: 'Mirat',
        state_id: 38,
    },
    {
        name: 'Mirat Cantonment',
        state_id: 38,
    },
    {
        name: 'Mirganj',
        state_id: 38,
    },
    {
        name: 'Mirzapur',
        state_id: 38,
    },
    {
        name: 'Misrikh',
        state_id: 38,
    },
    {
        name: 'Modinagar',
        state_id: 38,
    },
    {
        name: 'Mogra Badshahpur',
        state_id: 38,
    },
    {
        name: 'Mohan',
        state_id: 38,
    },
    {
        name: 'Mohanpur',
        state_id: 38,
    },
    {
        name: 'Mohiuddinpur',
        state_id: 38,
    },
    {
        name: 'Moradabad',
        state_id: 38,
    },
    {
        name: 'Moth',
        state_id: 38,
    },
    {
        name: 'Mubarakpur',
        state_id: 38,
    },
    {
        name: 'Mughal Sarai',
        state_id: 38,
    },
    {
        name: 'Mughal Sarai Railway Settlemen',
        state_id: 38,
    },
    {
        name: 'Muhammadabad',
        state_id: 38,
    },
    {
        name: 'Muhammadi',
        state_id: 38,
    },
    {
        name: 'Mukrampur Khema',
        state_id: 38,
    },
    {
        name: 'Mundia',
        state_id: 38,
    },
    {
        name: 'Mundora',
        state_id: 38,
    },
    {
        name: 'Muradnagar',
        state_id: 38,
    },
    {
        name: 'Mursan',
        state_id: 38,
    },
    {
        name: 'Musafirkhana',
        state_id: 38,
    },
    {
        name: 'Muzaffarnagar',
        state_id: 38,
    },
    {
        name: 'Nadigaon',
        state_id: 38,
    },
    {
        name: 'Nagina',
        state_id: 38,
    },
    {
        name: 'Nagram',
        state_id: 38,
    },
    {
        name: 'Nai Bazar',
        state_id: 38,
    },
    {
        name: 'Nainana Jat',
        state_id: 38,
    },
    {
        name: 'Najibabad',
        state_id: 38,
    },
    {
        name: 'Nakur',
        state_id: 38,
    },
    {
        name: 'Nanaunta',
        state_id: 38,
    },
    {
        name: 'Nandgaon',
        state_id: 38,
    },
    {
        name: 'Nanpara',
        state_id: 38,
    },
    {
        name: 'Naraini',
        state_id: 38,
    },
    {
        name: 'Narauli',
        state_id: 38,
    },
    {
        name: 'Naraura',
        state_id: 38,
    },
    {
        name: 'Naugawan Sadat',
        state_id: 38,
    },
    {
        name: 'Nautanwa',
        state_id: 38,
    },
    {
        name: 'Nawabganj',
        state_id: 38,
    },
    {
        name: 'Nichlaul',
        state_id: 38,
    },
    {
        name: 'Nidhauli Kalan',
        state_id: 38,
    },
    {
        name: 'Nihtaur',
        state_id: 38,
    },
    {
        name: 'Nindaura',
        state_id: 38,
    },
    {
        name: 'Niwari',
        state_id: 38,
    },
    {
        name: 'Nizamabad',
        state_id: 38,
    },
    {
        name: 'Noida',
        state_id: 38,
    },
    {
        name: 'Northern Railway Colony',
        state_id: 38,
    },
    {
        name: 'Nurpur',
        state_id: 38,
    },
    {
        name: 'Nyoria Husenpur',
        state_id: 38,
    },
    {
        name: 'Nyotini',
        state_id: 38,
    },
    {
        name: 'Obra',
        state_id: 38,
    },
    {
        name: 'Oel Dhakwa',
        state_id: 38,
    },
    {
        name: 'Orai',
        state_id: 38,
    },
    {
        name: 'Oran',
        state_id: 38,
    },
    {
        name: 'Ordinance Factory Muradnagar',
        state_id: 38,
    },
    {
        name: 'Pachperwa',
        state_id: 38,
    },
    {
        name: 'Padrauna',
        state_id: 38,
    },
    {
        name: 'Pahasu',
        state_id: 38,
    },
    {
        name: 'Paintepur',
        state_id: 38,
    },
    {
        name: 'Pali',
        state_id: 38,
    },
    {
        name: 'Palia Kalan',
        state_id: 38,
    },
    {
        name: 'Parasi',
        state_id: 38,
    },
    {
        name: 'Parichha',
        state_id: 38,
    },
    {
        name: 'Parichhatgarh',
        state_id: 38,
    },
    {
        name: 'Parsadepur',
        state_id: 38,
    },
    {
        name: 'Patala',
        state_id: 38,
    },
    {
        name: 'Patiyali',
        state_id: 38,
    },
    {
        name: 'Patti',
        state_id: 38,
    },
    {
        name: 'Pawayan',
        state_id: 38,
    },
    {
        name: 'Phalauda',
        state_id: 38,
    },
    {
        name: 'Phaphund',
        state_id: 38,
    },
    {
        name: 'Phulpur',
        state_id: 38,
    },
    {
        name: 'Phulwaria',
        state_id: 38,
    },
    {
        name: 'Pihani',
        state_id: 38,
    },
    {
        name: 'Pilibhit',
        state_id: 38,
    },
    {
        name: 'Pilkana',
        state_id: 38,
    },
    {
        name: 'Pilkhuwa',
        state_id: 38,
    },
    {
        name: 'Pinahat',
        state_id: 38,
    },
    {
        name: 'Pipalsana Chaudhari',
        state_id: 38,
    },
    {
        name: 'Pipiganj',
        state_id: 38,
    },
    {
        name: 'Pipraich',
        state_id: 38,
    },
    {
        name: 'Pipri',
        state_id: 38,
    },
    {
        name: 'Pratapgarh',
        state_id: 38,
    },
    {
        name: 'Pukhrayan',
        state_id: 38,
    },
    {
        name: 'Puranpur',
        state_id: 38,
    },
    {
        name: 'Purdil Nagar',
        state_id: 38,
    },
    {
        name: 'Purqazi',
        state_id: 38,
    },
    {
        name: 'Purwa',
        state_id: 38,
    },
    {
        name: 'Qasimpur',
        state_id: 38,
    },
    {
        name: 'Rabupura',
        state_id: 38,
    },
    {
        name: 'Radha Kund',
        state_id: 38,
    },
    {
        name: 'Rae Bareilly',
        state_id: 38,
    },
    {
        name: 'Raja Ka Rampur',
        state_id: 38,
    },
    {
        name: 'Rajapur',
        state_id: 38,
    },
    {
        name: 'Ramkola',
        state_id: 38,
    },
    {
        name: 'Ramnagar',
        state_id: 38,
    },
    {
        name: 'Rampur',
        state_id: 38,
    },
    {
        name: 'Rampur Bhawanipur',
        state_id: 38,
    },
    {
        name: 'Rampur Karkhana',
        state_id: 38,
    },
    {
        name: 'Rampur Maniharan',
        state_id: 38,
    },
    {
        name: 'Rampura',
        state_id: 38,
    },
    {
        name: 'Ranipur',
        state_id: 38,
    },
    {
        name: 'Rashidpur Garhi',
        state_id: 38,
    },
    {
        name: 'Rasra',
        state_id: 38,
    },
    {
        name: 'Rasulabad',
        state_id: 38,
    },
    {
        name: 'Rath',
        state_id: 38,
    },
    {
        name: 'Raya',
        state_id: 38,
    },
    {
        name: 'Renukut',
        state_id: 38,
    },
    {
        name: 'Reoti',
        state_id: 38,
    },
    {
        name: 'Richha',
        state_id: 38,
    },
    {
        name: 'Risia Bazar',
        state_id: 38,
    },
    {
        name: 'Rithora',
        state_id: 38,
    },
    {
        name: 'Robertsganj',
        state_id: 38,
    },
    {
        name: 'Roza',
        state_id: 38,
    },
    {
        name: 'Rudarpur',
        state_id: 38,
    },
    {
        name: 'Rudauli',
        state_id: 38,
    },
    {
        name: 'Rudayan',
        state_id: 38,
    },
    {
        name: 'Rura',
        state_id: 38,
    },
    {
        name: 'Rustamnagar Sahaspur',
        state_id: 38,
    },
    {
        name: 'Sabatwar',
        state_id: 38,
    },
    {
        name: 'Sadabad',
        state_id: 38,
    },
    {
        name: 'Sadat',
        state_id: 38,
    },
    {
        name: 'Safipur',
        state_id: 38,
    },
    {
        name: 'Sahanpur',
        state_id: 38,
    },
    {
        name: 'Saharanpur',
        state_id: 38,
    },
    {
        name: 'Sahaspur',
        state_id: 38,
    },
    {
        name: 'Sahaswan',
        state_id: 38,
    },
    {
        name: 'Sahawar',
        state_id: 38,
    },
    {
        name: 'Sahibabad',
        state_id: 38,
    },
    {
        name: 'Sahjanwa',
        state_id: 38,
    },
    {
        name: 'Sahpau',
        state_id: 38,
    },
    {
        name: 'Saidpur',
        state_id: 38,
    },
    {
        name: 'Sainthal',
        state_id: 38,
    },
    {
        name: 'Saiyadraja',
        state_id: 38,
    },
    {
        name: 'Sakhanu',
        state_id: 38,
    },
    {
        name: 'Sakit',
        state_id: 38,
    },
    {
        name: 'Salarpur Khadar',
        state_id: 38,
    },
    {
        name: 'Salimpur',
        state_id: 38,
    },
    {
        name: 'Salon',
        state_id: 38,
    },
    {
        name: 'Sambhal',
        state_id: 38,
    },
    {
        name: 'Sambhawali',
        state_id: 38,
    },
    {
        name: 'Samdhan',
        state_id: 38,
    },
    {
        name: 'Samthar',
        state_id: 38,
    },
    {
        name: 'Sandi',
        state_id: 38,
    },
    {
        name: 'Sandila',
        state_id: 38,
    },
    {
        name: 'Sarai Mir',
        state_id: 38,
    },
    {
        name: 'Sarai akil',
        state_id: 38,
    },
    {
        name: 'Sarauli',
        state_id: 38,
    },
    {
        name: 'Sardhana',
        state_id: 38,
    },
    {
        name: 'Sarila',
        state_id: 38,
    },
    {
        name: 'Sarsawan',
        state_id: 38,
    },
    {
        name: 'Sasni',
        state_id: 38,
    },
    {
        name: 'Satrikh',
        state_id: 38,
    },
    {
        name: 'Saunkh',
        state_id: 38,
    },
    {
        name: 'Saurikh',
        state_id: 38,
    },
    {
        name: 'Seohara',
        state_id: 38,
    },
    {
        name: 'Sewal Khas',
        state_id: 38,
    },
    {
        name: 'Sewarhi',
        state_id: 38,
    },
    {
        name: 'Shahabad',
        state_id: 38,
    },
    {
        name: 'Shahganj',
        state_id: 38,
    },
    {
        name: 'Shahi',
        state_id: 38,
    },
    {
        name: 'Shahjahanpur',
        state_id: 38,
    },
    {
        name: 'Shahjahanpur Cantonment',
        state_id: 38,
    },
    {
        name: 'Shahpur',
        state_id: 38,
    },
    {
        name: 'Shamli',
        state_id: 38,
    },
    {
        name: 'Shamsabad',
        state_id: 38,
    },
    {
        name: 'Shankargarh',
        state_id: 38,
    },
    {
        name: 'Shergarh',
        state_id: 38,
    },
    {
        name: 'Sherkot',
        state_id: 38,
    },
    {
        name: 'Shikarpur',
        state_id: 38,
    },
    {
        name: 'Shikohabad',
        state_id: 38,
    },
    {
        name: 'Shisgarh',
        state_id: 38,
    },
    {
        name: 'Shivdaspur',
        state_id: 38,
    },
    {
        name: 'Shivli',
        state_id: 38,
    },
    {
        name: 'Shivrajpur',
        state_id: 38,
    },
    {
        name: 'Shohratgarh',
        state_id: 38,
    },
    {
        name: 'Siddhanur',
        state_id: 38,
    },
    {
        name: 'Siddharthnagar',
        state_id: 38,
    },
    {
        name: 'Sidhauli',
        state_id: 38,
    },
    {
        name: 'Sidhpura',
        state_id: 38,
    },
    {
        name: 'Sikandarabad',
        state_id: 38,
    },
    {
        name: 'Sikandarpur',
        state_id: 38,
    },
    {
        name: 'Sikandra',
        state_id: 38,
    },
    {
        name: 'Sikandra Rao',
        state_id: 38,
    },
    {
        name: 'Singahi Bhiraura',
        state_id: 38,
    },
    {
        name: 'Sirathu',
        state_id: 38,
    },
    {
        name: 'Sirsa',
        state_id: 38,
    },
    {
        name: 'Sirsaganj',
        state_id: 38,
    },
    {
        name: 'Sirsi',
        state_id: 38,
    },
    {
        name: 'Sisauli',
        state_id: 38,
    },
    {
        name: 'Siswa Bazar',
        state_id: 38,
    },
    {
        name: 'Sitapur',
        state_id: 38,
    },
    {
        name: 'Siyana',
        state_id: 38,
    },
    {
        name: 'Som',
        state_id: 38,
    },
    {
        name: 'Sonbhadra',
        state_id: 38,
    },
    {
        name: 'Soron',
        state_id: 38,
    },
    {
        name: 'Suar',
        state_id: 38,
    },
    {
        name: 'Sukhmalpur Nizamabad',
        state_id: 38,
    },
    {
        name: 'Sultanpur',
        state_id: 38,
    },
    {
        name: 'Sumerpur',
        state_id: 38,
    },
    {
        name: 'Suriyawan',
        state_id: 38,
    },
    {
        name: 'Swamibagh',
        state_id: 38,
    },
    {
        name: 'Tajpur',
        state_id: 38,
    },
    {
        name: 'Talbahat',
        state_id: 38,
    },
    {
        name: 'Talgram',
        state_id: 38,
    },
    {
        name: 'Tambaur',
        state_id: 38,
    },
    {
        name: 'Tanda',
        state_id: 38,
    },
    {
        name: 'Tatarpur Lallu',
        state_id: 38,
    },
    {
        name: 'Tetribazar',
        state_id: 38,
    },
    {
        name: 'Thakurdwara',
        state_id: 38,
    },
    {
        name: 'Thana Bhawan',
        state_id: 38,
    },
    {
        name: 'Thiriya Nizamat Khan',
        state_id: 38,
    },
    {
        name: 'Tikaitnagar',
        state_id: 38,
    },
    {
        name: 'Tikri',
        state_id: 38,
    },
    {
        name: 'Tilhar',
        state_id: 38,
    },
    {
        name: 'Tindwari',
        state_id: 38,
    },
    {
        name: 'Tirwaganj',
        state_id: 38,
    },
    {
        name: 'Titron',
        state_id: 38,
    },
    {
        name: 'Tori Fatehpur',
        state_id: 38,
    },
    {
        name: 'Tulsipur',
        state_id: 38,
    },
    {
        name: 'Tundla',
        state_id: 38,
    },
    {
        name: 'Tundla Kham',
        state_id: 38,
    },
    {
        name: 'Tundla Railway Colony',
        state_id: 38,
    },
    {
        name: 'Ugu',
        state_id: 38,
    },
    {
        name: 'Ujhani',
        state_id: 38,
    },
    {
        name: 'Ujhari',
        state_id: 38,
    },
    {
        name: 'Umri',
        state_id: 38,
    },
    {
        name: 'Umri Kalan',
        state_id: 38,
    },
    {
        name: 'Un',
        state_id: 38,
    },
    {
        name: 'Unchahar',
        state_id: 38,
    },
    {
        name: 'Unnao',
        state_id: 38,
    },
    {
        name: 'Usaihat',
        state_id: 38,
    },
    {
        name: 'Usawan',
        state_id: 38,
    },
    {
        name: 'Utraula',
        state_id: 38,
    },
    {
        name: 'Varanasi',
        state_id: 38,
    },
    {
        name: 'Varanasi Cantonment',
        state_id: 38,
    },
    {
        name: 'Vijaigarh',
        state_id: 38,
    },
    {
        name: 'Vrindavan',
        state_id: 38,
    },
    {
        name: 'Wazirganj',
        state_id: 38,
    },
    {
        name: 'Zafarabad',
        state_id: 38,
    },
    {
        name: 'Zaidpur',
        state_id: 38,
    },
    {
        name: 'Zamania',
        state_id: 38,
    },
    {
        name: 'Almora',
        state_id: 39,
    },
    {
        name: 'Almora Cantonment',
        state_id: 39,
    },
    {
        name: 'Badrinathpuri',
        state_id: 39,
    },
    {
        name: 'Bageshwar',
        state_id: 39,
    },
    {
        name: 'Bah Bazar',
        state_id: 39,
    },
    {
        name: 'Banbasa',
        state_id: 39,
    },
    {
        name: 'Bandia',
        state_id: 39,
    },
    {
        name: 'Barkot',
        state_id: 39,
    },
    {
        name: 'Bazpur',
        state_id: 39,
    },
    {
        name: 'Bhim Tal',
        state_id: 39,
    },
    {
        name: 'Bhowali',
        state_id: 39,
    },
    {
        name: 'Chakrata',
        state_id: 39,
    },
    {
        name: 'Chamba',
        state_id: 39,
    },
    {
        name: 'Chamoli and Gopeshwar',
        state_id: 39,
    },
    {
        name: 'Champawat',
        state_id: 39,
    },
    {
        name: 'Clement Town',
        state_id: 39,
    },
    {
        name: 'Dehra Dun Cantonment',
        state_id: 39,
    },
    {
        name: 'Dehradun',
        state_id: 39,
    },
    {
        name: 'Dehrakhas',
        state_id: 39,
    },
    {
        name: 'Devaprayag',
        state_id: 39,
    },
    {
        name: 'Dhaluwala',
        state_id: 39,
    },
    {
        name: 'Dhandera',
        state_id: 39,
    },
    {
        name: 'Dharchula',
        state_id: 39,
    },
    {
        name: 'Dharchula Dehat',
        state_id: 39,
    },
    {
        name: 'Didihat',
        state_id: 39,
    },
    {
        name: 'Dineshpur',
        state_id: 39,
    },
    {
        name: 'Doiwala',
        state_id: 39,
    },
    {
        name: 'Dugadda',
        state_id: 39,
    },
    {
        name: 'Dwarahat',
        state_id: 39,
    },
    {
        name: 'Gadarpur',
        state_id: 39,
    },
    {
        name: 'Gangotri',
        state_id: 39,
    },
    {
        name: 'Gauchar',
        state_id: 39,
    },
    {
        name: 'Haldwani',
        state_id: 39,
    },
    {
        name: 'Haridwar',
        state_id: 39,
    },
    {
        name: 'Herbertpur',
        state_id: 39,
    },
    {
        name: 'Jaspur',
        state_id: 39,
    },
    {
        name: 'Jhabrera',
        state_id: 39,
    },
    {
        name: 'Joshimath',
        state_id: 39,
    },
    {
        name: 'Kachnal Gosain',
        state_id: 39,
    },
    {
        name: 'Kaladungi',
        state_id: 39,
    },
    {
        name: 'Kalagarh',
        state_id: 39,
    },
    {
        name: 'Karnaprayang',
        state_id: 39,
    },
    {
        name: 'Kashipur',
        state_id: 39,
    },
    {
        name: 'Kashirampur',
        state_id: 39,
    },
    {
        name: 'Kausani',
        state_id: 39,
    },
    {
        name: 'Kedarnath',
        state_id: 39,
    },
    {
        name: 'Kelakhera',
        state_id: 39,
    },
    {
        name: 'Khatima',
        state_id: 39,
    },
    {
        name: 'Kichha',
        state_id: 39,
    },
    {
        name: 'Kirtinagar',
        state_id: 39,
    },
    {
        name: 'Kotdwara',
        state_id: 39,
    },
    {
        name: 'Laksar',
        state_id: 39,
    },
    {
        name: 'Lalkuan',
        state_id: 39,
    },
    {
        name: 'Landaura',
        state_id: 39,
    },
    {
        name: 'Landhaura Cantonment',
        state_id: 39,
    },
    {
        name: 'Lensdaun',
        state_id: 39,
    },
    {
        name: 'Logahat',
        state_id: 39,
    },
    {
        name: 'Mahua Dabra Haripura',
        state_id: 39,
    },
    {
        name: 'Mahua Kheraganj',
        state_id: 39,
    },
    {
        name: 'Manglaur',
        state_id: 39,
    },
    {
        name: 'Masuri',
        state_id: 39,
    },
    {
        name: 'Mohanpur Mohammadpur',
        state_id: 39,
    },
    {
        name: 'Muni Ki Reti',
        state_id: 39,
    },
    {
        name: 'Nagla',
        state_id: 39,
    },
    {
        name: 'Nainital',
        state_id: 39,
    },
    {
        name: 'Nainital Cantonment',
        state_id: 39,
    },
    {
        name: 'Nandaprayang',
        state_id: 39,
    },
    {
        name: 'Narendranagar',
        state_id: 39,
    },
    {
        name: 'Pauri',
        state_id: 39,
    },
    {
        name: 'Pithoragarh',
        state_id: 39,
    },
    {
        name: 'Pratitnagar',
        state_id: 39,
    },
    {
        name: 'Raipur',
        state_id: 39,
    },
    {
        name: 'Raiwala',
        state_id: 39,
    },
    {
        name: 'Ramnagar',
        state_id: 39,
    },
    {
        name: 'Ranikhet',
        state_id: 39,
    },
    {
        name: 'Ranipur',
        state_id: 39,
    },
    {
        name: 'Rishikesh',
        state_id: 39,
    },
    {
        name: 'Rishikesh Cantonment',
        state_id: 39,
    },
    {
        name: 'Roorkee',
        state_id: 39,
    },
    {
        name: 'Rudraprayag',
        state_id: 39,
    },
    {
        name: 'Rudrapur',
        state_id: 39,
    },
    {
        name: 'Rurki',
        state_id: 39,
    },
    {
        name: 'Rurki Cantonment',
        state_id: 39,
    },
    {
        name: 'Shaktigarh',
        state_id: 39,
    },
    {
        name: 'Sitarganj',
        state_id: 39,
    },
    {
        name: 'Srinagar',
        state_id: 39,
    },
    {
        name: 'Sultanpur',
        state_id: 39,
    },
    {
        name: 'Tanakpur',
        state_id: 39,
    },
    {
        name: 'Tehri',
        state_id: 39,
    },
    {
        name: 'Udham Singh Nagar',
        state_id: 39,
    },
    {
        name: 'Uttarkashi',
        state_id: 39,
    },
    {
        name: 'Vikasnagar',
        state_id: 39,
    },
    {
        name: 'Virbhadra',
        state_id: 39,
    },
    {
        name: '24 Parganas (n)',
        state_id: 41,
    },
    {
        name: '24 Parganas (s)',
        state_id: 41,
    },
    {
        name: 'Adra',
        state_id: 41,
    },
    {
        name: 'Ahmadpur',
        state_id: 41,
    },
    {
        name: 'Aiho',
        state_id: 41,
    },
    {
        name: 'Aistala',
        state_id: 41,
    },
    {
        name: 'Alipur Duar',
        state_id: 41,
    },
    {
        name: 'Alipur Duar Railway Junction',
        state_id: 41,
    },
    {
        name: 'Alpur',
        state_id: 41,
    },
    {
        name: 'Amalhara',
        state_id: 41,
    },
    {
        name: 'Amkula',
        state_id: 41,
    },
    {
        name: 'Amlagora',
        state_id: 41,
    },
    {
        name: 'Amodghata',
        state_id: 41,
    },
    {
        name: 'Amtala',
        state_id: 41,
    },
    {
        name: 'Andul',
        state_id: 41,
    },
    {
        name: 'Anksa',
        state_id: 41,
    },
    {
        name: 'Ankurhati',
        state_id: 41,
    },
    {
        name: 'Anup Nagar',
        state_id: 41,
    },
    {
        name: 'Arambagh',
        state_id: 41,
    },
    {
        name: 'Argari',
        state_id: 41,
    },
    {
        name: 'Arsha',
        state_id: 41,
    },
    {
        name: 'Asansol',
        state_id: 41,
    },
    {
        name: 'Ashoknagar Kalyangarh',
        state_id: 41,
    },
    {
        name: 'Aurangabad',
        state_id: 41,
    },
    {
        name: 'Bablari Dewanganj',
        state_id: 41,
    },
    {
        name: 'Badhagachhi',
        state_id: 41,
    },
    {
        name: 'Baduria',
        state_id: 41,
    },
    {
        name: 'Baghdogra',
        state_id: 41,
    },
    {
        name: 'Bagnan',
        state_id: 41,
    },
    {
        name: 'Bagra',
        state_id: 41,
    },
    {
        name: 'Bagula',
        state_id: 41,
    },
    {
        name: 'Baharampur',
        state_id: 41,
    },
    {
        name: 'Bahirgram',
        state_id: 41,
    },
    {
        name: 'Bahula',
        state_id: 41,
    },
    {
        name: 'Baidyabati',
        state_id: 41,
    },
    {
        name: 'Bairatisal',
        state_id: 41,
    },
    {
        name: 'Baj Baj',
        state_id: 41,
    },
    {
        name: 'Bakreswar',
        state_id: 41,
    },
    {
        name: 'Balaram Pota',
        state_id: 41,
    },
    {
        name: 'Balarampur',
        state_id: 41,
    },
    {
        name: 'Bali Chak',
        state_id: 41,
    },
    {
        name: 'Ballavpur',
        state_id: 41,
    },
    {
        name: 'Bally',
        state_id: 41,
    },
    {
        name: 'Balurghat',
        state_id: 41,
    },
    {
        name: 'Bamunari',
        state_id: 41,
    },
    {
        name: 'Banarhat Tea Garden',
        state_id: 41,
    },
    {
        name: 'Bandel',
        state_id: 41,
    },
    {
        name: 'Bangaon',
        state_id: 41,
    },
    {
        name: 'Bankra',
        state_id: 41,
    },
    {
        name: 'Bankura',
        state_id: 41,
    },
    {
        name: 'Bansbaria',
        state_id: 41,
    },
    {
        name: 'Banshra',
        state_id: 41,
    },
    {
        name: 'Banupur',
        state_id: 41,
    },
    {
        name: 'Bara Bamonia',
        state_id: 41,
    },
    {
        name: 'Barakpur',
        state_id: 41,
    },
    {
        name: 'Barakpur Cantonment',
        state_id: 41,
    },
    {
        name: 'Baranagar',
        state_id: 41,
    },
    {
        name: 'Barasat',
        state_id: 41,
    },
    {
        name: 'Barddhaman',
        state_id: 41,
    },
    {
        name: 'Barijhati',
        state_id: 41,
    },
    {
        name: 'Barjora',
        state_id: 41,
    },
    {
        name: 'Barrackpore',
        state_id: 41,
    },
    {
        name: 'Baruihuda',
        state_id: 41,
    },
    {
        name: 'Baruipur',
        state_id: 41,
    },
    {
        name: 'Barunda',
        state_id: 41,
    },
    {
        name: 'Basirhat',
        state_id: 41,
    },
    {
        name: 'Baska',
        state_id: 41,
    },
    {
        name: 'Begampur',
        state_id: 41,
    },
    {
        name: 'Beldanga',
        state_id: 41,
    },
    {
        name: 'Beldubi',
        state_id: 41,
    },
    {
        name: 'Belebathan',
        state_id: 41,
    },
    {
        name: 'Beliator',
        state_id: 41,
    },
    {
        name: 'Bhadreswar',
        state_id: 41,
    },
    {
        name: 'Bhandardaha',
        state_id: 41,
    },
    {
        name: 'Bhangar Raghunathpur',
        state_id: 41,
    },
    {
        name: 'Bhangri Pratham Khanda',
        state_id: 41,
    },
    {
        name: 'Bhanowara',
        state_id: 41,
    },
    {
        name: 'Bhatpara',
        state_id: 41,
    },
    {
        name: 'Bholar Dabri',
        state_id: 41,
    },
    {
        name: 'Bidhannagar',
        state_id: 41,
    },
    {
        name: 'Bidyadharpur',
        state_id: 41,
    },
    {
        name: 'Biki Hakola',
        state_id: 41,
    },
    {
        name: 'Bilandapur',
        state_id: 41,
    },
    {
        name: 'Bilpahari',
        state_id: 41,
    },
    {
        name: 'Bipra Noapara',
        state_id: 41,
    },
    {
        name: 'Birlapur',
        state_id: 41,
    },
    {
        name: 'Birnagar',
        state_id: 41,
    },
    {
        name: 'Bisarpara',
        state_id: 41,
    },
    {
        name: 'Bishnupur',
        state_id: 41,
    },
    {
        name: 'Bolpur',
        state_id: 41,
    },
    {
        name: 'Bongaon',
        state_id: 41,
    },
    {
        name: 'Bowali',
        state_id: 41,
    },
    {
        name: 'Burdwan',
        state_id: 41,
    },
    {
        name: 'Canning',
        state_id: 41,
    },
    {
        name: 'Cart Road',
        state_id: 41,
    },
    {
        name: 'Chachanda',
        state_id: 41,
    },
    {
        name: 'Chak Bankola',
        state_id: 41,
    },
    {
        name: 'Chak Enayetnagar',
        state_id: 41,
    },
    {
        name: 'Chak Kashipur',
        state_id: 41,
    },
    {
        name: 'Chakalampur',
        state_id: 41,
    },
    {
        name: 'Chakbansberia',
        state_id: 41,
    },
    {
        name: 'Chakdaha',
        state_id: 41,
    },
    {
        name: 'Chakpara',
        state_id: 41,
    },
    {
        name: 'Champahati',
        state_id: 41,
    },
    {
        name: 'Champdani',
        state_id: 41,
    },
    {
        name: 'Chamrail',
        state_id: 41,
    },
    {
        name: 'Chandannagar',
        state_id: 41,
    },
    {
        name: 'Chandpur',
        state_id: 41,
    },
    {
        name: 'Chandrakona',
        state_id: 41,
    },
    {
        name: 'Chapari',
        state_id: 41,
    },
    {
        name: 'Chapui',
        state_id: 41,
    },
    {
        name: 'Char Brahmanagar',
        state_id: 41,
    },
    {
        name: 'Char Maijdia',
        state_id: 41,
    },
    {
        name: 'Charka',
        state_id: 41,
    },
    {
        name: 'Chata Kalikapur',
        state_id: 41,
    },
    {
        name: 'Chauhati',
        state_id: 41,
    },
    {
        name: 'Checha Khata',
        state_id: 41,
    },
    {
        name: 'Chelad',
        state_id: 41,
    },
    {
        name: 'Chhora',
        state_id: 41,
    },
    {
        name: 'Chikrand',
        state_id: 41,
    },
    {
        name: 'Chittaranjan',
        state_id: 41,
    },
    {
        name: 'Contai',
        state_id: 41,
    },
    {
        name: 'Cooch Behar',
        state_id: 41,
    },
    {
        name: 'Dainhat',
        state_id: 41,
    },
    {
        name: 'Dakshin Baguan',
        state_id: 41,
    },
    {
        name: 'Dakshin Jhapardaha',
        state_id: 41,
    },
    {
        name: 'Dakshin Rajyadharpur',
        state_id: 41,
    },
    {
        name: 'Dakshin Raypur',
        state_id: 41,
    },
    {
        name: 'Dalkola',
        state_id: 41,
    },
    {
        name: 'Dalurband',
        state_id: 41,
    },
    {
        name: 'Darap Pur',
        state_id: 41,
    },
    {
        name: 'Darjiling',
        state_id: 41,
    },
    {
        name: 'Daulatpur',
        state_id: 41,
    },
    {
        name: 'Debipur',
        state_id: 41,
    },
    {
        name: 'Defahat',
        state_id: 41,
    },
    {
        name: 'Deora',
        state_id: 41,
    },
    {
        name: 'Deulia',
        state_id: 41,
    },
    {
        name: 'Dhakuria',
        state_id: 41,
    },
    {
        name: 'Dhandadihi',
        state_id: 41,
    },
    {
        name: 'Dhanyakuria',
        state_id: 41,
    },
    {
        name: 'Dharmapur',
        state_id: 41,
    },
    {
        name: 'Dhatri Gram',
        state_id: 41,
    },
    {
        name: 'Dhuilya',
        state_id: 41,
    },
    {
        name: 'Dhulagari',
        state_id: 41,
    },
    {
        name: 'Dhulian',
        state_id: 41,
    },
    {
        name: 'Dhupgari',
        state_id: 41,
    },
    {
        name: 'Dhusaripara',
        state_id: 41,
    },
    {
        name: 'Diamond Harbour',
        state_id: 41,
    },
    {
        name: 'Digha',
        state_id: 41,
    },
    {
        name: 'Dignala',
        state_id: 41,
    },
    {
        name: 'Dinhata',
        state_id: 41,
    },
    {
        name: 'Dubrajpur',
        state_id: 41,
    },
    {
        name: 'Dumjor',
        state_id: 41,
    },
    {
        name: 'Durgapur',
        state_id: 41,
    },
    {
        name: 'Durllabhganj',
        state_id: 41,
    },
    {
        name: 'Egra',
        state_id: 41,
    },
    {
        name: 'Eksara',
        state_id: 41,
    },
    {
        name: 'Falakata',
        state_id: 41,
    },
    {
        name: 'Farakka',
        state_id: 41,
    },
    {
        name: 'Fatellapur',
        state_id: 41,
    },
    {
        name: 'Fort Gloster',
        state_id: 41,
    },
    {
        name: 'Gabberia',
        state_id: 41,
    },
    {
        name: 'Gadigachha',
        state_id: 41,
    },
    {
        name: 'Gairkata',
        state_id: 41,
    },
    {
        name: 'Gangarampur',
        state_id: 41,
    },
    {
        name: 'Garalgachha',
        state_id: 41,
    },
    {
        name: 'Garbeta Amlagora',
        state_id: 41,
    },
    {
        name: 'Garhbeta',
        state_id: 41,
    },
    {
        name: 'Garshyamnagar',
        state_id: 41,
    },
    {
        name: 'Garui',
        state_id: 41,
    },
    {
        name: 'Garulia',
        state_id: 41,
    },
    {
        name: 'Gayespur',
        state_id: 41,
    },
    {
        name: 'Ghatal',
        state_id: 41,
    },
    {
        name: 'Ghorsala',
        state_id: 41,
    },
    {
        name: 'Goaljan',
        state_id: 41,
    },
    {
        name: 'Goasafat',
        state_id: 41,
    },
    {
        name: 'Gobardanga',
        state_id: 41,
    },
    {
        name: 'Gobindapur',
        state_id: 41,
    },
    {
        name: 'Gopalpur',
        state_id: 41,
    },
    {
        name: 'Gopinathpur',
        state_id: 41,
    },
    {
        name: 'Gora Bazar',
        state_id: 41,
    },
    {
        name: 'Guma',
        state_id: 41,
    },
    {
        name: 'Gurdaha',
        state_id: 41,
    },
    {
        name: 'Guriahati',
        state_id: 41,
    },
    {
        name: 'Guskhara',
        state_id: 41,
    },
    {
        name: 'Habra',
        state_id: 41,
    },
    {
        name: 'Haldia',
        state_id: 41,
    },
    {
        name: 'Haldibari',
        state_id: 41,
    },
    {
        name: 'Halisahar',
        state_id: 41,
    },
    {
        name: 'Haora',
        state_id: 41,
    },
    {
        name: 'Harharia Chak',
        state_id: 41,
    },
    {
        name: 'Harindanga',
        state_id: 41,
    },
    {
        name: 'Haringhata',
        state_id: 41,
    },
    {
        name: 'Haripur',
        state_id: 41,
    },
    {
        name: 'Harishpur',
        state_id: 41,
    },
    {
        name: 'Hatgachha',
        state_id: 41,
    },
    {
        name: 'Hatsimla',
        state_id: 41,
    },
    {
        name: 'Hijuli',
        state_id: 41,
    },
    {
        name: 'Hindustan Cables Town',
        state_id: 41,
    },
    {
        name: 'Hooghly',
        state_id: 41,
    },
    {
        name: 'Howrah',
        state_id: 41,
    },
    {
        name: 'Hugli-Chunchura',
        state_id: 41,
    },
    {
        name: 'Humaipur',
        state_id: 41,
    },
    {
        name: 'Ichha Pur Defence Estate',
        state_id: 41,
    },
    {
        name: 'Ingraj Bazar',
        state_id: 41,
    },
    {
        name: 'Islampur',
        state_id: 41,
    },
    {
        name: 'Jafarpur',
        state_id: 41,
    },
    {
        name: 'Jagadanandapur',
        state_id: 41,
    },
    {
        name: 'Jagdishpur',
        state_id: 41,
    },
    {
        name: 'Jagtaj',
        state_id: 41,
    },
    {
        name: 'Jala Kendua',
        state_id: 41,
    },
    {
        name: 'Jaldhaka',
        state_id: 41,
    },
    {
        name: 'Jalkhura',
        state_id: 41,
    },
    {
        name: 'Jalpaiguri',
        state_id: 41,
    },
    {
        name: 'Jamuria',
        state_id: 41,
    },
    {
        name: 'Jangipur',
        state_id: 41,
    },
    {
        name: 'Jaygaon',
        state_id: 41,
    },
    {
        name: 'Jaynagar-Majilpur',
        state_id: 41,
    },
    {
        name: 'Jemari',
        state_id: 41,
    },
    {
        name: 'Jemari Township',
        state_id: 41,
    },
    {
        name: 'Jetia',
        state_id: 41,
    },
    {
        name: 'Jhalida',
        state_id: 41,
    },
    {
        name: 'Jhargram',
        state_id: 41,
    },
    {
        name: 'Jhorhat',
        state_id: 41,
    },
    {
        name: 'Jiaganj-Azimganj',
        state_id: 41,
    },
    {
        name: 'Joka',
        state_id: 41,
    },
    {
        name: 'Jot Kamal',
        state_id: 41,
    },
    {
        name: 'Kachu Pukur',
        state_id: 41,
    },
    {
        name: 'Kajora',
        state_id: 41,
    },
    {
        name: 'Kakdihi',
        state_id: 41,
    },
    {
        name: 'Kakdwip',
        state_id: 41,
    },
    {
        name: 'Kalaikunda',
        state_id: 41,
    },
    {
        name: 'Kalara',
        state_id: 41,
    },
    {
        name: 'Kalimpong',
        state_id: 41,
    },
    {
        name: 'Kaliyaganj',
        state_id: 41,
    },
    {
        name: 'Kalna',
        state_id: 41,
    },
    {
        name: 'Kalyani',
        state_id: 41,
    },
    {
        name: 'Kamarhati',
        state_id: 41,
    },
    {
        name: 'Kanaipur',
        state_id: 41,
    },
    {
        name: 'Kanchrapara',
        state_id: 41,
    },
    {
        name: 'Kandi',
        state_id: 41,
    },
    {
        name: 'Kanki',
        state_id: 41,
    },
    {
        name: 'Kankuria',
        state_id: 41,
    },
    {
        name: 'Kantlia',
        state_id: 41,
    },
    {
        name: 'Kanyanagar',
        state_id: 41,
    },
    {
        name: 'Karimpur',
        state_id: 41,
    },
    {
        name: 'Karsiyang',
        state_id: 41,
    },
    {
        name: 'Kasba',
        state_id: 41,
    },
    {
        name: 'Kasimbazar',
        state_id: 41,
    },
    {
        name: 'Katwa',
        state_id: 41,
    },
    {
        name: 'Kaugachhi',
        state_id: 41,
    },
    {
        name: 'Kenda',
        state_id: 41,
    },
    {
        name: 'Kendra Khottamdi',
        state_id: 41,
    },
    {
        name: 'Kendua',
        state_id: 41,
    },
    {
        name: 'Kesabpur',
        state_id: 41,
    },
    {
        name: 'Khagrabari',
        state_id: 41,
    },
    {
        name: 'Khalia',
        state_id: 41,
    },
    {
        name: 'Khalor',
        state_id: 41,
    },
    {
        name: 'Khandra',
        state_id: 41,
    },
    {
        name: 'Khantora',
        state_id: 41,
    },
    {
        name: 'Kharagpur',
        state_id: 41,
    },
    {
        name: 'Kharagpur Railway Settlement',
        state_id: 41,
    },
    {
        name: 'Kharar',
        state_id: 41,
    },
    {
        name: 'Khardaha',
        state_id: 41,
    },
    {
        name: 'Khari Mala Khagrabari',
        state_id: 41,
    },
    {
        name: 'Kharsarai',
        state_id: 41,
    },
    {
        name: 'Khatra',
        state_id: 41,
    },
    {
        name: 'Khodarampur',
        state_id: 41,
    },
    {
        name: 'Kodalia',
        state_id: 41,
    },
    {
        name: 'Kolaghat',
        state_id: 41,
    },
    {
        name: 'Kolaghat Thermal Power Project',
        state_id: 41,
    },
    {
        name: 'Kolkata',
        state_id: 41,
    },
    {
        name: 'Konardihi',
        state_id: 41,
    },
    {
        name: 'Konnogar',
        state_id: 41,
    },
    {
        name: 'Krishnanagar',
        state_id: 41,
    },
    {
        name: 'Krishnapur',
        state_id: 41,
    },
    {
        name: 'Kshidirpur',
        state_id: 41,
    },
    {
        name: 'Kshirpai',
        state_id: 41,
    },
    {
        name: 'Kulihanda',
        state_id: 41,
    },
    {
        name: 'Kulti',
        state_id: 41,
    },
    {
        name: 'Kunustara',
        state_id: 41,
    },
    {
        name: 'Kuperskem',
        state_id: 41,
    },
    {
        name: 'Madanpur',
        state_id: 41,
    },
    {
        name: 'Madhusudanpur',
        state_id: 41,
    },
    {
        name: 'Madhyamgram',
        state_id: 41,
    },
    {
        name: 'Maheshtala',
        state_id: 41,
    },
    {
        name: 'Mahiari',
        state_id: 41,
    },
    {
        name: 'Mahikpur',
        state_id: 41,
    },
    {
        name: 'Mahira',
        state_id: 41,
    },
    {
        name: 'Mahishadal',
        state_id: 41,
    },
    {
        name: 'Mainaguri',
        state_id: 41,
    },
    {
        name: 'Makardaha',
        state_id: 41,
    },
    {
        name: 'Mal',
        state_id: 41,
    },
    {
        name: 'Malda',
        state_id: 41,
    },
    {
        name: 'Mandarbani',
        state_id: 41,
    },
    {
        name: 'Mansinhapur',
        state_id: 41,
    },
    {
        name: 'Masila',
        state_id: 41,
    },
    {
        name: 'Maslandapur',
        state_id: 41,
    },
    {
        name: 'Mathabhanga',
        state_id: 41,
    },
    {
        name: 'Mekliganj',
        state_id: 41,
    },
    {
        name: 'Memari',
        state_id: 41,
    },
    {
        name: 'Midnapur',
        state_id: 41,
    },
    {
        name: 'Mirik',
        state_id: 41,
    },
    {
        name: 'Monoharpur',
        state_id: 41,
    },
    {
        name: 'Mrigala',
        state_id: 41,
    },
    {
        name: 'Muragachha',
        state_id: 41,
    },
    {
        name: 'Murgathaul',
        state_id: 41,
    },
    {
        name: 'Murshidabad',
        state_id: 41,
    },
    {
        name: 'Nabadhai Dutta Pukur',
        state_id: 41,
    },
    {
        name: 'Nabagram',
        state_id: 41,
    },
    {
        name: 'Nabgram',
        state_id: 41,
    },
    {
        name: 'Nachhratpur Katabari',
        state_id: 41,
    },
    {
        name: 'Nadia',
        state_id: 41,
    },
    {
        name: 'Naihati',
        state_id: 41,
    },
    {
        name: 'Nalhati',
        state_id: 41,
    },
    {
        name: 'Nasra',
        state_id: 41,
    },
    {
        name: 'Natibpur',
        state_id: 41,
    },
    {
        name: 'Naupala',
        state_id: 41,
    },
    {
        name: 'Navadwip',
        state_id: 41,
    },
    {
        name: 'Nebadhai Duttapukur',
        state_id: 41,
    },
    {
        name: 'New Barrackpore',
        state_id: 41,
    },
    {
        name: 'Ni Barakpur',
        state_id: 41,
    },
    {
        name: 'Nibra',
        state_id: 41,
    },
    {
        name: 'Noapara',
        state_id: 41,
    },
    {
        name: 'Nokpul',
        state_id: 41,
    },
    {
        name: 'North Barakpur',
        state_id: 41,
    },
    {
        name: 'Odlabari',
        state_id: 41,
    },
    {
        name: 'Old Maldah',
        state_id: 41,
    },
    {
        name: 'Ondal',
        state_id: 41,
    },
    {
        name: 'Pairagachha',
        state_id: 41,
    },
    {
        name: 'Palashban',
        state_id: 41,
    },
    {
        name: 'Panchla',
        state_id: 41,
    },
    {
        name: 'Panchpara',
        state_id: 41,
    },
    {
        name: 'Pandua',
        state_id: 41,
    },
    {
        name: 'Pangachhiya',
        state_id: 41,
    },
    {
        name: 'Paniara',
        state_id: 41,
    },
    {
        name: 'Panihati',
        state_id: 41,
    },
    {
        name: 'Panuhat',
        state_id: 41,
    },
    {
        name: 'Par Beliya',
        state_id: 41,
    },
    {
        name: 'Parashkol',
        state_id: 41,
    },
    {
        name: 'Parasia',
        state_id: 41,
    },
    {
        name: 'Parbbatipur',
        state_id: 41,
    },
    {
        name: 'Parui',
        state_id: 41,
    },
    {
        name: 'Paschim Jitpur',
        state_id: 41,
    },
    {
        name: 'Paschim Punro Para',
        state_id: 41,
    },
    {
        name: 'Patrasaer',
        state_id: 41,
    },
    {
        name: 'Pattabong Tea Garden',
        state_id: 41,
    },
    {
        name: 'Patuli',
        state_id: 41,
    },
    {
        name: 'Patulia',
        state_id: 41,
    },
    {
        name: 'Phulia',
        state_id: 41,
    },
    {
        name: 'Podara',
        state_id: 41,
    },
    {
        name: 'Port Blair',
        state_id: 41,
    },
    {
        name: 'Prayagpur',
        state_id: 41,
    },
    {
        name: 'Pujali',
        state_id: 41,
    },
    {
        name: 'Purba Medinipur',
        state_id: 41,
    },
    {
        name: 'Purba Tajpur',
        state_id: 41,
    },
    {
        name: 'Purulia',
        state_id: 41,
    },
    {
        name: 'Raghudebbati',
        state_id: 41,
    },
    {
        name: 'Raghudebpur',
        state_id: 41,
    },
    {
        name: 'Raghunathchak',
        state_id: 41,
    },
    {
        name: 'Raghunathpur',
        state_id: 41,
    },
    {
        name: 'Raghunathpur-Dankuni',
        state_id: 41,
    },
    {
        name: 'Raghunathpur-Magra',
        state_id: 41,
    },
    {
        name: 'Raigachhi',
        state_id: 41,
    },
    {
        name: 'Raiganj',
        state_id: 41,
    },
    {
        name: 'Raipur',
        state_id: 41,
    },
    {
        name: 'Rajarhat Gopalpur',
        state_id: 41,
    },
    {
        name: 'Rajpur',
        state_id: 41,
    },
    {
        name: 'Ramchandrapur',
        state_id: 41,
    },
    {
        name: 'Ramjibanpur',
        state_id: 41,
    },
    {
        name: 'Ramnagar',
        state_id: 41,
    },
    {
        name: 'Rampur Hat',
        state_id: 41,
    },
    {
        name: 'Ranaghat',
        state_id: 41,
    },
    {
        name: 'Raniganj',
        state_id: 41,
    },
    {
        name: 'Ratibati',
        state_id: 41,
    },
    {
        name: 'Raypur',
        state_id: 41,
    },
    {
        name: 'Rishra',
        state_id: 41,
    },
    {
        name: 'Rishra Cantonment',
        state_id: 41,
    },
    {
        name: 'Ruiya',
        state_id: 41,
    },
    {
        name: 'Sahajadpur',
        state_id: 41,
    },
    {
        name: 'Sahapur',
        state_id: 41,
    },
    {
        name: 'Sainthia',
        state_id: 41,
    },
    {
        name: 'Salap',
        state_id: 41,
    },
    {
        name: 'Sankarpur',
        state_id: 41,
    },
    {
        name: 'Sankrail',
        state_id: 41,
    },
    {
        name: 'Santoshpur',
        state_id: 41,
    },
    {
        name: 'Saontaidih',
        state_id: 41,
    },
    {
        name: 'Sarenga',
        state_id: 41,
    },
    {
        name: 'Sarpi',
        state_id: 41,
    },
    {
        name: 'Satigachha',
        state_id: 41,
    },
    {
        name: 'Serpur',
        state_id: 41,
    },
    {
        name: 'Shankhanagar',
        state_id: 41,
    },
    {
        name: 'Shantipur',
        state_id: 41,
    },
    {
        name: 'Shrirampur',
        state_id: 41,
    },
    {
        name: 'Siduli',
        state_id: 41,
    },
    {
        name: 'Siliguri',
        state_id: 41,
    },
    {
        name: 'Simla',
        state_id: 41,
    },
    {
        name: 'Singur',
        state_id: 41,
    },
    {
        name: 'Sirsha',
        state_id: 41,
    },
    {
        name: 'Siuri',
        state_id: 41,
    },
    {
        name: 'Sobhaganj',
        state_id: 41,
    },
    {
        name: 'Sodpur',
        state_id: 41,
    },
    {
        name: 'Sonamukhi',
        state_id: 41,
    },
    {
        name: 'Sonatikiri',
        state_id: 41,
    },
    {
        name: 'Srikantabati',
        state_id: 41,
    },
    {
        name: 'Srirampur',
        state_id: 41,
    },
    {
        name: 'Sukdal',
        state_id: 41,
    },
    {
        name: 'Taherpur',
        state_id: 41,
    },
    {
        name: 'Taki',
        state_id: 41,
    },
    {
        name: 'Talbandha',
        state_id: 41,
    },
    {
        name: 'Tamluk',
        state_id: 41,
    },
    {
        name: 'Tarakeswar',
        state_id: 41,
    },
    {
        name: 'Tentulberia',
        state_id: 41,
    },
    {
        name: 'Tentulkuli',
        state_id: 41,
    },
    {
        name: 'Thermal Power Project',
        state_id: 41,
    },
    {
        name: 'Tinsukia',
        state_id: 41,
    },
    {
        name: 'Titagarh',
        state_id: 41,
    },
    {
        name: 'Tufanganj',
        state_id: 41,
    },
    {
        name: 'Ukhra',
        state_id: 41,
    },
    {
        name: 'Ula',
        state_id: 41,
    },
    {
        name: 'Ulubaria',
        state_id: 41,
    },
    {
        name: 'Uttar Durgapur',
        state_id: 41,
    },
    {
        name: 'Uttar Goara',
        state_id: 41,
    },
    {
        name: 'Uttar Kalas',
        state_id: 41,
    },
    {
        name: 'Uttar Kamakhyaguri',
        state_id: 41,
    },
    {
        name: 'Uttar Latabari',
        state_id: 41,
    },
    {
        name: 'Uttar Mahammadpur',
        state_id: 41,
    },
    {
        name: 'Uttar Pirpur',
        state_id: 41,
    },
    {
        name: 'Uttar Raypur',
        state_id: 41,
    },
    {
        name: 'Uttarpara-Kotrung',
        state_id: 41,
    },
    {
        name: 'Abohar',
        state_id: 2728,
    },
    {
        name: 'Adampur',
        state_id: 2728,
    },
    {
        name: 'Ahmedgarh',
        state_id: 2728,
    },
    {
        name: 'Ajnala',
        state_id: 2728,
    },
    {
        name: 'Akalgarh',
        state_id: 2728,
    },
    {
        name: 'Alawalpur',
        state_id: 2728,
    },
    {
        name: 'Amloh',
        state_id: 2728,
    },
    {
        name: 'Amritsar',
        state_id: 2728,
    },
    {
        name: 'Amritsar Cantonment',
        state_id: 2728,
    },
    {
        name: 'Anandpur Sahib',
        state_id: 2728,
    },
    {
        name: 'Badhni Kalan',
        state_id: 2728,
    },
    {
        name: 'Bagh Purana',
        state_id: 2728,
    },
    {
        name: 'Balachaur',
        state_id: 2728,
    },
    {
        name: 'Banaur',
        state_id: 2728,
    },
    {
        name: 'Banga',
        state_id: 2728,
    },
    {
        name: 'Banur',
        state_id: 2728,
    },
    {
        name: 'Baretta',
        state_id: 2728,
    },
    {
        name: 'Bariwala',
        state_id: 2728,
    },
    {
        name: 'Barnala',
        state_id: 2728,
    },
    {
        name: 'Bassi Pathana',
        state_id: 2728,
    },
    {
        name: 'Batala',
        state_id: 2728,
    },
    {
        name: 'Bathinda',
        state_id: 2728,
    },
    {
        name: 'Begowal',
        state_id: 2728,
    },
    {
        name: 'Behrampur',
        state_id: 2728,
    },
    {
        name: 'Bhabat',
        state_id: 2728,
    },
    {
        name: 'Bhadur',
        state_id: 2728,
    },
    {
        name: 'Bhankharpur',
        state_id: 2728,
    },
    {
        name: 'Bharoli Kalan',
        state_id: 2728,
    },
    {
        name: 'Bhawanigarh',
        state_id: 2728,
    },
    {
        name: 'Bhikhi',
        state_id: 2728,
    },
    {
        name: 'Bhikhiwind',
        state_id: 2728,
    },
    {
        name: 'Bhisiana',
        state_id: 2728,
    },
    {
        name: 'Bhogpur',
        state_id: 2728,
    },
    {
        name: 'Bhuch',
        state_id: 2728,
    },
    {
        name: 'Bhulath',
        state_id: 2728,
    },
    {
        name: 'Budha Theh',
        state_id: 2728,
    },
    {
        name: 'Budhlada',
        state_id: 2728,
    },
    {
        name: 'Chima',
        state_id: 2728,
    },
    {
        name: 'Chohal',
        state_id: 2728,
    },
    {
        name: 'Dasuya',
        state_id: 2728,
    },
    {
        name: 'Daulatpur',
        state_id: 2728,
    },
    {
        name: 'Dera Baba Nanak',
        state_id: 2728,
    },
    {
        name: 'Dera Bassi',
        state_id: 2728,
    },
    {
        name: 'Dhanaula',
        state_id: 2728,
    },
    {
        name: 'Dharam Kot',
        state_id: 2728,
    },
    {
        name: 'Dhariwal',
        state_id: 2728,
    },
    {
        name: 'Dhilwan',
        state_id: 2728,
    },
    {
        name: 'Dhuri',
        state_id: 2728,
    },
    {
        name: 'Dinanagar',
        state_id: 2728,
    },
    {
        name: 'Dirba',
        state_id: 2728,
    },
    {
        name: 'Doraha',
        state_id: 2728,
    },
    {
        name: 'Faridkot',
        state_id: 2728,
    },
    {
        name: 'Fateh Nangal',
        state_id: 2728,
    },
    {
        name: 'Fatehgarh Churian',
        state_id: 2728,
    },
    {
        name: 'Fatehgarh Sahib',
        state_id: 2728,
    },
    {
        name: 'Fazilka',
        state_id: 2728,
    },
    {
        name: 'Firozpur',
        state_id: 2728,
    },
    {
        name: 'Firozpur Cantonment',
        state_id: 2728,
    },
    {
        name: 'Gardhiwala',
        state_id: 2728,
    },
    {
        name: 'Garhshankar',
        state_id: 2728,
    },
    {
        name: 'Ghagga',
        state_id: 2728,
    },
    {
        name: 'Ghanaur',
        state_id: 2728,
    },
    {
        name: 'Giddarbaha',
        state_id: 2728,
    },
    {
        name: 'Gobindgarh',
        state_id: 2728,
    },
    {
        name: 'Goniana',
        state_id: 2728,
    },
    {
        name: 'Goraya',
        state_id: 2728,
    },
    {
        name: 'Gurdaspur',
        state_id: 2728,
    },
    {
        name: 'Guru Har Sahai',
        state_id: 2728,
    },
    {
        name: 'Hajipur',
        state_id: 2728,
    },
    {
        name: 'Handiaya',
        state_id: 2728,
    },
    {
        name: 'Hariana',
        state_id: 2728,
    },
    {
        name: 'Hoshiarpur',
        state_id: 2728,
    },
    {
        name: 'Hussainpur',
        state_id: 2728,
    },
    {
        name: 'Jagraon',
        state_id: 2728,
    },
    {
        name: 'Jaitu',
        state_id: 2728,
    },
    {
        name: 'Jalalabad',
        state_id: 2728,
    },
    {
        name: 'Jalandhar',
        state_id: 2728,
    },
    {
        name: 'Jalandhar Cantonment',
        state_id: 2728,
    },
    {
        name: 'Jandiala',
        state_id: 2728,
    },
    {
        name: 'Jugial',
        state_id: 2728,
    },
    {
        name: 'Kalanaur',
        state_id: 2728,
    },
    {
        name: 'Kapurthala',
        state_id: 2728,
    },
    {
        name: 'Karoran',
        state_id: 2728,
    },
    {
        name: 'Kartarpur',
        state_id: 2728,
    },
    {
        name: 'Khamanon',
        state_id: 2728,
    },
    {
        name: 'Khanauri',
        state_id: 2728,
    },
    {
        name: 'Khanna',
        state_id: 2728,
    },
    {
        name: 'Kharar',
        state_id: 2728,
    },
    {
        name: 'Khem Karan',
        state_id: 2728,
    },
    {
        name: 'Kot Fatta',
        state_id: 2728,
    },
    {
        name: 'Kot Isa Khan',
        state_id: 2728,
    },
    {
        name: 'Kot Kapura',
        state_id: 2728,
    },
    {
        name: 'Kotkapura',
        state_id: 2728,
    },
    {
        name: 'Kurali',
        state_id: 2728,
    },
    {
        name: 'Lalru',
        state_id: 2728,
    },
    {
        name: 'Lehra Gaga',
        state_id: 2728,
    },
    {
        name: 'Lodhian Khas',
        state_id: 2728,
    },
    {
        name: 'Longowal',
        state_id: 2728,
    },
    {
        name: 'Ludhiana',
        state_id: 2728,
    },
    {
        name: 'Machhiwara',
        state_id: 2728,
    },
    {
        name: 'Mahilpur',
        state_id: 2728,
    },
    {
        name: 'Majitha',
        state_id: 2728,
    },
    {
        name: 'Makhu',
        state_id: 2728,
    },
    {
        name: 'Malaut',
        state_id: 2728,
    },
    {
        name: 'Malerkotla',
        state_id: 2728,
    },
    {
        name: 'Maloud',
        state_id: 2728,
    },
    {
        name: 'Mandi Gobindgarh',
        state_id: 2728,
    },
    {
        name: 'Mansa',
        state_id: 2728,
    },
    {
        name: 'Maur',
        state_id: 2728,
    },
    {
        name: 'Moga',
        state_id: 2728,
    },
    {
        name: 'Mohali',
        state_id: 2728,
    },
    {
        name: 'Moonak',
        state_id: 2728,
    },
    {
        name: 'Morinda',
        state_id: 2728,
    },
    {
        name: 'Mukerian',
        state_id: 2728,
    },
    {
        name: 'Muktsar',
        state_id: 2728,
    },
    {
        name: 'Mullanpur Dakha',
        state_id: 2728,
    },
    {
        name: 'Mullanpur Garibdas',
        state_id: 2728,
    },
    {
        name: 'Munak',
        state_id: 2728,
    },
    {
        name: 'Muradpura',
        state_id: 2728,
    },
    {
        name: 'Nabha',
        state_id: 2728,
    },
    {
        name: 'Nakodar',
        state_id: 2728,
    },
    {
        name: 'Nangal',
        state_id: 2728,
    },
    {
        name: 'Nawashahr',
        state_id: 2728,
    },
    {
        name: 'Naya Nangal',
        state_id: 2728,
    },
    {
        name: 'Nehon',
        state_id: 2728,
    },
    {
        name: 'Nurmahal',
        state_id: 2728,
    },
    {
        name: 'Pathankot',
        state_id: 2728,
    },
    {
        name: 'Patiala',
        state_id: 2728,
    },
    {
        name: 'Patti',
        state_id: 2728,
    },
    {
        name: 'Pattran',
        state_id: 2728,
    },
    {
        name: 'Payal',
        state_id: 2728,
    },
    {
        name: 'Phagwara',
        state_id: 2728,
    },
    {
        name: 'Phillaur',
        state_id: 2728,
    },
    {
        name: 'Qadian',
        state_id: 2728,
    },
    {
        name: 'Rahon',
        state_id: 2728,
    },
    {
        name: 'Raikot',
        state_id: 2728,
    },
    {
        name: 'Raja Sansi',
        state_id: 2728,
    },
    {
        name: 'Rajpura',
        state_id: 2728,
    },
    {
        name: 'Ram Das',
        state_id: 2728,
    },
    {
        name: 'Raman',
        state_id: 2728,
    },
    {
        name: 'Rampura',
        state_id: 2728,
    },
    {
        name: 'Rayya',
        state_id: 2728,
    },
    {
        name: 'Rupnagar',
        state_id: 2728,
    },
    {
        name: 'Rurki Kasba',
        state_id: 2728,
    },
    {
        name: 'Sahnewal',
        state_id: 2728,
    },
    {
        name: 'Samana',
        state_id: 2728,
    },
    {
        name: 'Samrala',
        state_id: 2728,
    },
    {
        name: 'Sanaur',
        state_id: 2728,
    },
    {
        name: 'Sangat',
        state_id: 2728,
    },
    {
        name: 'Sangrur',
        state_id: 2728,
    },
    {
        name: 'Sansarpur',
        state_id: 2728,
    },
    {
        name: 'Sardulgarh',
        state_id: 2728,
    },
    {
        name: 'Shahkot',
        state_id: 2728,
    },
    {
        name: 'Sham Churasi',
        state_id: 2728,
    },
    {
        name: 'Shekhpura',
        state_id: 2728,
    },
    {
        name: 'Sirhind',
        state_id: 2728,
    },
    {
        name: 'Sri Hargobindpur',
        state_id: 2728,
    },
    {
        name: 'Sujanpur',
        state_id: 2728,
    },
    {
        name: 'Sultanpur Lodhi',
        state_id: 2728,
    },
    {
        name: 'Sunam',
        state_id: 2728,
    },
    {
        name: 'Talwandi Bhai',
        state_id: 2728,
    },
    {
        name: 'Talwara',
        state_id: 2728,
    },
    {
        name: 'Tappa',
        state_id: 2728,
    },
    {
        name: 'Tarn Taran',
        state_id: 2728,
    },
    {
        name: 'Urmar Tanda',
        state_id: 2728,
    },
    {
        name: 'Zira',
        state_id: 2728,
    },
    {
        name: 'Zirakpur',
        state_id: 2728,
    },
    {
        name: 'Eshkashem',
        state_id: 42,
    },
    {
        name: 'Fayzabad',
        state_id: 42,
    },
    {
        name: 'Jurm',
        state_id: 42,
    },
    {
        name: 'Khandud',
        state_id: 42,
    },
    {
        name: "Qal'eh-ye Panjeh",
        state_id: 42,
    },
    {
        name: 'Bala Morghab',
        state_id: 43,
    },
    {
        name: "Qal'eh-ye Naw",
        state_id: 43,
    },
    {
        name: 'Andarab',
        state_id: 44,
    },
    {
        name: 'Baghlan',
        state_id: 44,
    },
    {
        name: 'Dahaneh-ye Ghawri',
        state_id: 44,
    },
    {
        name: 'Nahrin',
        state_id: 44,
    },
    {
        name: 'Pol-e Khumri',
        state_id: 44,
    },
    {
        name: 'Balkh',
        state_id: 45,
    },
    {
        name: 'Dawlatabad',
        state_id: 45,
    },
    {
        name: 'Mazar-e Sharif',
        state_id: 45,
    },
    {
        name: 'Qarchi Gak',
        state_id: 45,
    },
    {
        name: 'Shulgara',
        state_id: 45,
    },
    {
        name: 'Tash Gozar',
        state_id: 45,
    },
    {
        name: 'Bamiyan',
        state_id: 46,
    },
    {
        name: 'Panjab',
        state_id: 46,
    },
    {
        name: "Qil Qal'eh",
        state_id: 46,
    },
    {
        name: 'Anar Darreh',
        state_id: 47,
    },
    {
        name: 'Farah',
        state_id: 47,
    },
    {
        name: 'Shindand',
        state_id: 47,
    },
    {
        name: 'Andkhvoy',
        state_id: 48,
    },
    {
        name: 'Darzi Ab',
        state_id: 48,
    },
    {
        name: 'Dawlatabad',
        state_id: 48,
    },
    {
        name: 'Maymanah',
        state_id: 48,
    },
    {
        name: 'Chaghcharan',
        state_id: 49,
    },
    {
        name: 'Shahrak',
        state_id: 49,
    },
    {
        name: 'Taywarah',
        state_id: 49,
    },
    {
        name: 'Ghazni',
        state_id: 50,
    },
    {
        name: 'Awbeh',
        state_id: 51,
    },
    {
        name: "Eslam Qal'eh",
        state_id: 51,
    },
    {
        name: 'Ghurian',
        state_id: 51,
    },
    {
        name: 'Herat',
        state_id: 51,
    },
    {
        name: 'Karukh',
        state_id: 51,
    },
    {
        name: 'Kuhestan',
        state_id: 51,
    },
    {
        name: 'Kushk',
        state_id: 51,
    },
    {
        name: 'Qarabagh',
        state_id: 51,
    },
    {
        name: 'Tawraghudi',
        state_id: 51,
    },
    {
        name: 'Tir Pol',
        state_id: 51,
    },
    {
        name: 'Zendejan',
        state_id: 51,
    },
    {
        name: 'Baghran',
        state_id: 52,
    },
    {
        name: 'Darwishan',
        state_id: 52,
    },
    {
        name: 'Deh Shu',
        state_id: 52,
    },
    {
        name: 'Gereshk',
        state_id: 52,
    },
    {
        name: 'Lashkar Gah',
        state_id: 52,
    },
    {
        name: 'Sangin',
        state_id: 52,
    },
    {
        name: 'Aqchah',
        state_id: 53,
    },
    {
        name: 'Qarqin',
        state_id: 53,
    },
    {
        name: 'Sang-e Charak',
        state_id: 53,
    },
    {
        name: 'Shibarghan',
        state_id: 53,
    },
    {
        name: 'Baghrami',
        state_id: 54,
    },
    {
        name: 'Kabul',
        state_id: 54,
    },
    {
        name: 'Mir Bachchekut',
        state_id: 54,
    },
    {
        name: 'Paghman',
        state_id: 54,
    },
    {
        name: 'Qarabagh',
        state_id: 54,
    },
    {
        name: 'Sarawbi',
        state_id: 54,
    },
    {
        name: 'Mahmud-e Raqi',
        state_id: 55,
    },
    {
        name: 'Taghab',
        state_id: 55,
    },
    {
        name: 'Khawst',
        state_id: 56,
    },
    {
        name: 'Asadabad',
        state_id: 57,
    },
    {
        name: 'Asmar',
        state_id: 57,
    },
    {
        name: 'Mehtar Lam',
        state_id: 58,
    },
    {
        name: 'Azraw',
        state_id: 59,
    },
    {
        name: 'Baraki Barak',
        state_id: 59,
    },
    {
        name: 'Pol-e Alam',
        state_id: 59,
    },
    {
        name: 'Achin',
        state_id: 60,
    },
    {
        name: 'Batsawul',
        state_id: 60,
    },
    {
        name: 'Hugyani',
        state_id: 60,
    },
    {
        name: 'Jalalabad',
        state_id: 60,
    },
    {
        name: 'Nader Shah Kawt',
        state_id: 60,
    },
    {
        name: 'Chahar Burjak',
        state_id: 61,
    },
    {
        name: 'Chakhansur',
        state_id: 61,
    },
    {
        name: 'Khash',
        state_id: 61,
    },
    {
        name: 'Mirabad',
        state_id: 61,
    },
    {
        name: 'Rudbar',
        state_id: 61,
    },
    {
        name: 'Zaranj',
        state_id: 61,
    },
    {
        name: 'Nuristan',
        state_id: 62,
    },
    {
        name: 'Orgun',
        state_id: 63,
    },
    {
        name: 'Zareh Sharan',
        state_id: 63,
    },
    {
        name: 'Zarghun Shahr',
        state_id: 63,
    },
    {
        name: "'Ali Khayl",
        state_id: 64,
    },
    {
        name: 'Ghardez',
        state_id: 64,
    },
    {
        name: 'Charikar',
        state_id: 65,
    },
    {
        name: 'Jabal-os-Saraj',
        state_id: 65,
    },
    {
        name: 'Qandahar',
        state_id: 66,
    },
    {
        name: 'Dasht-e Archa',
        state_id: 67,
    },
    {
        name: 'Emam Saheb',
        state_id: 67,
    },
    {
        name: 'Hazart Imam',
        state_id: 67,
    },
    {
        name: 'Khanabad',
        state_id: 67,
    },
].map((input) => ({ createdAt: new Date(), updatedAt: new Date(), ...input }))

module.exports = {
    up: async (queryInterface) => {
        await queryInterface.bulkInsert('Cities', cities, {})
    },
    down: async (queryInterface) => {
        await queryInterface.bulkDelete('Cities', null, {})
    },
}
