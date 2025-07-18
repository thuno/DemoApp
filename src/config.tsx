export default class config {
    static pid = "c344f5c7a52a4a749ee2e49e9c356a3b" // project design
    static url = 'https://redis.ktxgroup.com.vn/api/'
    static imgUrlId = 'https://redis.ktxgroup.com.vn/api/file/img/'
    static uploadUrl = 'https://apicore.wini.vn/api/'
    static fileUrl = "https://file-mamager.wini.vn/";
    // static socketUrl = 'http://localhost:3000/'
    static ggClientId = "632449728851-7ffpkm5q12qaqk5psvr31jblfvgknjvt.apps.googleusercontent.com"
    static onInvalidToken = () => {
    }
    static globalHeaders = () => {
        return { "Content-Type": "application/json" }
    }
}