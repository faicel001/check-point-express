const isAuth = (req, res, next) => {
    let date=new Date()
    let hour = date.getHours();
    let day = date.getDay();
    if ((hour >= 9 && hour <= 17) && (day >= 1 && day <= 5)) {
        console.log("authorised");
        next();
    } else {
        res.status(401).send("sorry we are closed");
    }
};

// export the function
module.exports = isAuth;