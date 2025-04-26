"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About MCP Registry
          </h1>
          <p className="text-xl text-gray-600">
            Empowering MCP server communities
          </p>
        </div>

        <div className="space-y-12">
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              MCP Registry is dedicated to creating a centralized platform for
              MCP server communities. We aim to simplify server discovery,
              enhance community engagement, and provide tools that help server
              owners grow their communities effectively.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-indigo-600">
                  Server Discovery
                </h3>
                <p className="text-gray-600">
                  Find the perfect MCP server for your playstyle with our
                  comprehensive search and filtering system.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-indigo-600">
                  Community Tools
                </h3>
                <p className="text-gray-600">
                  Access powerful tools to manage your server listing, engage
                  with your community, and track your server's growth.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you're a server owner looking to grow your community or a
              player searching for your next favorite server, MCP Registry is
              here to help.
            </p>
            <div className="flex justify-center">
              <a
                href="/servers"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Get Started
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
