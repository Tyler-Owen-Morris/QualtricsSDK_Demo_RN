# QualtricsSDK_Demo_RN

A demo of the Qualtrics 2.0.0 SDK running in React Native.

## Setup

In order to run the application you will need to install node packages and ios pods. If you wish to setup for android deployment plese refer to the Qualtrics api documentation for android configuration steps- this project is currently configured for iOS deployment.

Clone the repo to local machine, cd into the directory with `cd QualtricsSDK_Demo_RN` and run:
`npm install` in the root of the project in order to install node packages.

run `cd ios && pod install & cd ..` to install native ios pods.

use `react-native run-ios` to launch the simulator and run the application.

## Additional Configuration

### Project Init:

In App.js the **Qualtrics SDK** is configured with the following block:<br><br>
`Qualtrics.initializeProject( 'BRAND ID', 'PROJECT ID');`<br><br>

This must correspond to the brand ID and Project ID you are using to demo. These currently point to the 'ReactNative Demo' project on the walkersandbox, but you can just as easily point them at your own project

### Intercept Evaluate

The 2.0.0 SDK supports multiple intercepts within one project (this is the largest upgrade/update). Each intercept is evaluated/displayed with this pattern:<br><br>
`Qualtrics.evaluateIntercept('INTERCEPT ID', result => {if (result.succeeded){Qualtrics.displayIntercept('INTERCEPT ID')}});`
<br><br>
By switching the intercept ID's to match the desired intercept, you can load as many intercepts as you want to into the project.
