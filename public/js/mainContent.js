let buttons = document.getElementsByClassName("navButt");
let retScrn = document.getElementById("retroScreen");

Array.from(buttons).forEach(function(button) {
    button.addEventListener('click', (event)=>{
        if(document.querySelectorAll('.change').length!==0){
        document.querySelectorAll('.change')[0].className='navButt';
    }
        event.target.className+=' change';
        
        
        retScrn.innerHTML='';
       
        console.log("funtest");
        if(button.innerHTML === 'About'){
            console.log("aboutPage");
            
            const title =  document.createElement('h1');
                title.innerHTML="About Me!";
            retScrn.appendChild(title);

            const bioContainer = document.createElement("div");
                bioContainer.id = "bioContainer";
            retScrn.appendChild(bioContainer);

            const bio = document.createElement('p');
                bio.innerHTML="I am a highly motivated and skilled web developer with a strong background in front-end design. With a passion to build intuitive and visually appealing websites, I have a focus on accessibility as outlined by the W3C. I have proficiency in an Agile environment using tools such as Jira, Confluence, Slack, and GitHub. Working with CodeYouth I had the opportunity to learn from mentors and other dedicated web developers to collaborate on projects using CSS, HTML, JavaScript [DOM, API, SQL]. Taking initiative to progress self-development and education I am always taking an online course. Some sites include: Coursera, freeCodeCamp, Saylor.org. My intention is to work towards becoming a full-stack developer while improving my front-end capabilities. In my free time, I enjoy reading, meditation, and daily hikes with my dog. I stay up to date with the latest web development trends and techniques, and love to experiment with new technologies. I am always looking for ways to improve my skills and learn new things, and am excited to bring my expertise and enthusiasm to new challenges and projects."
                bio.id="bio";
            bioContainer.appendChild(bio);

        }else if(button.innerHTML === 'Projects'){
            console.log("resumePage");

            const title1 =  document.createElement('h1');
                title1.innerHTML="Projects";
            retScrn.appendChild(title1);

        }else if(button.innerHTML === 'Resume'){

            console.log("resume");
            const title2 =  document.createElement('h1');
                title2.innerHTML="Resume";
            retScrn.appendChild(title2);

        }else if(button.innerHTML === 'Contact'){
            
            console.log("contactPage");
            const title3 =  document.createElement('h1');
                title3.innerHTML="Contact Me";
            retScrn.appendChild(title3);
        }
        button.classList.remove("focus"); 
    })
})