const serviceArray = [
    {
        id: '1',
        title: 'Duct Cleaning All Ducts Included',
        price: '150'
    },
    {
        id: '2',
        title: 'Dryer Vent & Cold-Air Brushing',
        price: '80'
    },
    {
        id: '3',
        title: 'Furnace Cleaning',
        price: '60'
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