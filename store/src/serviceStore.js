const serviceArray = [
    {
        id: 'price_1N7TugCYJGJYM4RVxIITDTXa',
        title: 'Duct Cleaning All Ducts Included',
        img_url: 'https://images.unsplash.com/photo-1635604866833-70844856de75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1122&q=80',
        price: '149.99'
    },
    {
        id: 'price_1N7TxUCYJGJYM4RVJIiB5NrP',
        img_url: 'https://images.unsplash.com/photo-1564448049208-10deaa9044e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=963&q=80',
        title: 'Dryer Vent & Cold-Air Intake Brushing per unit',
        price: '49.99'
    },
    {
        id: 'price_1N7U1yCYJGJYM4RViRgU2ZPE',
        img_url: "https://plus.unsplash.com/premium_photo-1661963753278-af66c671bbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
        title: 'Furnace Cleaning per unit',
        price: '79.99'
    }
]

function getServiceData(id) {
    let serviceData = serviceArray.find(product => product.id === id);

    if (serviceData === undefined) {
        console.log('Service data does not exist for ID: ' + id);
        return undefined;
    }

    return serviceData;
}

export { serviceArray, getServiceData };