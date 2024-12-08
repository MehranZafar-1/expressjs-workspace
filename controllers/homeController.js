const homeController = (req, res) => {
    
    const data = {
        name: "Mehran",
        userId: 2
    }

    res.render("index", data);
};

export {homeController};