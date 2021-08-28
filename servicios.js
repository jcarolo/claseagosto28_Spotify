

let uri= "https://api.spotify.com/v1/artists/49Z1AvGeUaBSanPaOmplK6/top-tracks?market=US"
let token =" Bearer BQBE6hJgxzoZhUWWvS91oahgg02ej9Db1r_J0d19P_dmp9P_UFXdhWVE_PmdiNCA5LXO9ZlvP4E3OQEN05EqZ9xTn81gxmxgb-16XhKKOiT9bd4aeqQJE1oHqRgoyI-Ruk0KDjZn5-sqh1NUTucSlmf6H2wnZ80";
 let parametrosPeticion= {


    method: "GET",
    headers: {Authorization:token
    }    
 }
 

 fetch(uri,parametrosPeticion)
 .then(function(respuesta){
    return (respuesta.json ());
 })
 .then(function(respuesta){
     console.log(respuesta);
      })
      .catch(function(error){
          console.log(error);
      })