/* Docs: https://getstream.io/docs/feeds_getting_started/?language=js
yarn add getstream
*/

const stream = require('getstream');

appId = '93910';
apiKey = 'tsk5cgpt3sst';
keySecret = 'eegjwdmtn7c83nnr8c6p9d2bqacgch6w8x9724c7vtfr5h76pp8vfz4zmyezbjyd';

// Server-side
const client = stream.connect(
  apiKey,
  keySecret,
  appId,
  { location: 'us-east' },
);

client.createUserToken(user.id);




// Client-side
// client = stream.connect(
//   'apikey',
//   userToken,
//   appId
// );
