export const Languages = ({
    languagesLabel,
    technicallanguage,
}) => {
    return (
        <>
            <section className="technical-languages section" id="languages">
                <h3 className="section-title">{languagesLabel}</h3>
                <div className="languages__content bd-grid">
                    <ul className="languages__data">
                        {technicallanguage.map((language) => <Language key={language} language={language} />)}
                    </ul>
                </div>
            </section>
        </>
    );
}

const Language = ({ language }) => (
    <li className="languages__name">
        <span className="languages__circle" /> {language}
    </li>
);