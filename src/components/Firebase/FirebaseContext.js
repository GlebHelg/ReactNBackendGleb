import React from 'react';

// createContext basicly creates 2 components 
// FirebaseContext.Provider
// FirebaseContext.Consumer
const FirebaseContext = React.createContext(null);

export const withFirebase= Component => props => (
    <FirebaseContext.Consumer>
        {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
);

export default FirebaseContext;