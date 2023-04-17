const datereg = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsondatereviver(key,value){
    if(datereg.test(value)){
        return new Date(value);
    }
    return value
}

export async function graphqlendpoint(query, variables = {}) {
    try {
    const response = await fetch( '/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query, variables })
    });
    const body = await response.text();
    const result = JSON.parse(body, jsondatereviver);

    if (result.errors) {
        const error = result.errors[0];
        if (error.extensions.code == 'BAD_USER_INPUT') {
        const details = error.extensions.exception.errors.join('\n ');
        alert(`${error.message}:\n ${details}`);
        } else {
        alert(`${error.extensions.code}: ${error.message}`);
        }
    }
    return result.data;
    } catch (e) {
    alert(`Error in sending data to server: ${e.message}`);
    }
}