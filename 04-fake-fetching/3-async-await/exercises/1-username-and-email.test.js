import { labeledLogger } from '../../../lib/labeled-logger.js';

import { fetchUserById } from '../../../lib/fetch-user-by-id/index.js';

const { log } = labeledLogger();

/**
 * @async
 * Retrieves a user's username and email by their ID.
 * @param {number} id - The ID of the user to fetch information for.
 * @returns {Promise<string>} A Promise that resolves to a string containing the formatted user information in the format "ID. Username, Email". If an error occurs, an empty string is returned.
 *
 */

const usernameAndEmail = async (id) => {
  try {
    const user = await fetchUserById(id);
    return `${user.id}. ${user.username}, ${user.email}`;
  } catch (err) {
    console.error(err);
  }
};

describe("usernameAndEmail returns the user's id, name and email", () => {
  it("returns user 2's info", async () => {
    const actual = await usernameAndEmail(2);
    expect(actual).toEqual('2. Antonette, Shanna@melissa.tv');
  });
  it("returns user 4's info", async () => {
    const actual = await usernameAndEmail(4);
    expect(actual).toEqual('4. Karianne, Julianne.OConner@kory.org');
  });
  it("returns user 7's info", async () => {
    const actual = await usernameAndEmail(7);
    expect(actual).toEqual('7. Elwyn.Skiles, Telly.Hoeger@billy.biz');
  });
  it("returns user 10's info", async () => {
    const actual = await usernameAndEmail(10);
    expect(actual).toEqual('10. Moriah.Stanton, Rey.Padberg@karina.biz');
  });
});

log('= = = =  the call stack is empty  = = = =');
