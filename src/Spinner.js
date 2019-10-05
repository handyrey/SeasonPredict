import React from 'react';

const Spinner = (props) => {
    return(
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
            </div>
        </div>
    );
};

// usage: to make a default props when forget to put any props inside the component
Spinner.defaultProps = {
    message: 'Please kindly click the allow button to get to know your current weather...'
}

export default Spinner;