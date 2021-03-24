const mon=require('mongoose');
mon.connect('mongodb://localhost:27017/Alpha', { useNewUrlParser:true,useUnifiedTopology:true})
.then(() =>{
    console.log("YEAAAH Mongo")
})
.catch(err =>{
    console.log("oh no Mongo")
})
const Paper= require('./models/news');


// const f=new Farm({
//     name: 'grapes',
//     price: 24.22,
//     category: 'fruit'
// })
// f.save().then(data => {
//     console.log(data)
// })
// .catch(err =>{
//     console.log(err)
// })

const seedata=[{
    title: 'Falcon 9 Starlink v1.0 L22 set for liftoff from Cape Canaveral SLC-40rot',
    image: 'https://www.nasaspaceflight.com/wp-content/uploads/2021/03/B1060_40_Turksat5A-min.jpg',
    description: 'The Starlink constellation is set to receive another 60 satellites this week. Falcon 9 B1060-6 is scheduled to launch on Falcon 9’s ninth flight of 2021 and fourth flight this month. Liftoff is targeted for 4:28 am EDT (08:28 UTC) on Wednesday March 24, the 15th anniversary of SpaceX’s first ever orbital launch attempt.',
    featured: false 

},
{
    title: 'Bluestaq wins $280 million Space Force contract to expand space data catalog',
    image: 'https://spacenews.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-23-at-6.14.45-PM.png',
    description: 'Bluestaq received a $280 million contract from the U.S. Space Force to expand the Unified Data Library of space objects.',
    featured: true 

},
{
    title: 'Starlink and OneWeb satellites ready for launch on opposite sides of the world',
    image: 'https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2021/03/f9_soyuz.jpg',
    description: 'SpaceX and OneWeb — space industry rivals and owners of two of the largest fleets of commercial satellites — are set to add more spacecraft to their internet networks Wednesday with launches from Cape Canaveral and Russia.',
    featured: false 

},
{
    title: 'Global Eagle Entertainment completes Chapter 11 restructuring',
    image: 'https://spacenews.com/wp-content/uploads/2020/07/EEHPuN6UYAECemo.jpg',
    description: 'Global Eagle Entertainment, a provider of media services and satellite Wi-Fi to aircraft, boats and remote locations, has exited Chapter 11 bankruptcy.',
    featured: false 

}]

Paper.insertMany(seedata).then(data => {
    console.log(data)
})
.catch(err =>{
    console.log(err)
})