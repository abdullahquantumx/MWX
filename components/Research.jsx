import React from "react";
import Link from "next/link";


export default function Fourthcomponent() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="text-center mb-10 text-2xl font-bold text-gray-800">
        Some Interesting Research Below
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="card max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://lh3.googleusercontent.com/lLW57DqUaadYg6TlUsgPae0L7UWwOvHXZHKpCucmAoq19KUBSTU2CCN0wxBlhoA1Ak3sFe-ZVC_zF35wQekd47GapIwSN5L4oPzOU68Nkk6cblvqGg=w1984-rw"
            alt="Card"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="font-semibold text-lg text-gray-800">
              Protein Structure Prediction Made Simple
            </div>
            <div className="text-gray-600 mt-2">
              This 2021 paper details AlphaFold, a protein structure prediction system that revolutionized the field of computational biology. AlphaFold achieves near-atomic accuracy, making it a groundbreaking advancement.
            </div>
          </div>
          <div className="flex justify-between p-4 border-t">
            <Link href="https://deepmind.google/technologies/alphafold/" passHref>
              <button className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                View Details
              </button>
            </Link>
            <Link href="https://www.google.com" passHref>
              <button className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                Download PDF
              </button>
            </Link>
          </div>
        </div>
        <div className="card max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/09/Diifusion_Models_JndNsEZ.png"
            alt="Card"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="font-semibold text-lg text-gray-800">
              Diffusion Models
            </div>
            <div className="text-gray-600 mt-2">
              This paper surveys diffusion models, a new class of generative models that have shown promise in image generation. They can create high-fidelity images by progressively adding noise to an image and then learning to remove it.
            </div>
          </div>
          <div className="flex justify-between p-4 border-t">
            <Link href="https://arxiv.org/pdf/1706.03762" passHref>
              <button className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                View Details
              </button>
            </Link>
            <Link href="https://www.google.com" passHref>
              <button className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                Download PDF
              </button>
            </Link>
          </div>
        </div>
        <div className="card max-w-xs bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs42256-019-0102-2/MediaObjects/42256_2019_102_Fig1_HTML.png"
            alt="Card"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <div className="font-semibold text-lg text-gray-800">
              Graph Neural Networks
            </div>
            <div className="text-gray-600 mt-2">
              A primer on Graph Neural Networks, which are capable of capturing dependencies in graph-structured data, making them valuable for applications in social networks, biological networks, and more.
            </div>
          </div>
          <div className="flex justify-between p-4 border-t">
            <Link href="https://arxiv.org/abs/1812.08434" passHref>
              <button className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                View Details
              </button>
            </Link>
            <Link href="https://www.google.com" passHref>
              <button className="bg-green-600 text-white px-3 py-2 rounded-md text-sm font-medium">
                Download PDF
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
