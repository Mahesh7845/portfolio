import SectionCard from "../components/SectionCard";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <SectionCard id="projects">
            <p className="mb-2 text-sm tracking-widest text-zinc-400">
        // PROJECTS
            </p>

            <h2 className="mb-10 text-3xl font-bold text-white">
                Featured Projects
            </h2>

            {/* PROJECT 1 */}
            <ProjectCard
                title="Cryptocurrency Price Prediction"
                images={[
                    "/images/ccpp1.jpeg",
                    "/images/ccpp2.jpeg",
                    "/images/ccpp3.jpeg",
                    "/images/ccpp4.jpeg",
                ]}
                tech={[
                    "Python",
                    "Machine Learning",
                    "Flask",
                    "Data Analysis",
                ]}
                demoLink="https://github.com/Mahesh7845/Crypto-Currency-Price-Prediction"

                description="Cryptocurrency Price Prediction is a machine learning–based application
        designed to forecast future cryptocurrency prices using historical market data.
        The project involves data preprocessing, feature engineering, and training
        predictive models in Python to improve accuracy and reliability. A Flask-based
        web interface enables users to input parameters and visualize predictions
        through an interactive and user-friendly dashboard."
            />

            {/* PROJECT 2 */}
            <ProjectCard
                title="Food Industries Website"
                images={[
                    "/images/image1.png",
                    "/images/image2.png",
                    "/images/image3.png",
                ]}
                tech={[
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Responsive Design",
                ]}
                demoLink="https://github.com/Mahesh7845/Food-industry-website-Project"

                description="Developed a responsive food industry website with dynamic UI components.
        The project includes interactive pages, optimized layouts, and a clean user
        experience focused on usability and performance across all devices."
            />
        </SectionCard>
    );
};

export default Projects;
