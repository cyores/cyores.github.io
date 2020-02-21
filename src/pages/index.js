import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import MadeonImg from "../images/madeonBG.jpg";

// data
import experienceData from "../data/experience.json";
import educationData from "../data/education.json";

// icons
import { IoLogoLinkedin, IoLogoGithub, IoIosArrowDown } from "react-icons/io";

// components
import Header from "../components/Header";
import Flex from "../components/utils/Flex";
import Section from "../components/utils/Section.js";
import JobCard from "../components/JobCard.js";
import Project from "../components/Project";
import SEO from "../components/utils/SEO";
import Button from "../components/utils/Button";
import Input from "../components/utils/Input";
import Textarea from "../components/utils/Textarea";
import NetlifyForm from "../components/utils/NetlifyForm";
import Footer from "../components/Footer";
import LogoImg from "../components/utils/LogoImg";

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

const Index = ({
    data: {
        allMarkdownRemark: { edges }
    }
}) => {
    const projects = edges;
    return (
        <>
            <SEO />
            <Header />

            <div className="svg-bg">
                <div
                    className="container"
                    style={{ paddingTop: "var(--space-xl)" }}
                >
                    <Flex>
                        <div
                            style={{
                                flex: "1 0 350px",
                                maxWidth: "600px",
                                textAlign: "center"
                            }}
                        >
                            <Flex>
                                <div
                                    style={{
                                        width: "250px",
                                        height: "250px",
                                        background: "transparent",
                                        borderRadius: "50%",
                                        boxShadow:
                                            "inset 0 0 6px 2px var(--color-primary)"
                                    }}
                                >
                                    <LogoImg
                                        style={{
                                            width: "238px",
                                            marginTop: "6px",
                                            marginLeft: "6px"
                                        }}
                                    />
                                </div>
                            </Flex>
                            <h1>Christian Yores</h1>
                            <Flex>
                                <div
                                    style={{
                                        width: "8vw",
                                        minWidth: "175px",
                                        height: "4px",
                                        background: "var(--color-primary)"
                                    }}
                                ></div>
                            </Flex>
                            <h5>
                                <i>
                                    Hi, I'm Christian. I'm a software engineer
                                    based in Toronto, Canada specializing in
                                    cloud based web applications.
                                </i>
                            </h5>

                            <br></br>

                            <a
                                href="https://linkedin.com/in/christianyores"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Link"
                            >
                                <IoLogoLinkedin
                                    style={{
                                        color: "var(--color-text)",
                                        fontSize: "var(--text-xxxxl)",
                                        marginRight: "var(--space-xxxxs)"
                                    }}
                                    title="LinkedIn"
                                />
                            </a>
                            <a
                                href="https://github.com/cyores"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Github Link"
                            >
                                <IoLogoGithub
                                    style={{
                                        color: "var(--color-text)",
                                        fontSize: "var(--text-xxxxl)",
                                        marginLeft: "var(--space-xxxxs)"
                                    }}
                                    title="Github"
                                />
                            </a>
                        </div>
                    </Flex>
                </div>

                <div
                    style={{
                        position: "absolute",
                        top: "85vh",
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
            </div>

            <br></br>

            <div className="container">
                <span id="projects"></span>
                <Flex style={{ marginBottom: "var(--space-lg)" }}>
                    <h4>Projects</h4>
                    <div
                        style={{
                            width: "100%",
                            height: "2px",
                            background: `url(${MadeonImg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}
                    ></div>
                </Flex>

                <Flex>
                    {projects.map((edge, i) => {
                        const project = edge.node.frontmatter;
                        const desc = edge.node.html;
                        return (
                            <div
                                key={`projectwrapper-${i}`}
                                style={{
                                    width: "100%",
                                    marginBottom: "var(--space-xxl)"
                                }}
                            >
                                <Project
                                    title={project.title}
                                    description={desc}
                                    technologies={project.technologies.split(
                                        ","
                                    )}
                                    liveLink={project.liveLink}
                                    githubLink={project.githubLink}
                                    img={
                                        project.screenshot.childImageSharp.fluid
                                    }
                                    order={i % 2 === 0 ? 0 : 1}
                                />
                            </div>
                        );
                    })}
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

            <br></br>

            <div className="container">
                <span id="contact"></span>
                <Flex style={{ marginBottom: "var(--space-lg)" }}>
                    <h4>Contact</h4>
                    <div
                        style={{
                            width: "100%",
                            height: "2px",
                            background: `url(${MadeonImg})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat"
                        }}
                    ></div>
                </Flex>
                <h5>Send me a message</h5>
                <NetlifyForm
                    name="Contact Form"
                    style={{
                        display: "flex",
                        flexFlow: "column wrap",
                        justifyContent: "space-around"
                    }}
                >
                    <input type="hidden" name="bot-field" />
                    <Input
                        type="text"
                        label="Name"
                        placeholder="Name"
                        onChange={() => console.log("Input changed")}
                    />
                    <Input
                        type="text"
                        label="Email"
                        placeholder="Email"
                        onChange={() => console.log("Input changed")}
                    />
                    <Textarea
                        label="Message"
                        placeholder="Type your message here"
                        onChange={() => console.log("Input changed")}
                    ></Textarea>
                    <Flex dir="rowleft">
                        <Button type="submit">Send</Button>
                    </Flex>
                </NetlifyForm>
            </div>

            <Footer />
        </>
    );
};

export default Index;

export const projectsQuery = graphql`
    query {
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
            edges {
                node {
                    id
                    html
                    frontmatter {
                        title
                        liveLink
                        githubLink
                        technologies
                        screenshot {
                            childImageSharp {
                                fluid(maxWidth: 600) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;
