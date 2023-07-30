const LOG = cds.log("identity-service");

module.exports = class IdentityService extends cds.ApplicationService {
  init() {
    const { getUsers } = require("#cds-models/IdentityService");
    this.on(getUsers, (req) => {
      LOG.info("getUsers");
    });
    return super.init();
  }
};
