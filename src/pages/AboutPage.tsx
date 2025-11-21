import RootLayout from "../layouts/RootLayout";

export default function AboutPage() {
  return (
    <RootLayout>
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          About Me/Us
        </h1>
        <div className="max-w-3xl mx-auto text-lg leading-relaxed space-y-8 text-gray-700 dark:text-gray-300">
          <p>
            Welcome to my portfolio! I'm a passionate developer/designer/creator with a keen eye for detail and a drive to build innovative and impactful digital experiences. My journey in the tech world has been an exciting exploration of various technologies and creative challenges.
          </p>
          <p>
            With expertise in modern web technologies like React, TypeScript, and Tailwind CSS, I specialize in crafting responsive, performant, and user-friendly applications. I thrive on bringing ideas to life, from initial concept and design to deployment and optimization.
          </p>
          <p>
            Beyond coding, I'm deeply interested in [mention a hobby or passion, e.g., UI/UX design, open-source contributions, learning new languages]. This blend of technical skill and creative passion allows me to approach problems with a unique perspective, ensuring solutions are not just functional but also aesthetically pleasing and intuitive.
          </p>
          <p>
            Feel free to explore my projects to see my work in action, and don't hesitate to reach out if you have a project in mind or just want to connect!
          </p>
        </div>
      </div>
    </RootLayout>
  );
}