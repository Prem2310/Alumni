import React from "react";
const Profile=({token})=>{
    return(

        <div>
            <h1>Your Details:-</h1>
           Fullname:{token.user.user_metadata.full_name}
           Email:{token.user.user_metadata.email}
           Number:{token.user.user_metadata.number}
           College:{token.user.user_metadata.college}
           Branch:{token.user.user_metadata.branch}
           Year:{token.user.user_metadata.year}
           About:{token.user.user_metadata.about}
           City:{token.user.user_metadata.city}
           State:{token.user.user_metadata.state}
           Code:{token.user.user_metadata.code}
           </div>
    )
}
export default Profile