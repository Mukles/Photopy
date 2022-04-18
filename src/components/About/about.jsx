const About = () => {
  return (
    <div className="container mx-auto px-5 flex flex-col space-y-5">
      <img className="w-full" src="./images/me.jpg" alt="" srcset="" />
      <div className="flex flex-col space-y-5">
        <h1 className="border-b-2 border-b-[#EEEEEE] pb-2 text-4xl font-bold text-center">
          WHO IS THIS GUY?
        </h1>
        <p className="font-semibold text-sm">
          Albert Einstein was a theoretical physicist who developed the general
          theory of relativity, effecting a revolution in physics.For this
          achievement, Einstein is often regarded as the father of modern
          physics and the most influential physicist of the 20th century. While
          best known for his mass–energy equivalence formula E = mc2 (which has
          been dubbed “the world’s most famous equation”), he received the 1921
          Nobel Prize in Physics “for his services to theoretical physics, and
          especially for his discovery of the law of the photoelectric effect”.
          The latter was pivotal in establishing quantum theory within physics.
        </p>
      </div>
    </div>
  );
};

export default About;
