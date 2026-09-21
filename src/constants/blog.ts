export const blogPosts: IBlogPost[] = [
  {
    slug: 'staff-augmentation-vs-dedicated-teams-vs-outsourcing',
    title: 'Staff Augmentation vs. Dedicated Teams vs. Outsourcing: How to Choose',
    excerpt:
      'All three models get you more engineering capacity. The right one depends on how much you want to manage, not just how big the gap is.',
    category: 'Engagement Models',
    date: '2026-08-04',
    readTime: '6 min read',
    content: [
      'Most teams reach for "we need more engineers" as the answer, without stopping to ask what kind of gap they actually have. That distinction matters more than headcount, because it determines which engagement model will actually solve the problem instead of just adding people to it.',
      'Staff augmentation fits when the gap is a skill, not a workstream. Your team has direction and process; it just needs an extra pair of senior hands who can plug into what already exists. The engineer works your hours, joins your standups, and reports to your leads. You keep full management control, which is exactly the point: you already know how to run the work, you just need more capacity to run it with.',
      'Dedicated teams fit when the gap is a whole workstream, not a skill. If you have a product area or initiative that needs to move but nobody on your team has the bandwidth to own it, a dedicated team gives you a self-managing squad with its own lead. You set the priorities; the team runs day-to-day execution. This trades a bit of management control for a lot less management overhead, which is the right trade when your leads are already stretched.',
      'Software outsourcing fits when the gap is a defined project with a clear endpoint. You know what needs to get built, you don’t need it to become a permanent part of your org chart, and you’d rather hand off execution entirely than staff it. This model works best with a well-scoped project: fuzzy requirements tend to produce fuzzy outsourced results.',
      'The practical way to decide: if you can describe the work in terms of "we need someone who knows X," start with staff augmentation. If you’re describing a whole area of ownership, look at a dedicated team. If you’re describing a project with a start and an end, outsourcing is usually the cleanest fit. And none of these are permanent commitments — it’s common to start with augmentation for a single hire and grow into a dedicated team as the workstream grows with it.',
    ],
  },
  {
    slug: 'signs-your-engineering-team-needs-outside-help',
    title: '5 Signs Your Engineering Team Needs Outside Help',
    excerpt:
      'It rarely shows up as a single dramatic moment. It shows up as a slow accumulation of small signals that are easy to explain away individually.',
    category: 'Team Strategy',
    date: '2026-07-18',
    readTime: '5 min read',
    content: [
      'Nobody schedules a meeting titled "we are now understaffed." The signals show up gradually, and each one has a reasonable-sounding explanation on its own. Here are five worth paying attention to together, not just individually.',
      'The roadmap keeps sliding, and the reason changes each time. One quarter it’s a hiring delay, the next it’s a dependency, the next it’s scope creep. When the excuse rotates but the outcome doesn’t, the real constraint is usually capacity, not any one of those specific reasons.',
      'Your best engineers are doing the least interesting version of their job. Senior people end up firefighting, reviewing, and unblocking instead of building, because there’s nobody else to absorb the load. That’s an expensive way to run a team — you’re paying senior rates for junior-shaped work.',
      'A single person has become a single point of failure. If one engineer leaving would meaningfully set back a project, that’s not a resourcing question you can put off — it’s a risk you’re already carrying.',
      'New initiatives keep losing to maintenance. If "keeping the lights on" consistently wins against the roadmap, the team doesn’t have room to grow the product, only to keep it running.',
      'Hiring is underway, but it’s slow, and the gap is now. In-house hiring is usually the right long-term answer, but it can take months. If the work is needed now and the hire is needed later, that’s exactly the gap staff augmentation or a dedicated team is built to close in the meantime.',
    ],
  },
  {
    slug: 'practical-ai-adoption-for-smbs',
    title: 'A Practical Framework for AI Adoption in SMBs',
    excerpt:
      'Most AI initiatives fail for a boring reason: they were bolted onto a workflow instead of built for it. Here’s a simpler way to start.',
    category: 'AI & Automation',
    date: '2026-06-27',
    readTime: '7 min read',
    content: [
      'For a smaller business, the hardest part of AI adoption usually isn’t the technology — it’s deciding where to point it. Here’s a framework that avoids the two most common failure modes: chasing AI for its own sake, and never starting because the "right" use case never feels obvious enough.',
      'Start with the workflow, not the model. Before evaluating any tool, map out where your team spends time on repetitive, well-defined work: summarizing documents, triaging support tickets, drafting first-pass copy, reconciling data between systems. These are the workflows where AI tends to produce reliable value, because the task is bounded and the output is easy to check.',
      'Separate "automate" from "assist." Some tasks can be fully automated because a wrong answer is low-stakes and easy to catch. Others should stay human-in-the-loop, where AI drafts and a person approves, especially anywhere a mistake would be costly or hard to reverse. Deciding this up front prevents both over-trusting a system and under-using one.',
      'Prototype against real data, not a demo. A workflow that looks great in a vendor demo can fall apart against your actual, messy data. Test early with real inputs from your business, not the clean examples in a sales deck.',
      'Build in monitoring before you scale. The gap between a working prototype and a production feature is almost always guardrails: logging, review queues, and a clear way to catch and correct mistakes. Skipping this step is why so many AI pilots never make it past the pilot.',
      'Treat the first project as a template, not a one-off. The goal of the first AI initiative isn’t just the initiative itself — it’s learning how your team evaluates, ships, and monitors AI features, so the second one is faster than the first.',
    ],
  },
  {
    slug: 'what-makes-remote-teams-actually-work',
    title: 'What Actually Makes Nearshore and Remote Teams Work',
    excerpt:
      'Timezone overlap gets all the attention. The teams that actually work well together are usually solving a different problem.',
    category: 'Team Strategy',
    date: '2026-05-30',
    readTime: '5 min read',
    content: [
      'Timezone alignment matters, but it’s table stakes, not the differentiator. Plenty of teams share working hours and still struggle to collaborate well. What separates the teams that genuinely work well together comes down to a few less obvious habits.',
      'Decisions live in writing, not in someone’s head. When a decision is only ever discussed verbally, it becomes invisible to anyone who wasn’t in the room, remote or not. Teams that collaborate well default to writing decisions down, even briefly, so context doesn’t depend on who happened to be online at the time.',
      'Async is the default; meetings are the exception. If every question requires a live conversation to resolve, distributed collaboration will always feel slow. The smoother teams reserve meetings for things that genuinely need real-time discussion, and handle everything else through clear, well-documented async updates.',
      'Onboarding is treated as a real process, not an afterthought. Engineers who ramp up quickly usually aren’t smarter — they joined a team with a clear, documented path to productivity: what the codebase looks like, how decisions get made, who owns what. Teams that skip this step pay for it in slow ramp-up, every time.',
      'Ownership is explicit. Distributed teams that struggle often have quietly ambiguous ownership: everyone assumes someone else is responsible for a given piece. The teams that avoid this make ownership explicit, even for small things, so nothing falls through the cracks between people who don’t share a hallway.',
    ],
  },
  {
    slug: 'how-we-vet-engineers',
    title: 'How We Vet Engineers, and Why It Matters More Than You’d Think',
    excerpt:
      'A resume tells you what someone has done. It doesn’t tell you how they’ll perform on your team, under your constraints, on your codebase.',
    category: 'Our Process',
    date: '2026-05-09',
    readTime: '4 min read',
    content: [
      'Technical interviews get a bad reputation because so many of them test the wrong thing: trivia, whiteboard puzzles, or problems that have nothing to do with the work someone will actually do. A vetting process is only as good as how closely it resembles the real job.',
      'We look for three things, in this order. First, technical depth: can this person reason through a real, messy problem, not just recite a textbook algorithm. Second, communication: can they explain their thinking clearly enough that a remote teammate can follow it without extra back-and-forth. Third, fit: do they collaborate in a way that matches how the team actually works, not just how they say they work.',
      'Communication gets underweighted almost everywhere, and it shouldn’t. On a distributed team, an engineer who writes a clear pull request description or flags a blocker early is often more valuable than one who’s marginally faster but leaves everyone else guessing.',
      'The bar isn’t "can this person pass an interview." It’s "would this person still be a strong addition to the team three months from now, once the interview polish has worn off and the real, unglamorous work has started." That’s a much harder bar to hit, and it’s the one that actually predicts whether an engagement works out.',
    ],
  },
]

export const getBlogPost = (slug: string): IBlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug)
