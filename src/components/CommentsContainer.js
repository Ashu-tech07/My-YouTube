
import React from 'react'

const commentData=[
    {
    name:'Ashish',
    text: "Lorem espum text e set shin win min fin..",
    replies:[{
    name:'Rose',
    text: "Lorem espum text e set shin win min fin..",
    replies:[{
        name:'Allen',
        text: "Lorem espum text e set shin win min fin..",
        replies:[{
            name:'Harry',
            text: "Lorem espum text e set shin win min fin..",
            replies:[{
                name:'Avinash',
                text: "Lorem espum text e set shin win min fin..",
                replies:[{
                    name:'Ashish',
                    text: "Lorem espum text e set shin win min fin..",
                    replies:[{
                        name:'Ashish',
                        text: "Lorem espum text e set shin win min fin..",
                        replies:[],
                        }],
                    }],
                }],
            }],
        }],
    }]
},
{
    name:'Avanish',
    text: "Lorem espum text e set shin win min fin..",
    replies:[{
        name:'Anju',
        text: "Lorem espum text e set shin win min fin..",
        replies:[{
            name:'Anuj',
            text: "Lorem espum text e set shin win min fin..",
            replies:[],
            }],
        }]
},
{
    name:'Rohit',
    text: "Lorem espum text e set shin win min fin..",
    replies:[{
        name:'Ashish',
        text: "Lorem espum text e set shin win min fin..",
        replies:[{
            name:'Anuj',
            text: "Lorem espum text e set shin win min fin..",
            replies:[],
            }],
        }]
},
{
    name:'Samsher',
    text: "Lorem espum text e set shin win min fin..",
    replies:[{
        name:'Ashish',
        text: "Lorem espum text e set shin win min fin..",
        replies:[{
            name:'Rohit',
            text: "Lorem espum text e set shin win min fin..",
            replies:[],
            }],
        }]
},
{
    name:'Sonu',
    text: "Lorem espum text e set shin win min fin..",
    replies:[{
        name:'Aksah',
        text: "Lorem espum text e set shin win min fin..",
        replies:[{
            name:'Imran',
            text: "Lorem espum text e set shin win min fin..",
            replies:[{
                name:'Jolly',
                text: "Lorem espum text e set shin win min fin..",
                replies:[{
                    name:'Anna',
                    text: "Lorem espum text e set shin win min fin..",
                    replies:[{
                        name:'Ashish',
                        text: "Lorem espum text e set shin win min fin..",
                        replies:[],
                        }],
                    }],
                }],
            }],
        }]
},
{
    name:'Rajni',
    text: "Lorem espum text e set shin win min fin..",
    replies:[]
},
{
    name:'Neha',
    text: "Lorem espum text e set shin win min fin..",
    replies:[]
},
]

const Comment=( {data} )=>{
    const {name,text, replies}=data
return(
    <div className='flex items-center'>
        <div className='m-3'>
        <img className='w-8 h-8 rounded-full'  alt='user' src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
        </div>
        <div className='px-3'>
            <p className='font-semibold text-xs'>{name}</p>
            <p className='text-sm'>{text}</p>
        </div>
    </div>
)
}

const CommentsList=({comments})=>{
    return comments.map((comment,index)=>(
        <div key={index}> 
            <Comment  data={comment}/>
            <div className='ml-5 border border-l-black pl-5'>
                <CommentsList comments={comment?.replies}/>
            </div>
        </div>
   
))
}
const CommentsContainer = () => {

  return (
    <div>
      <h1 className='font-medium mb-2 text-lg'>Comments : </h1>
      <CommentsList comments={commentData} />
    </div>
  )
}

export default CommentsContainer
