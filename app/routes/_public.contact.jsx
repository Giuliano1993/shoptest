export default function Contact() {
    return (
        <div className="container" style={{ paddingTop: "var(--spacing-lg)", paddingBottom: "var(--spacing-xl)" }}>
            <div style={{ maxWidth: "600px", margin: "0 auto" }}>
                <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }} className="animate-fade-in">
                    <h1 style={{ fontSize: "3rem" }}>Get in <span style={{ color: "var(--color-accent-secondary)" }}>Touch</span></h1>
                    <p style={{ color: "#aaa", fontSize: "1.1rem" }}>
                        Have a project in mind? Let's create something amazing together.
                    </p>
                </div>

                <form style={formStyle} className="animate-fade-in" onSubmit={(e) => e.preventDefault()}>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Name</label>
                        <input type="text" style={inputStyle} placeholder="Your Name" />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Email</label>
                        <input type="email" style={inputStyle} placeholder="your@email.com" />
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Message</label>
                        <textarea style={{ ...inputStyle, minHeight: "150px" }} placeholder="Tell me about your project..."></textarea>
                    </div>

                    <button type="submit" className="btn" style={{ width: "100%", border: "none", cursor: "pointer", fontSize: "1rem" }}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
}

const formStyle = {
    backgroundColor: "var(--color-surface)",
    padding: "var(--spacing-lg)",
    borderRadius: "var(--radius-lg)",
    border: "1px solid rgba(255, 255, 255, 0.05)",
};

const inputGroupStyle = {
    marginBottom: "var(--spacing-md)",
};

const labelStyle = {
    display: "block",
    marginBottom: "var(--spacing-xs)",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#ccc",
};

const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "var(--radius-md)",
    color: "var(--color-text)",
    fontFamily: "var(--font-primary)",
    fontSize: "1rem",
    outline: "none",
    transition: "border-color 0.3s ease",
};
