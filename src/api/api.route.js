var API_ROUTE = '', MQTT_URL = ''

if (typeof(window.AppConfig.API_ROUTE) === "undefined") {
    API_ROUTE = 'http://' + window.location.hostname + ':3035/api'
} 
else{
    API_ROUTE = window.AppConfig.API_ROUTE
}

// if (typeof(window.AppConfig.MQTT_URL) === "undefined") {
//     MQTT_URL = 'ws://' + window.location.hostname + ':3891'
// } 
// else {
//     MQTT_URL = window.AppConfig.MQTT_URL
// }

export const SERVER = {
    API: {
        Login: API_ROUTE + '/AppUsers/login',
        Logout: API_ROUTE + '/AppUsers/logout',
        ChangePassword: API_ROUTE + '/AppUsers/change-password',
        ResetPassword: API_ROUTE + '/AppUsers/reset/password',
        resetPasswordByAdmin: API_ROUTE + '/AppUsers/resetpasswordbyadmin',
        listUserbyEmail: (email) => { return API_ROUTE + '/AppUsers/resetpassword/' + email },

        AppUser: {
            MAIN: API_ROUTE + 'AppUsers',

            RegisterManager: API_ROUTE + '/AppUsers/register/manager',
            UpdateManager: API_ROUTE + '/AppUsers/update/manager',
            DeleteManager: API_ROUTE + '/AppUsers/delete/manager',
            ListManager: API_ROUTE + '/AppUsers/list/managers', //made changes here /AppUsers/list/managers
            profileUpdate: API_ROUTE + '/AppUsers/profileUpdate',

            UpdateByAdmin: API_ROUTE + '/AppUsers/updatebyadmin',
            UpdateByManager: API_ROUTE + '/AppUsers/updatebymanager',

            DeleteByAdmin: API_ROUTE + '/AppUsers/deletebyadmin',
            DeleteByManager: API_ROUTE + '/AppUsers/deletebymanager',

            ChangePassword: API_ROUTE + '/AppUsers/change-password',
            ResetPassword: API_ROUTE + '/AppUsers/resetpasswordbyadmin',

            // LatestData: API_ROUTE + '/AppUsers/getProfileData',
            LatestData: API_ROUTE + '/AppUsers/getProfileData',
            UpdateById: (id) => { return API_ROUTE + '/AppUsers/' + id }
        },

        DataPlan: {
            AddMaxis: API_ROUTE + '/DataPlanMaxes/addMaxis',
            AddXox: API_ROUTE + '/DataPlanXoxes/addXox',
            UpdateMaxis: API_ROUTE + '/DataPlanMaxes/updateMaxis',
            UpdateXox: API_ROUTE + '/DataPlanXoxes/updateXox',
            UpdateXoxToMaxis: API_ROUTE + '/DataPlanMaxes/updateXoxToMaxis',
            UpdateMaxisToXox: API_ROUTE + '/DataPlanXoxes/updateMaxisToXox',
            DeleteMaxis: (id) => { return API_ROUTE + '/DataPlanMaxes/deleteMaxis/' + id },
            DeleteXox: (id) => { return API_ROUTE + '/DataPlanXoxes/deleteXox/' + id },
        },

        Sites: {
            MAIN: API_ROUTE + '/DeviceData',
            LATEST: API_ROUTE + '/DeviceData/latest',
            LatestData: API_ROUTE + '/Sites/getLatestDataByDevice',
            getAllData: API_ROUTE + '/Sites/latestAllData',
            ListOfSite: API_ROUTE + '/Sites/siteList',
        }, 

        TourTimetable: {
            LatestData: API_ROUTE + '/TourTimetables/getLatestDataByDevice',
            AddTimetableData: API_ROUTE + '/TourTimetables/addTimetableData',
            deleteTimetableData: (id) => { return API_ROUTE + '/TourTimetables/deleteTimetableData/' + id },
        },

        Device: {
            Device: API_ROUTE + '/Devices',
            DeviceList: API_ROUTE + '/Devices/list',
            Statistic: API_ROUTE + '/Devices/devicestatistic',
            Delete: API_ROUTE + '/Devices/',
            Update: API_ROUTE + '/Devices/update',

            UpdateById: (id) => { return API_ROUTE + '/Devices/updateDevice/' + id }
        },

        DeviceData: {
            MAIN: API_ROUTE + '/DeviceData',
            LATEST: API_ROUTE + '/DeviceData/latest',
            LatestData: API_ROUTE + '/DeviceData/getLatestDataByDevice',
        },

        History: {
            MAIN: API_ROUTE + '/HistoryData'
            // Update: MAIN+'/api/History/update/info'
        },

    },
    MQTT: {
        URL: MQTT_URL,
        User: 'myav_dash',
        Pass: 'asdh@453bia&2sfeeYq3rs'
    }
}