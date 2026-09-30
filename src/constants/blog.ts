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
        image: {
          src: stockPhotos.contractSigningPen,
          alt: 'A signed statement of work on a desk',
          caption:
            'A clearly scoped statement of work is what makes outsourcing predictable — fuzzy requirements produce fuzzy results regardless of the vendor.',
        },
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
    readTime: '5 min read',
    coverImage: stockPhotos.burnoutHeadInHands,
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
        image: {
          src: stockPhotos.analyticsDashboard,
          alt: 'A dashboard showing team activity and time metrics',
          caption: 'Time-tracking your team’s repetitive tasks for even a week usually surfaces the same two or three bottlenecks worth automating first.',
        },
      },
      {
        id: 'automate-vs-assist',
        heading: 'Separate "automate" from "assist"',
        paragraphs: [
          'Some tasks can be fully automated because a wrong answer is low-stakes and easy to catch — categorizing an inbound lead, drafting a first-pass summary that a human will still read before acting on it, flagging duplicate records for review. Others should stay human-in-the-loop, where AI drafts and a person approves, especially anywhere a mistake would be costly or hard to reverse: anything touching a customer commitment, a financial figure, or a compliance-sensitive document.',
          'Deciding this up front prevents both failure modes teams run into. Over-trusting a system means an error propagates before anyone notices — a miscategorized support ticket that never gets escalated, a summary that drops a crucial caveat. Under-using one means a perfectly capable assistant gets treated like it needs sign-off on everything, which erases most of the time savings that justified building it in the first place.',
          'A simple test: ask what the actual cost of a wrong output is, and how quickly a wrong output would get noticed. Low cost and fast to notice — automate it. High cost or slow to notice — keep a human reviewing the output before it goes anywhere. This single question resolves most of the automate-versus-assist debates that otherwise turn into open-ended arguments about how much to "trust the AI."',
        ],
      },
      {
        id: 'prototype-against-real-data',
        heading: 'Prototype against real data, not a demo',
        paragraphs: [
          'A workflow that looks great in a vendor demo can fall apart against your actual, messy data. Demos are built on clean example inputs precisely because they’re designed to show the tool at its best. Your support tickets, your contracts, your customer records are not clean — they have typos, inconsistent formatting, edge cases that have accumulated for years, and context that lives in someone’s head rather than in the data itself.',
          'Test early with real inputs from your business, not the examples in a sales deck. Pull twenty to thirty real cases — actual tickets, actual documents, actual records — including a few you already know are messy or ambiguous, and run the prototype against those specifically. If it handles the hard cases reasonably, the easy cases will take care of themselves. If it only handles the easy cases, you’ve learned that before committing budget and rollout time to it, not after.',
          'This step is also where you calibrate expectations for the team. Showing people a prototype working against their actual data — including its actual mistakes — builds more trust than a polished demo ever will, because it’s honest about where the tool needs a human to catch something.',
        ],
        image: {
          src: stockPhotos.dataOnScreen,
          alt: 'Rows of real, unformatted data displayed on a screen',
          caption: 'Testing against messy, real records — not curated demo data — is what actually predicts how a tool performs in production.',
        },
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
        image: {
          src: stockPhotos.teamPlanning,
          alt: 'A team planning a project roadmap together',
          caption: 'Treating the rollout process itself as a reusable playbook is often worth more long-term than any single AI feature.',
        },
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
    readTime: '5 min read',
    coverImage: stockPhotos.remoteWork,
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
        image: {
          src: stockPhotos.handshakeInterview,
          alt: 'Two people shaking hands after an interview',
          caption: 'The interview format should mirror the actual job as closely as possible — not test for a different skill and hope it correlates.',
        },
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
        image: {
          src: stockPhotos.codeReview,
          alt: 'Two engineers reviewing code together on a monitor',
          caption: 'Code review sessions during vetting reveal more about working style than a solo coding exercise ever does.',
        },
      },
    ],
  },
]

export const blogPosts: IBlogPost[] = [...handwrittenBlogPosts, ...generatedBlogPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
)

export const getBlogPost = (slug: string): IBlogPost | undefined =>
  blogPosts.find((post) => post.slug === slug)
