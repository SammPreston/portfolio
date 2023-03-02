let buttons = document.getElementsByClassName("navButt");
let retScrn = document.getElementById("retroScreen");

Array.from(buttons).forEach(function(button) {
    button.addEventListener('click', (event)=>{
        console.log("funtest");

        if(document.querySelectorAll('.change').length!==0){// -- Dynamic Button
            document.querySelectorAll('.change')[0].className='navButt';
        }

        event.target.className+=' change';
        retScrn.innerHTML='';
       
        if(button.innerHTML === 'About'){// -- About Me Page
            console.log("aboutPage"); // -- page test
           // -- Main content container
            const conCan = document.createElement('div'); 
                conCan.className="conCan";
            retScrn.appendChild(conCan);

            // -- Content Title
            const title =  document.createElement('h1');
                title.className="subTit";
                title.innerHTML="About Me!";
            conCan.appendChild(title);

           
                // -- inner about me container
                const fileViewer = document.createElement('div');
                    fileViewer.className='fileViewer';   
                conCan.appendChild(fileViewer);

                // -- button navigation
                const fileNavigation = document.createElement('div');
                    fileNavigation.className='fileNavigation';
                fileViewer.appendChild(fileNavigation)
                // -- button creation
                const overView = document.createElement('button');
                    overView.innerHTML="Overview";
                fileNavigation.appendChild(overView);
                if
                // -- Inner content text
                // .. Need function simular to the navButts where screen clears onclick
                const conTxt = document.createElement('div');
                    conTxt.innerHTML=`
                    <h6>Hello World!</h6>
                    <div class="txt"> 
                        <P>
                            The theme for this website is space retro. Taking design concepts from my childhood my interactive screen is inpired by Windows 2000. 
                        </p>
                    </div>
                    `
                    conTxt.className='conTxt';
                fileViewer.appendChild(conTxt);
                    

        
        }else if(button.innerHTML === 'Projects'){// -- Projects Page
            console.log("resumePage");// -- page test

            const conCan1 = document.createElement('div');
                conCan1.className="conCan";
            retScrn.appendChild(conCan1);

            const title1 =  document.createElement('h1');
                title1.className="subTit";
                title1.innerHTML="Projects";
            conCan1.appendChild(title1);

            const fileNavigation1 = document.createElement('div');
                fileNavigation1.className='fileNavigation';
            conCan1.appendChild(fileNavigation1);
            
            const overView1 = document.createElement('button');
                    overView1.innerHTML="Overview";
            fileNavigation1.appendChild(overView1);

            const conTxt1 = document.createElement('div');
                conTxt1.className='conTxt';
                conTxt1.innerHTML=`
                <h6>Project OverView</h6>
                <div class="txt">
                <p>This is a p tag</p>
                </div>
                `
            conCan1.appendChild(conTxt1);
        
        }else if(button.innerHTML === 'Resume'){// -- Resume Page
            console.log("resume");// -- page test
            
            const conCan2 = document.createElement('div');
                conCan2.className="conCan";
            retScrn.appendChild(conCan2);

            const title2 =  document.createElement('h1');
                title2.className="subTit"
                title2.innerHTML="Resume";
            conCan2.appendChild(title2);

            const res = document.createElement('p');
                res.innerHTML=`
                <div id="resSubmission">
                <img src="/public/img/codeYouthIcon.jpg" class="resIcon">
                <span class="resTxt">
                <a href="#">Code Youth:</a>
                </span> 
                </div>
                `
                res.className="con";
            conCan2.appendChild(res);
        
        }else if(button.innerHTML === 'Dev Resources'){// -- Development Resources
            console.log("devReasourcePage")// -- page test

            const conCan22 = document.createElement('div');
                conCan22.className='conCan';
            retScrn.appendChild(conCan22);

            const title22 = document.createElement('h1');
                title22.className='subTit';
                title22.innerHTML="Useful Resources for Developers";
            conCan22.appendChild(title22);

        }else if(button.innerHTML === 'Contact'){ // -- Contact Me page
            console.log("contactPage");

            const conCan3 = document.createElement('div');
                conCan3.className="conCan";
            retScrn.appendChild(conCan3);

            const title3 =  document.createElement('h1');
                title3.className='subTit';
                title3.innerHTML="Contact Me";
            conCan3.appendChild(title3);
        
            
            const cont = document.createElement('p');
                cont.innerHTML=`
                    
                `
                cont.className="con";
            conCan3.appendChild(cont);
        
        }



        button.classList.remove("focus"); 
    })
})