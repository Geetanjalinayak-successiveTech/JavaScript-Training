//Q5. Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

function priorityTask(tasks,parallel)
{
    tasks.sort((a,b)=>b.priority -a.priority);

    let result=[];

    async function runTasks()
    {
        for(let i=0;i<tasks.length;i+=parallel)
        {
            const batch= tasks.slice(i,i+=parallel).map();
            
        }
        
    }
}