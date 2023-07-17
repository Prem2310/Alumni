
import '../App.css';
import SearchIcon from '@mui/icons-material/Search';
import { useRef } from 'react';

export const Home = () => {
    const ref = useRef(null);
    const scrolltoRef = useRef();
    const handleAboutUs = () => {
        ref.current?.scrollIntoView({behaviour:"smooth"});
    };
    const handleLogIn=()=>{
        window.location.href="/login";
    };
    const handleHome=()=>{
        window.location.href="/";
    };
    

    return(
        <div className="home-page">
        
        <header>
        <p className='alumni-logo'>Alumni</p>
        
        
        <nav className="navbar">
        <li onClick={handleLogIn}>LOGIN</li>
        <li onClick={handleHome}>HOME</li>
        <li onClick={handleAboutUs}>ABOUT US</li>
        </nav>
        
        </header>
        <div className='hero'></div>
        <div className='content'>
            <h5 className='re-connect'>Here to Re-Connect?</h5>
            <h1 className='main-heading' > Welcome to our <br/> Alumni Management System</h1>
            <button className='alumni-search' onClick={()=> {scrolltoRef.current.scrollIntoView({behaviour:"smooth"})}} ><SearchIcon style={{verticalAlign:"middle"}}/> Find Alumni's</button>
            
        </div>
        <div className='events'>
        <small className='upcoming'>  Upcoming Events</small>
        <hr />
        <div className='event-list'>
         <small className='date'>18 July</small>
         <h3>Ribbon Cutting Ceremony</h3>
         <small className='date'>31 July</small>
         <h3>Poetry Reading by Jane Hirshfield</h3>
         </div>
         </div>
        


    <div className='search' ref={scrolltoRef}>
        <div class="sec-center"> 	
	  	  <input class="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
	  	  <label class="for-dropdown" for="dropdown">Categories <i class="uil uil-arrow-down"></i></label>
  		  <div class="section-dropdown"> 
  			<a href="#"> By Name <i class="uil uil-arrow-right"></i></a>
		  	<input class="dropdown-sub" type="checkbox" id="dropdown-sub" name="dropdown-sub"/>
		  	<label class="for-dropdown-sub" for="dropdown-sub">By College <i class="uil uil-plus"></i></label>
  			<a href="#">By Branch <i class="uil uil-arrow-right"></i></a>
  			<a href="#">By Batch-Year <i class="uil uil-arrow-right"></i></a>
  		  </div>
        
  	    </div>
           <div className='search-bar'> 
            <input type='text' className='search-here' placeholder='Search in All Categories'/>
           </div>
            
     </div>

        <div className='about-us' ref={ref}>
            <footer>
                <h3>About Us</h3>

                <p> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi </p>
                <p className='copyright'>Copyright @2023 | Designed With by Takniki Wiz</p>
            </footer>
            
        </div>


      </div>
       
       
        
            
    );
}
export default Home