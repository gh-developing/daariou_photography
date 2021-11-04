const CONFIG = {
    AUTOTAG_ENDPOINT: {
        basePath: 'https://autotag.adobeku.com',
        api: '/autotag'
    },
    BEHANCE_ENDPOINT: {
        basePath: 'https://cc-api-behance.adobe.io/v2',
        searchApi: '/projects',
        galleryApi: '/galleries'
    },
    CCLIBRARIES_ENDPOINT: {
        basePath: 'https://cc-api-assets.adobe.io',
        librariesApi: '/libraries',
        themesApi: '/elements',
        melvilleBasePath: 'https://libraries.adobe.io/api/v1',
        melvilledomainPath: 'https://libraries.adobe.io',
        metadataApi: '/metadata'
    },
    CLIENT_ID: 'ColorWeb',
    CURATED_ENDPOINT: 'https://d2ulm998byv1ft.cloudfront.net/curaredData.json',
    ENVIRONMENT: 'production',
    FLOODGATE_ENDPOINT: {
        basePath: 'https://p13n.adobe.io/fg',
        api: '/api/v3/feature',
        xApiKey: '4d84247c36bd4f63977853eb1e0cb5b7' // Need to check in correct x-api-key
    },
    KULER_ENDPOINT: {
        basePath: 'https://kuler.adobe.com',
        api: '/api/v2',
        tagsPath: '/tags',
        searchPath: '/search',
        themePath: '/themes',
        clientId: '7810788A1CFDC3A717C58F96BC4DD8B4'
    },
    IMS_LIB_ENDPOINT: 'https://auth.services.adobe.com/imslib/imslib.min.js',
    IMS_SCOPE: 'openid,sao.creative_cloud,gnav,sao.cce_private,creative_cloud,AdobeID,additional_info.roles',
    IMS_ENV: 'prod',
    INGEST_ENDPOINT: {
        basePath: 'https://cc-api-data.adobe.io/ingest'
    },
    INGEST_METADATA: {
        ENVIRONMENT: 'prod',
        INGEST_TYPE: 'dunamis',
        PLATFORM: 'WEB',
        PROJECT: 'color-web-service',
        SOURCE_NAME: 'Adobe Color',
        VERSION: 5.0,
        BUILD: 'color-v1',
        ORG_VISITOR_ID: '44FD596D5707FFAC7F000101@AdobeOrg'
    },
    PANTONE: {
        IDENTITY_POOL_ID: 'us-east-1:0c09a4ec-8817-496f-b37d-3deef005f08b',
        USER_POOL_ID: 'us-east-1_apCdkad4c',
        CLIENT_ID: '68fhh8dv6cmjdprd4uf37cp9r6',
        AUTH_TYPE: 'AWS_IAM',
        REGION: 'us-east-1',

        // Pantone API data
        API_ENDPOINT: 'https://4n6dg5ccsfct3lzfssu34boemq.appsync-api.us-east-1.amazonaws.com/graphql'
    },
    STOCK_ENDPOINT: {
        redirect: 'https://stock.adobe.com',
        contributor: '/contributor',
        api: 'https://stock.adobe.io/Rest/Media/1/Search/Files',
        productId: 'AdobeColor/4.0'
    },
    SUPPORTED_LOCALES: ['cs', 'da', 'de', 'en', 'es', 'fr', 'it', 'nl', 'nb', 'pl', 'pt', 'fi', 'sv', 'tr', 'ru', 'zh', 'ja', 'ko'],
    UNIVERSAL_SEARCH_PROXY: {
        basePath: 'https://uss.adobeku.com',
        similaritySearch: '/universal-search/v2/similarity-search'
    },
    UNIVERSAL_SEARCH_ENDPOINT: {
        basePath: 'https://adobesearch.adobe.io',
        api: '/universal-search/v2',
        similaritySearch: '/similarity-search',
        xProduct: 'Color',
        xProductLocation: 'Color Website'
    },
    USER_FEEDBACK_ENDPOINT: {
        basePath: 'https://10sbjcgrqa.execute-api.us-east-1.amazonaws.com',
        api: '/production/feedback',
        clientId: '9542d93e-b4ba-49ea-8c79-bdf68167cd7b'
    },
    UTILITY_NAV: 'https://prod.adobeccstatic.com/utilnav/9.1/utilitynav.js',
    UTILITY_NAV_CSS: 'https://prod.adobeccstatic.com/utilnav/9.1/utilitynav.css',
    UTILITY_NAV_ENV: 'prod',
    VADER_ENDPOINT: {
        api: 'https://t7peykbaei.execute-api.us-east-1.amazonaws.com/prod',
        serviceId: 'color',
        applicationId: 'color_web'
    },
    ONETRUST_DOMAIN_ID: '7a5eb705-95ed-4cc4-a11d-0cc5760e93db',
    TYPEKIT_V1: 'https://cctypekit.adobe.io/v1/visual_search/regions',
    SSR: {
        basePath: 'https://color.adobe.com/'
    }
};

const config = function(key) {
    return CONFIG[key];
};

// Export the config object for Node JS environment otherwise make it available inside window object
if (typeof module !== 'undefined' && module.exports) {
    module.exports = config;
    global.config = config;
} else {
    window.config = config;
}
