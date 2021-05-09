const { default: fetch } = require("node-fetch");

module.exports = async (req, res) => {
    const b = await fetch(
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=512&date=31-03-2021",
        {
            headers: {
                Host: "https://www.cowin.gov.in",
                "user-agent":
                    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.114 Safari/537.36",
            },
        }
    );

    res.json({
        body: await b.text(),
    });
};
