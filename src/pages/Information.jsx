import "./Information.css";

export default function Information() {
    return (
        <div className="info-container">
            <div className="info-card">

                <h1 className="info-title">About This Website</h1>

                <p className="guide-text">
                    This is not an official tourism website, and it does not represent any  
                    institution or organization. It was created simply as an informative guide for anyone 
                    who wants to explore Nicaragua, whether you are a local traveler looking for new places 
                    to visit, or an international tourist interested in discovering what the country has to offer.

                </p>

                <p className="guide-text">
                    The page is still a work in progress, and it will continue improving over time. 
                    New features, more detailed information, and useful tools will be added gradually to make 
                    the experience even better. Everything is designed to be easy to understand and helpful 
                    for planning your trips around the country.
                </p>

                <p className="guide-text">
                    This website does not ask for, store, or process any personal information from users. 
                    Your privacy is fully respected at all times. You can explore all the content freely and 
                    safely while we continue building and expanding the guide step by step.
                </p>

                <p className="info-end">
                    Thank you for visiting 🇳🇮
                </p>

            </div>
        </div>
    );
}
