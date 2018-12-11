// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  amplify: {
    // Setting for AWS Amplify(Auth)
    Auth: {
      region: 'us-east-1',
      userPoolId: 'us-east-1_QnnXkd0U2',
      userPoolWebClientId: '1bi99vil9pr78m1vgqr9ti41ue'
    }
  },
  // Setting for a endpoint of API Gateway
  apiBaseUrl: 'https://ts2d3uoky6.execute-api.us-east-1.amazonaws.com/test',
  localstorageBaseKey: 'CognitoIdentityServiceProvider.1bi99vil9pr78m1vgqr9ti41ue.'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
