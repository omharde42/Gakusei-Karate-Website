
const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-karate-red text-center mb-10">
          About Us
        </h2>
        
        <div className="space-y-6 text-karate-dark">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative h-64 w-64">
                <div className="absolute inset-0 bg-karate-red rounded-full opacity-20"></div>
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-32 w-32 text-karate-red">
                    <path fill="currentColor" d="M432 96c26.5 0 48-21.5 48-48S458.5 0 432 0s-48 21.5-48 48 21.5 48 48 48zm-80 96c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-128 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zM240 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48S266.5 0 240 0zM80 96c26.5 0 48-21.5 48-48S106.5 0 80 0 32 21.5 32 48s21.5 48 48 48zm0 96c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm432 80c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm-432 0c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48z"/>
                  </svg>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <p className="text-lg leading-relaxed">
                The Karate Gakusei Dojo is proudly affiliated with the International Shotokan Karate Institute (ISKI), India. 
                With a strong foundation in traditional Japanese karate philosophy, our dojo emphasizes discipline, respect, 
                and personal development. Sensei Rizwan Shaikh (Nidan Black Belt) leads the classes with passion and precision.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-gray-100 to-gray-200 p-6 rounded-lg shadow-inner">
            <p className="text-lg leading-relaxed">
              Our dojo is more than just a place to learn how to punch and kick—it's a sanctuary for mental clarity, 
              spiritual growth, and physical strength. We follow the traditional values of Shotokan Karate, 
              integrating them into every aspect of our training. Every class is designed to challenge students 
              not only physically but also intellectually and emotionally.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center my-8">
            <div className="md:w-2/3 order-2 md:order-1">
              <p className="text-lg leading-relaxed">
                Whether you are a complete beginner or someone returning to martial arts, our welcoming community 
                will support your journey. We train students of all ages and backgrounds, fostering unity and 
                encouragement in every class. Through katas, kihon, and kumite, students develop not just their 
                technique, but also their confidence, discipline, and perseverance. We believe karate is a 
                lifelong path, and we are here to walk it together.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center order-1 md:order-2">
              <div className="h-48 w-48 bg-karate-red rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-6xl text-white font-bold">空手</div>
              </div>
            </div>
          </div>
          
          <div className="border-l-4 border-karate-red pl-6">
            <p className="text-lg leading-relaxed">
              Our goal is to shape students into not just excellent martial artists but also responsible and 
              honorable individuals. Join us to discover your inner strength and become part of a dojo that 
              values both tradition and progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
