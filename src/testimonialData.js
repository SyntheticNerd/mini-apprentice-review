import testimonyImg1 from "./images/image-daniel.jpg";
import testimonyImg2 from "./images/image-jonathan.jpg";
import testimonyImg3 from "./images/image-kira.jpg";
import testimonyImg4 from "./images/image-jeanette.jpg";
import testimonyImg5 from "./images/image-patrick.jpg";

//Here we have created a simple array that contains the data we need for each testimonial in an object.

export const testimonialData = [
  {
    id: "testimony1",
    name: `Daniel Clifford`,
    title: `Verified Graduate`,
    img: testimonyImg1,
    testimony: `“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
        transition and have heard some people who had an amazing experience here. I signed up
        for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
        The next 12 weeks was the best - and most grueling - time of my life. Since completing
        the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”`,
  },
  {
    id: "testimony2",
    name: `Jonathan Walters`,
    title: `Verified Graduate`,
    img: testimonyImg2,
    testimony: `“I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
        for a big company. This was one of the best investments I’ve made in myself. ”`,
  },
  {
    id: "testimony3",
    name: `Kira Whittle`,
    title: `Verified Graduate`,
    img: testimonyImg3,
    testimony: `“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
        professionals who can help me learn programming step by step. I was encouraged to enroll by a former
        student of theirs who can only say wonderful things about the program. The entire curriculum and staff
        did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
        project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
        could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
        experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
        100% recommend! ”`,
  },
  {
    id: "testimony4",
    name: `Jeanette Harmon`,
    title: `Verified Graduate`,
    img: testimonyImg4,
    testimony: `“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
                    while doing something I love. ”`,
  },
  {
    id: "testimony5",
    name: `Patrick Abrams`,
    title: `Verified Graduate`,
    img: testimonyImg5,
    testimony: `“ The staff seem genuinely concerned about my progress which I find really refreshing. The program
        gave me the confidence necessary to be able to go out in the world and present myself as a capable
        junior developer. The standard is above the rest. You will get the personal attention you need from
        an incredible community of smart and amazing people. ”`,
  },
];
