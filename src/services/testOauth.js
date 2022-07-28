import { OauthService } from "medusa-interfaces";

class TestOauthService extends OauthService {
  constructor({}, options) {
    super();
  }

  static getAppDetails(options) {
    return {
      application_name: "example",
      display_name: "Example",
      install_url: "https://some_url.com",
    };
  }

  async refreshToken(token) {
    // should refresh the token for your given installation and return it
    return "newtoken";
  }

  async generateToken(data) {
    // should generate a token for your given installation and return it
    return "token";
  }
}

export default TestOauthService;
