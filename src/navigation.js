// const Dashboard = {
//   name: 'Dashboard',
//   url: '/Dashboard',
//   icon: 'icon-pie-chart',
// }

// const TouringSummary = {
//   name: 'Touring Summary',
//   url: '/VehicleDetails',
//   icon: 'icon-notebook',
// }

// const SimCardManagement = {

//   name: 'Data Plan Management',
//  // url: '/simcardmanagement',
//   icon: 'icon-chart',
//   children
//     : []
// };
// SimCardManagement.children.push({
//   name: 'Subscription',
//   url: '/Intsubscription2',
//   icon: 'icon-globe',
//  });
//  SimCardManagement.children.push({
//     name: 'Status',
//     url: '/IntStatus',
//     icon: 'icon-clock',
//   });
//   SimCardManagement.children.push({
//     name: 'Data Usage',
//    // url: '/IntData',
//     icon: 'icon-folder-alt',
//   });
//   SimCardManagement.children.push(
//   {
//     name: 'Data Usage Summary',
//     url: '/IntSum2',
//     icon: 'icon-docs',
//   }
// );

// const Site = {
//   name: 'Sites Management',
//   url: '/site',
//   icon: 'icon-location-pin',
// }

// const Users = {
//   name: 'Users',
//   url: '/users',
//   icon: 'icon-people',
// } 

// const remotemonitoring ={
//   name: 'Remote Monitoring',
//   url: '/remotemonitoring',
//   icon: 'icon-screen-desktop',
// }

// const DistributionChannel = {
//   name: 'Distribution Channel',
//   url: '/distributionchannel',
//   icon: 'icon-link',
// }

// const Profile = {
//   name: 'Profile',
//   url: '/profile',
//   // icon: 'icon-people',
// }

// export default {
//   Basic: { items: [Dashboard, TouringSummary,Profile,Users ]},
//   System:{ items: [Dashboard, TouringSummary,
//                   SimCardManagement,Site,Users , remotemonitoring,DistributionChannel ] },
//   Super: { items: [Dashboard, TouringSummary,
//                   SimCardManagement,Site,Users , remotemonitoring,DistributionChannel ] }, 
//   Admin: { items: [Dashboard, TouringSummary,
//                   SimCardManagement,Site,Users , remotemonitoring,DistributionChannel ] }, 
//   Manager: { items: [Dashboard] },
// };

const Dashboard = {
  name: 'Dashboard',
  url: '/Dashboard',
  icon: 'icon-pie-chart',
}

const TouringSummary = {
  name: 'Touring',
  icon: 'icon-notebook',
  children
    : []
}
TouringSummary.children.push({
  name: 'Information',
  url: '/TouringInformation',
  icon: 'icon-globe',
 });
 TouringSummary.children.push({
   name: 'Timetable',
   url: '/TouringTimetable',
   icon: 'icon-globe',
  });
  TouringSummary.children.push({
    name: 'Live Touring',
    url: '/Touring',
    icon: 'icon-globe',
   });
   TouringSummary.children.push({
     name: 'Status',
     url: '/TouringStatus',
     icon: 'icon-globe',
    });
    TouringSummary.children.push({
      name: 'Summary',
      url: '/TouringSummary',
      icon: 'icon-globe',
     });

const SimCardManagement = {
  name: 'Data Plan Management',
  icon: 'icon-chart',
  children
    : []
};
SimCardManagement.children.push({
  name: 'Subscription',
  url: '/Intsubscription',
  icon: 'icon-globe',
 });
 SimCardManagement.children.push({
    name: 'Status',
    url: '/IntStatus',
    icon: 'icon-clock',
  });
    SimCardManagement.children.push({
      name: 'Data Usage',
      url: '/DataUsage',
      icon: 'icon-folder-alt',
    });
  SimCardManagement.children.push(
  {
    name: 'Data Usage Summary',
    url: '/IntSum',
    icon: 'icon-docs',
  }
);

const Site = {
  name: 'Sites Management',
  url: '/site',
  icon: 'icon-location-pin',
}

const Users = {
  name: 'Users',
  url: '/users',
  icon: 'icon-people',
}

const remotemonitoring ={
  name: 'Remote Monitoring',
  url: '/remotemonitoring',
  icon: 'icon-screen-desktop',
}

const DistributionChannel = {
  name: 'Distribution Channel',
  url: '/distributionchannel',
  icon: 'icon-link',
}

const Profile = {
  name: 'Profile',
  url: '/profile',
  // icon: 'icon-people',
}

export default {
  Basic: { items: [Dashboard, TouringSummary,Profile,Users ]},
  System:{ items: [Dashboard, TouringSummary,
                  SimCardManagement, Site, Users, remotemonitoring, DistributionChannel ] },  
  Super: { items: [Dashboard, TouringSummary,
                  SimCardManagement, Site, Users, remotemonitoring, DistributionChannel ] },  
  Admin: { items: [Dashboard, TouringSummary, 
                  SimCardManagement, Site, Users, remotemonitoring, DistributionChannel ] },  
  Manager: { items: [Dashboard] },
};

