import "./Information.css";

export default function Information() {
    return (
        <div className="info-container">
            <div className="info-card">

                <h1 className="info-title">About This Website</h1>

                <p className="guide-text">
                    This is not an official tourism website and does not represent any 
                    institution or organization. It was created as an independent guide 
                    for anyone who wants to explore Nicaragua, whether you are a local 
                    traveler looking for new places to visit or an international tourist 
                    interested in discovering what the country has to offer.
                </p>

                <p className="guide-text">
                    This website is a work in progress and will continue improving over time. 
                    New features, more detailed information, and useful tools will be added 
                    gradually to enhance the overall experience. Everything is designed to be 
                    simple, clear, and helpful for planning your trips around the country.
                </p>

                <p className="guide-text">
                    To improve the website and support it through advertising, we use 
                    third-party services such as Google Analytics and Google AdSense. 
                    These services may collect anonymized data such as pages visited, 
                    device information, and general location in order to understand how 
                    the website is used and to display relevant ads.
                </p>

                <p className="guide-text">
                    If you are located in the European Economic Area (EEA), you will be 
                    asked to provide consent before cookies or tracking technologies are used. 
                    You can choose to accept or reject these cookies at any time.
                </p>

                <p className="guide-text">
                    Your privacy is important, and we aim to handle all data responsibly 
                    and transparently while you explore the content freely.
                </p>

                <p className="info-end">
                    Thank you for visiting 🇳🇮
                </p>

            </div>
        </div>
    );
}