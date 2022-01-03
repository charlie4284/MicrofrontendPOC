const DEPLOY_ENV = process.env.REACT_APP_DEPLOY_ENV || "DEVELOPMENT";

const USER_POOL_ID_PROD = "us-east-1_PYhUpwOvb";
const USER_POOL_ID_DEV = "us-east-1_CtRgepXa7";

const USER_POOL_WEB_CLIENT_ID_PROD = "4cdff9c97uh8va9fgllen9ph89";
const USER_POOL_WEB_CLIENT_ID_DEV = "jpg8mnmvoraj9eo14s2t6jm5j";

const AWS_REGION = "us-east-1"

export const RANDOM = "thestrangehorseofsuinabhal";
export const PUBLIC_TOKEN =
    "U2FsdGVkX1/ZRkKtGo39UkhaqVmdunfDUToaD5XQOgiuj/H3tgk7DmY+uTr90fpFw42hZGGUc44pnUckzNf4mL05RkH56zIr441MJTiaftQJYkqfgZblGKzNY5FXJ7tpr4ZgRj0vnf3Wx5VybiLhIabQVA6MEnliU4cgfdcL7POz0Odf1BewVFLorfXTszhRc70ue6/868TSYTXQ1mcCUO/RxU82FMpZb0YOwCjyE9ru1jl+9ghB0rAUXKOGb7o80JXNk7TH0eYvBGwcLcMIVB2tSw9CDUhn3QemF0vPm8F8XYHw3nN+ZR2axZykjgJTACyS3xkPMAJVM8mMY771GNkeg3qOBeqAgWspY4w6Sf3xkrHUg0nmz1o4aiQdeRt9lQtieE6qhllmjFiiBQdVvBQw8qwMSfNQsU7+NTrImUrT3H913PZo+h5th7Y7EphFth8t9Xh/G7RDFd2NgsJ8zpvCxi0WoJt3cv0BzkZZtzPqQ3hquyV1/0RYemURe45kbYzsXtUOuziLT8S4EGzv3EucQAORjAjuZ7fG/Ysm54kS8EK6n8s/l1rVJ5zFQiGANpSkiN51ALo3vXswR+PZT0I2BvCu+sHr3mHMBhfBFV+QkJzAMciYkZzI/VtHkng0ayWW4+d0xxNFKSJ0xlasUWMEPc/bepVUegs9qgXcInzw4Dm/8hz40SgO7Mwf0J8z91sU7AJ4cAoOYdxl3PvHJJNxxJ02aYfgMxLYEVAKO7nsm5DXA+EP32MnyfvtoBqBu1m+M82H9vH7sGp3H50FB0zTDbDiIpwVAp/O7qz3QT0Binpfonf7yKqaob8+ggPIdSybDIY/h2QPhX0NIUtVdFrN33M8rPPobI1T5GcJYqw=";

const USER_POOL_ID = DEPLOY_ENV === "PRODUCTION" ? USER_POOL_ID_PROD : USER_POOL_ID_DEV;
const USER_POOL_WEB_CLIENT_ID = DEPLOY_ENV === "PRODUCTION" ? USER_POOL_WEB_CLIENT_ID_PROD : USER_POOL_WEB_CLIENT_ID_DEV;

export const AMPLIFY_CONFIG = {
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

        // REQUIRED - Amazon Cognito Region
        region: AWS_REGION,

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        // identityPoolRegion: 'XX-XXXX-X',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: USER_POOL_ID,

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: USER_POOL_WEB_CLIENT_ID,

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        // mandatorySignIn: false,

        // OPTIONAL - Configuration for cookie storage
        // Note: if the secure flag is set to true, then the cookie transmission requires a secure protocol
        // cookieStorage: {
        //     // REQUIRED - Cookie domain (only required if cookieStorage is provided)
        //     domain: '.yourdomain.com',
        //     // OPTIONAL - Cookie path
        //     path: '/',
        //     // OPTIONAL - Cookie expiration in days
        //     expires: 365,
        //     // OPTIONAL - See: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie/SameSite
        //     sameSite: "strict" | "lax",
        //     // OPTIONAL - Cookie secure flag
        //     // Either true or false, indicating if the cookie transmission requires a secure protocol (https).
        //     secure: true
        // },

        // OPTIONAL - customized storage object
        // storage: MyStorage,

        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        // authenticationFlowType: 'USER_PASSWORD_AUTH',

        // OPTIONAL - Manually set key value pairs that can be passed to Cognito Lambda Triggers
        // clientMetadata: { myCustomKey: 'myCustomValue' },

        // OPTIONAL - Hosted UI configuration
        // oauth: {
        //     domain: 'your_cognito_domain',
        //     scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
        //     redirectSignIn: 'http://localhost:3000/',
        //     redirectSignOut: 'http://localhost:3000/',
        //     responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
        // }
    }
}