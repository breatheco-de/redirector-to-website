export default function handler(req, res) {
    const requestPathAndQuery = req.url || "/";
    res.redirect(301, `https://4geeksacademy.com${requestPathAndQuery}`);
}
