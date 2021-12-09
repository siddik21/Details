const family=[
    {
    id: 11,
    name: 'Abu Bakkar Siddik',
    location: 'Dinajpur',
    relation: 'Myself',
    phn: '01303525188',
    gander: 'Male'
    },
    {
    id: 12,
    name: 'Jillur Rahman',
    location: 'Bonani',
    relation: 'Mama',
    phn: '01750673648',
    gander: 'Male'
    },
    {
    id: 13,
    name: 'Anowara Begum',
    location: 'Bolidara',
    relation: 'Ma',
    phn: '01723323145',
    gander: 'Female'
    },
    {
    id: 14,
    name: 'Amirul Islam',
    location: 'Ranisonkail',
    relation: 'Baba',
    phn: '01780870289',
    gander: 'Male'
    },
    {
    id: 15,
    name: 'Jakeya Rahman',
    location: 'Dhaka',
    relation: 'Friend',
    phn: '01773106060',
    gander: 'Female'
    }

]




family.map(data=>{
    if(data.gander == 'Male'){
        console.log(`
        ID:         ${data.id}
        Name:       ${data.name}
        Location:   ${data.location}
        Relation:   ${data.relation}
        Phone:      ${data.phn}
        `)
    }
})

console.log(`================================================`);

family.map(data=>
    {
        if(data.name == 'Jakeya Rahman'){
            console.log(`
            ID:         ${data.id}
            Name:       ${data.name}
            Location:   ${data.location}
            Relation:   ${data.relation}
            Phone:      ${data.phn}
            `);
        }
    })


console.log(`=================================================`);

family.map(data=>
    {
        if(data.phn == '01780870289'){
            console.log(`
            ID:         ${data.id}
            Name:       ${data.name}
            Location:   ${data.location}
            Relation:   ${data.relation}
            Phone:      ${data.phn}
            `);
        }
    })