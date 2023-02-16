let buttons = document.getElementsByClassName("navButt");
let retScrn = document.getElementById("retroScreen");

Array.from(buttons).forEach(function(button) {
    button.addEventListener('click', (event)=>{
        console.log("funtest");

        if(document.querySelectorAll('.change').length!==0){
            document.querySelectorAll('.change')[0].className='navButt';
        }

        event.target.className+=' change';
        retScrn.innerHTML='';
       
        if(button.innerHTML === 'About'){
            console.log("aboutPage");
            
            const title =  document.createElement('h1');
                title.className="subTit";
                title.innerHTML="About Me!";
            retScrn.appendChild(title);

            const conCan = document.createElement('div');
                conCan.className="conCan";
            retScrn.appendChild(conCan);

            const bio = document.createElement('p');
                bio.innerHTML=`
                I am a highly motivated and skilled web developer with a strong background in front-end design. With a passion to build intuitive and visually appealing websites, I have a focus on accessibility as outlined by the W3C. I have proficiency in an Agile environment using tools such as Jira, Confluence, Slack, and GitHub. Working with CodeYouth I had the opportunity to learn from mentors and other dedicated web developers to collaborate on projects using CSS, HTML, JavaScript [DOM, API, SQL]. Taking initiative to progress self-development and education I am always taking an online course. Some sites include: Coursera, freeCodeCamp, Saylor.org. My intention is to work towards becoming a full-stack developer while improving my front-end capabilities. In my free time, I enjoy reading, meditation, and daily hikes with my dog. I stay up to date with the latest web development trends and techniques, and love to experiment with new technologies. I am always looking for ways to improve my skills and learn new things, and am excited to bring my expertise and enthusiasm to new challenges and projects.
                `
                bio.className="con";
            conCan.appendChild(bio);

        }else if(button.innerHTML === 'Projects'){
            console.log("resumePage");

            const title1 =  document.createElement('h1');
                title1.className="subTit";
                title1.innerHTML="Projects";
            retScrn.appendChild(title1);

            const conCan1 = document.createElement('div');
                conCan1.className="conCan";
            retScrn.appendChild(conCan1);

            const prod = document.createElement('p');
                prod.innerHTML=`
                    I am a highly motivated and skilled web developer with a strong background in front-end design. With a passion to build intuitive and visually appealing websites, I have a focus on accessibility as outlined by the W3C. I have proficiency in an Agile environment using tools such as Jira, Confluence, Slack, and GitHub. Working with CodeYouth I had the opportunity to learn from mentors and other dedicated web developers to collaborate on projects using CSS, HTML, JavaScript [DOM, API, SQL]. Taking initiative to progress self-development and education I am always taking an online course. Some sites include: Coursera, freeCodeCamp, Saylor.org. My intention is to work towards becoming a full-stack developer while improving my front-end capabilities. In my free time, I enjoy reading, meditation, and daily hikes with my dog. I stay up to date with the latest web development trends and techniques, and love to experiment with new technologies. I am always looking for ways to improve my skills and learn new things, and am excited to bring my expertise and enthusiasm to new challenges and projects.
                `
                prod.className="con";
            conCan1.appendChild(prod);

        }else if(button.innerHTML === 'Resume'){
            console.log("resume");
            
            const title2 =  document.createElement('h1');
                title2.className="subTit"
                title2.innerHTML="Resume";
            retScrn.appendChild(title2);

            const conCan2 = document.createElement('div');
                conCan2.className="conCan";
            retScrn.appendChild(conCan2);
            
            const res = document.createElement('p');
                res.innerHTML=`
                    I am a highly motivated and skilled web developer with a strong background in front-end design. With a passion to build intuitive and visually appealing websites, I have a focus on accessibility as outlined by the W3C. I have proficiency in an Agile environment using tools such as Jira, Confluence, Slack, and GitHub. Working with CodeYouth I had the opportunity to learn from mentors and other dedicated web developers to collaborate on projects using CSS, HTML, JavaScript [DOM, API, SQL]. Taking initiative to progress self-development and education I am always taking an online course. Some sites include: Coursera, freeCodeCamp, Saylor.org. My intention is to work towards becoming a full-stack developer while improving my front-end capabilities. In my free time, I enjoy reading, meditation, and daily hikes with my dog. I stay up to date with the latest web development trends and techniques, and love to experiment with new technologies. I am always looking for ways to improve my skills and learn new things, and am excited to bring my expertise and enthusiasm to new challenges and projects.
                `
                res.className="con";
            conCan2.appendChild(res);
        }

        else if(button.innerHTML === 'Contact'){
            console.log("contactPage");
            
            const title3 =  document.createElement('h1');
                title3.className="subTit"
                title3.innerHTML="Contact Me";
            retScrn.appendChild(title3);
        
            const conCan3 = document.createElement('div');
                conCan3.className="conCan";
            retScrn.appendChild(conCan3);

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