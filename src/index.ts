import RingCentral from '@rc-ex/core';

const rc = new RingCentral({
  clientId: process.env.RINGCENTRAL_CLIENT_ID,
  clientSecret: process.env.RINGCENTRAL_CLIENT_SECRET,
  server: process.env.RINGCENTRAL_SERVER_URL,
});

(async () => {
  await rc.authorize({
    username: process.env.RINGCENTRAL_USERNAME!,
    extension:
      process.env.RINGCENTRAL_EXTENSION === ''
        ? undefined
        : process.env.RINGCENTRAL_EXTENSION,
    password: process.env.RINGCENTRAL_PASSWORD!,
  });
  console.log(rc.token?.access_token);
  const r = await rc.restapi().glip().teams().list();
  console.log(r);
  await rc.revoke();
})();
