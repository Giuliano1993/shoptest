export default function About() {
    return (
        <div className="container" style={{ paddingTop: "var(--spacing-lg)", paddingBottom: "var(--spacing-xl)" }}>
            <div style={gridStyle}>
                <div className="animate-fade-in">
                    <div style={imagePlaceholderStyle}></div>
                </div>

                <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                    <h1 style={{ fontSize: "3rem", marginBottom: "var(--spacing-md)" }}>
                        Who <span style={{ color: "var(--color-accent)" }}>Am I?</span>
                    </h1>

                    <p style={textStyle}>
                        I'm a digital artisan based in the cloud. My passion lies in the intersection of
                        aesthetics and functionality. I don't just build websites; I craft experiences
                        that leave a lasting impression.
                    </p>

                    <p style={textStyle}>
                        With a background in graphic design and a love for clean code, I bring a unique
                        perspective to every project. I believe that good design is invisible—it just works.
                    </p>

                    <div style={{ marginTop: "var(--spacing-lg)" }}>
                        <h3 style={{ marginBottom: "var(--spacing-sm)" }}>My Toolkit</h3>
                        <div style={tagContainerStyle}>
                            {["UI/UX Design", "React", "Shopify", "3D Modeling", "Motion Graphics"].map(skill => (
                                <span key={skill} style={tagStyle}>{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "var(--spacing-xl)",
    alignItems: "center",
};

const imagePlaceholderStyle = {
    width: "100%",
    aspectRatio: "1/1",
    backgroundColor: "#2a2a2a",
    borderRadius: "var(--radius-lg)",
    background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
    boxShadow: "var(--shadow-glow)",
};

const textStyle = {
    fontSize: "1.1rem",
    color: "#ccc",
    marginBottom: "var(--spacing-sm)",
};

const tagContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--spacing-xs)",
};

const tagStyle = {
    padding: "8px 16px",
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    borderRadius: "100px",
    fontSize: "0.9rem",
    border: "1px solid rgba(255, 255, 255, 0.1)",
};
