export default [
  {
    planId: 1,
    planTitle: 'Free Plan',
    planPrice: 'Free',
    planDescription:{
      users: 10,
      projects: 1,
      files: 1000,
      isPhysicallySeparated: false,
    } 
  },
  {
    planId: 2,
    planTitle: 'Standard Plan',
    planPrice: 115,
    planDescription: {
      users: 100,
      projects: 20,
      files: 10000,
      isPhysicallySeparated: false,
    }
  },
  {
    planId: 3,
    planTitle: 'Professional Plan',
    planPrice: 'Custom',
    planDescription: {
      users: 'Customized',
      projects: 'Customized',
      files: 'Customized',
      isPhysicallySeparated: true,
    },
  }
];