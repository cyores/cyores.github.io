import React from "react";

const NetlifyForm = ({ name, style, children }) => (
    <>
        <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name={name}
            style={style}
        >
            {children}
        </form>
    </>
);

export default NetlifyForm;
