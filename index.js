import { ApiClient } from 'twitch';
import { ClientCredentialsAuthProvider } from 'twitch-auth';
import { SimpleAdapter, WebHookListener } from 'twitch-webhooks';

const clientId = 'oefylc3y5rhqyi790doo43aiwznosp';
const clientSecret = '5obte9ycqd40lrun7m3glqfbd50vzt';

const authProvider = new ClientCredentialsAuthProvider(clientId, clientSecret);
const apiClient = new ApiClient({ authProvider });

const listener = new WebHookListener(apiClient, new SimpleAdapter({
    hostName: 'localhost',
    listenerPort: 80
}));


const userId = '47417126';
// we need to track the previous status of the stream because there are other state changes than the live/offline switch
let prevStream = await apiClient.helix.streams.getStreamByUserId(userId);
const subscription = await listener.subscribeToStreamChanges(userId, async (stream) => {
    if (stream) {
        if (!prevStream) {
            console.log(`${stream.userDisplayName} just went live with title: ${stream.title}`);
        }
    }
    else {
        // no stream, no display name
        const user = await apiClient.helix.users.getUserById(userId);
        console.log(`${user.displayName} just went offline`);
    }
    prevStream = stream;
});
export {};

await listener.listen();