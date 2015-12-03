// Import Soundworks modules (server side)
import { ServerPerformance } from 'soundworks/server';

/**
 * '`player`' performance module (server side).
 */
export default class PlayerPerformance extends ServerPerformance {
  /**
   * Constructor, to instantiate the class.
   */
  constructor(options = {}) {
    super(options);
  }

  /**
   * If anything needs to happen when a client connects to the server,
   * write it in the `connect` method.
   */
  // connect(client) {
  //   super.connect(client); // don't forget this
  //
  //   ... // your code
  // }

  /**
   * If anything needs to happen when a client disconnects from the server,
   * write it in the `disconnect` method.
   */
  // disconnect(client) {
  //   super.disconnect(client); // don't forget this
  //
  //   ... // your code
  // }

  /**
   * If anything needs to happen when a client enters the performance (*i.e.*
   * starts the performance module on the client side), write it in the `enter`
   * method.
   */
  enter(client) {
    super.enter(client);

    // Send a message to all the other clients
    this.sendPeers(client, 'play');
  }

  /**
   * If anything needs to happen when a client leaves the performance,
   * write it in the 'exit' method.
   */
  // exit(client) {
  //   super.exit(client); // don't forget this
  //
  //   ... // your code
  // }
}
