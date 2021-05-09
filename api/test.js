const { default: fetch } = require("node-fetch");

module.exports = async (req, res) => {
    const b = await fetch(
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=512&date=31-03-2021"
    );

    res.json({
        body: await b.text(),
    });
};
