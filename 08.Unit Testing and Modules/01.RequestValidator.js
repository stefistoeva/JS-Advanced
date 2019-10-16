function solve(obj) {
    const validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const uriRegex = /^[A-z0-9.]+$/gm;
    const validVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const messageRegex = /(^[^<>&\\'"]*$)/gm;

    if(!(obj.method && validMethods.includes(obj.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!(obj.uri && (obj.uri.match(uriRegex) || obj.uri == '*'))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if(!(obj.version && validVersion.includes(obj.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if(!(obj.hasOwnProperty('message') && obj.message.match(messageRegex))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

let test0 = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

let obj = {
    method: 'GET',
    uri: 'kkk jjjj',
    version: 'HTTP/0.8',
    message: ''
};

try {
    console.log(solve(obj));
} catch(e) {
    console.log(e);
}
