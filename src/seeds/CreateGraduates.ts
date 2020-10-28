import { Factory, Seeder } from "typeorm-seeding";
import { Connection } from "typeorm";
import { Graduate } from "../entity/Graduate";

export default class CreateGraduates implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Graduate)
      .values([
        {
          fullName: "Stephanie",
          email: "steph@gmail.com",
          password: "123",
          language: "Yes",
          education: "University",
          interviews: "0 (I only had one interview and got hired)",
          monthsToJob: 2,
          jobType: "Frontend",
          industry: "Tech",
          companyLang: "Dutch",
          companySize: "Large (250 employees or more)",
          techStack:
            "Technologies depends on the project. The recruiter called me for this job. Because we had a nice conversation when I applied for another job where I was rejected.",
          answer1: "No",
          answer2:
            "Enthusiasm, eager to learn and also my previous experience (working on apps on the marketing side)",
          answer3:
            "Getting rejected because of lack of experience or no technical background. This is something you cannot change anymore.",
          answer4: "Nothing",
          answer5:
            "Be very active on Linkedin. If you get a rejection email, always reply and be nice to recruiters also when they reject you.",
          answer6:
            "Don't be too picky about your first job, you first need some experience. After that it will be a lot easier to get a job you like.",
          answer7: "Nothing",
        },
        {
          fullName: "Dirk",
          email: "dirk@gmail.com",
          password: "123",
          language: "Yes",
          education: "University",
          interviews: "0 (I only had one interview and got hired)",
          monthsToJob: 1,
          jobType: "Fullstack",
          industry: "Hospitality tech",
          companyLang: "Dutch",
          companySize: "Small (up to 49 employees)",
          techStack:
            "Pretty much the same as Codaisseur. Only difference is Vue instead of React, and VueX as a replacement for Redux.",
          answer1: "Through Codaisseur and friends.",
          answer2: "Wasn’t rejected.",
          answer3: "Former experience with hospitality/booking management.",
          answer4:
            "Communication with Codaisseur. It was pretty much a mess. Certificate wasn’t posted to me, Codaisseur-fee wasn’t communicated to the company (Codaisseur messed that one up)",
          answer5:
            "Be pro-active with communication towards the company so that Codaisseur can’t really mess things up. Haha",
          answer6:
            "Apply to companies that are not actively hiring as well. They’re pretty much always searching for additions to the team.",
          answer7:
            "Nothing much, really. Happy where I am right now, looking forward to deep-diving into the world of code. :)",
        },
        {
          fullName: "Diane",
          email: "diane@gmail.com",
          password: "123",
          language: "Yes",
          education: "University",
          interviews:
            "I've been seriously interviewing with 2 other companies before landing this job. The first company I got out of the interview process myself after 2 interviews,  because I didn't have a good feeling at all about it. For the second company I had 7 interviews in 2 weeks period of time, I was convinced they were going to hire me - it was a huge bummer to find out that that was not the case. Third time everything worked out.",
          monthsToJob: 1,
          jobType: "Frontend",
          industry:
            "Tech, they're the tech company behind Seat2Meet plus they make other bookingssoftware.",
          companyLang: "Dutch",
          companySize: "Small (up to 49 employees)",
          techStack:
            "I work with Vue, Vuex, Bulma and Axios for Api requests at the moment.",
          answer1:
            "I connected with this company during a Codaisseur Speed Hiring event.",
          answer2:
            "At the previous company I interviewed they told me that another candidate was a slightly better cultural fit. But for sending out applications, I mostly got no response or a \"You're too inexperienced/ stack doesn't line up\" kind of reaction.",
          answer3:
            "I think me being Dutch definitely helped,  also the speed hiring event allowed me to move past the resume + cover letter stage and make a good connection with the interviewers straight away. I already knew that they were interested in hiring someone from Codaisseur so that gave me a bit of extra confidence and I could just focus on making a good impression.",
          answer4:
            "When I didn't get hired for the second company after those many interviews, it was a big blow and I struggled a lot in reclaiming my enthusiasm and confidence when approaching other companies. I just felt really disappointed for a solid week at least.",
          answer5:
            "I don't know if I could do it differently, but I definitely got way too much sucked in and got way too excited about the idea of working for company number 2. Having said that, I do believe that enthusiasm is key so you also don't want to have an 'I don't care if you hire me or not' attitude. Finding the balance of investing enthusiasm and effort for a company, but protecting yourself from potential disappointments is really hard and I wish I'd be a bit better at it. In hindsight it was quite overwhelming.",
          answer6:
            "I hope it doesn't sound too cheesy when I say don't give up, but I really mean that. It's about finding a good match, and that can take a lot of time. I realise I got lucky time wise but it doesn't mean I'm a better candidate/developer. I know plenty of Codaisseur students looking for work I'd hire in a heartbeat if it was my decision.",
          answer7:
            "To build on my last answer, I've met so many amazing people during my time at Codaisseur. You made it so far because you're talented, passionate, dedicated and a hard worker.  In other words, you're a total catch. Please don't lose touch with that piece of confidence, because you will also need it to secure the job.",
        },
        {
          fullName: "Maria",
          email: "maria@gmail.com",
          password: "123",
          language: "No",
          education: "University",
          interviews: "About 20",
          monthsToJob: 5,
          jobType: "Frontend",
          industry: "Tech",
          companyLang: "Dutch and English",
          companySize: "Small (up to 49 employees)",
          techStack: "React, react native, angular",
          answer1: "found the job from indeed",
          answer2:
            "I was usually told that there was another candidate with more experience or knowledge in javascript. But also I was rejected because of \"culture fit\" or one company told me I didn't have a clear self-development plan :D My personal feeling turn out to be wrong. I thought I didn't do well at the last interview but they offered me the job. I really think it's all about getting the right match which is just super tricky. Oh and one more thing which I actually haven't shared before: during the summer I was struggling with a horrible backpain. I couldn't sleep much and was struggling to sit on a chair for a whole interview. At the time did not think it affected it but perhaps it did...",
          answer3: "My previous education in social science",
          answer4:
            "Technical interviews because it's hard to explain javascript",
          answer5: "Nothing",
          answer6: "Dont give up",
          answer7:
            "Getting a job is really a matter of... call it luck, destiny, whatever. Companies are looking for specific traits to fit candidates with the teams. Also with regard to the business…",
        },
        {
          fullName: "Nausicaa",
          email: "nausicaa@gmail.com",
          password: "123",
          language: "No",
          education: "University",
          interviews:
            "One, on the phone, with a recruiter (who never called back), and then two interviews with the company that hired me.",
          monthsToJob: 2,
          jobType: "Frontend",
          industry: "Healthcare",
          companyLang: "English",
          companySize: "Small (up to 49 employees)",
          techStack: "React + Overmind (instead of Redux), Ionic, Node.js.",
          answer1: "The job found me! I was contacted by the CTO on LinkedIn.",
          answer2:
            "(I  think this question here is wrong? In any case I didn't apply so my candidacy couldn't have been accepted or rejected.)",
          answer3:
            "Attitude most definitely. I was described as very enthusiastic and energetic, and it clearly made an impression as it was the first thing I was told at my second interview, as the first interviewer made sure to make of note of it for the second.",
          answer4:
            "During the job search period, surely keeping up the motivation, especially after two months of being ghosted or rejected, and keeping up a good confidence level: until I was focusing on getting a job I only got rejections, and in turn I'd also feel less and less confident in my skills because I felt like I was wasting entire days without coding (be it exercising or learning something new). I then started working on my self-education and personal portfolio, and that gave me new and fresh confidence to approach interviews or write letters keeping the imposter syndrome at bay.",
          answer5:
            "I would schedule my week differently: I would dedicate at least half a week to the job search, and the other half to coding.",
          answer6:
            "I suggest to not focus too much on every word in a job opening: what is very often described is the dream candidate, who is a junior but has 3 years of experience, and knows 4+ frameworks and at least 3+ languages. Who writes such openings is usually from the HR department and doesn't have full knowledge of what they're asking, so it's perfectly normal to not check every single box. A more technical tip would be to get very familiar with branching and writing good commit messages, because at the end of the day it's what will say a lot about your approach to helping your colleagues understand your work attitude in the team (being clear, concise but descriptive: if they have to ask, it's probably not clear enough). Never be afraid of asking questions (they know you're a junior and they expect you to not know a lot of stuff!), because this too shows your attitude, but be willing to study documentation on your own so you can progress way faster than wait to be told to, or learn one question at a time - being open to ask, listen and learn is really something, but showing independence and dedication is a huge plus.",
          answer7:
            "I struggled a whole lot in asking questions and communicating my struggles, during my time at Codaisseur, and I'd try every last strategy before accepting defeat: in a way, I mistakenly internalized not getting something right then and there by myself as defeat. (Sidenote: now that I finally worked onsite instead of remote-only I am happy to report that the environment changes this ability to communicate a lot, and it gets easier and easier working on remote after breaking the ice in person with questions and doubts about tasks.) Not being a worthy teamplayer was therefore my biggest fear, as my first day at work approached. It's only been a month, but I've seen a huge change in me. I can promise you you'll be hearing your teachers' voices in your head constantly, repeating advice and good practice, and you'll appreciate more and more how well they prepared you not just technically, but also professionally.",
        },
        {
          fullName: "Antony",
          email: "antony@gmail.com",
          password: "123",
          language: "Yes",
          education: "University",
          interviews: "around 10 interviews and 14 phone calls",
          monthsToJob: 2,
          jobType: "Backend",
          industry:
            "several industries actually -> Aerospace & defence / Discreet manufacturing / industrial manufacturing",
          companyLang: "Dutch and English",
          companySize: "Large",
          techStack:
            "technologies used in my team is C / Java / 4GL inhouse made language and Python",
          answer1:
            "I saw an add on linkedIn and applied through their website, got an immediate call and then had a first interview 3 weeks later and had my final interview while already working for another company for 1 week.",
          answer2:
            'most rejections were because "favor of other more experienced/qualified candidates" and not being able to write compelling cover letters/ not personal enough - if they see its a template they are less likely to give you a shot',
          answer3:
            "getting a physical interview - I am good with convincing people when I get to speak with them",
          answer4:
            "staying motivated to study despite the numerous rejection emails",
          answer5:
            "apply to small companies and make/stick to a schedule -> apply to smaller companies because they are more likley to give you a shot in comparison with the bigger companies and stick with a plan because I need a system to thrive and stay productive and outside of my head",
          answer6:
            'mmh thats a tough one. DOs -> \n *1- apply apply apply, apply everyday to at least 3 "easy applies" via linked in but MORE IMPORTANTLY apply to at least 2 companies with cover letters.\n *2- save all cover letters you write and reuse the ones you get a positive reply on so you can refine them over time. its a process, it sucks but you just have to keep at it.\n *3- STAY POSITIVE! work on refining your craft while you keep applying, realise that rejection is part of the process and revert the process, if the company rejects you - know the amazing company you dreamed about is out there just 1 cover letter away.\n *4 - KEEP BUILDING PROJECTS to practice and to learn new tech.\n *5 - connect with other people searching via websites like career karma etc.\n *6 - Pay for LinkedIn premium and get your linkedIn game sorted - Look professional and get friends to look at your profile and REALLY honenstly rate/give constructive criticism (preferably friends/people who are in the job recruitment space) + look at people who have gotten hired and emulate their style if it resonates with you. \n DONTS \n 1. give up - I know its corny but just keep at it, look at the job hunting as part of the grind \n 2. get stuck in a loop of "sort of doing something interesting"  - pick a new tech and stick with it untill you own it. \n 3. get stuck in youtube tutorial limbo - pick a project and work on it \n 4. get dishartened by people on linkedin getting hired and whatnot - use linkedin to your advantage like any other social media platform and do NOT get pulled down by other peoples "perfect" pictured life.',
          answer7:
            "mmh thats as much as I can think about off the top of my head",
        },
      ])
      .execute();
  }
}
