// This is going to be an invalid file


// file1.js

// You use export when theres multiple objects to export
export const shout(word) => console.log(word.toUppperCase());
export const freakout(word) => console.log(`${shout(word)} ${shout(word)} ${shout(word)}`);

// file2.js

// you use export default when theres only a single object to export

const exclaim(word) => console.log(`WOWIE!~ ${word}`);
export default exclaim;

// file3.js

// When multiple objects are exported, you can import only the ones you want through the { } syntax
import { shout, freakout } from './file1.js';

// you can rename them too
import { shout as sht, freakout as frk } from './file1.js';

// If there is only one default object exported, you must import the whole thing
import exclaim from './file2,js';