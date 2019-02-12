import * as appInsights from 'applicationinsights';
const client = new appInsights.TelemetryClient('1ced6a2f-b3b2-4da5-a1b8-746512fbc840'); //Updated to v1.0.0 App Insights client code.
/* Remove unwanted tags */
delete client.context.tags['ai.cloud.roleInstance'];
delete client.context.tags['ai.device.osVersion'];
delete client.context.tags['ai.device.osArchitecture'];
delete client.context.tags['ai.device.osPlatform'];
