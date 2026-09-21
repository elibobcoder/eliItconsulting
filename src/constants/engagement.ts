export const engagementModels: Record<string, IEngagementModel> = {
  'staff-augmentation': {
    slug: 'staff-augmentation',
    eyebrow: 'Staff Augmentation',
    title: 'Add senior engineers',
    titleAccent: 'without adding overhead.',
    description:
      'Slot experienced developers directly into your existing team to close skill gaps and keep delivery moving, without the time or cost of a full hiring cycle.',
    highlights: ['Senior engineers', 'Start in a matter of weeks'],
    ctaLabel: 'Talk About Staff Augmentation',
    whyEyebrow: 'Why Staff Augmentation',
    whyTitle: 'Close capacity gaps without changing how you work.',
    whyIntro:
      'When the roadmap is bigger than your team can cover, we take pressure off your engineers and help get delivery back on track.',
    benefits: [
      'Fill skill gaps without a hiring cycle',
      'Scale your team up or down as needs change',
      'Keep full control of priorities and process',
      'Work in your tools, your workflow, your hours',
      'Get talent with real industry experience',
      'Reduce the risk of a bad in-house hire',
    ],
    whySupport:
      'Our engineers ramp up on your systems and processes quickly, and typically start contributing meaningful work within the first couple of weeks.',
    howTitle: 'Bring in engineers who keep delivery moving.',
    howIntro:
      'Fill a specialized skill gap, reinforce a stretched team, or add capacity for a major initiative. Either way, our engineers work alongside yours as one team.',
    howCards: [
      {
        title: 'Embedded, not outsourced',
        description:
          'Our engineers join your daily standups and use your existing tools, working as a genuine extension of your team.',
      },
      {
        title: 'You stay in control',
        description:
          'Your leads set priorities and direction. We provide the technical depth to help you execute faster.',
      },
      {
        title: 'Ramp up fast',
        description:
          'Engineers get onboarded to your codebase and workflows quickly, so they can contribute real work sooner.',
      },
    ],
    related: [
      {
        slug: 'dedicated-teams',
        title: 'Dedicated Teams',
        description:
          'Spin up a self-managing squad that owns a specific product or workstream end-to-end.',
      },
      {
        slug: 'software-outsourcing',
        title: 'Software Outsourcing',
        description:
          'Hand off a defined project and let us own delivery from scoping through deployment.',
      },
    ],
  },
  'dedicated-teams': {
    slug: 'dedicated-teams',
    eyebrow: 'Dedicated Teams',
    title: 'Stand up a team',
    titleAccent: 'that runs itself.',
    description:
      'Get a self-managing squad that owns a specific product or workstream end-to-end, coordinated by a dedicated lead so your team isn’t managing every task.',
    highlights: ['Self-managing squad', 'Built around your stack'],
    ctaLabel: 'Talk About Dedicated Teams',
    whyEyebrow: 'Why Dedicated Teams',
    whyTitle: 'Ship more software without more project management.',
    whyIntro:
      'Teams choose the dedicated model when in-house capacity is stretched thin and adding more direct reports would only add load to your leads.',
    benefits: [
      'Offload day-to-day coordination, not just tasks',
      'Scale a team to match a specific workstream',
      'Get consistent delivery without adding headcount',
      'Keep visibility without managing every detail',
      'Build long-term capacity, not a one-off project',
      'Bring in the mix of roles a workstream actually needs',
    ],
    whySupport:
      'A dedicated tech lead coordinates priorities with your team and runs day-to-day execution, so your leads can stay focused on direction rather than daily coordination.',
    howTitle: 'Set the priorities. Our team drives execution.',
    howIntro:
      'Offload a workstream your leads don’t have bandwidth for, or run an initiative in parallel without a hiring push. Our dedicated teams work alongside your devs as one extended team.',
    howCards: [
      {
        title: 'One point of contact',
        description:
          'A dedicated lead runs sprints, coordinates the team, and removes blockers so you don’t have to.',
      },
      {
        title: 'You set direction',
        description:
          'You define priorities and outcomes. The team handles the day-to-day execution.',
      },
      {
        title: 'Built to last',
        description:
          'Dedicated teams are structured for reliable, long-term delivery, not just a single sprint.',
      },
    ],
    related: [
      {
        slug: 'staff-augmentation',
        title: 'Staff Augmentation',
        description:
          'Slot senior engineers directly into your existing team to close skill gaps fast.',
      },
      {
        slug: 'software-outsourcing',
        title: 'Software Outsourcing',
        description:
          'Hand off a defined project and let us own delivery from scoping through deployment.',
      },
    ],
  },
  'software-outsourcing': {
    slug: 'software-outsourcing',
    eyebrow: 'Software Outsourcing',
    title: 'Hand off a project.',
    titleAccent: 'Get it delivered.',
    description:
      'Give us a defined project and we’ll own it end-to-end, from scoping through deployment, while keeping you informed at every stage.',
    highlights: ['Full project ownership', 'Clear milestones'],
    ctaLabel: 'Talk About Outsourcing',
    whyEyebrow: 'Why Software Outsourcing',
    whyTitle: 'Ship a project without derailing your roadmap.',
    whyIntro:
      'When a project needs skills you don’t have in-house, or your team simply doesn’t have room for it, outsourcing lets you ship it without pulling focus from everything else.',
    benefits: [
      'Hand off execution without losing visibility',
      'Get a cross-disciplinary team built for the project',
      'Plan around clear scope and milestones',
      'No need to manage day-to-day development',
      'Access skills you don’t have to hire in-house',
      'Ship a defined project without derailing your team’s roadmap',
    ],
    whySupport:
      'We scope the project with you up front, then run the build with regular milestone check-ins, so you always know where things stand.',
    howTitle: 'We own delivery. You stay informed.',
    howIntro:
      'From scoping through deployment, our cross-disciplinary team is accountable for the outcome, with regular updates along the way.',
    howCards: [
      {
        title: 'We own delivery',
        description:
          'From scoping to deployment, our team is accountable for hitting the outcomes we agree on.',
      },
      {
        title: 'You stay informed',
        description:
          'Regular check-ins and milestone reviews keep you in the loop, without day-to-day management.',
      },
      {
        title: 'Right team for the job',
        description:
          'We assemble the mix of engineering, QA, and design your specific project needs.',
      },
    ],
    related: [
      {
        slug: 'dedicated-teams',
        title: 'Dedicated Teams',
        description:
          'Spin up a self-managing squad that owns a specific product or workstream end-to-end.',
      },
      {
        slug: 'staff-augmentation',
        title: 'Staff Augmentation',
        description:
          'Slot senior engineers directly into your existing team to close skill gaps fast.',
      },
    ],
  },
  'ai-transformation': {
    slug: 'ai-transformation',
    eyebrow: 'AI Transformation',
    title: 'Put AI to work',
    titleAccent: 'in your business.',
    description:
      'From automating manual workflows to shipping AI-powered features, we help you find where AI creates real value and build it into your existing systems.',
    highlights: ['Practical, not experimental', 'Fits your existing stack'],
    ctaLabel: 'Talk About AI Transformation',
    whyEyebrow: 'Why AI Transformation',
    whyTitle: 'AI that fits how your business actually works.',
    whyIntro:
      'Most AI initiatives stall because they’re bolted onto a workflow instead of built for it. We start with how your team works, then find where AI genuinely helps.',
    benefits: [
      'Identify where AI actually moves the needle for your business',
      'Automate manual, repetitive workflows',
      'Add AI features to your existing product',
      'Build on your current systems, not a rip-and-replace',
      'Get engineers who ship AI features to production, not just prototypes',
      'Keep a human in the loop where it matters',
    ],
    whySupport:
      'We build with monitoring and guardrails from day one, so AI features hold up once they’re in front of real users.',
    howTitle: 'From workflow to working feature.',
    howIntro:
      'We look at how your team actually works before recommending where automation or AI features fit, then build and ship it into your existing product.',
    howCards: [
      {
        title: 'Start with the workflow',
        description:
          'We map how your team actually works before recommending where AI fits, not the other way around.',
      },
      {
        title: 'Ship, don’t just prototype',
        description:
          'We build AI features that hold up in production, with monitoring and guardrails included.',
      },
      {
        title: 'Stay in control',
        description:
          'You decide where automation fits and where a human should stay in the loop.',
      },
    ],
    related: [
      {
        slug: 'software-outsourcing',
        title: 'Software Outsourcing',
        description:
          'Hand off a defined project and let us own delivery from scoping through deployment.',
      },
      {
        slug: 'staff-augmentation',
        title: 'Staff Augmentation',
        description:
          'Slot senior engineers directly into your existing team to close skill gaps fast.',
      },
    ],
  },
}
