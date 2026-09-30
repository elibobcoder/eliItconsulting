import { stockPhotos } from './stock-photos'
import { generatedBlogPosts } from './blog-posts-generated'

const handwrittenBlogPosts: IBlogPost[] = [
  {
    slug: 'staff-augmentation-vs-dedicated-teams-vs-outsourcing',
    title: 'Staff Augmentation vs. Dedicated Teams vs. Outsourcing: How to Choose',
    excerpt:
      'All three models get you more engineering capacity. The right one depends on how much you want to manage, not just how big the gap is.',
    category: 'Engagement Models',
    date: '2026-08-04',
    readTime: '3 min read',
    coverImage: stockPhotos.contractSigningPen,
    content: [
      'Most teams reach for "we need more engineers" as the answer, without stopping to ask what kind of gap they actually have.',
      'Staff augmentation fits when the gap is a skill, not a workstream.',
      'Dedicated teams fit when the gap is a whole workstream, not a skill.',
      'Software outsourcing fits when the gap is a defined project with a clear endpoint.',
      'None of these are permanent commitments — it’s common to start with augmentation and grow into a dedicated team.',
    ],
    sections: [
      {
        id: 'the-short-answer',
        heading: 'The short answer',
        paragraphs: [
          'Most teams reach for "we need more engineers" as the answer, without stopping to ask what kind of gap they actually have. That distinction matters more than headcount, because it determines which engagement model will actually solve the problem instead of just adding people to it.',
          'Staff augmentation, dedicated teams, and outsourcing all add capacity. What separates them isn’t skill level or cost — it’s how much day-to-day management you keep, and how permanent the arrangement is meant to be.',
        ],
      },
      {
        id: 'when-each-model-fits',
        heading: 'When each model actually fits',
        paragraphs: [
          'Staff augmentation fits when the gap is a skill, not a workstream. Your team has direction and process; it just needs an extra pair of senior hands who can plug into what already exists. The engineer works your hours, joins your standups, and reports to your leads. You keep full management control, which is exactly the point: you already know how to run the work, you just need more capacity to run it with.',
          'Dedicated teams fit when the gap is a whole workstream, not a skill. If you have a product area or initiative that needs to move but nobody on your team has the bandwidth to own it, a dedicated team gives you a self-managing squad with its own lead. You set the priorities; the team runs day-to-day execution. This trades a bit of management control for a lot less management overhead, which is the right trade when your leads are already stretched.',
          'Software outsourcing fits when the gap is a defined project with a clear endpoint. You know what needs to get built, you don’t need it to become a permanent part of your org chart, and you’d rather hand off execution entirely than staff it. This model works best with a well-scoped project: fuzzy requirements tend to produce fuzzy outsourced results.',
        ],
        diagramId: 'engagement-models-comparison',
      },
      {
        id: 'getting-it-wrong',
        heading: 'What getting it wrong actually looks like',
        paragraphs: [
          'The most common mismatch we see is a team that has a whole-workstream problem but hires staff augmentation to solve it. A single augmented engineer, however senior, can’t own a product area on their own — they need direction, priorities, and someone deciding what "done" looks like, and if your team doesn’t have spare capacity to provide that, the engagement stalls regardless of how strong the individual hire is.',
          'The reverse mismatch is just as common: bringing in a full dedicated team for what’s really a single skill gap. You end up paying for a team lead and process overhead you don’t need, managing a squad when what you actually wanted was one more senior engineer plugged into your existing process.',
          'Both mistakes come from skipping the same diagnostic step — describing the gap in concrete terms before picking a model, rather than picking a model and then trying to make the gap fit it.',
        ],
      },
      {
        id: 'how-to-decide',
        heading: 'How to decide, in practice',
        paragraphs: [
          'The practical way to decide: if you can describe the work in terms of "we need someone who knows X," start with staff augmentation. If you’re describing a whole area of ownership, look at a dedicated team. If you’re describing a project with a start and an end, outsourcing is usually the cleanest fit.',
          'None of these are permanent commitments. It’s common to start with augmentation for a single hire and grow into a dedicated team as the workstream grows with it — the model should follow the shape of the problem, not the other way around.',
        ],
      },
    ],
  },
  {
    slug: 'signs-your-engineering-team-needs-outside-help',
    title: '5 Signs Your Engineering Team Needs Outside Help',
    excerpt:
      'It rarely shows up as a single dramatic moment. It shows up as a slow accumulation of small signals that are easy to explain away individually.',
    category: 'Team Strategy',
    date: '2026-07-18',
    readTime: '4 min read',
    coverImage: stockPhotos.burnoutHeadInHands,
    content: [
      'Nobody schedules a meeting titled "we are now understaffed." The signals show up gradually, and each one has a reasonable-sounding explanation on its own.',
      'The roadmap keeps sliding, and the reason changes each time.',
      'Your best engineers are doing the least interesting version of their job.',
      'A single person has become a single point of failure.',
      'New initiatives keep losing to maintenance.',
      'Hiring is underway, but it’s slow, and the gap is now.',
    ],
    sections: [
      {
        id: 'not-one-dramatic-moment',
        heading: 'It’s rarely one dramatic moment',
        paragraphs: [
          'Nobody schedules a meeting titled "we are now understaffed." The signals show up gradually, and each one has a reasonable-sounding explanation on its own — a rough quarter, a key person out sick, a project that turned out bigger than scoped. Taken individually, none of them look like a capacity problem. Taken together, over two or three quarters, they usually are one.',
          'The five signals below are worth tracking as a set, not evaluating one at a time. A team can explain away any single one of them and still be right about that specific explanation — the pattern is what actually tells you something, and the pattern is easy to miss when you\'re inside it, reacting to whichever fire is loudest this week.',
        ],
      },
      {
        id: 'sign-one-roadmap-slides',
        heading: 'Sign 1: The roadmap keeps sliding, for a different reason each time',
        paragraphs: [
          'One quarter it\'s a hiring delay. The next it\'s a dependency on another team. The one after that it\'s scope creep on a project that "turned out to be bigger than we thought." Each explanation is plausible in isolation, and each one is probably even true. The tell isn\'t any single slip — it\'s that the excuse rotates while the outcome stays the same.',
          'When the underlying constraint is genuinely one-off — a bad quarter, a specific dependency — the next quarter looks different. When it\'s capacity, the specific story changes but the shape doesn\'t: commitments made with good intentions, missed by roughly the same margin, for a reason that always sounds sufficient on its own. That consistency, more than any individual miss, is the actual signal.',
        ],
      },
      {
        id: 'sign-two-best-engineers-firefighting',
        heading: 'Sign 2: Your best engineers are doing the least interesting version of their job',
        paragraphs: [
          'Senior people end up firefighting, reviewing, and unblocking instead of building, because there\'s nobody else on the team with the context to absorb that load. It happens gradually — one urgent fix here, one blocked junior engineer there — until the people you\'re paying the most to build things spend most of their week keeping things from breaking instead.',
          'This is an expensive way to run a team even before you account for morale. You\'re paying senior rates for junior-shaped work, and the actual senior-shaped work — architecture decisions, mentoring, the things only they can do — happens in whatever time is left over, which is usually not much. A 2025 industry survey of over a thousand engineers found they spend only around 16% of a typical week on the rewarding, feature-building work they were hired for; the rest goes to exactly this kind of unplanned maintenance and firefighting.',
        ],
        diagramId: 'engineer-time-allocation',
      },
      {
        id: 'sign-three-single-point-of-failure',
        heading: 'Sign 3: A single person has become a single point of failure',
        paragraphs: [
          'If one engineer leaving would meaningfully set back a project — not just slow it down, but actually put a deadline or a feature at real risk — that\'s not a resourcing question you can put off until it becomes urgent. It\'s a risk you\'re already carrying today, whether or not anything has gone wrong yet.',
          'This usually happens quietly, through good intentions: one person picks up a hard problem because they\'re available, becomes the de facto expert because nobody else has the bandwidth to build the same context, and six months later is the only person who can safely touch that part of the system. Nobody decided to create that dependency. It accumulated the same way the other four signs do.',
        ],
      },
      {
        id: 'sign-four-maintenance-wins',
        heading: 'Sign 4: New initiatives keep losing to maintenance',
        paragraphs: [
          'If "keeping the lights on" consistently wins against the roadmap — bug fixes and small requests always jump the queue ahead of the feature that was supposed to ship this quarter — the team doesn\'t have room to grow the product. It only has room to keep it running, which is a very different job than the one most engineering teams are actually there to do.',
          'This is the sign leadership notices last, because it doesn\'t look like a failure. Nothing is broken. The team is busy, velocity metrics look reasonable, standups are full of real updates. It just quietly stops being about growth, one deprioritized initiative at a time, until someone asks why the roadmap from a year ago looks almost identical to the roadmap now.',
        ],
      },
      {
        id: 'sign-five-hiring-is-too-slow',
        heading: 'Sign 5: Hiring is underway, but it\'s slow, and the gap is now',
        paragraphs: [
          'In-house hiring is usually the right long-term answer, and nothing here is an argument against building your own team. But hiring well takes months — sourcing, interviewing, an offer, notice periods, ramp-up — and the gap it\'s meant to close is often needed well before any of that finishes.',
          'That timing mismatch is exactly the gap staff augmentation or a dedicated team is built to close: bridge capacity while permanent hiring runs its normal, unrushed course, rather than compressing the hiring process to fill the gap faster and living with a worse hire because of it.',
        ],
      },
      {
        id: 'what-to-actually-do',
        heading: 'What to actually do once you\'ve spotted the pattern',
        paragraphs: [
          'None of these five signs is a crisis on its own, which is exactly why they\'re easy to individually explain away. The useful exercise is a blunt one: pull up the last two quarters and check how many of the five actually apply right now, not how many applied once. Two or three, consistently, is the pattern worth acting on — not waiting for a sixth, more dramatic signal that may not come until something has already broken.',
        ],
      },
    ],
  },
  {
    slug: 'practical-ai-adoption-for-smbs',
    title: 'A Practical Framework for AI Adoption in SMBs',
    excerpt:
      'Most AI initiatives fail for a boring reason: they were bolted onto a workflow instead of built for it. Here’s a simpler way to start.',
    category: 'AI & Automation',
    date: '2026-06-27',
    readTime: '15 min read',
    coverImage: stockPhotos.aiAbstract,
    content: [
      'For a smaller business, the hardest part of AI adoption usually isn’t the technology — it’s deciding where to point it.',
      'Start with the workflow, not the model.',
      'Separate "automate" from "assist."',
      'Prototype against real data, not a demo.',
      'Build in monitoring before you scale.',
      'Treat the first project as a template, not a one-off.',
    ],
    sections: [
      {
        id: 'why-adoption-fails',
        heading: 'Why AI adoption fails for a boring reason',
        paragraphs: [
          'For a smaller business, the hardest part of AI adoption usually isn’t the technology — it’s deciding where to point it. Most AI initiatives fail for a boring reason: they were bolted onto a workflow instead of built for it.',
          'The pattern is familiar. A team reads about what a competitor is doing, picks a tool because it’s popular rather than because it fits a specific bottleneck, and rolls it out without a clear definition of what success looks like. Six months later, adoption has quietly stalled, the tool is used by one enthusiastic early adopter and nobody else, and the initiative gets remembered as "the AI thing that didn’t really work."',
          'None of that is really about the technology failing. It’s about skipping the unglamorous groundwork that makes any new tool stick: understanding the workflow well enough to know exactly where it should slot in, and building enough trust in the output that people actually rely on it instead of quietly double-checking everything by hand anyway.',
          'This is a framework for avoiding both of the common failure modes: chasing AI for its own sake, and never starting because the "right" use case never feels obvious enough.',
        ],
      },
      {
        id: 'start-with-the-workflow',
        heading: 'Start with the workflow, not the model',
        paragraphs: [
          'Before evaluating any tool, map out where your team actually spends time on repetitive, well-defined work: summarizing documents, triaging support tickets, drafting first-pass copy, reconciling data between systems, transcribing and structuring call notes. These are the workflows where AI tends to produce reliable value, because the task is bounded and the output is easy to check.',
          'This is the opposite of how most teams start. The usual approach is "what can this new model do," which leads to interesting demos and forgettable pilots. The better question is "where does my team lose the most hours to repetitive, low-judgment work," because that’s where a modest accuracy improvement translates directly into hours back, regardless of which underlying model is doing the work.',
          'A useful exercise: for one week, have each person on the team log any task that took more than ten minutes and felt mechanical rather than judgment-heavy. Patterns show up fast — usually two or three tasks account for a disproportionate share of the logged time, and those are your candidates, not whatever the loudest AI headline that week happened to be about.',
        ],
      },
      {
        id: 'automate-vs-assist',
        heading: 'Separate "automate" from "assist"',
        paragraphs: [
          'Some tasks can be fully automated because a wrong answer is low-stakes and easy to catch — categorizing an inbound lead, drafting a first-pass summary that a human will still read before acting on it, flagging duplicate records for review. Others should stay human-in-the-loop, where AI drafts and a person approves, especially anywhere a mistake would be costly or hard to reverse: anything touching a customer commitment, a financial figure, or a compliance-sensitive document.',
          'Deciding this up front prevents both failure modes teams run into. Over-trusting a system means an error propagates before anyone notices — a miscategorized support ticket that never gets escalated, a summary that drops a crucial caveat. Under-using one means a perfectly capable assistant gets treated like it needs sign-off on everything, which erases most of the time savings that justified building it in the first place.',
          'A simple test: ask what the actual cost of a wrong output is, and how quickly a wrong output would get noticed. Low cost and fast to notice — automate it. High cost or slow to notice — keep a human reviewing the output before it goes anywhere. This single question resolves most of the automate-versus-assist debates that otherwise turn into open-ended arguments about how much to "trust the AI."',
        ],
        diagramId: 'automate-assist-matrix',
      },
      {
        id: 'prototype-against-real-data',
        heading: 'Prototype against real data, not a demo',
        paragraphs: [
          'A workflow that looks great in a vendor demo can fall apart against your actual, messy data. Demos are built on clean example inputs precisely because they’re designed to show the tool at its best. Your support tickets, your contracts, your customer records are not clean — they have typos, inconsistent formatting, edge cases that have accumulated for years, and context that lives in someone’s head rather than in the data itself.',
          'Test early with real inputs from your business, not the examples in a sales deck. Pull twenty to thirty real cases — actual tickets, actual documents, actual records — including a few you already know are messy or ambiguous, and run the prototype against those specifically. If it handles the hard cases reasonably, the easy cases will take care of themselves. If it only handles the easy cases, you’ve learned that before committing budget and rollout time to it, not after.',
          'This step is also where you calibrate expectations for the team. Showing people a prototype working against their actual data — including its actual mistakes — builds more trust than a polished demo ever will, because it’s honest about where the tool needs a human to catch something.',
        ],
      },
      {
        id: 'monitoring-before-scale',
        heading: 'Build in monitoring before you scale',
        paragraphs: [
          'The gap between a working prototype and a production feature is almost always guardrails: logging, review queues, and a clear way to catch and correct mistakes. Skipping this step is why so many AI pilots never make it past the pilot — not because the underlying capability was wrong, but because nobody could confidently say whether it was working well at scale, so it never got trusted with more volume.',
          'At minimum, this means logging every input and output somewhere reviewable, sampling a percentage of outputs for manual spot-checks on a regular cadence, and having an explicit, easy path for anyone on the team to flag a bad result. The point isn’t to catch every error before rollout — it’s to make errors visible quickly after rollout, so a small problem gets fixed before it becomes a pattern nobody noticed.',
          'This is also where a lot of the actual return on investment gets realized. Monitoring data tells you which parts of a workflow the tool handles well enough to trust fully, and which parts still need a human check — which is exactly the information you need to expand the automation footprint responsibly over time, instead of guessing.',
          'One detail worth getting right early: monitoring should be cheap enough that nobody is tempted to skip it once the initial excitement fades. A review process that takes someone thirty minutes every morning will quietly stop happening within a month. A review process that surfaces the ten most uncertain outputs from the previous day in a two-minute Slack digest is the kind of thing that actually survives past the pilot.',
        ],
      },
      {
        id: 'build-vs-buy',
        heading: 'A note on tooling: build vs. buy',
        paragraphs: [
          'For most of the workflows worth automating first, buying is the right call, not building. A general-purpose AI tool wired into your existing systems can usually handle document summarization, ticket triage, or first-pass drafting well enough, and building a custom pipeline for a problem an off-the-shelf tool already solves is a good way to spend three months of engineering time on infrastructure instead of on the actual bottleneck.',
          'Building starts to make sense once you have a workflow that’s proven valuable with an off-the-shelf tool, but where you’ve hit a specific, well-understood limitation — a data format the tool doesn’t handle well, a latency requirement it can’t meet, a volume that makes the per-call pricing impractical. At that point you have something more valuable than a hypothesis: you have evidence of exactly what a custom solution needs to do differently, which makes the build both cheaper and more likely to succeed.',
          'The teams that get this backwards tend to build first, because building feels like progress and buying feels like a shortcut. In practice it’s the opposite: buying first gets you a working version of the workflow in days instead of months, and tells you whether the workflow was worth solving at all before you’ve committed real engineering time to it.',
        ],
      },
      {
        id: 'objections',
        heading: 'Objections we hear, and how to answer them',
        paragraphs: [
          '"Our data is too messy for this to work." This is almost always true at first glance and rarely true after the prototype-against-real-data step. Messy data is a reason to test early against real examples, not a reason to skip the project — and often the automation itself, done well, becomes the forcing function that finally gets a long-ignored data-quality problem fixed.',
          '"We tried something like this before and it didn’t stick." Worth asking specifically what happened. In our experience, stalled pilots almost always trace back to one of the mistakes covered above: no monitoring, so nobody trusted the output at scale; a use case picked for novelty rather than time saved; or a rollout to the whole team at once instead of a small pilot group that could give fast, specific feedback. The framework here exists largely to avoid repeating exactly that pattern.',
          '"This is going to replace people’s jobs." For the categories of work this framework targets — repetitive, well-defined, bounded tasks — the realistic outcome is less time spent on mechanical work, not fewer roles. The teams that get the most value tend to be explicit about this with their staff early, framing the project around removing the least interesting part of someone’s job rather than the job itself, which also happens to be the framing that gets the most honest, useful feedback during the pilot.',
          '"We don’t have anyone technical enough to own this." Owning a well-scoped AI workflow — the kind this framework produces — requires less specialized expertise than people expect. The heaviest lifting is the diagnostic work in the first two weeks: understanding the workflow, defining what a wrong answer costs, and setting up a simple review process. Most operationally-minded team leads can own that with light technical support, without needing to become AI specialists themselves.',
        ],
      },
      {
        id: 'six-months-in',
        heading: 'What good looks like six months in',
        paragraphs: [
          'A useful way to check whether a first project actually worked: six months after launch, is anyone still manually double-checking every single output, or has trust settled into a normal, occasional spot-check rhythm? If everyone is still checking everything, either the tool isn’t performing well enough or the monitoring never gave the team enough confidence to relax — both are worth investigating directly rather than assuming the project simply needs more time.',
          'A second signal: has anyone asked to extend the same approach to a second workflow without being prompted? Organic requests for a second project are the clearest sign that the first one built genuine trust rather than just checking a box, and they’re usually a better indicator of success than any efficiency metric you tracked during the pilot.',
          'The metric that matters least, ironically, is the initial efficiency number everyone gets excited about during the pilot. A tool that saves forty percent of the time on a task but that nobody trusts enough to use consistently delivers less real value than one that saves twenty percent and gets used every single day without a second thought.',
        ],
      },
      {
        id: 'first-project-as-template',
        heading: 'Treat the first project as a template, not a one-off',
        paragraphs: [
          'The goal of the first AI initiative isn’t just the initiative itself — it’s learning how your team evaluates, ships, and monitors AI features, so the second one is faster than the first. Teams that treat their first project as a one-off end up re-learning the same lessons about data quality, review workflows, and rollout pacing every single time they start something new.',
          'Document what worked: how you identified the workflow, how you tested against real data, what the review cadence looked like, what actually moved the needle on adoption once it was live. This becomes the internal playbook for every project after it, and it’s usually more valuable than the first project’s direct output, because it compounds.',
          'It’s also worth documenting what didn’t work. The failure modes — a use case that seemed promising but turned out to be too ambiguous, a monitoring gap that let an error run longer than it should have — are exactly the mistakes a documented playbook lets the second and third project skip entirely.',
        ],
      },
      {
        id: 'ninety-day-rollout',
        heading: 'A realistic 90-day rollout',
        paragraphs: [
          'Frameworks are easier to apply with a concrete timeline attached, so here’s a realistic shape for a first project, start to finish.',
          'Weeks 1-2: identify the workflow. Run the time-tracking exercise, interview the two or three people closest to the candidate workflows, and pick one clear bottleneck — resist the urge to solve two problems at once on the first attempt.',
          'Weeks 3-5: build and test a narrow prototype against real, messy data, including the edge cases you already know are painful. This is where you decide the automate-versus-assist split for this specific workflow, based on the actual cost of a wrong output.',
          'Weeks 6-8: pilot with a small group, with monitoring and a flagging path in place from day one. Keep the pilot group small enough that you can review every flagged output personally during this stretch — the goal is confidence, not speed, at this stage.',
          'Weeks 9-12: expand gradually based on what the monitoring data actually shows, not based on how the pilot felt. Widen the rollout to the rest of the team, document the playbook, and identify the second candidate workflow using the same time-tracking exercise that surfaced the first one.',
          'Ninety days is enough time to go from "we should probably do something with AI" to a working feature the team actually trusts and uses daily — and, just as importantly, a repeatable process for doing it again with the next workflow.',
        ],
      },
    ],
  },
  {
    slug: 'what-makes-remote-teams-actually-work',
    title: 'What Actually Makes Nearshore and Remote Teams Work',
    excerpt:
      'Timezone overlap gets all the attention. The teams that actually work well together are usually solving a different problem.',
    category: 'Team Strategy',
    date: '2026-05-30',
    readTime: '4 min read',
    coverImage: stockPhotos.remoteWork,
    content: [
      'Timezone alignment matters, but it’s table stakes, not the differentiator.',
      'Decisions live in writing, not in someone’s head.',
      'Async is the default; meetings are the exception.',
      'Onboarding is treated as a real process, not an afterthought.',
      'Ownership is explicit.',
    ],
    sections: [
      {
        id: 'table-stakes-not-differentiator',
        heading: 'Timezone overlap is table stakes, not the differentiator',
        paragraphs: [
          'Timezone alignment matters, but it\'s table stakes, not the differentiator. Plenty of teams share working hours and still struggle to collaborate well, while some of the smoothest-running distributed teams we\'ve worked with have almost no overlap at all. What separates the teams that genuinely work well together comes down to a few less obvious habits — none of which have anything to do with what time zone anyone is in.',
          'That matters because most companies solve for the wrong variable first. They optimize the hiring search for overlap hours, assume the collaboration problem is solved once the calendars line up, and then are surprised when a fully-overlapping team still struggles to ship. The habits below are what actually predict whether a distributed team works, timezone overlap or not.',
        ],
      },
      {
        id: 'decisions-live-in-writing',
        heading: 'Decisions live in writing, not in someone\'s head',
        paragraphs: [
          'When a decision is only ever discussed verbally, it becomes invisible to anyone who wasn\'t in the room — remote or not. Teams that collaborate well default to writing decisions down, even briefly: what was decided, why, and who made the call. That habit costs a few extra minutes at decision time and saves far more than that the first time someone asks "wait, why did we do it this way" three months later.',
          'This compounds in ways that aren\'t obvious until you\'ve felt the absence of it. A written decision trail reduces duplicate questions, because the answer already exists somewhere searchable instead of living only in whoever happened to be in the meeting. It also means a new hire can reconstruct the reasoning behind a decision without having to interrupt someone\'s day to ask — the context survives the people who made it.',
        ],
      },
      {
        id: 'async-is-the-default',
        heading: 'Async is the default; meetings are the exception',
        paragraphs: [
          'If every question requires a live conversation to resolve, distributed collaboration will always feel slow, because you\'re stacking timezone friction on top of the normal delay of scheduling a meeting. The smoother teams reserve meetings for things that genuinely need real-time discussion — a genuinely ambiguous tradeoff, a disagreement that\'s not resolving in writing — and handle everything else through clear, well-documented async updates.',
          'The gap this closes is bigger than it sounds. Teams that default to async regularly resolve decisions in a couple of days that a meeting-dependent team would have taken the better part of a week to get to, simply because async doesn\'t wait for six calendars to align on a free half-hour. The slowest part of most decisions isn\'t the thinking — it\'s the scheduling.',
        ],
        diagramId: 'async-decision-speed',
      },
      {
        id: 'onboarding-is-a-real-process',
        heading: 'Onboarding is treated as a real process, not an afterthought',
        paragraphs: [
          'Engineers who ramp up quickly usually aren\'t smarter — they joined a team with a clear, documented path to productivity: what the codebase looks like, how decisions get made, who owns what, and where to find the answer before resorting to interrupting someone. Teams that skip this step pay for it in slow ramp-up, every single time, and usually blame the individual hire rather than the missing process.',
          'A real onboarding process isn\'t a slide deck someone half-reads in the first hour. It\'s the same living decision record and ownership map the rest of the team already relies on day to day, handed to a new person on day one instead of being reconstructed by them, piecemeal, over their first two frustrating months.',
        ],
      },
      {
        id: 'ownership-is-explicit',
        heading: 'Ownership is explicit',
        paragraphs: [
          'Distributed teams that struggle often have quietly ambiguous ownership: everyone assumes someone else is responsible for a given piece, and nobody notices the gap until something falls through it. This is a distributed-team problem specifically because in person, ambiguous ownership tends to get resolved informally — someone walks over and just asks, or overhears the right conversation. Remote, that informal resolution mechanism doesn\'t exist by default.',
          'The teams that avoid this make ownership explicit, even for small, unglamorous pieces of the system that nobody would think to claim credit for. It feels like unnecessary overhead until the first time it prevents something from sitting unowned for three weeks because everyone assumed it was someone else\'s job.',
        ],
      },
    ],
  },
  {
    slug: 'how-we-vet-engineers',
    title: 'How We Vet Engineers, and Why It Matters More Than You’d Think',
    excerpt:
      'A resume tells you what someone has done. It doesn’t tell you how they’ll perform on your team, under your constraints, on your codebase.',
    category: 'Our Process',
    date: '2026-05-09',
    readTime: '8 min read',
    coverImage: stockPhotos.handshakeInterview,
    content: [
      'Technical interviews get a bad reputation because so many of them test the wrong thing.',
      'We look for three things, in this order: technical depth, communication, and fit.',
      'Communication gets underweighted almost everywhere, and it shouldn’t.',
      'The bar isn’t "can this person pass an interview." It’s whether they’d still be a strong addition three months in.',
      'In practice, this means a longer process than most agencies run, and saying no more often than a faster process would.',
    ],
    sections: [
      {
        id: 'wrong-thing',
        heading: 'Why most technical interviews test the wrong thing',
        paragraphs: [
          'Technical interviews get a bad reputation because so many of them test the wrong thing: trivia, whiteboard puzzles, or problems that have nothing to do with the work someone will actually do. A vetting process is only as good as how closely it resembles the real job.',
          'We’ve run engineering vetting for client placements since 2019, and the biggest lesson from six years of doing it is that a resume tells you what someone has done. It doesn’t tell you how they’ll perform on your team, under your constraints, on your codebase. Anyone can prepare a rehearsed answer for a generic algorithm question. Far fewer people can walk you through a genuinely messy, ambiguous problem and make their reasoning legible to someone else.',
          'So the first design decision in any vetting process isn’t "what questions do we ask" — it’s "what does this process need to predict." Ours is built to predict one thing: will this person still be a strong addition to the team three months in, once the interview polish has worn off.',
        ],
      },
      {
        id: 'three-things',
        heading: 'The three things we actually evaluate',
        paragraphs: [
          'We look for three things, in this order, and the order is deliberate.',
          'First, technical depth: can this person reason through a real, messy problem, not just recite a textbook algorithm. We give candidates problems close to the kind of work they’d actually do — debugging an unfamiliar codebase, extending a feature with incomplete requirements, reviewing a pull request that has a subtle but real issue in it. The goal isn’t to trip anyone up. It’s to see how they think when the answer isn’t obvious.',
          'Second, communication: can they explain their thinking clearly enough that a remote teammate can follow it without extra back-and-forth. This gets tested throughout the process, not in a single dedicated question — how they describe their approach, how they respond when we push back on a decision, how they write up a summary afterward.',
          'Third, fit: do they collaborate in a way that matches how the team actually works, not just how they say they work. This is the hardest of the three to evaluate honestly, because almost everyone describes themselves as a good collaborator. We look for specifics instead of self-description — concrete examples of a disagreement they navigated, a handoff they managed, a time they were wrong and changed course.',
        ],
        diagramId: 'vetting-order',
      },
      {
        id: 'communication-underweighted',
        heading: 'Why communication is underweighted everywhere else',
        paragraphs: [
          'Communication gets underweighted almost everywhere, and it shouldn’t. On a distributed team, an engineer who writes a clear pull request description or flags a blocker early is often more valuable than one who’s marginally faster but leaves everyone else guessing.',
          'This isn’t a soft skill in the sense of being optional — it’s an operational multiplier. A senior engineer who can’t communicate clearly generates rework for everyone downstream: reviewers who have to reverse-engineer intent, teammates who build on a misunderstood assumption, product managers who get a status update that doesn’t actually answer the question they asked. None of that shows up in a coding score, and all of it shows up in delivery timelines.',
          'So we test for it directly instead of assuming it’ll show up as a byproduct of technical strength. A candidate who solves a problem correctly but explains it in a way that would confuse a teammate gets flagged just as seriously as one who gets the technical answer wrong.',
        ],
      },
      {
        id: 'the-real-bar',
        heading: 'What the bar really is',
        paragraphs: [
          'The bar isn’t "can this person pass an interview." It’s "would this person still be a strong addition to the team three months from now, once the interview polish has worn off and the real, unglamorous work has started." That’s a much harder bar to hit, and it’s the one that actually predicts whether an engagement works out.',
          'It also means the process has to account for what happens after week one. A strong first impression is necessary but not sufficient — plenty of candidates interview well and then struggle once the initial structure and attention falls away. We try to simulate a little of that pressure during vetting: longer, less-scripted working sessions instead of short scripted ones, follow-up questions that require defending an earlier decision rather than a fresh unrelated one.',
        ],
      },
      {
        id: 'senior-vs-junior',
        heading: 'How this changes for senior vs. junior hires',
        paragraphs: [
          'The three criteria stay the same across seniority levels, but the bar for each one shifts. For a senior hire, technical depth means we’re looking for judgment under ambiguity — can they scope a fuzzy problem themselves, not just solve one that’s already been scoped for them. For a junior or mid-level hire, we’re evaluating trajectory more than polish: how quickly they incorporate feedback during the process itself is often a better signal than how clean their first answer was.',
          'Fit also means something different at each level. A senior hire needs to fit into how the team makes decisions, because they’ll be making some of those decisions themselves. A junior hire needs to fit into how the team gives feedback and mentors, because a mismatch there shows up as slow ramp-up rather than a bad first ninety days.',
          'We calibrate the process itself accordingly. Senior candidates get more open-ended, less-scripted problems, because the whole point is to see how they impose structure on ambiguity. Junior candidates get a bit more scaffolding, because at that stage we’re testing for learning speed and communication more than independent judgment.',
        ],
      },
      {
        id: 'common-mistakes',
        heading: 'Vetting mistakes we see other processes make',
        paragraphs: [
          'A few patterns show up repeatedly when we take over an engagement that started somewhere else. The most common is over-indexing on a single, high-pressure technical round and treating it as the whole signal — which rewards people who interview well under artificial pressure, not necessarily people who perform well in normal working conditions.',
          'A close second is skipping any evaluation of how a candidate handles being wrong. Almost every real vetting scenario eventually involves pushing back on a candidate’s first answer to see how they respond — do they defend it reflexively, or do they actually reconsider. Processes that only ask for a single correct answer never surface this, and it’s one of the strongest predictors of how someone behaves in code review six months into a real engagement.',
          'The third is treating the reference check as a formality instead of a real part of the process. A five-minute call that just confirms dates of employment tells you almost nothing. A structured conversation about how someone actually worked — what they were like under a tight deadline, how they handled a disagreement — routinely surfaces things a technical interview never would.',
        ],
      },
      {
        id: 'in-practice',
        heading: 'What this looks like in a real engagement',
        paragraphs: [
          'In practice, this shows up as a longer process than most agencies run, and that’s intentional. A rushed vetting process optimizes for filling a seat quickly. Ours optimizes for the client not having to re-run this process again in three months because the placement didn’t work out.',
          'It also means we say no more often than a faster process would. Not every technically strong candidate is a good fit for every team’s specific mix of pace, structure, and communication style — and placing someone who’s strong on paper but wrong for the team creates more disruption than leaving the seat open a little longer.',
          'None of this makes the process slower for its own sake. Every extra step exists to answer a specific question we’ve learned actually predicts outcome, and we cut anything that doesn’t. The goal was never a longer interview — it was a shorter list of placements that don’t work out.',
        ],
      },
    ],
  },
  {
    slug: 'first-30-days-of-a-dedicated-team',
    title: 'The First 30 Days of a Dedicated Team, Week by Week',
    excerpt:
      'The instinct is to get a new team shipping on day one. The teams that ramp fastest are almost always the ones that resist that instinct.',
    category: 'Our Process',
    date: '2026-09-24',
    readTime: '6 min read',
    coverImage: stockPhotos.teamCollaboration,
    content: [
      'The instinct, on both sides, is to get a new dedicated team shipping code on day one. That instinct is almost always wrong, and acting on it is the single biggest predictor of a slow first quarter.',
      'Week one is about access and context, deliberately, not code.',
      'Week two is shadowing and small, reversible changes.',
      'Weeks three and four are ownership of a real, bounded slice of the backlog.',
      '"Ramped" means the team can be handed ambiguous work and trusted to ask the right questions, not just execute a well-defined ticket.',
    ],
    sections: [
      {
        id: 'the-instinct-to-skip-ramp-up',
        heading: 'The instinct we have to resist',
        paragraphs: [
          'Every client wants a new dedicated team shipping visible progress in the first week. That’s a completely reasonable thing to want, and it’s also the fastest way to produce a team that looks fast in week one and is genuinely slow for the next five months.',
          'A team that starts writing production code before it understands why the system is built the way it is ends up making locally reasonable decisions that are wrong for the actual codebase — the kind of mistake that doesn’t show up in a code review, only three weeks later when it collides with an assumption nobody wrote down. Unwinding that costs far more time than the ramp-up would have.',
          'So we structure the first 30 days around a deliberately unglamorous sequence, and we tell clients up front that week one will not look like fast progress. It looks like fast progress starting in week three, which is a better trade than the reverse.',
        ],
      },
      {
        id: 'week-one-access-and-context',
        heading: 'Week one: access and context, not code',
        paragraphs: [
          'Week one has one job: remove every reason the team would later say "we didn’t know that." That means full access provisioned on day one, not requested piecemeal over the first month — nothing stalls a ramp-up like waiting four days for a repo invite that should have gone out before the team’s start date.',
          'It also means a structured walkthrough of the codebase with whoever knows it best on the client side: not a slide deck, an actual session where the team can interrupt and ask "why is this built this way" and get a real answer. The parts of a system that look like bad decisions from the outside are usually reasonable decisions made under constraints nobody documented, and the team needs to hear those constraints directly rather than reconstruct them later through trial and error.',
          'By the end of week one, the team should be able to run the system locally, understand the deployment pipeline, and know who to ask about what — without having shipped a single line to production. That’s intentional, not a delay.',
        ],
        diagramId: 'thirty-day-ramp',
      },
      {
        id: 'week-two-shadowing',
        heading: 'Week two: shadowing, then small, reversible changes',
        paragraphs: [
          'Week two is where the team starts touching the codebase, but through the lowest-risk path available: shadowing an existing code review, then picking up a small, well-bounded ticket with a buddy from the client side or a senior member of the dedicated team reviewing closely.',
          'The point of this week isn’t the size of what gets shipped — it’s calibration. Every codebase has unwritten conventions: how errors get logged, which shortcuts are acceptable in this particular service and which aren’t, how the team actually wants a pull request described. Small, reversible changes are the fastest way to surface those conventions without the cost of a bad decision compounding somewhere important.',
          'We explicitly tell new team members not to optimize for looking productive this week. A junior engineer who ships five small PRs with three convention mismatches has learned less than one who ships two PRs and asks six sharp questions in review.',
        ],
      },
      {
        id: 'weeks-three-four-ownership',
        heading: 'Weeks three and four: owning a real slice',
        paragraphs: [
          'By week three, the team takes ownership of a genuinely bounded piece of the backlog — not a toy task, a real one, but one scoped tightly enough that a wrong turn is cheap to correct. This is where the calibration from week two gets tested against something that actually matters.',
          'This is also where we start pulling back the safety net deliberately. Review gets lighter, not because quality matters less, but because the team needs room to make a small mistake and catch it themselves — that’s a different, more valuable skill than executing correctly under close supervision, and it’s the skill that determines whether the team can eventually run with minimal oversight.',
          'By the end of week four, the team should be handling ambiguity inside their slice without escalating every judgment call. If they’re still asking permission for decisions that are clearly within their scope, that’s a signal to look at directly rather than let ride into month two.',
        ],
      },
      {
        id: 'what-ramped-actually-means',
        heading: 'What "ramped" actually means to us',
        paragraphs: [
          '"Ramped" doesn’t mean the team can execute a well-written ticket quickly. Plenty of teams can do that in week one. It means the team can be handed something genuinely ambiguous — "customers are complaining about X, figure out why and fix it" — and be trusted to investigate, scope, and flag the right people before acting, without someone translating the ambiguity into a clean ticket for them first.',
          'That bar is deliberately higher than "shipping code," because it’s the bar that actually determines whether a dedicated team reduces the client’s management burden or just relocates it. A team that still needs every piece of work pre-scoped by the client hasn’t actually taken ownership of anything — it’s just executing somewhere else.',
          'We check for this explicitly around the 30-day mark, with a real conversation rather than a status report: what’s the team confident owning outright, what still needs a second set of eyes, and is that split roughly where we’d expect it to be a month in. If it isn’t, that’s the actual finding worth acting on — not whatever got shipped that week.',
        ],
      },
      {
        id: 'when-it-goes-wrong',
        heading: 'What it looks like when this gets skipped',
        paragraphs: [
          'The engagements that struggle almost always skipped some version of this sequence under pressure to show progress immediately. The pattern is recognizable in hindsight: fast, visible output in week one, followed by a steady accumulation of rework in months two and three as the gaps in context surface one at a time, each looking like an isolated mistake rather than the predictable result of skipping the groundwork.',
          'The fix, if we catch it late, is rarely a dramatic intervention. It’s going back and doing the context-building work that got skipped — which is slower to do retroactively than it would have been in week one, because now it competes with a live backlog instead of an empty one.',
          'The 30-day structure isn’t bureaucracy for its own sake. It’s the fastest path we’ve found to a team that’s actually fast in month three, and we’d rather have that honest conversation with a client up front than let week one’s optics set expectations we can’t sustain.',
        ],
      },
    ],
  },
  {
    slug: 'what-we-look-for-in-a-tech-lead',
    title: 'What We Actually Look for in a Tech Lead',
    excerpt:
      'The best individual coder on a team and the right person to lead it are sometimes the same person. Less often than most promotion decisions assume.',
    category: 'Our Process',
    date: '2026-09-10',
    readTime: '5 min read',
    coverImage: stockPhotos.techLeadWhiteboardDiscussion,
    content: [
      'The default promotion logic — most senior engineer becomes the lead — gets it right often enough to feel safe and wrong often enough to be worth checking directly.',
      'We look for three things that don’t show up on a resume: whether people leave a conversation with them sharper, whether they can turn ambiguity into a plan without over-scoping it, and whether they’ll say no to a bad idea regardless of whose idea it was.',
      'None of these correlate cleanly with who writes the cleanest code, which is exactly why they’re worth testing for separately.',
    ],
    sections: [
      {
        id: 'the-default-is-wrong-often-enough',
        heading: 'The default logic, and where it breaks',
        paragraphs: [
          'The most common path to "tech lead" is simple: whoever’s been there longest, or whoever writes the cleanest code, gets the title. That logic isn’t crazy — technical credibility matters for a lead, and a strong engineer often does have the judgment to go with it. It’s just not reliable enough to use without checking, because the two skills are genuinely different, and a team finds out which one it got the hard way, usually a few months into the role.',
          'A lead’s actual job is multiplying the team’s output, not adding to it personally. Some of the strongest individual contributors we’ve worked with are actively worse at this than a mid-level engineer with better instincts for it, because the habits that make someone an excellent solo problem-solver — going heads-down, owning the hardest part personally, optimizing their own output — are close to the opposite of what the role needs.',
        ],
      },
      {
        id: 'signal-one-makes-others-sharper',
        heading: 'Signal one: people leave sharper, not just unblocked',
        paragraphs: [
          'The clearest tell is what happens after someone gets help from a candidate. Some engineers unblock a teammate by taking the problem away and handing back an answer — genuinely useful in the moment, and a quiet drain on the team’s growth over time, because the teammate learns nothing except who to ask next time.',
          'The engineers who make good leads tend to unblock people differently: a question that reframes the problem, a pointer to the part of the code that actually matters, an explanation of the "why" behind a suggestion instead of just the suggestion. The teammate leaves having learned something transferable, not just having gotten today’s problem solved.',
          'We watch for this directly in how a candidate handles code review and pairing sessions before we ever talk about the lead role explicitly — it’s a habit, not a switch someone flips once promoted, and it shows up (or doesn’t) long before the title does.',
        ],
      },
      {
        id: 'signal-two-scopes-ambiguity',
        heading: 'Signal two: turns ambiguity into a plan without over-scoping it',
        paragraphs: [
          'A lead regularly gets handed something underspecified — "customers want this to be faster," "we need to support this new case eventually" — and has to turn it into a plan the team can actually execute against. The failure mode in one direction is freezing on the ambiguity, asking for more specification than the situation will ever provide. The failure mode in the other direction is over-scoping: turning a two-week problem into a six-week architecture project because open-ended work invites over-engineering.',
          'We test for this with a real, messy scenario rather than a hypothetical — something close to a genuine decision the team has faced — and watch how a candidate narrows it down. The strongest answers don’t arrive at perfect certainty; they arrive at a reasonable first step and a clear sense of what would need to be true to justify the next one.',
        ],
      },
      {
        id: 'signal-three-says-no',
        heading: 'Signal three: will say no, including to the client',
        paragraphs: [
          'This is the one that’s hardest to fake in an interview and most important in practice. A lead who agrees with whoever spoke last — a senior stakeholder, an insistent client, their own manager — isn’t actually leading; they’re relaying pressure downward with a technical vocabulary attached.',
          'We look for candidates who can describe a specific time they pushed back on a decision that came from above them, what happened, and — just as important — a time they were wrong to push back and changed their position once they saw why. Both halves matter. A lead who never backs down is as much of a liability as one who never pushes back; the actual skill is judgment about which is which, applied consistently under real pressure, not just in a low-stakes interview answer.',
        ],
      },
      {
        id: 'what-disqualifies-someone',
        heading: 'What disqualifies someone, regardless of the rest',
        paragraphs: [
          'One pattern rules a candidate out almost immediately, regardless of how strong the other signals are: taking credit for a team’s work in how they describe it, even subtly, even just through pronoun choice in how they tell a story about a project. It’s a small tell that predicts a much larger problem — a lead whose incentives quietly point toward their own visibility instead of the team’s output will optimize for that, whether they mean to or not, and a team feels the difference within a month.',
          'None of these three signals are things we can fully verify in a single conversation, which is why we weight direct observation — how someone behaves in review, in planning, in a disagreement over the course of an actual engagement — well above how someone describes themselves in an interview. The title is easy to hand out. The behavior underneath it is the part that actually determines whether a team gets faster or slower once someone has it.',
        ],
      },
    ],
  },
  {
    slug: 'how-we-handle-a-client-who-wants-everything-yesterday',
    title: 'How We Handle a Client Who Wants Everything Yesterday',
    excerpt:
      'Almost none of these requests are actually about speed. Most of them are about scope that hasn’t been pinned down yet, wearing urgency as a disguise.',
    category: 'Our Process',
    date: '2026-08-27',
    readTime: '5 min read',
    coverImage: stockPhotos.urgentDeadlinePressure,
    content: [
      '"We need this yesterday" shows up in nearly every engagement sooner or later, and treating it as a speed problem is usually the wrong response.',
      'Most of these requests split into two real categories once you ask a few direct questions: genuinely urgent and well-scoped, or urgent-sounding and not actually scoped at all.',
      'The second category is far more common, and the fix isn’t working faster — it’s scoping faster, which is a different skill entirely.',
    ],
    sections: [
      {
        id: 'urgency-as-a-disguise',
        heading: 'Urgency is usually standing in for something else',
        paragraphs: [
          '"We need this yesterday" is one of the most common sentences in client work, and reacting to it literally — dropping everything, working longer hours, cutting review — is usually the wrong move, even though it feels responsive in the moment.',
          'Most of the time, the actual content behind that sentence isn’t "this specific, well-defined task must ship in an unusually short window." It’s something closer to "I’m under pressure from someone else and I haven’t had time to figure out exactly what I need, so I’m passing the pressure downstream instead." Treating that as a scoping problem gets to a better outcome faster than treating it as a speed problem, almost every time.',
        ],
      },
      {
        id: 'the-two-questions',
        heading: 'Two questions that sort real urgency from unscoped urgency',
        paragraphs: [
          'We ask two things, directly, as close to the start of the conversation as possible: what specifically breaks if this doesn’t ship by the date you’re describing, and what does "done" actually look like. The first question tests whether the urgency is real. The second tests whether the request is scoped enough to act on at all.',
          'A request that gets a specific, concrete answer to both — "the payment provider is deprecating this endpoint on the 15th, and done means these three flows still work" — is genuinely urgent and genuinely scoped, and it goes straight to the fast lane: reprioritized immediately, communicated clearly to whoever it displaces.',
          'A request that gets a vague answer to either question almost always isn’t actually a today problem. It’s a today conversation, to get it scoped, and a this-week or next-sprint problem once it is.',
        ],
        diagramId: 'urgent-request-matrix',
      },
      {
        id: 'why-pushing-back-works',
        heading: 'Why asking the questions works better than refusing or complying',
        paragraphs: [
          'Two bad options tend to feel like the only ones available under pressure: comply immediately, which trains a client that "urgent" is the fastest way to jump the queue whether or not it’s justified, or refuse outright, which reads as inflexible and damages trust in a relationship that depends on genuine responsiveness when something really is on fire.',
          'Asking the two questions avoids both traps. It’s not a no — it’s a request for the specific information needed to actually help, and in our experience it resolves the situation faster than either extreme, because most people asking for "yesterday" haven’t actually thought through what they need, and the questions help them think it through in real time instead of leaving that work for the engineering team to guess at later.',
        ],
      },
      {
        id: 'what-fast-lane-actually-means',
        heading: 'What "fast lane" actually costs',
        paragraphs: [
          'When something genuinely lands in the fast lane, we’re explicit about what it displaces, not vague about it. "We can do this today, which means X moves to tomorrow" makes the trade-off visible to the person asking, instead of quietly absorbing it and letting the cost show up somewhere else, unexplained, later in the week.',
          'This matters because unlimited fast-laning is how teams end up permanently reactive — every request treated as equally urgent means nothing is actually prioritized, just processed in whatever order it arrived. Naming the trade-off out loud, every time, keeps genuine emergencies genuinely rare instead of becoming the default operating mode.',
        ],
      },
      {
        id: 'the-scope-it-fast-quadrant',
        heading: 'The quadrant that actually needs speed: scoping, not shipping',
        paragraphs: [
          'The requests that are genuinely urgent but not yet scoped are the ones that need real speed — just applied to a different activity than most people assume. The fast response isn’t writing code before the requirements are clear; it’s getting someone senior into a room with the requester immediately to nail down scope, which usually takes thirty minutes and saves days of building the wrong thing under pressure.',
          'This is the distinction that makes the whole approach work: we move fast on scoping urgent-and-unclear requests, and fast on execution for urgent-and-clear ones. What we don’t do is skip straight to execution on something that’s urgent and unclear, because that’s the combination that produces expensive rework — fast in the moment, slow once the rebuild starts.',
        ],
      },
    ],
  },
  {
    slug: 'why-we-run-retros-differently-for-distributed-teams',
    title: 'Why We Run Retros Differently for Distributed Teams',
    excerpt:
      'A sticky-note board and a room full of people is a format, not a requirement. Distributed teams need the same outcome from a genuinely different process.',
    category: 'Our Process',
    date: '2026-08-13',
    readTime: '5 min read',
    coverImage: stockPhotos.remoteRetroVideoNotes,
    content: [
      'Porting an in-person retro format directly onto a video call is how most distributed retros quietly stop producing anything useful.',
      'We run ours async-first, with the live call reserved for discussion of what was already written down, not for generating it live.',
      'The format changes who actually gets heard, and that turns out to matter more than the format itself.',
    ],
    sections: [
      {
        id: 'the-direct-port-problem',
        heading: 'The problem with porting the format directly',
        paragraphs: [
          'A standard in-person retro — sticky notes on a board, everyone talking through what went well and what didn’t — works because a physical room does a lot of invisible work: it’s obvious when someone wants to speak, silence reads as "still thinking" rather than "logged off," and a good facilitator can read the room’s energy and adjust in real time.',
          'None of that survives a direct port to a video call. Silence on a call is ambiguous — thinking, distracted, or just muted and forgotten — and the people who speak first tend to anchor the whole conversation, because there’s no equivalent of a sticky note quietly going up on a board in parallel while someone else is talking. The result is a retro that runs on schedule and produces a thinner, more homogenous set of feedback than the team actually has.',
        ],
      },
      {
        id: 'async-first-structure',
        heading: 'What we actually do: async-first, then a focused live discussion',
        paragraphs: [
          'Everyone writes their retro input independently, async, before the live call — what went well, what didn’t, what they’d change — with a hard cutoff a few hours before the call happens. This alone fixes the anchoring problem: nobody’s input is shaped by having heard someone else’s first.',
          'The facilitator groups the submissions into themes before the call starts, and the live time is spent entirely on discussion of what’s already written down — not on generating the list live. This means the call is shorter, more focused, and spends its time on the part that actually benefits from real-time conversation: working through disagreement and deciding what to actually do about a theme, not transcribing everyone’s thoughts into a shared doc while they type.',
        ],
      },
      {
        id: 'who-gets-heard-changes',
        heading: 'The format changes who actually gets heard',
        paragraphs: [
          'The most consistent thing we’ve noticed switching to async-first: quieter team members and non-native English speakers contribute noticeably more, and more specifically, than they do in a live-only format. Writing async removes the pressure of composing a thought in real time in front of the group, which turns out to be a bigger barrier to participation than most teams give it credit for.',
          'This isn’t a minor process tweak — it changes the actual content of the retro. Themes that would have gone unmentioned because the person who noticed them wasn’t going to jump into a live conversation to raise them now show up in writing, on equal footing with everything else, before anyone’s had a chance to dominate the conversation.',
        ],
      },
      {
        id: 'keeping-it-from-going-stale',
        heading: 'Keeping async from turning into a box-checking exercise',
        paragraphs: [
          'The risk with async input is that it becomes perfunctory — three words typed into a form two minutes before the deadline because it’s a required step, not because anyone’s actually reflecting. We counter this by keeping the live discussion genuinely responsive to what gets submitted, not a fixed template that runs the same regardless of input. When people see their specific written point actually shape the conversation, the next round of submissions gets more thoughtful, not less.',
          'We also rotate who facilitates and vary the specific prompts every few cycles — "what went well / what didn’t" gets stale fast, and a stale prompt produces stale answers regardless of format. A prompt like "what did we assume at the start of this sprint that turned out to be wrong" surfaces something genuinely different than the default framing does.',
        ],
      },
      {
        id: 'what-this-doesnt-replace',
        heading: 'What this doesn’t replace',
        paragraphs: [
          'This isn’t an argument for removing live conversation from a distributed team’s process entirely — plenty of retro topics genuinely benefit from real-time back-and-forth, especially anything involving actual disagreement about what to do next. The point is narrower: generating the raw input is the part that in-person retros handle well through room dynamics that don’t exist on a call, and that’s the specific part worth moving async, not the whole exercise.',
          'Teams that get the most out of this treat it as an ongoing adjustment, not a fixed policy — checking periodically whether the live time is actually being spent on discussion that needs to be live, and moving anything that doesn’t back into the async, written half of the process.',
        ],
      },
    ],
  },
  {
    slug: 'how-we-onboard-a-new-engineer-in-their-first-week',
    title: 'How We Onboard a New Engineer in Their First Week',
    excerpt:
      'Most onboarding checklists cover accounts and access. The ones that actually work also cover the unwritten stuff nobody thinks to write down.',
    category: 'Our Process',
    date: '2026-08-05',
    readTime: '4 min read',
    coverImage: stockPhotos.newHireFirstDaySetup,
    content: [
      'A functioning laptop and a list of accounts is the minimum bar for onboarding, not the whole job.',
      'The onboarding that actually shortens ramp-up covers the unwritten context a team assumes everyone already has.',
      'We assign a specific, named person as the point of contact for "dumb questions" — because the questions that get skipped for fear of sounding dumb are usually the ones worth asking first.',
    ],
    sections: [
      {
        id: 'the-checklist-floor',
        heading: 'The checklist gets you to the floor, not the finish line',
        paragraphs: [
          'Every reasonable onboarding process covers the mechanical floor: accounts provisioned before day one, hardware that works out of the box, access to the repos and tools someone actually needs. Getting this right matters — a new hire who spends their first two days waiting on IT tickets starts the engagement with a bad first impression through no fault of their own.',
          'But the mechanical floor is table stakes, not the thing that actually determines how fast someone ramps up. Two people with identical access and identical hardware can ramp at completely different speeds, and the difference is almost always in what happens around the checklist, not on it.',
        ],
      },
      {
        id: 'the-unwritten-context',
        heading: 'The unwritten context nobody thinks to write down',
        paragraphs: [
          'Every team has a layer of context that’s never been written down because it’s so obvious to everyone already there that it doesn’t occur to anyone to document it: why a particular service is structured the way it is, which parts of the codebase are considered fragile and treated carefully, who actually makes the call on a specific class of decision versus who just looks like they do.',
          'A new engineer without this context makes locally reasonable decisions that turn out to be wrong for reasons nobody explained — not because they made a mistake, but because they were missing information that existed only in other people’s heads. We treat surfacing this explicitly as a real onboarding task, not something that happens automatically through osmosis over the first few months.',
        ],
      },
      {
        id: 'the-named-point-of-contact',
        heading: 'A specific, named person for the questions people are afraid to ask',
        paragraphs: [
          'Every new engineer gets one specific, named person — not "the team," not a Slack channel — whose explicit job for the first two weeks includes answering questions that feel too basic to ask in a group setting. "Is it normal that this build takes four minutes" or "am I supposed to already understand what this service does" are exactly the questions people sit on for weeks rather than ask publicly, and sitting on them slows ramp-up more than almost anything else.',
          'Naming a specific person, rather than leaving it as an implicit team responsibility, matters more than it sounds like it should. An implicit "ask anyone" responsibility reliably turns into nobody’s responsibility once everyone assumes someone else has it covered.',
        ],
      },
      {
        id: 'the-first-week-schedule',
        heading: 'What the actual first week looks like',
        paragraphs: [
          'Day one is entirely access and setup, with a scheduled, unhurried walkthrough of the team’s structure and how work actually moves through it — who reviews what, how priorities get set, where decisions get made. Days two and three are a guided tour of the codebase with the named point-of-contact, focused specifically on the "why," not just the "what" a static architecture doc would cover.',
          'By day four or five, we expect a first, genuinely small pull request — something low-risk enough that a mistake costs almost nothing, but real enough to exercise the actual review and deploy process rather than a synthetic exercise. The goal isn’t the code; it’s testing the pipeline the new engineer will be using every day, while the stakes are still low enough that friction in that pipeline surfaces as a minor annoyance instead of a blocker three weeks in.',
        ],
      },
      {
        id: 'checking-it-worked',
        heading: 'How we check it actually worked',
        paragraphs: [
          'At the two-week mark, we ask the new engineer directly what’s still unclear — not "how’s it going," which reliably gets a polite "good," but a specific request for the parts of the system or the team’s process that still feel foggy. The answer is almost always useful, and it’s a better signal than anything we could infer from their output alone.',
          'The honest measure of good onboarding isn’t how fast someone shipped their first PR. It’s whether, a month in, they’re asking sharp questions about real ambiguity instead of still quietly guessing at things a better first week would have already covered.',
        ],
      },
    ],
  },
]

export const blogPosts: IBlogPost[] = [...handwrittenBlogPosts, ...generatedBlogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export const getBlogPost = (slug: string): IBlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug)
