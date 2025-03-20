import React from "react";
import  "./style.css";
import LogTable from "./LogTable";
export default function Body(){

    return(
        <>
        <section className="w-100 px-4 py-5" >
            <div className="row d-flex justify-content-center">
                <div className="col col-md-9 col-lg-7 col-xl-6">
                    <div className="card">
                        <div className="card-header">
                            <div className="d-flex p-2 justify-content-center ">
                                <h5 className="status-success">FRAMS </h5>
                                <h5 > - Facial Recognition Attendance Monitoring System</h5>
                            </div>
                            
                        </div>
                        <div className="card-body p-4">

                        <div className="d-flex">
                            
                            <div className="justify-content-center center-img">
                            
                                <img src="https://scontent.fmnl4-3.fna.fbcdn.net/v/t39.30808-6/441606007_7740397599374027_6708525384081313800_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeEL_I9g9fzPxavktKBE4AuRdB8OKR-JTwh0Hw4pH4lPCKoAKh7JB8dsFEWT91XDXtz03G6tR8nKdpsppk5Pz0mH&_nc_ohc=knYil_3oR3UQ7kNvgH3iqzv&_nc_oc=Adgp7eKG_BEzVNOcI2lC917_AU61_xYIuW9pl4kAPaw1gw_ysUMzV6t5HB_HcAHN-bbXIfDDDR8_pHeTEDUYmKvR&_nc_zt=23&_nc_ht=scontent.fmnl4-3.fna&_nc_gid=UbepJKlz786-LvJWsOwnAA&oh=00_AYEJwLSQe6AB9waeI-cdRBbv0YH3LX9SONm5SmPFiTddxQ&oe=67DF7620"
                                alt="Generic placeholder image" className="rounded mx-auto d-block"/>
                            </div>
                            <div className="flex-grow-1 ms-3">
                            <h5 className="mb-2 pb-1 status-success">LOGGED IN</h5>
                            
                            <div className="justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                                <h3 className="mb-1 pb-2"> CL-2024-007</h3>
                                <h4 className="mb-1">Kenneth Omiping</h4>
                                <p className="mb-0 ms-1"> <i><b>University Lecturer</b></i></p>
                                <p className="mb-0 ms-1"><i>College of Information & Computing Sciences</i></p>
                                <p className="mb-0 ms-1"><i>omiping.kenneth@marsu.edu.ph</i></p>
                            </div>
                            
                            </div>
                        </div>

                        <LogTable />
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
        )
}