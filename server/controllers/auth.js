export const authController =  (req, res) => {
    return res.json({tasks : [{ title : "task 1" }, { title : "task 2" }, { title : "task 3" }]
    });
}
