import React from "react";

class BxHelpLink extends React.Component {
    render() {
        const {text, term} = this.props;

        return (
            <a href={`https://solana-labs.github.io/book/terminology.html#${term}`} target="_new">
                <i className={"fa fa-question"} title={text}></i>
            </a>
        );
    }
}

export default BxHelpLink;