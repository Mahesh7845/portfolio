const SectionCard = ({ id, children }) => {
    return (
        <section
            id={id}
            className="section-card mb-8 scroll-mt-28 rounded-2xl p-10"
        >
            {children}
        </section>
    );
};

export default SectionCard;