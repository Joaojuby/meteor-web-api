import {Meteor} from 'meteor/meteor';
import { Restivus } from 'meteor/nimble:restivus';

if (Meteor.isServer) {
  // Global API configuration
  var Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true
  });

  Api.addCollection(Meteor.users, {
    excludedEndpoints: ['put', 'delete', 'patch'],
    routeOptions: {
      authRequired: true
    },
    endpoints: {
      post: {
        authRequired: false
      },
      delete: {
        roleRequired: 'admin'
      }
    }
  });
}