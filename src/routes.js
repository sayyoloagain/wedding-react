import React from 'react';

const Dashboard = React.lazy(() => import('./views/_Admin/Dashboard/Dashboard'))
const Users = React.lazy(() => import('./views/User/User'))
const Modal = React.lazy(() => import('./__components/Modal'))
//profile
const Profile = React.lazy(() => import('./views/_Admin/Profile/profile'))
const EditProfile = React.lazy(() => import('./views/_Admin/Profile/editprofile'))
const profiletablecomponent = React.lazy(() => import('./views/_Admin/Profile/profiletablecomponent'))
//internet
const Intsubscription = React.lazy(() => import('./views/Internet/Intsubscription'))
const intstatus = React.lazy(() => import('./views/Internet/IntStatus')) 
const intdata = React.lazy(() => import('./views/Internet/DataUsage'))
const intsum = React.lazy(() => import('./views/Internet/IntSum')) 
//touring
const touringTimetable = React.lazy(() => import('./views/Touring/Timetable'))
const touringTimetableEdit = React.lazy(() => import('./views/Touring/TimetableEdit'))
const touringTimetableAdd = React.lazy(() => import('./views/Touring/TimetableAdd'))
//site
const site = React.lazy(() => import('./views/Site/site'))
const sitedetails = React.lazy(() => import('./views/Site/sitedetails'))


const routesSuper = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/Intsubscription', exact: true, name: 'Subscription', component: Intsubscription },
  { path: '/IntStatus', exact: true, name: 'Internet status', component: intstatus },
  { path: '/IntSum', exact: true, name: 'Internet Summary', component: intsum },
  { path: '/Modal', exact: true, name: 'Internet Modal', component: Modal },
  { path: '/editprofile', exact: true, name: 'Edit Profile', component: EditProfile },
  { path: '/profiletablecomponent', exact: true, name: 'Edit Profile', component: profiletablecomponent },
  { path: '/site', exact: true, name: 'Site Management', component: site },
  { path: '/sitedetails', exact: true, name: 'Site Management', component: sitedetails }, 
  { path: '/TouringTimetable', exact: true, name: 'Touring Timetable', component: touringTimetable }, 
  { path: '/TouringTimetableEdit', exact: true, name: 'Edit Touring Timetable', component: touringTimetableEdit }, 
  { path: '/TouringTimetableAdd', exact: true, name: 'Add Touring Timetable', component: touringTimetableAdd }, 
  { path: '/DataUsage', exact: true, name: 'Site Management', component: intdata },
];


const routesAdmin = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
  { path: '/users', exact: true, name: 'Users', component: Users },
  { path: '/Intsubscription', exact: true, name: 'Subscription', component: Intsubscription },
  { path: '/IntStatus', exact: true, name: 'Internet status', component: intstatus },
  { path: '/IntSum', exact: true, name: 'Internet Summary', component: intsum },
  { path: '/site', exact: true, name: 'Site Management', component: site },
 { path: '/sitedetails', exact: true, name: 'Site Management', component: sitedetails }, 
 { path: '/TouringTimetable', exact: true, name: 'Touring Timetable', component: touringTimetable }, 
 { path: '/TouringTimetableEdit', exact: true, name: 'Edit Touring Timetable', component: touringTimetableEdit },
 { path: '/TouringTimetableAdd', exact: true, name: 'Add Touring Timetable', component: touringTimetableAdd }, 
 { path: '/DataUsage', exact: true, name: 'Site Management', component: intdata },

];

const routesManager = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/profile', exact: true, name: 'Profile', component: Profile },
];

const routesBasic = [];

export default {
  Basic: routesBasic,
  Super: routesSuper,
  Admin: routesAdmin,
  Manager: routesManager
};
