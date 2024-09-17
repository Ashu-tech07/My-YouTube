
import React from 'react'

const commentData=[
    {
    name:'Ashish',
    text: "Lorem espum text e set shin win min fin..",
    replies:[{
    name:'Ashish',
    text: "Lorem espum text e set shin win min fin..",
    replies:[{
        name:'Ashish',
        text: "Lorem espum text e set shin win min fin..",
        replies:[{
            name:'Ashish',
            text: "Lorem espum text e set shin win min fin..",
            replies:[{
                name:'Ashish',
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
        name:'Ashish',
        text: "Lorem espum text e set shin win min fin..",
        replies:[{
            name:'Ashish',
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
            name:'Ashish',
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
            name:'Ashish',
            text: "Lorem espum text e set shin win min fin..",
            replies:[],
            }],
        }]
},
{
    name:'Sonu',
    text: "Lorem espum text e set shin win min fin..",
    replies:[{
        name:'Ashish',
        text: "Lorem espum text e set shin win min fin..",
        replies:[{
            name:'Ashish',
            text: "Lorem espum text e set shin win min fin..",
            replies:[{
                name:'Ashish',
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
    <div className='flex shadow-sm bg-gray-100 p-2 rounded-lg my-2'>
        <img className='w-8 h-8'  alt='user' src='https://cdn-icons-png.flaticon.com/512/149/149071.png'/>
        <div className='px-3'>
            <p className='font-bold'>{name}</p>
            <p>{text}</p>
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
    <div className='m-5 p-2'>
      <h1 className='font-bold text-2xl'>Comments : </h1>
      <CommentsList comments={commentData} />
    </div>
  )
}

export default CommentsContainer
