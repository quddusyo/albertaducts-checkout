const express = require('express');
var cors = require('cors')
const stripe = require('stripe')('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')

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async(req, res) => {
    // stripe uses "price" instead of "id" and "lineItems" instead of "items"
    // console.log(req.body)
    //format price to how stripe requires
    let items = req.body.items
    let lineItems = [];
    items.forEach(item => {
        lineItems.push(
            {
                price : item.id,
                quantity : item.quantity
            }
        )
    });

    // create payment session
    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });
    //send session url to front end
    res.send(JSON.stringify({
        url: session.url
    }))
})

app.listen(4000, () => console.log("Listenning on Port 4000."));
