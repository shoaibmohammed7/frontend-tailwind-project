import { VideoCard } from "./VideoCard"


const VIDEOS =[{
        title:"Understanding Web3 from Scratch | Learn web3 in 30days",
        creater:"Shoaib",
        views:"100K",
        timestamp:"12 days ago",
        image:"photo.jpg",
        thumImg:"thumbnail.jpg"

},{
        title:"Understanding Web3 from Scratch | Learn web3 in 30days",
        creater:"Shoaib",
        views:"100K",
        timestamp:"12 days ago",
        image:"photo.jpg",
        thumImg:"thumbnail.jpg"
},{
        title:"Understanding Web3 from Scratch | Learn web3 in 30days",
        creater:"Shoaib",
        views:"100K",
        timestamp:"12 days ago",
        image:"photo.jpg",
        thumImg:"thumbnail.jpg"
},{
    title:"Understanding Web3 from Scratch | Learn web3 in 30days",
    creater:"Shoaib",
    views:"100K",
    timestamp:"12 days ago",
    image:"photo.jpg",
    thumImg:"thumbnail.jpg"
},{
    title:"Understanding Web3 from Scratch | Learn web3 in 30days",
    creater:"Shoaib",
    views:"100K",
    timestamp:"12 days ago",
    image:"photo.jpg",
    thumImg:"thumbnail.jpg"
},{
    title:"Understanding Web3 from Scratch | Learn web3 in 30days",
    creater:"Shoaib",
    views:"100K",
    timestamp:"12 days ago",
    image:"photo.jpg",
    thumImg:"thumbnail.jpg"
},{
    title:"Understanding Web3 from Scratch | Learn web3 in 30days",
    creater:"Shoaib",
    views:"100K",
    timestamp:"12 days ago",
    image:"photo.jpg",
    thumImg:"thumbnail.jpg"
},{
    title:"Understanding Web3 from Scratch | Learn web3 in 30days",
    creater:"Shoaib",
    views:"100K",
    timestamp:"12 days ago",
    image:"photo.jpg",
    thumImg:"thumbnail.jpg"
},{
    title:"Understanding Web3 from Scratch | Learn web3 in 30days",
    creater:"Shoaib",
    views:"100K",
    timestamp:"12 days ago",
    image:"photo.jpg",
    thumImg:"thumbnail.jpg"
}
]




export const VideoGrid = ()=> {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {VIDEOS.map(video => <div>
        <VideoCard
                title={video.title}
                creater={video.creater}
                views={video.views}
                timestamp={video.timestamp}
                image={video.image}
                thumImg={video.thumImg}
                >  </VideoCard>
        
        </div>)}
        </div>

    
}