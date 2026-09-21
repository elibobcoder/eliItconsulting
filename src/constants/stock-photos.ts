const unsplash = (id: string, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`

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
  codeReview: unsplash('1533750349088-cd871a92f312'),
} as const
