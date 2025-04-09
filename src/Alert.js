import Alert from 'react-bootstrap/Alert';

const BasicAlert = ( ) => {
  
/*    const alerts = [
        'success',
        'danger',
        'light',
        'dark',
        ];
    
/*
    const handleAlert = (variant) => {
            const newAlert = alerts.map((variant) => (
            <Alert key={variant} variant={variant}>
                This is a {variant} alert—check it out!
            </Alert>
            )
            );
    }
*/
    return ( 
        <>
        <div className="alert">
            <Alert key="success" variant="success"> 
                This is an alert!
            </Alert> 
        </div>
        </>
     );
}

  export default BasicAlert;