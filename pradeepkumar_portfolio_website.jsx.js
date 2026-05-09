export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-6">
      <div className="max-w-5xl mx-auto space-y-8">
        <section className="bg-white rounded-3xl shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-2">Chinnolla Pradeep Kumar</h1>
          <p className="text-lg text-gray-600">
            Aspiring Scrum Master | QA Enthusiast | Team Handling Experience | Open to Remote Opportunities
          </p>

          <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-gray-50 rounded-2xl p-4">
              <h2 className="font-semibold mb-2">Location</h2>
              <p>Andhra Pradesh, India</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <h2 className="font-semibold mb-2">Focus Areas</h2>
              <p>Agile • Scrum • QA • Team Coordination</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-4">
              <h2 className="font-semibold mb-2">Availability</h2>
              <p>Open for Remote & Startup Opportunities</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">About Me</h2>
          <p className="leading-7 text-gray-700">
            Motivated professional with experience in customer operations, team coordination, and process handling.
            Interested in Agile methodologies, Scrum practices, and QA processes. Passionate about learning,
            problem-solving, and contributing to fast-growing startups and product teams.
          </p>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Agile Methodology",
              "Scrum Basics",
              "Sprint Planning",
              "Jira",
              "Team Coordination",
              "QA Testing Basics",
              "Communication Skills",
              "Problem Solving",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-50 rounded-2xl p-4 font-medium"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Experience</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-black pl-4">
              <h3 className="text-xl font-semibold">Team Leader – Meesho Chat Process</h3>
              <p className="text-gray-500">Customer Operations & Team Handling</p>
              <ul className="list-disc ml-5 mt-3 text-gray-700 space-y-2">
                <li>Handled customer support operations and query resolution.</li>
                <li>Managed team coordination and daily workflow activities.</li>
                <li>Supported process improvements and escalation handling.</li>
                <li>Worked collaboratively with internal teams for smoother operations.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">Scrum Workflow Project</h3>
              <p className="text-gray-700 leading-6">
                Practiced Agile ceremonies including sprint planning, stand-ups,
                backlog tracking, and retrospective activities.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-2">QA Testing Practice</h3>
              <p className="text-gray-700 leading-6">
                Worked on manual testing concepts, test case writing,
                bug reporting, and validation scenarios.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-3xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p className="text-gray-700 mb-2">Add your LinkedIn profile link here</p>
          <p className="text-gray-700">Add your email address here</p>
        </section>
      </div>
    </div>
  )
}
