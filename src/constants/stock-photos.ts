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
} as const
