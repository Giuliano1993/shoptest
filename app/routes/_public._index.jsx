import { Link } from "react-router";

export default function Index() {
    return (
        <div>
            {/* Hero Section */}
            <section style={heroSectionStyle}>
                <div className="container">
                    <h1 style={heroTitleStyle} className="animate-fade-in">
                        Crafting Digital <br />
                        <span style={gradientTextStyle}>Experiences</span>
                    </h1>
                    <p style={heroSubtitleStyle} className="animate-fade-in">
                        I design interfaces that breathe, move, and inspire.
                    </p>
                    <div style={{ marginTop: "var(--spacing-md)" }} className="animate-fade-in">
                        <Link to="/contact" className="btn">Let's Talk</Link>
                    </div>
                </div>
            </section>

            {/* Featured Work Preview */}
            <section className="container" style={{ paddingBottom: "var(--spacing-xl)" }}>
                <h2 style={{ marginBottom: "var(--spacing-lg)", textAlign: "center" }}>Selected Works</h2>
                <div style={gridStyle}>
                    {[1, 2, 3].map((item) => (
                        <div key={item} style={cardStyle}>
                            <div style={cardImagePlaceholderStyle}></div>
                            <div style={cardContentStyle}>
                                <h3>Project {item}</h3>
                                <p style={{ color: "#888" }}>UI/UX Design • Branding</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

const heroSectionStyle = {
    minHeight: "80vh",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
};

const heroTitleStyle = {
    fontSize: "clamp(3rem, 8vw, 6rem)",
    marginBottom: "var(--spacing-sm)",
    lineHeight: 1.1,
};

const gradientTextStyle = {
    background: "linear-gradient(45deg, var(--color-accent), var(--color-accent-secondary))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
};

const heroSubtitleStyle = {
    fontSize: "1.25rem",
    color: "#aaa",
    maxWidth: "600px",
    margin: "0 auto",
};

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "var(--spacing-md)",
};

const cardStyle = {
    backgroundColor: "var(--color-surface)",
    borderRadius: "var(--radius-lg)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
    cursor: "pointer",
};

const cardImagePlaceholderStyle = {
    width: "100%",
    height: "250px",
    backgroundColor: "#2a2a2a",
    background: "linear-gradient(135deg, #2a2a2a 0%, #333 100%)",
};

const cardContentStyle = {
    padding: "var(--spacing-md)",
};
