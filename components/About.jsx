import React from 'react';


export default function Aboutus() {
  return (
    <div className="h-screen w-screen bg-slate-600">
      <div className="flex flex-col w-full min-h-screen">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between pt-20">
          {/* Content Section */}
          <div className="w-full md:w-[85%] mb-8">
            <h1 className="text-4xl text-black">
              About Us
            </h1>
            <div className="ml-5 mt-12 md:mt-0 text-base md:text-lg leading-6 text-[#e4d9ff] space-y-6">
              <p>
                The Machine Learning for Everyone (ML4E) Club at the National Institute of Technology Rourkela is a dynamic and vibrant community dedicated to fostering knowledge, innovation, and collaboration in the field of machine learning and artificial intelligence. As one of the leading technical clubs on campus, it serves as a hub for students passionate about exploring the cutting-edge advancements in these transformative technologies.
              </p>
              <p>
                The club envisions a future where machine learning is a fundamental skill accessible to all, empowering students to solve real-world problems and innovate across various domains. Membership is open to all students of NIT Rourkela who have an interest in machine learning and artificial intelligence. The club values enthusiasm, curiosity, and a willingness to learn. By joining, members gain access to a wealth of resources, including hackathons, project opportunities, and a network of like-minded peers.
              </p>
              <div className="mt-12 text-right">
                <a href="#" className="bg-[#4b2a80] py-2 px-6 no-underline text-[#e4d9ff] text-lg rounded-md inline-block transition-transform hover:scale-105">
                  Join the community
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}
