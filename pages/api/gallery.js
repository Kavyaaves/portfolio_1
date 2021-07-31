


export default function handler(req, res) {
    // Get data from your database
    const marineImages = [
        [{
            id: 1,
            name: 'Acanthophora spicifera',
            url: '/marine/Acanthophora spicifera.JPG',
            caption: 'imagae 1',
        },
        {

            id: 2,
            name: 'Avrainvillea erecta',
            url: '/marine/Avrainvillea erecta.jpg',
            caption: 'imagae 1',
        },
        {
            id: 3,

            name: 'Boergesenia forbesii',
            url: '/marine/Boergesenia forbesii.jpg',
            caption: 'imagae 1',
        }],
        [{
            id: 4,

            name: 'Botryocladia sp',
            url: '/marine/Botryocladia sp.JPG',
            caption: 'imagae 1',
        },
        {
            id: 5,

            name: 'Caulerpa cupressoides',
            url: '/marine/Caulerpa cupressoides.jpg',
            caption: 'imagae 1',
        },
        {
            id: 6,

            name: 'Caulerpa racemosa',
            url: '/marine/Caulerpa racemosa.jpg',
            caption: 'imagae 1',
        }],
        [{
            id: 8,

            name: 'Caulerpa scalpelliformis',
            url: '/marine/Caulerpa scalpelliformis.JPG',
            caption: 'imagae 1',
        },
        {
            id: 9,

            name: 'Caulerpa taxifolia',
            url: '/marine/Caulerpa taxifolia.jpg',
            caption: 'imagae 1',
        },
        {
            id: 10,

            name: 'Caulerpa',
            url: '/marine/Caulerpa.jpg',
            caption: 'imagae 1',
        }],
    ];
    const freshWaterImages = [[{
        id: 7,
        name: 'Colpomenia sinuosa',
        url: '/marine/Colpomenia sinuosa.jpg',
        caption: 'imagae 1',
    },
    {

        id: 2,
        name: 'Dictyosphaeria cavernosa',
        url: '/marine/Dictyosphaeria cavernosa.jpg',
        caption: 'imagae 1',
    },
    {
        id: 3,

        name: 'Halimeda bearing Gametangia',
        url: '/marine/Halimeda bearing Gametangia.jpg',
        caption: 'imagae 1',
    }],
    [{
        id: 4,

        name: 'Liagora sp',
        url: '/marine/Liagora sp.jpg',
        caption: 'imagae 1',
    },
    {
        id: 5,

        name: 'Lobophora variegata',
        url: '/marine/Lobophora variegata.jpg',
        caption: 'imagae 1',
    },
    {
        id: 6,

        name: 'Martensia',
        url: '/marine/Martensia_114654.jpg',
        caption: 'imagae 1',
    }],
    [{
        id: 8,

        name: 'Halimeda',
        url: '/marine/Halimeda.jpg',
        caption: 'imagae 1',
    },
    {
        id: 9,

        name: 'Spatoglossum variabile',
        url: '/marine/Spatoglossum variabile.jpg',
        caption: 'imagae 1',
    },
    {
        id: 10,

        name: 'Ulva sp',
        url: '/marine/Ulva sp.jpg',
        caption: 'imagae 1',
    }]]

    const all = { marine: marineImages, freshWater: freshWaterImages }
    res.status(200).json(all);
}