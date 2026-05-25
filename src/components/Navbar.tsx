"use client"

import Link from "next/link";
import Image from "next/image";
// import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";



interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}


const NavbarSidebar = ({ open,onOpenChange} : Props) => {
    const items = [
        {
            href: "/",
            children: "Work"
        },
        // {
        //     href: "/#section-features",
        //     children: "Features"
        // },
        // {
        //     href: "/about",
        //     children: "About"
        // },
        {
            href: "/contact",
            children: "Contact"
        }
    ]

    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent
          side="left"
          className="p-0 transition-none bg-white/60 backdrop-blur-sm border-b border-gray-200"
          >
          <SheetHeader className="p-4 border-b items-center justify-center">
            {/* <Image src="/dm_logo.png" width={150} height={150} alt="" className=" my-[50px]"/> */}
            <Image src="/raed_logo.png" width={150} height={150} alt="" className=" my-[50px]"/>
          <div className="flex items-center">
              <SheetTitle className="text-black">
                Menu
              </SheetTitle>
          </div>
          </SheetHeader>
          <ScrollArea>
            <div className="flex justify-center items-center flex-col">
            {items.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => onOpenChange(false)} className="w-full p-4 hover:bg-black hover:text-white text-base text-center font-medium">
                  {item.children}
              </Link>
            ))}
            
            <form action="/search" method="get" className="relative py-30">
              {/* <label htmlFor="site-search" className="text-black">Search</label> */}
              <input
                id="site-search"
                name="q"
                // value={query}
                // onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className=" border border-gray-200 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </form>
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>  
    )
}

export default NavbarSidebar