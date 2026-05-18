const counters=document.querySelectorAll(".counter");
        
        const runCounter=counter=>{
        const target=+counter.getAttribute("data-target");
        let count=0;
        
        const update=()=>{
        const increment=target/100;
        count+=increment;
        
        if(count<target){
        counter.innerText=Math.floor(count);
        requestAnimationFrame(update);
        }else{
        counter.innerText=target+"+";
        }
        };
        update();
        };
        
        const observer2=new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
        if(entry.isIntersecting){
        runCounter(entry.target);
        observer2.unobserve(entry.target);
        }
        });
        });
        
        counters.forEach(counter=>{
        observer2.observe(counter);
        });