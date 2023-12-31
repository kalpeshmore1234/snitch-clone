const products = [
    {
       id: 1,
        img: "https://www.snitch.co.in/cdn/shop/products/Snitch_March22_1504_720x.jpg?v=1651928313",
        img1: "https://www.snitch.co.in/cdn/shop/products/Snitch_March22_1484_720x.jpg?v=1651928313",
        img2: "https://www.snitch.co.in/cdn/shop/products/Snitch_March22_1479_120x.jpg?v=1651928313",
        img3: "https://www.snitch.co.in/cdn/shop/products/Snitch_March22_1468_120x.jpg?v=1651928313",
        title: "BREEZE NAVY SHIRT",
        price: 699,
        sizes: ['S', 'M', 'L', 'XL'],
        qty: 1,
    },
    {
        id: 2,
        img: "https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54090_720x.jpg?v=1671105702",
        img1: "https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54077_720x.jpg?v=1671105702",
        img2: "https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54077_720x.jpg?v=1671105702",
        img3: "https://www.snitch.co.in/cdn/shop/products/Geovani_22ndNov54063_120x.jpg?v=1671105702",
        title: "ZIG ZAG WHITE SHIRT",
        price: 899,
        sizes: ['S', 'M', 'L', 'XL'],
        qty: 1,
    },
    {
        id: 3,
        img: "https://www.snitch.co.in/cdn/shop/products/Snitch_Nov30th21_10153_720x.jpg?v=1650521545",
        img1: "https://www.snitch.co.in/cdn/shop/products/Snitch_Nov30th21_10151_120x.jpg?v=1650521545",
        img2: "https://www.snitch.co.in/cdn/shop/products/Snitch_Nov30th21_10151_120x.jpg?v=1650521545",
        img3: "https://www.snitch.co.in/cdn/shop/products/Snitch_Nov30th21_10144_120x.jpg?v=1639222752",
        title: "BALMY BLACK SWEATER",
        price: 1099,
        qty: 1,
    },
    {
        id: 4,
        img: "https://www.snitch.co.in/cdn/shop/products/Lazar_Oct16078_720x.jpg?v=1676639941",
        img1: "https://www.snitch.co.in/cdn/shop/products/Lazar_Oct16086_720x.jpg?v=1676639941",
        img2: "https://www.snitch.co.in/cdn/shop/products/Lazar_Oct16072_120x.jpg?v=1676639941",
        img3: "https://www.snitch.co.in/cdn/shop/products/Lazar_Oct16067_120x.jpg?v=1676639941",
        title:"ABSTRACT CIRCLE MAROON SHIRT",
        price: 1099,
        qty: 1
    },

    {
        id: 5,
        img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/products/Amin4132_800x.jpg?v=1661251916?v=42487986978978",
        img1: "https://www.snitch.co.in/cdn/shop/files/NOTAG-DOTTEDSHIRT-1M85_720x.jpg?v=1693572297",
        img2: "https://www.snitch.co.in/cdn/shop/files/NOTAG-DOTTEDSHIRT-1M21_120x.jpg?v=1693572297",
        img3: "https://www.snitch.co.in/cdn/shop/files/NOTAG-DOTTEDSHIRT-1M25_120x.jpg?v=1693572297",

        sizes: ['S', 'M', 'L', 'XL'],
        price: 890,
        title: "KOLAM BLACK SHIRT",
        qty: 1,
    },

    {
        id: 6,
        img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2326-02-M34_800x.jpg?v=1692879415?v=43631335178402",
        img1: "https://www.snitch.co.in/cdn/shop/files/4MSS2326-02-M34_720x.jpg?v=1692879415",
        img2: "https://www.snitch.co.in/cdn/shop/files/4MSS2326-02-M38_120x.jpg?v=1692879415",
        img3: "https://www.snitch.co.in/cdn/shop/files/4MSS2326-02-M12_120x.jpg?v=1692879415",
        sizes: ['S', 'M', 'L', 'XL'],
        price: 890,
        title: "ASTRAL WEAVE STRIPE NAVY SHIRT",
        qty: 1,
    },
    {
        id: 7,
        img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2145-01-M41_800x.jpg?v=1692962855?v=43639705632930",
        img1: "https://www.snitch.co.in/cdn/shop/files/4MST2145-01-M41_120x.jpg?v=1692962855",
        img2: "https://www.snitch.co.in/cdn/shop/files/4MST2145-01-M47_120x.jpg?v=1692962855",
        img3: "https://www.snitch.co.in/cdn/shop/files/4MST2145-01-M20_120x.jpg?v=1692962855",
        sizes: ['S', 'M', 'L', 'XL'],
        price: 890,
        title: "GALACTIC GLOW BLACK OVERSIZED T-SHIRT",
        qty: 1,
    },
    {
        id: 8,
        img: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2393-02-M52_800x.jpg?v=1692881223?v=43632914071714",
        img1: "https://www.snitch.co.in/cdn/shop/files/4MSS2393-02-M52_120x.jpg?v=1692881223",
        img2: "https://www.snitch.co.in/cdn/shop/files/4MSS2393-02-M13_120x.jpg?v=1692961359",
        img3: "https://www.snitch.co.in/cdn/shop/files/4MSS2393-02-M13_120x.jpg?v=1692961359",
        sizes: ['S', 'M', 'L', 'XL'],
        price: 1499,
        title: "HARBOR CHECK RED SHIRT",
        qty: 1,
    },
    {
        id: 9,
        img: "https://www.snitch.co.in/cdn/shop/files/4MSS2392-02-M27_720x.jpg?v=1692790843",
        img1: "https://www.snitch.co.in/cdn/shop/files/4MSS2392-02-M39_720x.jpg?v=1692790843",
        img2: "https://www.snitch.co.in/cdn/shop/files/4MSS2392-02-M8_120x.jpg?v=1692790843",
        img3: "https://www.snitch.co.in/cdn/shop/files/4MSS2392-02-M1_120x.jpg?v=1692790843",
        sizes: ['S', 'M', 'L', 'XL'],
        price: 1499,
        title: "ZENITH STRIPE BLACK SHIRT",
        qty: 1,
    },
    {
        id: 10,
        img: "https://www.snitch.co.in/cdn/shop/files/4MSS2312-02-M_720x.jpg?v=1692782815",
        img1: "https://www.snitch.co.in/cdn/shop/files/4MSS2312-02-M29_120x.jpg?v=1692782815",
        img2: "https://www.snitch.co.in/cdn/shop/files/4MSS2312-02-M141_120x.jpg?v=1692782815",
        img3: "https://www.snitch.co.in/cdn/shop/files/4MSS2312-02-M21_120x.jpg?v=1692782815",

        sizes: ['S', 'M', 'L', 'XL'],
        price: 1199,
        title: "SHEER GAZE BLACK OVERSIZED SHIRT",
        qty: 1,
    },
    {
        id: 11,
        img: "https://www.snitch.co.in/cdn/shop/products/Dimmy_Augusto3920_720x.jpg?v=1680351299",
        img1: "https://www.snitch.co.in/cdn/shop/products/Dimmy_Augusto3925_720x.jpg?v=1680351299",
        img2: "https://www.snitch.co.in/cdn/shop/products/Dimmy_Augusto3879_120x.jpg?v=1680351299",
        img3: "https://www.snitch.co.in/cdn/shop/products/Dimmy_Augusto3873_120x.jpg?v=1680351299",
        sizes: ['S', 'M', 'L', 'XL'],
        price: 1199,
        title: "BLUE SPLATTER WHITE SHIRT",
        qty: 1,
    },
    {
        id: 12,
        img: "https://www.snitch.co.in/cdn/shop/files/4MSS2100-01-M33_720x.jpg?v=1692705872",
        img1: "https://www.snitch.co.in/cdn/shop/files/4MSS2100-01-M18_120x.jpg?v=1692710873",
        img2: "https://www.snitch.co.in/cdn/shop/files/4MSS2100-01-M22_59929530-5c7a-41a5-b3e3-293885020838_120x.jpg?v=1692710873",
        img3: "https://www.snitch.co.in/cdn/shop/files/4MSS2100-01-M6_120x.jpg?v=1692705872",
        sizes: ['S', 'M', 'L', 'XL'],
        price: 1199,
        title: "PRISTINE RED OVERSIZED SHIRT",
        qty: 1,
    },
]

export default products