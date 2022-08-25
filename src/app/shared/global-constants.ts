// Application
import {Logo} from './models/logo';

export class GlobalConstants {

    /**
     * Company
     */
    public static missionStatement =
        'Our mission is to simplify the requirements of aerospace and defense by providing ' +
        'next-generation technologies that advance the supply chain.';
    public static tagLine =
        'Simple | Transparent | Standardized';
    public static defaultTitle =
        'Aeroplicity - ' + GlobalConstants.missionStatement;
    public static userStatement =
        'Be part of a simpler and more transparent supply chain';
    public static ourStory =
        'Aeroplicity is building the world\'s first blockchain backed aerospace and defense platform.';
    public static ourDescription =
        'Provide and require traceability to origin, REACH, RoHS, Conflict Minerals, and qualification data for your ' +
        'parts, products, and articles. Create a digital twin of your documentation. Share and request controlled ' +
        'unclassified information (CUI) and collaborate on projects on a platform built to comply with the requirements ' +
        'that are applicable to you. And so much more. All backed by blockchain.';
    public static ourPrinciples = [
        'Simplify the complex',
        'Be radically transparent',
        'Set the standard and improve',
        'Be collaborative',
        'Lead with integrity',
        'Have a bias towards action',
        'Don\'t confuse movement with progress',
        'Consider the customer\'s perspective',
        'Challenge yourself to innovate',
        'Never sacrifice quality, health, nor safety'
    ];
    public static qualityPolicy =
        GlobalConstants.ourStory +
        ' We are committed to satisfying the requirements of our customers, the aerospace and defense industry, and all applicable ' +
        'statutory and regulatory standards.' +
        ' We dedicate ourselves to continuously improve our offerings as well as ourselves as we strive to simplify the requirements ' +
        'of aerospace and defense by providing next-generation technologies that advance the supply chain.';
    public static healthASndSafetyPolicy = 'We are committed to setting health and safety as our top priority where we strive to ' +
        'develop, implement, and improve our strategies, systems, and processes to ensure that all of our activities uphold the ' +
        'highest level of health and safety and meet all applicable national and international standards.  It is the responsibility ' +
        'of all of us to abide by the law and participate in a healthy and safe workplace.';
    public static errorCodeFiveHundred = 'Congratulations, you broke it! A team of our best engineers have commandeered a ' +
        'refurbished Concorde and headed to the cloud to investigate.';

    /**
     * LocalStorage Names
     **/
    public static id = 'id';
    public static serialNumber = 'serialNumber';
    public static lotNumber = 'lotNumber';
    // user
    public static userId = 'userId';
    public static email = 'email';
    public static unconfirmedEmail = 'unconfirmedEmail';
    public static confirmed = 'confirmed';
    public static firstName = 'firstName';
    public static lastName = 'lastName';
    public static title = 'title';
    public static mobile = 'mobile';
    public static work = 'work';
    public static profileId = 'profileId';
    public static profileImagePath = 'profileImagePath';
    public static settings = 'settings';
    public static roles = 'roles';
    public static companyUserInvite = 'companyUserInvite';
    public static companyUserRequest = 'companyUserRequest';
    // company
    public static companyId = 'companyId';
    public static companyConfirmed = 'companyConfirmed';
    public static companyDivisions = 'companyDivisions';
    public static companyDivisionId = 'companyDivisionId';
    public static companyDomains = 'companyDomains';
    public static domain = 'domain';
    public static companyUsers = 'companyUsers';
    public static companyUserRoles = 'companyUserRoles';
    public static companyUserInvites = 'companyUserInvites';
    public static companyUserRequests = 'companyUserRequests';
    public static companyTraceabilitys = 'companyTraceabilitys';
    // traceability
    public static traceabilityId = 'traceabilityId';
    public static selectedTraceabilityId = 'selectedTraceabilityId';
    // file share
    public static fileShareId = 'fileShareId';
    public static selectedFileShareId = 'selectedFileShareId';

    /**
     * Token Service
     **/
        // NOTE: must be capitalized
    public static userUserType = 'USER';
    public static adminUserType = 'ADMIN';

    /**
     * Patterns
     **/
        // validator patterns
        // https://www.regextester.com
        // /i = case insensitive
    public static domainPattern = '^[A-Za-z0-9._%+-]+\\.[A-Za-z]{2,63}$';
    public static emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+\\.[A-Za-z]{2,63}$';
    public static websitePattern =
        '^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[A-Za-z0-9]+([\\-\\.]{1}[A-Za-z0-9]+)*\\.[A-Za-z]{2,63}(:[0-9]{1,5})?(\\/.*)?$';
    public static linkedInUrlPattern = '^[A-Za-z0-9]+$';
    public static twitterHandlePattern = '^(@)([A-Za-z0-9_]{1,15})$';
    public static passwordMinLength = 8; // per NIST
    public static passwordMaxLength = 64; // per NIST
    public static einMinLength = 9;
    public static einMaxLength = 9;
    public static einPattern = '^[0-9]{9}$';
    public static dunsNumberMinLength = 9;
    public static dunsNumberMaxLength = 9;
    public static dunsNumberPattern = '^[0-9]{9}$';
    public static cageCodeMinLength = 5;
    public static cageCodeMaxLength = 5;
    public static cageCodePattern = '^[A-Za-z0-9]{5}$';

    /**
     * Route Paths
     **/
        // main
    public static homePath = '/';
    public static registerPath = '/register';
    public static signInPath = '/sign-in';
    public static resetPasswordPath = '/reset-password';
    // pages
    public static pagesPath = '/pages';
    public static conditionsOfUsePath = '/pages/conditions-of-use';
    public static privacyNoticePath = '/pages/privacy-notice';
    public static aboutUsPath = '/pages/about-us';
    public static backedByBlockchainPath = '/pages/backed-by-blockchain';
    public static qualityPath = '/pages/quality';
    public static locationsPath = '/pages/locations';
    public static careersPath = '/pages/careers';
    public static investorRelationsPath = '/pages/investor-relations';
    public static pressPath = '/pages/press';
    // user
    public static userPath = '/user';
    public static userProfilePath = '/user/profile';
    public static userSettingPath = '/user/setting';
    public static userChangePasswordPath = '/user/change-password';
    public static userVerifyPath = '/user/confirmation';
    // company
    public static companyPath = '/company';
    public static companyRegisterPath = '/company/register';
    public static companyJoinPath = '/company/join';
    public static companySettingsPath = '/company/settings';
    public static companyDivisionsPath = '/company/divisions';
    public static companyDivisionsAddressPath = '/company/divisions/address';
    public static companyDivisionsRegisterPath = '/company/divisions/register';
    public static companyDivisionsRegisterTitle = 'Register an additional company for your organization';
    public static companyDomainsPath = '/company/domains';
    public static companyDomainsVerifyPath = '/company/domains/confirmation';
    public static companyUsersPath = '/company/users';
    public static companyUsersInvitePath = '/company/users/invite';
    // admin
    public static adminPath = '/admin';

    /**
     * Logos
     **/
    public static logoTitle: string = 'Aeroplicity - ' + GlobalConstants.missionStatement;
    public static logoAlt = 'Aeroplicty';
    // Wordmark - inverted
    public static invertedWordmarkUrl = 'assets/aeroplicity/Aeroplicity_0_Wordmark_Inverted.png';
    public static invertedWordmark: Logo = {
        url: GlobalConstants.invertedWordmarkUrl,
        title: GlobalConstants.logoTitle,
        alt: GlobalConstants.logoAlt
    };
    // Logo - default
    public static defaultLogoUrl = 'assets/aeroplicity/Aeroplicity_0_Logo_Default.png';
    public static defaultLogo: Logo = {
        url: GlobalConstants.defaultLogoUrl,
        title: GlobalConstants.logoTitle,
        alt: GlobalConstants.logoAlt
    };

    /**
     * Other
     **/
        // drag and drop
    public static dragAndDropTitle = 'Drag and drop your pdf documents here';

    /**
     * Social
     **/
    public static linkedInUrl = 'https://www.linkedin.com/company/aeroplicity';
    public static twitterUrl = 'https://www.twitter.com/aeroplicity';

    /**
     * Emails
     **/
    public static emailPlaceholder = 'name@work-email.com';
    public static supportEmail = 'support@aeroplicity.com';
    public static investorRelationsEmail = 'investor.relations@aeroplicity.com';
    public static pressEmail = 'press@aeroplicity.com';
    public static qualityEmail = 'quality@aeroplicity.com';
    public static blockchainSolutionsEmail = 'blockchain.solutions@aeroplicity.com';

    /**
     * App Classes
     *
     * Used to pass parent class to child
     **/
    public static traceabilityClass = 'TraceabilityComponent';
    public static fileShareClass = 'FileShareComponent';
    public static blockchainClass = 'BlockchainComponent';
    public static contractManagerClass = 'ContractManagerComponent';

    /**
     * Traceability
     **/
        // info
    public static traceabilityTitle = 'Traceability as a Service - Backed by Blockchain';
    public static traceabilityDescription =
        'Take control of your company\'s part\'s, product\'s, and article\'s traceability documentation';
    // paths
    public static traceabilityPath = '/apps/traceability';
    public static traceabilityDashboardPath = '/apps/traceability/dashboard';
    public static traceabilityAllFilesPath = '/apps/traceability/all-files';
    public static traceabilityLibraryPath = '/apps/traceability/library';
    public static traceabilityUploadPath = '/apps/traceability/upload';
    public static traceabilityUploadDocumentPath = '/apps/traceability/upload/document';
    public static traceabilityUploadEmailPath = '/apps/traceability/upload/email';
    public static traceabilityUploadApiPath = '/apps/traceability/upload/api';
    public static traceabilitySendPath = '/apps/traceability/send';
    public static traceabilityRequestPath = '/apps/traceability/request';
    public static traceabilityRequestNewPath = '/apps/traceability/request/new';
    public static traceabilityRequestOpenPath = '/apps/traceability/request/open';
    public static traceabilityRequestClosedPath = '/apps/traceability/request/complete';
    public static traceabilityReceivedFilesPath = '/apps/traceability/received-files';
    public static traceabilityReportsPath = '/apps/traceability/reports';
    public static traceabilitySettingsPath = '/apps/traceability/settings';
    // logo
    public static traceabilityWordmarkAlabasterUrl = 'assets/aeroplicity/Traceability_0_Wordmark_Alabaster.png';
    public static traceabilityLogoTitle = 'Traceability as a Service - Backed by Blockchain';
    public static traceabilityLogoAlt = 'Traceability as a Service';
    public static traceabilityWordmarkAlabaster: Logo = {
        url: GlobalConstants.traceabilityWordmarkAlabasterUrl,
        title: GlobalConstants.traceabilityLogoTitle,
        alt: GlobalConstants.traceabilityLogoAlt
    };

    /**
     * File Share
     **/
        // info
    public static fileShareTitle = 'File Share as a Service - Backed by Blockchain';
    public static fileShareDescription =
        'Share and request controlled unclassified information (CUI) and collaborate on projects';
    // paths
    public static fileSharePath = '/apps/file-share';
    public static fileShareDashboardPath = '/apps/file-share/dashboard';
    public static fileShareAllFilesPath = '/apps/file-share/all-files';
    public static fileShareRecentFilesPath = '/apps/file-share/recent-files';
    public static fileShareSendFilesPath = '/apps/file-share/send-files';
    public static fileShareRequestFilesPath = '/apps/file-share/request-files';
    public static fileShareReportsPath = '/apps/file-share/reports';
    public static fileShareTrashPath = '/apps/file-share/trash';
    public static fileShareSettingsPath = '/apps/file-share/settings';
    // logo
    public static fileShareWordmarkAlabasterUrl = 'assets/aeroplicity/FileShare_0_Wordmark_Alabaster.png';
    public static fileShareLogoTitle = 'File Share as a Service - Backed by Blockchain';
    public static fileShareLogoAlt = 'File Share as a Service';
    public static fileShareWordmarkAlabaster: Logo = {
        url: GlobalConstants.fileShareWordmarkAlabasterUrl,
        title: GlobalConstants.fileShareLogoTitle,
        alt: GlobalConstants.fileShareLogoAlt
    };

    /**
     * Contract Manager
     **/
        // info
    public static contractsManagerTitle = 'Contract Management as a Service - Backed by Blockchain';
    public static contractsManagerDescription = ''; // TODO
    // paths
    public static contractsManagerPath = '/apps/contracts-manager';
    // logo
    public static contractsManagerWordmarkUrl = ''; // TODO
    public static contractsManagerLogoTitle = 'Contract Management as a Service - Backed by Blockchain';
    public static contractsManagerLogoAlt = 'Contract Management as a Service';
    public static contractsManagerWordmark: Logo = {
        url: GlobalConstants.contractsManagerWordmarkUrl,
        title: GlobalConstants.contractsManagerLogoTitle,
        alt: GlobalConstants.contractsManagerLogoAlt
    };

    /**
     * Blockchain
     **/
        // info
    public static blockchainTitle = 'Blockchain as a Service - Backed by Aeroplicity';
    public static blockchainDescription = 'Utilize your existing systems and integrate our custom blockchain solutions';
    // paths
    public static blockchainPath = '/apps/blockchain';
    // logo
    public static blockchainWordmarkUrl = ''; // TODO
    public static blockchainLogoTitle = 'Blockchain as a Service - Backed by Aeroplicity';
    public static blockchainLogoAlt = 'Blockchain as a Service';
    public static blockchainWordmark: Logo = {
        url: GlobalConstants.blockchainWordmarkUrl,
        title: GlobalConstants.blockchainLogoTitle,
        alt: GlobalConstants.blockchainLogoAlt
    };

}
