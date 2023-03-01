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
            const conCan = document.createElement('div'); 
                conCan.className="conCan";
            retScrn.appendChild(conCan);

            const title =  document.createElement('h1');
                title.className="subTit";
                title.innerHTML="About Me!";
            conCan.appendChild(title);

            const bio = document.createElement('p');
                bio.innerHTML=`
                <div id="innerCont">
                    <div class="conCan-ButtonSelectContainer">
                        <button>Overview</button>
                    </div>
                    <div class="conTxt"> 
                        <p>I am a highly motivated and skilled web developer with a strong background in front-end design. With a passion to build intuitive and visually appealing websites, I have a focus on accessibility as outlined by the W3C. I have proficiency in an Agile environment using tools such as Jira, Confluence, Slack, and GitHub. Working with CodeYouth I had the opportunity to learn from mentors and other dedicated web developers to collaborate on projects using CSS, HTML, JavaScript [DOM, API, SQL]. Taking initiative to progress self-development and education I am always taking an online course. Some sites include: Coursera, freeCodeCamp, Saylor.org. My intention is to work towards becoming a full-stack developer while improving my front-end capabilities. In my free time, I enjoy reading, meditation, and daily hikes with my dog. I stay up to date with the latest web development trends and techniques, and love to experiment with new technologies. I am always looking for ways to improve my skills and learn new things, and am excited to bring my expertise and enthusiasm to new challenges and projects.<p>
                    </div>
                </div>
                `
                bio.className="con";
            conCan.appendChild(bio);

        
        }else if(button.innerHTML === 'Projects'){// -- Projects Page
            console.log("resumePage");// -- page test

            const conCan1 = document.createElement('div');
                conCan1.className="conCan";
            retScrn.appendChild(conCan1);

            const title1 =  document.createElement('h1');
                title1.className="subTit";
                title1.innerHTML="Projects";
            conCan1.appendChild(title1);

            const prod = document.createElement('p');
                prod.innerHTML=`
                <a href="#">KESHB Schools</a>
                `
                prod.className="con";
            conCan1.appendChild(prod);
        
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
                title22.classname='subTit';
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
                    I am a highly motivated and skilled web developer with a strong background in front-end design. With a passion to build intuitive and visually appealing websites, I have a focus on accessibility as outlined by the W3C. I have proficiency in an Agile environment using tools such as Jira, Confluence, Slack, and GitHub. Working with CodeYouth I had the opportunity to learn from mentors and other dedicated web developers to collaborate on projects using CSS, HTML, JavaScript [DOM, API, SQL]. Taking initiative to progress self-development and education I am always taking an online course. Some sites include: Coursera, freeCodeCamp, Saylor.org. My intention is to work towards becoming a full-stack developer while improving my front-end capabilities. In my free time, I enjoy reading, meditation, and daily hikes with my dog. I stay up to date with the latest web development trends and techniques, and love to experiment with new technologies. I am always looking for ways to improve my skills and learn new things, and am excited to bring my expertise and enthusiasm to new challenges and projects.
                `
                cont.className="con";
            conCan3.appendChild(cont);
        
        }



        button.classList.remove("focus"); 
    })
})