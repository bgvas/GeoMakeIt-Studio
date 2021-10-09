
const version = '/v2/';

export const environment = {
   'production': false,
   //'be_Url': 'http://176.223.139.84/api/v1/',
   'be_Url': 'https://api.geomakeit.com' + version,
   'base_Fe_Url': 'http://176.223.139.84:8080/studio/#/',
   'timeZone': '+0600', // Greece //
   'password_pattern': '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])*.{8,}$' // Minimum 8 characters, at least one upper, one lower and one number
};
