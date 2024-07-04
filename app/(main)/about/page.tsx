import Image from "next/image";

function AboutPage() {
  return (
    <div className="flex flex-col lg:flex-row gap-24 z-10">
      <div className="w-fit m-auto">
        <div className="relative w-40 h-40">
          <Image
            className="rounded-2xl"
            src={"/images/profile_pic.jpeg"}
            fill
            alt="Profile pic"
          />
          <div className="border-accent border-2 -z-10 w-40 h-40 rounded-lg top-6 left-6 absolute" />
        </div>
      </div>

      <div className="flex-shrink max-w-2xl">
        <h3 className="text-2xl font-semibold">Keerthi Vasan S A</h3>
        <p className="mt-4 opacity-80">B.Tech. 3rd year Undergrad</p>
        <p className="mt-12">
          My first exposure to Programming and Computer Science was at 5th
          grade, with an Assembly Book. Got curious about how computers read
          this code and performed actions. From then, till now I have not
          stopped learning and having my mind blown.
        </p>
        <p className="mt-6">
          Started freelancing in 10th grade as a FullStack Dev, landing projects
          from New York, Europe and around the world.
        </p>
        <p className="mt-12">
          Led open-source initiatives and contributed to popular repositories
          like Visual Studio Code, Django
        </p>
        <p className="mt-4">
          NCO Gold Medalist for 4 consecutive years - Ranked 129th
          internationally, 13th regionally in state.
        </p>
        <p className="mt-4">
          Solved 350+ Leetcode problems, Rating: 1730 (Top 10%)
        </p>
        <p className="mt-4">
          Co-founded few startups, scaled them to handle millions of requests /
          minute.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
