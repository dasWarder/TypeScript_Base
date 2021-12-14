const strip = (x: string | number) => {
    return typeof x === 'number' ?
        x.toFixed(2) :
        x.trim();
}

class MyResponse {
    header: string = 'response header';
    result: string = 'result';
};

class MyError {
    header: string = 'error header';
    message: string = 'error message';
};


const handle = (response: MyResponse | MyError) => {

    const field = response instanceof MyResponse ?
        response.result :
        response.message;
    return {
        info: response.header + field
    };
}


type AlertType = 'success' | 'warn' | 'danger';

const setAlertType = (type: AlertType) => {

};

setAlertType('success');
setAlertType('warn');
// setAlertType('default'); - not valid