import React from "react";

function Contact(props) {

    return (
    <div>
            <div class="topcontainer">
                     <div class="row">
                        
                            <div class="col-sm">

                        
                        <p>Contact</p>
                            
                        <hr></hr>
                        <form>
                            <p>Email: jonathanmauro16@yahoo.com</p>
                            <p>Phone: 913-638-8269</p>
                                
                            <div class="form-group">
                                <label for="fname">Name</label>
                                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                    
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="Your email.."></input>
                    
                                <label for="subject">Subject</label>
                                <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                    
                                <input type="submit" value="Submit"></input>
                            </div>
                        </form>
                    </div>
                </div>
             </div>
            
         </div>                
 





)
}

export default Contact;