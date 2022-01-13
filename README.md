# KolkataCovidRemedy

#youllneverwalkalone
/**

 * Common Get method

 * @param {*} url : string

 */

export async function getApi (url) {

    try{

        let response = await fetch(`${process.env["REACT_APP_BACKEND_API"]}${url}`,{method:"GET"});

        let data = await response.json();

        return data;

    } catch(error){

        throw new Error(error);

    }

}




/**

 * Common API to Create an Entity / common post API

 * @param {*} url : string

 * @param {*} argBody : Object

 */

export async function postApi (url,argBody) {

    try{

        let response = await fetch(`${process.env["REACT_APP_BACKEND_API"]}${url}`,

                {method:"POST",body:JSON.stringify(argBody)

            });

        let data = await response.json();

        return data;

    } catch(error){

        throw new Error(error);

    }

}



/**

 * Common API to Create an Entity / common post API with download functionality

 * @param {*} url : string

 * @param {*} argBody : Object

 */

export async function postApiDownload (url,argBody) {

    try{

        let response = await fetch(`${process.env["REACT_APP_BACKEND_API"]}${url}`,

            {method:"POST",body:JSON.stringify(argBody)

        });

        let filename = response.headers.get("content-disposition");

        filename = filename.split('filename=')[1].split(';')[0]

        let data = await response.text();

        return {filename, data};

    } catch(error){

        throw new Error(error);

    }

}




/**

 * Common Update method to update entity 

 * @param {} url : string

 * @param {*} argId : string

 * @param {*} argBody : object

 */

export async function updateApi (url,argId,argBody) {

    try{

        let response = await fetch(`${process.env["REACT_APP_BACKEND_API"]}${url}?id=${argId}`,{method:"POST",body:JSON.stringify(argBody)});

        let data = await response.json();

        return data;

    } catch(error){

        throw new Error(error);

    }

}

  
