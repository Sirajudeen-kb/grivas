import React from "react";

// Define the type for a single testimonial
interface TestimonialProps {
  name: string;
  image: string;
  feedback: string;
}

// Define the type for the props that the Testimonial component will receive
interface TestimonialsProps {
  testimonials: TestimonialProps[];
}

const Testimonial: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <div>
      <div className="text-gray-600" id="reviews">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 py-8">
          <div className="mb-10 space-y-4 px-6 md:px-0">
            <h2 className="text-center text-2xl font-bold text-gray-800 md:text-4xl">
              We have some fans.
            </h2>
          </div>

          <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10"
              >
                <div className="flex gap-4">
                  <img
                    className="w-12 h-12 rounded-full"
                    src={testimonial.image}
                    alt="user avatar"
                    width="200"
                    height="200"
                    loading="lazy"
                  />
                  <div>
                    <h6 className="text-lg font-medium text-gray-700">
                      {testimonial.name}
                    </h6>
                  </div>
                </div>
                <p className="mt-8">{testimonial.feedback}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Test data
const testimonials = [
  {
    name: "Varsha",
    image: "/images/woman.png",
    feedback:
      "GRIVAS Technologies transformed my home effortlessly. From the initial consultation to installation, their team was professional and patient, customizing everything to fit my lifestyle perfectly.",
  },
  {
    name: "Vamsi",
    image: "/images/man.png",
    feedback:
      "Choosing GRIVAS Technologies was the best decision for my home. Their expertise and dedication to customer satisfaction are unparalleled. I highly recommend them for anyone looking to upgrade their home with smart technology.",
  },
  {
    name: "Valli",
    image: "/images/testimonial-valli.jpeg",
    feedback:
      "Thank you GRIVAS Technologies for making my home smarter, safer, and more convenient!",
  },
  // Add more testimonials as needed
];

const App: React.FC = () => {
  return (
    <div>
      <Testimonial testimonials={testimonials} />
    </div>
  );
};

export default App;
