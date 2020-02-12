import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import MadeonImg from "../images/madeon270.jpg";

// project images
import OpenSurveyScreen from "../images/screenshots/opensurvey-screen.jpg";
import RVBScreen from "../images/screenshots/rvb-screen.jpg";
import TAMScreen from "../images/screenshots/tam-screen.jpg";
import MLBScreen from "../images/screenshots/mlbstats-screen.jpg";
import MPScreen from "../images/screenshots/mp-screen.jpg";
import AdclipseScreen from "../images/screenshots/adclipse-screen.jpg";

// data
import experienceData from "../data/experience.json";
import educationData from "../data/education.json";
import projectData from "../data/projects.json";

// icons
import { IoLogoLinkedin, IoLogoGithub, IoIosArrowDown } from "react-icons/io";

// components
import Header from "../components/Header";
import Flex from "../components/utils/Flex";
import Section from "../components/utils/Section.js";
import JobCard from "../components/JobCard.js";
import Project from "../components/Project";
import SEO from "../components/utils/SEO";

const AnimateScrollDownArrow = styled.div`
    @keyframes fadeIn {
        0% {
            transform: translateY(0);
            opacity: 0;
        }
        100% {
            transform: translateY(25px);
            opacity: 1;
        }
    }
    transform: translateY(0%);
    animation-name: fadeIn;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease;
`;

const screenshots = [
    { project: "OpenSurvey", image: OpenSurveyScreen },
    { project: "Teach A Machine", image: TAMScreen },
    { project: "Rent VS Buy", image: RVBScreen },
    { project: "MLB Stats", image: MLBScreen },
    { project: "Master Password", image: MPScreen },
    { project: "Adclipse", image: AdclipseScreen }
];

const Index = () => {
    const data = useStaticQuery(
        graphql`
            query Index_SiteTitleQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    );

    return (
        <>
            <SEO title="Home" />
            <Header />

            <div
                className="container"
                style={{
                    marginTop: "16vh",
                    marginBottom: "16vh",
                    minHeight: "75vh"
                }}
            >
                <h1
                    style={{
                        fontSize: "calc(1.75 * var(--text-xxxxl))",
                        lineHeight: 1
                    }}
                >
                    {data.site.siteMetadata.title}
                </h1>

                <h3 style={{ marginTop: "-33px", marginBottom: 0 }}>
                    Full Stack Developer
                </h3>

                <br></br>

                <Flex dir="rowleft">
                    <div
                        style={{
                            width: "8vw",
                            height: "4px",
                            background: "var(--color-primary)"
                        }}
                    ></div>
                </Flex>

                <br></br>

                <Flex dir="rowleft">
                    <a
                        href="https://linkedin.com/in/christianyores"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoLinkedin
                            style={{
                                color: "var(--color-text)",
                                fontSize: "var(--text-xxxxl)",
                                marginRight: "var(--space-xxxxs)"
                            }}
                        />
                    </a>
                    <a
                        href="https://github.com/cyores"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <IoLogoGithub
                            style={{
                                color: "var(--color-text)",
                                fontSize: "var(--text-xxxxl)",
                                marginLeft: "var(--space-xxxxs)"
                            }}
                        />
                    </a>
                </Flex>
            </div>

            <div
                style={{
                    position: "absolute",
                    bottom: "33px",
                    width: "100%"
                }}
            >
                <Flex>
                    <AnimateScrollDownArrow>
                        <IoIosArrowDown
                            style={{ fontSize: "var(--text-xxl)" }}
                        />
                    </AnimateScrollDownArrow>
                </Flex>
            </div>

            <br></br>

            <div className="container">
                <span id="projects"></span>
                <Flex style={{ marginBottom: "var(--space-lg)" }}>
                    <h4>Projects</h4>
                    <div
                        style={{
                            width: "95%",
                            height: "2px",
                            background: `url(${MadeonImg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}
                    ></div>
                </Flex>

                <Flex>
                    {projectData.projects.map((project, i) => (
                        <div
                            style={{
                                width: "100%",
                                marginBottom: "var(--space-xxl)"
                            }}
                        >
                            <Project
                                title={project.title}
                                description={project.description}
                                technologies={project.technologies}
                                liveLink={project.liveLink}
                                githubLink={project.githubLink}
                                img={screenshots.find(
                                    screen => screen.project === project.title
                                )}
                                order={i % 2 === 0 ? 0 : 1}
                            />
                        </div>
                    ))}
                </Flex>

                <Flex>
                    <div
                        style={{
                            width: "8vw",
                            height: "4px",
                            background: "var(--color-primary)"
                        }}
                    ></div>
                </Flex>
            </div>

            <div className="container-full">
                <span id="experience"></span>
                <Section title={experienceData.title}>
                    {experienceData.jobs.map(job => (
                        <JobCard key={`job-${job.company}`} data={job} />
                    ))}
                </Section>

                <span id="education"></span>
                <Section title={educationData.title}>
                    {educationData.schools.map(school => (
                        <React.Fragment key={`school-${school.name}`}>
                            <h5>{school.name}</h5>
                            <h6>
                                {school.degree}, &nbsp; {school.graduationDate}
                            </h6>

                            <p>{school.description}</p>
                            <p>
                                <small>{school.extra}</small>
                            </p>
                        </React.Fragment>
                    ))}
                </Section>
            </div>

            <footer
                style={{
                    background: "var(--color-fg)",
                    height: "25vh",
                    marginTop: "var(--space-xxxxl)",
                    textAlign: "center"
                }}
            >
                <Flex>
                    <div>
                        <p>© {new Date().getFullYear()} Christian Yores</p>
                        Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
                    </div>
                </Flex>
            </footer>
        </>
    );
};

export default Index;
