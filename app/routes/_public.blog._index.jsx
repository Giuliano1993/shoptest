import { Link } from "react-router";

const BLOG_POSTS = [
    {
        slug: "future-of-design",
        title: "The Future of Digital Design",
        excerpt: "Exploring the trends that will shape the next decade of user interfaces.",
        date: "Oct 12, 2023",
        category: "Trends"
    },
    {
        slug: "minimalism-is-dead",
        title: "Is Minimalism Dead?",
        excerpt: "Why maximalism is making a comeback and how to use it effectively.",
        date: "Sep 28, 2023",
        category: "Opinion"
    },
    {
        slug: "color-theory-2024",
        title: "Advanced Color Theory",
        excerpt: "Going beyond the wheel: using color to evoke emotion and drive action.",
        date: "Sep 15, 2023",
        category: "Tutorial"
    }
];

export default function BlogIndex() {
    return (
        <div className="container" style={{ paddingTop: "var(--spacing-lg)", paddingBottom: "var(--spacing-xl)" }}>
            <h1 style={{ fontSize: "3rem", marginBottom: "var(--spacing-lg)", textAlign: "center" }} className="animate-fade-in">
                Thoughts & <span style={{ color: "var(--color-accent)" }}>Insights</span>
            </h1>

            <div style={gridStyle}>
                {BLOG_POSTS.map((post, index) => (
                    <Link
                        to={`/blog/${post.slug}`}
                        key={post.slug}
                        style={cardStyle}
                        className="animate-fade-in"
                    >
                        <div style={cardImagePlaceholderStyle}></div>
                        <div style={cardContentStyle}>
                            <div style={metaStyle}>
                                <span>{post.category}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                            </div>
                            <h2 style={titleStyle}>{post.title}</h2>
                            <p style={excerptStyle}>{post.excerpt}</p>
                            <span style={readMoreStyle}>Read Article →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "var(--spacing-md)",
};

const cardStyle = {
    display: "block",
    backgroundColor: "var(--color-surface)",
    borderRadius: "var(--radius-lg)",
    overflow: "hidden",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    textDecoration: "none",
};

const cardImagePlaceholderStyle = {
    width: "100%",
    height: "200px",
    backgroundColor: "#2a2a2a",
    background: "linear-gradient(135deg, #2a2a2a 0%, #333 100%)",
};

const cardContentStyle = {
    padding: "var(--spacing-md)",
};

const metaStyle = {
    display: "flex",
    gap: "8px",
    fontSize: "0.8rem",
    color: "#888",
    marginBottom: "var(--spacing-xs)",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
};

const titleStyle = {
    fontSize: "1.5rem",
    marginBottom: "var(--spacing-xs)",
    color: "var(--color-text)",
};

const excerptStyle = {
    color: "#ccc",
    marginBottom: "var(--spacing-md)",
    fontSize: "0.95rem",
};

const readMoreStyle = {
    color: "var(--color-accent)",
    fontWeight: "600",
    fontSize: "0.9rem",
};
