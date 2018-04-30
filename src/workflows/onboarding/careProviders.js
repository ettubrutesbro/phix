const careProviders = [
    //networks have icon
    {name: 'Dignity Health', type: 'network', icon: 'dignityhealth'},
    {name: 'Kaiser Permanente', type: 'network', icon: 'kaiser'},
    {name: 'One Medical Group', type: 'network', icon: 'onemedical'},
    {name: 'Sutter Health', type: 'network', icon: 'sutter'},
    {name: 'Stanford Health Care', type: 'network', icon: 'stanford'},
    {name: 'UCSF Medical Center', type: 'network', icon: 'ucsf'},

    {name: 'Alameda Hospital', type: 'hospital', network: 'Alameda Health System', address: '3600 Broadway St', city: 'Oakland'},
    {name: 'Alta Bates Summit Medical Center | Summit Campus', type: 'hospital', network: 'Sutter Health', address: '350 Hawthorne Ave', city: 'Oakland'},
    {name: 'Alta Bates Summit Medical Center | Alta Bates Campus', type: 'hospital', network: 'Sutter Health', address: '2450 Ashby Ave', city: 'Berkeley'},
    {name: 'Chinese Hospital of San Francisco', type: 'hospital', network: '', address: '845 Jackson St', city: 'San Francisco'},
    {name: 'Eastmont Wellness', type: 'hospital', network: 'Alameda Health System', address: '6955 Foothill Blvd', city: 'Oakland'},
    {name: 'Highland Hospital', type: 'hospital', network: '', address: '1411 E 31st St', city: 'Oakland'},
    {name: 'Kaiser Permanente Oakland Medical Center', type: 'hospital', network: 'Kaiser Permanente', address: '3600 Broadway', city: 'Oakland'},
    {name: 'Oakland Medical Center', type: 'hospital', network: '', address: '280 W MacArthur Blvd', city: 'Oakland'},
    {name: 'UCSF Benioff Children\'s Hospital Oakland', type: 'hospital', network: 'UCSF Medical Center', address: '747 52nd St', city: 'Oakland'},

    {name: 'Aaron Gordon, MD', type: 'doctor', network: 'Kaiser Permanente'},
    {name: 'Affiliates in Dermatology Medical Group, Inc.', type: 'doctor', address: '460 45th St', city: 'Oakland'},
    {name: 'Arthur Van Leuwendorff, PhD', type: 'doctor', specialty: 'Fertility, OB/GYN', network: 'Alameda Health System'},
    {name: 'Arthur Law, MD', type: 'doctor', specialty: 'Pediatrician', network: 'Stanford Health Care'},
    {name: 'Anderson Eng, D.O.', type: 'doctor', specialty: 'Internal Medicine', network: 'Chinese Hospital'},
    {name: 'Dr. Anousheh Ashouri', type: 'doctor', specialty: 'iono', network: 'Kaiser Permanente'},
]

const insurers = [
    {name: 'Anthem BlueCross BlueShield'},
    {name: 'Kaiser Permanente', },
    {name: 'something else'}
]

export {careProviders, insurers}