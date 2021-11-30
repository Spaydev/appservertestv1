
const modelGetRefId = require("../models/modelGetRefId")


module.exports.getRef_id = async (req, res) => {
    const refd = req.query.ref_id;
    // console.log(refd);

    const data = await modelGetRefId.getData(refd)
    res.send(data)

}