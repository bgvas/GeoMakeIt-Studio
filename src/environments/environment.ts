// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  'production': false,
  'be_Url': 'http://176.223.139.84/api/v1/',
  'timeZone': '+0600', // Greece //
  'password_pattern': '^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$' // Minimum 8 characters, at least one letter and one number
};
