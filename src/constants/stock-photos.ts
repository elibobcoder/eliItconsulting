const unsplash = (id: string, w = 1600, h = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=85`

export const stockPhotos = {
  coding: unsplash('1498050108023-c5249f4df085'),
  codingCloseup: unsplash('1517694712202-14dd9538aa97'),
  codingScreen: unsplash('1556742049-0cfed4f6a45d'),
  developerLaptop: unsplash('1487014679447-9f8336841d58'),
  developerFocused: unsplash('1607799279861-4dd421887fb3'),

  analyticsDashboard: unsplash('1460925895917-afdab827c52f'),
  marketingMeeting: unsplash('1551288049-bebda4e38f71'),
  growthChart: unsplash('1441986300917-64674bd600d8'),
  seoDashboard: unsplash('1571019613454-1cb2f99b2d8b'),

  ecommercePackages: unsplash('1563986768609-322da13575f3'),
  ecommerceShopping: unsplash('1472851294608-062f824d29cc'),
  onlineShopping: unsplash('1556742044-3c52d6e88c62'),

  brandingDesign: unsplash('1522542550221-31fd19575a2d'),
  designWorkspace: unsplash('1561070791-2526d30994b5'),
  designTools: unsplash('1558655146-d09347e92766'),

  consultingMeeting: unsplash('1531482615713-2afd69097998'),
  strategyMeeting: unsplash('1531973576160-7125cd663d86'),
  businessMeeting: unsplash('1454165804606-c3d57bc86b40'),

  aiAbstract: unsplash('1620712943543-bcc4688e7485'),
  aiConcept: unsplash('1677442136019-21780ecad995'),

  serverRoom: unsplash('1544197150-b99a580bb7a8'),
  cloudComputing: unsplash('1555255707-c07966088b7b'),

  mobileApp: unsplash('1512941937669-90a1b58e7e9c'),
  mobileDesign: unsplash('1573164574572-cb89e39749b4'),

  teamMeeting: unsplash('1522071820081-009f0129c71c'),
  teamCollaboration: unsplash('1517245386807-bb43f82c33c4'),
  teamDiscussion: unsplash('1522202176988-66273c2fd55f'),
  teamAroundTable: unsplash('1552664730-d307ca884978'),
  teamPlanning: unsplash('1519389950473-47ba0277781c'),
  officeCulture: unsplash('1521737711867-e3b97375f902'),
  remoteWork: unsplash('1552581234-26160f608093'),
  standupMeeting: unsplash('1600880292203-757bb62b4baf'),
  teamWorkshop: unsplash('1600880292089-90a7e086ee0c'),
  officeHighFive: unsplash('1556761175-b413da4baf72'),
  teamPresentation: unsplash('1504384308090-c894fdcc538d'),
  modernOffice: unsplash('1571171637578-41bc2dd41cd2'),
  codeReview: unsplash('1517694712202-14dd9538aa97'),

  // Cloud, containers & infrastructure
  containerStack: unsplash('1770944182416-911214039dae'),
  cloudMigrationAbstract: unsplash('1690627931320-16ac56eb2588'),
  cloudBillingCalculator: unsplash('1642043175009-5997b3a078d8'),
  cicdConveyor: unsplash('1727373203588-82996710c2af'),
  multiCloudTangle: unsplash('1683322499436-f4383dd59f5a'),
  serverRacksDataCenter: unsplash('1506399558188-acca6f8cbf41'),
  serverScalingRack: unsplash('1695668548342-c0c1ad479aee'),
  cargoShipPort: unsplash('1634638022845-1ab614a94128'),

  // AI, automation & LLMs
  robotArmAutomation: unsplash('1716191299980-a6e8827ba10b'),
  chatbotAppPhone: unsplash('1751448582395-27fc57293f1a'),
  vibeCodingScreen: unsplash('1774649704786-298b96807db5'),
  aiCodeGenDarkScreen: unsplash('1774901128215-3549cc686921'),
  robotHumanHandsReaching: unsplash('1680783954745-3249be59e527'),

  // Data & analytics
  dataOnScreen: unsplash('1698087908802-baae881e41e6'),
  spreadsheetGraphCloseup: unsplash('1516383274235-5f42d6c6426d'),
  databaseSchemaFlowchart: unsplash('1571666521805-f5e8423aba9d'),
  checklistEvaluation: unsplash('1754548930574-6a995e5eb5a7'),
  marketingCTRDashboard: unsplash('1786340436214-76fd497c650b'),
  swampWater: unsplash('1589167891268-bae895eec5a7'),

  // Security
  securityPadlockKeyboard: unsplash('1654588831193-0285dab84d5a'),
  hackerSilhouetteMonitors: unsplash('1549605659-32d82da3a059'),
  systemOutageAlertPhone: unsplash('1744751249852-77d9078175f7'),

  // Hiring, interviews & careers
  handshakeInterview: unsplash('1758518730384-be3d205838e8'),
  resumePapersDesk: unsplash('1732408433038-73d2f6741fc5'),
  mentorTeachingScreen: unsplash('1522881193457-37ae97c905bf'),
  salaryCashBanknotes: unsplash('1553729459-efe14ef6055d'),

  // Leadership, meetings & remote work
  videoCallLaptopGroup: unsplash('1588196749597-9ff075ee6b5b'),
  videoConferenceGridCall: unsplash('1606770347238-77fcfd29906c'),
  diverseTeamVideoCall: unsplash('1766074903112-79661da9ab45'),
  oneOnOneCoffeeChat: unsplash('1604881991405-b273c7a4386a'),
  burnoutHeadInHands: unsplash('1713947503867-3b27964f042b'),
  whiteboardPlanningSession: unsplash('1557804506-669a67965ba0'),
  boardroomPresentation: unsplash('1758691736483-5f600b509962'),
  techConferenceStage: unsplash('1587825140708-dfaf72ae4b04'),
  layoffsEmptyOffice: unsplash('1642720740716-15838461af15'),
  worldMapPins: unsplash('1650526087824-163941841b52'),
  twoPersonStartupDesk: unsplash('1632813822486-d72529dddbdd'),

  // Web & mobile development
  mobileAppDashboardHand: unsplash('1551650975-87deedd944c3'),
  apiPuzzlePiecesConnect: unsplash('1776057441344-38e0587ad1e6'),
  legacyMacintoshComputer: unsplash('1554921027-b91f0beeb07d'),
  pairProgrammingMonitors: unsplash('1629904853893-c2c8981a1dc5'),
  githubWebsiteScreen: unsplash('1566241440091-ec10de8db2e1'),

  // Marketing & e-commerce
  ecommerceCheckoutCard: unsplash('1609429019995-8c40f49535a5'),
  searchMagnifyingLaptop: unsplash('1516382799247-87df95d790b7'),
  writingNotebookPen: unsplash('1488190211105-8b0e65b80b4e'),

  // Process & planning
  kanbanStickyNotes: unsplash('1611224885990-ab7363d1f2a9'),
  contractSigningPen: unsplash('1763729805496-b5dbf7f00c79'),

  // Industry & economy
  blockchainNetworkCubes: unsplash('1664526937033-fe2c11f1be25'),
  stockMarketChartDark: unsplash('1611974789855-9c2a0a7236a3'),
  // Added for blog image-dedup pass
  exhaustedEngineerNight: unsplash('1685716851721-7e1419f2db18'),
  candidateJobOffer: unsplash('1533750446969-255bbf191920'),
  hiringFunnelChart: unsplash('1763718528755-4bca23f82ac3'),
  csGraduatesCeremony: unsplash('1640163561331-1b68a6474957'),
  codeWarningScreen: unsplash('1542831371-29b0f74f9713'),
  robotAlertWarning: unsplash('1674544362969-a4269ef0ea69'),
  finalRoundInterview: unsplash('1758520144437-f068ecaf0d83'),
  costCalculatorReceipt: unsplash('1649209979970-f01d950cc5ed'),
  partnershipHandshakeMeeting: unsplash('1686771416282-3888ddaf249b'),
  qaTestingLaptop: unsplash('1575089976121-8ed7b2a54265'),
  auditDocumentsReview: unsplash('1570414036784-f96df71770cb'),
  searchResultsScreenGlow: unsplash('1586125674857-4eb86880905d'),
  writingDocsNotebook: unsplash('1615914143778-1a1a6e50c5dd'),
  automationConveyorPipeline: unsplash('1539186607619-df476afe6ff1'),
  dataPipelineNetwork: unsplash('1642356692954-3fbb84baf1a6'),
  startupDeskTwoScreens: unsplash('1523240795612-9a054b0db644'),
  mentorScreenSession: unsplash('1555436169-20e93ea9a7ff'),
  teamTrustHandshakeCircle: unsplash('1640030104754-0a33c686c533'),
  serverTrafficAbstractGlow: unsplash('1653549893012-b8b4fbe97630'),
  engineerSkillLaptopFocus: unsplash('1577375729152-4c8b5fcda381'),
  jobMarketNewspaper: unsplash('1738190228336-aa4cf73874b7'),
  fiberOpticNetworkGlow: unsplash('1658825831108-93088006330d'),
  engineersTrustDiscussion: unsplash('1565350897149-38dfafa81d83'),
  darkCodeEditorScreen: unsplash('1773349807434-374473797148'),
  robotTaskAutomationOffice: unsplash('1643359905563-f747213c9703'),
  engineerRobotCollaboration: unsplash('1581091215367-9b6c00b3035a'),

  // Added for new handwritten "Our Process" articles
  techLeadWhiteboardDiscussion: unsplash('1677506048892-edde55cf3277'),
  remoteRetroVideoNotes: unsplash('1616587226960-4a03badbe8bf'),
  newHireFirstDaySetup: unsplash('1686984096026-23d6e82f9749'),
  urgentDeadlinePressure: unsplash('1456574808786-d2ba7a6aa654'),

  // Added while converting generated posts to sections format
  financeDashboardReview: unsplash('1711606815631-38d32cdaec3e'),
  shippingContainersCrane: unsplash('1598194501777-edbff942e501'),
  costCalculatorSpreadsheet: unsplash('1626266061368-46a8f578ddd6'),
  emptyOfficeChairWaiting: unsplash('1571055931484-22dce9d6c510'),
  brokenPadlockVulnerability: unsplash('1508345228704-935cc84bf5e2'),
  containerYardStacked: unsplash('1605732562742-3023a888e56e'),
  changeWorkshopStickyNotes: unsplash('1623652554515-91c833e3080e'),
  mobileSlowLoadingPhone: unsplash('1494366222322-387658a1a976'),
  spreadsheetNumbersCloseup: unsplash('1529078155058-5d716f45d604'),
  ransomNoteLockedScreen: unsplash('1614064641938-3bbee52942c7'),
  comparingJobOffersPhone: unsplash('1592890288564-76628a30a657'),
  tangledCablesComplexity: unsplash('1698668975271-2ba9a323be6b'),
  movingBoxesHomeOffice: unsplash('1621745491698-86b18793ce6f'),
  managerCheckingInLaptop: unsplash('1758874383489-7be291a44415'),
  typingMessageLaptop: unsplash('1486312338219-ce68d2c6f44d'),

  // Culture page — employee testimonial carousel
  portraitProfessionalWomanOne: unsplash('1609371497456-3a55a205d5eb'),
  portraitProfessionalManOne: unsplash('1705645930353-0e335311ef20'),
  portraitProfessionalManTwo: unsplash('1507003211169-0a1dd7228f2d'),
} as const
