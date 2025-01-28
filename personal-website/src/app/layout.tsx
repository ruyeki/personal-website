import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import "./globals.css";

interface LayoutProps{
  children: ReactNode;
  loading?:boolean;
}

  const Layout : React.FC<LayoutProps> = ({children, loading = false}) => {
    return (
      <div >
        {loading ? ( 
          <p>Loading...</p> ):( 
          <div>
            <NavBar />
            {children}
          </div>
        )
        }
        </div>
    );
  
  }

  export default Layout;