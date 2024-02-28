const express=require('express')

const app=express();

app.use(express.json())

const student =[
    {    id:1,
        name:"mohan",
        role:"student",
       
    },
    {
        id:2,
        name:"Sohan",
        role:"topper",
    }
];

app.listen(9000,()=>(console.log("server started")))


app.get("/",(req,res)=>{
    res.send(`<h1>This is Home Page</h1>`)
})

app.post('/post',(req,res)=>{
    const {name,role,id}=req.body
    student.push({name,role,id})
    res.json({
        output:student
    }) })


    app.get('/getdata',(req,res)=>{
      
        res.send({
                output:student
            })
    })

    app.get("/:id",(req,res)=>{
        const id= req.params.id;
        
        res.send({
            output:student[id-1]
        })

        // const get = student.find((get)=>get.id === id)
        //  res.json(get);
       
    
       
        res.send(output)
    })

    app.put("/change",(req,res)=>{
        const {oldname,newname}=req.body
        student.map((student)=>{
          student.name==oldname?student.name=newname:student.name;
           })
        
           res.send({
            student
           })
        })

        app.delete('/delete/:id',(req,res)=>{
            const id =req.params.id;
        
           student= student.filter((t)=>(t.id!=id))
          
           res.send("Delete");
        })
    
