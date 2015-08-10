// Set up login services
Meteor.startup(function() {
  // Add Facebook configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: "XXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */

  // Add GitHub configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "github" },
    { $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */

  // Add Google configuration entry
  ServiceConfiguration.configurations.update(
    { service: "meteor-developer" },
    { $set: {
        clientId: "5t45XuuwgzW3Xr6h6",
        secret: "N9J5ifcyxGaTJrd8tAjwhnHL6g7WwA7Nq2"
      }
    },
    { upsert: true }
  );

  // Add Google configuration entry
  ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
        clientId: "755514649356-r82bvrffrlfo4ndu5bqnd41jjoo66k8e.apps.googleusercontent.com",
        client_email: "755514649356-r82bvrffrlfo4ndu5bqnd41jjoo66k8e@developer.gserviceaccount.com",
        secret: "pRaKBHbRbLbA4GoiiRd-r1jj"
      }
    },
    { upsert: true }
  );

  // Add Linkedin configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "linkedin" },
    { $set: {
        clientId: "XXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */
});
