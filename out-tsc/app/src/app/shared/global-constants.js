export class GlobalConstants {
}
/**
 * Company
 */
GlobalConstants.missionStatement = 'Our mission is to simplify the requirements of aerospace and defense by providing ' +
    'next-generation technologies that advance the supply chain.';
GlobalConstants.tagLine = 'Simple | Transparent | Standardized';
GlobalConstants.defaultTitle = 'Aeroplicity - ' + GlobalConstants.missionStatement;
GlobalConstants.userStatement = 'Be part of a simpler and more transparent supply chain';
GlobalConstants.ourStory = 'Aeroplicity is building the world\'s first blockchain backed aerospace and defense platform.';
GlobalConstants.ourDescription = 'Provide and require traceability to origin, REACH, RoHS, Conflict Minerals, and qualification data for your ' +
    'parts, products, and articles. Create a digital twin of your documentation. Share and request controlled ' +
    'unclassified information (CUI) and collaborate on projects on a platform built to comply with the requirements ' +
    'that are applicable to you. And so much more. All backed by blockchain.';
GlobalConstants.ourPrinciples = [
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
GlobalConstants.qualityPolicy = GlobalConstants.ourStory +
    ' We are committed to satisfying the requirements of our customers, the aerospace and defense industry, and all applicable ' +
    'statutory and regulatory standards.' +
    ' We dedicate ourselves to continuously improve our offerings as well as ourselves as we strive to simplify the requirements ' +
    'of aerospace and defense by providing next-generation technologies that advance the supply chain.';
GlobalConstants.healthASndSafetyPolicy = 'We are committed to setting health and safety as our top priority where we strive to ' +
    'develop, implement, and improve our strategies, systems, and processes to ensure that all of our activities uphold the ' +
    'highest level of health and safety and meet all applicable national and international standards.  It is the responsibility ' +
    'of all of us to abide by the law and participate in a healthy and safe workplace.';
GlobalConstants.errorCodeFiveHundred = 'Congratulations, you broke it! A team of our best engineers have commandeered a ' +
    'refurbished Concorde and headed to the cloud to investigate.';
/**
 * LocalStorage Names
 **/
GlobalConstants.id = 'id';
GlobalConstants.serialNumber = 'serialNumber';
GlobalConstants.lotNumber = 'lotNumber';
// user
GlobalConstants.userId = 'userId';
GlobalConstants.email = 'email';
GlobalConstants.unconfirmedEmail = 'unconfirmedEmail';
GlobalConstants.confirmed = 'confirmed';
GlobalConstants.firstName = 'firstName';
GlobalConstants.lastName = 'lastName';
GlobalConstants.title = 'title';
GlobalConstants.mobile = 'mobile';
GlobalConstants.work = 'work';
GlobalConstants.profileId = 'profileId';
GlobalConstants.profileImagePath = 'profileImagePath';
GlobalConstants.settings = 'settings';
GlobalConstants.roles = 'roles';
GlobalConstants.companyUserInvite = 'companyUserInvite';
GlobalConstants.companyUserRequest = 'companyUserRequest';
// company
GlobalConstants.companyId = 'companyId';
GlobalConstants.companyConfirmed = 'companyConfirmed';
GlobalConstants.companyDivisions = 'companyDivisions';
GlobalConstants.companyDivisionId = 'companyDivisionId';
GlobalConstants.companyDomains = 'companyDomains';
GlobalConstants.domain = 'domain';
GlobalConstants.companyUsers = 'companyUsers';
GlobalConstants.companyUserRoles = 'companyUserRoles';
GlobalConstants.companyUserInvites = 'companyUserInvites';
GlobalConstants.companyUserRequests = 'companyUserRequests';
GlobalConstants.companyTraceabilitys = 'companyTraceabilitys';
// traceability
GlobalConstants.traceabilityId = 'traceabilityId';
GlobalConstants.selectedTraceabilityId = 'selectedTraceabilityId';
// file share
GlobalConstants.fileShareId = 'fileShareId';
GlobalConstants.selectedFileShareId = 'selectedFileShareId';
/**
 * Token Service
 **/
// NOTE: must be capitalized
GlobalConstants.userUserType = 'USER';
GlobalConstants.adminUserType = 'ADMIN';
/**
 * Patterns
 **/
// validator patterns
// https://www.regextester.com
// /i = case insensitive
GlobalConstants.domainPattern = '^[A-Za-z0-9._%+-]+\\.[A-Za-z]{2,63}$';
GlobalConstants.emailPattern = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9._%+-]+\\.[A-Za-z]{2,63}$';
GlobalConstants.websitePattern = '^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)?[A-Za-z0-9]+([\\-\\.]{1}[A-Za-z0-9]+)*\\.[A-Za-z]{2,63}(:[0-9]{1,5})?(\\/.*)?$';
GlobalConstants.linkedInUrlPattern = '^[A-Za-z0-9]+$';
GlobalConstants.twitterHandlePattern = '^(@)([A-Za-z0-9_]{1,15})$';
GlobalConstants.passwordMinLength = 8; // per NIST
GlobalConstants.passwordMaxLength = 64; // per NIST
GlobalConstants.einMinLength = 9;
GlobalConstants.einMaxLength = 9;
GlobalConstants.einPattern = '^[0-9]{9}$';
GlobalConstants.dunsNumberMinLength = 9;
GlobalConstants.dunsNumberMaxLength = 9;
GlobalConstants.dunsNumberPattern = '^[0-9]{9}$';
GlobalConstants.cageCodeMinLength = 5;
GlobalConstants.cageCodeMaxLength = 5;
GlobalConstants.cageCodePattern = '^[A-Za-z0-9]{5}$';
/**
 * Route Paths
 **/
// main
GlobalConstants.homePath = '/';
GlobalConstants.registerPath = '/register';
GlobalConstants.signInPath = '/sign-in';
GlobalConstants.resetPasswordPath = '/reset-password';
// pages
GlobalConstants.pagesPath = '/pages';
GlobalConstants.conditionsOfUsePath = '/pages/conditions-of-use';
GlobalConstants.privacyNoticePath = '/pages/privacy-notice';
GlobalConstants.aboutUsPath = '/pages/about-us';
GlobalConstants.backedByBlockchainPath = '/pages/backed-by-blockchain';
GlobalConstants.qualityPath = '/pages/quality';
GlobalConstants.locationsPath = '/pages/locations';
GlobalConstants.careersPath = '/pages/careers';
GlobalConstants.investorRelationsPath = '/pages/investor-relations';
GlobalConstants.pressPath = '/pages/press';
// user
GlobalConstants.userPath = '/user';
GlobalConstants.userProfilePath = '/user/profile';
GlobalConstants.userSettingPath = '/user/setting';
GlobalConstants.userChangePasswordPath = '/user/change-password';
GlobalConstants.userVerifyPath = '/user/confirmation';
// company
GlobalConstants.companyPath = '/company';
GlobalConstants.companyRegisterPath = '/company/register';
GlobalConstants.companyJoinPath = '/company/join';
GlobalConstants.companySettingsPath = '/company/settings';
GlobalConstants.companyDivisionsPath = '/company/divisions';
GlobalConstants.companyDivisionsAddressPath = '/company/divisions/address';
GlobalConstants.companyDivisionsRegisterPath = '/company/divisions/register';
GlobalConstants.companyDivisionsRegisterTitle = 'Register an additional company for your organization';
GlobalConstants.companyDomainsPath = '/company/domains';
GlobalConstants.companyDomainsVerifyPath = '/company/domains/confirmation';
GlobalConstants.companyUsersPath = '/company/users';
GlobalConstants.companyUsersInvitePath = '/company/users/invite';
// admin
GlobalConstants.adminPath = '/admin';
/**
 * Logos
 **/
GlobalConstants.logoTitle = 'Aeroplicity - ' + GlobalConstants.missionStatement;
GlobalConstants.logoAlt = 'Aeroplicty';
// Wordmark - inverted
GlobalConstants.invertedWordmarkUrl = 'assets/aeroplicity/Aeroplicity_0_Wordmark_Inverted.png';
GlobalConstants.invertedWordmark = {
    url: GlobalConstants.invertedWordmarkUrl,
    title: GlobalConstants.logoTitle,
    alt: GlobalConstants.logoAlt
};
// Logo - default
GlobalConstants.defaultLogoUrl = 'assets/aeroplicity/Aeroplicity_0_Logo_Default.png';
GlobalConstants.defaultLogo = {
    url: GlobalConstants.defaultLogoUrl,
    title: GlobalConstants.logoTitle,
    alt: GlobalConstants.logoAlt
};
/**
 * Other
 **/
// drag and drop
GlobalConstants.dragAndDropTitle = 'Drag and drop your pdf documents here';
/**
 * Social
 **/
GlobalConstants.linkedInUrl = 'https://www.linkedin.com/company/aeroplicity';
GlobalConstants.twitterUrl = 'https://www.twitter.com/aeroplicity';
/**
 * Emails
 **/
GlobalConstants.emailPlaceholder = 'name@work-email.com';
GlobalConstants.supportEmail = 'support@aeroplicity.com';
GlobalConstants.investorRelationsEmail = 'investor.relations@aeroplicity.com';
GlobalConstants.pressEmail = 'press@aeroplicity.com';
GlobalConstants.qualityEmail = 'quality@aeroplicity.com';
GlobalConstants.blockchainSolutionsEmail = 'blockchain.solutions@aeroplicity.com';
/**
 * App Classes
 *
 * Used to pass parent class to child
 **/
GlobalConstants.traceabilityClass = 'TraceabilityComponent';
GlobalConstants.fileShareClass = 'FileShareComponent';
GlobalConstants.blockchainClass = 'BlockchainComponent';
GlobalConstants.contractManagerClass = 'ContractManagerComponent';
/**
 * Traceability
 **/
// info
GlobalConstants.traceabilityTitle = 'Traceability as a Service - Backed by Blockchain';
GlobalConstants.traceabilityDescription = 'Take control of your company\'s part\'s, product\'s, and article\'s traceability documentation';
// paths
GlobalConstants.traceabilityPath = '/apps/traceability';
GlobalConstants.traceabilityDashboardPath = '/apps/traceability/dashboard';
GlobalConstants.traceabilityAllFilesPath = '/apps/traceability/all-files';
GlobalConstants.traceabilityLibraryPath = '/apps/traceability/library';
GlobalConstants.traceabilityUploadPath = '/apps/traceability/upload';
GlobalConstants.traceabilityUploadDocumentPath = '/apps/traceability/upload/document';
GlobalConstants.traceabilityUploadEmailPath = '/apps/traceability/upload/email';
GlobalConstants.traceabilityUploadApiPath = '/apps/traceability/upload/api';
GlobalConstants.traceabilitySendPath = '/apps/traceability/send';
GlobalConstants.traceabilityRequestPath = '/apps/traceability/request';
GlobalConstants.traceabilityRequestNewPath = '/apps/traceability/request/new';
GlobalConstants.traceabilityRequestOpenPath = '/apps/traceability/request/open';
GlobalConstants.traceabilityRequestClosedPath = '/apps/traceability/request/complete';
GlobalConstants.traceabilityReceivedFilesPath = '/apps/traceability/received-files';
GlobalConstants.traceabilityReportsPath = '/apps/traceability/reports';
GlobalConstants.traceabilitySettingsPath = '/apps/traceability/settings';
// logo
GlobalConstants.traceabilityWordmarkAlabasterUrl = 'assets/aeroplicity/Traceability_0_Wordmark_Alabaster.png';
GlobalConstants.traceabilityLogoTitle = 'Traceability as a Service - Backed by Blockchain';
GlobalConstants.traceabilityLogoAlt = 'Traceability as a Service';
GlobalConstants.traceabilityWordmarkAlabaster = {
    url: GlobalConstants.traceabilityWordmarkAlabasterUrl,
    title: GlobalConstants.traceabilityLogoTitle,
    alt: GlobalConstants.traceabilityLogoAlt
};
/**
 * File Share
 **/
// info
GlobalConstants.fileShareTitle = 'File Share as a Service - Backed by Blockchain';
GlobalConstants.fileShareDescription = 'Share and request controlled unclassified information (CUI) and collaborate on projects';
// paths
GlobalConstants.fileSharePath = '/apps/file-share';
GlobalConstants.fileShareDashboardPath = '/apps/file-share/dashboard';
GlobalConstants.fileShareAllFilesPath = '/apps/file-share/all-files';
GlobalConstants.fileShareRecentFilesPath = '/apps/file-share/recent-files';
GlobalConstants.fileShareSendFilesPath = '/apps/file-share/send-files';
GlobalConstants.fileShareRequestFilesPath = '/apps/file-share/request-files';
GlobalConstants.fileShareReportsPath = '/apps/file-share/reports';
GlobalConstants.fileShareTrashPath = '/apps/file-share/trash';
GlobalConstants.fileShareSettingsPath = '/apps/file-share/settings';
// logo
GlobalConstants.fileShareWordmarkAlabasterUrl = 'assets/aeroplicity/FileShare_0_Wordmark_Alabaster.png';
GlobalConstants.fileShareLogoTitle = 'File Share as a Service - Backed by Blockchain';
GlobalConstants.fileShareLogoAlt = 'File Share as a Service';
GlobalConstants.fileShareWordmarkAlabaster = {
    url: GlobalConstants.fileShareWordmarkAlabasterUrl,
    title: GlobalConstants.fileShareLogoTitle,
    alt: GlobalConstants.fileShareLogoAlt
};
/**
 * Contract Manager
 **/
// info
GlobalConstants.contractsManagerTitle = 'Contract Management as a Service - Backed by Blockchain';
GlobalConstants.contractsManagerDescription = ''; // TODO
// paths
GlobalConstants.contractsManagerPath = '/apps/contracts-manager';
// logo
GlobalConstants.contractsManagerWordmarkUrl = ''; // TODO
GlobalConstants.contractsManagerLogoTitle = 'Contract Management as a Service - Backed by Blockchain';
GlobalConstants.contractsManagerLogoAlt = 'Contract Management as a Service';
GlobalConstants.contractsManagerWordmark = {
    url: GlobalConstants.contractsManagerWordmarkUrl,
    title: GlobalConstants.contractsManagerLogoTitle,
    alt: GlobalConstants.contractsManagerLogoAlt
};
/**
 * Blockchain
 **/
// info
GlobalConstants.blockchainTitle = 'Blockchain as a Service - Backed by Aeroplicity';
GlobalConstants.blockchainDescription = 'Utilize your existing systems and integrate our custom blockchain solutions';
// paths
GlobalConstants.blockchainPath = '/apps/blockchain';
// logo
GlobalConstants.blockchainWordmarkUrl = ''; // TODO
GlobalConstants.blockchainLogoTitle = 'Blockchain as a Service - Backed by Aeroplicity';
GlobalConstants.blockchainLogoAlt = 'Blockchain as a Service';
GlobalConstants.blockchainWordmark = {
    url: GlobalConstants.blockchainWordmarkUrl,
    title: GlobalConstants.blockchainLogoTitle,
    alt: GlobalConstants.blockchainLogoAlt
};
//# sourceMappingURL=global-constants.js.map