const baseUrl = 'http://8.141.83.81:8080/';
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", baseUrl + theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    // 返回json对象
    return JSON.parse(xmlHttp.responseText);
}
function httpPost(theUrl, word)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", baseUrl + theUrl, false ); // false for synchronous request
    // 将请求头设置为json格式
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send( word );
    // 返回json对象
    return JSON.parse(xmlHttp.responseText);
}

function then(result) {
    alert(result.operation + result.resultType);
}
